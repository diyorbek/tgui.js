// This is a development test file.

#include <CTGUI/Backend/CSFML-Graphics.h>
#include <CTGUI/CTGUI.h>
#include <stdio.h>

void func(void) { printf("Button clicked\n"); }

int main() {
  sfVideoMode videoMode = {400, 300, 32};

  sfRenderWindow* window = sfRenderWindow_create(
      videoMode, "CTGUI example (CSFML-GRAPHICS)", sfDefaultStyle, NULL);

  // The tguiGui object should always be the first CTGUI object to create
  tguiGui* gui = tguiGuiCSFMLGraphics_create(window);
  tguiWidget* button = tguiButton_create();
  tguiGui_add(gui, button, U"MyButton");

  tguiButtonBase_setText(button, U"Hello");

  tguiVector2f position = {40, 30};
  tguiWidget_setPosition(button, position);

  tguiVector2f size = {200, 40};
  tguiWidget_setSize(button, size);

  tguiRenderer* buttonRenderer = tguiWidget_getRenderer(button);
  tguiButtonRenderer_setBackgroundColor(buttonRenderer,
                                        tguiColor_fromRGB(128, 220, 128));
  tguiWidgetRenderer_destroy(buttonRenderer);

  tguiWidget_signalConnect(button, "Pressed", func);

  tguiWidget* l = tguiLabel_create();
  tguiLabel_setText(l, U"Label with Color");
  tguiVector2f pos = {40, 100};
  tguiWidget_setPosition(l, pos);
  tguiLabelRenderer_setTextColor(tguiWidget_getRenderer(l), (tguiColor){145, 255, 0, 1, 1});
  tguiGui_add(gui, l, U"");

  while (sfRenderWindow_isOpen(window)) {
    sfEvent event;
    while (sfRenderWindow_pollEvent(window, &event)) {
      if (event.type == sfEvtClosed) sfRenderWindow_close(window);

      tguiGuiCSFMLGraphics_handleEvent(gui, &event);
    }

    sfRenderWindow_clear(window, sfWhite);
    tguiGui_draw(gui);
    sfRenderWindow_display(window);
  }

  tguiWidget_destroy(button);
  tguiGuiCSFMLGraphics_destroy(gui);

  sfRenderWindow_destroy(window);
  return 0;
}