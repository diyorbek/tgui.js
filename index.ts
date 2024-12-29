import { CSFML_SYMBOLS } from "./bindings/csfmlSymbols.ts";
import { CTGUI_SYMBOLS } from "./bindings/ctguiSymbols.ts";

export * from "./utils.ts";

const libPath = import.meta.dirname + "/build/libTGUIJS.dylib";

export const CTGUI_LIB = Deno.dlopen(libPath, {
  ...CTGUI_SYMBOLS,
  ...CSFML_SYMBOLS,
});
