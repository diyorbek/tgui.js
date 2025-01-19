import { accessLib, initDynamicLibrary } from "../mod.ts";

const libName = "libctgui-ext";
const libExt = ".dylib";
const libPath = `${import.meta.dirname}/${libName}${libExt}`;

const lib = Deno.readFileSync(libPath);
const tempPath = Deno.makeTempFileSync({
  prefix: libName,
  suffix: libExt,
});
Deno.writeFileSync(tempPath, lib);

addEventListener("unload", () => {
  Deno.removeSync(tempPath);
});

initDynamicLibrary(libPath);

export const CTGUI_LIB = accessLib();
