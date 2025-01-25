import {
  FloatRect,
  Gui,
  HorizontalWrap,
  renderWindow,
  sfColor,
  SFMLEvent,
  sfVideoMode,
} from "../mod.ts";
import { Button, CheckBox, SFMLEventUnion } from "../src/lib.ts";
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
  const mode = new sfVideoMode(800, 300, 64);
  const window = new renderWindow(mode, title, 7);
  const gui = new Gui(window.pointer);

  const cont = new HorizontalWrap();
  // cont.setSize(new Vector2f(200, 100));
  gui.setRelativeView(new FloatRect(0, 0, 1, 1));
  const button = new Button();
  button.setText(encodeUTF32("Hello, World!"));
  const checkbox = new CheckBox();
  checkbox.setText(encodeUTF32("Check me!"));

  cont.add(button.pointer, encodeUTF32(""));
  cont.add(checkbox.pointer, encodeUTF32(""));

  gui.add(cont.pointer, encodeUTF32(""));
  // cont.setRatio(button.pointer, 1 / 2);
  // runExample(gui);

  while (window.isOpen()) {
    const event = new SFMLEvent();

    while (window.pollEvent(event.pointer)) {
      const eventUnion = SFMLEventUnion.deserialize(event.convertToUnion());

      if (eventUnion.type === 0) window.close();

      console.log("Event", eventUnion);
      gui.handleEvent(event.pointer);
    }

    const clearColor = new sfColor(0, 100, 200, 255);
    window.clear(clearColor);

    gui.draw();
    window.display();
    event.destroy();
  }

  // button.destroy();
  gui.destroy();
  window.destroy();
}

main();
CTGUI_LIB.close();
