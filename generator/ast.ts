import predefinedTypeMaps from "./type-map-pre.json" with { type: "json" };

const decoder = new TextDecoder();
const encoder = new TextEncoder();

let ast: Ast;

const functions: string[] = [];
const structs: string[] = [];

const functionDeclarations = [];

function getNativeType(resultType: string): any {
  if (predefinedTypeMaps[resultType]) {
    return predefinedTypeMaps[resultType];
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
            inner.type!.qualType||inner.type!.desugaredQualType 
          ),
        }));
    }
  }

  return resultType;
}

const typeMap = new Map();

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

          typeMap.set(returnType, getNativeType(returnType));

          const parameters = node.inner
            .filter((inner) => inner.kind === "ParmVarDecl")
            .map((inner) => {
              const type = inner.type!.qualType.split(/\(.*\)/)[0].trim();
              typeMap.set(type, getNativeType(type));

              return {
                name: inner.name,
                nativeType: getNativeType(type),
                type,
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

await processAst();

Deno.writeFileSync(
  "function-declarations.json",
  encoder.encode(JSON.stringify(functionDeclarations, null, 2))
);

Deno.writeFileSync(
  "type-map.json",
  encoder.encode(
    JSON.stringify(
      Object.fromEntries([...typeMap.entries()].toSorted()),
      null,
      2
    )
  )
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
