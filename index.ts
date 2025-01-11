import { CSFML_SYMBOLS } from "./symbols/csfmlSymbols.ts";
import { CTGUI_SYMBOLS } from "./symbols/ctguiSymbols.ts";

export * from "./utils.ts";

const libPath = import.meta.dirname + "/libctgui-d.1.5.0.dylib";

const lib = Deno.readFileSync(libPath);
const tempPath = Deno.makeTempFileSync({
  prefix: "libctgui-d.1.5.0",
  suffix: ".dylib",
});
Deno.writeFileSync(tempPath, lib);

addEventListener("unload", () => {
  Deno.removeSync(tempPath);
});

export const CTGUI_LIB = Deno.dlopen(tempPath, {
  ...CTGUI_SYMBOLS,
  ...CSFML_SYMBOLS,
});
