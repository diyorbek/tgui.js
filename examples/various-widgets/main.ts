import {
  closeDynamicLibrary,
  Gui,
  initDynamicLibrary,
  renderWindow,
  sfColor,
  SFMLEvent,
  SFMLEventUnion,
  sfVideoMode,
} from "@denative/ctgui";
import { runVariousWidgets } from "./variousWidgets.ts";

initDynamicLibrary(import.meta.dirname + "/libctgui");

function main() {
  const title = new TextEncoder().encode("Hello, World!\0");
  const mode = new sfVideoMode(800, 600, 32);
  const window = new renderWindow(mode, title, 7);
  const gui = new Gui(window.pointer);

  runVariousWidgets(gui);

  while (window.isOpen()) {
    const event = new SFMLEvent();

    while (window.pollEvent(event.pointer)) {
      const eventUnion = SFMLEventUnion.deserialize(event.convertToUnion());

      if (eventUnion.type === 0) window.close();

      gui.handleEvent(event.pointer);
    }

    const clearColor = new sfColor(255, 255, 255, 255);
    window.clear(clearColor);

    gui.draw();
    window.display();
    event.destroy();
  }

  gui.destroy();
  window.destroy();
}

main();
closeDynamicLibrary();
