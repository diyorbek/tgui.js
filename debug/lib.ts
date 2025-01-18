import { Button, Gui, GuiCSFMLGraphics, renderWindow, sfEvent } from "../ui.ts";
import { CTGUI_LIB } from "./index.ts";

export function encodeUTF32(str: string) {
  const utf32Array = new Uint32Array(str.length + 1); // +1 for null terminator

  for (let i = 0; i < str.length; i++) {
    utf32Array[i] = str.charCodeAt(i);
  }
  utf32Array[str.length] = 0; // Null terminator

  return utf32Array;
}

function main() {
  const title = new TextEncoder().encode("Hello, World!\0");
  const mode = new Uint32Array([800, 300, 32]);
  const window = new renderWindow(mode, title, 7);
  const sfGui = new GuiCSFMLGraphics(window.pointer);

  const button = new Button();
  button.setText(encodeUTF32("Hello, World!"));

  const gui = new Gui();
  gui.add(sfGui.pointer, button.pointer, encodeUTF32(""));

  while (window.isOpen()) {
    const event = new sfEvent();

    while (window.pollEvent(event.pointer)) {
      console.log("Event");
      sfGui.handleEvent(event.pointer);
    }

    window.clear(new Uint8Array([0, 100, 20, 255]));

    gui.draw(sfGui.pointer);
    window.display();
    event.destroy(event.pointer);
  }

  button.destroy();
  sfGui.destroy();
  window.destroy();
}

main();
CTGUI_LIB.close();
