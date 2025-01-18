import { type StructMeta, TYPE_MAP } from "./typeMap.ts";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

let ast: Ast;

const functions: string[] = [];
const structs: string[] = [];

const functionDeclarations: any[] = [];
// const structDeclarations: Record<string, any> = {};
const enumDeclarations: Record<string, any> = {};

function getNativeType(resultType: string): any {
  if (TYPE_MAP[resultType]) {
    return TYPE_MAP[resultType];
  }

  if (resultType.match(/\(.*\)/)) {
    return "function";
  }

  if (resultType.includes("*")) {
    return "pointer";
  }

  if (resultType !== "void") {
    const nodeIdx = ast.inner.findIndex((node) => node.name === resultType);
    const node = ast.inner[nodeIdx];

    if (node?.type.qualType.startsWith("enum")) {
      return getNativeType("int");
    }

    if (node?.type.qualType.startsWith("struct")) {
      return ast.inner[nodeIdx - 1].inner
        .filter((inner) => inner.kind === "FieldDecl")
        .map((inner) => ({
          name: inner.name,
          type: inner.type?.desugaredQualType || inner.type!.qualType,
          nativeType: getNativeType(
            inner.type!.qualType || inner.type!.desugaredQualType
          ),
        }));
    }
  }

  return resultType;
}

function createNativeType(
  meta: StructMeta[] | Deno.NativeType
): Deno.NativeType {
  if (typeof meta === "string") {
    return meta;
  }

  return {
    struct: (meta as StructMeta[]).map((field) => {
      return createNativeType(field.nativeType);
    }),
  };
}

async function processAst() {
  const chunks = [];
  for await (const chunk of Deno.stdin.readable) {
    chunks.push(decoder.decode(chunk));
  }

  ast = JSON.parse(chunks.join(""));

  ast.inner.forEach((node) => {
    if (
      node.storageClass === "extern" &&
      (node.kind === "FunctionDecl" || node.kind === "VarDecl") &&
      (node.loc.includedFrom.file.includes("/ctgui-src/include/") ||
        node.loc.includedFrom.file === "<stdin>") // because source is passed via stdin
    ) {
      if (node.kind === "FunctionDecl") {
        functions.push(node.name);

        const returnType = node.type.qualType.split(/\(.*\)/)[0].trim();

        const parameters = node.inner
          .filter((inner) => inner.kind === "ParmVarDecl")
          .map((inner, i) => {
            return {
              name: inner.name || `arg${i}`,
              nativeType: getNativeType(inner.type!.qualType),
              type: inner.type!.qualType,
            };
          });

        functionDeclarations.push({
          name: node.name,
          result: getNativeType(returnType),
          returnType,
          parameters,
        });
      } else {
        structs.push(node.name);
      }
    }
  });

  Deno.writeFileSync(
    "available-list.txt",
    encoder.encode(functions.toSorted().join("\n"))
  );

  // console.log("Available Functions: ", functions.length);
  // console.log("Available Structs: ", structs.length);
}

function getStructDefinition(structName: string) {
  const structNode = TYPE_MAP[structName];

  if (!(structNode instanceof Array)) {
    return "";
  }

  const definiton = structNode
    .map((field) => ` ${field.name}: ${field.type}`)
    .join(";");
  return ` {${definiton} }`;
}

const createComment = (declaration: any) => `/**
 * @original \`\`\`c
 * ${declaration.returnType} ${declaration.name}(${declaration.parameters
  .map((param: any) => `${param.type} ${param.name}`)
  .join(", ")});
 * \`\`\`
 *
 * 
 * @param ${declaration.parameters
   .map(
     (param: any) =>
       `${param.name} \`${param.type.replace("tgui", "")}${getStructDefinition(
         param.type
       )}\``
   )
   .join("\n * @param ")}
 * @returns \`${declaration.returnType.replace(
   "tgui",
   ""
 )}${getStructDefinition(declaration.returnType)}\`
 */`;

function generateSymbols() {
  const symbols: any = {};
  const comments: any = {};
  const skipKeys = ["struct", "parameters", "result"];

  functionDeclarations.forEach((declaration) => {
    comments[declaration.name] = createComment(declaration);
    symbols[declaration.name] = {
      parameters: declaration.parameters.map((param: any) =>
        createNativeType(param.nativeType)
      ),
      result: createNativeType(declaration.result),
    };
  });

  const symbolsLiteral = JSON.stringify(symbols).replace(/"([^"]+)":/g, "$1:");
  const fileContents =
    `export const CTGUI_SYMBOLS = ${symbolsLiteral} as const;`.replaceAll(
      /(\w+):/g,
      (match, p1) => {
        if (skipKeys.includes(p1)) {
          return match;
        }

        return `\n${comments[p1]}\n${match}`;
      }
    );

  Deno.stdout.writeSync(encoder.encode(fileContents));
}

// var a = {
//   /**
//    * This is b
//    */
//   b: 5,
// };

await processAst();

generateSymbols();

Deno.writeFileSync(
  "funcs.json",
  encoder.encode(JSON.stringify(functionDeclarations))
);

interface Ast {
  inner: Node[];
}

interface Node {
  id: string;
  kind: string;
  loc: Location;
  range: {
    begin: RangePoint;
    end: RangePoint;
  };
  name: string;
  mangledName: string;
  type: {
    qualType: string;
  };
  storageClass: string;
  inner: InnerElement[];
}

interface Location {
  offset: number;
  line: number;
  presumedLine: number;
  col: number;
  tokLen: number;
  includedFrom: {
    file: string;
  };
}

interface RangePoint {
  offset: number;
  col: number;
  tokLen: number;
  includedFrom: {
    file: string;
  };
}

interface InnerElement {
  id: string;
  kind: string;
  loc?: Location;
  range: {
    begin: RangePoint;
    end: RangePoint;
  };
  name?: string;
  type?: {
    desugaredQualType: string;
    qualType: string;
  };
}
