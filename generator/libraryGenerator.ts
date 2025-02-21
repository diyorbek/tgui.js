import { FUNCTION_DECLARATIONS } from "./declarations.ts";
import { type StructMeta, C_NATIVE_TYPE_MAP } from "./typeMap.ts";
import { createComment, createNativeType } from "./utils.ts";

const encoder = new TextEncoder();

function createInheritanceGraph() {
  const command = new Deno.Command("grep", {
    args: [
      "-R",
      "inherits",
      `${
        import.meta.dirname
      }/../build/_deps/ctgui-src/code-generator/templates`,
    ],
  });
  const { stdout } = command.outputSync();
  const output = new TextDecoder().decode(stdout);
  const inheritanceGraph: Record<string, string[]> = {};
  const childrenGraph: Record<string, string[]> = {};
  const inheritanceRank: Record<string, number> = {};

  const data = output
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split(":inherits"))
    .map(([path, cls]) => ({
      child: path.split("/").at(-1)!.replace(".desc", ""),
      parent: cls.trim(),
    }));

  data.forEach(({ child, parent }) => {
    childrenGraph[parent] ??= [];
    childrenGraph[parent].push(child);
  });

  const visited = new Set<string>();
  function dfs(parent: string) {
    if (visited.has(parent)) return inheritanceRank[parent];

    visited.add(parent);
    inheritanceRank[parent] = childrenGraph[parent]
      ? childrenGraph[parent].length
      : 0;

    if (inheritanceRank[parent] === 0) return 0;

    for (const child of childrenGraph[parent]) {
      inheritanceRank[parent] += dfs(child);
    }

    return inheritanceRank[parent];
  }

  data.forEach(({ child, parent }) => {
    // @ts-ignore
    inheritanceGraph[child] ??= [];
    // @ts-ignore
    inheritanceGraph[child].push(parent);
  });

  return { dfs, inheritanceGraph, inheritanceRank };
}

const { dfs, inheritanceGraph, inheritanceRank } = createInheritanceGraph();
// console.log(inheritanceGraph);
// console.log(inheritanceRank);

const names: Record<
  string,
  {
    methods?: Array<(typeof FUNCTION_DECLARATIONS)[number]>;
    fields?: StructMeta[];
  }
> = {};

Object.keys(C_NATIVE_TYPE_MAP).forEach((struct) => {
  const declName = struct !== "tgui" ? struct.replace("tgui", "") : struct;

  if (typeof C_NATIVE_TYPE_MAP[struct] !== "string") {
    names[declName] ??= { methods: [] };
    names[declName].fields = C_NATIVE_TYPE_MAP[struct] as StructMeta[];
  }
});

FUNCTION_DECLARATIONS.forEach((func) => {
  const [struct, method] = func.name.split("_");

  if (!method) return;

  const declName =
    struct !== "tgui"
      ? struct.replace("tgui", "").replace("CSFMLGraphics", "")
      : struct;

  names[declName] ??= { methods: [] };
  names[declName].methods!.push(func);

  if (typeof C_NATIVE_TYPE_MAP[struct] !== "string") {
    names[declName].fields = C_NATIVE_TYPE_MAP[struct] as StructMeta[];
  }
});

// Deno.writeFileSync("ui.json", encoder.encode(JSON.stringify(names)));

const DENO_TYPE_MAP = {
  i8: "number",
  u8: "number",
  i16: "number",
  u16: "number",
  i32: "number",
  u32: "number",
  i64: "bigint",
  u64: "bigint",
  usize: "bigint",
  isize: "bigint",
  f32: "number",
  f64: "number",
  bool: "boolean",
  void: "void",
  buffer: "BufferSource",
  pointer: "Deno.PointerValue<unknown>",
  function: "Deno.PointerValue<unknown>",
};

function getNativeTypeDecl(nativeType: Deno.NativeType | StructMeta[]) {
  // if (typeof nativeType === "object") return "Uint32Array";
  if (typeof nativeType === "object") return "BufferSource";
  return DENO_TYPE_MAP[nativeType];
}

function getJSTypeDecl(
  nativeType: Deno.NativeType | StructMeta[],
  cType: string
) {
  if (typeof nativeType === "object") return cType.replace("tgui", "");
  return DENO_TYPE_MAP[nativeType];
}

let code = `import { accessLib, type ResultType } from "./ctgui.ts";
import { deserializeStruct, type NumberLikeType, serializeStruct, type StructDef } from "./utils/structToBuffer.ts";\n\n`;

const CTGUI_LIB = "accessLib()";

// Populate inheritanceRank via dfs
Object.keys(names).forEach((name) => dfs(name));

