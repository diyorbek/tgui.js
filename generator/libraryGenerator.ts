import { FUNCTION_DECLARATIONS } from "./declarations.ts";
import { type StructMeta, TYPE_MAP } from "./typeMap.ts";

const encoder = new TextEncoder();

function createInheritanceGraph() {
  const command = new Deno.Command("grep", {
    args: ["-R", "inherits", "build/_deps/ctgui-src/code-generator/templates"],
  });
  const { stdout } = command.outputSync();
  const output = new TextDecoder().decode(stdout);
  const inheritanceGraph: Record<string, string[]> = {};
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
    inheritanceRank[parent] ??= 0;
    inheritanceRank[parent]++;
  });

  data.forEach(({ child, parent }) => {
    // @ts-ignore
    inheritanceGraph[child] ??= [];
    // @ts-ignore
    inheritanceGraph[child].push(parent);
  });

  return { inheritanceGraph, inheritanceRank };
}

const { inheritanceGraph, inheritanceRank } = createInheritanceGraph();
// console.log(inheritanceGraph);

const names: Record<
  string,
  {
    methods?: Array<(typeof FUNCTION_DECLARATIONS)[number]>;
    fields?: StructMeta[];
  }
> = {};

Object.keys(TYPE_MAP).forEach((struct) => {
  const declName = struct !== "tgui" ? struct.replace("tgui", "") : struct;

  if (typeof TYPE_MAP[struct] !== "string") {
    names[declName] ??= { methods: [] };
    names[declName].fields = TYPE_MAP[struct] as StructMeta[];
  }
});

FUNCTION_DECLARATIONS.forEach((func) => {
  const [struct, method] = func.name.split("_");

  if (!method) return;

  const declName = struct !== "tgui" ? struct.replace("tgui", "") : struct;

  names[declName] ??= { methods: [] };
  names[declName].methods!.push(func);

  if (typeof TYPE_MAP[struct] !== "string") {
    names[declName].fields = TYPE_MAP[struct] as StructMeta[];
  }
});
// console.log(Object.keys(names).toSorted().join("\n"));

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
  void: "undefined",
  buffer: "BufferSource",
  pointer: "Deno.PointerValue<unknown>",
  function: "Deno.PointerValue<unknown>",
};

function getNativeTypeDecl(nativeType: Deno.NativeType) {
  // if (typeof nativeType === "object") return "Uint32Array";
  if (typeof nativeType === "object") return "BufferSource";
  return DENO_TYPE_MAP[nativeType];
}

function getJSTypeDecl(nativeType: Deno.NativeType, cType: string) {
  if (typeof nativeType === "object") return cType.replace("tgui", "");
  return DENO_TYPE_MAP[nativeType];
}

let code = `import { CTGUI_LIB } from "./debug/index.ts";\n\n`;

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

    function createFields() {
      if (!body.fields) return "";

      const fields = body.fields.map((field) => {
        if (!(field.type in TYPE_MAP)) {
          console.log(field.type);
        }

        return `${field.name}: ${getNativeTypeDecl(
          field.nativeType as Deno.NativeType
        )}`;
      });

      const constructorFunc = `constructor(${fields.join(",")}) { 
      ${body.fields.map((f) => `this.${f.name} = ${f.name}`).join(";")} 
    }`;

      return `${fields.join("\n")}\n\n${constructorFunc}`;
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
        .replace(declName, "")
        .replace("_", "");
    }

    function isLocalPointerName(name: string) {
      return (
        // name === "event" ||
        (name === "widget" && declName === "Widget") ||
        (name === "gui" && declName !== "Gui") ||
        (name === "window" && declName !== "GuiCSFMLGraphics") ||
        (name.startsWith("this") && !/sprite|gui|texture|font/i.test(name))
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
          if (!(p.type in TYPE_MAP)) {
            // console.log(p.type);
          }

          return (
            correctNaming(p.name) +
            ": " +
            getNativeTypeDecl(p.nativeType as Deno.NativeType)
          );
        })
        .join(",");
    }

    function createArgs(
      parameters: Array<
        (typeof FUNCTION_DECLARATIONS)[number]
      >[number]["parameters"]
    ) {
      return parameters.map((m) => correctNaming(m.name)).join(",");
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
            const isConstructor = name === "create";
            const isCopyConstructor = name === "copy";
            let jsOverload, nativeOverload;

            const pointerDecl = `
              protected ptr: Deno.PointerValue<unknown>;\n
              get pointer() { return this.ptr }
            `;

            if (
              isConstructor ||
              (isCopyConstructor && !hasDefaultConstructor)
            ) {
              if (isIntercessor && !params) {
                return `constructor(ptr?: Deno.PointerValue<unknown>) {
                  super(ptr ? ptr : CTGUI_LIB.symbols.${method.name}());
                }`;
              }

              if (inheritance) {
                return `constructor(${params}) { super(CTGUI_LIB.symbols.${method.name}(${args})); }`;
              }

              if (hasCopyConstructor && !params) {
                return `${pointerDecl}
                constructor(other?: Deno.PointerValue<unknown>) { 
                  if (typeof other === 'undefined') { 
                    this.ptr = CTGUI_LIB.symbols.${method.name}(); 
                  } else {
                    this.ptr = this.copy(other); // to make TS happy about uninitialized field
                  }
                }`;
              }

              return `${pointerDecl}
                  constructor(${params}) { this.ptr = CTGUI_LIB.symbols.${method.name}(${args}); }`;
            }

            if (isCopyConstructor) {
              const override = inheritance ? "override" : "";
              return `${override} ${name}(${params}) { return this.ptr = CTGUI_LIB.symbols.${method.name}(${args}); }`;
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
                    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_add(
                      this.pointer,
                      widget,
                      arg1, // ratio
                      arg2,
                    );
                  }
                
                  return CTGUI_LIB.symbols.tguiBoxLayoutRatios_add(
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
                    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_insert(
                    this.pointer,
                      index,
                      widget,
                      arg1, // ratio
                      arg2
                    );
                  }
                
                  return CTGUI_LIB.symbols.tguiBoxLayoutRatios_insert(
                    this.pointer,
                    index,
                    widget,
                    1, // ratio
                    arg1
                  );
                }`;
            }

            // const overload = createMethodOverload(declName, name, method);

            return `${name}(${params}) { return CTGUI_LIB.symbols.${method.name}(${args}); }`;
          })
          .join("\n\n") || ""
      );
    }

    code += `export class ${declName} ${inheritance} {
    ${createFields()}
    
    ${createMethods()}
  }\n\n`;
  });

Deno.writeFileSync("ui.ts", encoder.encode(code));

class Z {
  constructor() {}
}

class A extends Z {
  constructor(other?: number);
  constructor(arg?: any) {
    if (typeof arg === "undefined") {
      super();
      return;
    }

    super();
  }
}
