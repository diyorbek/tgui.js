#include <CTGUI/Backend/CSFML-Graphics.h>

CTGUI_API sfEvent* sfEvent_create();

CTGUI_API void sfEvent_destroy(sfEvent* event);

CTGUI_API sfRenderWindow* renderWindow_create(sfVideoMode mode,
                                              const char* title,
                                              unsigned int style);

CTGUI_API sfBool renderWindow_isOpen(const sfWindow* window);

CTGUI_API sfBool renderWindow_pollEvent(sfRenderWindow* window, sfEvent* event);

CTGUI_API void renderWindow_close(sfRenderWindow* window);

CTGUI_API void renderWindow_clear(sfRenderWindow* window, sfColor color);

CTGUI_API void renderWindow_display(sfRenderWindow* window);

CTGUI_API void renderWindow_destroy(sfRenderWindow* window);
