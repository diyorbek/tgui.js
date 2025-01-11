export const CSFML_SYMBOLS = {
  sfRenderWindow_create: {
    parameters: [{ struct: ["u32", "u32", "u32"] }, "buffer", "u8"],
    result: "pointer",
  },
  sfRenderWindow_isOpen: {
    parameters: ["pointer"],
    result: "bool",
  },
  sfRenderWindow_display: {
    parameters: ["pointer"],
    result: "void",
  },
  sfRenderWindow_pollEvent: {
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  sfRenderWindow_close: {
    parameters: ["pointer"],
    result: "void",
  },
  sfRenderWindow_destroy: {
    parameters: ["pointer"],
    result: "void",
  },
  sfRenderWindow_clear: {
    parameters: ["pointer", { struct: ["u8", "u8", "u8", "u8"] }],
    result: "void",
  },
  sfEvent_create: {
    parameters: [],
    result: "pointer",
  },
  sfEvent_destroy: {
    parameters: ["pointer"],
    result: "void",
  },
} as const;
