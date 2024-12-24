const lib = Deno.dlopen("build/libTGUIJS.dylib", {
  createWindow: {
    parameters: ["u16", "u16", "buffer"],
    result: "pointer",
  },
  createGui: {
    parameters: ["pointer"],
    result: "pointer",
  },
  createEvent: {
    parameters: [],
    result: "pointer",
  },
  destroyEvent: {
    parameters: ["pointer"],
    result: "void",
  },
  getEventType: {
    parameters: ["pointer"],
    result: "u32",
  },
  isWindowOpen: {
    parameters: ["pointer"],
    result: "bool",
  },
  pollEvent: {
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  handleEvent: {
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  closeWindow: {
    parameters: ["pointer"],
    result: "void",
  },
  clearWindow: {
    parameters: ["pointer"],
    result: "void",
  },
  drawGui: {
    parameters: ["pointer"],
    result: "void",
  },
  displayWindow: {
    parameters: ["pointer"],
    result: "void",
  },
  runExample: {
    parameters: ["pointer"],
    result: "bool",
  },
});
console.log(lib);

const title = new TextEncoder().encode("Hello, World! \0");
const window = lib.symbols.createWindow(600, 200, title);
const gui = lib.symbols.createGui(window);

// lib.symbols.run(window, gui);

lib.symbols.runExample(gui);

while (lib.symbols.isWindowOpen(window)) {
  const event = lib.symbols.createEvent();

  while (lib.symbols.pollEvent(window, event)) {
    lib.symbols.handleEvent(gui, event);

    if (lib.symbols.getEventType(event) === 0) lib.symbols.closeWindow(window);
  }

  lib.symbols.clearWindow(window);
  lib.symbols.drawGui(gui);
  lib.symbols.displayWindow(window);

  lib.symbols.destroyEvent(event);
}

lib.close();
