type TypeMap = Record<string, Deno.NativeResultType | StructMeta[]>;
export type StructMeta = {
  name: string;
  type: string;
  nativeType: Deno.NativeType | StructMeta[];
};

// prettier-ignore
export const TYPE_MAP: TypeMap = {
  "char": "i8",
  "const char *": "buffer",
  "const sfEvent *": "pointer",
  "const size_t *": "pointer",
  "const tguiFileDialogFilter *": "pointer",
  "const tguiFloatRect *": "pointer",
  "const tguiFont *": "pointer",
  "const tguiGui *": "pointer",
  "const tguiIntRect *": "pointer",
  "const tguiLayout *": "pointer",
  "const tguiLayout2d *": "pointer",
  "const tguiOutline *": "pointer",
  "const tguiRenderStates *": "pointer",
  "const tguiRenderer *": "pointer",
  "const tguiRendererData *": "pointer",
  "const tguiSprite *": "pointer",
  "const tguiText *": "pointer",
  "const tguiTexture *": "pointer",
  "const tguiTheme *": "pointer",
  "const tguiTimer *": "pointer",
  "const tguiTreeViewConstNode *": "pointer",
  "const tguiUIntRect *": "pointer",
  "const tguiUint8 *": "pointer",
  "const tguiUtf32 *": "pointer",
  "const tguiVertex *": "pointer",
  "const tguiWidget *": "pointer",
  "const uint8_t *": "buffer",
  "const unsigned int *": "pointer",
  "double": "f64",
  "float": "f32",
  "int": "i32",
  "long long": "i64",
  "long long int": "i64",
  "sfBool": "i32",
  "sfColor": [
    {
      name: "r",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "g",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "b",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "a",
      type: "unsigned char",
      nativeType: "u8",
    }
  ],
  "sfRenderWindow *": "pointer",
  "short int": "i16",
  "signed char": "i8",
  "signed int": "i32",
  "size_t *": "pointer",
  "size_t": "usize",
  "tguiAutoLayout": "i16",
  "tguiBackendRenderTarget *": "pointer",
  "tguiBool": "i16",
  "tguiChar32": "u32",
  "tguiChildWindowCloseBehavior": "i16",
  "tguiColor": [
    {
      name: "r",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "g",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "b",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "a",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "isSet",
      type: "int",
      nativeType: "i16",
    },
  ],
  "tguiComboBoxExpandDirection": "i16",
  "tguiCursorType": "i16",
  "tguiDuration": [
    {
      name: "nanoseconds",
      type: "long long",
      nativeType: "i64",
    },
  ],
  "tguiFileDialogFilter **": "pointer",
  "tguiFileDialogFilter *": "pointer",
  "tguiFloatRect": [
    {
      name: "left",
      type: "float",
      nativeType: "f32",
    },
    {
      name: "top",
      type: "float",
      nativeType: "f32",
    },
    {
      name: "width",
      type: "float",
      nativeType: "f32",
    },
    {
      name: "height",
      type: "float",
      nativeType: "f32",
    },
  ],
  "tguiFont *": "pointer",
  "tguiFontGlyph": [
    {
      name: "advance",
      type: "float",
      nativeType: "f32",
    },
    {
      name: "bounds",
      type: "tguiFloatRect",
      nativeType: [
        {
          name: "left",
          type: "float",
          nativeType: "f32",
        },
        {
          name: "top",
          type: "float",
          nativeType: "f32",
        },
        {
          name: "width",
          type: "float",
          nativeType: "f32",
        },
        {
          name: "height",
          type: "float",
          nativeType: "f32",
        },
      ],
    },
    {
      name: "textureRect",
      type: "tguiUIntRect",
      nativeType: [
        {
          name: "left",
          type: "unsigned int",
          nativeType: "u16",
        },
        {
          name: "top",
          type: "unsigned int",
          nativeType: "u16",
        },
        {
          name: "width",
          type: "unsigned int",
          nativeType: "u16",
        },
        {
          name: "height",
          type: "unsigned int",
          nativeType: "u16",
        },
      ],
    },
  ],
  "tguiGridAlignment": "i16",
  "tguiGridWidgetLocation *": "pointer",
  "tguiGui *": "pointer",
  "tguiHorizontalAlignment": "i16",
  "tguiInt32": "i32",
  "tguiInt64": "i64",
  "tguiLayout *": "pointer",
  "tguiLayout2d *": "pointer",
  "tguiMenuBarMenuList *": "pointer",
  "tguiOrientation": "i16",
  "tguiOutline *": "pointer",
  "tguiProgressBarFillDirection": "i16",
  "tguiRenderer *": "pointer",
  "tguiRendererData *": "pointer",
  "tguiScrollbarPolicy": "i16",
  "tguiShowEffectType": "i16",
  "tguiSprite *": "pointer",
  "tguiSpriteScalingType": "i16",
  "tguiTabContainerTabAlign": "i16",
  "tguiText *": "pointer",
  "tguiTexture *": "pointer",
  "tguiTheme *": "pointer",
  "tguiTimer *": "pointer",
  "tguiTreeViewConstNode **": "pointer",
  "tguiTreeViewConstNode *": "pointer",
  "tguiUIntRect": [
    {
      name: "left",
      type: "unsigned int",
      nativeType: "u16",
    },
    {
      name: "top",
      type: "unsigned int",
      nativeType: "u16",
    },
    {
      name: "width",
      type: "unsigned int",
      nativeType: "u16",
    },
    {
      name: "height",
      type: "unsigned int",
      nativeType: "u16",
    },
  ],
  "tguiUint32": "u32",
  "tguiUint8 *": "buffer",
  "tguiUint8": "u8",
  "tguiUtf32": "buffer",
  "tguiVector2f": [
    {
      name: "x",
      type: "float",
      nativeType: "f32",
    },
    {
      name: "y",
      type: "float",
      nativeType: "f32",
    },
  ],
  "tguiVector2i": [
    {
      name: "x",
      type: "int",
      nativeType: "i16",
    },
    {
      name: "y",
      type: "int",
      nativeType: "i16",
    },
  ],
  "tguiVector2u": [
    {
      name: "x",
      type: "unsigned int",
      nativeType: "u16",
    },
    {
      name: "y",
      type: "unsigned int",
      nativeType: "u16",
    },
  ],
  "tguiVertex": [
    {
      name: "position",
      type: "tguiVector2f",
      nativeType: [
        {
          name: "x",
          type: "float",
          nativeType: "f32",
        },
        {
          name: "y",
          type: "float",
          nativeType: "f32",
        },
      ],
    },
    {
      name: "color",
      type: "tguiVertexColor",
      nativeType: [
        {
          name: "r",
          type: "unsigned char",
          nativeType: "u8",
        },
        {
          name: "g",
          type: "unsigned char",
          nativeType: "u8",
        },
        {
          name: "b",
          type: "unsigned char",
          nativeType: "u8",
        },
        {
          name: "a",
          type: "unsigned char",
          nativeType: "u8",
        },
      ],
    },
    {
      name: "texCoords",
      type: "tguiVector2f",
      nativeType: [
        {
          name: "x",
          type: "float",
          nativeType: "f32",
        },
        {
          name: "y",
          type: "float",
          nativeType: "f32",
        },
      ],
    },
  ],
  "tguiVertexColor": [
    {
      name: "r",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "g",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "b",
      type: "unsigned char",
      nativeType: "u8",
    },
    {
      name: "a",
      type: "unsigned char",
      nativeType: "u8",
    },
  ],
  "tguiVerticalAlignment": "i16",
  "tguiWidget **": "pointer",
  "tguiWidget *": "pointer",
  "unsigned char": "u8",
  "unsigned int": "u32",
  "unsigned long long int": "u64",
  "unsigned short int": "u16",
  "void": "void",
} as const;
