import { CTGUI_SYMBOLS } from "./symbols/ctguiSymbols.ts";

type Library = Deno.DynamicLibrary<typeof CTGUI_SYMBOLS>;

export function loadDynamicLibrary(path: string): Library {
  return Deno.dlopen(path, CTGUI_SYMBOLS);
}
