const decoder = new TextDecoder();
const encoder = new TextEncoder();

const functions = [];
const structs = [];

async function processAst() {
  const chunks = [];
  for await (const chunk of Deno.stdin.readable) {
    chunks.push(decoder.decode(chunk));
  }

  try {
    const ast = JSON.parse(chunks.join(""));

    let count = 0;

    ast.inner.forEach((node) => {
      if (
        node.storageClass === "extern" &&
        (node.kind === "FunctionDecl" || node.kind === "VarDecl") &&
        (node.loc.includedFrom.file.includes("/ctgui-src/include/") ||
          node.loc.includedFrom.file === "<stdin>") // because source is passed via stdin
      ) {
        count++;

        if (node.kind === "FunctionDecl") functions.push(node.name);
        else structs.push(node.name);
      }
    });

    functions.sort();
    Deno.writeFileSync(
      "available-list.txt",
      encoder.encode(functions.join("\n"))
    );

    console.log("Available Functions: ", functions.length);
    console.log("Available Structs: ", structs.length);

    // Customize processing here:
    // console.log(JSON.stringify(ast, null, 2));
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    Deno.exit(1);
  }
}

await processAst();
