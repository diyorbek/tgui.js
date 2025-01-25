export const CTGUI_SYMBOLS = {
  /**
   * @original ```c
   * tguiColor tguiColor_createNull();
   * ```
   *
   * @param
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiColor_createNull: {
    parameters: [],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiColor tguiColor_fromRGB(tguiUint8 red, tguiUint8 green, tguiUint8 blue);
   * ```
   *
   * @param red `Uint8`
   * @param green `Uint8`
   * @param blue `Uint8`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiColor_fromRGB: {
    parameters: ["u8", "u8", "u8"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiColor tguiColor_fromRGBA(tguiUint8 red, tguiUint8 green, tguiUint8 blue, tguiUint8 alpha);
   * ```
   *
   * @param red `Uint8`
   * @param green `Uint8`
   * @param blue `Uint8`
   * @param alpha `Uint8`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiColor_fromRGBA: {
    parameters: ["u8", "u8", "u8", "u8"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiColor tguiColor_fromString(const char * string);
   * ```
   *
   * @param string `const char *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiColor_fromString: {
    parameters: ["buffer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromSeconds(float amount);
   * ```
   *
   * @param amount `float`
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiDuration_fromSeconds: {
    parameters: ["f32"],
    result: { struct: ["i64"] },
  },

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromMilliseconds(tguiInt32 amount);
   * ```
   *
   * @param amount `Int32`
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiDuration_fromMilliseconds: {
    parameters: ["i32"],
    result: { struct: ["i64"] },
  },

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromMicroseconds(tguiInt64 amount);
   * ```
   *
   * @param amount `Int64`
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiDuration_fromMicroseconds: {
    parameters: ["i64"],
    result: { struct: ["i64"] },
  },

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromNanoseconds(tguiInt64 amount);
   * ```
   *
   * @param amount `Int64`
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiDuration_fromNanoseconds: {
    parameters: ["i64"],
    result: { struct: ["i64"] },
  },

  /**
   * @original ```c
   * float tguiDuration_asSeconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `float`
   */
  tguiDuration_asSeconds: { parameters: [{ struct: ["i64"] }], result: "f32" },

  /**
   * @original ```c
   * tguiInt32 tguiDuration_asMilliseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int32`
   */
  tguiDuration_asMilliseconds: {
    parameters: [{ struct: ["i64"] }],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiInt64 tguiDuration_asMicroseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int64`
   */
  tguiDuration_asMicroseconds: {
    parameters: [{ struct: ["i64"] }],
    result: "i64",
  },

  /**
   * @original ```c
   * tguiInt64 tguiDuration_asNanoseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int64`
   */
  tguiDuration_asNanoseconds: {
    parameters: [{ struct: ["i64"] }],
    result: "i64",
  },

  /**
   * @original ```c
   * tguiBool tguiFloatRect_contains(const tguiFloatRect * rect, tguiVector2f pos);
   * ```
   *
   * @param rect `const FloatRect *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  tguiFloatRect_contains: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiIntRect_contains(const tguiIntRect * rect, tguiVector2i pos);
   * ```
   *
   * @param rect `const IntRect *`
   * @param pos `Vector2i { x: int; y: int }`
   * @returns `Bool`
   */
  tguiIntRect_contains: {
    parameters: ["pointer", { struct: ["i16", "i16"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiUIntRect_contains(const tguiUIntRect * rect, tguiVector2u pos);
   * ```
   *
   * @param rect `const UIntRect *`
   * @param pos `Vector2u { x: unsigned int; y: unsigned int }`
   * @returns `Bool`
   */
  tguiUIntRect_contains: {
    parameters: ["pointer", { struct: ["u16", "u16"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiFloatRect_intersects(const tguiFloatRect * rect, const tguiFloatRect * otherRect);
   * ```
   *
   * @param rect `const FloatRect *`
   * @param otherRect `const FloatRect *`
   * @returns `Bool`
   */
  tguiFloatRect_intersects: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiIntRect_intersects(const tguiIntRect * rect, const tguiIntRect * otherRect);
   * ```
   *
   * @param rect `const IntRect *`
   * @param otherRect `const IntRect *`
   * @returns `Bool`
   */
  tguiIntRect_intersects: { parameters: ["pointer", "pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiUIntRect_intersects(const tguiUIntRect * rect, const tguiUIntRect * otherRect);
   * ```
   *
   * @param rect `const UIntRect *`
   * @param otherRect `const UIntRect *`
   * @returns `Bool`
   */
  tguiUIntRect_intersects: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tgui_setGlobalTextSize(unsigned int textSize);
   * ```
   *
   * @param textSize `unsigned int`
   * @returns `void`
   */
  tgui_setGlobalTextSize: { parameters: ["u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tgui_getGlobalTextSize();
   * ```
   *
   * @param
   * @returns `unsigned int`
   */
  tgui_getGlobalTextSize: { parameters: [], result: "u32" },

  /**
   * @original ```c
   * void tgui_setDoubleClickTime(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tgui_setDoubleClickTime: {
    parameters: [{ struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiDuration tgui_getDoubleClickTime();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  tgui_getDoubleClickTime: { parameters: [], result: { struct: ["i64"] } },

  /**
   * @original ```c
   * void tgui_setResourcePath(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `void`
   */
  tgui_setResourcePath: { parameters: ["buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tgui_getResourcePath();
   * ```
   *
   * @param
   * @returns `Utf32`
   */
  tgui_getResourcePath: { parameters: [], result: "buffer" },

  /**
   * @original ```c
   * void tgui_setEditCursorBlinkRate(tguiDuration blinkRate);
   * ```
   *
   * @param blinkRate `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tgui_setEditCursorBlinkRate: {
    parameters: [{ struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiDuration tgui_getEditCursorBlinkRate();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  tgui_getEditCursorBlinkRate: { parameters: [], result: { struct: ["i64"] } },

  /**
   * @original ```c
   * tguiUint8 * tgui_readFileToMemory(tguiUtf32 filename, size_t * fileSize);
   * ```
   *
   * @param filename `Utf32`
   * @param fileSize `size_t *`
   * @returns `Uint8 *`
   */
  tgui_readFileToMemory: {
    parameters: ["buffer", "pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiBool tgui_writeFile(tguiUtf32 filename, const char * textToWrite);
   * ```
   *
   * @param filename `Utf32`
   * @param textToWrite `const char *`
   * @returns `Bool`
   */
  tgui_writeFile: { parameters: ["buffer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * void tgui_readFileToMemory_free(tguiUint8 * arg0);
   * ```
   *
   * @param arg0 `Uint8 *`
   * @returns `void`
   */
  tgui_readFileToMemory_free: { parameters: ["buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tgui_getLastError();
   * ```
   *
   * @param
   * @returns `Utf32`
   */
  tgui_getLastError: { parameters: [], result: "buffer" },

  /**
   * @original ```c
   * void tgui_setBindingWidgetCleanupCallback(void (*)(tguiWidget *) function);
   * ```
   *
   * @param function `void (*)(Widget *)`
   * @returns `void`
   */
  tgui_setBindingWidgetCleanupCallback: {
    parameters: ["function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCursor_setStyle(tguiCursorType type, const tguiUint8 * pixels, tguiVector2u size, tguiVector2u hotspot);
   * ```
   *
   * @param type `CursorType`
   * @param pixels `const Uint8 *`
   * @param size `Vector2u { x: unsigned int; y: unsigned int }`
   * @param hotspot `Vector2u { x: unsigned int; y: unsigned int }`
   * @returns `void`
   */
  tguiCursor_setStyle: {
    parameters: ["i16", "pointer", { struct: ["u16", "u16"] }, {
      struct: ["u16", "u16"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCursor_resetStyle(tguiCursorType type);
   * ```
   *
   * @param type `CursorType`
   * @returns `void`
   */
  tguiCursor_resetStyle: { parameters: ["i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventLostFocus(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `Bool`
   */
  tguiGui_handleEventLostFocus: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventGainedFocus(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `Bool`
   */
  tguiGui_handleEventGainedFocus: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventTextEntered(tguiGui * gui, tguiTextEvent textEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param textEvent `TextEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventTextEntered: {
    parameters: ["pointer", { struct: ["u32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventKeyPressed(tguiGui * gui, tguiKeyEvent keyEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param keyEvent `KeyEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventKeyPressed: {
    parameters: ["pointer", {
      struct: ["i32", "_Bool", "_Bool", "_Bool", "_Bool"],
    }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseWheelScrolled(tguiGui * gui, tguiMouseWheelEvent mouseWheelEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param mouseWheelEvent `MouseWheelEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseWheelScrolled: {
    parameters: ["pointer", { struct: ["f32", "i32", "i32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseButtonPressed(tguiGui * gui, tguiMouseButtonEvent mouseButtonEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param mouseButtonEvent `MouseButtonEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseButtonPressed: {
    parameters: ["pointer", { struct: ["i32", "i32", "i32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseButtonReleased(tguiGui * gui, tguiMouseButtonEvent mouseButtonEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param mouseButtonEvent `MouseButtonEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseButtonReleased: {
    parameters: ["pointer", { struct: ["i32", "i32", "i32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseMoved(tguiGui * gui, tguiMouseMoveEvent mouseMoveEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param mouseMoveEvent `MouseMoveEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseMoved: {
    parameters: ["pointer", { struct: ["i32", "i32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseEntered(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseEntered: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventMouseLeft(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `Bool`
   */
  tguiGui_handleEventMouseLeft: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventResized(tguiGui * gui, tguiSizeEvent sizeEvent);
   * ```
   *
   * @param gui `Gui *`
   * @param sizeEvent `SizeEvent`
   * @returns `Bool`
   */
  tguiGui_handleEventResized: {
    parameters: ["pointer", { struct: ["u32", "u32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_handleEventClosed(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `Bool`
   */
  tguiGui_handleEventClosed: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiGui_draw(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `void`
   */
  tguiGui_draw: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiGui_loadWidgetsFromFile(tguiGui * gui, tguiUtf32 filename, tguiBool replaceExisting);
   * ```
   *
   * @param gui `Gui *`
   * @param filename `Utf32`
   * @param replaceExisting `Bool`
   * @returns `Bool`
   */
  tguiGui_loadWidgetsFromFile: {
    parameters: ["pointer", "buffer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_saveWidgetsToFile(tguiGui * gui, tguiUtf32 filename);
   * ```
   *
   * @param gui `Gui *`
   * @param filename `Utf32`
   * @returns `Bool`
   */
  tguiGui_saveWidgetsToFile: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiGui_setViewChangeCallback(tguiGui * gui, void (*)(tguiGui *) function);
   * ```
   *
   * @param gui `Gui *`
   * @param function `void (*)(Gui *)`
   * @returns `void`
   */
  tguiGui_setViewChangeCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_setWindowFocusCallback(tguiGui * gui, void (*)(tguiGui *) function);
   * ```
   *
   * @param gui `Gui *`
   * @param function `void (*)(Gui *)`
   * @returns `void`
   */
  tguiGui_setWindowFocusCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_setWindowUnfocusCallback(tguiGui * gui, void (*)(tguiGui *) function);
   * ```
   *
   * @param gui `Gui *`
   * @param function `void (*)(Gui *)`
   * @returns `void`
   */
  tguiGui_setWindowUnfocusCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_setAbsoluteViewport(tguiGui * thisGui, tguiFloatRect viewport);
   * ```
   *
   * @param thisGui `Gui *`
   * @param viewport `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiGui_setAbsoluteViewport: {
    parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_setRelativeViewport(tguiGui * thisGui, tguiFloatRect viewport);
   * ```
   *
   * @param thisGui `Gui *`
   * @param viewport `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiGui_setRelativeViewport: {
    parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiFloatRect tguiGui_getViewport(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  tguiGui_getViewport: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32", "f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiGui_setAbsoluteView(tguiGui * thisGui, tguiFloatRect view);
   * ```
   *
   * @param thisGui `Gui *`
   * @param view `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiGui_setAbsoluteView: {
    parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_setRelativeView(tguiGui * thisGui, tguiFloatRect view);
   * ```
   *
   * @param thisGui `Gui *`
   * @param view `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiGui_setRelativeView: {
    parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiFloatRect tguiGui_getView(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  tguiGui_getView: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32", "f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiGui_setTabKeyUsageEnabled(tguiGui * thisGui, tguiBool value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiGui_setTabKeyUsageEnabled: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_isTabKeyUsageEnabled(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Bool`
   */
  tguiGui_isTabKeyUsageEnabled: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiGui_setFont(tguiGui * thisGui, const tguiFont * value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `const Font *`
   * @returns `void`
   */
  tguiGui_setFont: { parameters: ["pointer", "pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiFont * tguiGui_getFont(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `const Font *`
   */
  tguiGui_getFont: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiGui_add(tguiGui * thisGui, tguiWidget * widget, tguiUtf32 widgetName);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @param widgetName `Utf32`
   * @returns `void`
   */
  tguiGui_add: { parameters: ["pointer", "pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiWidget * tguiGui_get(const tguiGui * thisGui, tguiUtf32 widgetName);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param widgetName `Utf32`
   * @returns `Widget *`
   */
  tguiGui_get: { parameters: ["pointer", "buffer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget ** tguiGui_getWidgets(const tguiGui * thisGui, size_t * returnCount);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param returnCount `size_t *`
   * @returns `Widget **`
   */
  tguiGui_getWidgets: { parameters: ["pointer", "pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiBool tguiGui_remove(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `Bool`
   */
  tguiGui_remove: { parameters: ["pointer", "pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiGui_removeAllWidgets(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  tguiGui_removeAllWidgets: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiWidget * tguiGui_getFocusedChild(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Widget *`
   */
  tguiGui_getFocusedChild: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiGui_getFocusedLeaf(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Widget *`
   */
  tguiGui_getFocusedLeaf: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiGui_getWidgetAtPos(const tguiGui * thisGui, tguiVector2f pos, tguiBool recursive);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param pos `Vector2f { x: float; y: float }`
   * @param recursive `Bool`
   * @returns `Widget *`
   */
  tguiGui_getWidgetAtPos: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiGui_getWidgetBelowMouseCursor(const tguiGui * thisGui, tguiVector2i mousePos, tguiBool recursive);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param mousePos `Vector2i { x: int; y: int }`
   * @param recursive `Bool`
   * @returns `Widget *`
   */
  tguiGui_getWidgetBelowMouseCursor: {
    parameters: ["pointer", { struct: ["i16", "i16"] }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_focusNextWidget(tguiGui * thisGui, tguiBool recursive);
   * ```
   *
   * @param thisGui `Gui *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  tguiGui_focusNextWidget: { parameters: ["pointer", "i16"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiGui_focusPreviousWidget(tguiGui * thisGui, tguiBool recursive);
   * ```
   *
   * @param thisGui `Gui *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  tguiGui_focusPreviousWidget: {
    parameters: ["pointer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiGui_unfocusAllWidgets(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  tguiGui_unfocusAllWidgets: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiGui_moveWidgetToFront(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiGui_moveWidgetToFront: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_moveWidgetToBack(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiGui_moveWidgetToBack: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiGui_moveWidgetForward(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  tguiGui_moveWidgetForward: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * size_t tguiGui_moveWidgetBackward(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  tguiGui_moveWidgetBackward: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_setWidgetIndex(tguiGui * thisGui, tguiWidget * widget, size_t index);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiGui_setWidgetIndex: {
    parameters: ["pointer", "pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * int tguiGui_getWidgetIndex(const tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param widget `Widget *`
   * @returns `int`
   */
  tguiGui_getWidgetIndex: { parameters: ["pointer", "pointer"], result: "i32" },

  /**
   * @original ```c
   * void tguiGui_setOpacity(tguiGui * thisGui, float value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `float`
   * @returns `void`
   */
  tguiGui_setOpacity: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiGui_getOpacity(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `float`
   */
  tguiGui_getOpacity: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiGui_setTextSize(tguiGui * thisGui, unsigned int value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiGui_setTextSize: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiGui_getTextSize(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `unsigned int`
   */
  tguiGui_getTextSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiGui_setDrawingUpdatesTime(tguiGui * thisGui, tguiBool drawUpdatesTime);
   * ```
   *
   * @param thisGui `Gui *`
   * @param drawUpdatesTime `Bool`
   * @returns `void`
   */
  tguiGui_setDrawingUpdatesTime: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_updateTime(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `Bool`
   */
  tguiGui_updateTime: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiGui_setOverrideMouseCursor(tguiGui * thisGui, tguiCursorType type);
   * ```
   *
   * @param thisGui `Gui *`
   * @param type `CursorType`
   * @returns `void`
   */
  tguiGui_setOverrideMouseCursor: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_restoreOverrideMouseCursor(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  tguiGui_restoreOverrideMouseCursor: {
    parameters: ["pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGui_requestMouseCursor(tguiGui * thisGui, tguiCursorType type);
   * ```
   *
   * @param thisGui `Gui *`
   * @param type `CursorType`
   * @returns `void`
   */
  tguiGui_requestMouseCursor: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiGui_mapPixelToCoords(const tguiGui * thisGui, tguiVector2i pixel);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param pixel `Vector2i { x: int; y: int }`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiGui_mapPixelToCoords: {
    parameters: ["pointer", { struct: ["i16", "i16"] }],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiGui_mapCoordsToPixel(const tguiGui * thisGui, tguiVector2f coord);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param coord `Vector2f { x: float; y: float }`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiGui_mapCoordsToPixel: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiGui_setKeyboardNavigationEnabled(tguiGui * thisGui, tguiBool value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiGui_setKeyboardNavigationEnabled: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiGui_isKeyboardNavigationEnabled(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Bool`
   */
  tguiGui_isKeyboardNavigationEnabled: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiGui_mainLoop(tguiGui * thisGui, tguiColor clearColor);
   * ```
   *
   * @param thisGui `Gui *`
   * @param clearColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiGui_mainLoop: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiGui * tguiGuiCSFMLGraphics_create(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `Gui *`
   */
  tguiGuiCSFMLGraphics_create: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiGuiCSFMLGraphics_destroy(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `void`
   */
  tguiGuiCSFMLGraphics_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiGuiCSFMLGraphics_handleEvent(tguiGui * gui, const sfEvent * event);
   * ```
   *
   * @param gui `Gui *`
   * @param event `const sfEvent *`
   * @returns `Bool`
   */
  tguiGuiCSFMLGraphics_handleEvent: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawWidget(tguiBackendRenderTarget * target, const tguiRenderStates * states, tguiWidget * widget);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawWidget: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_addClippingLayer(tguiBackendRenderTarget * target, const tguiRenderStates * states, tguiFloatRect rect);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param rect `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiBackendRenderTarget_addClippingLayer: {
    parameters: ["pointer", "pointer", {
      struct: ["f32", "f32", "f32", "f32"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_removeClippingLayer(tguiBackendRenderTarget * target);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @returns `void`
   */
  tguiBackendRenderTarget_removeClippingLayer: {
    parameters: ["pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawBorders(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiOutline * borders, tguiVector2f size, tguiColor color);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param borders `const Outline *`
   * @param size `Vector2f { x: float; y: float }`
   * @param color `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawBorders: {
    parameters: ["pointer", "pointer", "pointer", { struct: ["f32", "f32"] }, {
      struct: ["u8", "u8", "u8", "u8", "i16"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawFilledRect(tguiBackendRenderTarget * target, const tguiRenderStates * states, tguiVector2f size, tguiColor color);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param size `Vector2f { x: float; y: float }`
   * @param color `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawFilledRect: {
    parameters: ["pointer", "pointer", { struct: ["f32", "f32"] }, {
      struct: ["u8", "u8", "u8", "u8", "i16"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawSprite(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiSprite * sprite);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param sprite `const Sprite *`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawSprite: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawText(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiText * text);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param text `const Text *`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawText: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawTextOutline(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiText * text);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param text `const Text *`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawTextOutline: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawTextWithoutOutline(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiText * text);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param text `const Text *`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawTextWithoutOutline: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawTriangle(tguiBackendRenderTarget * target, const tguiRenderStates * states, tguiVertex point1, tguiVertex point2, tguiVertex point3);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param point1 `Vertex { position: tguiVector2f; color: tguiVertexColor; texCoords: tguiVector2f }`
   * @param point2 `Vertex { position: tguiVector2f; color: tguiVertexColor; texCoords: tguiVector2f }`
   * @param point3 `Vertex { position: tguiVector2f; color: tguiVertexColor; texCoords: tguiVector2f }`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawTriangle: {
    parameters: ["pointer", "pointer", {
      struct: [
        { struct: ["f32", "f32"] },
        { struct: ["u8", "u8", "u8", "u8"] },
        { struct: ["f32", "f32"] },
      ],
    }, {
      struct: [
        { struct: ["f32", "f32"] },
        { struct: ["u8", "u8", "u8", "u8"] },
        { struct: ["f32", "f32"] },
      ],
    }, {
      struct: [
        { struct: ["f32", "f32"] },
        { struct: ["u8", "u8", "u8", "u8"] },
        { struct: ["f32", "f32"] },
      ],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawCircle(tguiBackendRenderTarget * target, const tguiRenderStates * states, float size, tguiColor backgroundColor, float borderThickness, tguiColor borderColor);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param size `float`
   * @param backgroundColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @param borderThickness `float`
   * @param borderColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawCircle: {
    parameters: [
      "pointer",
      "pointer",
      "f32",
      { struct: ["u8", "u8", "u8", "u8", "i16"] },
      "f32",
      { struct: ["u8", "u8", "u8", "u8", "i16"] },
    ],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawRoundedRectangle(tguiBackendRenderTarget * target, const tguiRenderStates * states, tguiVector2f size, tguiColor backgroundColor, float radius, const tguiOutline * borders, tguiColor borderColor);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param size `Vector2f { x: float; y: float }`
   * @param backgroundColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @param radius `float`
   * @param borders `const Outline *`
   * @param borderColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawRoundedRectangle: {
    parameters: [
      "pointer",
      "pointer",
      { struct: ["f32", "f32"] },
      { struct: ["u8", "u8", "u8", "u8", "i16"] },
      "f32",
      "pointer",
      { struct: ["u8", "u8", "u8", "u8", "i16"] },
    ],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBackendRenderTarget_drawVertexArray(tguiBackendRenderTarget * target, const tguiRenderStates * states, const tguiVertex * vertices, size_t vertexCount, const unsigned int * indices, size_t indexCount);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @param states `const RenderStates *`
   * @param vertices `const Vertex *`
   * @param vertexCount `size_t`
   * @param indices `const unsigned int *`
   * @param indexCount `size_t`
   * @returns `void`
   */
  tguiBackendRenderTarget_drawVertexArray: {
    parameters: ["pointer", "pointer", "pointer", "usize", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * const char * tgui_base64Encode(const uint8_t * data, size_t nrBytes);
   * ```
   *
   * @param data `const uint8_t *`
   * @param nrBytes `size_t`
   * @returns `const char *`
   */
  tgui_base64Encode: { parameters: ["buffer", "usize"], result: "buffer" },

  /**
   * @original ```c
   * const uint8_t * tgui_base64Decode(const char * data, size_t * count);
   * ```
   *
   * @param data `const char *`
   * @param count `size_t *`
   * @returns `const uint8_t *`
   */
  tgui_base64Decode: { parameters: ["buffer", "pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiBool tguiContainer_loadWidgetsFromFile(tguiWidget * container, const char * filename, tguiBool replaceExisting);
   * ```
   *
   * @param container `Widget *`
   * @param filename `const char *`
   * @param replaceExisting `Bool`
   * @returns `Bool`
   */
  tguiContainer_loadWidgetsFromFile: {
    parameters: ["pointer", "buffer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiContainer_saveWidgetsToFile(tguiWidget * container, const char * filename);
   * ```
   *
   * @param container `Widget *`
   * @param filename `const char *`
   * @returns `Bool`
   */
  tguiContainer_saveWidgetsToFile: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiContainer_add(tguiWidget * thisContainer, tguiWidget * widget, tguiUtf32 widgetName);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @param widgetName `Utf32`
   * @returns `void`
   */
  tguiContainer_add: {
    parameters: ["pointer", "pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiContainer_get(const tguiWidget * thisContainer, tguiUtf32 widgetName);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param widgetName `Utf32`
   * @returns `Widget *`
   */
  tguiContainer_get: { parameters: ["pointer", "buffer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget ** tguiContainer_getWidgets(const tguiWidget * thisContainer, size_t * returnCount);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param returnCount `size_t *`
   * @returns `Widget **`
   */
  tguiContainer_getWidgets: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiContainer_remove(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `Bool`
   */
  tguiContainer_remove: { parameters: ["pointer", "pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiContainer_removeAllWidgets(tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `Widget *`
   * @returns `void`
   */
  tguiContainer_removeAllWidgets: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiContainer_moveWidgetToFront(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiContainer_moveWidgetToFront: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiContainer_moveWidgetToBack(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiContainer_moveWidgetToBack: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiContainer_moveWidgetForward(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  tguiContainer_moveWidgetForward: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * size_t tguiContainer_moveWidgetBackward(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  tguiContainer_moveWidgetBackward: {
    parameters: ["pointer", "pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * tguiBool tguiContainer_setWidgetIndex(tguiWidget * thisContainer, tguiWidget * widget, size_t index);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiContainer_setWidgetIndex: {
    parameters: ["pointer", "pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * int tguiContainer_getWidgetIndex(const tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param widget `Widget *`
   * @returns `int`
   */
  tguiContainer_getWidgetIndex: {
    parameters: ["pointer", "pointer"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiWidget * tguiContainer_getFocusedChild(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Widget *`
   */
  tguiContainer_getFocusedChild: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiContainer_getFocusedLeaf(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Widget *`
   */
  tguiContainer_getFocusedLeaf: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiContainer_getWidgetAtPos(const tguiWidget * thisContainer, tguiVector2f pos, tguiBool recursive);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param pos `Vector2f { x: float; y: float }`
   * @param recursive `Bool`
   * @returns `Widget *`
   */
  tguiContainer_getWidgetAtPos: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiContainer_focusNextWidget(tguiWidget * thisContainer, tguiBool recursive);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  tguiContainer_focusNextWidget: {
    parameters: ["pointer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiContainer_focusPreviousWidget(tguiWidget * thisContainer, tguiBool recursive);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  tguiContainer_focusPreviousWidget: {
    parameters: ["pointer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiVector2f tguiContainer_getInnerSize(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiContainer_getInnerSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiContainer_getChildWidgetsOffset(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiContainer_getChildWidgetsOffset: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiWidget * tguiCustomWidget_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiCustomWidget_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiCustomWidget_setPositionChangedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setPositionChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setSizeChangedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setSizeChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setVisibleChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  tguiCustomWidget_setVisibleChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setEnableChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  tguiCustomWidget_setEnableChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setFocusChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  tguiCustomWidget_setFocusChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setCanGainFocusCallback(tguiWidget * widget, tguiBool (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setCanGainFocusCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setGetFullSizeCallback(tguiWidget * widget, tguiVector2f (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Vector2f (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setGetFullSizeCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setGetWidgetOffsetCallback(tguiWidget * widget, tguiVector2f (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Vector2f (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setGetWidgetOffsetCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setUpdateTimeCallback(tguiWidget * widget, tguiBool (*)(tguiDuration) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiDuration)`
   * @returns `void`
   */
  tguiCustomWidget_setUpdateTimeCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseOnWidgetCallback(tguiWidget * widget, tguiBool (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiVector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setMouseOnWidgetCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMousePressedCallback(tguiWidget * widget, tguiBool (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiVector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setLeftMousePressedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMouseReleasedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setLeftMouseReleasedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setRightMousePressedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setRightMousePressedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setRightMouseReleasedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setRightMouseReleasedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseMovedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  tguiCustomWidget_setMouseMovedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setKeyPressedCallback(tguiWidget * widget, void (*)(tguiKeyEvent) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(KeyEvent)`
   * @returns `void`
   */
  tguiCustomWidget_setKeyPressedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setTextEnteredCallback(tguiWidget * widget, void (*)(tguiChar32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Char32)`
   * @returns `void`
   */
  tguiCustomWidget_setTextEnteredCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setScrolledCallback(tguiWidget * widget, tguiBool (*)(float, tguiVector2f, tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(float, tguiVector2f, tguiBool)`
   * @returns `void`
   */
  tguiCustomWidget_setScrolledCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseNoLongerOnWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setMouseNoLongerOnWidgetCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseEnteredWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setMouseEnteredWidgetCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseLeftWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  tguiCustomWidget_setMouseLeftWidgetCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setRendererChangedCallback(tguiWidget * widget, tguiBool (*)(tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiUtf32)`
   * @returns `void`
   */
  tguiCustomWidget_setRendererChangedCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiCustomWidget_setDrawCallback(tguiWidget * widget, void (*)(tguiBackendRenderTarget *, tguiRenderStates *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(BackendRenderTarget *, tguiRenderStates *)`
   * @returns `void`
   */
  tguiCustomWidget_setDrawCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_getParentPath(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Utf32`
   */
  tguiFilesystem_getParentPath: { parameters: ["buffer"], result: "buffer" },

  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_joinPaths(tguiUtf32 path1, tguiUtf32 path2);
   * ```
   *
   * @param path1 `Utf32`
   * @param path2 `Utf32`
   * @returns `Utf32`
   */
  tguiFilesystem_joinPaths: {
    parameters: ["buffer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiBool tguiFilesystem_directoryExists(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  tguiFilesystem_directoryExists: { parameters: ["buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiFilesystem_fileExists(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  tguiFilesystem_fileExists: { parameters: ["buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiFilesystem_createDirectory(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  tguiFilesystem_createDirectory: { parameters: ["buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_getLocalDataDirectory();
   * ```
   *
   * @param
   * @returns `Utf32`
   */
  tguiFilesystem_getLocalDataDirectory: { parameters: [], result: "buffer" },

  /**
   * @original ```c
   * tguiFont * tguiFont_createNull();
   * ```
   *
   * @param
   * @returns `Font *`
   */
  tguiFont_createNull: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiFont * tguiFont_createFromFile(tguiUtf32 filename);
   * ```
   *
   * @param filename `Utf32`
   * @returns `Font *`
   */
  tguiFont_createFromFile: { parameters: ["buffer"], result: "pointer" },

  /**
   * @original ```c
   * tguiFont * tguiFont_createFromMemory(tguiUint8 * data, size_t dataSize);
   * ```
   *
   * @param data `Uint8 *`
   * @param dataSize `size_t`
   * @returns `Font *`
   */
  tguiFont_createFromMemory: {
    parameters: ["buffer", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFont_destroy(tguiFont * font);
   * ```
   *
   * @param font `Font *`
   * @returns `void`
   */
  tguiFont_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiFontGlyph tguiFont_getGlyph(const tguiFont * font, tguiChar32 codePoint, unsigned int characterSize, tguiBool bold, float outlineThickness);
   * ```
   *
   * @param font `const Font *`
   * @param codePoint `Char32`
   * @param characterSize `unsigned int`
   * @param bold `Bool`
   * @param outlineThickness `float`
   * @returns `FontGlyph { advance: float; bounds: tguiFloatRect; textureRect: tguiUIntRect }`
   */
  tguiFont_getGlyph: {
    parameters: ["pointer", "u32", "u32", "i16", "f32"],
    result: {
      struct: ["f32", { struct: ["f32", "f32", "f32", "f32"] }, {
        struct: ["u16", "u16", "u16", "u16"],
      }],
    },
  },

  /**
   * @original ```c
   * void tguiFont_setGlobalFont(const tguiFont * value);
   * ```
   *
   * @param value `const Font *`
   * @returns `void`
   */
  tguiFont_setGlobalFont: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiFont * tguiFont_getGlobalFont();
   * ```
   *
   * @param
   * @returns `const Font *`
   */
  tguiFont_getGlobalFont: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiUtf32 tguiFont_getId(const tguiFont * thisFont);
   * ```
   *
   * @param thisFont `const Font *`
   * @returns `Utf32`
   */
  tguiFont_getId: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * float tguiFont_getKerning(const tguiFont * thisFont, tguiChar32 first, tguiChar32 second, unsigned int characterSize, tguiBool bold);
   * ```
   *
   * @param thisFont `const Font *`
   * @param first `Char32`
   * @param second `Char32`
   * @param characterSize `unsigned int`
   * @param bold `Bool`
   * @returns `float`
   */
  tguiFont_getKerning: {
    parameters: ["pointer", "u32", "u32", "u32", "i16"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiFont_getLineSpacing(const tguiFont * thisFont, unsigned int characterSize);
   * ```
   *
   * @param thisFont `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiFont_getLineSpacing: { parameters: ["pointer", "u32"], result: "f32" },

  /**
   * @original ```c
   * float tguiFont_getFontHeight(const tguiFont * thisFont, unsigned int characterSize);
   * ```
   *
   * @param thisFont `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiFont_getFontHeight: { parameters: ["pointer", "u32"], result: "f32" },

  /**
   * @original ```c
   * void tguiFont_setSmooth(tguiFont * thisFont, tguiBool value);
   * ```
   *
   * @param thisFont `Font *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFont_setSmooth: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiFont_isSmooth(const tguiFont * thisFont);
   * ```
   *
   * @param thisFont `const Font *`
   * @returns `Bool`
   */
  tguiFont_isSmooth: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiLayout * tguiLayout_create(float constant);
   * ```
   *
   * @param constant `float`
   * @returns `Layout *`
   */
  tguiLayout_create: { parameters: ["f32"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiLayout_createFromString(const char * expression);
   * ```
   *
   * @param expression `const char *`
   * @returns `Layout *`
   */
  tguiLayout_createFromString: { parameters: ["buffer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiLayout_copy(const tguiLayout * other);
   * ```
   *
   * @param other `const Layout *`
   * @returns `Layout *`
   */
  tguiLayout_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiLayout_destroy(tguiLayout * layout);
   * ```
   *
   * @param layout `Layout *`
   * @returns `void`
   */
  tguiLayout_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiLayout_replaceValue(tguiLayout * layout, const tguiLayout * newLayout);
   * ```
   *
   * @param layout `Layout *`
   * @param newLayout `const Layout *`
   * @returns `void`
   */
  tguiLayout_replaceValue: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiLayout_getValue(const tguiLayout * layout);
   * ```
   *
   * @param layout `const Layout *`
   * @returns `float`
   */
  tguiLayout_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiBool tguiLayout_isConstant(const tguiLayout * layout);
   * ```
   *
   * @param layout `const Layout *`
   * @returns `Bool`
   */
  tguiLayout_isConstant: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_create(tguiVector2f constant);
   * ```
   *
   * @param constant `Vector2f { x: float; y: float }`
   * @returns `Layout2d *`
   */
  tguiLayout2d_create: {
    parameters: [{ struct: ["f32", "f32"] }],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_createFromLayouts(tguiLayout * x, tguiLayout * y);
   * ```
   *
   * @param x `Layout *`
   * @param y `Layout *`
   * @returns `Layout2d *`
   */
  tguiLayout2d_createFromLayouts: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_createFromString(const char * expression);
   * ```
   *
   * @param expression `const char *`
   * @returns `Layout2d *`
   */
  tguiLayout2d_createFromString: { parameters: ["buffer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_copy(const tguiLayout2d * other);
   * ```
   *
   * @param other `const Layout2d *`
   * @returns `Layout2d *`
   */
  tguiLayout2d_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiLayout2d_destroy(tguiLayout2d * layout);
   * ```
   *
   * @param layout `Layout2d *`
   * @returns `void`
   */
  tguiLayout2d_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiVector2f tguiLayout2d_getValue(const tguiLayout2d * layout);
   * ```
   *
   * @param layout `const Layout2d *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiLayout2d_getValue: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiLayout * tguiBindPosX(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindPosX: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindPosY(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindPosY: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindLeft(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindLeft: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindTop(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindTop: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindWidth(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindWidth: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindHeight(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindHeight: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindInnerWidth(const tguiWidget * container);
   * ```
   *
   * @param container `const Widget *`
   * @returns `Layout *`
   */
  tguiBindInnerWidth: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindInnerHeight(const tguiWidget * container);
   * ```
   *
   * @param container `const Widget *`
   * @returns `Layout *`
   */
  tguiBindInnerHeight: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindRight(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindRight: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindBottom(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout *`
   */
  tguiBindBottom: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout2d * tguiBindPosition(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout2d *`
   */
  tguiBindPosition: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout2d * tguiBindSize(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Layout2d *`
   */
  tguiBindSize: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout2d * tguiBindInnerSize(const tguiWidget * container);
   * ```
   *
   * @param container `const Widget *`
   * @returns `Layout2d *`
   */
  tguiBindInnerSize: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindMin(const tguiLayout * value1, const tguiLayout * value2);
   * ```
   *
   * @param value1 `const Layout *`
   * @param value2 `const Layout *`
   * @returns `Layout *`
   */
  tguiBindMin: { parameters: ["pointer", "pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiLayout * tguiBindMax(const tguiLayout * value1, const tguiLayout * value2);
   * ```
   *
   * @param value1 `const Layout *`
   * @param value2 `const Layout *`
   * @returns `Layout *`
   */
  tguiBindMax: { parameters: ["pointer", "pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiOutline * tguiOutline_create(float left, float top, float right, float bottom);
   * ```
   *
   * @param left `float`
   * @param top `float`
   * @param right `float`
   * @param bottom `float`
   * @returns `Outline *`
   */
  tguiOutline_create: {
    parameters: ["f32", "f32", "f32", "f32"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiOutline * tguiOutline_createFromStrings(const char * left, const char * top, const char * right, const char * bottom);
   * ```
   *
   * @param left `const char *`
   * @param top `const char *`
   * @param right `const char *`
   * @param bottom `const char *`
   * @returns `Outline *`
   */
  tguiOutline_createFromStrings: {
    parameters: ["buffer", "buffer", "buffer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiOutline * tguiOutline_copy(const tguiOutline * other);
   * ```
   *
   * @param other `const Outline *`
   * @returns `Outline *`
   */
  tguiOutline_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiOutline_destroy(tguiOutline * outline);
   * ```
   *
   * @param outline `Outline *`
   * @returns `void`
   */
  tguiOutline_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * float tguiOutline_getLeft(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  tguiOutline_getLeft: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiOutline_getTop(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  tguiOutline_getTop: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiOutline_getRight(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  tguiOutline_getRight: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiOutline_getBottom(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  tguiOutline_getBottom: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiRendererData * tguiRendererData_copy(const tguiRendererData * data);
   * ```
   *
   * @param data `const RendererData *`
   * @returns `RendererData *`
   */
  tguiRendererData_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiRendererData_destroy(tguiRendererData * data);
   * ```
   *
   * @param data `RendererData *`
   * @returns `void`
   */
  tguiRendererData_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiSprite * tguiSprite_createNull();
   * ```
   *
   * @param
   * @returns `Sprite *`
   */
  tguiSprite_createNull: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiSprite * tguiSprite_createFromTexture(tguiTexture * texture);
   * ```
   *
   * @param texture `Texture *`
   * @returns `Sprite *`
   */
  tguiSprite_createFromTexture: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiSprite_destroy(tguiSprite * sprite);
   * ```
   *
   * @param sprite `Sprite *`
   * @returns `void`
   */
  tguiSprite_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiSprite_isSet(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Bool`
   */
  tguiSprite_isSet: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiSprite_setTexture(tguiSprite * thisSprite, const tguiTexture * value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSprite_setTexture: { parameters: ["pointer", "pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiTexture * tguiSprite_getTexture(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `const Texture *`
   */
  tguiSprite_getTexture: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiSprite_setPosition(tguiSprite * thisSprite, tguiVector2f value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiSprite_setPosition: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiSprite_getPosition(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiSprite_getPosition: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiSprite_setSize(tguiSprite * thisSprite, tguiVector2f value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiSprite_setSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiSprite_getSize(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiSprite_getSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiSprite_setOpacity(tguiSprite * thisSprite, float value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `float`
   * @returns `void`
   */
  tguiSprite_setOpacity: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSprite_getOpacity(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `float`
   */
  tguiSprite_getOpacity: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSprite_setVisibleRect(tguiSprite * thisSprite, tguiFloatRect value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  tguiSprite_setVisibleRect: {
    parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiFloatRect tguiSprite_getVisibleRect(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  tguiSprite_getVisibleRect: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32", "f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiSprite_setRotation(tguiSprite * thisSprite, float value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `float`
   * @returns `void`
   */
  tguiSprite_setRotation: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSprite_getRotation(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `float`
   */
  tguiSprite_getRotation: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiBool tguiSprite_isTransparentPixel(const tguiSprite * thisSprite, tguiVector2f pos);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  tguiSprite_isTransparentPixel: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiSpriteScalingType tguiSprite_getScalingType(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `SpriteScalingType`
   */
  tguiSprite_getScalingType: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiText * tguiText_create();
   * ```
   *
   * @param
   * @returns `Text *`
   */
  tguiText_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiText_destroy(tguiText * text);
   * ```
   *
   * @param text `Text *`
   * @returns `void`
   */
  tguiText_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * float tguiText_getStaticExtraHorizontalPadding(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiText_getStaticExtraHorizontalPadding: {
    parameters: ["pointer", "u32"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiText_getStaticExtraHorizontalOffset(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiText_getStaticExtraHorizontalOffset: {
    parameters: ["pointer", "u32"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiText_getStaticExtraVerticalPadding(unsigned int characterSize);
   * ```
   *
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiText_getStaticExtraVerticalPadding: {
    parameters: ["u32"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiText_getStaticLineHeight(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  tguiText_getStaticLineHeight: {
    parameters: ["pointer", "u32"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiText_getStaticLineWidth(tguiUtf32 text, const tguiFont * font, unsigned int characterSize, tguiUint32 style);
   * ```
   *
   * @param text `Utf32`
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @param style `Uint32`
   * @returns `float`
   */
  tguiText_getStaticLineWidth: {
    parameters: ["buffer", "pointer", "u32", "u32"],
    result: "f32",
  },

  /**
   * @original ```c
   * unsigned int tguiText_findBestTextSize(const tguiFont * font, float height, int fit);
   * ```
   *
   * @param font `const Font *`
   * @param height `float`
   * @param fit `int`
   * @returns `unsigned int`
   */
  tguiText_findBestTextSize: {
    parameters: ["pointer", "f32", "i32"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiText_wordWrap(float maxWidth, tguiUtf32 text, const tguiFont * font, unsigned int textSize, tguiBool bold);
   * ```
   *
   * @param maxWidth `float`
   * @param text `Utf32`
   * @param font `const Font *`
   * @param textSize `unsigned int`
   * @param bold `Bool`
   * @returns `Utf32`
   */
  tguiText_wordWrap: {
    parameters: ["f32", "buffer", "pointer", "u32", "i16"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiVector2f tguiText_getSize(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiText_getSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiText_setPosition(tguiText * thisText, tguiVector2f value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiText_setPosition: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiText_getPosition(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiText_getPosition: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiText_setString(tguiText * thisText, tguiUtf32 value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiText_setString: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiText_getString(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Utf32`
   */
  tguiText_getString: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiText_setCharacterSize(tguiText * thisText, unsigned int value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiText_setCharacterSize: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiText_getCharacterSize(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `unsigned int`
   */
  tguiText_getCharacterSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiText_setColor(tguiText * thisText, tguiColor value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiText_setColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiText_getColor(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiText_getColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiText_setOpacity(tguiText * thisText, float value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `float`
   * @returns `void`
   */
  tguiText_setOpacity: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiText_getOpacity(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getOpacity: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiText_setFont(tguiText * thisText, const tguiFont * value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `const Font *`
   * @returns `void`
   */
  tguiText_setFont: { parameters: ["pointer", "pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiFont * tguiText_getFont(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `const Font *`
   */
  tguiText_getFont: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiText_setStyle(tguiText * thisText, tguiUint32 value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiText_setStyle: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * tguiUint32 tguiText_getStyle(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Uint32`
   */
  tguiText_getStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiText_setOutlineColor(tguiText * thisText, tguiColor value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiText_setOutlineColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiText_getOutlineColor(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiText_getOutlineColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiText_setOutlineThickness(tguiText * thisText, float value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `float`
   * @returns `void`
   */
  tguiText_setOutlineThickness: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiText_getOutlineThickness(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getOutlineThickness: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiVector2f tguiText_findCharacterPos(const tguiText * thisText, size_t index);
   * ```
   *
   * @param thisText `const Text *`
   * @param index `size_t`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiText_findCharacterPos: {
    parameters: ["pointer", "usize"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * float tguiText_getExtraHorizontalPadding(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getExtraHorizontalPadding: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiText_getExtraHorizontalOffset(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getExtraHorizontalOffset: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiText_getLineHeight(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getLineHeight: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiText_getLineWidth(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  tguiText_getLineWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createNull();
   * ```
   *
   * @param
   * @returns `Texture *`
   */
  tguiTexture_createNull: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromFile(tguiUtf32 filename, tguiUIntRect partRect, tguiUIntRect middleRect);
   * ```
   *
   * @param filename `Utf32`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `Texture *`
   */
  tguiTexture_createFromFile: {
    parameters: ["buffer", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromFileEx(tguiUtf32 filename, tguiUIntRect partRect, tguiUIntRect middleRect, tguiBool smoothing);
   * ```
   *
   * @param filename `Utf32`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param smoothing `Bool`
   * @returns `Texture *`
   */
  tguiTexture_createFromFileEx: {
    parameters: ["buffer", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromMemory(tguiUint8 * data, size_t dataSize, tguiUIntRect partRect, tguiUIntRect middleRect);
   * ```
   *
   * @param data `Uint8 *`
   * @param dataSize `size_t`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `Texture *`
   */
  tguiTexture_createFromMemory: {
    parameters: ["buffer", "usize", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromMemoryEx(tguiUint8 * data, size_t dataSize, tguiUIntRect partRect, tguiUIntRect middleRect, tguiBool smoothing);
   * ```
   *
   * @param data `Uint8 *`
   * @param dataSize `size_t`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param smoothing `Bool`
   * @returns `Texture *`
   */
  tguiTexture_createFromMemoryEx: {
    parameters: ["buffer", "usize", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromPixelData(tguiVector2u size, tguiUint8 * pixels, tguiUIntRect partRect, tguiUIntRect middleRect);
   * ```
   *
   * @param size `Vector2u { x: unsigned int; y: unsigned int }`
   * @param pixels `Uint8 *`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `Texture *`
   */
  tguiTexture_createFromPixelData: {
    parameters: [{ struct: ["u16", "u16"] }, "buffer", {
      struct: ["u16", "u16", "u16", "u16"],
    }, { struct: ["u16", "u16", "u16", "u16"] }],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromPixelDataEx(tguiVector2u size, tguiUint8 * pixels, tguiUIntRect partRect, tguiUIntRect middleRect, tguiBool smoothing);
   * ```
   *
   * @param size `Vector2u { x: unsigned int; y: unsigned int }`
   * @param pixels `Uint8 *`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param smoothing `Bool`
   * @returns `Texture *`
   */
  tguiTexture_createFromPixelDataEx: {
    parameters: [
      { struct: ["u16", "u16"] },
      "buffer",
      { struct: ["u16", "u16", "u16", "u16"] },
      { struct: ["u16", "u16", "u16", "u16"] },
      "i16",
    ],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromBase64(const char * imageAsBase64, tguiUIntRect partRect, tguiUIntRect middleRect);
   * ```
   *
   * @param imageAsBase64 `const char *`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `Texture *`
   */
  tguiTexture_createFromBase64: {
    parameters: ["buffer", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiTexture_createFromBase64Ex(const char * imageAsBase64, tguiUIntRect partRect, tguiUIntRect middleRect, tguiBool smoothing);
   * ```
   *
   * @param imageAsBase64 `const char *`
   * @param partRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param middleRect `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @param smoothing `Bool`
   * @returns `Texture *`
   */
  tguiTexture_createFromBase64Ex: {
    parameters: ["buffer", { struct: ["u16", "u16", "u16", "u16"] }, {
      struct: ["u16", "u16", "u16", "u16"],
    }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTexture_destroy(tguiTexture * texture);
   * ```
   *
   * @param texture `Texture *`
   * @returns `void`
   */
  tguiTexture_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTexture_setColor(tguiTexture * thisTexture, tguiColor value);
   * ```
   *
   * @param thisTexture `Texture *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTexture_setColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTexture_getColor(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTexture_getColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTexture_setMiddleRect(tguiTexture * thisTexture, tguiUIntRect value);
   * ```
   *
   * @param thisTexture `Texture *`
   * @param value `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `void`
   */
  tguiTexture_setMiddleRect: {
    parameters: ["pointer", { struct: ["u16", "u16", "u16", "u16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUIntRect tguiTexture_getMiddleRect(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   */
  tguiTexture_getMiddleRect: {
    parameters: ["pointer"],
    result: { struct: ["u16", "u16", "u16", "u16"] },
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTexture_getId(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Utf32`
   */
  tguiTexture_getId: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiVector2u tguiTexture_getImageSize(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Vector2u { x: unsigned int; y: unsigned int }`
   */
  tguiTexture_getImageSize: {
    parameters: ["pointer"],
    result: { struct: ["u16", "u16"] },
  },

  /**
   * @original ```c
   * tguiUIntRect tguiTexture_getPartRect(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   */
  tguiTexture_getPartRect: {
    parameters: ["pointer"],
    result: { struct: ["u16", "u16", "u16", "u16"] },
  },

  /**
   * @original ```c
   * tguiBool tguiTexture_isSmooth(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Bool`
   */
  tguiTexture_isSmooth: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiTexture_isTransparentPixel(const tguiTexture * thisTexture, tguiVector2u pos);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @param pos `Vector2u { x: unsigned int; y: unsigned int }`
   * @returns `Bool`
   */
  tguiTexture_isTransparentPixel: {
    parameters: ["pointer", { struct: ["u16", "u16"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTexture_setDefaultSmooth(tguiBool smooth);
   * ```
   *
   * @param smooth `Bool`
   * @returns `void`
   */
  tguiTexture_setDefaultSmooth: { parameters: ["i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiTexture_getDefaultSmooth();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  tguiTexture_getDefaultSmooth: { parameters: [], result: "i16" },

  /**
   * @original ```c
   * tguiTheme * tguiTheme_create();
   * ```
   *
   * @param
   * @returns `Theme *`
   */
  tguiTheme_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiTheme * tguiTheme_copy(const tguiTheme * theme);
   * ```
   *
   * @param theme `const Theme *`
   * @returns `Theme *`
   */
  tguiTheme_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiTheme_destroy(tguiTheme * theme);
   * ```
   *
   * @param theme `Theme *`
   * @returns `void`
   */
  tguiTheme_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiTheme_load(tguiTheme * theme, tguiUtf32 filename);
   * ```
   *
   * @param theme `Theme *`
   * @param filename `Utf32`
   * @returns `Bool`
   */
  tguiTheme_load: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * void tguiTheme_replace(tguiTheme * theme, tguiTheme * otherTheme);
   * ```
   *
   * @param theme `Theme *`
   * @param otherTheme `Theme *`
   * @returns `void`
   */
  tguiTheme_replace: { parameters: ["pointer", "pointer"], result: "void" },

  /**
   * @original ```c
   * tguiRendererData * tguiTheme_getRenderer(tguiTheme * theme, tguiUtf32 id);
   * ```
   *
   * @param theme `Theme *`
   * @param id `Utf32`
   * @returns `RendererData *`
   */
  tguiTheme_getRenderer: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTheme_setDefault(tguiTheme * defaultTheme);
   * ```
   *
   * @param defaultTheme `Theme *`
   * @returns `void`
   */
  tguiTheme_setDefault: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiTheme * tguiTheme_getDefault();
   * ```
   *
   * @param
   * @returns `Theme *`
   */
  tguiTheme_getDefault: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiBool tguiTheme_hasGlobalProperty(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  tguiTheme_hasGlobalProperty: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyBool(const tguiTheme * theme, tguiUtf32 property, tguiBool * value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Bool *`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyBool: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyFont(const tguiTheme * theme, tguiUtf32 property, tguiFont ** value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Font **`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyFont: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyColor(const tguiTheme * theme, tguiUtf32 property, tguiColor * value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Color *`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyColor: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyString(const tguiTheme * theme, tguiUtf32 property, tguiUtf32 * value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Utf32 *`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyString: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyNumber(const tguiTheme * theme, tguiUtf32 property, float * value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `float *`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyNumber: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyOutline(const tguiTheme * theme, tguiUtf32 property, tguiOutline ** value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Outline **`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyOutline: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyTexture(const tguiTheme * theme, tguiUtf32 property, tguiTexture ** value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Texture **`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyTexture: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyTextStyle(const tguiTheme * theme, tguiUtf32 property, tguiUint32 * value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `Uint32 *`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyTextStyle: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyRendererData(const tguiTheme * theme, tguiUtf32 property, tguiRendererData ** value);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @param value `RendererData **`
   * @returns `Bool`
   */
  tguiTheme_getGlobalPropertyRendererData: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTheme_addRendererDefaultSubwidget(tguiUtf32 widgetType, tguiUtf32 property, tguiUtf32 propertyWidgetType);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @param propertyWidgetType `Utf32`
   * @returns `void`
   */
  tguiTheme_addRendererDefaultSubwidget: {
    parameters: ["buffer", "buffer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererDefaultSubwidget(tguiUtf32 widgetType, tguiUtf32 property);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  tguiTheme_getRendererDefaultSubwidget: {
    parameters: ["buffer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiTheme_addRendererInheritedGlobalProperty(tguiUtf32 widgetType, tguiUtf32 property, tguiUtf32 globalProperty);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @param globalProperty `Utf32`
   * @returns `void`
   */
  tguiTheme_addRendererInheritedGlobalProperty: {
    parameters: ["buffer", "buffer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererInheritedGlobalProperty(tguiUtf32 widgetType, tguiUtf32 property);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  tguiTheme_getRendererInheritedGlobalProperty: {
    parameters: ["buffer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiTheme_addRenderer(tguiTheme * thisTheme, tguiUtf32 id, const tguiRendererData * renderer);
   * ```
   *
   * @param thisTheme `Theme *`
   * @param id `Utf32`
   * @param renderer `const RendererData *`
   * @returns `void`
   */
  tguiTheme_addRenderer: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiTheme_removeRenderer(tguiTheme * thisTheme, tguiUtf32 id);
   * ```
   *
   * @param thisTheme `Theme *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiTheme_removeRenderer: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getPrimary(const tguiTheme * thisTheme);
   * ```
   *
   * @param thisTheme `const Theme *`
   * @returns `Utf32`
   */
  tguiTheme_getPrimary: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiTheme_addRendererInheritanceParent(tguiUtf32 widgetType, tguiUtf32 parentType);
   * ```
   *
   * @param widgetType `Utf32`
   * @param parentType `Utf32`
   * @returns `void`
   */
  tguiTheme_addRendererInheritanceParent: {
    parameters: ["buffer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererInheritanceParent(tguiUtf32 widgetType);
   * ```
   *
   * @param widgetType `Utf32`
   * @returns `Utf32`
   */
  tguiTheme_getRendererInheritanceParent: {
    parameters: ["buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiTimer_scheduleCallback(void (*)(void) callback, tguiDuration interval);
   * ```
   *
   * @param callback `void (*)(void)`
   * @param interval `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiTimer_scheduleCallback: {
    parameters: ["function", { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiTimer * tguiTimer_create(void (*)(tguiTimer *) callback, tguiDuration interval, tguiBool enable);
   * ```
   *
   * @param callback `void (*)(Timer *)`
   * @param interval `Duration { nanoseconds: long long }`
   * @param enable `Bool`
   * @returns `Timer *`
   */
  tguiTimer_create: {
    parameters: ["function", { struct: ["i64"] }, "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTimer_destroy(tguiTimer * timer);
   * ```
   *
   * @param timer `Timer *`
   * @returns `void`
   */
  tguiTimer_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTimer_setInterval(tguiTimer * timer, tguiDuration interval);
   * ```
   *
   * @param timer `Timer *`
   * @param interval `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiTimer_setInterval: {
    parameters: ["pointer", { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiDuration tguiTimer_getInterval(const tguiTimer * timer);
   * ```
   *
   * @param timer `const Timer *`
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiTimer_getInterval: {
    parameters: ["pointer"],
    result: { struct: ["i64"] },
  },

  /**
   * @original ```c
   * void tguiTimer_setEnabled(tguiTimer * timer, tguiBool enabled);
   * ```
   *
   * @param timer `Timer *`
   * @param enabled `Bool`
   * @returns `void`
   */
  tguiTimer_setEnabled: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiTimer_isEnabled(const tguiTimer * timer);
   * ```
   *
   * @param timer `const Timer *`
   * @returns `Bool`
   */
  tguiTimer_isEnabled: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiTimer_setCallback(tguiTimer * timer, void (*)(tguiTimer *) callback);
   * ```
   *
   * @param timer `Timer *`
   * @param callback `void (*)(Timer *)`
   * @returns `void`
   */
  tguiTimer_setCallback: {
    parameters: ["pointer", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiTimer_restart(tguiTimer * timer);
   * ```
   *
   * @param timer `Timer *`
   * @returns `void`
   */
  tguiTimer_restart: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiToolTip_setInitialDelay(tguiDuration value);
   * ```
   *
   * @param value `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiToolTip_setInitialDelay: {
    parameters: [{ struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiDuration tguiToolTip_getInitialDelay();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  tguiToolTip_getInitialDelay: { parameters: [], result: { struct: ["i64"] } },

  /**
   * @original ```c
   * void tguiToolTip_setDistanceToMouse(tguiVector2f value);
   * ```
   *
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiToolTip_setDistanceToMouse: {
    parameters: [{ struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiToolTip_getDistanceToMouse();
   * ```
   *
   * @param
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiToolTip_getDistanceToMouse: {
    parameters: [],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiToolTip_setShowOnDisabledWidget(tguiBool value);
   * ```
   *
   * @param value `Bool`
   * @returns `void`
   */
  tguiToolTip_setShowOnDisabledWidget: { parameters: ["i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiToolTip_getShowOnDisabledWidget();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  tguiToolTip_getShowOnDisabledWidget: { parameters: [], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_copy(const tguiWidget * other);
   * ```
   *
   * @param other `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_destroy(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `void`
   */
  tguiWidget_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_addPointerReference(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `Widget *`
   */
  tguiWidget_addPointerReference: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiWidget_setAutoLayout(const tguiWidget * widget, tguiAutoLayout layout);
   * ```
   *
   * @param widget `const Widget *`
   * @param layout `AutoLayout`
   * @returns `void`
   */
  tguiWidget_setAutoLayout: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiAutoLayout tguiWidget_getAutoLayout(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `AutoLayout`
   */
  tguiWidget_getAutoLayout: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(void)`
   * @returns `unsigned int`
   */
  tguiWidget_signalConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalConnectEx(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiWidget *, tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Widget *, tguiUtf32)`
   * @returns `unsigned int`
   */
  tguiWidget_signalConnectEx: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalIntConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  tguiWidget_signalIntConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalUIntConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(unsigned int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(unsigned int)`
   * @returns `unsigned int`
   */
  tguiWidget_signalUIntConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalSizeTConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(size_t) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(size_t)`
   * @returns `unsigned int`
   */
  tguiWidget_signalSizeTConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalBoolConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Bool)`
   * @returns `unsigned int`
   */
  tguiWidget_signalBoolConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFloatConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(float) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(float)`
   * @returns `unsigned int`
   */
  tguiWidget_signalFloatConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalColorConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiColor) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Color)`
   * @returns `unsigned int`
   */
  tguiWidget_signalColorConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalStringConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Utf32)`
   * @returns `unsigned int`
   */
  tguiWidget_signalStringConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalVector2fConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Vector2f)`
   * @returns `unsigned int`
   */
  tguiWidget_signalVector2fConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFloatRectConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiFloatRect) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(FloatRect)`
   * @returns `unsigned int`
   */
  tguiWidget_signalFloatRectConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalBoolPtrConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiBool *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Bool *)`
   * @returns `unsigned int`
   */
  tguiWidget_signalBoolPtrConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalRangeConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(float, float) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(float, float)`
   * @returns `unsigned int`
   */
  tguiWidget_signalRangeConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalTabSelectionChangingConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(int, tguiBool *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(int, Bool *)`
   * @returns `unsigned int`
   */
  tguiWidget_signalTabSelectionChangingConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalChildWindowConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiWidget *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(Widget *)`
   * @returns `unsigned int`
   */
  tguiWidget_signalChildWindowConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalItemConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  tguiWidget_signalItemConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalPanelListBoxItemConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  tguiWidget_signalPanelListBoxItemConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFileDialogPathsConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(size_t, const tguiUtf32 *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(size_t, const Utf32 *)`
   * @returns `unsigned int`
   */
  tguiWidget_signalFileDialogPathsConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalShowEffectConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiShowEffectType, tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(ShowEffectType, tguiBool)`
   * @returns `unsigned int`
   */
  tguiWidget_signalShowEffectConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalAnimationTypeConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(tguiAnimationType) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(AnimationType)`
   * @returns `unsigned int`
   */
  tguiWidget_signalAnimationTypeConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiWidget_signalItemHierarchyConnect(tguiWidget * widget, tguiUtf32 signalName, void (*)(size_t, const tguiUtf32 *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param function `void (*)(size_t, const Utf32 *)`
   * @returns `unsigned int`
   */
  tguiWidget_signalItemHierarchyConnect: {
    parameters: ["pointer", "buffer", "function"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_signalDisconnect(tguiWidget * widget, tguiUtf32 signalName, unsigned int id);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param id `unsigned int`
   * @returns `Bool`
   */
  tguiWidget_signalDisconnect: {
    parameters: ["pointer", "buffer", "u32"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiWidget_signalDisconnectAll(tguiWidget * widget, tguiUtf32 signalName);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @returns `void`
   */
  tguiWidget_signalDisconnectAll: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_setSignalEnabled(tguiWidget * widget, tguiUtf32 signalName, tguiBool enabled);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @param enabled `Bool`
   * @returns `Bool`
   */
  tguiWidget_setSignalEnabled: {
    parameters: ["pointer", "buffer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_isSignalEnabled(tguiWidget * widget, tguiUtf32 signalName);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `Utf32`
   * @returns `Bool`
   */
  tguiWidget_isSignalEnabled: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_setRenderer(tguiWidget * widget, tguiRendererData * renderer);
   * ```
   *
   * @param widget `Widget *`
   * @param renderer `RendererData *`
   * @returns `Bool`
   */
  tguiWidget_setRenderer: { parameters: ["pointer", "pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiRenderer * tguiWidget_getRenderer(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Renderer *`
   */
  tguiWidget_getRenderer: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiWidget_getSharedRenderer(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Renderer *`
   */
  tguiWidget_getSharedRenderer: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_showWithEffect(tguiWidget * widget, tguiShowEffectType type, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param type `ShowEffectType`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiWidget_showWithEffect: {
    parameters: ["pointer", "i16", { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_hideWithEffect(tguiWidget * widget, tguiShowEffectType type, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param type `ShowEffectType`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiWidget_hideWithEffect: {
    parameters: ["pointer", "i16", { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_moveWithAnimation(tguiWidget * widget, tguiVector2f position, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param position `Vector2f { x: float; y: float }`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiWidget_moveWithAnimation: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_resizeWithAnimation(tguiWidget * widget, tguiVector2f size, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param size `Vector2f { x: float; y: float }`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiWidget_resizeWithAnimation: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setToolTip(tguiWidget * widget, tguiWidget * toolTip);
   * ```
   *
   * @param widget `Widget *`
   * @param toolTip `Widget *`
   * @returns `void`
   */
  tguiWidget_setToolTip: { parameters: ["pointer", "pointer"], result: "void" },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getToolTip(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getToolTip: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getParent(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getParent: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiGui * tguiWidget_getParentGui(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Gui *`
   */
  tguiWidget_getParentGui: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_updateTime(tguiWidget * widget, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  tguiWidget_updateTime: {
    parameters: ["pointer", { struct: ["i64"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setPosition(tguiWidget * thisWidget, tguiVector2f position);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param position `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setPosition: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setPositionFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  tguiWidget_setPositionFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getPosition: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getAbsolutePosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getAbsolutePosition: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getAbsolutePositionWithOffset(const tguiWidget * thisWidget, tguiVector2f offset);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param offset `Vector2f { x: float; y: float }`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getAbsolutePositionWithOffset: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getWidgetOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getWidgetOffset: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiWidget_setWidth(tguiWidget * thisWidget, float width);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param width `float`
   * @returns `void`
   */
  tguiWidget_setWidth: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_setWidthFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  tguiWidget_setWidthFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setHeight(tguiWidget * thisWidget, float height);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param height `float`
   * @returns `void`
   */
  tguiWidget_setHeight: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_setHeightFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  tguiWidget_setHeightFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setSize(tguiWidget * thisWidget, tguiVector2f size);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param size `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setSizeFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  tguiWidget_setSizeFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getFullSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getFullSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiWidget_setOrigin(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setOrigin: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getOrigin: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiWidget_setScale(tguiWidget * thisWidget, tguiVector2f origin);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setScale: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidget_setScaleWithOrigin(tguiWidget * thisWidget, tguiVector2f scale, tguiVector2f origin);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param scale `Vector2f { x: float; y: float }`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setScaleWithOrigin: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, {
      struct: ["f32", "f32"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getScale(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getScale: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getScaleOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getScaleOrigin: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiWidget_setRotation(tguiWidget * thisWidget, float angle);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param angle `float`
   * @returns `void`
   */
  tguiWidget_setRotation: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_setRotationWithOrigin(tguiWidget * thisWidget, float angle, tguiVector2f origin);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param angle `float`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiWidget_setRotationWithOrigin: {
    parameters: ["pointer", "f32", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiWidget_getRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiWidget_getRotation: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getRotationOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiWidget_getRotationOrigin: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiWidget_setVisible(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidget_setVisible: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isVisible(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isVisible: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_setEnabled(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidget_setEnabled: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isEnabled(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isEnabled: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_setFocused(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidget_setFocused: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isFocused(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isFocused: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_setFocusable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidget_setFocusable: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isFocusable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isFocusable: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getWidgetType(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiWidget_getWidgetType: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiWidget_moveToFront(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiWidget_moveToFront: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_moveToBack(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiWidget_moveToBack: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_setUserData(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiWidget_setUserData: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getUserData(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiWidget_getUserData: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiBool tguiWidget_hasUserData(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_hasUserData: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isAnimationPlaying(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isAnimationPlaying: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_setTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiWidget_setTextSize: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiWidget_getTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiWidget_getTextSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiWidget_setWidgetName(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiWidget_setWidgetName: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getWidgetName(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiWidget_getWidgetName: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiWidget_setMouseCursor(tguiWidget * thisWidget, tguiCursorType value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `CursorType`
   * @returns `void`
   */
  tguiWidget_setMouseCursor: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiCursorType tguiWidget_getMouseCursor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `CursorType`
   */
  tguiWidget_getMouseCursor: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_setNavigationUp(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  tguiWidget_setNavigationUp: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationUp(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getNavigationUp: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_setNavigationDown(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  tguiWidget_setNavigationDown: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getNavigationDown: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_setNavigationLeft(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  tguiWidget_setNavigationLeft: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationLeft(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getNavigationLeft: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_setNavigationRight(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  tguiWidget_setNavigationRight: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationRight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  tguiWidget_getNavigationRight: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidget_setIgnoreMouseEvents(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidget_setIgnoreMouseEvents: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_getIgnoreMouseEvents(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_getIgnoreMouseEvents: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiWidget_finishAllAnimations(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiWidget_finishAllAnimations: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiWidget_setAutoLayoutUpdateEnabled(tguiWidget * thisWidget, tguiBool enabled);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param enabled `Bool`
   * @returns `void`
   */
  tguiWidget_setAutoLayoutUpdateEnabled: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiWidget_isMouseDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiWidget_isMouseDown: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiWidget_isMouseOnWidget(const tguiWidget * thisWidget, tguiVector2f pos);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  tguiWidget_isMouseOnWidget: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "i16",
  },

  /**
   * @original ```c
   * sfEvent * SFMLEvent_create();
   * ```
   *
   * @param
   * @returns `sfEvent *`
   */
  SFMLEvent_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * SFMLEventUnion SFMLEvent_convertToUnion(sfEvent * SFMLEvent);
   * ```
   *
   * @param SFMLEvent `sfEvent *`
   * @returns `SFMLEventUnion { type: sfEventType; size: sfSizeEvent; key: sfKeyEvent; text: sfTextEvent; mouseMove: sfMouseMoveEvent; mouseButton: sfMouseButtonEvent; mouseWheel: sfMouseWheelEvent; mouseWheelScroll: sfMouseWheelScrollEvent; joystickMove: sfJoystickMoveEvent; joystickButton: sfJoystickButtonEvent; joystickConnect: sfJoystickConnectEvent; touch: sfTouchEvent; sensor: sfSensorEvent }`
   */
  SFMLEvent_convertToUnion: {
    parameters: ["pointer"],
    result: {
      struct: [
        "i32",
        { struct: ["i32", "u32", "u32"] },
        { struct: ["i32", "i32", "i32", "i32", "i32", "i32", "i32"] },
        { struct: ["i32", "u32"] },
        { struct: ["i32", "i32", "i32"] },
        { struct: ["i32", "i32", "i32", "i32"] },
        { struct: ["i32", "i32", "i32", "i32"] },
        { struct: ["i32", "i32", "f32", "i32", "i32"] },
        { struct: ["i32", "u32", "i32", "f32"] },
        { struct: ["i32", "u32", "u32"] },
        { struct: ["i32", "u32"] },
        { struct: ["i32", "u32", "i32", "i32"] },
        { struct: ["i32", "i32", "f32", "f32", "f32"] },
      ],
    },
  },

  /**
   * @original ```c
   * void SFMLEvent_destroy(sfEvent * SFMLEvent);
   * ```
   *
   * @param SFMLEvent `sfEvent *`
   * @returns `void`
   */
  SFMLEvent_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * sfRenderWindow * renderWindow_create(sfVideoMode mode, const char * title, unsigned int style);
   * ```
   *
   * @param mode `sfVideoMode { width: unsigned int; height: unsigned int; bitsPerPixel: unsigned int }`
   * @param title `const char *`
   * @param style `unsigned int`
   * @returns `sfRenderWindow *`
   */
  renderWindow_create: {
    parameters: [{ struct: ["u32", "u32", "u32"] }, "buffer", "u32"],
    result: "pointer",
  },

  /**
   * @original ```c
   * sfBool renderWindow_isOpen(const sfWindow * window);
   * ```
   *
   * @param window `const sfWindow *`
   * @returns `sfBool`
   */
  renderWindow_isOpen: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * sfBool renderWindow_pollEvent(sfRenderWindow * window, sfEvent * event);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @param event `sfEvent *`
   * @returns `sfBool`
   */
  renderWindow_pollEvent: { parameters: ["pointer", "pointer"], result: "i32" },

  /**
   * @original ```c
   * void renderWindow_close(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  renderWindow_close: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void renderWindow_clear(sfRenderWindow * window, sfColor color);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @param color `sfColor { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char }`
   * @returns `void`
   */
  renderWindow_clear: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void renderWindow_display(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  renderWindow_display: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void renderWindow_destroy(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  renderWindow_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiWidget * tguiBitmapButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiBitmapButton_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiBitmapButton_setImage(tguiWidget * thisWidget, const tguiTexture * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiBitmapButton_setImage: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiBitmapButton_getImage(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `const Texture *`
   */
  tguiBitmapButton_getImage: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiBitmapButton_setImageScaling(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiBitmapButton_setImageScaling: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiBitmapButton_getImageScaling(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiBitmapButton_getImageScaling: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiBoxLayout_insert(tguiWidget * thisWidget, size_t index, tguiWidget * widgetToAdd, tguiUtf32 widgetName);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param widgetToAdd `Widget *`
   * @param widgetName `Utf32`
   * @returns `void`
   */
  tguiBoxLayout_insert: {
    parameters: ["pointer", "usize", "pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiBoxLayout_removeAtIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiBoxLayout_removeAtIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiBoxLayout_getAtIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Widget *`
   */
  tguiBoxLayout_getAtIndex: {
    parameters: ["pointer", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiBoxLayoutRatios_add(tguiWidget * thisWidget, tguiWidget * widget, float ratio, tguiUtf32 widgetName);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param ratio `float`
   * @param widgetName `Utf32`
   * @returns `void`
   */
  tguiBoxLayoutRatios_add: {
    parameters: ["pointer", "pointer", "f32", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBoxLayoutRatios_insert(tguiWidget * thisWidget, size_t index, tguiWidget * widget, float ratio, tguiUtf32 widgetName);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param widget `Widget *`
   * @param ratio `float`
   * @param widgetName `Utf32`
   * @returns `void`
   */
  tguiBoxLayoutRatios_insert: {
    parameters: ["pointer", "usize", "pointer", "f32", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBoxLayoutRatios_addSpace(tguiWidget * thisWidget, float ratio);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param ratio `float`
   * @returns `void`
   */
  tguiBoxLayoutRatios_addSpace: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiBoxLayoutRatios_insertSpace(tguiWidget * thisWidget, size_t index, float ratio);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param ratio `float`
   * @returns `void`
   */
  tguiBoxLayoutRatios_insertSpace: {
    parameters: ["pointer", "usize", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiBoxLayoutRatios_setRatio(tguiWidget * thisWidget, tguiWidget * widget, float ratio);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param ratio `float`
   * @returns `Bool`
   */
  tguiBoxLayoutRatios_setRatio: {
    parameters: ["pointer", "pointer", "f32"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiBoxLayoutRatios_setRatioAtIndex(tguiWidget * thisWidget, size_t index, float ratio);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param ratio `float`
   * @returns `Bool`
   */
  tguiBoxLayoutRatios_setRatioAtIndex: {
    parameters: ["pointer", "usize", "f32"],
    result: "i16",
  },

  /**
   * @original ```c
   * float tguiBoxLayoutRatios_getRatio(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `float`
   */
  tguiBoxLayoutRatios_getRatio: {
    parameters: ["pointer", "pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiBoxLayoutRatios_getRatioAtIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  tguiBoxLayoutRatios_getRatioAtIndex: {
    parameters: ["pointer", "usize"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiWidget * tguiButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiButton_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiButtonBase_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiButtonBase_setText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiButtonBase_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiButtonBase_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiButtonBase_setIgnoreKeyEvents(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiButtonBase_setIgnoreKeyEvents: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiButtonBase_getIgnoreKeyEvents(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiButtonBase_getIgnoreKeyEvents: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiButtonBase_setTextPositionAbs(tguiWidget * widget, tguiVector2f position, tguiVector2f origin);
   * ```
   *
   * @param widget `Widget *`
   * @param position `Vector2f { x: float; y: float }`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiButtonBase_setTextPositionAbs: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, {
      struct: ["f32", "f32"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiButtonBase_setTextPositionRel(tguiWidget * widget, tguiVector2f position, tguiVector2f origin);
   * ```
   *
   * @param widget `Widget *`
   * @param position `Vector2f { x: float; y: float }`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiButtonBase_setTextPositionRel: {
    parameters: ["pointer", { struct: ["f32", "f32"] }, {
      struct: ["f32", "f32"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiChatBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiChatBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiChatBox_addLine(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiChatBox_addLine: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * void tguiChatBox_addLineWithColor(tguiWidget * thisWidget, tguiUtf32 text, tguiColor color);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @param color `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChatBox_addLineWithColor: {
    parameters: ["pointer", "buffer", {
      struct: ["u8", "u8", "u8", "u8", "i16"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiChatBox_addLineWithColorAndStyle(tguiWidget * thisWidget, tguiUtf32 text, tguiColor color, tguiUint32 style);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @param color `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @param style `Uint32`
   * @returns `void`
   */
  tguiChatBox_addLineWithColorAndStyle: {
    parameters: ["pointer", "buffer", {
      struct: ["u8", "u8", "u8", "u8", "i16"],
    }, "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiChatBox_getLine(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Utf32`
   */
  tguiChatBox_getLine: { parameters: ["pointer", "usize"], result: "buffer" },

  /**
   * @original ```c
   * tguiColor tguiChatBox_getLineColor(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChatBox_getLineColor: {
    parameters: ["pointer", "usize"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiUint32 tguiChatBox_getLineTextStyle(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Uint32`
   */
  tguiChatBox_getLineTextStyle: {
    parameters: ["pointer", "usize"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiBool tguiChatBox_removeLine(tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param lineIndex `size_t`
   * @returns `Bool`
   */
  tguiChatBox_removeLine: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * void tguiChatBox_removeAllLines(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiChatBox_removeAllLines: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * size_t tguiChatBox_getLineAmount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiChatBox_getLineAmount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiChatBox_setLineLimit(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiChatBox_setLineLimit: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiChatBox_getLineLimit(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiChatBox_getLineLimit: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiChatBox_setTextColor(tguiWidget * thisWidget, tguiColor value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChatBox_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChatBox_getTextColor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChatBox_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChatBox_setTextStyle(tguiWidget * thisWidget, tguiUint32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiChatBox_setTextStyle: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * tguiUint32 tguiChatBox_getTextStyle(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Uint32`
   */
  tguiChatBox_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiChatBox_setLinesStartFromTop(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChatBox_setLinesStartFromTop: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChatBox_getLinesStartFromTop(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiChatBox_getLinesStartFromTop: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiChatBox_setNewLinesBelowOthers(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChatBox_setNewLinesBelowOthers: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChatBox_getNewLinesBelowOthers(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiChatBox_getNewLinesBelowOthers: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiCheckBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiCheckBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiChildWindow_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiChildWindow_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiChildWindow_setClientSize(tguiWidget * thisWidget, tguiVector2f size);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param size `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiChildWindow_setClientSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiChildWindow_setClientSizeFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  tguiChildWindow_setClientSizeFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getClientSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiChildWindow_getClientSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiChildWindow_setMaximumSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiChildWindow_setMaximumSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getMaximumSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiChildWindow_getMaximumSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiChildWindow_setMinimumSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiChildWindow_setMinimumSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getMinimumSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiChildWindow_getMinimumSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiChildWindow_setTitle(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiChildWindow_setTitle: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiChildWindow_getTitle(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiChildWindow_getTitle: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiChildWindow_setTitleTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiChildWindow_setTitleTextSize: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiChildWindow_getTitleTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiChildWindow_getTitleTextSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiChildWindow_setTitleAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiChildWindow_setTitleAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiChildWindow_getTitleAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiChildWindow_getTitleAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiChildWindow_setTitleButtons(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiChildWindow_setTitleButtons: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiChildWindow_getTitleButtons(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiChildWindow_getTitleButtons: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiChildWindow_setCloseBehavior(tguiWidget * thisWidget, tguiChildWindowCloseBehavior value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ChildWindowCloseBehavior`
   * @returns `void`
   */
  tguiChildWindow_setCloseBehavior: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiChildWindowCloseBehavior tguiChildWindow_getCloseBehavior(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ChildWindowCloseBehavior`
   */
  tguiChildWindow_getCloseBehavior: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiChildWindow_setResizable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChildWindow_setResizable: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChildWindow_isResizable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiChildWindow_isResizable: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiChildWindow_setKeepInParent(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChildWindow_setKeepInParent: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChildWindow_getKeepInParent(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiChildWindow_getKeepInParent: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiChildWindow_setPositionLocked(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChildWindow_setPositionLocked: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChildWindow_isPositionLocked(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiChildWindow_isPositionLocked: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiClickableWidget_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiClickableWidget_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiColorPicker_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiColorPicker_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiColorPicker_setColor(tguiWidget * thisWidget, tguiColor value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiColorPicker_setColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiColorPicker_getColor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiColorPicker_getColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiWidget * tguiComboBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiComboBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiComboBox_setItemsToDisplay(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiComboBox_setItemsToDisplay: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiComboBox_getItemsToDisplay(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiComboBox_getItemsToDisplay: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * size_t tguiComboBox_addItem(tguiWidget * thisWidget, tguiUtf32 item, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @param id `Utf32`
   * @returns `size_t`
   */
  tguiComboBox_addItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiComboBox_addMultipleItems(tguiWidget * thisWidget, const tguiUtf32 * items, size_t itemsLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param items `const Utf32 *`
   * @param itemsLength `size_t`
   * @returns `void`
   */
  tguiComboBox_addMultipleItems: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Utf32`
   */
  tguiComboBox_getItemById: {
    parameters: ["pointer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiComboBox_getItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * int tguiComboBox_getIndexById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `int`
   */
  tguiComboBox_getIndexById: {
    parameters: ["pointer", "buffer"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getIdByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiComboBox_getIdByIndex: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiComboBox_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiComboBox_getItems: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiComboBox_getItemIds(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiComboBox_getItemIds: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_setSelectedItem: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItemById(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_setSelectedItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiComboBox_setSelectedItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiComboBox_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiComboBox_deselectItem: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_removeItem: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_removeItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiComboBox_removeItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiComboBox_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiComboBox_removeAllItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getSelectedItem(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiComboBox_getSelectedItem: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getSelectedItemId(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiComboBox_getSelectedItemId: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * int tguiComboBox_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiComboBox_getSelectedItemIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * tguiBool tguiComboBox_changeItem(tguiWidget * thisWidget, tguiUtf32 originalValue, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param originalValue `Utf32`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_changeItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_changeItemById(tguiWidget * thisWidget, tguiUtf32 id, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_changeItemById: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_changeItemByIndex(tguiWidget * thisWidget, size_t index, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_changeItemByIndex: {
    parameters: ["pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * size_t tguiComboBox_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiComboBox_getItemCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiComboBox_setItemData(tguiWidget * thisWidget, size_t index, tguiUtf32 data);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param data `Utf32`
   * @returns `void`
   */
  tguiComboBox_setItemData: {
    parameters: ["pointer", "usize", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiComboBox_getItemData: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiComboBox_setMaximumItems(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiComboBox_setMaximumItems: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiComboBox_getMaximumItems(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiComboBox_getMaximumItems: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiComboBox_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiComboBox_setDefaultText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiComboBox_getDefaultText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiComboBox_setExpandDirection(tguiWidget * thisWidget, tguiComboBoxExpandDirection value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ComboBoxExpandDirection`
   * @returns `void`
   */
  tguiComboBox_setExpandDirection: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiComboBoxExpandDirection tguiComboBox_getExpandDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ComboBoxExpandDirection`
   */
  tguiComboBox_getExpandDirection: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiComboBox_setChangeItemOnScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiComboBox_setChangeItemOnScroll: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_getChangeItemOnScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiComboBox_getChangeItemOnScroll: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiComboBox_contains(const tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_contains: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiComboBox_containsId(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiComboBox_containsId: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiEditBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiEditBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiEditBox_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiEditBox_setText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiEditBox_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiEditBox_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiEditBox_setDefaultText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiEditBox_getDefaultText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiEditBox_setPasswordCharacter(tguiWidget * thisWidget, tguiChar32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Char32`
   * @returns `void`
   */
  tguiEditBox_setPasswordCharacter: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiChar32 tguiEditBox_getPasswordCharacter(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Char32`
   */
  tguiEditBox_getPasswordCharacter: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiEditBox_setMaximumCharacters(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiEditBox_setMaximumCharacters: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiEditBox_getMaximumCharacters(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiEditBox_getMaximumCharacters: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiEditBox_setAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiEditBox_setAlignment: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiEditBox_getAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiEditBox_getAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiEditBox_setTextWidthLimited(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiEditBox_setTextWidthLimited: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiEditBox_isTextWidthLimited(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiEditBox_isTextWidthLimited: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiEditBox_setReadOnly(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiEditBox_setReadOnly: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiEditBox_isReadOnly(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiEditBox_isReadOnly: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiEditBox_setCaretPosition(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiEditBox_setCaretPosition: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiEditBox_getCaretPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiEditBox_getCaretPosition: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiEditBox_setSuffix(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiEditBox_setSuffix: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getSuffix(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiEditBox_getSuffix: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiBool tguiEditBox_setInputValidator(tguiWidget * thisWidget, tguiUtf32 regex);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param regex `Utf32`
   * @returns `Bool`
   */
  tguiEditBox_setInputValidator: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getInputValidator(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiEditBox_getInputValidator: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiEditBox_selectText(tguiWidget * thisWidget, size_t start, size_t length);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param start `size_t`
   * @param length `size_t`
   * @returns `void`
   */
  tguiEditBox_selectText: {
    parameters: ["pointer", "usize", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getSelectedText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiEditBox_getSelectedText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiWidget * tguiEditBoxSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiEditBoxSlider_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getEditBoxRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiEditBoxSlider_getEditBoxRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getEditBoxSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiEditBoxSlider_getEditBoxSharedRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getSliderRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiEditBoxSlider_getSliderRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getSliderSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiEditBoxSlider_getSliderSharedRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiEditBoxSlider_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `Bool`
   */
  tguiEditBoxSlider_setValue: { parameters: ["pointer", "f32"], result: "i16" },

  /**
   * @original ```c
   * float tguiEditBoxSlider_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiEditBoxSlider_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiEditBoxSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiEditBoxSlider_setMinimum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiEditBoxSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiEditBoxSlider_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiEditBoxSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiEditBoxSlider_setMaximum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiEditBoxSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiEditBoxSlider_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiEditBoxSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiEditBoxSlider_setStep: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiEditBoxSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiEditBoxSlider_getStep: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiEditBoxSlider_setDecimalPlaces(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiEditBoxSlider_setDecimalPlaces: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiEditBoxSlider_getDecimalPlaces(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiEditBoxSlider_getDecimalPlaces: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiEditBoxSlider_setTextAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiEditBoxSlider_setTextAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiEditBoxSlider_getTextAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiEditBoxSlider_getTextAlignment: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiFileDialog_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiFileDialog_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiFileDialog_setFilename(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setFilename: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getFilename(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getFilename: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiFileDialog_setConfirmButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setConfirmButtonText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getConfirmButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getConfirmButtonText: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setCancelButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setCancelButtonText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getCancelButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getCancelButtonText: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setCreateFolderButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setCreateFolderButtonText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getCreateFolderButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getCreateFolderButtonText: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setFilenameLabelText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setFilenameLabelText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getFilenameLabelText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getFilenameLabelText: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setAllowCreateFolder(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFileDialog_setAllowCreateFolder: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getAllowCreateFolder(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiFileDialog_getAllowCreateFolder: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setFileMustExist(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFileDialog_setFileMustExist: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getFileMustExist(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiFileDialog_getFileMustExist: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiFileDialog_setSelectingDirectory(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFileDialog_setSelectingDirectory: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getSelectingDirectory(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiFileDialog_getSelectingDirectory: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setMultiSelect(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFileDialog_setMultiSelect: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getMultiSelect(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiFileDialog_getMultiSelect: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiFileDialogFilter * tguiFileDialogFilter_create(tguiUtf32 name);
   * ```
   *
   * @param name `Utf32`
   * @returns `FileDialogFilter *`
   */
  tguiFileDialogFilter_create: { parameters: ["buffer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiFileDialogFilter_destroy(tguiFileDialogFilter * filter);
   * ```
   *
   * @param filter `FileDialogFilter *`
   * @returns `void`
   */
  tguiFileDialogFilter_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialogFilter_getName(const tguiFileDialogFilter * filter);
   * ```
   *
   * @param filter `const FileDialogFilter *`
   * @returns `Utf32`
   */
  tguiFileDialogFilter_getName: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiFileDialogFilter_addExpression(tguiFileDialogFilter * filter, tguiUtf32 expression);
   * ```
   *
   * @param filter `FileDialogFilter *`
   * @param expression `Utf32`
   * @returns `void`
   */
  tguiFileDialogFilter_addExpression: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiFileDialogFilter_getExpressions(const tguiFileDialogFilter * filter, size_t * count);
   * ```
   *
   * @param filter `const FileDialogFilter *`
   * @param count `size_t *`
   * @returns `const Utf32 *`
   */
  tguiFileDialogFilter_getExpressions: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setPath(tguiWidget * widget, tguiUtf32 path);
   * ```
   *
   * @param widget `Widget *`
   * @param path `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setPath: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getPath(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getPath: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * const tguiUtf32 * tguiFileDialog_getSelectedPaths(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `const Utf32 *`
   */
  tguiFileDialog_getSelectedPaths: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setFileTypeFilters(tguiWidget * widget, const tguiFileDialogFilter ** filters, size_t filterCount, size_t defaultFilterIndex);
   * ```
   *
   * @param widget `Widget *`
   * @param filters `const FileDialogFilter **`
   * @param filterCount `size_t`
   * @param defaultFilterIndex `size_t`
   * @returns `void`
   */
  tguiFileDialog_setFileTypeFilters: {
    parameters: ["pointer", "pointer", "usize", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiFileDialogFilter ** tguiFileDialog_getFileTypeFilters(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `FileDialogFilter **`
   */
  tguiFileDialog_getFileTypeFilters: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * size_t tguiFileDialog_getFileTypeFiltersIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiFileDialog_getFileTypeFiltersIndex: {
    parameters: ["pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiFileDialog_setListViewColumnCaptions(tguiWidget * widget, tguiUtf32 nameColumnText, tguiUtf32 sizeColumnText, tguiUtf32 modifiedColumnText);
   * ```
   *
   * @param widget `Widget *`
   * @param nameColumnText `Utf32`
   * @param sizeColumnText `Utf32`
   * @param modifiedColumnText `Utf32`
   * @returns `void`
   */
  tguiFileDialog_setListViewColumnCaptions: {
    parameters: ["pointer", "buffer", "buffer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsName(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getListViewColumnCaptionsName: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsSize(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getListViewColumnCaptionsSize: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsModified(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  tguiFileDialog_getListViewColumnCaptionsModified: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiGrid_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiGrid_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiGrid_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiGrid_setAutoSize: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiGrid_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiGrid_getAutoSize: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiGrid_addWidget(tguiWidget * thisWidget, tguiWidget * widget, size_t row, size_t col, tguiGridAlignment alignment, const tguiOutline * padding);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @param alignment `GridAlignment`
   * @param padding `const Outline *`
   * @returns `void`
   */
  tguiGrid_addWidget: {
    parameters: ["pointer", "pointer", "usize", "usize", "i16", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGrid_setWidgetCell(tguiWidget * thisWidget, tguiWidget * widget, size_t row, size_t col, tguiGridAlignment alignment, const tguiOutline * padding);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @param alignment `GridAlignment`
   * @param padding `const Outline *`
   * @returns `void`
   */
  tguiGrid_setWidgetCell: {
    parameters: ["pointer", "pointer", "usize", "usize", "i16", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiGrid_getWidget(const tguiWidget * thisWidget, size_t row, size_t col);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @returns `Widget *`
   */
  tguiGrid_getWidget: {
    parameters: ["pointer", "usize", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiGrid_setWidgetAlignment(tguiWidget * thisWidget, tguiWidget * widget, tguiGridAlignment alignment);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param alignment `GridAlignment`
   * @returns `void`
   */
  tguiGrid_setWidgetAlignment: {
    parameters: ["pointer", "pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGrid_setWidgetAlignmentByCell(tguiWidget * thisWidget, size_t row, size_t col, tguiGridAlignment alignment);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @param alignment `GridAlignment`
   * @returns `void`
   */
  tguiGrid_setWidgetAlignmentByCell: {
    parameters: ["pointer", "usize", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiGridAlignment tguiGrid_getWidgetAlignment(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `GridAlignment`
   */
  tguiGrid_getWidgetAlignment: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiGridAlignment tguiGrid_getWidgetAlignmentByCell(const tguiWidget * thisWidget, size_t row, size_t col);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @returns `GridAlignment`
   */
  tguiGrid_getWidgetAlignmentByCell: {
    parameters: ["pointer", "usize", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiGrid_setWidgetPadding(tguiWidget * thisWidget, tguiWidget * widget, const tguiOutline * padding);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param widget `Widget *`
   * @param padding `const Outline *`
   * @returns `void`
   */
  tguiGrid_setWidgetPadding: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiGrid_setWidgetPaddingByCell(tguiWidget * thisWidget, size_t row, size_t col, const tguiOutline * padding);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @param padding `const Outline *`
   * @returns `void`
   */
  tguiGrid_setWidgetPaddingByCell: {
    parameters: ["pointer", "usize", "usize", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiGrid_getWidgetPadding(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `const Outline *`
   */
  tguiGrid_getWidgetPadding: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiGrid_getWidgetPaddingByCell(const tguiWidget * thisWidget, size_t row, size_t col);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param row `size_t`
   * @param col `size_t`
   * @returns `const Outline *`
   */
  tguiGrid_getWidgetPaddingByCell: {
    parameters: ["pointer", "usize", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiGridWidgetLocation_destroy(tguiGridWidgetLocation * locationList, size_t count);
   * ```
   *
   * @param locationList `GridWidgetLocation *`
   * @param count `size_t`
   * @returns `void`
   */
  tguiGridWidgetLocation_destroy: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiGridWidgetLocation * tguiGrid_getWidgetLocations(const tguiWidget * grid, size_t * count);
   * ```
   *
   * @param grid `const Widget *`
   * @param count `size_t *`
   * @returns `GridWidgetLocation *`
   */
  tguiGrid_getWidgetLocations: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiGroup_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiGroup_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiHorizontalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiHorizontalLayout_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiHorizontalWrap_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiHorizontalWrap_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiKnob_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiKnob_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiKnob_setStartRotation(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnob_setStartRotation: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiKnob_getStartRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiKnob_getStartRotation: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiKnob_setEndRotation(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnob_setEndRotation: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiKnob_getEndRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiKnob_getEndRotation: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiKnob_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnob_setMinimum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiKnob_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiKnob_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiKnob_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnob_setMaximum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiKnob_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiKnob_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiKnob_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnob_setValue: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiKnob_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiKnob_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiKnob_setClockwiseTurning(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiKnob_setClockwiseTurning: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiKnob_getClockwiseTurning(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiKnob_getClockwiseTurning: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiLabel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiLabel_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiLabel_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiLabel_setText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiLabel_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiLabel_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiLabel_setHorizontalAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiLabel_setHorizontalAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiLabel_getHorizontalAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiLabel_getHorizontalAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiLabel_setVerticalAlignment(tguiWidget * thisWidget, tguiVerticalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `VerticalAlignment`
   * @returns `void`
   */
  tguiLabel_setVerticalAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVerticalAlignment tguiLabel_getVerticalAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `VerticalAlignment`
   */
  tguiLabel_getVerticalAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiLabel_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiLabel_setAutoSize: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiLabel_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiLabel_getAutoSize: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiLabel_setMaximumTextWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiLabel_setMaximumTextWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiLabel_getMaximumTextWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiLabel_getMaximumTextWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiWidget * tguiListBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiListBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * size_t tguiListBox_addItem(tguiWidget * thisWidget, tguiUtf32 item, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @param id `Utf32`
   * @returns `size_t`
   */
  tguiListBox_addItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiListBox_addMultipleItems(tguiWidget * thisWidget, const tguiUtf32 * items, size_t itemsLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param items `const Utf32 *`
   * @param itemsLength `size_t`
   * @returns `void`
   */
  tguiListBox_addMultipleItems: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Utf32`
   */
  tguiListBox_getItemById: {
    parameters: ["pointer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListBox_getItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * int tguiListBox_getIndexById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `int`
   */
  tguiListBox_getIndexById: {
    parameters: ["pointer", "buffer"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getIdByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListBox_getIdByIndex: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiListBox_setSelectedItem: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiListBox_setSelectedItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiListBox_setSelectedItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListBox_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiListBox_deselectItem: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiListBox_removeItem: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiListBox_removeItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiListBox_removeItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListBox_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiListBox_removeAllItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getSelectedItem(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiListBox_getSelectedItem: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getSelectedItemId(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiListBox_getSelectedItemId: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * int tguiListBox_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiListBox_getSelectedItemIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * int tguiListBox_getHoveredItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiListBox_getHoveredItemIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * tguiBool tguiListBox_changeItem(tguiWidget * thisWidget, tguiUtf32 originalValue, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param originalValue `Utf32`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiListBox_changeItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_changeItemById(tguiWidget * thisWidget, tguiUtf32 id, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiListBox_changeItemById: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListBox_changeItemByIndex(tguiWidget * thisWidget, size_t index, tguiUtf32 newValue);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param newValue `Utf32`
   * @returns `Bool`
   */
  tguiListBox_changeItemByIndex: {
    parameters: ["pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * size_t tguiListBox_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiListBox_getItemCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * const tguiUtf32 * tguiListBox_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiListBox_getItems: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiListBox_getItemIds(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiListBox_getItemIds: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListBox_setItemData(tguiWidget * thisWidget, size_t index, tguiUtf32 data);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param data `Utf32`
   * @returns `void`
   */
  tguiListBox_setItemData: {
    parameters: ["pointer", "usize", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListBox_getItemData: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiListBox_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListBox_setItemHeight: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiListBox_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListBox_getItemHeight: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListBox_setMaximumItems(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiListBox_setMaximumItems: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiListBox_getMaximumItems(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiListBox_getMaximumItems: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiListBox_setAutoScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListBox_setAutoScroll: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiListBox_getAutoScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListBox_getAutoScroll: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiListBox_setTextAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiListBox_setTextAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiListBox_getTextAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiListBox_getTextAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiListBox_contains(const tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  tguiListBox_contains: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiListBox_containsId(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiListBox_containsId: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiListView_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiListView_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * size_t tguiListView_addColumn(tguiWidget * thisWidget, tguiUtf32 text, float width, tguiHorizontalAlignment columnAlignment);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @param width `float`
   * @param columnAlignment `HorizontalAlignment`
   * @returns `size_t`
   */
  tguiListView_addColumn: {
    parameters: ["pointer", "buffer", "f32", "i16"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiListView_setColumnText(tguiWidget * thisWidget, size_t index, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiListView_setColumnText: {
    parameters: ["pointer", "usize", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getColumnText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListView_getColumnText: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiListView_setColumnWidth(tguiWidget * thisWidget, size_t index, float width);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param width `float`
   * @returns `void`
   */
  tguiListView_setColumnWidth: {
    parameters: ["pointer", "usize", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiListView_getColumnWidth(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  tguiListView_getColumnWidth: {
    parameters: ["pointer", "usize"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiListView_getColumnDesignWidth(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  tguiListView_getColumnDesignWidth: {
    parameters: ["pointer", "usize"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiListView_setColumnAlignment(tguiWidget * thisWidget, size_t index, tguiHorizontalAlignment columnAlignment);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param columnAlignment `HorizontalAlignment`
   * @returns `void`
   */
  tguiListView_setColumnAlignment: {
    parameters: ["pointer", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiListView_getColumnAlignment(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `HorizontalAlignment`
   */
  tguiListView_getColumnAlignment: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListView_setColumnAutoResize(tguiWidget * thisWidget, size_t index, tguiBool autoResize);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param autoResize `Bool`
   * @returns `void`
   */
  tguiListView_setColumnAutoResize: {
    parameters: ["pointer", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getColumnAutoResize(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiListView_getColumnAutoResize: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListView_setColumnExpanded(tguiWidget * thisWidget, size_t index, tguiBool expand);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param expand `Bool`
   * @returns `void`
   */
  tguiListView_setColumnExpanded: {
    parameters: ["pointer", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getColumnExpanded(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiListView_getColumnExpanded: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListView_removeAllColumns(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiListView_removeAllColumns: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * size_t tguiListView_getColumnCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiListView_getColumnCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiListView_setHeaderVisible(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setHeaderVisible: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getHeaderVisible(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getHeaderVisible: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiListView_setHeaderHeight(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiListView_setHeaderHeight: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiListView_getHeaderHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiListView_getHeaderHeight: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * float tguiListView_getCurrentHeaderHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiListView_getCurrentHeaderHeight: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * size_t tguiListView_addItem(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `size_t`
   */
  tguiListView_addItem: { parameters: ["pointer", "buffer"], result: "usize" },

  /**
   * @original ```c
   * size_t tguiListView_addItemRow(tguiWidget * thisWidget, const tguiUtf32 * item, size_t itemLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `const Utf32 *`
   * @param itemLength `size_t`
   * @returns `size_t`
   */
  tguiListView_addItemRow: {
    parameters: ["pointer", "pointer", "usize"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiListView_insertItem(tguiWidget * thisWidget, size_t index, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiListView_insertItem: {
    parameters: ["pointer", "usize", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiListView_insertItemRow(tguiWidget * thisWidget, size_t index, const tguiUtf32 * item, size_t itemLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param item `const Utf32 *`
   * @param itemLength `size_t`
   * @returns `void`
   */
  tguiListView_insertItemRow: {
    parameters: ["pointer", "usize", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_changeItem(tguiWidget * thisWidget, size_t index, const tguiUtf32 * item, size_t itemLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param item `const Utf32 *`
   * @param itemLength `size_t`
   * @returns `Bool`
   */
  tguiListView_changeItem: {
    parameters: ["pointer", "usize", "pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_changeSubItem(tguiWidget * thisWidget, size_t index, size_t column, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param column `size_t`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiListView_changeSubItem: {
    parameters: ["pointer", "usize", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_removeItem(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiListView_removeItem: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * void tguiListView_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiListView_removeAllItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiListView_setSelectedItem(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `void`
   */
  tguiListView_setSelectedItem: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiListView_setSelectedItems(tguiWidget * thisWidget, const size_t * indices, size_t indicesLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param indices `const size_t *`
   * @param indicesLength `size_t`
   * @returns `void`
   */
  tguiListView_setSelectedItems: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * int tguiListView_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiListView_getSelectedItemIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * int tguiListView_getHoveredItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiListView_getHoveredItemIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * const size_t * tguiListView_getSelectedItemIndices(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const size_t *`
   */
  tguiListView_getSelectedItemIndices: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListView_deselectItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiListView_deselectItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiListView_setMultiSelect(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setMultiSelect: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getMultiSelect(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getMultiSelect: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiListView_setItemData(tguiWidget * thisWidget, size_t index, tguiUtf32 data);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param data `Utf32`
   * @returns `void`
   */
  tguiListView_setItemData: {
    parameters: ["pointer", "usize", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListView_getItemData: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * void tguiListView_setItemIcon(tguiWidget * thisWidget, size_t index, const tguiTexture * texture);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param texture `const Texture *`
   * @returns `void`
   */
  tguiListView_setItemIcon: {
    parameters: ["pointer", "usize", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiListView_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiListView_getItemCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getItem(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiListView_getItem: { parameters: ["pointer", "usize"], result: "buffer" },

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getItemCell(const tguiWidget * thisWidget, size_t rowIndex, size_t columnIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param rowIndex `size_t`
   * @param columnIndex `size_t`
   * @returns `Utf32`
   */
  tguiListView_getItemCell: {
    parameters: ["pointer", "usize", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiListView_getItemRow(const tguiWidget * thisWidget, size_t index, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiListView_getItemRow: {
    parameters: ["pointer", "usize", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiListView_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiListView_getItems: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListView_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListView_setItemHeight: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiListView_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListView_getItemHeight: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListView_setHeaderTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListView_setHeaderTextSize: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiListView_getHeaderTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListView_getHeaderTextSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListView_setSeparatorWidth(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListView_setSeparatorWidth: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiListView_getSeparatorWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListView_getSeparatorWidth: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListView_setHeaderSeparatorHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListView_setHeaderSeparatorHeight: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiListView_getHeaderSeparatorHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListView_getHeaderSeparatorHeight: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiListView_setGridLinesWidth(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiListView_setGridLinesWidth: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiListView_getGridLinesWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiListView_getGridLinesWidth: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListView_setAutoScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setAutoScroll: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getAutoScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getAutoScroll: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiListView_setShowVerticalGridLines(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setShowVerticalGridLines: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getShowVerticalGridLines(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getShowVerticalGridLines: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListView_setShowHorizontalGridLines(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setShowHorizontalGridLines: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getShowHorizontalGridLines(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getShowHorizontalGridLines: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiListView_setFixedIconSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiListView_setFixedIconSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiListView_getFixedIconSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiListView_getFixedIconSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * void tguiListView_setResizableColumns(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiListView_setResizableColumns: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiListView_getResizableColumns(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiListView_getResizableColumns: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiListView_sort(tguiWidget * widget, size_t index, tguiBool (*)(tguiUtf32, tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param index `size_t`
   * @param function `Bool (*)(tguiUtf32, tguiUtf32)`
   * @returns `void`
   */
  tguiListView_sort: {
    parameters: ["pointer", "usize", "function"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiMenuBar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiMenuBar_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiMenuBar_addMenu(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiMenuBar_addMenu: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_addMenuItem(tguiWidget * thisWidget, tguiUtf32 menu, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param menu `Utf32`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_addMenuItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_addMenuItemToLastMenu(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_addMenuItemToLastMenu: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_addMenuItemHierarchy(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiBool createParents);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param createParents `Bool`
   * @returns `Bool`
   */
  tguiMenuBar_addMenuItemHierarchy: {
    parameters: ["pointer", "pointer", "usize", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_changeMenuItem(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_changeMenuItem: {
    parameters: ["pointer", "pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_removeMenu(tguiWidget * thisWidget, tguiUtf32 menu);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param menu `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_removeMenu: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_removeMenuItem(tguiWidget * thisWidget, tguiUtf32 menu, tguiUtf32 menuItem);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param menu `Utf32`
   * @param menuItem `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_removeMenuItem: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_removeMenuItemHierarchy(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiBool removeParentsWhenEmpty);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param removeParentsWhenEmpty `Bool`
   * @returns `Bool`
   */
  tguiMenuBar_removeMenuItemHierarchy: {
    parameters: ["pointer", "pointer", "usize", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiMenuBar_removeAllMenus(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiMenuBar_removeAllMenus: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_setMenuEnabled(tguiWidget * thisWidget, tguiUtf32 text, tguiBool enabled);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @param enabled `Bool`
   * @returns `Bool`
   */
  tguiMenuBar_setMenuEnabled: {
    parameters: ["pointer", "buffer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getMenuEnabled(const tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_getMenuEnabled: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_setMenuItemEnabled(tguiWidget * thisWidget, tguiUtf32 menu, tguiUtf32 text, tguiBool enabled);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param menu `Utf32`
   * @param text `Utf32`
   * @param enabled `Bool`
   * @returns `Bool`
   */
  tguiMenuBar_setMenuItemEnabled: {
    parameters: ["pointer", "buffer", "buffer", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getMenuItemEnabled(const tguiWidget * thisWidget, tguiUtf32 menu, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param menu `Utf32`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiMenuBar_getMenuItemEnabled: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_setMenuItemEnabledHierarchy(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiBool enabled);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param enabled `Bool`
   * @returns `Bool`
   */
  tguiMenuBar_setMenuItemEnabledHierarchy: {
    parameters: ["pointer", "pointer", "usize", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getMenuItemEnabledHierarchy(const tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `Bool`
   */
  tguiMenuBar_getMenuItemEnabledHierarchy: {
    parameters: ["pointer", "pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiMenuBar_closeMenu(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiMenuBar_closeMenu: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiMenuBar_setMinimumSubMenuWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiMenuBar_setMinimumSubMenuWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiMenuBar_getMinimumSubMenuWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiMenuBar_getMinimumSubMenuWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiMenuBar_setInvertedMenuDirection(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiMenuBar_setInvertedMenuDirection: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getInvertedMenuDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiMenuBar_getInvertedMenuDirection: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiMenuBarMenuList_destroy(tguiMenuBarMenuList * menuList);
   * ```
   *
   * @param menuList `MenuBarMenuList *`
   * @returns `void`
   */
  tguiMenuBarMenuList_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiMenuBarMenuList * tguiMenuBar_getMenus(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `MenuBarMenuList *`
   */
  tguiMenuBar_getMenus: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiMessageBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiMessageBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiMessageBox_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiMessageBox_setText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiMessageBox_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiMessageBox_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiMessageBox_addButton(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiMessageBox_addButton: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiMessageBox_changeButtons(tguiWidget * thisWidget, const tguiUtf32 * buttonCaptions, size_t buttonCaptionsLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param buttonCaptions `const Utf32 *`
   * @param buttonCaptionsLength `size_t`
   * @returns `void`
   */
  tguiMessageBox_changeButtons: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiMessageBox_getButtons(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiMessageBox_getButtons: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiMessageBox_setLabelAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiMessageBox_setLabelAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiMessageBox_getLabelAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiMessageBox_getLabelAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiMessageBox_setButtonAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  tguiMessageBox_setButtonAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiMessageBox_getButtonAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  tguiMessageBox_getButtonAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiPanel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiPanel_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiPanel_setEventBubbling(tguiBool useEventBubbling);
   * ```
   *
   * @param useEventBubbling `Bool`
   * @returns `void`
   */
  tguiPanel_setEventBubbling: { parameters: ["i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiPanel_getEventBubbling();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  tguiPanel_getEventBubbling: { parameters: [], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiPicture_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiPicture_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiProgressBar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiProgressBar_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiProgressBar_setMinimum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiProgressBar_setMinimum: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiProgressBar_getMinimum: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiProgressBar_setMaximum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiProgressBar_setMaximum: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiProgressBar_getMaximum: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiProgressBar_setValue(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiProgressBar_setValue: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiProgressBar_getValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * unsigned int tguiProgressBar_incrementValue(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `unsigned int`
   */
  tguiProgressBar_incrementValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiProgressBar_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiProgressBar_setText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiProgressBar_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiProgressBar_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiProgressBar_setFillDirection(tguiWidget * thisWidget, tguiProgressBarFillDirection value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ProgressBarFillDirection`
   * @returns `void`
   */
  tguiProgressBar_setFillDirection: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiProgressBarFillDirection tguiProgressBar_getFillDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ProgressBarFillDirection`
   */
  tguiProgressBar_getFillDirection: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiRadioButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiRadioButton_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiRadioButton_setChecked(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiRadioButton_setChecked: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiRadioButton_isChecked(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiRadioButton_isChecked: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiRadioButton_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiRadioButton_setText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiRadioButton_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiRadioButton_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiRadioButton_setTextClickable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiRadioButton_setTextClickable: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiRadioButton_isTextClickable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiRadioButton_isTextClickable: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiRadioButtonGroup_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiRadioButtonGroup_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiRadioButtonGroup_uncheckRadioButtons(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiRadioButtonGroup_uncheckRadioButtons: {
    parameters: ["pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiWidget * tguiRadioButtonGroup_getCheckedRadioButton(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `Widget *`
   */
  tguiRadioButtonGroup_getCheckedRadioButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiRangeSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiRangeSlider_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiRangeSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiRangeSlider_setMinimum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiRangeSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiRangeSlider_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiRangeSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiRangeSlider_setMaximum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiRangeSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiRangeSlider_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiRangeSlider_setSelectionStart(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiRangeSlider_setSelectionStart: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiRangeSlider_getSelectionStart(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiRangeSlider_getSelectionStart: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiRangeSlider_setSelectionEnd(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiRangeSlider_setSelectionEnd: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiRangeSlider_getSelectionEnd(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiRangeSlider_getSelectionEnd: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiRangeSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiRangeSlider_setStep: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiRangeSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiRangeSlider_getStep: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiWidget * tguiScrollablePanel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiScrollablePanel_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiScrollablePanel_setContentSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  tguiScrollablePanel_setContentSize: {
    parameters: ["pointer", { struct: ["f32", "f32"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiVector2f tguiScrollablePanel_getContentSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiScrollablePanel_getContentSize: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiVector2f tguiScrollablePanel_getContentOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  tguiScrollablePanel_getContentOffset: {
    parameters: ["pointer"],
    result: { struct: ["f32", "f32"] },
  },

  /**
   * @original ```c
   * tguiWidget * tguiScrollbar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiScrollbar_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiScrollbar_setViewportSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbar_setViewportSize: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getViewportSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiScrollbar_getViewportSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiScrollbar_setMaximum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbar_setMaximum: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiScrollbar_getMaximum: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiScrollbar_setValue(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbar_setValue: { parameters: ["pointer", "u32"], result: "void" },

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiScrollbar_getValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiScrollbar_setScrollAmount(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbar_setScrollAmount: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getScrollAmount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiScrollbar_getScrollAmount: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiScrollbar_setPolicy(tguiWidget * thisWidget, tguiScrollbarPolicy value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ScrollbarPolicy`
   * @returns `void`
   */
  tguiScrollbar_setPolicy: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiScrollbarPolicy tguiScrollbar_getPolicy(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ScrollbarPolicy`
   */
  tguiScrollbar_getPolicy: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiScrollbar_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  tguiScrollbar_setOrientation: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiOrientation tguiScrollbar_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  tguiScrollbar_getOrientation: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiScrollbar_isShown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiScrollbar_isShown: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getMaxValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiScrollbar_getMaxValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * float tguiScrollbar_getDefaultWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiScrollbar_getDefaultWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiWidget * tguiSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiSlider_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSlider_setMinimum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSlider_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSlider_setMaximum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSlider_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSlider_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSlider_setValue: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSlider_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSlider_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSlider_setStep: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSlider_getStep: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSlider_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  tguiSlider_setOrientation: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiOrientation tguiSlider_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  tguiSlider_getOrientation: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiSlider_setInvertedDirection(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiSlider_setInvertedDirection: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiSlider_getInvertedDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiSlider_getInvertedDirection: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiSlider_setChangeValueOnScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiSlider_setChangeValueOnScroll: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiSlider_getChangeValueOnScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiSlider_getChangeValueOnScroll: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiSpinButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiSpinButton_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiSpinButton_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinButton_setMinimum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSpinButton_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinButton_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinButton_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinButton_setMaximum: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSpinButton_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinButton_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinButton_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinButton_setValue: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSpinButton_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinButton_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinButton_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinButton_setStep: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSpinButton_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinButton_getStep: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinButton_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  tguiSpinButton_setOrientation: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiOrientation tguiSpinButton_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  tguiSpinButton_getOrientation: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiSpinControl_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiSpinControl_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinButtonRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiSpinControl_getSpinButtonRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinButtonSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiSpinControl_getSpinButtonSharedRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinTextRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiSpinControl_getSpinTextRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinTextSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiSpinControl_getSpinTextSharedRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiSpinControl_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `Bool`
   */
  tguiSpinControl_setValue: { parameters: ["pointer", "f32"], result: "i16" },

  /**
   * @original ```c
   * float tguiSpinControl_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinControl_getValue: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinControl_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinControl_setMinimum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSpinControl_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinControl_getMinimum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinControl_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinControl_setMaximum: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSpinControl_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinControl_getMaximum: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinControl_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinControl_setStep: { parameters: ["pointer", "f32"], result: "void" },

  /**
   * @original ```c
   * float tguiSpinControl_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinControl_getStep: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiSpinControl_setDecimalPlaces(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiSpinControl_setDecimalPlaces: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiSpinControl_getDecimalPlaces(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiSpinControl_getDecimalPlaces: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiSpinControl_setSpinButtonWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinControl_setSpinButtonWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSpinControl_getSpinButtonWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSpinControl_getSpinButtonWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiWidget * tguiTabs_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiTabs_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiTabs_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiTabs_setAutoSize: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiTabs_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiTabs_getAutoSize: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * size_t tguiTabs_add(tguiWidget * thisWidget, tguiUtf32 text, tguiBool select);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @param select `Bool`
   * @returns `size_t`
   */
  tguiTabs_add: { parameters: ["pointer", "buffer", "i16"], result: "usize" },

  /**
   * @original ```c
   * void tguiTabs_insert(tguiWidget * thisWidget, size_t index, tguiUtf32 text, tguiBool select);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param text `Utf32`
   * @param select `Bool`
   * @returns `void`
   */
  tguiTabs_insert: {
    parameters: ["pointer", "usize", "buffer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTabs_getText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiTabs_getText: { parameters: ["pointer", "usize"], result: "buffer" },

  /**
   * @original ```c
   * tguiBool tguiTabs_changeText(tguiWidget * thisWidget, size_t index, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiTabs_changeText: {
    parameters: ["pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTabs_deselect(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTabs_deselect: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTabs_removeAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTabs_removeAll: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiTabs_getSelected(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiTabs_getSelected: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * int tguiTabs_getSelectedIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiTabs_getSelectedIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * int tguiTabs_getHoveredIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiTabs_getHoveredIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * size_t tguiTabs_getTabsCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTabs_getTabsCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiTabs_setTabVisible(tguiWidget * thisWidget, size_t index, tguiBool visible);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param visible `Bool`
   * @returns `void`
   */
  tguiTabs_setTabVisible: {
    parameters: ["pointer", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiTabs_getTabVisible(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTabs_getTabVisible: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * void tguiTabs_setTabEnabled(tguiWidget * thisWidget, size_t index, tguiBool visible);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param visible `Bool`
   * @returns `void`
   */
  tguiTabs_setTabEnabled: {
    parameters: ["pointer", "usize", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiTabs_getTabEnabled(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTabs_getTabEnabled: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * void tguiTabs_setMaximumTabWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiTabs_setMaximumTabWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTabs_getMaximumTabWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiTabs_getMaximumTabWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiTabs_setMinimumTabWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiTabs_setMinimumTabWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTabs_getMinimumTabWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiTabs_getMinimumTabWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiBool tguiTabs_selectByText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiTabs_selectByText: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiTabs_selectByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTabs_selectByIndex: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiTabs_removeByText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiTabs_removeByText: { parameters: ["pointer", "buffer"], result: "i16" },

  /**
   * @original ```c
   * tguiBool tguiTabs_removeByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTabs_removeByIndex: { parameters: ["pointer", "usize"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiTabContainer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiTabContainer_getTabsRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiTabContainer_getTabsRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiTabContainer_getTabsSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  tguiTabContainer_getTabsSharedRenderer: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabContainer_select(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `void`
   */
  tguiTabContainer_select: { parameters: ["pointer", "usize"], result: "void" },

  /**
   * @original ```c
   * size_t tguiTabContainer_getPanelCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTabContainer_getPanelCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * int tguiTabContainer_getSelectedIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiTabContainer_getSelectedIndex: { parameters: ["pointer"], result: "i32" },

  /**
   * @original ```c
   * tguiUtf32 tguiTabContainer_getTabText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiTabContainer_getTabText: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiBool tguiTabContainer_changeTabText(tguiWidget * thisWidget, size_t index, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiTabContainer_changeTabText: {
    parameters: ["pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTabContainer_setTabFixedSize(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiTabContainer_setTabFixedSize: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTabContainer_getTabFixedSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiTabContainer_getTabFixedSize: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiTabContainer_setTabAlignment(tguiWidget * thisWidget, tguiTabContainerTabAlign value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `TabContainerTabAlign`
   * @returns `void`
   */
  tguiTabContainer_setTabAlignment: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiTabContainerTabAlign tguiTabContainer_getTabAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `TabContainerTabAlign`
   */
  tguiTabContainer_getTabAlignment: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiTabContainer_setTabsHeight(tguiWidget * thisWidget, float height);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param height `float`
   * @returns `void`
   */
  tguiTabContainer_setTabsHeight: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiTabContainer_setTabsHeightFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  tguiTabContainer_setTabsHeightFromLayout: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiTabContainer_removeTabWithName(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  tguiTabContainer_removeTabWithName: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTabContainer_removeTabWithIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTabContainer_removeTabWithIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_addTab(tguiWidget * widget, tguiUtf32 name, tguiBool select);
   * ```
   *
   * @param widget `Widget *`
   * @param name `Utf32`
   * @param select `Bool`
   * @returns `Widget *`
   */
  tguiTabContainer_addTab: {
    parameters: ["pointer", "buffer", "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_insertTab(tguiWidget * widget, size_t index, tguiUtf32 name, tguiBool select);
   * ```
   *
   * @param widget `Widget *`
   * @param index `size_t`
   * @param name `Utf32`
   * @param select `Bool`
   * @returns `Widget *`
   */
  tguiTabContainer_insertTab: {
    parameters: ["pointer", "usize", "buffer", "i16"],
    result: "pointer",
  },

  /**
   * @original ```c
   * int tguiTabContainer_getIndex(const tguiWidget * widget, const tguiWidget * panel);
   * ```
   *
   * @param widget `const Widget *`
   * @param panel `const Widget *`
   * @returns `int`
   */
  tguiTabContainer_getIndex: {
    parameters: ["pointer", "pointer"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getSelected(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  tguiTabContainer_getSelected: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getPanel(const tguiWidget * widget, int index);
   * ```
   *
   * @param widget `const Widget *`
   * @param index `int`
   * @returns `Widget *`
   */
  tguiTabContainer_getPanel: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getTabs(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  tguiTabContainer_getTabs: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiTextArea_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiTextArea_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiTextArea_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiTextArea_setText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiTextArea_getText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiTextArea_addText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  tguiTextArea_addText: { parameters: ["pointer", "buffer"], result: "void" },

  /**
   * @original ```c
   * void tguiTextArea_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiTextArea_setDefaultText: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiTextArea_getDefaultText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiTextArea_setSelectedText(tguiWidget * thisWidget, size_t selectionStartIndex, size_t selectionEndIndex);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param selectionStartIndex `size_t`
   * @param selectionEndIndex `size_t`
   * @returns `void`
   */
  tguiTextArea_setSelectedText: {
    parameters: ["pointer", "usize", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getSelectedText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiTextArea_getSelectedText: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * size_t tguiTextArea_getSelectionStart(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getSelectionStart: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * size_t tguiTextArea_getSelectionEnd(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getSelectionEnd: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiTextArea_setMaximumCharacters(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiTextArea_setMaximumCharacters: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiTextArea_getMaximumCharacters(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getMaximumCharacters: {
    parameters: ["pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * void tguiTextArea_setTabString(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiTextArea_setTabString: {
    parameters: ["pointer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getTabString(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiTextArea_getTabString: { parameters: ["pointer"], result: "buffer" },

  /**
   * @original ```c
   * void tguiTextArea_setCaretPosition(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiTextArea_setCaretPosition: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getCaretPosition: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretLine(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getCaretLine: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretColumn(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getCaretColumn: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * void tguiTextArea_setReadOnly(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiTextArea_setReadOnly: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiTextArea_isReadOnly(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiTextArea_isReadOnly: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiTextArea_enableMonospacedFontOptimization(tguiWidget * thisWidget, tguiBool enable);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param enable `Bool`
   * @returns `void`
   */
  tguiTextArea_enableMonospacedFontOptimization: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiTextArea_getLinesCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiTextArea_getLinesCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * tguiWidget * tguiToggleButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiToggleButton_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiToggleButton_setDown(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiToggleButton_setDown: { parameters: ["pointer", "i16"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiToggleButton_isDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  tguiToggleButton_isDown: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * tguiWidget * tguiTreeView_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiTreeView_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiTreeView_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiTreeView_setItemHeight: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiTreeView_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  tguiTreeView_getItemHeight: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * tguiBool tguiTreeView_addItem(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiBool createParents);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param createParents `Bool`
   * @returns `Bool`
   */
  tguiTreeView_addItem: {
    parameters: ["pointer", "pointer", "usize", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTreeView_changeItem(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiUtf32 leafText);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param leafText `Utf32`
   * @returns `Bool`
   */
  tguiTreeView_changeItem: {
    parameters: ["pointer", "pointer", "usize", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTreeView_expand(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `void`
   */
  tguiTreeView_expand: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiTreeView_collapse(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `void`
   */
  tguiTreeView_collapse: {
    parameters: ["pointer", "pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiTreeView_expandAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTreeView_expandAll: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTreeView_collapseAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTreeView_collapseAll: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTreeView_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTreeView_deselectItem: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiTreeView_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiTreeView_removeAllItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiUtf32 * tguiTreeView_getSelectedItem(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiTreeView_getSelectedItem: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * const tguiUtf32 * tguiTreeView_getHoveredItem(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiTreeView_getHoveredItem: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiTreeView_setItemIndexInParent(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiTreeView_setItemIndexInParent: {
    parameters: ["pointer", "pointer", "usize", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * int tguiTreeView_getItemIndexInParent(const tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `int`
   */
  tguiTreeView_getItemIndexInParent: {
    parameters: ["pointer", "pointer", "usize"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiBool tguiTreeView_selectItem(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `Bool`
   */
  tguiTreeView_selectItem: {
    parameters: ["pointer", "pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiTreeView_removeItem(tguiWidget * thisWidget, const tguiUtf32 * hierarchy, size_t hierarchyLength, tguiBool removeParentsWhenEmpty);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @param removeParentsWhenEmpty `Bool`
   * @returns `Bool`
   */
  tguiTreeView_removeItem: {
    parameters: ["pointer", "pointer", "usize", "i16"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiTreeViewConstNode_destroy(tguiTreeViewConstNode * node);
   * ```
   *
   * @param node `TreeViewConstNode *`
   * @returns `void`
   */
  tguiTreeViewConstNode_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * const tguiTreeViewConstNode * tguiTreeView_getNode(const tguiWidget * widget, const tguiUtf32 * hierarchy, size_t hierarchyLength);
   * ```
   *
   * @param widget `const Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `size_t`
   * @returns `const TreeViewConstNode *`
   */
  tguiTreeView_getNode: {
    parameters: ["pointer", "pointer", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTreeViewConstNode ** tguiTreeView_getNodes(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `TreeViewConstNode **`
   */
  tguiTreeView_getNodes: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiVerticalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiVerticalLayout_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiBoxLayoutRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiBoxLayoutRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiBoxLayoutRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiBoxLayoutRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiBoxLayoutRenderer_setSpaceBetweenWidgets(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiBoxLayoutRenderer_setSpaceBetweenWidgets: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiBoxLayoutRenderer_getSpaceBetweenWidgets(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiBoxLayoutRenderer_getSpaceBetweenWidgets: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiButtonRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiButtonRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiButtonRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiButtonRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorDown: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorDown: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorDownHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorDownHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorDownFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorDownFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextColorDownDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextColorDownDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorDown: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorDown: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorDownHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorDownHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorDownFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorDownFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBackgroundColorDownDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBackgroundColorDownDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorDown: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorDown: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorDownHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorDownHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorDownFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorDownFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setBorderColorDownDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getBorderColorDownDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTexture: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTexture: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureFocused: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureFocused: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureDown: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureDown: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureDownHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureDownHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureDownFocused: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureDownFocused: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiButtonRenderer_setTextureDownDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiButtonRenderer_getTextureDownDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleHover(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleHover: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleHover: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleFocused(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleFocused: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleFocused: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDisabled(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleDisabled: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleDisabled: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDown(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleDown: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleDown: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownHover(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleDownHover: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleDownHover: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownFocused(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleDownFocused: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleDownFocused: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownDisabled(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiButtonRenderer_setTextStyleDownDisabled: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiButtonRenderer_getTextStyleDownDisabled: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiButtonRenderer_setTextOutlineColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiButtonRenderer_getTextOutlineColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiButtonRenderer_setTextOutlineThickness: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiButtonRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiButtonRenderer_getTextOutlineThickness: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiButtonRenderer_setRoundedBorderRadius(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiButtonRenderer_setRoundedBorderRadius: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiButtonRenderer_getRoundedBorderRadius(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiButtonRenderer_getRoundedBorderRadius: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiChatBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiChatBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiChatBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiChatBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiChatBoxRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiChatBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiChatBoxRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiChatBoxRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiChatBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiChatBoxRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChatBoxRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChatBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChatBoxRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChatBoxRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChatBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChatBoxRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiChatBoxRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiChatBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiChatBoxRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiChatBoxRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiChatBoxRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiChatBoxRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChatBoxRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChatBoxRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChatBoxRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiChildWindowRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiChildWindowRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiChildWindowRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiChildWindowRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiChildWindowRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiChildWindowRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleBarColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChildWindowRenderer_setTitleBarColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getTitleBarColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChildWindowRenderer_getTitleBarColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChildWindowRenderer_setTitleColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getTitleColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChildWindowRenderer_getTitleColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChildWindowRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChildWindowRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChildWindowRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChildWindowRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiChildWindowRenderer_setBorderColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiChildWindowRenderer_getBorderColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderBelowTitleBar(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChildWindowRenderer_setBorderBelowTitleBar: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getBorderBelowTitleBar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChildWindowRenderer_getBorderBelowTitleBar: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleBarHeight(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChildWindowRenderer_setTitleBarHeight: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getTitleBarHeight(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChildWindowRenderer_getTitleBarHeight: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChildWindowRenderer_setDistanceToSide: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChildWindowRenderer_getDistanceToSide: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setPaddingBetweenButtons(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChildWindowRenderer_setPaddingBetweenButtons: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getPaddingBetweenButtons(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChildWindowRenderer_getPaddingBetweenButtons: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMinimumResizableBorderWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiChildWindowRenderer_setMinimumResizableBorderWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getMinimumResizableBorderWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiChildWindowRenderer_getMinimumResizableBorderWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setShowTextOnTitleButtons(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiChildWindowRenderer_setShowTextOnTitleButtons: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiChildWindowRenderer_getShowTextOnTitleButtons(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  tguiChildWindowRenderer_getShowTextOnTitleButtons: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTextureTitleBar(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setTextureTitleBar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiChildWindowRenderer_getTextureTitleBar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiChildWindowRenderer_getTextureTitleBar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiChildWindowRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiChildWindowRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setCloseButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setCloseButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getCloseButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiChildWindowRenderer_getCloseButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMaximizeButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setMaximizeButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getMaximizeButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiChildWindowRenderer_getMaximizeButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMinimizeButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiChildWindowRenderer_setMinimizeButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getMinimizeButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiChildWindowRenderer_getMinimizeButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiColorPickerRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiColorPickerRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiColorPickerRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiColorPickerRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiColorPickerRenderer_setButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiColorPickerRenderer_getButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setLabel(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiColorPickerRenderer_setLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getLabel(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiColorPickerRenderer_getLabel: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setSlider(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiColorPickerRenderer_setSlider: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getSlider(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiColorPickerRenderer_getSlider: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setEditBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiColorPickerRenderer_setEditBox: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getEditBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiColorPickerRenderer_getEditBox: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiComboBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiComboBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiComboBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiComboBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiComboBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiComboBoxRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiComboBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiComboBoxRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setDefaultTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getDefaultTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setArrowColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getArrowColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiComboBoxRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiComboBoxRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiComboBoxRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureBackgroundDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextureBackgroundDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureBackgroundDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiComboBoxRenderer_getTextureBackgroundDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrow(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextureArrow: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrow(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiComboBoxRenderer_getTextureArrow: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrowHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextureArrowHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrowHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiComboBoxRenderer_getTextureArrowHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrowDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextureArrowDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrowDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiComboBoxRenderer_getTextureArrowDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiComboBoxRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiComboBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiComboBoxRenderer_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setDefaultTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiComboBoxRenderer_setDefaultTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiComboBoxRenderer_getDefaultTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiComboBoxRenderer_getDefaultTextStyle: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setListBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiComboBoxRenderer_setListBox: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiComboBoxRenderer_getListBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiComboBoxRenderer_getListBox: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiEditBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiEditBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiEditBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiEditBoxRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiEditBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiEditBoxRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiEditBoxRenderer_setCaretWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiEditBoxRenderer_getCaretWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiEditBoxRenderer_getCaretWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setDefaultTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getDefaultTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getTextColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setSelectedTextBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setSelectedTextBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getSelectedTextBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getSelectedTextBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBackgroundColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBackgroundColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setCaretColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getCaretColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getCaretColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setCaretColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getCaretColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getCaretColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBorderColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBorderColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiEditBoxRenderer_setBorderColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiEditBoxRenderer_getBorderColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTexture: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiEditBoxRenderer_getTexture: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextureHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiEditBoxRenderer_getTextureHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextureFocused: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiEditBoxRenderer_getTextureFocused: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextureDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiEditBoxRenderer_getTextureDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiEditBoxRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiEditBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiEditBoxRenderer_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setDefaultTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiEditBoxRenderer_setDefaultTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiEditBoxRenderer_getDefaultTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiEditBoxRenderer_getDefaultTextStyle: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiFileDialogRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiFileDialogRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiFileDialogRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiFileDialogRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setListView(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setListView: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getListView(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getListView: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setEditBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setEditBox: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getEditBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getEditBox: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setFilenameLabel(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setFilenameLabel: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getFilenameLabel(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getFilenameLabel: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setFileTypeComboBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setFileTypeComboBox: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getFileTypeComboBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getFileTypeComboBox: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setBackButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setBackButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getBackButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getBackButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setForwardButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setForwardButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getForwardButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getForwardButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setUpButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiFileDialogRenderer_setUpButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getUpButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiFileDialogRenderer_getUpButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiGroupRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiGroupRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiGroupRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiGroupRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiGroupRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiGroupRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiGroupRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiGroupRenderer_getPadding: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiKnobRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiKnobRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiKnobRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiKnobRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiKnobRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiKnobRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiKnobRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiKnobRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiKnobRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiKnobRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiKnobRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiKnobRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiKnobRenderer_setThumbColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiKnobRenderer_getThumbColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiKnobRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiKnobRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiKnobRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiKnobRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiKnobRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiKnobRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiKnobRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiKnobRenderer_setTextureForeground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiKnobRenderer_setTextureForeground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiKnobRenderer_getTextureForeground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiKnobRenderer_getTextureForeground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiKnobRenderer_setImageRotation(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiKnobRenderer_setImageRotation: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiKnobRenderer_getImageRotation(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiKnobRenderer_getImageRotation: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiRenderer * tguiLabelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiLabelRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiLabelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiLabelRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiLabelRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiLabelRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiLabelRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiLabelRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiLabelRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiLabelRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiLabelRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiLabelRenderer_getPadding: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiLabelRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiLabelRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiLabelRenderer_setTextOutlineColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiLabelRenderer_getTextOutlineColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiLabelRenderer_setTextOutlineThickness: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiLabelRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiLabelRenderer_getTextOutlineThickness: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiLabelRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiLabelRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiLabelRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiLabelRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiLabelRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiLabelRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiLabelRenderer_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiLabelRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiLabelRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiLabelRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiLabelRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiLabelRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiLabelRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiLabelRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiLabelRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiLabelRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiLabelRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiListBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiListBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiListBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiListBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiListBoxRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiListBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiListBoxRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiListBoxRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiListBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiListBoxRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setSelectedBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getSelectedBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setSelectedBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getSelectedBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setSelectedTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getSelectedTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListBoxRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListBoxRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiListBoxRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiListBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiListBoxRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiListBoxRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiListBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiListBoxRenderer_getTextStyle: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiListBoxRenderer_setSelectedTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiListBoxRenderer_getSelectedTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiListBoxRenderer_getSelectedTextStyle: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiListBoxRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiListBoxRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiListBoxRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListBoxRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiListBoxRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiListBoxRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiListBoxRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiListViewRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiListViewRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiListViewRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiListViewRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiListViewRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiListViewRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiListViewRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiListViewRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiListViewRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiListViewRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiListViewRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setSelectedBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getSelectedBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setSelectedBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getSelectedBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setSelectedTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getSelectedTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setHeaderBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setHeaderBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getHeaderBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getHeaderBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setHeaderTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setHeaderTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getHeaderTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getHeaderTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setSeparatorColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setSeparatorColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSeparatorColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getSeparatorColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setGridLinesColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiListViewRenderer_setGridLinesColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getGridLinesColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiListViewRenderer_getGridLinesColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextureHeaderBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiListViewRenderer_setTextureHeaderBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiListViewRenderer_getTextureHeaderBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiListViewRenderer_getTextureHeaderBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiListViewRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiListViewRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiListViewRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiListViewRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiListViewRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiListViewRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiListViewRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiListViewRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiListViewRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiListViewRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiMenuBarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiMenuBarRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiMenuBarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiMenuBarRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSelectedBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getSelectedBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSeparatorColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSeparatorColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMenuBarRenderer_getSeparatorColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiMenuBarRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiMenuBarRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureItemBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiMenuBarRenderer_setTextureItemBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureItemBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiMenuBarRenderer_getTextureItemBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureSelectedItemBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiMenuBarRenderer_setTextureSelectedItemBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureSelectedItemBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiMenuBarRenderer_getTextureSelectedItemBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiMenuBarRenderer_setDistanceToSide: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiMenuBarRenderer_getDistanceToSide: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSeparatorThickness: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiMenuBarRenderer_getSeparatorThickness: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorVerticalPadding(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSeparatorVerticalPadding: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorVerticalPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiMenuBarRenderer_getSeparatorVerticalPadding: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorSidePadding(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiMenuBarRenderer_setSeparatorSidePadding: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorSidePadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiMenuBarRenderer_getSeparatorSidePadding: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiMessageBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiMessageBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiMessageBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiMessageBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiMessageBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiMessageBoxRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiMessageBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiMessageBoxRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiMessageBoxRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiMessageBoxRenderer_setButton: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiMessageBoxRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiMessageBoxRenderer_getButton: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiPanelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiPanelRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiPanelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiPanelRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiPanelRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiPanelRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiPanelRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiPanelRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiPanelRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiPanelRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiPanelRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiPanelRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiPanelRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiPanelRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiPanelRenderer_setRoundedBorderRadius(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiPanelRenderer_setRoundedBorderRadius: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiPanelRenderer_getRoundedBorderRadius(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiPanelRenderer_getRoundedBorderRadius: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiPictureRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiPictureRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiPictureRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiPictureRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiPictureRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiPictureRenderer_setTexture: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiPictureRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiPictureRenderer_getTexture: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiProgressBarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiProgressBarRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiProgressBarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiProgressBarRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiProgressBarRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiProgressBarRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiProgressBarRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextColorFilled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextColorFilled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextColorFilled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getTextColorFilled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setFillColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setFillColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getFillColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getFillColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiProgressBarRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiProgressBarRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextureFill(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextureFill: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiProgressBarRenderer_getTextureFill(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiProgressBarRenderer_getTextureFill: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiProgressBarRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiProgressBarRenderer_getTextStyle: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextOutlineColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiProgressBarRenderer_getTextOutlineColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiProgressBarRenderer_setTextOutlineThickness: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiProgressBarRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiProgressBarRenderer_getTextOutlineThickness: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiRadioButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiRadioButtonRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiRadioButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiRadioButtonRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextDistanceRatio(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextDistanceRatio: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiRadioButtonRenderer_getTextDistanceRatio(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiRadioButtonRenderer_getTextDistanceRatio: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiRadioButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiRadioButtonRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColorChecked: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColorChecked: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColorCheckedHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColorCheckedHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextColorCheckedDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getTextColorCheckedDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColorChecked: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColorChecked: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColorCheckedHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColorCheckedHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorChecked: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorChecked: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorCheckedHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorCheckedHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorCheckedFocused: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorCheckedFocused: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setBorderColorCheckedDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getBorderColorCheckedDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setCheckColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getCheckColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setCheckColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getCheckColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setCheckColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRadioButtonRenderer_getCheckColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUnchecked(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureUnchecked: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUnchecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureUnchecked: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureChecked(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureChecked: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureChecked: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureUncheckedHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureUncheckedHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureCheckedHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureCheckedHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureUncheckedFocused: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureUncheckedFocused: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureCheckedFocused: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureCheckedFocused: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureUncheckedDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureUncheckedDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextureCheckedDisabled: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRadioButtonRenderer_getTextureCheckedDisabled: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextStyle: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiRadioButtonRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiRadioButtonRenderer_getTextStyle: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextStyleChecked(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiRadioButtonRenderer_setTextStyleChecked: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiUint32 tguiRadioButtonRenderer_getTextStyleChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  tguiRadioButtonRenderer_getTextStyleChecked: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiRangeSliderRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiRangeSliderRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiRangeSliderRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiRangeSliderRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setSelectedTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRangeSliderRenderer_setSelectedTrackColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRangeSliderRenderer_getSelectedTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRangeSliderRenderer_getSelectedTrackColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setSelectedTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiRangeSliderRenderer_setSelectedTrackColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiRangeSliderRenderer_getSelectedTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiRangeSliderRenderer_getSelectedTrackColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setTextureSelectedTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRangeSliderRenderer_setTextureSelectedTrack: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRangeSliderRenderer_getTextureSelectedTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRangeSliderRenderer_getTextureSelectedTrack: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setTextureSelectedTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiRangeSliderRenderer_setTextureSelectedTrackHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiRangeSliderRenderer_getTextureSelectedTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiRangeSliderRenderer_getTextureSelectedTrackHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiScrollablePanelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiScrollablePanelRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiScrollablePanelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiScrollablePanelRenderer_copy: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollablePanelRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiScrollablePanelRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiScrollablePanelRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiScrollablePanelRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollablePanelRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiScrollablePanelRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiScrollablePanelRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiScrollablePanelRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiScrollbarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiScrollbarRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiScrollbarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiScrollbarRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTrackColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getTrackColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTrackColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getTrackColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setThumbColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getThumbColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setThumbColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setThumbColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getThumbColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getThumbColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setArrowBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getArrowBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setArrowBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getArrowBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setArrowColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getArrowColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiScrollbarRenderer_setArrowColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiScrollbarRenderer_getArrowColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureTrack: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureTrack: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureTrackHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureTrackHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureThumb(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureThumb: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureThumb(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureThumb: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureThumbHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureThumbHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureThumbHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureThumbHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowUp(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureArrowUp: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowUp(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureArrowUp: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowUpHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureArrowUpHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowUpHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureArrowUpHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureArrowDown: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureArrowDown: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiScrollbarRenderer_setTextureArrowDownHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiScrollbarRenderer_getTextureArrowDownHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSliderRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiSliderRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiSliderRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiSliderRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiSliderRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiSliderRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiSliderRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setTrackColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getTrackColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setTrackColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getTrackColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setThumbColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getThumbColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setThumbColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getThumbColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getThumbColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSliderRenderer_setBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSliderRenderer_getBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSliderRenderer_setTextureTrack: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSliderRenderer_getTextureTrack: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSliderRenderer_setTextureTrackHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSliderRenderer_getTextureTrackHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureThumb(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSliderRenderer_setTextureThumb: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureThumb(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSliderRenderer_getTextureThumb: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureThumbHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSliderRenderer_setTextureThumbHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureThumbHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSliderRenderer_getTextureThumbHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbWithinTrack(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiSliderRenderer_setThumbWithinTrack: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiSliderRenderer_getThumbWithinTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  tguiSliderRenderer_getThumbWithinTrack: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiSpinButtonRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiSpinButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiSpinButtonRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiSpinButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiSpinButtonRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorderBetweenArrows(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setBorderBetweenArrows: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSpinButtonRenderer_getBorderBetweenArrows(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiSpinButtonRenderer_getBorderBetweenArrows: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSpinButtonRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSpinButtonRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setArrowColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSpinButtonRenderer_getArrowColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setArrowColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSpinButtonRenderer_getArrowColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSpinButtonRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowUp(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setTextureArrowUp: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowUp(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSpinButtonRenderer_getTextureArrowUp: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowUpHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setTextureArrowUpHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowUpHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSpinButtonRenderer_getTextureArrowUpHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setTextureArrowDown: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSpinButtonRenderer_getTextureArrowDown: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiSpinButtonRenderer_setTextureArrowDownHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiSpinButtonRenderer_getTextureArrowDownHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiTabsRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiTabsRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiTabsRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiTabsRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiTabsRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiTabsRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiTabsRenderer_getBorders: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setBackgroundColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getBackgroundColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setTextColorDisabled: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getTextColorDisabled: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTabsRenderer_setSelectedBorderColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTabsRenderer_getSelectedBorderColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTabsRenderer_setTextureTab: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTabsRenderer_getTextureTab: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureTabHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTabsRenderer_setTextureTabHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureTabHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTabsRenderer_getTextureTabHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureSelectedTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTabsRenderer_setTextureSelectedTab: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureSelectedTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTabsRenderer_getTextureSelectedTab: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureSelectedTabHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTabsRenderer_setTextureSelectedTabHover: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureSelectedTabHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTabsRenderer_getTextureSelectedTabHover: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureDisabledTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTabsRenderer_setTextureDisabledTab: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureDisabledTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTabsRenderer_getTextureDisabledTab: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTabsRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiTabsRenderer_setDistanceToSide: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTabsRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiTabsRenderer_getDistanceToSide: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiTextAreaRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiTextAreaRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiTextAreaRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiTextAreaRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiTextAreaRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiTextAreaRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiTextAreaRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiTextAreaRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiTextAreaRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiTextAreaRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setDefaultTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getDefaultTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setSelectedTextBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setSelectedTextBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getSelectedTextBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getSelectedTextBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setCaretColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTextAreaRenderer_setCaretColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getCaretColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTextAreaRenderer_getCaretColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTextAreaRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTextAreaRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTextAreaRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setCaretWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiTextAreaRenderer_setCaretWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTextAreaRenderer_getCaretWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiTextAreaRenderer_getCaretWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiTextAreaRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiTextAreaRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiTextAreaRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiTextAreaRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTextAreaRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiTextAreaRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiTreeViewRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiTreeViewRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiTreeViewRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiTreeViewRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setBorders: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiTreeViewRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiTreeViewRenderer_getBorders: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setPadding: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiOutline * tguiTreeViewRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  tguiTreeViewRenderer_getPadding: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setSelectedBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getSelectedBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setSelectedBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getSelectedBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setSelectedTextColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getSelectedTextColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setSelectedTextColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getSelectedTextColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiTreeViewRenderer_setBorderColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiTreeViewRenderer_getBorderColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextureBackground: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTreeViewRenderer_getTextureBackground: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBranchExpanded(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextureBranchExpanded: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBranchExpanded(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTreeViewRenderer_getTextureBranchExpanded: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBranchCollapsed(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextureBranchCollapsed: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBranchCollapsed(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTreeViewRenderer_getTextureBranchCollapsed: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureLeaf(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setTextureLeaf: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureLeaf(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  tguiTreeViewRenderer_getTextureLeaf: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiTreeViewRenderer_setScrollbar: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiTreeViewRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiTreeViewRenderer_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiTreeViewRenderer_setScrollbarWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiTreeViewRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiTreeViewRenderer_getScrollbarWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiRenderer * tguiWidgetRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiWidgetRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiWidgetRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiWidgetRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setOpacity(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiWidgetRenderer_setOpacity: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiWidgetRenderer_getOpacity(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiWidgetRenderer_getOpacity: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setOpacityDisabled(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  tguiWidgetRenderer_setOpacityDisabled: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiWidgetRenderer_getOpacityDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  tguiWidgetRenderer_getOpacityDisabled: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setFont(tguiRenderer * thisRenderer, const tguiFont * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Font *`
   * @returns `void`
   */
  tguiWidgetRenderer_setFont: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiFont * tguiWidgetRenderer_getFont(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Font *`
   */
  tguiWidgetRenderer_getFont: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setTextSize(tguiRenderer * thisRenderer, unsigned int value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiWidgetRenderer_setTextSize: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiWidgetRenderer_getTextSize(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `unsigned int`
   */
  tguiWidgetRenderer_getTextSize: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setTransparentTexture(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidgetRenderer_setTransparentTexture: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_getTransparentTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  tguiWidgetRenderer_getTransparentTexture: {
    parameters: ["pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setData(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiWidgetRenderer_setData: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiRendererData * tguiWidgetRenderer_getData(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  tguiWidgetRenderer_getData: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyBool(tguiRenderer * thisRenderer, tguiUtf32 property, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `Bool`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyBool: {
    parameters: ["pointer", "buffer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyFont(tguiRenderer * thisRenderer, tguiUtf32 property, const tguiFont * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `const Font *`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyFont: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyColor(tguiRenderer * thisRenderer, tguiUtf32 property, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyColor: {
    parameters: ["pointer", "buffer", {
      struct: ["u8", "u8", "u8", "u8", "i16"],
    }],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyString(tguiRenderer * thisRenderer, tguiUtf32 property, tguiUtf32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `Utf32`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyString: {
    parameters: ["pointer", "buffer", "buffer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyNumber(tguiRenderer * thisRenderer, tguiUtf32 property, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `float`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyNumber: {
    parameters: ["pointer", "buffer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyOutline(tguiRenderer * thisRenderer, tguiUtf32 property, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `const Outline *`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyOutline: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyTexture(tguiRenderer * thisRenderer, tguiUtf32 property, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `const Texture *`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyTexture: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyTextStyle(tguiRenderer * thisRenderer, tguiUtf32 property, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `Uint32`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyTextStyle: {
    parameters: ["pointer", "buffer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_setPropertyRendererData(tguiRenderer * thisRenderer, tguiUtf32 property, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param property `Utf32`
   * @param value `const RendererData *`
   * @returns `void`
   */
  tguiWidgetRenderer_setPropertyRendererData: {
    parameters: ["pointer", "buffer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_hasProperty(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  tguiWidgetRenderer_hasProperty: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_getPropertyBool(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  tguiWidgetRenderer_getPropertyBool: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiFont * tguiWidgetRenderer_getPropertyFont(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Font *`
   */
  tguiWidgetRenderer_getPropertyFont: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiColor tguiWidgetRenderer_getPropertyColor(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiWidgetRenderer_getPropertyColor: {
    parameters: ["pointer", "buffer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiUtf32 tguiWidgetRenderer_getPropertyString(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  tguiWidgetRenderer_getPropertyString: {
    parameters: ["pointer", "buffer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * float tguiWidgetRenderer_getPropertyNumber(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `float`
   */
  tguiWidgetRenderer_getPropertyNumber: {
    parameters: ["pointer", "buffer"],
    result: "f32",
  },

  /**
   * @original ```c
   * tguiOutline * tguiWidgetRenderer_getPropertyOutline(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Outline *`
   */
  tguiWidgetRenderer_getPropertyOutline: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiTexture * tguiWidgetRenderer_getPropertyTexture(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Texture *`
   */
  tguiWidgetRenderer_getPropertyTexture: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiUint32 tguiWidgetRenderer_getPropertyTextStyle(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Uint32`
   */
  tguiWidgetRenderer_getPropertyTextStyle: {
    parameters: ["pointer", "buffer"],
    result: "u32",
  },

  /**
   * @original ```c
   * tguiRendererData * tguiWidgetRenderer_getPropertyRendererData(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `RendererData *`
   */
  tguiWidgetRenderer_getPropertyRendererData: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiWidgetRenderer_destroy(tguiRenderer * renderer);
   * ```
   *
   * @param renderer `Renderer *`
   * @returns `void`
   */
  tguiWidgetRenderer_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiRenderer * tguiCheckBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiCheckBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiCheckBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiCheckBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiPanelListBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiPanelListBoxRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiPanelListBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiPanelListBoxRenderer_copy: { parameters: ["pointer"], result: "pointer" },

  /**
   * @original ```c
   * void tguiPanelListBoxRenderer_setItemsBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelListBoxRenderer_setItemsBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelListBoxRenderer_getItemsBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelListBoxRenderer_getItemsBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiPanelListBoxRenderer_setItemsBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelListBoxRenderer_setItemsBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelListBoxRenderer_getItemsBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelListBoxRenderer_getItemsBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiPanelListBoxRenderer_setSelectedItemsBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelListBoxRenderer_setSelectedItemsBackgroundColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelListBoxRenderer_getSelectedItemsBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelListBoxRenderer_getSelectedItemsBackgroundColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiPanelListBoxRenderer_setSelectedItemsBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiPanelListBoxRenderer_setSelectedItemsBackgroundColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiPanelListBoxRenderer_getSelectedItemsBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiPanelListBoxRenderer_getSelectedItemsBackgroundColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSeparatorLineRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiSeparatorLineRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiSeparatorLineRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiSeparatorLineRenderer_copy: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSeparatorLineRenderer_setColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSeparatorLineRenderer_setColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSeparatorLineRenderer_getColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSeparatorLineRenderer_getColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiRenderer * tguiSplitContainerRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  tguiSplitContainerRenderer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiRenderer * tguiSplitContainerRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  tguiSplitContainerRenderer_copy: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiSplitContainerRenderer_setSplitterColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSplitContainerRenderer_setSplitterColor: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSplitContainerRenderer_getSplitterColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSplitContainerRenderer_getSplitterColor: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * void tguiSplitContainerRenderer_setSplitterColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  tguiSplitContainerRenderer_setSplitterColorHover: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8", "i16"] }],
    result: "void",
  },

  /**
   * @original ```c
   * tguiColor tguiSplitContainerRenderer_getSplitterColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  tguiSplitContainerRenderer_getSplitterColorHover: {
    parameters: ["pointer"],
    result: { struct: ["u8", "u8", "u8", "u8", "i16"] },
  },

  /**
   * @original ```c
   * tguiScrollbarAccessor * tguiScrollbarChildInterface_getScrollbar(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `ScrollbarAccessor *`
   */
  tguiScrollbarChildInterface_getScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiScrollbarAccessor * tguiDualScrollbarChildInterface_getVerticalScrollbar(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `ScrollbarAccessor *`
   */
  tguiDualScrollbarChildInterface_getVerticalScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiScrollbarAccessor * tguiDualScrollbarChildInterface_getHorizontalScrollbar(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `ScrollbarAccessor *`
   */
  tguiDualScrollbarChildInterface_getHorizontalScrollbar: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiScrollbarAccessor_destroy(tguiScrollbarAccessor * accessor);
   * ```
   *
   * @param accessor `ScrollbarAccessor *`
   * @returns `void`
   */
  tguiScrollbarAccessor_destroy: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiScrollbarAccessor_setValue(tguiScrollbarAccessor * thisScrollbarAccessor, unsigned int value);
   * ```
   *
   * @param thisScrollbarAccessor `ScrollbarAccessor *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbarAccessor_setValue: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiScrollbarAccessor_getValue(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `unsigned int`
   */
  tguiScrollbarAccessor_getValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * void tguiScrollbarAccessor_setScrollAmount(tguiScrollbarAccessor * thisScrollbarAccessor, unsigned int value);
   * ```
   *
   * @param thisScrollbarAccessor `ScrollbarAccessor *`
   * @param value `unsigned int`
   * @returns `void`
   */
  tguiScrollbarAccessor_setScrollAmount: {
    parameters: ["pointer", "u32"],
    result: "void",
  },

  /**
   * @original ```c
   * unsigned int tguiScrollbarAccessor_getScrollAmount(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `unsigned int`
   */
  tguiScrollbarAccessor_getScrollAmount: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * void tguiScrollbarAccessor_setPolicy(tguiScrollbarAccessor * thisScrollbarAccessor, tguiScrollbarPolicy value);
   * ```
   *
   * @param thisScrollbarAccessor `ScrollbarAccessor *`
   * @param value `ScrollbarPolicy`
   * @returns `void`
   */
  tguiScrollbarAccessor_setPolicy: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiScrollbarPolicy tguiScrollbarAccessor_getPolicy(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `ScrollbarPolicy`
   */
  tguiScrollbarAccessor_getPolicy: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * unsigned int tguiScrollbarAccessor_getMaximum(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `unsigned int`
   */
  tguiScrollbarAccessor_getMaximum: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * unsigned int tguiScrollbarAccessor_getViewportSize(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `unsigned int`
   */
  tguiScrollbarAccessor_getViewportSize: {
    parameters: ["pointer"],
    result: "u32",
  },

  /**
   * @original ```c
   * unsigned int tguiScrollbarAccessor_getMaxValue(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `unsigned int`
   */
  tguiScrollbarAccessor_getMaxValue: { parameters: ["pointer"], result: "u32" },

  /**
   * @original ```c
   * tguiBool tguiScrollbarAccessor_isShown(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `Bool`
   */
  tguiScrollbarAccessor_isShown: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * float tguiScrollbarAccessor_getWidth(const tguiScrollbarAccessor * thisScrollbarAccessor);
   * ```
   *
   * @param thisScrollbarAccessor `const ScrollbarAccessor *`
   * @returns `float`
   */
  tguiScrollbarAccessor_getWidth: { parameters: ["pointer"], result: "f32" },

  /**
   * @original ```c
   * tguiWidget * tguiGrowHorizontalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiGrowHorizontalLayout_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiGrowVerticalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiGrowVerticalLayout_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiPanelListBox_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiPanelListBox_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiPanelListBox_deselectItem: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * void tguiPanelListBox_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  tguiPanelListBox_removeAllItems: { parameters: ["pointer"], result: "void" },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_setSelectedItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiPanelListBox_setSelectedItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_setSelectedItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiPanelListBox_setSelectedItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_removeItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiPanelListBox_removeItemById: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_removeItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  tguiPanelListBox_removeItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiPanelListBox_getSelectedItemId(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  tguiPanelListBox_getSelectedItemId: {
    parameters: ["pointer"],
    result: "buffer",
  },

  /**
   * @original ```c
   * int tguiPanelListBox_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiPanelListBox_getSelectedItemIndex: {
    parameters: ["pointer"],
    result: "i32",
  },

  /**
   * @original ```c
   * int tguiPanelListBox_getHoveredItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  tguiPanelListBox_getHoveredItemIndex: {
    parameters: ["pointer"],
    result: "i32",
  },

  /**
   * @original ```c
   * size_t tguiPanelListBox_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiPanelListBox_getItemCount: { parameters: ["pointer"], result: "usize" },

  /**
   * @original ```c
   * const tguiUtf32 * tguiPanelListBox_getItemIds(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  tguiPanelListBox_getItemIds: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiPanelListBox_setMaximumItems(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  tguiPanelListBox_setMaximumItems: {
    parameters: ["pointer", "usize"],
    result: "void",
  },

  /**
   * @original ```c
   * size_t tguiPanelListBox_getMaximumItems(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  tguiPanelListBox_getMaximumItems: {
    parameters: ["pointer"],
    result: "usize",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_containsId(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  tguiPanelListBox_containsId: {
    parameters: ["pointer", "buffer"],
    result: "i16",
  },

  /**
   * @original ```c
   * const tguiLayout * tguiPanelListBox_getItemsWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `const Layout *`
   */
  tguiPanelListBox_getItemsWidth: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * void tguiPanelListBox_setItemsHeight(tguiWidget * thisWidget, const tguiLayout * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `const Layout *`
   * @returns `void`
   */
  tguiPanelListBox_setItemsHeight: {
    parameters: ["pointer", "pointer"],
    result: "void",
  },

  /**
   * @original ```c
   * const tguiLayout * tguiPanelListBox_getItemsHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `const Layout *`
   */
  tguiPanelListBox_getItemsHeight: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_addItem(tguiWidget * widget, tguiUtf32 id);
   * ```
   *
   * @param widget `Widget *`
   * @param id `Utf32`
   * @returns `Widget *`
   */
  tguiPanelListBox_addItem: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_addItemAtIndex(tguiWidget * widget, tguiUtf32 id, size_t index);
   * ```
   *
   * @param widget `Widget *`
   * @param id `Utf32`
   * @param index `size_t`
   * @returns `Widget *`
   */
  tguiPanelListBox_addItemAtIndex: {
    parameters: ["pointer", "buffer", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_getPanelTemplate(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `Widget *`
   */
  tguiPanelListBox_getPanelTemplate: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_setSelectedItem(tguiWidget * widget, const tguiWidget * panelPtr);
   * ```
   *
   * @param widget `Widget *`
   * @param panelPtr `const Widget *`
   * @returns `Bool`
   */
  tguiPanelListBox_setSelectedItem: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_getSelectedItem(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  tguiPanelListBox_getSelectedItem: {
    parameters: ["pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_removeItem(tguiWidget * widget, const tguiWidget * panelPtr);
   * ```
   *
   * @param widget `Widget *`
   * @param panelPtr `const Widget *`
   * @returns `Bool`
   */
  tguiPanelListBox_removeItem: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_getItemById(const tguiWidget * widget, tguiUtf32 id);
   * ```
   *
   * @param widget `const Widget *`
   * @param id `Utf32`
   * @returns `Widget *`
   */
  tguiPanelListBox_getItemById: {
    parameters: ["pointer", "buffer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiWidget * tguiPanelListBox_getItemByIndex(const tguiWidget * widget, size_t index);
   * ```
   *
   * @param widget `const Widget *`
   * @param index `size_t`
   * @returns `Widget *`
   */
  tguiPanelListBox_getItemByIndex: {
    parameters: ["pointer", "usize"],
    result: "pointer",
  },

  /**
   * @original ```c
   * int tguiPanelListBox_getIndexById(const tguiWidget * widget, tguiUtf32 id);
   * ```
   *
   * @param widget `const Widget *`
   * @param id `Utf32`
   * @returns `int`
   */
  tguiPanelListBox_getIndexById: {
    parameters: ["pointer", "buffer"],
    result: "i32",
  },

  /**
   * @original ```c
   * int tguiPanelListBox_getIndexByItem(const tguiWidget * widget, const tguiWidget * panelPtr);
   * ```
   *
   * @param widget `const Widget *`
   * @param panelPtr `const Widget *`
   * @returns `int`
   */
  tguiPanelListBox_getIndexByItem: {
    parameters: ["pointer", "pointer"],
    result: "i32",
  },

  /**
   * @original ```c
   * tguiUtf32 tguiPanelListBox_getIdByIndex(const tguiWidget * widget, size_t index);
   * ```
   *
   * @param widget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  tguiPanelListBox_getIdByIndex: {
    parameters: ["pointer", "usize"],
    result: "buffer",
  },

  /**
   * @original ```c
   * tguiWidget ** tguiPanelListBox_getItems(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `Widget **`
   */
  tguiPanelListBox_getItems: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },

  /**
   * @original ```c
   * tguiBool tguiPanelListBox_contains(const tguiWidget * widget, const tguiWidget * panelPtr);
   * ```
   *
   * @param widget `const Widget *`
   * @param panelPtr `const Widget *`
   * @returns `Bool`
   */
  tguiPanelListBox_contains: {
    parameters: ["pointer", "pointer"],
    result: "i16",
  },

  /**
   * @original ```c
   * tguiWidget * tguiRichTextLabel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiRichTextLabel_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiSeparatorLine_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiSeparatorLine_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * tguiWidget * tguiSplitContainer_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  tguiSplitContainer_create: { parameters: [], result: "pointer" },

  /**
   * @original ```c
   * void tguiSplitContainer_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  tguiSplitContainer_setOrientation: {
    parameters: ["pointer", "i16"],
    result: "void",
  },

  /**
   * @original ```c
   * tguiOrientation tguiSplitContainer_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  tguiSplitContainer_getOrientation: { parameters: ["pointer"], result: "i16" },

  /**
   * @original ```c
   * void tguiSplitContainer_setSplitterWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSplitContainer_setSplitterWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSplitContainer_getSplitterWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSplitContainer_getSplitterWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiSplitContainer_setMinimumGrabWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  tguiSplitContainer_setMinimumGrabWidth: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSplitContainer_getMinimumGrabWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSplitContainer_getMinimumGrabWidth: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * void tguiSplitContainer_setMinValidSplitterOffset(tguiWidget * thisWidget, float minOffset);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param minOffset `float`
   * @returns `void`
   */
  tguiSplitContainer_setMinValidSplitterOffset: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiSplitContainer_setMaxValidSplitterOffset(tguiWidget * thisWidget, float maxOffset);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param maxOffset `float`
   * @returns `void`
   */
  tguiSplitContainer_setMaxValidSplitterOffset: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * void tguiSplitContainer_setSplitterOffset(tguiWidget * thisWidget, float offset);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param offset `float`
   * @returns `void`
   */
  tguiSplitContainer_setSplitterOffset: {
    parameters: ["pointer", "f32"],
    result: "void",
  },

  /**
   * @original ```c
   * float tguiSplitContainer_getMinValidSplitterOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSplitContainer_getMinValidSplitterOffset: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiSplitContainer_getMaxValidSplitterOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSplitContainer_getMaxValidSplitterOffset: {
    parameters: ["pointer"],
    result: "f32",
  },

  /**
   * @original ```c
   * float tguiSplitContainer_getSplitterOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  tguiSplitContainer_getSplitterOffset: {
    parameters: ["pointer"],
    result: "f32",
  },
} as const;
