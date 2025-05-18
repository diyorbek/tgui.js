import { CTGUI_SYMBOLS } from "./ctguiSymbols.ts";

type Library = Deno.DynamicLibrary<typeof CTGUI_SYMBOLS>;

export type ResultType<T extends keyof Library["symbols"]> = ReturnType<
  Library["symbols"][T]
>;

let CTGUI_LIB: Library | null = null;

export function initDynamicLibrary(): void {
  const libPath = getLibraryPath();
  const lib = Deno.readFileSync(libPath);
  const tempPath = Deno.makeTempFileSync();
  Deno.writeFileSync(tempPath, lib);

  addEventListener("unload", () => {
    console.log("Cleaning up temp files before exit...");
    Deno.removeSync(tempPath);
  });

  if (CTGUI_LIB) return;

  CTGUI_LIB = Deno.dlopen(tempPath, CTGUI_SYMBOLS);
}

export function accessLib(): Library {
  if (!CTGUI_LIB)
    throw new Error(
      "Library is not initialized. Call `initDynamicLibrary()` before accessing the library."
    );

  return CTGUI_LIB;
}

export function closeDynamicLibrary(): void {
  CTGUI_LIB?.close();
  CTGUI_LIB = null;
}

function getLibraryPath(): string {
  const mainModulePath = Deno.mainModule.replace("file://", "").split("/");
  mainModulePath.pop();

  return mainModulePath.join("/") + "/libctgui";
}
