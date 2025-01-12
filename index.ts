import { CSFML_SYMBOLS } from "./symbols/csfmlSymbols.ts";
import { CTGUI_SYMBOLS } from "./symbols/ctguiSymbols.ts";

export * from "./utils.ts";

const libName = "libctgui";
const libExt = "dylib";
const libPath = `${import.meta.dirname}/build/${libName}.${libExt}`;

const lib = Deno.readFileSync(libPath);
const tempPath = Deno.makeTempFileSync({
  prefix: libName,
  suffix: libExt,
});
Deno.writeFileSync(tempPath, lib);

addEventListener("unload", () => {
  Deno.removeSync(tempPath);
});

export const CTGUI_LIB = Deno.dlopen(tempPath, {
  ...CTGUI_SYMBOLS,
  ...CSFML_SYMBOLS,
});
