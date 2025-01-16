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
  const window = CTGUI_LIB.symbols.renderWindow_create(mode, title, 7);
  const gui = CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_create(window);

  const button = CTGUI_LIB.symbols.tguiButton_create();
  CTGUI_LIB.symbols.tguiButtonBase_setText(
    button,
    encodeUTF32("Hello, World!")
  );

  CTGUI_LIB.symbols.tguiGui_add(gui, button, title);

  while (CTGUI_LIB.symbols.renderWindow_isOpen(window)) {
    const event = CTGUI_LIB.symbols.sfEvent_create();

    while (CTGUI_LIB.symbols.renderWindow_pollEvent(window, event)) {
      console.log("Event");
      CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_handleEvent(gui, event);
    }

    CTGUI_LIB.symbols.renderWindow_clear(
      window,
      new Uint8Array([0, 100, 20, 255])
    );
    CTGUI_LIB.symbols.tguiGui_draw(gui);
    CTGUI_LIB.symbols.renderWindow_display(window);
    CTGUI_LIB.symbols.sfEvent_destroy(event);
  }

  CTGUI_LIB.symbols.tguiWidget_destroy(button);
  CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_destroy(gui);
  CTGUI_LIB.symbols.renderWindow_destroy(window);
}

main();
CTGUI_LIB.close();
