import { Gui, renderWindow, sfColor, SFMLEvent, sfVideoMode } from "../mod.ts";
import { SFMLEventUnion } from "../src/lib.ts";
import { runExample } from "./example.ts";
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
  const mode = new sfVideoMode(800, 600, 32);
  const window = new renderWindow(mode, title, 7);
  const gui = new Gui(window.pointer);

  // const body = new GrowVerticalLayout();
  // const line1 = new GrowHorizontalLayout();
  // const line2 = new GrowHorizontalLayout();
  // line1.setHeight(30);
  // line2.setHeight(20);
  // // cont.setSize(new Vector2f(200, 100));
  // const button = new Button();
  // button.setAutoLayout(3);
  // // button.setHeight(40);
  // button.setText(encodeUTF32("Hello, World!"));
  // const checkbox = new CheckBox();
  // checkbox.setText(encodeUTF32("Check me!"));

  // line1.add(button.pointer, encodeUTF32(""));
  // line1.add(checkbox.pointer, encodeUTF32(""));
  // body.add(line1.pointer, encodeUTF32(""));
  // body.add(line2.pointer, encodeUTF32(""));
  // gui.add(body.pointer, encodeUTF32(""));
  // cont.setRatio(button.pointer, 1 / 2);
  runExample(gui);

  while (window.isOpen()) {
    const event = new SFMLEvent();

    while (window.pollEvent(event.pointer)) {
      const eventUnion = SFMLEventUnion.deserialize(event.convertToUnion());

      if (eventUnion.type === 0) window.close();

      // console.log("Event", eventUnion);
      gui.handleEvent(event.pointer);
    }

    const clearColor = new sfColor(255, 255, 255, 255);
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
