import { CTGUI_LIB, encodeUTF32 } from "../index.ts";

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
