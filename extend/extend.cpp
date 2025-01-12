#include <CTGUI/extend.h>

sfEvent* sfEvent_create() { return new sfEvent; }

void sfEvent_destroy(sfEvent* event) { delete event; }

sfRenderWindow* renderWindow_create(sfVideoMode mode, const char* title,
                                    unsigned int style) {
  return sfRenderWindow_create(mode, title, style, NULL);
}
