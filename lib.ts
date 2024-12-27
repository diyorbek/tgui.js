import { CSFML_LIB } from "./csfmlLib.ts";
import { TGUI_LIB } from "./ctguiLib.ts";

function main() {
  const title = new TextEncoder().encode("Hello, World!\0");
  const mode = new Uint32Array([800, 300, 32]);
  const window = CSFML_LIB.symbols.sfRenderWindow_create(mode, title, 7);
  const gui = TGUI_LIB.symbols.tguiGuiCSFMLGraphics_create(window);

  const button = TGUI_LIB.symbols.tguiButton_create();
  TGUI_LIB.symbols.tguiButtonBase_setText(
    button,
    new TextEncoder().encode("Hello, World!\0")
  );

  TGUI_LIB.symbols.tguiGui_add(gui, button, title);

  while (CSFML_LIB.symbols.sfRenderWindow_isOpen(window)) {
    const event = CSFML_LIB.symbols.sfEvent_create();

    while (CSFML_LIB.symbols.sfRenderWindow_pollEvent(window, event)) {
      console.log("Event");
      TGUI_LIB.symbols.tguiGuiCSFMLGraphics_handleEvent(gui, event);
    }

    CSFML_LIB.symbols.sfRenderWindow_clear(
      window,
      new Uint8Array([0, 100, 20, 255])
    );
    TGUI_LIB.symbols.tguiGui_draw(gui);
    CSFML_LIB.symbols.sfRenderWindow_display(window);
    CSFML_LIB.symbols.sfEvent_destroy(event);
  }

  TGUI_LIB.symbols.tguiWidget_destroy(button);
  TGUI_LIB.symbols.tguiGuiCSFMLGraphics_destroy(gui);
  CSFML_LIB.symbols.sfRenderWindow_destroy(window);
}

main();
CSFML_LIB.close();
