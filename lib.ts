const lib = Deno.dlopen("build/libTGUIJS.dylib", {
  sfRenderWindow_create: {
    // parameters: [{ struct: ["u8", "u8", "u8"] }, "buffer", "u8"],
    parameters: [{ struct: ["u32", "u32", "u32"] }, "buffer", "u8"],
    result: "pointer",
  },
  sfRenderWindow_isOpen: {
    parameters: ["pointer"],
    result: "bool",
  },
  sfRenderWindow_display: {
    parameters: ["pointer"],
    result: "void",
  },
  renderWindow_create: {
    parameters: ["buffer"],
    result: "pointer",
  },
  mains: {
    parameters: [{ struct: ["u32", "u32", "u32"] }, "buffer", "u8"],
    result: "i32",
  },
});

console.log(lib);

const title = new TextEncoder().encode("Hello, World!");
const mode = new Uint32Array([800, 300, 32]);
// const window = lib.symbols.sfRenderWindow_create(mode, title, 7);

lib.symbols.mains(mode, title, 7);

// while (lib.symbols.sfRenderWindow_isOpen(window)) {
//   // lib.symbols.renderWindow_create();
//   // lib.symbols.mains(mode, title, 7);
//   lib.symbols.sfRenderWindow_display(window);
// }

lib.close();
