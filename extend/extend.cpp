#include <CTGUI/CTGUI.h>
#include <CTGUI/extend.h>

sfEvent* SFMLEvent_create() {
  return new sfEvent;
}

SFMLEventUnion SFMLEvent_convertToUnion(sfEvent* SFMLEvent) {
  return {.type = SFMLEvent->type,
          .size = SFMLEvent->size,
          .key = SFMLEvent->key,
          .text = SFMLEvent->text,
          .mouseMove = SFMLEvent->mouseMove,
          .mouseButton = SFMLEvent->mouseButton,
          .mouseWheel = SFMLEvent->mouseWheel,
          .mouseWheelScroll = SFMLEvent->mouseWheelScroll,
          .joystickMove = SFMLEvent->joystickMove,
          .joystickButton = SFMLEvent->joystickButton,
          .joystickConnect = SFMLEvent->joystickConnect,
          .touch = SFMLEvent->touch,
          .sensor = SFMLEvent->sensor};
}

void SFMLEvent_destroy(sfEvent* SFMLEvent) {
  delete SFMLEvent;
}

sfRenderWindow* renderWindow_create(sfVideoMode mode,
                                    const char* title,
                                    unsigned int style) {
  return sfRenderWindow_create(mode, title, style, NULL);
}

sfBool renderWindow_isOpen(const sfWindow* window) {
  return sfWindow_isOpen(window);
}

sfBool renderWindow_pollEvent(sfRenderWindow* window, sfEvent* event) {
  auto e = new tguiEvent;
  return sfRenderWindow_pollEvent(window, event);
}

void renderWindow_close(sfRenderWindow* window) {
  sfRenderWindow_close(window);
}

void renderWindow_clear(sfRenderWindow* window, sfColor color) {
  sfRenderWindow_clear(window, color);
}

void renderWindow_display(sfRenderWindow* window) {
  sfRenderWindow_display(window);
}

void renderWindow_destroy(sfRenderWindow* window) {
  sfRenderWindow_destroy(window);
}
