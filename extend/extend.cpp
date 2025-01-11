#include <CTGUI/extend.h>

sfEvent* sfEvent_create() { return new sfEvent; }

void sfEvent_destroy(sfEvent* event) { delete event; }
