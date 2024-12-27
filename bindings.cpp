#include <CTGUI/Backend/CSFML-Graphics.h>
#include <CTGUI/CTGUI.h>

extern "C" sfEvent* sfEvent_create() { return new sfEvent; }
extern "C" void sfEvent_destroy(sfEvent* event) { delete event; }