Object.entries(names)
  .toSorted(([declA], [declB]) => {
    const a = inheritanceRank[declA] || 0;
    const b = inheritanceRank[declB] || 0;

    return b - a;
  })
  .forEach(([declName, body]) => {
    const parent = inheritanceGraph[declName]?.[0];
    const inheritance = parent && parent in names ? `extends ${parent}` : "";
    const hasChild = !!inheritanceRank[declName];
    const isIntercessor = !!parent && hasChild;

    /** Creates fields with constructor.
     *
     * The generated constructor may conflict with classes with _create/_copy method.
     *
     * Also, structdefs are duplicated in the generated code:
     * - in CTGUI_SYMBOLS
     * - in Class struct definitions
     * */
    function createFields() {
      if (!body.fields) return "";

      const structDef = createNativeType(body.fields);
      const structDefString = JSON.stringify(
        typeof structDef === "object" ? structDef.struct : structDef
      );

      const deserializeFunc = `
        static deserialize(buffer: BufferSource): ${declName};
        static deserialize(flatValues: NumberLikeType[]): ${declName};
        // deno-lint-ignore no-explicit-any
        static deserialize(source: any): ${declName} {
          let values;
      
          if (source instanceof Array) {
            values = source;
          } else {
            values = deserializeStruct(${declName}.STRUCT_DEF, source);
          }

          return new ${declName}(
            ${body.fields
              .map((field) => {
                if (field.nativeType instanceof Array) {
                  const className = field.type.replace("tgui", "");
                  return `${className}.deserialize(values)`;
                }

                return `values.shift()! as ${getJSTypeDecl(
                  field.nativeType,
                  field.type
                )}`;
              })
              .join(",\n")}
          );
      }`;

      const fields = body.fields.map((field) => {
        if (!(field.type in C_NATIVE_TYPE_MAP)) {
          // console.log(field.type);
        }

        return `${field.name}: ${getJSTypeDecl(field.nativeType, field.type)}`;
      });

      const constructorFunc = `constructor(${fields.join(",")}) { 
          ${body.fields.map((f) => `this.${f.name} = ${f.name}`).join(";")} 
        }`;

      return `static STRUCT_DEF: StructDef = ${structDefString}\n
        ${deserializeFunc}\n
        ${fields.join("\n")}\n
        ${constructorFunc}
        
        get buffer(): BufferSource {
          return serializeStruct(${declName}.STRUCT_DEF, this);
        }`;
    }

    function checkConstructors() {
      let hasDefaultConstructor = false;
      let hasCopyConstructor = false;

      body.methods?.forEach((method) => {
        if (method.name.endsWith("create")) {
          hasDefaultConstructor = true;
        }

        if (method.name.endsWith("copy")) {
          hasCopyConstructor = true;
        }
      });

      return { hasDefaultConstructor, hasCopyConstructor };
    }

    function correctNaming(name: string) {
      if (name === "function") return "callback";
      if (isLocalPointerName(name)) return "this.pointer";
      return name;
    }

    function getMethodName(declName: string, funcName: string) {
      return funcName
        .replace("tgui", "")
        .replace("CSFMLGraphics", "")
        .replace(declName, "")
        .replace("_", "");
    }

    function isLocalPointerName(name: string) {
      return (
        name === "SFMLEvent" ||
        (name === "widget" && declName === "ButtonBase") ||
        (name === "widget" && declName === "CustomWidget") ||
        (name === "widget" && declName === "FileDialog") ||
        (name === "widget" && declName === "ListView") ||
        (name === "widget" && declName === "MenuBar") ||
        (name === "widget" && declName === "TabContainer") ||
        (name === "widget" && declName === "TreeView") ||
        (name === "widget" && declName === "Widget") ||
        (name === "gui" && declName === "Gui") ||
        (name === "window" && declName !== "Gui") ||
        (name.startsWith("this") &&
          !/sprite|texture|font/i.test(name) &&
          name !== "thisScrollbarAccessor")
      );
    }

    function createParams(
      parameters: Array<
        (typeof FUNCTION_DECLARATIONS)[number]
      >[number]["parameters"]
    ) {
      return parameters
        .filter((p) => !isLocalPointerName(p.name))
        .map((p) => {
          if (!(p.type in C_NATIVE_TYPE_MAP)) {
            // console.log(p.type);
          }

          return (
            correctNaming(p.name) +
            ": " +
            getJSTypeDecl(p.nativeType as Deno.NativeType, p.type)
          );
        })
        .join(",");
    }

    function createArgs(
      parameters: Array<
        (typeof FUNCTION_DECLARATIONS)[number]
      >[number]["parameters"]
    ) {
      return parameters
        .map((p) => {
          const argName = correctNaming(p.name);
          if (p.nativeType instanceof Array) return argName + ".buffer";
          return argName;
        })
        .join(",");
    }

    function checkOverride(declName: string, methodName: string) {
      const parent = inheritanceGraph[declName]?.[0];

      if (!parent || !(parent in names)) return;

      const parentMethod = names[parent].methods?.find(
        ({ name }) => getMethodName(parent, name) === methodName
      );

      if (!parentMethod) return checkOverride(parent, methodName);

      return parentMethod;
    }

    // For the BoxLayout and BoxLayoutRatios classes' "add" and "insert" method errors
    function createMethodOverload(
      declName: string,
      methodName: string,
      method: Array<(typeof FUNCTION_DECLARATIONS)[number]>[number]
    ) {
      const overload = checkOverride(declName, methodName);

      if (!overload) return "";

      const a = method.parameters
        .map((p) => getNativeTypeDecl(p.nativeType as Deno.NativeType))
        .join(",");
      const b = overload.parameters
        .map((p) => getNativeTypeDecl(p.nativeType as Deno.NativeType))
        .join(",");

      if (a === b) return "override ";

      const params = createParams(overload.parameters);

      return `override ${methodName}(${params}); override `;
    }

    function createMethods() {
      const { hasDefaultConstructor, hasCopyConstructor } = checkConstructors();

      return (
        body.methods
          ?.map((method) => {
            const params = createParams(method.parameters);
            const args = createArgs(method.parameters);
            const name = getMethodName(declName, method.name);
            const comment = createComment(method);
            const isConstructor = name === "create";
            const isCopyConstructor = name === "copy";
            let jsOverload, nativeOverload;

            const pointerDecl = `
              protected ptr: Deno.PointerValue<unknown>;\n
              get pointer(): Deno.PointerValue<unknown> { return this.ptr }
            `;

            if (
              isConstructor ||
              (isCopyConstructor && !hasDefaultConstructor)
            ) {
              if (isIntercessor && !params) {
                return `${comment}\nconstructor(ptr?: Deno.PointerValue<unknown>) {
                  super(ptr ? ptr : ${CTGUI_LIB}.symbols.${method.name}());
                }`;
              }

              if (inheritance) {
                return `${comment}\nconstructor(${params}) { super(${CTGUI_LIB}.symbols.${method.name}(${args})); }`;
              }

              if (hasCopyConstructor && !params) {
                return `${pointerDecl}\n
                ${comment}
                constructor(other?: Deno.PointerValue<unknown>) { 
                  if (typeof other === 'undefined') { 
                    this.ptr = ${CTGUI_LIB}.symbols.${method.name}(); 
                  } else {
                    this.ptr = this.copy(other); // to make TS happy about uninitialized field
                  }
                }`;
              }

              return `${pointerDecl}\n
                ${comment}
                constructor(${params}) { this.ptr = ${CTGUI_LIB}.symbols.${method.name}(${args}); }`;
            }

            if (isCopyConstructor) {
              const override = inheritance ? "override" : "";
              return `${comment}\n${override} ${name}(${params}): Deno.PointerValue<unknown> { return this.ptr = ${CTGUI_LIB}.symbols.${method.name}(${args}); }`;
            }

            // custom exceptional cases
            if (declName === "BoxLayoutRatios" && name === "add") {
              return `override add(
                  widget: Deno.PointerValue<unknown>,
                  widgetName: BufferSource,
                ): void;
                override add(
                  widget: Deno.PointerValue<unknown>,
                  ratio: number,
                  widgetName: BufferSource,
                ): void;
                override add(
                  widget: Deno.PointerValue<unknown>,
                  arg1: any,
                  arg2?: any,
                ): void {
                  if (typeof arg1 === "number") {
                    return ${CTGUI_LIB}.symbols.${method.name}(
                      this.pointer,
                      widget,
                      arg1, // ratio
                      arg2,
                    );
                  }
                
                  return ${CTGUI_LIB}.symbols.${method.name}(
                    this.pointer,
                    widget,
                    1, // ratio
                    arg1,
                  );
                }`;
            }
            if (declName === "BoxLayoutRatios" && name === "insert") {
              return `override insert(
                  index: bigint,
                  widget: Deno.PointerValue<unknown>,
                  widgetName: BufferSource
                ): void;
                override insert(
                  index: bigint,
                  widget: Deno.PointerValue<unknown>,
                  ratio: number,
                  widgetName: BufferSource
                ): void;
                override insert(
                  index: bigint,
                  widget: Deno.PointerValue<unknown>,
                  arg1: any,
                  arg2?: any
                ) {
                  if (typeof arg1 === "number") {
                    return ${CTGUI_LIB}.symbols.${method.name}(
                      this.pointer,
                      index,
                      widget,
                      arg1, // ratio
                      arg2
                    );
                  }
                
                  return ${CTGUI_LIB}.symbols.${method.name}(
                    this.pointer,
                    index,
                    widget,
                    1, // ratio
                    arg1
                  );
                }`;
            }

            // const overload = createMethodOverload(declName, name, method);

            return `${comment}\n${name}(${params}): ResultType<'${method.name}'> { return ${CTGUI_LIB}.symbols.${method.name}(${args}); }`;
          })
          .join("\n\n") || ""
      );
    }

    code += `export class ${declName} ${inheritance} {
      ${createFields()}
      
      ${createMethods()}
    }\n\n`;
  });

Deno.stdout.writeSync(encoder.encode(code)) as Deno.FromNativeResultType;
