#include <CTGUI/CTGUI.h>
#include <CTGUI/extend.h>

SFMLEventUnion SFMLEvent_convert(sfEvent* SFMLEvent) {
  return SFMLEventUnion{};
}

sfEvent* SFMLEvent_create() {
  return new sfEvent;
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
