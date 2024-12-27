import { walk } from "https://deno.land/std/fs/walk.ts";

// Configuration
const sourceDir = "../build/_deps/ctgui-src/include";
const functionPattern =
  /CTGUI_API\s(?<returnType>(?:\w+\**\s+)+)(?<functionName>\w+)\((?<parameters>[\w\s,*()]*)\)/i;
const predefinedStructPattern = /CTGUI_API (\w+) (\w+)/i;

const functionDeclarations = [];
const structDeclarations = [];
const returnTypes = new Set();

async function searchFiles() {
  const decoder = new TextDecoder("utf-8");

  for await (const entry of walk(sourceDir, {
    includeDirs: false,
    followSymlinks: true,
  })) {
    const content = await Deno.readFile(entry.path);
    const text = decoder.decode(content);

    text.split("\n").forEach((line) => {
      if (functionPattern.test(line)) {
        const match = line.match(functionPattern);

        if (!match || !match.groups) return;

        functionDeclarations.push({
          path: entry.path,
          line: match?.[0],
          groups: match?.groups,
        });

        const returnType = match?.groups.returnType.trim();

        if (!returnType.includes("*") && returnType.startsWith("tgui"))
          returnTypes.add(returnType);

        return;
      }

      if (predefinedStructPattern.test(line)) {
        const match = line.match(predefinedStructPattern);

        structDeclarations.push({
          path: entry.path,
          line: line.match(predefinedStructPattern)?.[0],
        });

        return;
      }
    });
  }
}

// Run the search
await searchFiles();

const functionNames = functionDeclarations.map((a) => a.groups.functionName);
functionNames.sort();

Deno.writeFileSync(
  "extern-list.txt",
  new TextEncoder().encode(functionNames.join("\n"))
);

console.log("EXTERN Functions: ", functionDeclarations.length);
console.log("EXTERN Structs: ", structDeclarations.length);
