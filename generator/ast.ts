import { TYPE_MAP, type StructMeta } from "./typeMap.ts";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

let ast: Ast;

const functions: string[] = [];
const structs: string[] = [];

const functionDeclarations = [];

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
): Deno.NativeResultType {
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

  try {
    ast = JSON.parse(chunks.join(""));

    let count = 0;

    ast.inner.forEach((node) => {
      if (
        node.storageClass === "extern" &&
        (node.kind === "FunctionDecl" || node.kind === "VarDecl") &&
        (node.loc.includedFrom.file.includes("/ctgui-src/include/") ||
          node.loc.includedFrom.file === "<stdin>") // because source is passed via stdin
      ) {
        count++;

        if (node.kind === "FunctionDecl") {
          functions.push(node.name);

          const returnType = node.type.qualType.split(/\(.*\)/)[0].trim();

          const parameters = node.inner
            .filter((inner) => inner.kind === "ParmVarDecl")
            .map((inner) => {
              return {
                name: inner.name,
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

    functions.sort();
    Deno.writeFileSync(
      "available-list.txt",
      encoder.encode(functions.join("\n"))
    );

    console.log("Available Functions: ", functions.length);
    console.log("Available Structs: ", structs.length);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    Deno.exit(1);
  }
}

function generateSymbols() {
  const symbols = {};

  functionDeclarations.forEach((declaration) => {
    symbols[declaration.name] = {
      parameters: declaration.parameters.map((param) =>
        createNativeType(param.nativeType)
      ),
      result: createNativeType(declaration.result),
    };
  });

  Deno.writeFileSync(
    `${Deno.cwd()}/../symbols.ts`,
    encoder.encode(
      `export const TGUI_LIB = Deno.dlopen("build/libTGUIJS.dylib", ${JSON.stringify(
        symbols,
        null,
        2
      )});`
    )
  );
}

await processAst();

generateSymbols();

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
