#pragma once

#include <CTGUI/Backend/CSFML-Graphics.h>
#include <CTGUI/CTGUI.h>

typedef struct {
  sfEventType type;
  sfSizeEvent size;
  sfKeyEvent key;
  sfTextEvent text;
  sfMouseMoveEvent mouseMove;
  sfMouseButtonEvent mouseButton;
  sfMouseWheelEvent mouseWheel;
  sfMouseWheelScrollEvent mouseWheelScroll;
  sfJoystickMoveEvent joystickMove;
  sfJoystickButtonEvent joystickButton;
  sfJoystickConnectEvent joystickConnect;
  sfTouchEvent touch;
  sfSensorEvent sensor;
} SFMLEventUnion;

CTGUI_API SFMLEventUnion SFMLEvent_convert(sfEvent* SFMLEvent);

CTGUI_API sfEvent* SFMLEvent_create();

CTGUI_API void SFMLEvent_destroy(sfEvent* SFMLEvent);

CTGUI_API sfRenderWindow* renderWindow_create(sfVideoMode mode,
                                              const char* title,
                                              unsigned int style);

CTGUI_API sfBool renderWindow_isOpen(const sfWindow* window);

CTGUI_API sfBool renderWindow_pollEvent(sfRenderWindow* window, sfEvent* event);

CTGUI_API void renderWindow_close(sfRenderWindow* window);

CTGUI_API void renderWindow_clear(sfRenderWindow* window, sfColor color);

CTGUI_API void renderWindow_display(sfRenderWindow* window);

CTGUI_API void renderWindow_destroy(sfRenderWindow* window);
