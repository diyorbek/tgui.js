#include <CTGUI/Backend/CSFML-Graphics.h>

CTGUI_API sfEvent* sfEvent_create();

CTGUI_API void sfEvent_destroy(sfEvent* event);

CTGUI_API sfRenderWindow* renderWindow_create(sfVideoMode mode,
                                              const char* title,
                                              unsigned int style);
