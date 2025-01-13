#include <CTGUI/extend.h>

sfEvent* sfEvent_create() {
  return new sfEvent;
}

void sfEvent_destroy(sfEvent* event) {
  delete event;
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
