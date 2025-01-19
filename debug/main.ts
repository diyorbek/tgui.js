import {
  Button,
  Gui,
  GuiCSFMLGraphics,
  renderWindow,
  SFMLEvent,
} from "../mod.ts";
import { CTGUI_SYMBOLS } from "../src/ctguiSymbols.ts";
import { serializeStruct } from "../src/utils/structToBuffer.ts";
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
  const mode = serializeStruct(
    CTGUI_SYMBOLS.renderWindow_create.parameters[0].struct,
    [800, 300, 32]
  );
  const window = new renderWindow(mode, title, 7);
  const sfGui = new GuiCSFMLGraphics(window.pointer);

  const button = new Button();
  button.setText(encodeUTF32("Hello, World!"));

  const gui = new Gui();
  gui.add(sfGui.pointer, button.pointer, encodeUTF32(""));

  while (window.isOpen()) {
    const event = new SFMLEvent();

    while (window.pollEvent(event.pointer)) {
      console.log("Event");
      sfGui.handleEvent(event.pointer);
    }

    const clearColor = serializeStruct(
      CTGUI_SYMBOLS.renderWindow_clear.parameters[1].struct,
      [0, 100, 200, 255]
    );
    window.clear(clearColor);

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
