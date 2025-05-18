const VERSION = [0, 0, 13];

function getBinaryName() {
  switch (Deno.build.os) {
    case "darwin":
      return Deno.build.arch === "aarch64"
        ? "libctgui-ext.dylib"
        : "libctgui-ext-x86_64.dylib";

    case "windows":
      return "ctgui-ext.dll";

    default:
      throw new Error("Unsupported OS: " + Deno.build.os);
  }
}

const res = await fetch(
  `https://github.com/diyorbek/tgui.js/releases/download/v${VERSION.join(
    "."
  )}/${getBinaryName()}`
);

Deno.writeFileSync("libctgui", await res.bytes());
