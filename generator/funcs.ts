export const FUNCS = [
  {
    name: "tguiColor_createNull",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [],
  },
  {
    name: "tguiColor_fromRGB",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      { name: "red", nativeType: "u8", type: "tguiUint8" },
      { name: "green", nativeType: "u8", type: "tguiUint8" },
      { name: "blue", nativeType: "u8", type: "tguiUint8" },
    ],
  },
  {
    name: "tguiColor_fromRGBA",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      { name: "red", nativeType: "u8", type: "tguiUint8" },
      { name: "green", nativeType: "u8", type: "tguiUint8" },
      { name: "blue", nativeType: "u8", type: "tguiUint8" },
      { name: "alpha", nativeType: "u8", type: "tguiUint8" },
    ],
  },
  {
    name: "tguiColor_fromString",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      { name: "string", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiDuration_fromSeconds",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [{ name: "amount", nativeType: "f32", type: "float" }],
  },
  {
    name: "tguiDuration_fromMilliseconds",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [{ name: "amount", nativeType: "i32", type: "tguiInt32" }],
  },
  {
    name: "tguiDuration_fromMicroseconds",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [{ name: "amount", nativeType: "i64", type: "tguiInt64" }],
  },
  {
    name: "tguiDuration_fromNanoseconds",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [{ name: "amount", nativeType: "i64", type: "tguiInt64" }],
  },
  {
    name: "tguiDuration_asSeconds",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiDuration_asMilliseconds",
    result: "i32",
    returnType: "tguiInt32",
    parameters: [
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiDuration_asMicroseconds",
    result: "i64",
    returnType: "tguiInt64",
    parameters: [
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiDuration_asNanoseconds",
    result: "i64",
    returnType: "tguiInt64",
    parameters: [
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiFloatRect_contains",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiFloatRect *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiIntRect_contains",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiIntRect *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "int", nativeType: "i16" },
          { name: "y", type: "int", nativeType: "i16" },
        ],
        type: "tguiVector2i",
      },
    ],
  },
  {
    name: "tguiUIntRect_contains",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiUIntRect *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
    ],
  },
  {
    name: "tguiFloatRect_intersects",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiFloatRect *",
      },
      {
        name: "otherRect",
        nativeType: "pointer",
        type: "const tguiFloatRect *",
      },
    ],
  },
  {
    name: "tguiIntRect_intersects",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiIntRect *",
      },
      {
        name: "otherRect",
        nativeType: "pointer",
        type: "const tguiIntRect *",
      },
    ],
  },
  {
    name: "tguiUIntRect_intersects",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "rect",
        nativeType: "pointer",
        type: "const tguiUIntRect *",
      },
      {
        name: "otherRect",
        nativeType: "pointer",
        type: "const tguiUIntRect *",
      },
    ],
  },
  {
    name: "tgui_setGlobalTextSize",
    result: "void",
    returnType: "void",
    parameters: [{ name: "textSize", nativeType: "u32", type: "unsigned int" }],
  },
  {
    name: "tgui_getGlobalTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [],
  },
  {
    name: "tgui_setDoubleClickTime",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tgui_getDoubleClickTime",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [],
  },
  {
    name: "tgui_setResourcePath",
    result: "void",
    returnType: "void",
    parameters: [{ name: "path", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tgui_setEditCursorBlinkRate",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "blinkRate",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tgui_getEditCursorBlinkRate",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [],
  },
  {
    name: "tgui_readFileToMemory",
    result: "buffer",
    returnType: "tguiUint8 *",
    parameters: [
      { name: "filename", nativeType: "buffer", type: "tguiUtf32" },
      { name: "fileSize", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tgui_writeFile",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "filename", nativeType: "buffer", type: "tguiUtf32" },
      { name: "textToWrite", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tgui_readFileToMemory_free",
    result: "void",
    returnType: "void",
    parameters: [{ name: "arg1", nativeType: "buffer", type: "tguiUint8 *" }],
  },
  {
    name: "tgui_getLastError",
    result: "buffer",
    returnType: "const char *",
    parameters: [],
  },
  {
    name: "tgui_setBindingWidgetCleanupCallback",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiWidget *)",
      },
    ],
  },
  {
    name: "tguiCursor_setStyle",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "type", nativeType: "i16", type: "tguiCursorType" },
      {
        name: "pixels",
        nativeType: "pointer",
        type: "const tguiUint8 *",
      },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
      {
        name: "hotspot",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
    ],
  },
  {
    name: "tguiCursor_resetStyle",
    result: "void",
    returnType: "void",
    parameters: [{ name: "type", nativeType: "i16", type: "tguiCursorType" }],
  },
  {
    name: "tguiGui_draw",
    result: "void",
    returnType: "void",
    parameters: [{ name: "gui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGui_loadWidgetsFromFile",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "gui", nativeType: "pointer", type: "tguiGui *" },
      { name: "filename", nativeType: "buffer", type: "const char *" },
      { name: "replaceExisting", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_saveWidgetsToFile",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "gui", nativeType: "pointer", type: "tguiGui *" },
      { name: "filename", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiGui_setAbsoluteViewport",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      {
        name: "viewport",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiGui_setRelativeViewport",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      {
        name: "viewport",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiGui_getViewport",
    result: [
      { name: "left", type: "float", nativeType: "f32" },
      { name: "top", type: "float", nativeType: "f32" },
      { name: "width", type: "float", nativeType: "f32" },
      { name: "height", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiFloatRect",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_setAbsoluteView",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      {
        name: "view",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiGui_setRelativeView",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      {
        name: "view",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiGui_getView",
    result: [
      { name: "left", type: "float", nativeType: "f32" },
      { name: "top", type: "float", nativeType: "f32" },
      { name: "width", type: "float", nativeType: "f32" },
      { name: "height", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiFloatRect",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_setTabKeyUsageEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_isTabKeyUsageEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_setFont",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "value", nativeType: "pointer", type: "const tguiFont *" },
    ],
  },
  {
    name: "tguiGui_getFont",
    result: "pointer",
    returnType: "const tguiFont *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_add",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiGui_get",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiGui_getWidgets",
    result: "pointer",
    returnType: "tguiWidget **",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiGui_remove",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_removeAllWidgets",
    result: "void",
    returnType: "void",
    parameters: [{ name: "thisGui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGui_getFocusedChild",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_getFocusedLeaf",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_getWidgetAtPos",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_getWidgetBelowMouseCursor",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      {
        name: "mousePos",
        nativeType: [
          { name: "x", type: "int", nativeType: "i16" },
          { name: "y", type: "int", nativeType: "i16" },
        ],
        type: "tguiVector2i",
      },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_focusNextWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_focusPreviousWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_unfocusAllWidgets",
    result: "void",
    returnType: "void",
    parameters: [{ name: "thisGui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGui_moveWidgetToFront",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_moveWidgetToBack",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_moveWidgetForward",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_moveWidgetBackward",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_setWidgetIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiGui_getWidgetIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGui_setOpacity",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiGui_getOpacity",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_setTextSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiGui_getTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_setDrawingUpdatesTime",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "drawUpdatesTime", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_updateTime",
    result: "i16",
    returnType: "tguiBool",
    parameters: [{ name: "thisGui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGui_setOverrideMouseCursor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "type", nativeType: "i16", type: "tguiCursorType" },
    ],
  },
  {
    name: "tguiGui_restoreOverrideMouseCursor",
    result: "void",
    returnType: "void",
    parameters: [{ name: "thisGui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGui_requestMouseCursor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "type", nativeType: "i16", type: "tguiCursorType" },
    ],
  },
  {
    name: "tguiGui_mapPixelToCoords",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      {
        name: "pixel",
        nativeType: [
          { name: "x", type: "int", nativeType: "i16" },
          { name: "y", type: "int", nativeType: "i16" },
        ],
        type: "tguiVector2i",
      },
    ],
  },
  {
    name: "tguiGui_mapCoordsToPixel",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
      {
        name: "coord",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiGui_setKeyboardNavigationEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGui_isKeyboardNavigationEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "const tguiGui *" },
    ],
  },
  {
    name: "tguiGui_mainLoop",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisGui", nativeType: "pointer", type: "tguiGui *" },
      {
        name: "clearColor",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiGuiCSFMLGraphics_create",
    result: "pointer",
    returnType: "tguiGui *",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
    ],
  },
  {
    name: "tguiGuiCSFMLGraphics_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "gui", nativeType: "pointer", type: "tguiGui *" }],
  },
  {
    name: "tguiGuiCSFMLGraphics_handleEvent",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "gui", nativeType: "pointer", type: "tguiGui *" },
      { name: "event", nativeType: "pointer", type: "const sfEvent *" },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawWidget",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiBackendRenderTarget_addClippingLayer",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "rect",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_removeClippingLayer",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "borders",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "color",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawFilledRect",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "color",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawSprite",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "sprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawText",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      { name: "text", nativeType: "pointer", type: "const tguiText *" },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawTextOutline",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      { name: "text", nativeType: "pointer", type: "const tguiText *" },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawTextWithoutOutline",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      { name: "text", nativeType: "pointer", type: "const tguiText *" },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawTriangle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "point1",
        nativeType: [
          {
            name: "position",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
          {
            name: "color",
            type: "tguiVertexColor",
            nativeType: [
              { name: "r", type: "unsigned char", nativeType: "u8" },
              { name: "g", type: "unsigned char", nativeType: "u8" },
              { name: "b", type: "unsigned char", nativeType: "u8" },
              { name: "a", type: "unsigned char", nativeType: "u8" },
            ],
          },
          {
            name: "texCoords",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
        ],
        type: "tguiVertex",
      },
      {
        name: "point2",
        nativeType: [
          {
            name: "position",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
          {
            name: "color",
            type: "tguiVertexColor",
            nativeType: [
              { name: "r", type: "unsigned char", nativeType: "u8" },
              { name: "g", type: "unsigned char", nativeType: "u8" },
              { name: "b", type: "unsigned char", nativeType: "u8" },
              { name: "a", type: "unsigned char", nativeType: "u8" },
            ],
          },
          {
            name: "texCoords",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
        ],
        type: "tguiVertex",
      },
      {
        name: "point3",
        nativeType: [
          {
            name: "position",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
          {
            name: "color",
            type: "tguiVertexColor",
            nativeType: [
              { name: "r", type: "unsigned char", nativeType: "u8" },
              { name: "g", type: "unsigned char", nativeType: "u8" },
              { name: "b", type: "unsigned char", nativeType: "u8" },
              { name: "a", type: "unsigned char", nativeType: "u8" },
            ],
          },
          {
            name: "texCoords",
            type: "tguiVector2f",
            nativeType: [
              { name: "x", type: "float", nativeType: "f32" },
              { name: "y", type: "float", nativeType: "f32" },
            ],
          },
        ],
        type: "tguiVertex",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawCircle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      { name: "size", nativeType: "f32", type: "float" },
      {
        name: "backgroundColor",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
      { name: "borderThickness", nativeType: "f32", type: "float" },
      {
        name: "borderColor",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawRoundedRectangle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "backgroundColor",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
      { name: "radius", nativeType: "f32", type: "float" },
      {
        name: "borders",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
      {
        name: "borderColor",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiBackendRenderTarget_drawVertexArray",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "target",
        nativeType: "pointer",
        type: "tguiBackendRenderTarget *",
      },
      {
        name: "states",
        nativeType: "pointer",
        type: "const tguiRenderStates *",
      },
      {
        name: "vertices",
        nativeType: "pointer",
        type: "const tguiVertex *",
      },
      { name: "vertexCount", nativeType: "usize", type: "size_t" },
      {
        name: "indices",
        nativeType: "pointer",
        type: "const unsigned int *",
      },
      { name: "indexCount", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tgui_base64Encode",
    result: "buffer",
    returnType: "const char *",
    parameters: [
      { name: "data", nativeType: "buffer", type: "const uint8_t *" },
      { name: "nrBytes", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tgui_base64Decode",
    result: "buffer",
    returnType: "const uint8_t *",
    parameters: [
      { name: "data", nativeType: "buffer", type: "const char *" },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiContainer_loadWidgetsFromFile",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "container", nativeType: "pointer", type: "tguiWidget *" },
      { name: "filename", nativeType: "buffer", type: "const char *" },
      { name: "replaceExisting", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiContainer_saveWidgetsToFile",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "container", nativeType: "pointer", type: "tguiWidget *" },
      { name: "filename", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiContainer_add",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiContainer_get",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiContainer_getWidgets",
    result: "pointer",
    returnType: "tguiWidget **",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiContainer_remove",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_removeAllWidgets",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
    ],
  },
  {
    name: "tguiContainer_moveWidgetToFront",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_moveWidgetToBack",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_moveWidgetForward",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_moveWidgetBackward",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_setWidgetIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiContainer_getWidgetIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiContainer_getFocusedChild",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiContainer_getFocusedLeaf",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiContainer_getWidgetAtPos",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiContainer_focusNextWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiContainer_focusPreviousWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "recursive", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiContainer_getInnerSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiContainer_getChildWidgetsOffset",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisContainer",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiCustomWidget_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiCustomWidget_setPositionChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setSizeChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setVisibleChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiBool)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setEnableChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiBool)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setFocusChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiBool)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setCanGainFocusCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(void)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setGetFullSizeCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiVector2f (*)(void)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setGetWidgetOffsetCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiVector2f (*)(void)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setUpdateTimeCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(tguiDuration)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setMouseOnWidgetCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setLeftMousePressedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setLeftMouseReleasedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setRightMousePressedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setRightMouseReleasedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setMouseMovedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setKeyPressedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiKeyEvent)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setTextEnteredCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiChar32)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setScrolledCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(float, tguiVector2f, tguiBool)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setMouseNoLongerOnWidgetCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "function", nativeType: "function", type: "void (*)(void)" },
    ],
  },
  {
    name: "tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "function", nativeType: "function", type: "void (*)(void)" },
    ],
  },
  {
    name: "tguiCustomWidget_setMouseEnteredWidgetCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "function", nativeType: "function", type: "void (*)(void)" },
    ],
  },
  {
    name: "tguiCustomWidget_setMouseLeftWidgetCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "function", nativeType: "function", type: "void (*)(void)" },
    ],
  },
  {
    name: "tguiCustomWidget_setRendererChangedCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(tguiUtf32)",
      },
    ],
  },
  {
    name: "tguiCustomWidget_setDrawCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiBackendRenderTarget *, tguiRenderStates *)",
      },
    ],
  },
  {
    name: "tguiFilesystem_getParentPath",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [{ name: "path", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFilesystem_joinPaths",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "path1", nativeType: "buffer", type: "tguiUtf32" },
      { name: "path2", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFilesystem_directoryExists",
    result: "i16",
    returnType: "tguiBool",
    parameters: [{ name: "path", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFilesystem_fileExists",
    result: "i16",
    returnType: "tguiBool",
    parameters: [{ name: "path", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFilesystem_createDirectory",
    result: "i16",
    returnType: "tguiBool",
    parameters: [{ name: "path", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFilesystem_getLocalDataDirectory",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [],
  },
  {
    name: "tguiFont_createNull",
    result: "pointer",
    returnType: "tguiFont *",
    parameters: [],
  },
  {
    name: "tguiFont_createFromFile",
    result: "pointer",
    returnType: "tguiFont *",
    parameters: [{ name: "filename", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFont_createFromMemory",
    result: "pointer",
    returnType: "tguiFont *",
    parameters: [
      { name: "data", nativeType: "buffer", type: "tguiUint8 *" },
      { name: "dataSize", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiFont_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "font", nativeType: "pointer", type: "tguiFont *" }],
  },
  {
    name: "tguiFont_getGlyph",
    result: [
      { name: "advance", type: "float", nativeType: "f32" },
      {
        name: "bounds",
        type: "tguiFloatRect",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
      },
      {
        name: "textureRect",
        type: "tguiUIntRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
      },
    ],
    returnType: "tguiFontGlyph",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "codePoint", nativeType: "u32", type: "tguiChar32" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
      { name: "bold", nativeType: "i16", type: "tguiBool" },
      { name: "outlineThickness", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiFont_setGlobalFont",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
    ],
  },
  {
    name: "tguiFont_getGlobalFont",
    result: "pointer",
    returnType: "const tguiFont *",
    parameters: [],
  },
  {
    name: "tguiFont_getId",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisFont",
        nativeType: "pointer",
        type: "const tguiFont *",
      },
    ],
  },
  {
    name: "tguiFont_getKerning",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisFont",
        nativeType: "pointer",
        type: "const tguiFont *",
      },
      { name: "first", nativeType: "u32", type: "tguiChar32" },
      { name: "second", nativeType: "u32", type: "tguiChar32" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
      { name: "bold", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFont_getLineSpacing",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisFont",
        nativeType: "pointer",
        type: "const tguiFont *",
      },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiFont_getFontHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisFont",
        nativeType: "pointer",
        type: "const tguiFont *",
      },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiFont_setSmooth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisFont", nativeType: "pointer", type: "tguiFont *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFont_isSmooth",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisFont",
        nativeType: "pointer",
        type: "const tguiFont *",
      },
    ],
  },
  {
    name: "tguiLayout_create",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [{ name: "constant", nativeType: "f32", type: "float" }],
  },
  {
    name: "tguiLayout_createFromString",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      { name: "expression", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiLayout_copy",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      { name: "other", nativeType: "pointer", type: "const tguiLayout *" },
    ],
  },
  {
    name: "tguiLayout_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "layout", nativeType: "pointer", type: "tguiLayout *" },
    ],
  },
  {
    name: "tguiLayout_replaceValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "layout", nativeType: "pointer", type: "tguiLayout *" },
      {
        name: "newLayout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiLayout_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiLayout_isConstant",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiLayout2d_create",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      {
        name: "constant",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiLayout2d_createFromLayouts",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      { name: "x", nativeType: "pointer", type: "tguiLayout *" },
      { name: "y", nativeType: "pointer", type: "tguiLayout *" },
    ],
  },
  {
    name: "tguiLayout2d_createFromString",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      { name: "expression", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiLayout2d_copy",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiLayout2d *",
      },
    ],
  },
  {
    name: "tguiLayout2d_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "layout", nativeType: "pointer", type: "tguiLayout2d *" },
    ],
  },
  {
    name: "tguiLayout2d_getValue",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout2d *",
      },
    ],
  },
  {
    name: "tguiBindPosX",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindPosY",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindLeft",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindTop",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindWidth",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindHeight",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindInnerWidth",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "container",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindInnerHeight",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "container",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindRight",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindBottom",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindPosition",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindSize",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindInnerSize",
    result: "pointer",
    returnType: "tguiLayout2d *",
    parameters: [
      {
        name: "container",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBindMin",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "value1",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
      {
        name: "value2",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiBindMax",
    result: "pointer",
    returnType: "tguiLayout *",
    parameters: [
      {
        name: "value1",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
      {
        name: "value2",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiOutline_create",
    result: "pointer",
    returnType: "tguiOutline *",
    parameters: [
      { name: "left", nativeType: "f32", type: "float" },
      { name: "top", nativeType: "f32", type: "float" },
      { name: "right", nativeType: "f32", type: "float" },
      { name: "bottom", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiOutline_createFromStrings",
    result: "pointer",
    returnType: "tguiOutline *",
    parameters: [
      { name: "left", nativeType: "buffer", type: "const char *" },
      { name: "top", nativeType: "buffer", type: "const char *" },
      { name: "right", nativeType: "buffer", type: "const char *" },
      { name: "bottom", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiOutline_copy",
    result: "pointer",
    returnType: "tguiOutline *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiOutline_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "outline", nativeType: "pointer", type: "tguiOutline *" },
    ],
  },
  {
    name: "tguiOutline_getLeft",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "outline",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiOutline_getTop",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "outline",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiOutline_getRight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "outline",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiOutline_getBottom",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "outline",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiRendererData_copy",
    result: "pointer",
    returnType: "tguiRendererData *",
    parameters: [
      {
        name: "data",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiRendererData_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "data", nativeType: "pointer", type: "tguiRendererData *" },
    ],
  },
  {
    name: "tguiSprite_createNull",
    result: "pointer",
    returnType: "tguiSprite *",
    parameters: [],
  },
  {
    name: "tguiSprite_createFromTexture",
    result: "pointer",
    returnType: "tguiSprite *",
    parameters: [
      { name: "texture", nativeType: "pointer", type: "tguiTexture *" },
    ],
  },
  {
    name: "tguiSprite_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "sprite", nativeType: "pointer", type: "tguiSprite *" },
    ],
  },
  {
    name: "tguiSprite_getScalingType",
    result: "i16",
    returnType: "tguiSpriteScalingType",
    parameters: [
      {
        name: "sprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_isSet",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setTexture",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSprite_getTexture",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setPosition",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiSprite_getPosition",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiSprite_getSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setOpacity",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSprite_getOpacity",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setVisibleRect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      {
        name: "value",
        nativeType: [
          { name: "left", type: "float", nativeType: "f32" },
          { name: "top", type: "float", nativeType: "f32" },
          { name: "width", type: "float", nativeType: "f32" },
          { name: "height", type: "float", nativeType: "f32" },
        ],
        type: "tguiFloatRect",
      },
    ],
  },
  {
    name: "tguiSprite_getVisibleRect",
    result: [
      { name: "left", type: "float", nativeType: "f32" },
      { name: "top", type: "float", nativeType: "f32" },
      { name: "width", type: "float", nativeType: "f32" },
      { name: "height", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiFloatRect",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_setRotation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisSprite", nativeType: "pointer", type: "tguiSprite *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSprite_getRotation",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
    ],
  },
  {
    name: "tguiSprite_isTransparentPixel",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisSprite",
        nativeType: "pointer",
        type: "const tguiSprite *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiText_getStaticExtraHorizontalPadding",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiText_getStaticExtraHorizontalOffset",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiText_getStaticExtraVerticalPadding",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiText_getStaticLineHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiText_getStaticLineWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "characterSize", nativeType: "u32", type: "unsigned int" },
      { name: "style", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiText_create",
    result: "pointer",
    returnType: "tguiText *",
    parameters: [],
  },
  {
    name: "tguiText_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "text", nativeType: "pointer", type: "tguiText *" }],
  },
  {
    name: "tguiText_findBestTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "height", nativeType: "f32", type: "float" },
      { name: "fit", nativeType: "i32", type: "int" },
    ],
  },
  {
    name: "tguiText_wordWrap",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "maxWidth", nativeType: "f32", type: "float" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "font", nativeType: "pointer", type: "const tguiFont *" },
      { name: "textSize", nativeType: "u32", type: "unsigned int" },
      { name: "bold", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiText_getSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setPosition",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiText_getPosition",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setString",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiText_getString",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setCharacterSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiText_getCharacterSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setColor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiText_getColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setOpacity",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiText_getOpacity",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setFont",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "pointer", type: "const tguiFont *" },
    ],
  },
  {
    name: "tguiText_getFont",
    result: "pointer",
    returnType: "const tguiFont *",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setStyle",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiText_getStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setOutlineColor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiText_getOutlineColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_setOutlineThickness",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisText", nativeType: "pointer", type: "tguiText *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiText_getOutlineThickness",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_findCharacterPos",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiText_getExtraHorizontalPadding",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_getExtraHorizontalOffset",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_getLineHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiText_getLineWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisText",
        nativeType: "pointer",
        type: "const tguiText *",
      },
    ],
  },
  {
    name: "tguiTexture_createNull",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [],
  },
  {
    name: "tguiTexture_createFromFile",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      { name: "filename", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
    ],
  },
  {
    name: "tguiTexture_createFromFileEx",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      { name: "filename", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      { name: "smoothing", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTexture_createFromMemory",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      { name: "data", nativeType: "buffer", type: "tguiUint8 *" },
      { name: "dataSize", nativeType: "usize", type: "size_t" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
    ],
  },
  {
    name: "tguiTexture_createFromMemoryEx",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      { name: "data", nativeType: "buffer", type: "tguiUint8 *" },
      { name: "dataSize", nativeType: "usize", type: "size_t" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      { name: "smoothing", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTexture_createFromPixelData",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      {
        name: "size",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
      { name: "pixels", nativeType: "buffer", type: "tguiUint8 *" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
    ],
  },
  {
    name: "tguiTexture_createFromPixelDataEx",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      {
        name: "size",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
      { name: "pixels", nativeType: "buffer", type: "tguiUint8 *" },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      { name: "smoothing", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTexture_createFromBase64",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      {
        name: "imageAsBase64",
        nativeType: "buffer",
        type: "const char *",
      },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
    ],
  },
  {
    name: "tguiTexture_createFromBase64Ex",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      {
        name: "imageAsBase64",
        nativeType: "buffer",
        type: "const char *",
      },
      {
        name: "partRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      {
        name: "middleRect",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
      { name: "smoothing", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTexture_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "texture", nativeType: "pointer", type: "tguiTexture *" },
    ],
  },
  {
    name: "tguiTexture_setColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "tguiTexture *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTexture_getColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_setMiddleRect",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "tguiTexture *",
      },
      {
        name: "value",
        nativeType: [
          { name: "left", type: "unsigned int", nativeType: "u16" },
          { name: "top", type: "unsigned int", nativeType: "u16" },
          { name: "width", type: "unsigned int", nativeType: "u16" },
          { name: "height", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiUIntRect",
      },
    ],
  },
  {
    name: "tguiTexture_getMiddleRect",
    result: [
      { name: "left", type: "unsigned int", nativeType: "u16" },
      { name: "top", type: "unsigned int", nativeType: "u16" },
      { name: "width", type: "unsigned int", nativeType: "u16" },
      { name: "height", type: "unsigned int", nativeType: "u16" },
    ],
    returnType: "tguiUIntRect",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_getId",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_getImageSize",
    result: [
      { name: "x", type: "unsigned int", nativeType: "u16" },
      { name: "y", type: "unsigned int", nativeType: "u16" },
    ],
    returnType: "tguiVector2u",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_getPartRect",
    result: [
      { name: "left", type: "unsigned int", nativeType: "u16" },
      { name: "top", type: "unsigned int", nativeType: "u16" },
      { name: "width", type: "unsigned int", nativeType: "u16" },
      { name: "height", type: "unsigned int", nativeType: "u16" },
    ],
    returnType: "tguiUIntRect",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_isSmooth",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTexture_isTransparentPixel",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisTexture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "unsigned int", nativeType: "u16" },
          { name: "y", type: "unsigned int", nativeType: "u16" },
        ],
        type: "tguiVector2u",
      },
    ],
  },
  {
    name: "tguiTexture_setDefaultSmooth",
    result: "void",
    returnType: "void",
    parameters: [{ name: "smooth", nativeType: "i16", type: "tguiBool" }],
  },
  {
    name: "tguiTexture_getDefaultSmooth",
    result: "i16",
    returnType: "tguiBool",
    parameters: [],
  },
  {
    name: "tguiTheme_create",
    result: "pointer",
    returnType: "tguiTheme *",
    parameters: [],
  },
  {
    name: "tguiTheme_copy",
    result: "pointer",
    returnType: "tguiTheme *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
    ],
  },
  {
    name: "tguiTheme_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "theme", nativeType: "pointer", type: "tguiTheme *" }],
  },
  {
    name: "tguiTheme_load",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "tguiTheme *" },
      { name: "filename", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiTheme_replace",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "tguiTheme *" },
      { name: "otherTheme", nativeType: "pointer", type: "tguiTheme *" },
    ],
  },
  {
    name: "tguiTheme_getRenderer",
    result: "pointer",
    returnType: "tguiRendererData *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "tguiTheme *" },
      { name: "id", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiTheme_setDefault",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "defaultTheme", nativeType: "pointer", type: "tguiTheme *" },
    ],
  },
  {
    name: "tguiTheme_getDefault",
    result: "pointer",
    returnType: "tguiTheme *",
    parameters: [],
  },
  {
    name: "tguiTheme_hasGlobalProperty",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyBool",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyFont",
    result: "pointer",
    returnType: "tguiFont *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyString",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyNumber",
    result: "f32",
    returnType: "float",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyOutline",
    result: "pointer",
    returnType: "tguiOutline *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyTexture",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getGlobalPropertyRendererData",
    result: "pointer",
    returnType: "tguiRendererData *",
    parameters: [
      { name: "theme", nativeType: "pointer", type: "const tguiTheme *" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_addRendererDefaultSubwidget",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "propertyWidgetType",
        nativeType: "buffer",
        type: "tguiUtf32",
      },
    ],
  },
  {
    name: "tguiTheme_getRendererDefaultSubwidget",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_addRendererInheritedGlobalProperty",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "globalProperty", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getRendererInheritedGlobalProperty",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_addRenderer",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisTheme", nativeType: "pointer", type: "tguiTheme *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiTheme_removeRenderer",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisTheme", nativeType: "pointer", type: "tguiTheme *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getPrimary",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisTheme",
        nativeType: "pointer",
        type: "const tguiTheme *",
      },
    ],
  },
  {
    name: "tguiTheme_addRendererInheritanceParent",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
      { name: "parentType", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTheme_getRendererInheritanceParent",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      { name: "widgetType", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTimer_scheduleCallback",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "callback",
        nativeType: "function",
        type: "void (*)(void)",
      },
      {
        name: "interval",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiTimer_create",
    result: "pointer",
    returnType: "tguiTimer *",
    parameters: [
      {
        name: "callback",
        nativeType: "function",
        type: "void (*)(tguiTimer *)",
      },
      {
        name: "interval",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
      { name: "enable", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTimer_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "timer", nativeType: "pointer", type: "tguiTimer *" }],
  },
  {
    name: "tguiTimer_setInterval",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "timer", nativeType: "pointer", type: "tguiTimer *" },
      {
        name: "interval",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiTimer_getInterval",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [
      { name: "timer", nativeType: "pointer", type: "const tguiTimer *" },
    ],
  },
  {
    name: "tguiTimer_setEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "timer", nativeType: "pointer", type: "tguiTimer *" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTimer_isEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "timer", nativeType: "pointer", type: "const tguiTimer *" },
    ],
  },
  {
    name: "tguiTimer_setCallback",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "timer", nativeType: "pointer", type: "tguiTimer *" },
      {
        name: "callback",
        nativeType: "function",
        type: "void (*)(tguiTimer *)",
      },
    ],
  },
  {
    name: "tguiTimer_restart",
    result: "void",
    returnType: "void",
    parameters: [{ name: "timer", nativeType: "pointer", type: "tguiTimer *" }],
  },
  {
    name: "tguiToolTip_setInitialDelay",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "delay",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiToolTip_getInitialDelay",
    result: [{ name: "nanoseconds", type: "long long", nativeType: "i64" }],
    returnType: "tguiDuration",
    parameters: [],
  },
  {
    name: "tguiToolTip_setDistanceToMouse",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "distance",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiToolTip_getDistanceToMouse",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [],
  },
  {
    name: "tguiToolTip_setShowOnDisabledWidget",
    result: "void",
    returnType: "void",
    parameters: [{ name: "show", nativeType: "i16", type: "tguiBool" }],
  },
  {
    name: "tguiToolTip_getShowOnDisabledWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [],
  },
  {
    name: "tguiWidget_copy",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "other", nativeType: "pointer", type: "const tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_setAutoLayout",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "layout", nativeType: "i16", type: "tguiAutoLayout" },
    ],
  },
  {
    name: "tguiWidget_getAutoLayout",
    result: "i16",
    returnType: "tguiAutoLayout",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_signalConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "function", nativeType: "function", type: "void (*)(void)" },
    ],
  },
  {
    name: "tguiWidget_signalConnectEx",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiWidget *, tguiUtf32)",
      },
    ],
  },
  {
    name: "tguiWidget_signalIntConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "function", nativeType: "function", type: "void (*)(int)" },
    ],
  },
  {
    name: "tguiWidget_signalUIntConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(unsigned int)",
      },
    ],
  },
  {
    name: "tguiWidget_signalBoolConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiBool)",
      },
    ],
  },
  {
    name: "tguiWidget_signalFloatConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(float)",
      },
    ],
  },
  {
    name: "tguiWidget_signalColorConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiColor)",
      },
    ],
  },
  {
    name: "tguiWidget_signalStringConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiUtf32)",
      },
    ],
  },
  {
    name: "tguiWidget_signalVector2fConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiVector2f)",
      },
    ],
  },
  {
    name: "tguiWidget_signalFloatRectConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiFloatRect)",
      },
    ],
  },
  {
    name: "tguiWidget_signalRangeConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(float, float)",
      },
    ],
  },
  {
    name: "tguiWidget_signalChildWindowConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiWidget *)",
      },
    ],
  },
  {
    name: "tguiWidget_signalItemConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "function", nativeType: "function", type: "void (*)(int)" },
    ],
  },
  {
    name: "tguiWidget_signalPanelListBoxItemConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "function", nativeType: "function", type: "void (*)(int)" },
    ],
  },
  {
    name: "tguiWidget_signalFileDialogPathsConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(size_t, const tguiUtf32 *)",
      },
    ],
  },
  {
    name: "tguiWidget_signalShowEffectConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiShowEffectType, tguiBool)",
      },
    ],
  },
  {
    name: "tguiWidget_signalAnimationTypeConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(tguiAnimationType)",
      },
    ],
  },
  {
    name: "tguiWidget_signalItemHierarchyConnect",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      {
        name: "function",
        nativeType: "function",
        type: "void (*)(size_t, const tguiUtf32 *)",
      },
    ],
  },
  {
    name: "tguiWidget_signalDisconnect",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "id", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiWidget_signalDisconnectAll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiWidget_setSignalEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isSignalEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "signalName", nativeType: "buffer", type: "const char *" },
    ],
  },
  {
    name: "tguiWidget_setRenderer",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "renderer",
        nativeType: "pointer",
        type: "tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiWidget_getRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_showWithEffect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "type", nativeType: "i16", type: "tguiShowEffectType" },
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiWidget_hideWithEffect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "type", nativeType: "i16", type: "tguiShowEffectType" },
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiWidget_moveWithAnimation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "position",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiWidget_resizeWithAnimation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiWidget_setToolTip",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "toolTip", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_getToolTip",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getParent",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_updateTime",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "duration",
        nativeType: [
          { name: "nanoseconds", type: "long long", nativeType: "i64" },
        ],
        type: "tguiDuration",
      },
    ],
  },
  {
    name: "tguiWidget_setPosition",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "position",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_setPositionFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout2d *",
      },
    ],
  },
  {
    name: "tguiWidget_getPosition",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getAbsolutePosition",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getAbsolutePositionWithOffset",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "offset",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_getWidgetOffset",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "width", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidget_setWidthFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiWidget_setHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "height", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidget_setHeightFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiWidget_setSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_setSizeFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout2d *",
      },
    ],
  },
  {
    name: "tguiWidget_getSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getFullSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setOrigin",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_getOrigin",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setScale",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "origin",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_setScaleWithOrigin",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "scale",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "origin",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_getScale",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getScaleOrigin",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setRotation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "angle", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidget_setRotationWithOrigin",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "angle", nativeType: "f32", type: "float" },
      {
        name: "origin",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiWidget_getRotation",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getRotationOrigin",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setVisible",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isVisible",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setFocused",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isFocused",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setFocusable",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isFocusable",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_getWidgetType",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_moveToFront",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_moveToBack",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_setUserData",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidget_getUserData",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_hasUserData",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_isAnimationPlaying",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setTextSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiWidget_getTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setWidgetName",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidget_getWidgetName",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setMouseCursor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiCursorType" },
    ],
  },
  {
    name: "tguiWidget_getMouseCursor",
    result: "i16",
    returnType: "tguiCursorType",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setNavigationUp",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_getNavigationUp",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setNavigationDown",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_getNavigationDown",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setNavigationLeft",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_getNavigationLeft",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setNavigationRight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_getNavigationRight",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_setIgnoreMouseEvents",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_getIgnoreMouseEvents",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_finishAllAnimations",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiWidget_setAutoLayoutUpdateEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidget_isMouseDown",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiWidget_isMouseOnWidget",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "pos",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "sfEvent_create",
    result: "pointer",
    returnType: "sfEvent *",
    parameters: [],
  },
  {
    name: "sfEvent_destroy",
    result: "void",
    returnType: "void",
    parameters: [{ name: "event", nativeType: "pointer", type: "sfEvent *" }],
  },
  {
    name: "renderWindow_create",
    result: "pointer",
    returnType: "sfRenderWindow *",
    parameters: [
      {
        name: "mode",
        nativeType: [
          { name: "width", type: "unsigned int", nativeType: "u32" },
          { name: "height", type: "unsigned int", nativeType: "u32" },
          {
            name: "bitsPerPixel",
            type: "unsigned int",
            nativeType: "u32",
          },
        ],
        type: "sfVideoMode",
      },
      { name: "title", nativeType: "buffer", type: "const char *" },
      { name: "style", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "renderWindow_isOpen",
    result: "i32",
    returnType: "sfBool",
    parameters: [
      { name: "window", nativeType: "pointer", type: "const sfWindow *" },
    ],
  },
  {
    name: "renderWindow_pollEvent",
    result: "i32",
    returnType: "sfBool",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
      { name: "event", nativeType: "pointer", type: "sfEvent *" },
    ],
  },
  {
    name: "renderWindow_close",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
    ],
  },
  {
    name: "renderWindow_clear",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
      {
        name: "color",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
        ],
        type: "sfColor",
      },
    ],
  },
  {
    name: "renderWindow_display",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
    ],
  },
  {
    name: "renderWindow_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "window", nativeType: "pointer", type: "sfRenderWindow *" },
    ],
  },
  {
    name: "tguiBitmapButton_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiBitmapButton_setImage",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiBitmapButton_getImage",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBitmapButton_setImageScaling",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBitmapButton_getImageScaling",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiBoxLayout_insert",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      {
        name: "widgetToAdd",
        nativeType: "pointer",
        type: "tguiWidget *",
      },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiBoxLayout_removeAtIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiBoxLayout_getAtIndex",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_add",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "ratio", nativeType: "f32", type: "float" },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_insert",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "ratio", nativeType: "f32", type: "float" },
      { name: "widgetName", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_addSpace",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "ratio", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_insertSpace",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "ratio", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_setRatio",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "ratio", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_setRatioAtIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "ratio", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_getRatio",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiBoxLayoutRatios_getRatioAtIndex",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiButton_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiButtonBase_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiButtonBase_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiButtonBase_setIgnoreKeyEvents",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiButtonBase_getIgnoreKeyEvents",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiButtonBase_setTextPositionAbs",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "position",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "origin",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiButtonBase_setTextPositionRel",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "position",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
      {
        name: "origin",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiChatBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiChatBox_addLine",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiChatBox_addLineWithColor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "color",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChatBox_addLineWithColorAndStyle",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "color",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
      { name: "style", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiChatBox_getLine",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "lineIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiChatBox_getLineColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "lineIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiChatBox_getLineTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "lineIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiChatBox_removeLine",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "lineIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiChatBox_removeAllLines",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiChatBox_getLineAmount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChatBox_setLineLimit",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiChatBox_getLineLimit",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChatBox_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChatBox_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChatBox_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiChatBox_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChatBox_setLinesStartFromTop",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChatBox_getLinesStartFromTop",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChatBox_setNewLinesBelowOthers",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChatBox_getNewLinesBelowOthers",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiCheckBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiChildWindow_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiChildWindow_setClientSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "size",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiChildWindow_setClientSizeFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout2d *",
      },
    ],
  },
  {
    name: "tguiChildWindow_getClientSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setMaximumSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiChildWindow_getMaximumSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setMinimumSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiChildWindow_getMinimumSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setTitle",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiChildWindow_getTitle",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setTitleTextSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiChildWindow_getTitleTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setTitleAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiChildWindow_getTitleAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setTitleButtons",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiChildWindow_getTitleButtons",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setCloseBehavior",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiChildWindowCloseBehavior",
      },
    ],
  },
  {
    name: "tguiChildWindow_getCloseBehavior",
    result: "i16",
    returnType: "tguiChildWindowCloseBehavior",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setResizable",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChildWindow_isResizable",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setKeepInParent",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChildWindow_getKeepInParent",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiChildWindow_setPositionLocked",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChildWindow_isPositionLocked",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiClickableWidget_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiColorPicker_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiColorPicker_setColor",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiColorPicker_getColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiComboBox_setItemsToDisplay",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_getItemsToDisplay",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_addItem",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_addMultipleItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "items", nativeType: "pointer", type: "const tguiUtf32 *" },
      { name: "itemsLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_getItemById",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_getItemByIndex",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_getIndexById",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_getIdByIndex",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_getItems",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiComboBox_getItemIds",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiComboBox_setSelectedItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_setSelectedItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_setSelectedItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_deselectItem",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiComboBox_removeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_removeItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_removeItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_removeAllItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiComboBox_getSelectedItem",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_getSelectedItemId",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_getSelectedItemIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_changeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "originalValue", nativeType: "buffer", type: "tguiUtf32" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_changeItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_changeItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_getItemCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_setItemData",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "data", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_getItemData",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_setMaximumItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiComboBox_getMaximumItems",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_setDefaultText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_getDefaultText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_setExpandDirection",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiComboBoxExpandDirection",
      },
    ],
  },
  {
    name: "tguiComboBox_getExpandDirection",
    result: "i16",
    returnType: "tguiComboBoxExpandDirection",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_setChangeItemOnScroll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiComboBox_getChangeItemOnScroll",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiComboBox_contains",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiComboBox_containsId",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiEditBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiEditBox_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiEditBox_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setDefaultText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiEditBox_getDefaultText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setPasswordCharacter",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "tguiChar32" },
    ],
  },
  {
    name: "tguiEditBox_getPasswordCharacter",
    result: "u32",
    returnType: "tguiChar32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setMaximumCharacters",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiEditBox_getMaximumCharacters",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiEditBox_getAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setTextWidthLimited",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiEditBox_isTextWidthLimited",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setReadOnly",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiEditBox_isReadOnly",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setCaretPosition",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiEditBox_getCaretPosition",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setSuffix",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiEditBox_getSuffix",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_setInputValidator",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "regex", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiEditBox_getInputValidator",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBox_selectText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "start", nativeType: "usize", type: "size_t" },
      { name: "length", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiEditBox_getSelectedText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiEditBoxSlider_getEditBoxRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_getEditBoxSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_getSliderRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_getSliderSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setValue",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiEditBoxSlider_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiEditBoxSlider_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiEditBoxSlider_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setStep",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiEditBoxSlider_getStep",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setDecimalPlaces",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiEditBoxSlider_getDecimalPlaces",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_setTextAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiEditBoxSlider_getTextAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiFileDialog_setFilename",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getFilename",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_getFileTypeFiltersIndex",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setConfirmButtonText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getConfirmButtonText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setCancelButtonText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getCancelButtonText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setCreateFolderButtonText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getCreateFolderButtonText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setFilenameLabelText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getFilenameLabelText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setAllowCreateFolder",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFileDialog_getAllowCreateFolder",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setFileMustExist",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFileDialog_getFileMustExist",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setSelectingDirectory",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFileDialog_getSelectingDirectory",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_setMultiSelect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFileDialog_getMultiSelect",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialogFilter_create",
    result: "pointer",
    returnType: "tguiFileDialogFilter *",
    parameters: [{ name: "name", nativeType: "buffer", type: "tguiUtf32" }],
  },
  {
    name: "tguiFileDialogFilter_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "filter",
        nativeType: "pointer",
        type: "tguiFileDialogFilter *",
      },
    ],
  },
  {
    name: "tguiFileDialogFilter_addExpression",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "filter",
        nativeType: "pointer",
        type: "tguiFileDialogFilter *",
      },
      { name: "expression", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialogFilter_getExpressions",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "filter",
        nativeType: "pointer",
        type: "const tguiFileDialogFilter *",
      },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiFileDialog_setPath",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "path", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiFileDialog_getPath",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_getSelectedPaths",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiFileDialog_setFileTypeFilters",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "filters",
        nativeType: "pointer",
        type: "const tguiFileDialogFilter *",
      },
      { name: "filterCount", nativeType: "usize", type: "size_t" },
      { name: "defaultFilterIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiFileDialog_getFileTypeFilters",
    result: "pointer",
    returnType: "tguiFileDialogFilter **",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiFileDialog_setListViewColumnCaptions",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "nameColumnText", nativeType: "buffer", type: "tguiUtf32" },
      { name: "sizeColumnText", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "modifiedColumnText",
        nativeType: "buffer",
        type: "tguiUtf32",
      },
    ],
  },
  {
    name: "tguiFileDialog_getListViewColumnCaptionsName",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_getListViewColumnCaptionsSize",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiFileDialog_getListViewColumnCaptionsModified",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiGrid_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiGrid_setAutoSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiGrid_getAutoSize",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiGrid_addWidget",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
      { name: "alignment", nativeType: "i16", type: "tguiGridAlignment" },
      {
        name: "padding",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiGrid_setWidgetCell",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
      { name: "alignment", nativeType: "i16", type: "tguiGridAlignment" },
      {
        name: "padding",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiGrid_getWidget",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiGrid_setWidgetAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "alignment", nativeType: "i16", type: "tguiGridAlignment" },
    ],
  },
  {
    name: "tguiGrid_setWidgetAlignmentByCell",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
      { name: "alignment", nativeType: "i16", type: "tguiGridAlignment" },
    ],
  },
  {
    name: "tguiGrid_getWidgetAlignment",
    result: "i16",
    returnType: "tguiGridAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGrid_getWidgetAlignmentByCell",
    result: "i16",
    returnType: "tguiGridAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiGrid_setWidgetPadding",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "padding",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiGrid_setWidgetPaddingByCell",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
      {
        name: "padding",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiGrid_getWidgetPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiGrid_getWidgetPaddingByCell",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "row", nativeType: "usize", type: "size_t" },
      { name: "col", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiGridWidgetLocation_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "locationList",
        nativeType: "pointer",
        type: "tguiGridWidgetLocation *",
      },
      { name: "count", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiGrid_getWidgetLocations",
    result: "pointer",
    returnType: "tguiGridWidgetLocation *",
    parameters: [
      { name: "grid", nativeType: "pointer", type: "const tguiWidget *" },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiGroup_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiHorizontalLayout_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiHorizontalWrap_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiKnob_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiKnob_setStartRotation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnob_getStartRotation",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiKnob_setEndRotation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnob_getEndRotation",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiKnob_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnob_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiKnob_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnob_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiKnob_setValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnob_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiKnob_setClockwiseTurning",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiKnob_getClockwiseTurning",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiLabel_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiLabel_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiLabel_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiLabel_setHorizontalAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiLabel_getHorizontalAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiLabel_setVerticalAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiVerticalAlignment" },
    ],
  },
  {
    name: "tguiLabel_getVerticalAlignment",
    result: "i16",
    returnType: "tguiVerticalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiLabel_setAutoSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiLabel_getAutoSize",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiLabel_setMaximumTextWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiLabel_getMaximumTextWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiListBox_addItem",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_addMultipleItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "items", nativeType: "pointer", type: "const tguiUtf32 *" },
      { name: "itemsLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_getItemById",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_getItemByIndex",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_getIndexById",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_getIdByIndex",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_setSelectedItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_setSelectedItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_setSelectedItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_deselectItem",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiListBox_removeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_removeItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_removeItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_removeAllItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiListBox_getSelectedItem",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_getSelectedItemId",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_getSelectedItemIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_getHoveredItemIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_changeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "originalValue", nativeType: "buffer", type: "tguiUtf32" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_changeItemById",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_changeItemByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "newValue", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_getItemCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_getItems",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiListBox_getItemIds",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiListBox_setItemData",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "data", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_getItemData",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_setItemHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListBox_getItemHeight",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_setMaximumItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListBox_getMaximumItems",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_setAutoScroll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListBox_getAutoScroll",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_setTextAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiListBox_getTextAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListBox_contains",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "item", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListBox_containsId",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "id", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiListView_addColumn",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "width", nativeType: "f32", type: "float" },
      {
        name: "columnAlignment",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiListView_setColumnText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_getColumnText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setColumnWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "width", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiListView_getColumnWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_getColumnDesignWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setColumnAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      {
        name: "columnAlignment",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiListView_getColumnAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setColumnAutoResize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "autoResize", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getColumnAutoResize",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setColumnExpanded",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "expand", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getColumnExpanded",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_removeAllColumns",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiListView_getColumnCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setHeaderVisible",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getHeaderVisible",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setHeaderHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiListView_getHeaderHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_getCurrentHeaderHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_addItem",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_addItemRow",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "item", nativeType: "pointer", type: "const tguiUtf32 *" },
      { name: "itemLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_insertItem",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_insertItemRow",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "item", nativeType: "pointer", type: "const tguiUtf32 *" },
      { name: "itemLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_changeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "item", nativeType: "pointer", type: "const tguiUtf32 *" },
      { name: "itemLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_changeSubItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "column", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_removeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_removeAllItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiListView_setSelectedItem",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setSelectedItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "indices", nativeType: "pointer", type: "const size_t *" },
      { name: "indicesLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_getSelectedItemIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_getHoveredItemIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_getSelectedItemIndices",
    result: "pointer",
    returnType: "const size_t *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiListView_deselectItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiListView_setMultiSelect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getMultiSelect",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setItemData",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "data", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiListView_getItemData",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_setItemIcon",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      {
        name: "texture",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiListView_getItemCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_getItem",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_getItemCell",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "rowIndex", nativeType: "usize", type: "size_t" },
      { name: "columnIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiListView_getItemRow",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiListView_getItems",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiListView_setItemHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListView_getItemHeight",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setHeaderTextSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListView_getHeaderTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setSeparatorWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListView_getSeparatorWidth",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setHeaderSeparatorHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListView_getHeaderSeparatorHeight",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setGridLinesWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiListView_getGridLinesWidth",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setAutoScroll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getAutoScroll",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setShowVerticalGridLines",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getShowVerticalGridLines",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setShowHorizontalGridLines",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getShowHorizontalGridLines",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setFixedIconSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiListView_getFixedIconSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_setResizableColumns",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiListView_getResizableColumns",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiListView_sort",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      {
        name: "function",
        nativeType: "function",
        type: "tguiBool (*)(tguiUtf32, tguiUtf32)",
      },
    ],
  },
  {
    name: "tguiMenuBar_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiMenuBar_addMenu",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_addMenuItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "menu", nativeType: "buffer", type: "tguiUtf32" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_addMenuItemToLastMenu",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_addMenuItemHierarchy",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "createParents", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiMenuBar_changeMenuItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_removeMenu",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "menu", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_removeMenuItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "menu", nativeType: "buffer", type: "tguiUtf32" },
      { name: "menuItem", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_removeMenuItemHierarchy",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      {
        name: "removeParentsWhenEmpty",
        nativeType: "i16",
        type: "tguiBool",
      },
    ],
  },
  {
    name: "tguiMenuBar_removeAllMenus",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiMenuBar_setMenuEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiMenuBar_getMenuEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_setMenuItemEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "menu", nativeType: "buffer", type: "tguiUtf32" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiMenuBar_getMenuItemEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "menu", nativeType: "buffer", type: "tguiUtf32" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMenuBar_setMenuItemEnabledHierarchy",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "enabled", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiMenuBar_getMenuItemEnabledHierarchy",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiMenuBar_closeMenu",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiMenuBar_setMinimumSubMenuWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiMenuBar_getMinimumSubMenuWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiMenuBar_setInvertedMenuDirection",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiMenuBar_getInvertedMenuDirection",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiMenuBarMenuList_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "menuList",
        nativeType: "pointer",
        type: "tguiMenuBarMenuList *",
      },
    ],
  },
  {
    name: "tguiMenuBar_getMenus",
    result: "pointer",
    returnType: "tguiMenuBarMenuList *",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiMessageBox_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiMessageBox_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMessageBox_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiMessageBox_addButton",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiMessageBox_changeButtons",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "buttonCaptions",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      {
        name: "buttonCaptionsLength",
        nativeType: "usize",
        type: "size_t",
      },
    ],
  },
  {
    name: "tguiMessageBox_getButtons",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiMessageBox_setLabelAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiMessageBox_getLabelAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiMessageBox_setButtonAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiHorizontalAlignment",
      },
    ],
  },
  {
    name: "tguiMessageBox_getButtonAlignment",
    result: "i16",
    returnType: "tguiHorizontalAlignment",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiPanel_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiPanel_setEventBubbling",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "useEventBubbling", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiPanel_getEventBubbling",
    result: "i16",
    returnType: "tguiBool",
    parameters: [],
  },
  {
    name: "tguiPicture_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiProgressBar_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiProgressBar_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiProgressBar_getMinimum",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiProgressBar_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiProgressBar_getMaximum",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiProgressBar_setValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiProgressBar_getValue",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiProgressBar_incrementValue",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiProgressBar_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiProgressBar_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiProgressBar_setFillDirection",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiProgressBarFillDirection",
      },
    ],
  },
  {
    name: "tguiProgressBar_getFillDirection",
    result: "i16",
    returnType: "tguiProgressBarFillDirection",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRadioButton_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiRadioButton_setChecked",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiRadioButton_isChecked",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRadioButton_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiRadioButton_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRadioButton_setTextClickable",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiRadioButton_isTextClickable",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRadioButtonGroup_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiRadioButtonGroup_uncheckRadioButtons",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "getCheckedRadioButton",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiRangeSlider_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiRangeSlider_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRangeSlider_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRangeSlider_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRangeSlider_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRangeSlider_setSelectionStart",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRangeSlider_getSelectionStart",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRangeSlider_setSelectionEnd",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRangeSlider_getSelectionEnd",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiRangeSlider_setStep",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRangeSlider_getStep",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollablePanel_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiScrollablePanel_setContentSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: [
          { name: "x", type: "float", nativeType: "f32" },
          { name: "y", type: "float", nativeType: "f32" },
        ],
        type: "tguiVector2f",
      },
    ],
  },
  {
    name: "tguiScrollablePanel_getContentSize",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollablePanel_getContentOffset",
    result: [
      { name: "x", type: "float", nativeType: "f32" },
      { name: "y", type: "float", nativeType: "f32" },
    ],
    returnType: "tguiVector2f",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiScrollbar_setViewportSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiScrollbar_getViewportSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiScrollbar_getMaximum",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_setValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiScrollbar_getValue",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_setScrollAmount",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiScrollbar_getScrollAmount",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_setPolicy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiScrollbarPolicy" },
    ],
  },
  {
    name: "tguiScrollbar_getPolicy",
    result: "i16",
    returnType: "tguiScrollbarPolicy",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_setOrientation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiOrientation" },
    ],
  },
  {
    name: "tguiScrollbar_getOrientation",
    result: "i16",
    returnType: "tguiOrientation",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_isShown",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_getMaxValue",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiScrollbar_getDefaultWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiSlider_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSlider_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSlider_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSlider_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setStep",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSlider_getStep",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setOrientation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiOrientation" },
    ],
  },
  {
    name: "tguiSlider_getOrientation",
    result: "i16",
    returnType: "tguiOrientation",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setInvertedDirection",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiSlider_getInvertedDirection",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSlider_setChangeValueOnScroll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiSlider_getChangeValueOnScroll",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinButton_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiSpinButton_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinButton_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinButton_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinButton_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinButton_setValue",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinButton_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinButton_setStep",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinButton_getStep",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinButton_setOrientation",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiOrientation" },
    ],
  },
  {
    name: "tguiSpinButton_getOrientation",
    result: "i16",
    returnType: "tguiOrientation",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiSpinControl_getSpinButtonRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_getSpinButtonSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_getSpinTextRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_getSpinTextSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setValue",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinControl_getValue",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setMinimum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinControl_getMinimum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setMaximum",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinControl_getMaximum",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setStep",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinControl_getStep",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setDecimalPlaces",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiSpinControl_getDecimalPlaces",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiSpinControl_setSpinButtonWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinControl_getSpinButtonWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiTabs_setAutoSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabs_getAutoSize",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_add",
    result: "usize",
    returnType: "size_t",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "select", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabs_insert",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
      { name: "select", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabs_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabs_changeText",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTabs_deselect",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTabs_removeAll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTabs_getSelected",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_getSelectedIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_getHoveredIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_getTabsCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_setTabVisible",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "visible", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabs_getTabVisible",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabs_setTabEnabled",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "visible", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabs_getTabEnabled",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabs_setMaximumTabWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTabs_getMaximumTabWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_setMinimumTabWidth",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTabs_getMinimumTabWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabs_selectByText",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTabs_selectByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabs_removeByText",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTabs_removeByIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabContainer_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiTabContainer_getTabsRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_getTabsSharedRenderer",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_select",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabContainer_getPanelCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_getSelectedIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_getTabText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabContainer_changeTabText",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTabContainer_setTabFixedSize",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTabContainer_getTabFixedSize",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_setTabAlignment",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "value",
        nativeType: "i16",
        type: "tguiTabContainerTabAlign",
      },
    ],
  },
  {
    name: "tguiTabContainer_getTabAlignment",
    result: "i16",
    returnType: "tguiTabContainerTabAlign",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_setTabsHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "height", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTabContainer_setTabsHeightFromLayout",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "layout",
        nativeType: "pointer",
        type: "const tguiLayout *",
      },
    ],
  },
  {
    name: "tguiTabContainer_removeTabWithName",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTabContainer_removeTabWithIndex",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTabContainer_addTab",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "name", nativeType: "buffer", type: "tguiUtf32" },
      { name: "select", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabContainer_insertTab",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      { name: "widget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "index", nativeType: "usize", type: "size_t" },
      { name: "name", nativeType: "buffer", type: "tguiUtf32" },
      { name: "select", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTabContainer_getIndex",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "panel", nativeType: "pointer", type: "const tguiWidget *" },
    ],
  },
  {
    name: "tguiTabContainer_getSelected",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTabContainer_getPanel",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "index", nativeType: "i32", type: "int" },
    ],
  },
  {
    name: "tguiTabContainer_getTabs",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiTextArea_setText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTextArea_getText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_addText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "text", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTextArea_setDefaultText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTextArea_getDefaultText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_setSelectedText",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "selectionStartIndex",
        nativeType: "usize",
        type: "size_t",
      },
      { name: "selectionEndIndex", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTextArea_getSelectedText",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_getSelectionStart",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_getSelectionEnd",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_setMaximumCharacters",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTextArea_getMaximumCharacters",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_setTabString",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTextArea_getTabString",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_setCaretPosition",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTextArea_getCaretPosition",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_getCaretLine",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_getCaretColumn",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_setReadOnly",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTextArea_isReadOnly",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTextArea_enableMonospacedFontOptimization",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "enable", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTextArea_getLinesCount",
    result: "usize",
    returnType: "size_t",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiToggleButton_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiToggleButton_setDown",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiToggleButton_isDown",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTreeView_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiTreeView_setItemHeight",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiTreeView_getItemHeight",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
    ],
  },
  {
    name: "tguiTreeView_addItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "createParents", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiTreeView_changeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "leafText", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiTreeView_expand",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTreeView_collapse",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTreeView_expandAll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTreeView_collapseAll",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTreeView_deselectItem",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTreeView_removeAllItems",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
    ],
  },
  {
    name: "tguiTreeView_getSelectedItem",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiTreeView_getHoveredItem",
    result: "pointer",
    returnType: "const tguiUtf32 *",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "returnCount", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiTreeView_setItemIndexInParent",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      { name: "index", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTreeView_getItemIndexInParent",
    result: "i32",
    returnType: "int",
    parameters: [
      {
        name: "thisWidget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTreeView_selectItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
    ],
  },
  {
    name: "tguiTreeView_removeItem",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      { name: "thisWidget", nativeType: "pointer", type: "tguiWidget *" },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "usize", type: "size_t" },
      {
        name: "removeParentsWhenEmpty",
        nativeType: "i16",
        type: "tguiBool",
      },
    ],
  },
  {
    name: "tguiTreeViewConstNode_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "node",
        nativeType: "pointer",
        type: "tguiTreeViewConstNode *",
      },
    ],
  },
  {
    name: "tguiTreeView_getNode",
    result: "pointer",
    returnType: "const tguiTreeViewConstNode *",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      {
        name: "hierarchy",
        nativeType: "pointer",
        type: "const tguiUtf32 *",
      },
      { name: "hierarchyLength", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiTreeView_getNodes",
    result: "pointer",
    returnType: "tguiTreeViewConstNode **",
    parameters: [
      {
        name: "widget",
        nativeType: "pointer",
        type: "const tguiWidget *",
      },
      { name: "count", nativeType: "pointer", type: "size_t *" },
    ],
  },
  {
    name: "tguiVerticalLayout_create",
    result: "pointer",
    returnType: "tguiWidget *",
    parameters: [],
  },
  {
    name: "tguiBoxLayoutRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiBoxLayoutRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiBoxLayoutRenderer_setSpaceBetweenWidgets",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiBoxLayoutRenderer_getSpaceBetweenWidgets",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiButtonRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorDown",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorDownHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorDownFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorDownFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextColorDownDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextColorDownDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorDown",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorDownHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorDownFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorDownFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBackgroundColorDownDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBackgroundColorDownDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorDown",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorDownHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorDownFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorDownFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setBorderColorDownDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getBorderColorDownDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTexture",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTexture",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureFocused",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureDown",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureDownHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureDownFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureDownFocused",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextureDownDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextureDownDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleHover",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleFocused",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleDisabled",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleDown",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleDownHover",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleDownFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleDownFocused",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextStyleDownDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextStyleDownDisabled",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextOutlineColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextOutlineColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setTextOutlineThickness",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiButtonRenderer_getTextOutlineThickness",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiButtonRenderer_setRoundedBorderRadius",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiButtonRenderer_getRoundedBorderRadius",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiChatBoxRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChatBoxRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChatBoxRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiChildWindowRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setTitleBarColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getTitleBarColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setTitleColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getTitleColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setBorderColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getBorderColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setBorderBelowTitleBar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getBorderBelowTitleBar",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setTitleBarHeight",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getTitleBarHeight",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setDistanceToSide",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getDistanceToSide",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setPaddingBetweenButtons",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getPaddingBetweenButtons",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setMinimumResizableBorderWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getMinimumResizableBorderWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setShowTextOnTitleButtons",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getShowTextOnTitleButtons",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setTextureTitleBar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getTextureTitleBar",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setCloseButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getCloseButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setMaximizeButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getMaximizeButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_setMinimizeButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiChildWindowRenderer_getMinimizeButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiColorPickerRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_setButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_getButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_setLabel",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_getLabel",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_setSlider",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiColorPickerRenderer_getSlider",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiComboBoxRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setDefaultTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getDefaultTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setArrowColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getArrowColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextureBackgroundDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextureBackgroundDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextureArrow",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextureArrow",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextureArrowHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextureArrowHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextureArrowDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextureArrowDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setDefaultTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getDefaultTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_setListBox",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiComboBoxRenderer_getListBox",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiEditBoxRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setCaretWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getCaretWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setDefaultTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getDefaultTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setSelectedTextBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getSelectedTextBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBackgroundColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBackgroundColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setCaretColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getCaretColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setCaretColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getCaretColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBorderColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBorderColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setBorderColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getBorderColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTexture",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTexture",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextureHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextureHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextureFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextureFocused",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextureDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextureDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiEditBoxRenderer_setDefaultTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiEditBoxRenderer_getDefaultTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiFileDialogRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setListView",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getListView",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setEditBox",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getEditBox",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setFilenameLabel",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getFilenameLabel",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setFileTypeComboBox",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getFileTypeComboBox",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setBackButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getBackButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setForwardButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getForwardButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setUpButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getUpButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiGroupRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiGroupRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiGroupRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiGroupRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiKnobRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setThumbColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getThumbColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setTextureForeground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_getTextureForeground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiKnobRenderer_setImageRotation",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiKnobRenderer_getImageRotation",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiLabelRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setTextOutlineColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getTextOutlineColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setTextOutlineThickness",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiLabelRenderer_getTextOutlineThickness",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiLabelRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiLabelRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiLabelRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiListBoxRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setSelectedBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getSelectedBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setSelectedBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getSelectedBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setSelectedTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getSelectedTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiListBoxRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setSelectedTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiListBoxRenderer_getSelectedTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListBoxRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiListBoxRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiListViewRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setSelectedBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getSelectedBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setSelectedBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getSelectedBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setSelectedTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getSelectedTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setHeaderBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getHeaderBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setHeaderTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getHeaderTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setSeparatorColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getSeparatorColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setGridLinesColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getGridLinesColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setTextureHeaderBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getTextureHeaderBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiListViewRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiListViewRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiMenuBarRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSelectedBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSelectedBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSeparatorColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSeparatorColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setTextureItemBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getTextureItemBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setTextureSelectedItemBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getTextureSelectedItemBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setDistanceToSide",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getDistanceToSide",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSeparatorThickness",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSeparatorThickness",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSeparatorVerticalPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSeparatorVerticalPadding",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMenuBarRenderer_setSeparatorSidePadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiMenuBarRenderer_getSeparatorSidePadding",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMessageBoxRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiMessageBoxRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMessageBoxRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiMessageBoxRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiMessageBoxRenderer_setButton",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiMessageBoxRenderer_getButton",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiPanelRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPanelRenderer_setRoundedBorderRadius",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiPanelRenderer_getRoundedBorderRadius",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPictureRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiPictureRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiPictureRenderer_setTexture",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiPictureRenderer_getTexture",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiProgressBarRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextColorFilled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextColorFilled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setFillColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getFillColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextureFill",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextureFill",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextOutlineColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextOutlineColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiProgressBarRenderer_setTextOutlineThickness",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiProgressBarRenderer_getTextOutlineThickness",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiRadioButtonRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextDistanceRatio",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextDistanceRatio",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColorChecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColorChecked",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColorCheckedHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColorCheckedHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextColorCheckedDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextColorCheckedDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColorChecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColorChecked",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColorCheckedHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColorCheckedHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorChecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorChecked",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorCheckedHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorCheckedHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorCheckedFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorCheckedFocused",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setBorderColorCheckedDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getBorderColorCheckedDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setCheckColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getCheckColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setCheckColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getCheckColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setCheckColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getCheckColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureUnchecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureUnchecked",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureChecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureChecked",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureUncheckedHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureUncheckedHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureCheckedHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureCheckedHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureUncheckedFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureUncheckedFocused",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureCheckedFocused",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureCheckedFocused",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureUncheckedDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureUncheckedDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextureCheckedDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextureCheckedDisabled",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_setTextStyleChecked",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiRadioButtonRenderer_getTextStyleChecked",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiRangeSliderRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_setSelectedTrackColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_getSelectedTrackColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_setSelectedTrackColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_getSelectedTrackColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_setTextureSelectedTrack",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_getTextureSelectedTrack",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_setTextureSelectedTrackHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiRangeSliderRenderer_getTextureSelectedTrackHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollablePanelRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiScrollablePanelRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollablePanelRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiScrollablePanelRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollablePanelRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiScrollablePanelRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiScrollbarRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTrackColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTrackColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTrackColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTrackColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setThumbColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getThumbColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setThumbColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getThumbColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setArrowBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getArrowBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setArrowBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getArrowBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setArrowColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getArrowColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setArrowColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getArrowColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureTrack",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureTrack",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureTrackHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureTrackHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureThumb",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureThumb",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureThumbHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureThumbHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureArrowUp",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureArrowUp",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureArrowUpHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureArrowUpHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureArrowDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureArrowDown",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_setTextureArrowDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiScrollbarRenderer_getTextureArrowDownHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiSliderRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTrackColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTrackColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTrackColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTrackColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setThumbColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getThumbColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setThumbColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getThumbColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTextureTrack",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTextureTrack",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTextureTrackHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTextureTrackHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTextureThumb",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTextureThumb",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setTextureThumbHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_getTextureThumbHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSliderRenderer_setThumbWithinTrack",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiSliderRenderer_getThumbWithinTrack",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiSpinButtonRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setBorderBetweenArrows",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getBorderBetweenArrows",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setArrowColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getArrowColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setArrowColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getArrowColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setTextureArrowUp",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getTextureArrowUp",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setTextureArrowUpHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getTextureArrowUpHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setTextureArrowDown",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getTextureArrowDown",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_setTextureArrowDownHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiSpinButtonRenderer_getTextureArrowDownHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiTabsRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBackgroundColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBackgroundColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextColorDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextColorDisabled",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setSelectedBorderColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getSelectedBorderColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextureTab",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextureTab",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextureTabHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextureTabHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextureSelectedTab",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextureSelectedTab",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextureSelectedTabHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextureSelectedTabHover",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setTextureDisabledTab",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_getTextureDisabledTab",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTabsRenderer_setDistanceToSide",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTabsRenderer_getDistanceToSide",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiTextAreaRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setDefaultTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getDefaultTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setSelectedTextBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getSelectedTextBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setCaretColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getCaretColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setCaretWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getCaretWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTextAreaRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTextAreaRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiTreeViewRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setBorders",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getBorders",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setPadding",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getPadding",
    result: "pointer",
    returnType: "const tguiOutline *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setSelectedBackgroundColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getSelectedBackgroundColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setSelectedBackgroundColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getSelectedBackgroundColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setSelectedTextColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getSelectedTextColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setSelectedTextColorHover",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getSelectedTextColorHover",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setBorderColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getBorderColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextureBackground",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextureBackground",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextureBranchExpanded",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextureBranchExpanded",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextureBranchCollapsed",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextureBranchCollapsed",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setTextureLeaf",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getTextureLeaf",
    result: "pointer",
    returnType: "const tguiTexture *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setScrollbar",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getScrollbar",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiTreeViewRenderer_setScrollbarWidth",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiTreeViewRenderer_getScrollbarWidth",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_create",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [],
  },
  {
    name: "tguiWidgetRenderer_copy",
    result: "pointer",
    returnType: "tguiRenderer *",
    parameters: [
      {
        name: "other",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setOpacity",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getOpacity",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setOpacityDisabled",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getOpacityDisabled",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setFont",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "pointer", type: "const tguiFont *" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getFont",
    result: "pointer",
    returnType: "const tguiFont *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setTextSize",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "u32", type: "unsigned int" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getTextSize",
    result: "u32",
    returnType: "unsigned int",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setTransparentTexture",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getTransparentTexture",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setData",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_getData",
    result: "pointer",
    returnType: "const tguiRendererData *",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyBool",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "value", nativeType: "i16", type: "tguiBool" },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyFont",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "value", nativeType: "pointer", type: "const tguiFont *" },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyColor",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "value",
        nativeType: [
          { name: "r", type: "unsigned char", nativeType: "u8" },
          { name: "g", type: "unsigned char", nativeType: "u8" },
          { name: "b", type: "unsigned char", nativeType: "u8" },
          { name: "a", type: "unsigned char", nativeType: "u8" },
          { name: "isSet", type: "int", nativeType: "i16" },
        ],
        type: "tguiColor",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyString",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "value", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyNumber",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "value", nativeType: "f32", type: "float" },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyOutline",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiOutline *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyTexture",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiTexture *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyTextStyle",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      { name: "value", nativeType: "u32", type: "tguiUint32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_setPropertyRendererData",
    result: "void",
    returnType: "void",
    parameters: [
      {
        name: "thisRenderer",
        nativeType: "pointer",
        type: "tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
      {
        name: "value",
        nativeType: "pointer",
        type: "const tguiRendererData *",
      },
    ],
  },
  {
    name: "tguiWidgetRenderer_hasProperty",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyBool",
    result: "i16",
    returnType: "tguiBool",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyFont",
    result: "pointer",
    returnType: "tguiFont *",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyColor",
    result: [
      { name: "r", type: "unsigned char", nativeType: "u8" },
      { name: "g", type: "unsigned char", nativeType: "u8" },
      { name: "b", type: "unsigned char", nativeType: "u8" },
      { name: "a", type: "unsigned char", nativeType: "u8" },
      { name: "isSet", type: "int", nativeType: "i16" },
    ],
    returnType: "tguiColor",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyString",
    result: "buffer",
    returnType: "tguiUtf32",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyNumber",
    result: "f32",
    returnType: "float",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyOutline",
    result: "pointer",
    returnType: "tguiOutline *",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyTexture",
    result: "pointer",
    returnType: "tguiTexture *",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyTextStyle",
    result: "u32",
    returnType: "tguiUint32",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_getPropertyRendererData",
    result: "pointer",
    returnType: "tguiRendererData *",
    parameters: [
      {
        name: "renderer",
        nativeType: "pointer",
        type: "const tguiRenderer *",
      },
      { name: "property", nativeType: "buffer", type: "tguiUtf32" },
    ],
  },
  {
    name: "tguiWidgetRenderer_destroy",
    result: "void",
    returnType: "void",
    parameters: [
      { name: "renderer", nativeType: "pointer", type: "tguiRenderer *" },
    ],
  },
];
