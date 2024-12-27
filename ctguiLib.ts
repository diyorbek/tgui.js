export const TGUI_LIB = Deno.dlopen("build/libTGUIJS.dylib", {
  "tguiColor_createNull": {
    "parameters": [],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiColor_fromRGB": {
    "parameters": [
      "u8",
      "u8",
      "u8",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiColor_fromRGBA": {
    "parameters": [
      "u8",
      "u8",
      "u8",
      "u8",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiColor_fromString": {
    "parameters": [
      "buffer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiDuration_fromSeconds": {
    "parameters": [
      "f32",
    ],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiDuration_fromMilliseconds": {
    "parameters": [
      "i32",
    ],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiDuration_fromMicroseconds": {
    "parameters": [
      "i64",
    ],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiDuration_fromNanoseconds": {
    "parameters": [
      "i64",
    ],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiDuration_asSeconds": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "f32",
  },
  "tguiDuration_asMilliseconds": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "i32",
  },
  "tguiDuration_asMicroseconds": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "i64",
  },
  "tguiDuration_asNanoseconds": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "i64",
  },
  "tguiFloatRect_contains": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiIntRect_contains": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "i16",
          "i16",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiUIntRect_contains": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiFloatRect_intersects": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiIntRect_intersects": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiUIntRect_intersects": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tgui_setGlobalTextSize": {
    "parameters": [
      "u16",
    ],
    "result": "void",
  },
  "tgui_getGlobalTextSize": {
    "parameters": [],
    "result": "u16",
  },
  "tgui_setDoubleClickTime": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tgui_getDoubleClickTime": {
    "parameters": [],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tgui_setResourcePath": {
    "parameters": [
      "buffer",
    ],
    "result": "void",
  },
  "tgui_setEditCursorBlinkRate": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tgui_getEditCursorBlinkRate": {
    "parameters": [],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tgui_readFileToMemory": {
    "parameters": [
      "buffer",
      "pointer",
    ],
    "result": "buffer",
  },
  "tgui_writeFile": {
    "parameters": [
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tgui_readFileToMemory_free": {
    "parameters": [
      "buffer",
    ],
    "result": "void",
  },
  "tgui_getLastError": {
    "parameters": [],
    "result": "buffer",
  },
  "tgui_setBindingWidgetCleanupCallback": {
    "parameters": [
      "function",
    ],
    "result": "void",
  },
  "tguiCursor_setStyle": {
    "parameters": [
      "i16",
      "pointer",
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiCursor_resetStyle": {
    "parameters": [
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_draw": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_loadWidgetsFromFile": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiGui_saveWidgetsToFile": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiGui_setAbsoluteViewport": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiGui_setRelativeViewport": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiGui_getViewport": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
        "f32",
        "f32",
      ],
    },
  },
  "tguiGui_setAbsoluteView": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiGui_setRelativeView": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiGui_getView": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
        "f32",
        "f32",
      ],
    },
  },
  "tguiGui_setTabKeyUsageEnabled": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_isTabKeyUsageEnabled": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGui_setFont": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_getFont": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGui_add": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiGui_get": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiGui_getWidgets": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGui_remove": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGui_removeAllWidgets": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_getFocusedChild": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGui_getFocusedLeaf": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGui_getWidgetAtPos": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiGui_getWidgetBelowMouseCursor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "i16",
          "i16",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiGui_focusNextWidget": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiGui_focusPreviousWidget": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiGui_unfocusAllWidgets": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_moveWidgetToFront": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_moveWidgetToBack": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_moveWidgetForward": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "usize",
  },
  "tguiGui_moveWidgetBackward": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "usize",
  },
  "tguiGui_setWidgetIndex": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiGui_getWidgetIndex": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGui_setOpacity": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiGui_getOpacity": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiGui_setTextSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiGui_getTextSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiGui_setDrawingUpdatesTime": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_updateTime": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGui_setOverrideMouseCursor": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_restoreOverrideMouseCursor": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiGui_requestMouseCursor": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_mapPixelToCoords": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "i16",
          "i16",
        ],
      },
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiGui_mapCoordsToPixel": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiGui_setKeyboardNavigationEnabled": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGui_isKeyboardNavigationEnabled": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGui_mainLoop": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiGuiCSFMLGraphics_create": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGuiCSFMLGraphics_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiGuiCSFMLGraphics_handleEvent": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawWidget": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_addClippingLayer": {
    "parameters": [
      "pointer",
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_removeClippingLayer": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawBorders": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawFilledRect": {
    "parameters": [
      "pointer",
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawSprite": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawText": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawTextOutline": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawTextWithoutOutline": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawTriangle": {
    "parameters": [
      "pointer",
      "pointer",
      {
        "struct": [
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
          {
            "struct": [
              "u8",
              "u8",
              "u8",
              "u8",
            ],
          },
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
        ],
      },
      {
        "struct": [
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
          {
            "struct": [
              "u8",
              "u8",
              "u8",
              "u8",
            ],
          },
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
        ],
      },
      {
        "struct": [
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
          {
            "struct": [
              "u8",
              "u8",
              "u8",
              "u8",
            ],
          },
          {
            "struct": [
              "f32",
              "f32",
            ],
          },
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawCircle": {
    "parameters": [
      "pointer",
      "pointer",
      "f32",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
      "f32",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawRoundedRectangle": {
    "parameters": [
      "pointer",
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
      "f32",
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiBackendRenderTarget_drawVertexArray": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "usize",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tgui_base64Encode": {
    "parameters": [
      "buffer",
      "usize",
    ],
    "result": "buffer",
  },
  "tgui_base64Decode": {
    "parameters": [
      "buffer",
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiContainer_loadWidgetsFromFile": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiContainer_saveWidgetsToFile": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiContainer_add": {
    "parameters": [
      "pointer",
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiContainer_get": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiContainer_getWidgets": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiContainer_remove": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiContainer_removeAllWidgets": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiContainer_moveWidgetToFront": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiContainer_moveWidgetToBack": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiContainer_moveWidgetForward": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "usize",
  },
  "tguiContainer_moveWidgetBackward": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "usize",
  },
  "tguiContainer_setWidgetIndex": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiContainer_getWidgetIndex": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiContainer_getFocusedChild": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiContainer_getFocusedLeaf": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiContainer_getWidgetAtPos": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiContainer_focusNextWidget": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiContainer_focusPreviousWidget": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiContainer_getInnerSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiContainer_getChildWidgetsOffset": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiCustomWidget_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiCustomWidget_setPositionChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setSizeChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setVisibleChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setEnableChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setFocusChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setCanGainFocusCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setGetFullSizeCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setGetWidgetOffsetCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setUpdateTimeCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setMouseOnWidgetCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setLeftMousePressedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setLeftMouseReleasedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setRightMousePressedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setRightMouseReleasedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setMouseMovedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setKeyPressedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setTextEnteredCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setScrolledCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setMouseNoLongerOnWidgetCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setMouseEnteredWidgetCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setMouseLeftWidgetCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setRendererChangedCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiCustomWidget_setDrawCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiFilesystem_getParentPath": {
    "parameters": [
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiFilesystem_joinPaths": {
    "parameters": [
      "buffer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiFilesystem_directoryExists": {
    "parameters": [
      "buffer",
    ],
    "result": "i16",
  },
  "tguiFilesystem_fileExists": {
    "parameters": [
      "buffer",
    ],
    "result": "i16",
  },
  "tguiFilesystem_createDirectory": {
    "parameters": [
      "buffer",
    ],
    "result": "i16",
  },
  "tguiFilesystem_getLocalDataDirectory": {
    "parameters": [],
    "result": "buffer",
  },
  "tguiFont_createNull": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiFont_createFromFile": {
    "parameters": [
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiFont_createFromMemory": {
    "parameters": [
      "buffer",
      "usize",
    ],
    "result": "pointer",
  },
  "tguiFont_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiFont_getGlyph": {
    "parameters": [
      "pointer",
      "u32",
      "u16",
      "i16",
      "f32",
    ],
    "result": {
      "struct": [
        "f32",
        {
          "struct": [
            "f32",
            "f32",
            "f32",
            "f32",
          ],
        },
        {
          "struct": [
            "u16",
            "u16",
            "u16",
            "u16",
          ],
        },
      ],
    },
  },
  "tguiFont_setGlobalFont": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiFont_getGlobalFont": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiFont_getId": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFont_getKerning": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u16",
      "i16",
    ],
    "result": "f32",
  },
  "tguiFont_getLineSpacing": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "f32",
  },
  "tguiFont_getFontHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "f32",
  },
  "tguiFont_setSmooth": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFont_isSmooth": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLayout_create": {
    "parameters": [
      "f32",
    ],
    "result": "pointer",
  },
  "tguiLayout_createFromString": {
    "parameters": [
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiLayout_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLayout_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiLayout_replaceValue": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiLayout_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiLayout_isConstant": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLayout2d_create": {
    "parameters": [
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "pointer",
  },
  "tguiLayout2d_createFromLayouts": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLayout2d_createFromString": {
    "parameters": [
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiLayout2d_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLayout2d_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiLayout2d_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiBindPosX": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindPosY": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindLeft": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindTop": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindInnerWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindInnerHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindRight": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindBottom": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindPosition": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindSize": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindInnerSize": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindMin": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBindMax": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiOutline_create": {
    "parameters": [
      "f32",
      "f32",
      "f32",
      "f32",
    ],
    "result": "pointer",
  },
  "tguiOutline_createFromStrings": {
    "parameters": [
      "buffer",
      "buffer",
      "buffer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiOutline_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiOutline_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiOutline_getLeft": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiOutline_getTop": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiOutline_getRight": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiOutline_getBottom": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRendererData_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRendererData_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiSprite_createNull": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSprite_createFromTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSprite_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiSprite_getScalingType": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSprite_isSet": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSprite_setTexture": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSprite_getTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSprite_setPosition": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSprite_getPosition": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiSprite_setSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSprite_getSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiSprite_setOpacity": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSprite_getOpacity": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSprite_setVisibleRect": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSprite_getVisibleRect": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
        "f32",
        "f32",
      ],
    },
  },
  "tguiSprite_setRotation": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSprite_getRotation": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSprite_isTransparentPixel": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiText_getStaticExtraHorizontalPadding": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "f32",
  },
  "tguiText_getStaticExtraHorizontalOffset": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "f32",
  },
  "tguiText_getStaticExtraVerticalPadding": {
    "parameters": [
      "u16",
    ],
    "result": "f32",
  },
  "tguiText_getStaticLineHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "f32",
  },
  "tguiText_getStaticLineWidth": {
    "parameters": [
      "buffer",
      "pointer",
      "u16",
      "u32",
    ],
    "result": "f32",
  },
  "tguiText_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiText_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiText_findBestTextSize": {
    "parameters": [
      "pointer",
      "f32",
      "i16",
    ],
    "result": "u16",
  },
  "tguiText_wordWrap": {
    "parameters": [
      "f32",
      "buffer",
      "pointer",
      "u16",
      "i16",
    ],
    "result": "buffer",
  },
  "tguiText_getSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiText_setPosition": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiText_getPosition": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiText_setString": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiText_getString": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiText_setCharacterSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiText_getCharacterSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiText_setColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiText_getColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiText_setOpacity": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiText_getOpacity": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiText_setFont": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiText_getFont": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiText_setStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiText_getStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiText_setOutlineColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiText_getOutlineColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiText_setOutlineThickness": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiText_getOutlineThickness": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiText_findCharacterPos": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiText_getExtraHorizontalPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiText_getExtraHorizontalOffset": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiText_getLineHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiText_getLineWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTexture_createNull": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTexture_createFromFile": {
    "parameters": [
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromFileEx": {
    "parameters": [
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromMemory": {
    "parameters": [
      "buffer",
      "usize",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromMemoryEx": {
    "parameters": [
      "buffer",
      "usize",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromPixelData": {
    "parameters": [
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromPixelDataEx": {
    "parameters": [
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromBase64": {
    "parameters": [
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
    ],
    "result": "pointer",
  },
  "tguiTexture_createFromBase64Ex": {
    "parameters": [
      "buffer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTexture_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTexture_setColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTexture_getColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTexture_setMiddleRect": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u16",
          "u16",
          "u16",
          "u16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTexture_getMiddleRect": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u16",
        "u16",
        "u16",
        "u16",
      ],
    },
  },
  "tguiTexture_getId": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTexture_getImageSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u16",
        "u16",
      ],
    },
  },
  "tguiTexture_getPartRect": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u16",
        "u16",
        "u16",
        "u16",
      ],
    },
  },
  "tguiTexture_isSmooth": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTexture_isTransparentPixel": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u16",
          "u16",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiTexture_setDefaultSmooth": {
    "parameters": [
      "i16",
    ],
    "result": "void",
  },
  "tguiTexture_getDefaultSmooth": {
    "parameters": [],
    "result": "i16",
  },
  "tguiTheme_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTheme_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTheme_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTheme_load": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTheme_replace": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTheme_getRenderer": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiTheme_setDefault": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTheme_getDefault": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTheme_hasGlobalProperty": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTheme_getGlobalPropertyBool": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTheme_getGlobalPropertyFont": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiTheme_getGlobalPropertyColor": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTheme_getGlobalPropertyString": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiTheme_getGlobalPropertyNumber": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "f32",
  },
  "tguiTheme_getGlobalPropertyOutline": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiTheme_getGlobalPropertyTexture": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiTheme_getGlobalPropertyTextStyle": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "u32",
  },
  "tguiTheme_getGlobalPropertyRendererData": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiTheme_addRendererDefaultSubwidget": {
    "parameters": [
      "buffer",
      "buffer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTheme_getRendererDefaultSubwidget": {
    "parameters": [
      "buffer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiTheme_addRendererInheritedGlobalProperty": {
    "parameters": [
      "buffer",
      "buffer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTheme_getRendererInheritedGlobalProperty": {
    "parameters": [
      "buffer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiTheme_addRenderer": {
    "parameters": [
      "pointer",
      "buffer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTheme_removeRenderer": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTheme_getPrimary": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTheme_addRendererInheritanceParent": {
    "parameters": [
      "buffer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTheme_getRendererInheritanceParent": {
    "parameters": [
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiTimer_scheduleCallback": {
    "parameters": [
      "function",
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTimer_create": {
    "parameters": [
      "function",
      {
        "struct": [
          "i64",
        ],
      },
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTimer_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTimer_setInterval": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTimer_getInterval": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiTimer_setEnabled": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTimer_isEnabled": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTimer_setCallback": {
    "parameters": [
      "pointer",
      "function",
    ],
    "result": "void",
  },
  "tguiTimer_restart": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiToolTip_setInitialDelay": {
    "parameters": [
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiToolTip_getInitialDelay": {
    "parameters": [],
    "result": {
      "struct": [
        "i64",
      ],
    },
  },
  "tguiToolTip_setDistanceToMouse": {
    "parameters": [
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiToolTip_getDistanceToMouse": {
    "parameters": [],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiToolTip_setShowOnDisabledWidget": {
    "parameters": [
      "i16",
    ],
    "result": "void",
  },
  "tguiToolTip_getShowOnDisabledWidget": {
    "parameters": [],
    "result": "i16",
  },
  "tguiWidget_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_setAutoLayout": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_getAutoLayout": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_signalConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalConnectEx": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalIntConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalUIntConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalBoolConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalFloatConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalColorConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalStringConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalVector2fConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalFloatRectConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalRangeConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalChildWindowConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalItemConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalPanelListBoxItemConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalFileDialogPathsConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalShowEffectConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalAnimationTypeConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalItemHierarchyConnect": {
    "parameters": [
      "pointer",
      "buffer",
      "function",
    ],
    "result": "u16",
  },
  "tguiWidget_signalDisconnect": {
    "parameters": [
      "pointer",
      "buffer",
      "u16",
    ],
    "result": "i16",
  },
  "tguiWidget_signalDisconnectAll": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiWidget_setSignalEnabled": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiWidget_isSignalEnabled": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiWidget_setRenderer": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_getRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_getSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_showWithEffect": {
    "parameters": [
      "pointer",
      "i16",
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_hideWithEffect": {
    "parameters": [
      "pointer",
      "i16",
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_moveWithAnimation": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_resizeWithAnimation": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_setToolTip": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getToolTip": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_getParent": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_updateTime": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "i64",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_setPosition": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_setPositionFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getPosition": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_getAbsolutePosition": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_getAbsolutePositionWithOffset": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_getWidgetOffset": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_setWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidget_setWidthFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_setHeight": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidget_setHeightFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_setSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_setSizeFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_getFullSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_setOrigin": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_getOrigin": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_setScale": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_setScaleWithOrigin": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_getScale": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_getScaleOrigin": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_setRotation": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidget_setRotationWithOrigin": {
    "parameters": [
      "pointer",
      "f32",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidget_getRotation": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiWidget_getRotationOrigin": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiWidget_setVisible": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_isVisible": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_setEnabled": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_isEnabled": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_setFocused": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_isFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_setFocusable": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_isFocusable": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_getWidgetType": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiWidget_moveToFront": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_moveToBack": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_setUserData": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiWidget_getUserData": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiWidget_hasUserData": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_isAnimationPlaying": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_setTextSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiWidget_getTextSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiWidget_setWidgetName": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiWidget_getWidgetName": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiWidget_setMouseCursor": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_getMouseCursor": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_setNavigationUp": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getNavigationUp": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_setNavigationDown": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getNavigationDown": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_setNavigationLeft": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getNavigationLeft": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_setNavigationRight": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_getNavigationRight": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidget_setIgnoreMouseEvents": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_getIgnoreMouseEvents": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_finishAllAnimations": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidget_setAutoLayoutUpdateEnabled": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidget_isMouseDown": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidget_isMouseOnWidget": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "i16",
  },
  "tguiBitmapButton_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiBitmapButton_setImage": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiBitmapButton_getImage": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBitmapButton_setImageScaling": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiBitmapButton_getImageScaling": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiBoxLayout_insert": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiBoxLayout_removeAtIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiBoxLayout_getAtIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "pointer",
  },
  "tguiBoxLayoutRatios_add": {
    "parameters": [
      "pointer",
      "pointer",
      "f32",
      "buffer",
    ],
    "result": "void",
  },
  "tguiBoxLayoutRatios_insert": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
      "f32",
      "buffer",
    ],
    "result": "void",
  },
  "tguiBoxLayoutRatios_addSpace": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiBoxLayoutRatios_insertSpace": {
    "parameters": [
      "pointer",
      "usize",
      "f32",
    ],
    "result": "void",
  },
  "tguiBoxLayoutRatios_setRatio": {
    "parameters": [
      "pointer",
      "pointer",
      "f32",
    ],
    "result": "i16",
  },
  "tguiBoxLayoutRatios_setRatioAtIndex": {
    "parameters": [
      "pointer",
      "usize",
      "f32",
    ],
    "result": "i16",
  },
  "tguiBoxLayoutRatios_getRatio": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "f32",
  },
  "tguiBoxLayoutRatios_getRatioAtIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "f32",
  },
  "tguiButton_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiButtonBase_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiButtonBase_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiButtonBase_setIgnoreKeyEvents": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiButtonBase_getIgnoreKeyEvents": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiButtonBase_setTextPositionAbs": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonBase_setTextPositionRel": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChatBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiChatBox_addLine": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiChatBox_addLineWithColor": {
    "parameters": [
      "pointer",
      "buffer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChatBox_addLineWithColorAndStyle": {
    "parameters": [
      "pointer",
      "buffer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
      "u32",
    ],
    "result": "void",
  },
  "tguiChatBox_getLine": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiChatBox_getLineColor": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChatBox_getLineTextStyle": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "u32",
  },
  "tguiChatBox_removeLine": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiChatBox_removeAllLines": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiChatBox_getLineAmount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiChatBox_setLineLimit": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiChatBox_getLineLimit": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiChatBox_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChatBox_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChatBox_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiChatBox_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiChatBox_setLinesStartFromTop": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChatBox_getLinesStartFromTop": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChatBox_setNewLinesBelowOthers": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChatBox_getNewLinesBelowOthers": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiCheckBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiChildWindow_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiChildWindow_setClientSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindow_setClientSizeFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindow_getClientSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiChildWindow_setMaximumSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindow_getMaximumSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiChildWindow_setMinimumSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindow_getMinimumSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiChildWindow_setTitle": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiChildWindow_getTitle": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiChildWindow_setTitleTextSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiChildWindow_getTitleTextSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiChildWindow_setTitleAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindow_getTitleAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChildWindow_setTitleButtons": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiChildWindow_getTitleButtons": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiChildWindow_setCloseBehavior": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindow_getCloseBehavior": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChildWindow_setResizable": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindow_isResizable": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChildWindow_setKeepInParent": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindow_getKeepInParent": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChildWindow_setPositionLocked": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindow_isPositionLocked": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiClickableWidget_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiColorPicker_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiColorPicker_setColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiColorPicker_getColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiComboBox_setItemsToDisplay": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiComboBox_getItemsToDisplay": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiComboBox_addItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "usize",
  },
  "tguiComboBox_addMultipleItems": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiComboBox_getItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiComboBox_getItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiComboBox_getIndexById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_getIdByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiComboBox_getItems": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBox_getItemIds": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBox_setSelectedItem": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_setSelectedItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_setSelectedItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiComboBox_deselectItem": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBox_removeItem": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_removeItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_removeItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiComboBox_removeAllItems": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBox_getSelectedItem": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiComboBox_getSelectedItemId": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiComboBox_getSelectedItemIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiComboBox_changeItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_changeItemById": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_changeItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_getItemCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiComboBox_setItemData": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "void",
  },
  "tguiComboBox_getItemData": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiComboBox_setMaximumItems": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiComboBox_getMaximumItems": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiComboBox_setDefaultText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiComboBox_getDefaultText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiComboBox_setExpandDirection": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiComboBox_getExpandDirection": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiComboBox_setChangeItemOnScroll": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiComboBox_getChangeItemOnScroll": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiComboBox_contains": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiComboBox_containsId": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiEditBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiEditBox_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiEditBox_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiEditBox_setDefaultText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiEditBox_getDefaultText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiEditBox_setPasswordCharacter": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiEditBox_getPasswordCharacter": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiEditBox_setMaximumCharacters": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiEditBox_getMaximumCharacters": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiEditBox_setAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiEditBox_getAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiEditBox_setTextWidthLimited": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiEditBox_isTextWidthLimited": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiEditBox_setReadOnly": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiEditBox_isReadOnly": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiEditBox_setCaretPosition": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiEditBox_getCaretPosition": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiEditBox_setSuffix": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiEditBox_getSuffix": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiEditBox_setInputValidator": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiEditBox_getInputValidator": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiEditBox_selectText": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "void",
  },
  "tguiEditBox_getSelectedText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiEditBoxSlider_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiEditBoxSlider_getEditBoxRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxSlider_getEditBoxSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxSlider_getSliderRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxSlider_getSliderSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxSlider_setValue": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "i16",
  },
  "tguiEditBoxSlider_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiEditBoxSlider_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiEditBoxSlider_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiEditBoxSlider_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiEditBoxSlider_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiEditBoxSlider_setStep": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiEditBoxSlider_getStep": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiEditBoxSlider_setDecimalPlaces": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiEditBoxSlider_getDecimalPlaces": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiEditBoxSlider_setTextAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiEditBoxSlider_getTextAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiFileDialog_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiFileDialog_setFilename": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getFilename": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_getFileTypeFiltersIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiFileDialog_setConfirmButtonText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getConfirmButtonText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_setCancelButtonText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getCancelButtonText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_setCreateFolderButtonText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getCreateFolderButtonText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_setFilenameLabelText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getFilenameLabelText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_setAllowCreateFolder": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFileDialog_getAllowCreateFolder": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiFileDialog_setFileMustExist": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFileDialog_getFileMustExist": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiFileDialog_setSelectingDirectory": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFileDialog_getSelectingDirectory": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiFileDialog_setMultiSelect": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFileDialog_getMultiSelect": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiFileDialogFilter_create": {
    "parameters": [
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogFilter_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogFilter_addExpression": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialogFilter_getExpressions": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialog_setPath": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getPath": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_getSelectedPaths": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialog_setFileTypeFilters": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "usize",
    ],
    "result": "void",
  },
  "tguiFileDialog_getFileTypeFilters": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialog_setListViewColumnCaptions": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiFileDialog_getListViewColumnCaptionsName": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_getListViewColumnCaptionsSize": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiFileDialog_getListViewColumnCaptionsModified": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiGrid_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiGrid_setAutoSize": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGrid_getAutoSize": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGrid_addWidget": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "usize",
      "i16",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGrid_setWidgetCell": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "usize",
      "i16",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGrid_getWidget": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "pointer",
  },
  "tguiGrid_setWidgetAlignment": {
    "parameters": [
      "pointer",
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiGrid_setWidgetAlignmentByCell": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiGrid_getWidgetAlignment": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGrid_getWidgetAlignmentByCell": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "i16",
  },
  "tguiGrid_setWidgetPadding": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGrid_setWidgetPaddingByCell": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGrid_getWidgetPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGrid_getWidgetPaddingByCell": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "pointer",
  },
  "tguiGridWidgetLocation_destroy": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiGrid_getWidgetLocations": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGroup_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiHorizontalLayout_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiHorizontalWrap_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiKnob_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiKnob_setStartRotation": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnob_getStartRotation": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiKnob_setEndRotation": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnob_getEndRotation": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiKnob_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnob_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiKnob_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnob_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiKnob_setValue": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnob_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiKnob_setClockwiseTurning": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiKnob_getClockwiseTurning": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLabel_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiLabel_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiLabel_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiLabel_setHorizontalAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiLabel_getHorizontalAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLabel_setVerticalAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiLabel_getVerticalAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLabel_setAutoSize": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiLabel_getAutoSize": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiLabel_setMaximumTextWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiLabel_getMaximumTextWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiListBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiListBox_addItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "usize",
  },
  "tguiListBox_addMultipleItems": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiListBox_getItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiListBox_getItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListBox_getIndexById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_getIdByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListBox_setSelectedItem": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_setSelectedItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_setSelectedItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListBox_deselectItem": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBox_removeItem": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_removeItemById": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_removeItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListBox_removeAllItems": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBox_getSelectedItem": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiListBox_getSelectedItemId": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiListBox_getSelectedItemIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListBox_getHoveredItemIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListBox_changeItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_changeItemById": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_changeItemByIndex": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_getItemCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiListBox_getItems": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBox_getItemIds": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBox_setItemData": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "void",
  },
  "tguiListBox_getItemData": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListBox_setItemHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListBox_getItemHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListBox_setMaximumItems": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiListBox_getMaximumItems": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiListBox_setAutoScroll": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListBox_getAutoScroll": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListBox_setTextAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListBox_getTextAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListBox_contains": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListBox_containsId": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListView_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiListView_addColumn": {
    "parameters": [
      "pointer",
      "buffer",
      "f32",
      "i16",
    ],
    "result": "usize",
  },
  "tguiListView_setColumnText": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "void",
  },
  "tguiListView_getColumnText": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListView_setColumnWidth": {
    "parameters": [
      "pointer",
      "usize",
      "f32",
    ],
    "result": "void",
  },
  "tguiListView_getColumnWidth": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "f32",
  },
  "tguiListView_getColumnDesignWidth": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "f32",
  },
  "tguiListView_setColumnAlignment": {
    "parameters": [
      "pointer",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getColumnAlignment": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListView_setColumnAutoResize": {
    "parameters": [
      "pointer",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getColumnAutoResize": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListView_setColumnExpanded": {
    "parameters": [
      "pointer",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getColumnExpanded": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListView_removeAllColumns": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiListView_getColumnCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiListView_setHeaderVisible": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getHeaderVisible": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_setHeaderHeight": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiListView_getHeaderHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiListView_getCurrentHeaderHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiListView_addItem": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "usize",
  },
  "tguiListView_addItemRow": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "usize",
  },
  "tguiListView_insertItem": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "void",
  },
  "tguiListView_insertItemRow": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiListView_changeItem": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListView_changeSubItem": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiListView_removeItem": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiListView_removeAllItems": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiListView_setSelectedItem": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiListView_setSelectedItems": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiListView_getSelectedItemIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_getHoveredItemIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_getSelectedItemIndices": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListView_deselectItems": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiListView_setMultiSelect": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getMultiSelect": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_setItemData": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "void",
  },
  "tguiListView_getItemData": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListView_setItemIcon": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListView_getItemCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiListView_getItem": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListView_getItemCell": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiListView_getItemRow": {
    "parameters": [
      "pointer",
      "usize",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListView_getItems": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListView_setItemHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListView_getItemHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListView_setHeaderTextSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListView_getHeaderTextSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListView_setSeparatorWidth": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListView_getSeparatorWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListView_setHeaderSeparatorHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListView_getHeaderSeparatorHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListView_setGridLinesWidth": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiListView_getGridLinesWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiListView_setAutoScroll": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getAutoScroll": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_setShowVerticalGridLines": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getShowVerticalGridLines": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_setShowHorizontalGridLines": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getShowHorizontalGridLines": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_setFixedIconSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListView_getFixedIconSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiListView_setResizableColumns": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiListView_getResizableColumns": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiListView_sort": {
    "parameters": [
      "pointer",
      "usize",
      "function",
    ],
    "result": "void",
  },
  "tguiMenuBar_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiMenuBar_addMenu": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiMenuBar_addMenuItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_addMenuItemToLastMenu": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_addMenuItemHierarchy": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "i16",
    ],
    "result": "i16",
  },
  "tguiMenuBar_changeMenuItem": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_removeMenu": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_removeMenuItem": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_removeMenuItemHierarchy": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "i16",
    ],
    "result": "i16",
  },
  "tguiMenuBar_removeAllMenus": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBar_setMenuEnabled": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiMenuBar_getMenuEnabled": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_setMenuItemEnabled": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
      "i16",
    ],
    "result": "i16",
  },
  "tguiMenuBar_getMenuItemEnabled": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiMenuBar_setMenuItemEnabledHierarchy": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "i16",
    ],
    "result": "i16",
  },
  "tguiMenuBar_getMenuItemEnabledHierarchy": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiMenuBar_closeMenu": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBar_setMinimumSubMenuWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiMenuBar_getMinimumSubMenuWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMenuBar_setInvertedMenuDirection": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiMenuBar_getInvertedMenuDirection": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiMenuBarMenuList_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBar_getMenus": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMessageBox_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiMessageBox_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiMessageBox_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiMessageBox_addButton": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiMessageBox_changeButtons": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiMessageBox_getButtons": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMessageBox_setLabelAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiMessageBox_getLabelAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiMessageBox_setButtonAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiMessageBox_getButtonAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiPanel_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiPanel_setEventBubbling": {
    "parameters": [
      "i16",
    ],
    "result": "void",
  },
  "tguiPanel_getEventBubbling": {
    "parameters": [],
    "result": "i16",
  },
  "tguiPicture_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiProgressBar_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiProgressBar_setMinimum": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiProgressBar_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiProgressBar_setMaximum": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiProgressBar_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiProgressBar_setValue": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiProgressBar_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiProgressBar_incrementValue": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiProgressBar_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiProgressBar_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiProgressBar_setFillDirection": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiProgressBar_getFillDirection": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiRadioButton_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiRadioButton_setChecked": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiRadioButton_isChecked": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiRadioButton_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiRadioButton_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiRadioButton_setTextClickable": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiRadioButton_isTextClickable": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiRadioButtonGroup_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiRadioButtonGroup_uncheckRadioButtons": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "getCheckedRadioButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRangeSlider_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiRangeSlider_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRangeSlider_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRangeSlider_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRangeSlider_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRangeSlider_setSelectionStart": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRangeSlider_getSelectionStart": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRangeSlider_setSelectionEnd": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRangeSlider_getSelectionEnd": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRangeSlider_setStep": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRangeSlider_getStep": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiScrollablePanel_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiScrollablePanel_setContentSize": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "f32",
          "f32",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollablePanel_getContentSize": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiScrollablePanel_getContentOffset": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "f32",
        "f32",
      ],
    },
  },
  "tguiScrollbar_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiScrollbar_setViewportSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getViewportSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiScrollbar_setMaximum": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiScrollbar_setValue": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiScrollbar_setScrollAmount": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getScrollAmount": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiScrollbar_setPolicy": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getPolicy": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiScrollbar_setOrientation": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiScrollbar_getOrientation": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiScrollbar_isShown": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiScrollbar_getMaxValue": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiScrollbar_getDefaultWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSlider_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSlider_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSlider_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSlider_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSlider_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSlider_setValue": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSlider_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSlider_setStep": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSlider_getStep": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSlider_setOrientation": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiSlider_getOrientation": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSlider_setInvertedDirection": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiSlider_getInvertedDirection": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSlider_setChangeValueOnScroll": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiSlider_getChangeValueOnScroll": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSpinButton_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSpinButton_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinButton_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinButton_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinButton_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinButton_setValue": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinButton_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinButton_setStep": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinButton_getStep": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinButton_setOrientation": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiSpinButton_getOrientation": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSpinControl_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSpinControl_getSpinButtonRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinControl_getSpinButtonSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinControl_getSpinTextRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinControl_getSpinTextSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinControl_setValue": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "i16",
  },
  "tguiSpinControl_getValue": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinControl_setMinimum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinControl_getMinimum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinControl_setMaximum": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinControl_getMaximum": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinControl_setStep": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinControl_getStep": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinControl_setDecimalPlaces": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiSpinControl_getDecimalPlaces": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiSpinControl_setSpinButtonWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinControl_getSpinButtonWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTabs_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTabs_setAutoSize": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTabs_getAutoSize": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabs_add": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "usize",
  },
  "tguiTabs_insert": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTabs_getText": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiTabs_changeText": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTabs_deselect": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabs_removeAll": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabs_getSelected": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTabs_getSelectedIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabs_getHoveredIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabs_getTabsCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTabs_setTabVisible": {
    "parameters": [
      "pointer",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiTabs_getTabVisible": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTabs_setTabEnabled": {
    "parameters": [
      "pointer",
      "usize",
      "i16",
    ],
    "result": "void",
  },
  "tguiTabs_getTabEnabled": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTabs_setMaximumTabWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTabs_getMaximumTabWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTabs_setMinimumTabWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTabs_getMinimumTabWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTabs_selectByText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTabs_selectByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTabs_removeByText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTabs_removeByIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTabContainer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTabContainer_getTabsRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_getTabsSharedRenderer": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_select": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiTabContainer_getPanelCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTabContainer_getSelectedIndex": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabContainer_getTabText": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "buffer",
  },
  "tguiTabContainer_changeTabText": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTabContainer_setTabFixedSize": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTabContainer_getTabFixedSize": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTabContainer_setTabAlignment": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTabContainer_getTabAlignment": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabContainer_setTabsHeight": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTabContainer_setTabsHeightFromLayout": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabContainer_removeTabWithName": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTabContainer_removeTabWithIndex": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTabContainer_addTab": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_insertTab": {
    "parameters": [
      "pointer",
      "usize",
      "buffer",
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_getIndex": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTabContainer_getSelected": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_getPanel": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "pointer",
  },
  "tguiTabContainer_getTabs": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextArea_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTextArea_setText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTextArea_getText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTextArea_addText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTextArea_setDefaultText": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTextArea_getDefaultText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTextArea_setSelectedText": {
    "parameters": [
      "pointer",
      "usize",
      "usize",
    ],
    "result": "void",
  },
  "tguiTextArea_getSelectedText": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTextArea_getSelectionStart": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_getSelectionEnd": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_setMaximumCharacters": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiTextArea_getMaximumCharacters": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_setTabString": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiTextArea_getTabString": {
    "parameters": [
      "pointer",
    ],
    "result": "buffer",
  },
  "tguiTextArea_setCaretPosition": {
    "parameters": [
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiTextArea_getCaretPosition": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_getCaretLine": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_getCaretColumn": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiTextArea_setReadOnly": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTextArea_isReadOnly": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTextArea_enableMonospacedFontOptimization": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiTextArea_getLinesCount": {
    "parameters": [
      "pointer",
    ],
    "result": "usize",
  },
  "tguiToggleButton_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiToggleButton_setDown": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiToggleButton_isDown": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiTreeView_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTreeView_setItemHeight": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiTreeView_getItemHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiTreeView_addItem": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "i16",
    ],
    "result": "i16",
  },
  "tguiTreeView_changeItem": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiTreeView_expand": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiTreeView_collapse": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "void",
  },
  "tguiTreeView_expandAll": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeView_collapseAll": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeView_deselectItem": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeView_removeAllItems": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeView_getSelectedItem": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeView_getHoveredItem": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeView_setItemIndexInParent": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTreeView_getItemIndexInParent": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTreeView_selectItem": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
    ],
    "result": "i16",
  },
  "tguiTreeView_removeItem": {
    "parameters": [
      "pointer",
      "pointer",
      "usize",
      "i16",
    ],
    "result": "i16",
  },
  "tguiTreeViewConstNode_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeView_getNode": {
    "parameters": [
      "pointer",
      "pointer",
      "u16",
    ],
    "result": "pointer",
  },
  "tguiTreeView_getNodes": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiVerticalLayout_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiBoxLayoutRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiBoxLayoutRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiBoxLayoutRenderer_setSpaceBetweenWidgets": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiBoxLayoutRenderer_getSpaceBetweenWidgets": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiButtonRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiButtonRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorDown": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorDown": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorDownHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorDownFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorDownFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextColorDownDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextColorDownDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorDown": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorDown": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorDownHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorDownFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorDownFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBackgroundColorDownDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBackgroundColorDownDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorDown": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorDown": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorDownHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorDownFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorDownFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setBorderColorDownDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getBorderColorDownDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTexture": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureFocused": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureDown": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureDown": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureDownHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureDownFocused": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureDownFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextureDownDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextureDownDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiButtonRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleHover": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleHover": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleFocused": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleDisabled": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleDown": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleDown": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleDownHover": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleDownFocused": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleDownFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextStyleDownDisabled": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextStyleDownDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiButtonRenderer_setTextOutlineColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextOutlineColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiButtonRenderer_setTextOutlineThickness": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getTextOutlineThickness": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiButtonRenderer_setRoundedBorderRadius": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiButtonRenderer_getRoundedBorderRadius": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChatBoxRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChatBoxRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChatBoxRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChatBoxRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChatBoxRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setTitleBarColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getTitleBarColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChildWindowRenderer_setTitleColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getTitleColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChildWindowRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChildWindowRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChildWindowRenderer_setBorderColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getBorderColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiChildWindowRenderer_setBorderBelowTitleBar": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getBorderBelowTitleBar": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_setTitleBarHeight": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getTitleBarHeight": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_setDistanceToSide": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getDistanceToSide": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_setPaddingBetweenButtons": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getPaddingBetweenButtons": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_setMinimumResizableBorderWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getMinimumResizableBorderWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiChildWindowRenderer_setShowTextOnTitleButtons": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getShowTextOnTitleButtons": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiChildWindowRenderer_setTextureTitleBar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getTextureTitleBar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setCloseButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getCloseButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setMaximizeButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getMaximizeButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiChildWindowRenderer_setMinimizeButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiChildWindowRenderer_getMinimizeButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiColorPickerRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiColorPickerRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiColorPickerRenderer_setButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiColorPickerRenderer_getButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiColorPickerRenderer_setLabel": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiColorPickerRenderer_getLabel": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiColorPickerRenderer_setSlider": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiColorPickerRenderer_getSlider": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setDefaultTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getDefaultTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setArrowColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getArrowColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiComboBoxRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setTextureBackgroundDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextureBackgroundDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setTextureArrow": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextureArrow": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setTextureArrowHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextureArrowHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setTextureArrowDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextureArrowDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiComboBoxRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiComboBoxRenderer_setDefaultTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getDefaultTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiComboBoxRenderer_setListBox": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiComboBoxRenderer_getListBox": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setCaretWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getCaretWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiEditBoxRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setDefaultTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getDefaultTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setTextColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setSelectedTextBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getSelectedTextBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBackgroundColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBackgroundColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setCaretColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getCaretColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setCaretColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getCaretColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBorderColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBorderColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setBorderColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getBorderColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiEditBoxRenderer_setTexture": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setTextureHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextureHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setTextureFocused": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextureFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setTextureDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextureDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiEditBoxRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiEditBoxRenderer_setDefaultTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiEditBoxRenderer_getDefaultTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiFileDialogRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setListView": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getListView": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setEditBox": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getEditBox": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setFilenameLabel": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getFilenameLabel": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setFileTypeComboBox": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getFileTypeComboBox": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setBackButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getBackButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setForwardButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getForwardButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setUpButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getUpButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiGroupRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiGroupRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiGroupRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiGroupRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiKnobRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiKnobRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiKnobRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiKnobRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiKnobRenderer_setThumbColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getThumbColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiKnobRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiKnobRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiKnobRenderer_setTextureForeground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getTextureForeground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiKnobRenderer_setImageRotation": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiKnobRenderer_getImageRotation": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiLabelRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiLabelRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLabelRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLabelRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLabelRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiLabelRenderer_setTextOutlineColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getTextOutlineColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiLabelRenderer_setTextOutlineThickness": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getTextOutlineThickness": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiLabelRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiLabelRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiLabelRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiLabelRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiLabelRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiLabelRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiLabelRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiListBoxRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setSelectedBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getSelectedBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setSelectedTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getSelectedTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListBoxRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiListBoxRenderer_setSelectedTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getSelectedTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiListBoxRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListBoxRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiListBoxRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiListViewRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiListViewRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setSelectedBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getSelectedBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setSelectedTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getSelectedTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setHeaderBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getHeaderBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setHeaderTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getHeaderTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setSeparatorColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getSeparatorColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setGridLinesColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getGridLinesColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiListViewRenderer_setTextureHeaderBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getTextureHeaderBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiListViewRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiListViewRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMenuBarRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiMenuBarRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMenuBarRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setSelectedBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSelectedBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setSeparatorColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSeparatorColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMenuBarRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMenuBarRenderer_setTextureItemBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getTextureItemBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMenuBarRenderer_setTextureSelectedItemBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getTextureSelectedItemBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMenuBarRenderer_setDistanceToSide": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getDistanceToSide": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMenuBarRenderer_setSeparatorThickness": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSeparatorThickness": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMenuBarRenderer_setSeparatorVerticalPadding": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSeparatorVerticalPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMenuBarRenderer_setSeparatorSidePadding": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiMenuBarRenderer_getSeparatorSidePadding": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiMessageBoxRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiMessageBoxRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiMessageBoxRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiMessageBoxRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiMessageBoxRenderer_setButton": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiMessageBoxRenderer_getButton": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiPanelRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiPanelRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiPanelRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiPanelRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiPanelRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiPanelRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiPanelRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiPanelRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiPanelRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiPanelRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiPanelRenderer_setRoundedBorderRadius": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiPanelRenderer_getRoundedBorderRadius": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiPictureRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiPictureRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiPictureRenderer_setTexture": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiPictureRenderer_getTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setTextColorFilled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextColorFilled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setFillColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getFillColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_setTextureFill": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextureFill": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiProgressBarRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiProgressBarRenderer_setTextOutlineColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextOutlineColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiProgressBarRenderer_setTextOutlineThickness": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiProgressBarRenderer_getTextOutlineThickness": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRadioButtonRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextDistanceRatio": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextDistanceRatio": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiRadioButtonRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextColorChecked": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColorChecked": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextColorCheckedHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColorCheckedHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextColorCheckedDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextColorCheckedDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColorChecked": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColorChecked": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColorCheckedHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColorCheckedHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorChecked": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorChecked": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorCheckedHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorCheckedHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorCheckedFocused": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorCheckedFocused": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setBorderColorCheckedDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getBorderColorCheckedDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setCheckColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getCheckColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setCheckColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getCheckColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setCheckColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getCheckColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRadioButtonRenderer_setTextureUnchecked": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureUnchecked": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureChecked": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureChecked": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureUncheckedHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureUncheckedHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureCheckedHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureCheckedHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureUncheckedFocused": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureUncheckedFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureCheckedFocused": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureCheckedFocused": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureUncheckedDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureUncheckedDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextureCheckedDisabled": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextureCheckedDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRadioButtonRenderer_setTextStyle": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextStyle": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiRadioButtonRenderer_setTextStyleChecked": {
    "parameters": [
      "pointer",
      "u32",
    ],
    "result": "void",
  },
  "tguiRadioButtonRenderer_getTextStyleChecked": {
    "parameters": [
      "pointer",
    ],
    "result": "u32",
  },
  "tguiRangeSliderRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiRangeSliderRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRangeSliderRenderer_setSelectedTrackColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRangeSliderRenderer_getSelectedTrackColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRangeSliderRenderer_setSelectedTrackColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiRangeSliderRenderer_getSelectedTrackColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiRangeSliderRenderer_setTextureSelectedTrack": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRangeSliderRenderer_getTextureSelectedTrack": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiRangeSliderRenderer_setTextureSelectedTrackHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiRangeSliderRenderer_getTextureSelectedTrackHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollablePanelRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiScrollablePanelRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollablePanelRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollablePanelRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollablePanelRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiScrollablePanelRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiScrollbarRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTrackColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTrackColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setTrackColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTrackColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setThumbColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getThumbColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setThumbColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getThumbColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setArrowBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getArrowBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setArrowBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getArrowBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setArrowColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getArrowColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setArrowColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getArrowColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiScrollbarRenderer_setTextureTrack": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureTrack": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureTrackHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureTrackHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureThumb": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureThumb": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureThumbHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureThumbHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureArrowUp": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureArrowUp": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureArrowUpHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureArrowUpHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureArrowDown": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureArrowDown": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiScrollbarRenderer_setTextureArrowDownHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiScrollbarRenderer_getTextureArrowDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSliderRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setTrackColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTrackColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setTrackColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTrackColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setThumbColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getThumbColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setThumbColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getThumbColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSliderRenderer_setTextureTrack": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTextureTrack": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setTextureTrackHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTextureTrackHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setTextureThumb": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTextureThumb": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setTextureThumbHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getTextureThumbHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSliderRenderer_setThumbWithinTrack": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiSliderRenderer_getThumbWithinTrack": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiSpinButtonRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_setBorderBetweenArrows": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getBorderBetweenArrows": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiSpinButtonRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSpinButtonRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSpinButtonRenderer_setArrowColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getArrowColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSpinButtonRenderer_setArrowColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getArrowColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSpinButtonRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiSpinButtonRenderer_setTextureArrowUp": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getTextureArrowUp": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_setTextureArrowUpHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getTextureArrowUpHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_setTextureArrowDown": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getTextureArrowDown": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiSpinButtonRenderer_setTextureArrowDownHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiSpinButtonRenderer_getTextureArrowDownHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTabsRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setBackgroundColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBackgroundColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setTextColorDisabled": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextColorDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setSelectedBorderColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getSelectedBorderColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTabsRenderer_setTextureTab": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextureTab": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setTextureTabHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextureTabHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setTextureSelectedTab": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextureSelectedTab": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setTextureSelectedTabHover": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextureSelectedTabHover": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setTextureDisabledTab": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getTextureDisabledTab": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTabsRenderer_setDistanceToSide": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTabsRenderer_getDistanceToSide": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTextAreaRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setDefaultTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getDefaultTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setSelectedTextBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getSelectedTextBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setCaretColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getCaretColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTextAreaRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_setCaretWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getCaretWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTextAreaRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTextAreaRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTextAreaRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiTreeViewRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setBorders": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getBorders": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setPadding": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getPadding": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setSelectedBackgroundColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getSelectedBackgroundColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getSelectedBackgroundColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setSelectedTextColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getSelectedTextColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setSelectedTextColorHover": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getSelectedTextColorHover": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setBorderColor": {
    "parameters": [
      "pointer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getBorderColor": {
    "parameters": [
      "pointer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiTreeViewRenderer_setTextureBackground": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextureBackground": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setTextureBranchExpanded": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextureBranchExpanded": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setTextureBranchCollapsed": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextureBranchCollapsed": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setTextureLeaf": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getTextureLeaf": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setScrollbar": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getScrollbar": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiTreeViewRenderer_setScrollbarWidth": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiTreeViewRenderer_getScrollbarWidth": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiWidgetRenderer_create": {
    "parameters": [],
    "result": "pointer",
  },
  "tguiWidgetRenderer_copy": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_setOpacity": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getOpacity": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiWidgetRenderer_setOpacityDisabled": {
    "parameters": [
      "pointer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getOpacityDisabled": {
    "parameters": [
      "pointer",
    ],
    "result": "f32",
  },
  "tguiWidgetRenderer_setFont": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getFont": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_setTextSize": {
    "parameters": [
      "pointer",
      "u16",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getTextSize": {
    "parameters": [
      "pointer",
    ],
    "result": "u16",
  },
  "tguiWidgetRenderer_setTransparentTexture": {
    "parameters": [
      "pointer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getTransparentTexture": {
    "parameters": [
      "pointer",
    ],
    "result": "i16",
  },
  "tguiWidgetRenderer_setData": {
    "parameters": [
      "pointer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_getData": {
    "parameters": [
      "pointer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_setPropertyBool": {
    "parameters": [
      "pointer",
      "buffer",
      "i16",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyFont": {
    "parameters": [
      "pointer",
      "buffer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyColor": {
    "parameters": [
      "pointer",
      "buffer",
      {
        "struct": [
          "u8",
          "u8",
          "u8",
          "u8",
          "i16",
        ],
      },
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyString": {
    "parameters": [
      "pointer",
      "buffer",
      "buffer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyNumber": {
    "parameters": [
      "pointer",
      "buffer",
      "f32",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyOutline": {
    "parameters": [
      "pointer",
      "buffer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyTexture": {
    "parameters": [
      "pointer",
      "buffer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyTextStyle": {
    "parameters": [
      "pointer",
      "buffer",
      "u32",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_setPropertyRendererData": {
    "parameters": [
      "pointer",
      "buffer",
      "pointer",
    ],
    "result": "void",
  },
  "tguiWidgetRenderer_hasProperty": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiWidgetRenderer_getPropertyBool": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "i16",
  },
  "tguiWidgetRenderer_getPropertyFont": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_getPropertyColor": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": {
      "struct": [
        "u8",
        "u8",
        "u8",
        "u8",
        "i16",
      ],
    },
  },
  "tguiWidgetRenderer_getPropertyString": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "buffer",
  },
  "tguiWidgetRenderer_getPropertyNumber": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "f32",
  },
  "tguiWidgetRenderer_getPropertyOutline": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_getPropertyTexture": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_getPropertyTextStyle": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "u32",
  },
  "tguiWidgetRenderer_getPropertyRendererData": {
    "parameters": [
      "pointer",
      "buffer",
    ],
    "result": "pointer",
  },
  "tguiWidgetRenderer_destroy": {
    "parameters": [
      "pointer",
    ],
    "result": "void",
  },
});
