import { accessLib, type ResultType } from "./ctgui.ts";
import {
  type NumberLikeType,
  serializeStruct,
  type StructDef,
} from "./utils/structToBuffer.ts";

export class Widget {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_copy(const tguiWidget * other);
   * ```
   *
   * @param other `const Widget *`
   * @returns `Widget *`
   */
  constructor(other: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiWidget_copy(other);
  }

  /**
   * @original ```c
   * void tguiWidget_destroy(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `void`
   */
  destroy(): ResultType<"tguiWidget_destroy"> {
    return accessLib().symbols.tguiWidget_destroy(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setAutoLayout(const tguiWidget * widget, tguiAutoLayout layout);
   * ```
   *
   * @param widget `const Widget *`
   * @param layout `AutoLayout`
   * @returns `void`
   */
  setAutoLayout(layout: number): ResultType<"tguiWidget_setAutoLayout"> {
    return accessLib().symbols.tguiWidget_setAutoLayout(this.pointer, layout);
  }

  /**
   * @original ```c
   * tguiAutoLayout tguiWidget_getAutoLayout(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `AutoLayout`
   */
  getAutoLayout(): ResultType<"tguiWidget_getAutoLayout"> {
    return accessLib().symbols.tguiWidget_getAutoLayout(this.pointer);
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalConnect(tguiWidget * widget, const char * signalName, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(void)`
   * @returns `unsigned int`
   */
  signalConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalConnect"> {
    return accessLib().symbols.tguiWidget_signalConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalConnectEx(tguiWidget * widget, const char * signalName, void (*)(tguiWidget *, tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Widget *, tguiUtf32)`
   * @returns `unsigned int`
   */
  signalConnectEx(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalConnectEx"> {
    return accessLib().symbols.tguiWidget_signalConnectEx(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalIntConnect(tguiWidget * widget, const char * signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  signalIntConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalIntConnect"> {
    return accessLib().symbols.tguiWidget_signalIntConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalUIntConnect(tguiWidget * widget, const char * signalName, void (*)(unsigned int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(unsigned int)`
   * @returns `unsigned int`
   */
  signalUIntConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalUIntConnect"> {
    return accessLib().symbols.tguiWidget_signalUIntConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalBoolConnect(tguiWidget * widget, const char * signalName, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Bool)`
   * @returns `unsigned int`
   */
  signalBoolConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalBoolConnect"> {
    return accessLib().symbols.tguiWidget_signalBoolConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFloatConnect(tguiWidget * widget, const char * signalName, void (*)(float) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(float)`
   * @returns `unsigned int`
   */
  signalFloatConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalFloatConnect"> {
    return accessLib().symbols.tguiWidget_signalFloatConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalColorConnect(tguiWidget * widget, const char * signalName, void (*)(tguiColor) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Color)`
   * @returns `unsigned int`
   */
  signalColorConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalColorConnect"> {
    return accessLib().symbols.tguiWidget_signalColorConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalStringConnect(tguiWidget * widget, const char * signalName, void (*)(tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Utf32)`
   * @returns `unsigned int`
   */
  signalStringConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalStringConnect"> {
    return accessLib().symbols.tguiWidget_signalStringConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalVector2fConnect(tguiWidget * widget, const char * signalName, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Vector2f)`
   * @returns `unsigned int`
   */
  signalVector2fConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalVector2fConnect"> {
    return accessLib().symbols.tguiWidget_signalVector2fConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFloatRectConnect(tguiWidget * widget, const char * signalName, void (*)(tguiFloatRect) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(FloatRect)`
   * @returns `unsigned int`
   */
  signalFloatRectConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalFloatRectConnect"> {
    return accessLib().symbols.tguiWidget_signalFloatRectConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalRangeConnect(tguiWidget * widget, const char * signalName, void (*)(float, float) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(float, float)`
   * @returns `unsigned int`
   */
  signalRangeConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalRangeConnect"> {
    return accessLib().symbols.tguiWidget_signalRangeConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalChildWindowConnect(tguiWidget * widget, const char * signalName, void (*)(tguiWidget *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(Widget *)`
   * @returns `unsigned int`
   */
  signalChildWindowConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalChildWindowConnect"> {
    return accessLib().symbols.tguiWidget_signalChildWindowConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalItemConnect(tguiWidget * widget, const char * signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  signalItemConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalItemConnect"> {
    return accessLib().symbols.tguiWidget_signalItemConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalPanelListBoxItemConnect(tguiWidget * widget, const char * signalName, void (*)(int) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(int)`
   * @returns `unsigned int`
   */
  signalPanelListBoxItemConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalPanelListBoxItemConnect"> {
    return accessLib().symbols.tguiWidget_signalPanelListBoxItemConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalFileDialogPathsConnect(tguiWidget * widget, const char * signalName, void (*)(size_t, const tguiUtf32 *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(size_t, const Utf32 *)`
   * @returns `unsigned int`
   */
  signalFileDialogPathsConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalFileDialogPathsConnect"> {
    return accessLib().symbols.tguiWidget_signalFileDialogPathsConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalShowEffectConnect(tguiWidget * widget, const char * signalName, void (*)(tguiShowEffectType, tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(ShowEffectType, tguiBool)`
   * @returns `unsigned int`
   */
  signalShowEffectConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalShowEffectConnect"> {
    return accessLib().symbols.tguiWidget_signalShowEffectConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalAnimationTypeConnect(tguiWidget * widget, const char * signalName, void (*)(tguiAnimationType) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(AnimationType)`
   * @returns `unsigned int`
   */
  signalAnimationTypeConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalAnimationTypeConnect"> {
    return accessLib().symbols.tguiWidget_signalAnimationTypeConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_signalItemHierarchyConnect(tguiWidget * widget, const char * signalName, void (*)(size_t, const tguiUtf32 *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param function `void (*)(size_t, const Utf32 *)`
   * @returns `unsigned int`
   */
  signalItemHierarchyConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_signalItemHierarchyConnect"> {
    return accessLib().symbols.tguiWidget_signalItemHierarchyConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_signalDisconnect(tguiWidget * widget, const char * signalName, unsigned int id);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param id `unsigned int`
   * @returns `Bool`
   */
  signalDisconnect(
    signalName: BufferSource,
    id: number,
  ): ResultType<"tguiWidget_signalDisconnect"> {
    return accessLib().symbols.tguiWidget_signalDisconnect(
      this.pointer,
      signalName,
      id,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_signalDisconnectAll(tguiWidget * widget, const char * signalName);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @returns `void`
   */
  signalDisconnectAll(
    signalName: BufferSource,
  ): ResultType<"tguiWidget_signalDisconnectAll"> {
    return accessLib().symbols.tguiWidget_signalDisconnectAll(
      this.pointer,
      signalName,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_setSignalEnabled(tguiWidget * widget, const char * signalName, tguiBool enabled);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @param enabled `Bool`
   * @returns `Bool`
   */
  setSignalEnabled(
    signalName: BufferSource,
    enabled: number,
  ): ResultType<"tguiWidget_setSignalEnabled"> {
    return accessLib().symbols.tguiWidget_setSignalEnabled(
      this.pointer,
      signalName,
      enabled,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isSignalEnabled(tguiWidget * widget, const char * signalName);
   * ```
   *
   * @param widget `Widget *`
   * @param signalName `const char *`
   * @returns `Bool`
   */
  isSignalEnabled(
    signalName: BufferSource,
  ): ResultType<"tguiWidget_isSignalEnabled"> {
    return accessLib().symbols.tguiWidget_isSignalEnabled(
      this.pointer,
      signalName,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_setRenderer(tguiWidget * widget, tguiRendererData * renderer);
   * ```
   *
   * @param widget `Widget *`
   * @param renderer `RendererData *`
   * @returns `Bool`
   */
  setRenderer(
    renderer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setRenderer"> {
    return accessLib().symbols.tguiWidget_setRenderer(this.pointer, renderer);
  }

  /**
   * @original ```c
   * tguiRenderer * tguiWidget_getRenderer(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Renderer *`
   */
  getRenderer(): ResultType<"tguiWidget_getRenderer"> {
    return accessLib().symbols.tguiWidget_getRenderer(this.pointer);
  }

  /**
   * @original ```c
   * tguiRenderer * tguiWidget_getSharedRenderer(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Renderer *`
   */
  getSharedRenderer(): ResultType<"tguiWidget_getSharedRenderer"> {
    return accessLib().symbols.tguiWidget_getSharedRenderer(this.pointer);
  }

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
  showWithEffect(
    type: number,
    duration: Duration,
  ): ResultType<"tguiWidget_showWithEffect"> {
    return accessLib().symbols.tguiWidget_showWithEffect(
      this.pointer,
      type,
      duration.buffer,
    );
  }

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
  hideWithEffect(
    type: number,
    duration: Duration,
  ): ResultType<"tguiWidget_hideWithEffect"> {
    return accessLib().symbols.tguiWidget_hideWithEffect(
      this.pointer,
      type,
      duration.buffer,
    );
  }

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
  moveWithAnimation(
    position: Vector2f,
    duration: Duration,
  ): ResultType<"tguiWidget_moveWithAnimation"> {
    return accessLib().symbols.tguiWidget_moveWithAnimation(
      this.pointer,
      position.buffer,
      duration.buffer,
    );
  }

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
  resizeWithAnimation(
    size: Vector2f,
    duration: Duration,
  ): ResultType<"tguiWidget_resizeWithAnimation"> {
    return accessLib().symbols.tguiWidget_resizeWithAnimation(
      this.pointer,
      size.buffer,
      duration.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_setToolTip(tguiWidget * widget, tguiWidget * toolTip);
   * ```
   *
   * @param widget `Widget *`
   * @param toolTip `Widget *`
   * @returns `void`
   */
  setToolTip(
    toolTip: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setToolTip"> {
    return accessLib().symbols.tguiWidget_setToolTip(this.pointer, toolTip);
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getToolTip(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  getToolTip(): ResultType<"tguiWidget_getToolTip"> {
    return accessLib().symbols.tguiWidget_getToolTip(this.pointer);
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getParent(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  getParent(): ResultType<"tguiWidget_getParent"> {
    return accessLib().symbols.tguiWidget_getParent(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_updateTime(tguiWidget * widget, tguiDuration duration);
   * ```
   *
   * @param widget `Widget *`
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  updateTime(duration: Duration): ResultType<"tguiWidget_updateTime"> {
    return accessLib().symbols.tguiWidget_updateTime(
      this.pointer,
      duration.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_setPosition(tguiWidget * thisWidget, tguiVector2f position);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param position `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setPosition(position: Vector2f): ResultType<"tguiWidget_setPosition"> {
    return accessLib().symbols.tguiWidget_setPosition(
      this.pointer,
      position.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_setPositionFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  setPositionFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setPositionFromLayout"> {
    return accessLib().symbols.tguiWidget_setPositionFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getPosition(): ResultType<"tguiWidget_getPosition"> {
    return accessLib().symbols.tguiWidget_getPosition(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getAbsolutePosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getAbsolutePosition(): ResultType<"tguiWidget_getAbsolutePosition"> {
    return accessLib().symbols.tguiWidget_getAbsolutePosition(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getAbsolutePositionWithOffset(const tguiWidget * thisWidget, tguiVector2f offset);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param offset `Vector2f { x: float; y: float }`
   * @returns `Vector2f { x: float; y: float }`
   */
  getAbsolutePositionWithOffset(
    offset: Vector2f,
  ): ResultType<"tguiWidget_getAbsolutePositionWithOffset"> {
    return accessLib().symbols.tguiWidget_getAbsolutePositionWithOffset(
      this.pointer,
      offset.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getWidgetOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getWidgetOffset(): ResultType<"tguiWidget_getWidgetOffset"> {
    return accessLib().symbols.tguiWidget_getWidgetOffset(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setWidth(tguiWidget * thisWidget, float width);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param width `float`
   * @returns `void`
   */
  setWidth(width: number): ResultType<"tguiWidget_setWidth"> {
    return accessLib().symbols.tguiWidget_setWidth(this.pointer, width);
  }

  /**
   * @original ```c
   * void tguiWidget_setWidthFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  setWidthFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setWidthFromLayout"> {
    return accessLib().symbols.tguiWidget_setWidthFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_setHeight(tguiWidget * thisWidget, float height);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param height `float`
   * @returns `void`
   */
  setHeight(height: number): ResultType<"tguiWidget_setHeight"> {
    return accessLib().symbols.tguiWidget_setHeight(this.pointer, height);
  }

  /**
   * @original ```c
   * void tguiWidget_setHeightFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  setHeightFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setHeightFromLayout"> {
    return accessLib().symbols.tguiWidget_setHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * void tguiWidget_setSize(tguiWidget * thisWidget, tguiVector2f size);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param size `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setSize(size: Vector2f): ResultType<"tguiWidget_setSize"> {
    return accessLib().symbols.tguiWidget_setSize(this.pointer, size.buffer);
  }

  /**
   * @original ```c
   * void tguiWidget_setSizeFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  setSizeFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setSizeFromLayout"> {
    return accessLib().symbols.tguiWidget_setSizeFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getSize(): ResultType<"tguiWidget_getSize"> {
    return accessLib().symbols.tguiWidget_getSize(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getFullSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getFullSize(): ResultType<"tguiWidget_getFullSize"> {
    return accessLib().symbols.tguiWidget_getFullSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setOrigin(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setOrigin(value: Vector2f): ResultType<"tguiWidget_setOrigin"> {
    return accessLib().symbols.tguiWidget_setOrigin(this.pointer, value.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getOrigin(): ResultType<"tguiWidget_getOrigin"> {
    return accessLib().symbols.tguiWidget_getOrigin(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setScale(tguiWidget * thisWidget, tguiVector2f origin);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param origin `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setScale(origin: Vector2f): ResultType<"tguiWidget_setScale"> {
    return accessLib().symbols.tguiWidget_setScale(this.pointer, origin.buffer);
  }

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
  setScaleWithOrigin(
    scale: Vector2f,
    origin: Vector2f,
  ): ResultType<"tguiWidget_setScaleWithOrigin"> {
    return accessLib().symbols.tguiWidget_setScaleWithOrigin(
      this.pointer,
      scale.buffer,
      origin.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getScale(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getScale(): ResultType<"tguiWidget_getScale"> {
    return accessLib().symbols.tguiWidget_getScale(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getScaleOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getScaleOrigin(): ResultType<"tguiWidget_getScaleOrigin"> {
    return accessLib().symbols.tguiWidget_getScaleOrigin(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setRotation(tguiWidget * thisWidget, float angle);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param angle `float`
   * @returns `void`
   */
  setRotation(angle: number): ResultType<"tguiWidget_setRotation"> {
    return accessLib().symbols.tguiWidget_setRotation(this.pointer, angle);
  }

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
  setRotationWithOrigin(
    angle: number,
    origin: Vector2f,
  ): ResultType<"tguiWidget_setRotationWithOrigin"> {
    return accessLib().symbols.tguiWidget_setRotationWithOrigin(
      this.pointer,
      angle,
      origin.buffer,
    );
  }

  /**
   * @original ```c
   * float tguiWidget_getRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getRotation(): ResultType<"tguiWidget_getRotation"> {
    return accessLib().symbols.tguiWidget_getRotation(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiWidget_getRotationOrigin(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getRotationOrigin(): ResultType<"tguiWidget_getRotationOrigin"> {
    return accessLib().symbols.tguiWidget_getRotationOrigin(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setVisible(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setVisible(value: number): ResultType<"tguiWidget_setVisible"> {
    return accessLib().symbols.tguiWidget_setVisible(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isVisible(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isVisible(): ResultType<"tguiWidget_isVisible"> {
    return accessLib().symbols.tguiWidget_isVisible(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setEnabled(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setEnabled(value: number): ResultType<"tguiWidget_setEnabled"> {
    return accessLib().symbols.tguiWidget_setEnabled(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isEnabled(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isEnabled(): ResultType<"tguiWidget_isEnabled"> {
    return accessLib().symbols.tguiWidget_isEnabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setFocused(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setFocused(value: number): ResultType<"tguiWidget_setFocused"> {
    return accessLib().symbols.tguiWidget_setFocused(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isFocused(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isFocused(): ResultType<"tguiWidget_isFocused"> {
    return accessLib().symbols.tguiWidget_isFocused(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setFocusable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setFocusable(value: number): ResultType<"tguiWidget_setFocusable"> {
    return accessLib().symbols.tguiWidget_setFocusable(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isFocusable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isFocusable(): ResultType<"tguiWidget_isFocusable"> {
    return accessLib().symbols.tguiWidget_isFocusable(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getWidgetType(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getWidgetType(): ResultType<"tguiWidget_getWidgetType"> {
    return accessLib().symbols.tguiWidget_getWidgetType(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_moveToFront(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  moveToFront(): ResultType<"tguiWidget_moveToFront"> {
    return accessLib().symbols.tguiWidget_moveToFront(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_moveToBack(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  moveToBack(): ResultType<"tguiWidget_moveToBack"> {
    return accessLib().symbols.tguiWidget_moveToBack(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setUserData(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setUserData(value: BufferSource): ResultType<"tguiWidget_setUserData"> {
    return accessLib().symbols.tguiWidget_setUserData(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getUserData(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getUserData(): ResultType<"tguiWidget_getUserData"> {
    return accessLib().symbols.tguiWidget_getUserData(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_hasUserData(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  hasUserData(): ResultType<"tguiWidget_hasUserData"> {
    return accessLib().symbols.tguiWidget_hasUserData(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isAnimationPlaying(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isAnimationPlaying(): ResultType<"tguiWidget_isAnimationPlaying"> {
    return accessLib().symbols.tguiWidget_isAnimationPlaying(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setTextSize(value: number): ResultType<"tguiWidget_setTextSize"> {
    return accessLib().symbols.tguiWidget_setTextSize(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiWidget_getTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getTextSize(): ResultType<"tguiWidget_getTextSize"> {
    return accessLib().symbols.tguiWidget_getTextSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setWidgetName(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setWidgetName(value: BufferSource): ResultType<"tguiWidget_setWidgetName"> {
    return accessLib().symbols.tguiWidget_setWidgetName(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiWidget_getWidgetName(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getWidgetName(): ResultType<"tguiWidget_getWidgetName"> {
    return accessLib().symbols.tguiWidget_getWidgetName(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setMouseCursor(tguiWidget * thisWidget, tguiCursorType value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `CursorType`
   * @returns `void`
   */
  setMouseCursor(value: number): ResultType<"tguiWidget_setMouseCursor"> {
    return accessLib().symbols.tguiWidget_setMouseCursor(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiCursorType tguiWidget_getMouseCursor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `CursorType`
   */
  getMouseCursor(): ResultType<"tguiWidget_getMouseCursor"> {
    return accessLib().symbols.tguiWidget_getMouseCursor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setNavigationUp(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  setNavigationUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationUp"> {
    return accessLib().symbols.tguiWidget_setNavigationUp(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationUp(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  getNavigationUp(): ResultType<"tguiWidget_getNavigationUp"> {
    return accessLib().symbols.tguiWidget_getNavigationUp(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setNavigationDown(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  setNavigationDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationDown"> {
    return accessLib().symbols.tguiWidget_setNavigationDown(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  getNavigationDown(): ResultType<"tguiWidget_getNavigationDown"> {
    return accessLib().symbols.tguiWidget_getNavigationDown(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setNavigationLeft(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  setNavigationLeft(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationLeft"> {
    return accessLib().symbols.tguiWidget_setNavigationLeft(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationLeft(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  getNavigationLeft(): ResultType<"tguiWidget_getNavigationLeft"> {
    return accessLib().symbols.tguiWidget_getNavigationLeft(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setNavigationRight(tguiWidget * thisWidget, tguiWidget * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Widget *`
   * @returns `void`
   */
  setNavigationRight(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationRight"> {
    return accessLib().symbols.tguiWidget_setNavigationRight(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiWidget * tguiWidget_getNavigationRight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Widget *`
   */
  getNavigationRight(): ResultType<"tguiWidget_getNavigationRight"> {
    return accessLib().symbols.tguiWidget_getNavigationRight(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setIgnoreMouseEvents(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setIgnoreMouseEvents(
    value: number,
  ): ResultType<"tguiWidget_setIgnoreMouseEvents"> {
    return accessLib().symbols.tguiWidget_setIgnoreMouseEvents(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_getIgnoreMouseEvents(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getIgnoreMouseEvents(): ResultType<"tguiWidget_getIgnoreMouseEvents"> {
    return accessLib().symbols.tguiWidget_getIgnoreMouseEvents(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_finishAllAnimations(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  finishAllAnimations(): ResultType<"tguiWidget_finishAllAnimations"> {
    return accessLib().symbols.tguiWidget_finishAllAnimations(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidget_setAutoLayoutUpdateEnabled(tguiWidget * thisWidget, tguiBool enabled);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param enabled `Bool`
   * @returns `void`
   */
  setAutoLayoutUpdateEnabled(
    enabled: number,
  ): ResultType<"tguiWidget_setAutoLayoutUpdateEnabled"> {
    return accessLib().symbols.tguiWidget_setAutoLayoutUpdateEnabled(
      this.pointer,
      enabled,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isMouseDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isMouseDown(): ResultType<"tguiWidget_isMouseDown"> {
    return accessLib().symbols.tguiWidget_isMouseDown(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiWidget_isMouseOnWidget(const tguiWidget * thisWidget, tguiVector2f pos);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  isMouseOnWidget(pos: Vector2f): ResultType<"tguiWidget_isMouseOnWidget"> {
    return accessLib().symbols.tguiWidget_isMouseOnWidget(
      this.pointer,
      pos.buffer,
    );
  }
}

export class ClickableWidget extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiClickableWidget_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiClickableWidget_create());
  }
}

export class Container extends Widget {
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
  loadWidgetsFromFile(
    container: Deno.PointerValue<unknown>,
    filename: BufferSource,
    replaceExisting: number,
  ): ResultType<"tguiContainer_loadWidgetsFromFile"> {
    return accessLib().symbols.tguiContainer_loadWidgetsFromFile(
      container,
      filename,
      replaceExisting,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiContainer_saveWidgetsToFile(tguiWidget * container, const char * filename);
   * ```
   *
   * @param container `Widget *`
   * @param filename `const char *`
   * @returns `Bool`
   */
  saveWidgetsToFile(
    container: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiContainer_saveWidgetsToFile"> {
    return accessLib().symbols.tguiContainer_saveWidgetsToFile(
      container,
      filename,
    );
  }

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
  add(
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiContainer_add"> {
    return accessLib().symbols.tguiContainer_add(
      this.pointer,
      widget,
      widgetName,
    );
  }

  /**
   * @original ```c
   * tguiWidget * tguiContainer_get(const tguiWidget * thisContainer, tguiUtf32 widgetName);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param widgetName `Utf32`
   * @returns `Widget *`
   */
  get(widgetName: BufferSource): ResultType<"tguiContainer_get"> {
    return accessLib().symbols.tguiContainer_get(this.pointer, widgetName);
  }

  /**
   * @original ```c
   * tguiWidget ** tguiContainer_getWidgets(const tguiWidget * thisContainer, size_t * returnCount);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param returnCount `size_t *`
   * @returns `Widget **`
   */
  getWidgets(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_getWidgets"> {
    return accessLib().symbols.tguiContainer_getWidgets(
      this.pointer,
      returnCount,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiContainer_remove(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `Bool`
   */
  remove(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_remove"> {
    return accessLib().symbols.tguiContainer_remove(this.pointer, widget);
  }

  /**
   * @original ```c
   * void tguiContainer_removeAllWidgets(tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `Widget *`
   * @returns `void`
   */
  removeAllWidgets(): ResultType<"tguiContainer_removeAllWidgets"> {
    return accessLib().symbols.tguiContainer_removeAllWidgets(this.pointer);
  }

  /**
   * @original ```c
   * void tguiContainer_moveWidgetToFront(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `void`
   */
  moveWidgetToFront(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetToFront"> {
    return accessLib().symbols.tguiContainer_moveWidgetToFront(
      this.pointer,
      widget,
    );
  }

  /**
   * @original ```c
   * void tguiContainer_moveWidgetToBack(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `void`
   */
  moveWidgetToBack(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetToBack"> {
    return accessLib().symbols.tguiContainer_moveWidgetToBack(
      this.pointer,
      widget,
    );
  }

  /**
   * @original ```c
   * size_t tguiContainer_moveWidgetForward(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  moveWidgetForward(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetForward"> {
    return accessLib().symbols.tguiContainer_moveWidgetForward(
      this.pointer,
      widget,
    );
  }

  /**
   * @original ```c
   * size_t tguiContainer_moveWidgetBackward(tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  moveWidgetBackward(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetBackward"> {
    return accessLib().symbols.tguiContainer_moveWidgetBackward(
      this.pointer,
      widget,
    );
  }

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
  setWidgetIndex(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
  ): ResultType<"tguiContainer_setWidgetIndex"> {
    return accessLib().symbols.tguiContainer_setWidgetIndex(
      this.pointer,
      widget,
      index,
    );
  }

  /**
   * @original ```c
   * int tguiContainer_getWidgetIndex(const tguiWidget * thisContainer, tguiWidget * widget);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @param widget `Widget *`
   * @returns `int`
   */
  getWidgetIndex(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_getWidgetIndex"> {
    return accessLib().symbols.tguiContainer_getWidgetIndex(
      this.pointer,
      widget,
    );
  }

  /**
   * @original ```c
   * tguiWidget * tguiContainer_getFocusedChild(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Widget *`
   */
  getFocusedChild(): ResultType<"tguiContainer_getFocusedChild"> {
    return accessLib().symbols.tguiContainer_getFocusedChild(this.pointer);
  }

  /**
   * @original ```c
   * tguiWidget * tguiContainer_getFocusedLeaf(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Widget *`
   */
  getFocusedLeaf(): ResultType<"tguiContainer_getFocusedLeaf"> {
    return accessLib().symbols.tguiContainer_getFocusedLeaf(this.pointer);
  }

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
  getWidgetAtPos(
    pos: Vector2f,
    recursive: number,
  ): ResultType<"tguiContainer_getWidgetAtPos"> {
    return accessLib().symbols.tguiContainer_getWidgetAtPos(
      this.pointer,
      pos.buffer,
      recursive,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiContainer_focusNextWidget(tguiWidget * thisContainer, tguiBool recursive);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  focusNextWidget(
    recursive: number,
  ): ResultType<"tguiContainer_focusNextWidget"> {
    return accessLib().symbols.tguiContainer_focusNextWidget(
      this.pointer,
      recursive,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiContainer_focusPreviousWidget(tguiWidget * thisContainer, tguiBool recursive);
   * ```
   *
   * @param thisContainer `Widget *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  focusPreviousWidget(
    recursive: number,
  ): ResultType<"tguiContainer_focusPreviousWidget"> {
    return accessLib().symbols.tguiContainer_focusPreviousWidget(
      this.pointer,
      recursive,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiContainer_getInnerSize(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getInnerSize(): ResultType<"tguiContainer_getInnerSize"> {
    return accessLib().symbols.tguiContainer_getInnerSize(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiContainer_getChildWidgetsOffset(const tguiWidget * thisContainer);
   * ```
   *
   * @param thisContainer `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getChildWidgetsOffset(): ResultType<"tguiContainer_getChildWidgetsOffset"> {
    return accessLib().symbols.tguiContainer_getChildWidgetsOffset(
      this.pointer,
    );
  }
}

export class ChildWindow extends Container {
  /**
   * @original ```c
   * tguiWidget * tguiChildWindow_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiChildWindow_create());
  }

  /**
   * @original ```c
   * void tguiChildWindow_setClientSize(tguiWidget * thisWidget, tguiVector2f size);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param size `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setClientSize(size: Vector2f): ResultType<"tguiChildWindow_setClientSize"> {
    return accessLib().symbols.tguiChildWindow_setClientSize(
      this.pointer,
      size.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindow_setClientSizeFromLayout(tguiWidget * thisWidget, const tguiLayout2d * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout2d *`
   * @returns `void`
   */
  setClientSizeFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindow_setClientSizeFromLayout"> {
    return accessLib().symbols.tguiChildWindow_setClientSizeFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getClientSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getClientSize(): ResultType<"tguiChildWindow_getClientSize"> {
    return accessLib().symbols.tguiChildWindow_getClientSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setMaximumSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setMaximumSize(
    value: Vector2f,
  ): ResultType<"tguiChildWindow_setMaximumSize"> {
    return accessLib().symbols.tguiChildWindow_setMaximumSize(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getMaximumSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getMaximumSize(): ResultType<"tguiChildWindow_getMaximumSize"> {
    return accessLib().symbols.tguiChildWindow_getMaximumSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setMinimumSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setMinimumSize(
    value: Vector2f,
  ): ResultType<"tguiChildWindow_setMinimumSize"> {
    return accessLib().symbols.tguiChildWindow_setMinimumSize(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiChildWindow_getMinimumSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getMinimumSize(): ResultType<"tguiChildWindow_getMinimumSize"> {
    return accessLib().symbols.tguiChildWindow_getMinimumSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setTitle(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setTitle(value: BufferSource): ResultType<"tguiChildWindow_setTitle"> {
    return accessLib().symbols.tguiChildWindow_setTitle(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiChildWindow_getTitle(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getTitle(): ResultType<"tguiChildWindow_getTitle"> {
    return accessLib().symbols.tguiChildWindow_getTitle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setTitleTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setTitleTextSize(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleTextSize"> {
    return accessLib().symbols.tguiChildWindow_setTitleTextSize(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiChildWindow_getTitleTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getTitleTextSize(): ResultType<"tguiChildWindow_getTitleTextSize"> {
    return accessLib().symbols.tguiChildWindow_getTitleTextSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setTitleAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setTitleAlignment(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleAlignment"> {
    return accessLib().symbols.tguiChildWindow_setTitleAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiChildWindow_getTitleAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getTitleAlignment(): ResultType<"tguiChildWindow_getTitleAlignment"> {
    return accessLib().symbols.tguiChildWindow_getTitleAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setTitleButtons(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setTitleButtons(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleButtons"> {
    return accessLib().symbols.tguiChildWindow_setTitleButtons(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiChildWindow_getTitleButtons(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getTitleButtons(): ResultType<"tguiChildWindow_getTitleButtons"> {
    return accessLib().symbols.tguiChildWindow_getTitleButtons(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setCloseBehavior(tguiWidget * thisWidget, tguiChildWindowCloseBehavior value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ChildWindowCloseBehavior`
   * @returns `void`
   */
  setCloseBehavior(
    value: number,
  ): ResultType<"tguiChildWindow_setCloseBehavior"> {
    return accessLib().symbols.tguiChildWindow_setCloseBehavior(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiChildWindowCloseBehavior tguiChildWindow_getCloseBehavior(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ChildWindowCloseBehavior`
   */
  getCloseBehavior(): ResultType<"tguiChildWindow_getCloseBehavior"> {
    return accessLib().symbols.tguiChildWindow_getCloseBehavior(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setResizable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setResizable(value: number): ResultType<"tguiChildWindow_setResizable"> {
    return accessLib().symbols.tguiChildWindow_setResizable(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChildWindow_isResizable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isResizable(): ResultType<"tguiChildWindow_isResizable"> {
    return accessLib().symbols.tguiChildWindow_isResizable(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setKeepInParent(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setKeepInParent(
    value: number,
  ): ResultType<"tguiChildWindow_setKeepInParent"> {
    return accessLib().symbols.tguiChildWindow_setKeepInParent(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChildWindow_getKeepInParent(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getKeepInParent(): ResultType<"tguiChildWindow_getKeepInParent"> {
    return accessLib().symbols.tguiChildWindow_getKeepInParent(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindow_setPositionLocked(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setPositionLocked(
    value: number,
  ): ResultType<"tguiChildWindow_setPositionLocked"> {
    return accessLib().symbols.tguiChildWindow_setPositionLocked(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChildWindow_isPositionLocked(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isPositionLocked(): ResultType<"tguiChildWindow_isPositionLocked"> {
    return accessLib().symbols.tguiChildWindow_isPositionLocked(this.pointer);
  }
}

export class Group extends Container {
  /**
   * @original ```c
   * tguiWidget * tguiGroup_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiGroup_create());
  }
}

export class ChildWindowRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiChildWindowRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiChildWindowRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiChildWindowRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiChildWindowRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setBorders"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiChildWindowRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiChildWindowRenderer_getBorders"> {
    return accessLib().symbols.tguiChildWindowRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleBarColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTitleBarColor(
    value: Color,
  ): ResultType<"tguiChildWindowRenderer_setTitleBarColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleBarColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getTitleBarColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTitleBarColor(): ResultType<"tguiChildWindowRenderer_getTitleBarColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleBarColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTitleColor(
    value: Color,
  ): ResultType<"tguiChildWindowRenderer_setTitleColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getTitleColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTitleColor(): ResultType<"tguiChildWindowRenderer_getTitleColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiChildWindowRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<
    "tguiChildWindowRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiChildWindowRenderer_setBorderColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiChildWindowRenderer_getBorderColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorFocused(
    value: Color,
  ): ResultType<"tguiChildWindowRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChildWindowRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorFocused(): ResultType<
    "tguiChildWindowRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setBorderBelowTitleBar(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setBorderBelowTitleBar(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setBorderBelowTitleBar"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderBelowTitleBar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getBorderBelowTitleBar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getBorderBelowTitleBar(): ResultType<
    "tguiChildWindowRenderer_getBorderBelowTitleBar"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderBelowTitleBar(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTitleBarHeight(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setTitleBarHeight(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setTitleBarHeight"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleBarHeight(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getTitleBarHeight(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getTitleBarHeight(): ResultType<"tguiChildWindowRenderer_getTitleBarHeight"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleBarHeight(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setDistanceToSide(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiChildWindowRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getDistanceToSide(): ResultType<"tguiChildWindowRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiChildWindowRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setPaddingBetweenButtons(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setPaddingBetweenButtons(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setPaddingBetweenButtons"> {
    return accessLib().symbols.tguiChildWindowRenderer_setPaddingBetweenButtons(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getPaddingBetweenButtons(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getPaddingBetweenButtons(): ResultType<
    "tguiChildWindowRenderer_getPaddingBetweenButtons"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getPaddingBetweenButtons(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMinimumResizableBorderWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setMinimumResizableBorderWidth(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setMinimumResizableBorderWidth"> {
    return accessLib().symbols
      .tguiChildWindowRenderer_setMinimumResizableBorderWidth(
        this.pointer,
        value,
      );
  }

  /**
   * @original ```c
   * float tguiChildWindowRenderer_getMinimumResizableBorderWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getMinimumResizableBorderWidth(): ResultType<
    "tguiChildWindowRenderer_getMinimumResizableBorderWidth"
  > {
    return accessLib().symbols
      .tguiChildWindowRenderer_getMinimumResizableBorderWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setShowTextOnTitleButtons(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  setShowTextOnTitleButtons(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setShowTextOnTitleButtons"> {
    return accessLib().symbols
      .tguiChildWindowRenderer_setShowTextOnTitleButtons(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiChildWindowRenderer_getShowTextOnTitleButtons(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  getShowTextOnTitleButtons(): ResultType<
    "tguiChildWindowRenderer_getShowTextOnTitleButtons"
  > {
    return accessLib().symbols
      .tguiChildWindowRenderer_getShowTextOnTitleButtons(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTextureTitleBar(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTitleBar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setTextureTitleBar"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTextureTitleBar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiChildWindowRenderer_getTextureTitleBar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTitleBar(): ResultType<
    "tguiChildWindowRenderer_getTextureTitleBar"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getTextureTitleBar(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiChildWindowRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiChildWindowRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setCloseButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setCloseButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setCloseButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setCloseButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getCloseButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getCloseButton(): ResultType<"tguiChildWindowRenderer_getCloseButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_getCloseButton(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMaximizeButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setMaximizeButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setMaximizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setMaximizeButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getMaximizeButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getMaximizeButton(): ResultType<"tguiChildWindowRenderer_getMaximizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_getMaximizeButton(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChildWindowRenderer_setMinimizeButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setMinimizeButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setMinimizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setMinimizeButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiChildWindowRenderer_getMinimizeButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getMinimizeButton(): ResultType<"tguiChildWindowRenderer_getMinimizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_getMinimizeButton(
      this.pointer,
    );
  }
}

export class GroupRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiGroupRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiGroupRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiGroupRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiGroupRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiGroupRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGroupRenderer_setPadding"> {
    return accessLib().symbols.tguiGroupRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiGroupRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiGroupRenderer_getPadding"> {
    return accessLib().symbols.tguiGroupRenderer_getPadding(this.pointer);
  }
}

export class BoxLayout extends Group {
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
  insert(
    index: bigint,
    widgetToAdd: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiBoxLayout_insert"> {
    return accessLib().symbols.tguiBoxLayout_insert(
      this.pointer,
      index,
      widgetToAdd,
      widgetName,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiBoxLayout_removeAtIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeAtIndex(index: bigint): ResultType<"tguiBoxLayout_removeAtIndex"> {
    return accessLib().symbols.tguiBoxLayout_removeAtIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * tguiWidget * tguiBoxLayout_getAtIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Widget *`
   */
  getAtIndex(index: bigint): ResultType<"tguiBoxLayout_getAtIndex"> {
    return accessLib().symbols.tguiBoxLayout_getAtIndex(this.pointer, index);
  }
}

export class BoxLayoutRatios extends BoxLayout {
  override add(
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): void;
  override add(
    widget: Deno.PointerValue<unknown>,
    ratio: number,
    widgetName: BufferSource,
  ): void;
  override add(
    widget: Deno.PointerValue<unknown>,
    arg1: any,
    arg2?: any,
  ): void {
    if (typeof arg1 === "number") {
      return accessLib().symbols.tguiBoxLayoutRatios_add(
        this.pointer,
        widget,
        arg1, // ratio
        arg2,
      );
    }

    return accessLib().symbols.tguiBoxLayoutRatios_add(
      this.pointer,
      widget,
      1, // ratio
      arg1,
    );
  }

  override insert(
    index: bigint,
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): void;
  override insert(
    index: bigint,
    widget: Deno.PointerValue<unknown>,
    ratio: number,
    widgetName: BufferSource,
  ): void;
  override insert(
    index: bigint,
    widget: Deno.PointerValue<unknown>,
    arg1: any,
    arg2?: any,
  ) {
    if (typeof arg1 === "number") {
      return accessLib().symbols.tguiBoxLayoutRatios_insert(
        this.pointer,
        index,
        widget,
        arg1, // ratio
        arg2,
      );
    }

    return accessLib().symbols.tguiBoxLayoutRatios_insert(
      this.pointer,
      index,
      widget,
      1, // ratio
      arg1,
    );
  }

  /**
   * @original ```c
   * void tguiBoxLayoutRatios_addSpace(tguiWidget * thisWidget, float ratio);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param ratio `float`
   * @returns `void`
   */
  addSpace(ratio: number): ResultType<"tguiBoxLayoutRatios_addSpace"> {
    return accessLib().symbols.tguiBoxLayoutRatios_addSpace(
      this.pointer,
      ratio,
    );
  }

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
  insertSpace(
    index: bigint,
    ratio: number,
  ): ResultType<"tguiBoxLayoutRatios_insertSpace"> {
    return accessLib().symbols.tguiBoxLayoutRatios_insertSpace(
      this.pointer,
      index,
      ratio,
    );
  }

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
  setRatio(
    widget: Deno.PointerValue<unknown>,
    ratio: number,
  ): ResultType<"tguiBoxLayoutRatios_setRatio"> {
    return accessLib().symbols.tguiBoxLayoutRatios_setRatio(
      this.pointer,
      widget,
      ratio,
    );
  }

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
  setRatioAtIndex(
    index: bigint,
    ratio: number,
  ): ResultType<"tguiBoxLayoutRatios_setRatioAtIndex"> {
    return accessLib().symbols.tguiBoxLayoutRatios_setRatioAtIndex(
      this.pointer,
      index,
      ratio,
    );
  }

  /**
   * @original ```c
   * float tguiBoxLayoutRatios_getRatio(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `float`
   */
  getRatio(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBoxLayoutRatios_getRatio"> {
    return accessLib().symbols.tguiBoxLayoutRatios_getRatio(
      this.pointer,
      widget,
    );
  }

  /**
   * @original ```c
   * float tguiBoxLayoutRatios_getRatioAtIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  getRatioAtIndex(
    index: bigint,
  ): ResultType<"tguiBoxLayoutRatios_getRatioAtIndex"> {
    return accessLib().symbols.tguiBoxLayoutRatios_getRatioAtIndex(
      this.pointer,
      index,
    );
  }
}

export class ButtonBase extends ClickableWidget {
  /**
   * @original ```c
   * void tguiButtonBase_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiButtonBase_setText"> {
    return accessLib().symbols.tguiButtonBase_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiButtonBase_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiButtonBase_getText"> {
    return accessLib().symbols.tguiButtonBase_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonBase_setIgnoreKeyEvents(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setIgnoreKeyEvents(
    value: number,
  ): ResultType<"tguiButtonBase_setIgnoreKeyEvents"> {
    return accessLib().symbols.tguiButtonBase_setIgnoreKeyEvents(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiButtonBase_getIgnoreKeyEvents(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getIgnoreKeyEvents(): ResultType<"tguiButtonBase_getIgnoreKeyEvents"> {
    return accessLib().symbols.tguiButtonBase_getIgnoreKeyEvents(this.pointer);
  }

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
  setTextPositionAbs(
    widget: Deno.PointerValue<unknown>,
    position: Vector2f,
    origin: Vector2f,
  ): ResultType<"tguiButtonBase_setTextPositionAbs"> {
    return accessLib().symbols.tguiButtonBase_setTextPositionAbs(
      widget,
      position.buffer,
      origin.buffer,
    );
  }

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
  setTextPositionRel(
    widget: Deno.PointerValue<unknown>,
    position: Vector2f,
    origin: Vector2f,
  ): ResultType<"tguiButtonBase_setTextPositionRel"> {
    return accessLib().symbols.tguiButtonBase_setTextPositionRel(
      widget,
      position.buffer,
      origin.buffer,
    );
  }
}

export class Button extends ButtonBase {
  /**
   * @original ```c
   * tguiWidget * tguiButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiButton_create());
  }
}

export class Label extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiLabel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiLabel_create());
  }

  /**
   * @original ```c
   * void tguiLabel_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiLabel_setText"> {
    return accessLib().symbols.tguiLabel_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiLabel_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiLabel_getText"> {
    return accessLib().symbols.tguiLabel_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabel_setHorizontalAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setHorizontalAlignment(
    value: number,
  ): ResultType<"tguiLabel_setHorizontalAlignment"> {
    return accessLib().symbols.tguiLabel_setHorizontalAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiLabel_getHorizontalAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getHorizontalAlignment(): ResultType<"tguiLabel_getHorizontalAlignment"> {
    return accessLib().symbols.tguiLabel_getHorizontalAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabel_setVerticalAlignment(tguiWidget * thisWidget, tguiVerticalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `VerticalAlignment`
   * @returns `void`
   */
  setVerticalAlignment(
    value: number,
  ): ResultType<"tguiLabel_setVerticalAlignment"> {
    return accessLib().symbols.tguiLabel_setVerticalAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiVerticalAlignment tguiLabel_getVerticalAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `VerticalAlignment`
   */
  getVerticalAlignment(): ResultType<"tguiLabel_getVerticalAlignment"> {
    return accessLib().symbols.tguiLabel_getVerticalAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabel_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAutoSize(value: number): ResultType<"tguiLabel_setAutoSize"> {
    return accessLib().symbols.tguiLabel_setAutoSize(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiLabel_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAutoSize(): ResultType<"tguiLabel_getAutoSize"> {
    return accessLib().symbols.tguiLabel_getAutoSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabel_setMaximumTextWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximumTextWidth(
    value: number,
  ): ResultType<"tguiLabel_setMaximumTextWidth"> {
    return accessLib().symbols.tguiLabel_setMaximumTextWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiLabel_getMaximumTextWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximumTextWidth(): ResultType<"tguiLabel_getMaximumTextWidth"> {
    return accessLib().symbols.tguiLabel_getMaximumTextWidth(this.pointer);
  }
}

export class Panel extends Group {
  /**
   * @original ```c
   * tguiWidget * tguiPanel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiPanel_create());
  }

  /**
   * @original ```c
   * void tguiPanel_setEventBubbling(tguiBool useEventBubbling);
   * ```
   *
   * @param useEventBubbling `Bool`
   * @returns `void`
   */
  setEventBubbling(
    useEventBubbling: number,
  ): ResultType<"tguiPanel_setEventBubbling"> {
    return accessLib().symbols.tguiPanel_setEventBubbling(useEventBubbling);
  }

  /**
   * @original ```c
   * tguiBool tguiPanel_getEventBubbling();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  getEventBubbling(): ResultType<"tguiPanel_getEventBubbling"> {
    return accessLib().symbols.tguiPanel_getEventBubbling();
  }
}

export class RadioButton extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiRadioButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiRadioButton_create());
  }

  /**
   * @original ```c
   * void tguiRadioButton_setChecked(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setChecked(value: number): ResultType<"tguiRadioButton_setChecked"> {
    return accessLib().symbols.tguiRadioButton_setChecked(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiRadioButton_isChecked(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isChecked(): ResultType<"tguiRadioButton_isChecked"> {
    return accessLib().symbols.tguiRadioButton_isChecked(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButton_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiRadioButton_setText"> {
    return accessLib().symbols.tguiRadioButton_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiRadioButton_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiRadioButton_getText"> {
    return accessLib().symbols.tguiRadioButton_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButton_setTextClickable(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setTextClickable(
    value: number,
  ): ResultType<"tguiRadioButton_setTextClickable"> {
    return accessLib().symbols.tguiRadioButton_setTextClickable(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiRadioButton_isTextClickable(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isTextClickable(): ResultType<"tguiRadioButton_isTextClickable"> {
    return accessLib().symbols.tguiRadioButton_isTextClickable(this.pointer);
  }
}

export class ScrollablePanel extends Panel {
  /**
   * @original ```c
   * tguiWidget * tguiScrollablePanel_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiScrollablePanel_create());
  }

  /**
   * @original ```c
   * void tguiScrollablePanel_setContentSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setContentSize(
    value: Vector2f,
  ): ResultType<"tguiScrollablePanel_setContentSize"> {
    return accessLib().symbols.tguiScrollablePanel_setContentSize(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiScrollablePanel_getContentSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getContentSize(): ResultType<"tguiScrollablePanel_getContentSize"> {
    return accessLib().symbols.tguiScrollablePanel_getContentSize(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiScrollablePanel_getContentOffset(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getContentOffset(): ResultType<"tguiScrollablePanel_getContentOffset"> {
    return accessLib().symbols.tguiScrollablePanel_getContentOffset(
      this.pointer,
    );
  }
}

export class PanelRenderer extends GroupRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiPanelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiPanelRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiPanelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiPanelRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiPanelRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPanelRenderer_setBorders"> {
    return accessLib().symbols.tguiPanelRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiPanelRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiPanelRenderer_getBorders"> {
    return accessLib().symbols.tguiPanelRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiPanelRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiPanelRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiPanelRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiPanelRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiPanelRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiPanelRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiPanelRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(value: Color): ResultType<"tguiPanelRenderer_setBorderColor"> {
    return accessLib().symbols.tguiPanelRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiPanelRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiPanelRenderer_getBorderColor"> {
    return accessLib().symbols.tguiPanelRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiPanelRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPanelRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiPanelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiPanelRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<"tguiPanelRenderer_getTextureBackground"> {
    return accessLib().symbols.tguiPanelRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiPanelRenderer_setRoundedBorderRadius(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setRoundedBorderRadius(
    value: number,
  ): ResultType<"tguiPanelRenderer_setRoundedBorderRadius"> {
    return accessLib().symbols.tguiPanelRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiPanelRenderer_getRoundedBorderRadius(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getRoundedBorderRadius(): ResultType<
    "tguiPanelRenderer_getRoundedBorderRadius"
  > {
    return accessLib().symbols.tguiPanelRenderer_getRoundedBorderRadius(
      this.pointer,
    );
  }
}

export class ScrollablePanelRenderer extends PanelRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiScrollablePanelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiScrollablePanelRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiScrollablePanelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiScrollablePanelRenderer_copy(
      other,
    );
  }

  /**
   * @original ```c
   * void tguiScrollablePanelRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollablePanelRenderer_setScrollbar"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiScrollablePanelRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiScrollablePanelRenderer_getScrollbar"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_getScrollbar(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollablePanelRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiScrollablePanelRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiScrollablePanelRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<
    "tguiScrollablePanelRenderer_getScrollbarWidth"
  > {
    return accessLib().symbols.tguiScrollablePanelRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class SliderRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSliderRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiSliderRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSliderRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiSliderRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setBorders"> {
    return accessLib().symbols.tguiSliderRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiSliderRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiSliderRenderer_getBorders"> {
    return accessLib().symbols.tguiSliderRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTrackColor(value: Color): ResultType<"tguiSliderRenderer_setTrackColor"> {
    return accessLib().symbols.tguiSliderRenderer_setTrackColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTrackColor(): ResultType<"tguiSliderRenderer_getTrackColor"> {
    return accessLib().symbols.tguiSliderRenderer_getTrackColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTrackColorHover(
    value: Color,
  ): ResultType<"tguiSliderRenderer_setTrackColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTrackColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTrackColorHover(): ResultType<"tguiSliderRenderer_getTrackColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setThumbColor(value: Color): ResultType<"tguiSliderRenderer_setThumbColor"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getThumbColor(): ResultType<"tguiSliderRenderer_getThumbColor"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setThumbColorHover(
    value: Color,
  ): ResultType<"tguiSliderRenderer_setThumbColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getThumbColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getThumbColorHover(): ResultType<"tguiSliderRenderer_getThumbColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiSliderRenderer_setBorderColor"> {
    return accessLib().symbols.tguiSliderRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiSliderRenderer_getBorderColor"> {
    return accessLib().symbols.tguiSliderRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorHover(
    value: Color,
  ): ResultType<"tguiSliderRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSliderRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorHover(): ResultType<"tguiSliderRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureTrack"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTrack(): ResultType<"tguiSliderRenderer_getTextureTrack"> {
    return accessLib().symbols.tguiSliderRenderer_getTextureTrack(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureTrackHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTrackHover(): ResultType<
    "tguiSliderRenderer_getTextureTrackHover"
  > {
    return accessLib().symbols.tguiSliderRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureThumb(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureThumb(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureThumb"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureThumb(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureThumb(): ResultType<"tguiSliderRenderer_getTextureThumb"> {
    return accessLib().symbols.tguiSliderRenderer_getTextureThumb(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setTextureThumbHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureThumbHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureThumbHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSliderRenderer_getTextureThumbHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureThumbHover(): ResultType<
    "tguiSliderRenderer_getTextureThumbHover"
  > {
    return accessLib().symbols.tguiSliderRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSliderRenderer_setThumbWithinTrack(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  setThumbWithinTrack(
    value: number,
  ): ResultType<"tguiSliderRenderer_setThumbWithinTrack"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbWithinTrack(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiSliderRenderer_getThumbWithinTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  getThumbWithinTrack(): ResultType<"tguiSliderRenderer_getThumbWithinTrack"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbWithinTrack(
      this.pointer,
    );
  }
}

export class sfColor {
  static STRUCT_DEF: StructDef = ["u8", "u8", "u8", "u8"];

  static deserialize(flatValues: NumberLikeType[]): sfColor {
    return new sfColor(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfColor.STRUCT_DEF, this);
  }
}

export class sfJoystickMoveEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32", "i32", "f32"];

  static deserialize(flatValues: NumberLikeType[]): sfJoystickMoveEvent {
    return new sfJoystickMoveEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  joystickId: number;
  axis: number;
  position: number;

  constructor(
    type: number,
    joystickId: number,
    axis: number,
    position: number,
  ) {
    this.type = type;
    this.joystickId = joystickId;
    this.axis = axis;
    this.position = position;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfJoystickMoveEvent.STRUCT_DEF, this);
  }
}

export class sfJoystickButtonEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32", "u32"];

  static deserialize(flatValues: NumberLikeType[]): sfJoystickButtonEvent {
    return new sfJoystickButtonEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  joystickId: number;
  button: number;

  constructor(type: number, joystickId: number, button: number) {
    this.type = type;
    this.joystickId = joystickId;
    this.button = button;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfJoystickButtonEvent.STRUCT_DEF, this);
  }
}

export class sfJoystickConnectEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32"];

  static deserialize(flatValues: NumberLikeType[]): sfJoystickConnectEvent {
    return new sfJoystickConnectEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  joystickId: number;

  constructor(type: number, joystickId: number) {
    this.type = type;
    this.joystickId = joystickId;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfJoystickConnectEvent.STRUCT_DEF, this);
  }
}

export class sfKeyEvent {
  static STRUCT_DEF: StructDef = [
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
    "i32",
  ];

  static deserialize(flatValues: NumberLikeType[]): sfKeyEvent {
    return new sfKeyEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  code: number;
  scancode: number;
  alt: number;
  control: number;
  shift: number;
  system: number;

  constructor(
    type: number,
    code: number,
    scancode: number,
    alt: number,
    control: number,
    shift: number,
    system: number,
  ) {
    this.type = type;
    this.code = code;
    this.scancode = scancode;
    this.alt = alt;
    this.control = control;
    this.shift = shift;
    this.system = system;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfKeyEvent.STRUCT_DEF, this);
  }
}

export class sfMouseMoveEvent {
  static STRUCT_DEF: StructDef = ["i32", "i32", "i32"];

  static deserialize(flatValues: NumberLikeType[]): sfMouseMoveEvent {
    return new sfMouseMoveEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  x: number;
  y: number;

  constructor(type: number, x: number, y: number) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfMouseMoveEvent.STRUCT_DEF, this);
  }
}

export class sfMouseButtonEvent {
  static STRUCT_DEF: StructDef = ["i32", "i32", "i32", "i32"];

  static deserialize(flatValues: NumberLikeType[]): sfMouseButtonEvent {
    return new sfMouseButtonEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  button: number;
  x: number;
  y: number;

  constructor(type: number, button: number, x: number, y: number) {
    this.type = type;
    this.button = button;
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfMouseButtonEvent.STRUCT_DEF, this);
  }
}

export class sfMouseWheelEvent {
  static STRUCT_DEF: StructDef = ["i32", "i32", "i32", "i32"];

  static deserialize(flatValues: NumberLikeType[]): sfMouseWheelEvent {
    return new sfMouseWheelEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  delta: number;
  x: number;
  y: number;

  constructor(type: number, delta: number, x: number, y: number) {
    this.type = type;
    this.delta = delta;
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfMouseWheelEvent.STRUCT_DEF, this);
  }
}

export class sfMouseWheelScrollEvent {
  static STRUCT_DEF: StructDef = ["i32", "i32", "f32", "i32", "i32"];

  static deserialize(flatValues: NumberLikeType[]): sfMouseWheelScrollEvent {
    return new sfMouseWheelScrollEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  wheel: number;
  delta: number;
  x: number;
  y: number;

  constructor(
    type: number,
    wheel: number,
    delta: number,
    x: number,
    y: number,
  ) {
    this.type = type;
    this.wheel = wheel;
    this.delta = delta;
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfMouseWheelScrollEvent.STRUCT_DEF, this);
  }
}

export class sfSensorEvent {
  static STRUCT_DEF: StructDef = ["i32", "i32", "f32", "f32", "f32"];

  static deserialize(flatValues: NumberLikeType[]): sfSensorEvent {
    return new sfSensorEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  sensorType: number;
  x: number;
  y: number;
  z: number;

  constructor(
    type: number,
    sensorType: number,
    x: number,
    y: number,
    z: number,
  ) {
    this.type = type;
    this.sensorType = sensorType;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfSensorEvent.STRUCT_DEF, this);
  }
}

export class sfSizeEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32", "u32"];

  static deserialize(flatValues: NumberLikeType[]): sfSizeEvent {
    return new sfSizeEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  width: number;
  height: number;

  constructor(type: number, width: number, height: number) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfSizeEvent.STRUCT_DEF, this);
  }
}

export class sfTextEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32"];

  static deserialize(flatValues: NumberLikeType[]): sfTextEvent {
    return new sfTextEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  unicode: number;

  constructor(type: number, unicode: number) {
    this.type = type;
    this.unicode = unicode;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfTextEvent.STRUCT_DEF, this);
  }
}

export class sfTouchEvent {
  static STRUCT_DEF: StructDef = ["i32", "u32", "i32", "i32"];

  static deserialize(flatValues: NumberLikeType[]): sfTouchEvent {
    return new sfTouchEvent(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  type: number;
  finger: number;
  x: number;
  y: number;

  constructor(type: number, finger: number, x: number, y: number) {
    this.type = type;
    this.finger = finger;
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfTouchEvent.STRUCT_DEF, this);
  }
}

export class sfVideoMode {
  static STRUCT_DEF: StructDef = ["u32", "u32", "u32"];

  static deserialize(flatValues: NumberLikeType[]): sfVideoMode {
    return new sfVideoMode(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  width: number;
  height: number;
  bitsPerPixel: number;

  constructor(width: number, height: number, bitsPerPixel: number) {
    this.width = width;
    this.height = height;
    this.bitsPerPixel = bitsPerPixel;
  }

  get buffer(): BufferSource {
    return serializeStruct(sfVideoMode.STRUCT_DEF, this);
  }
}

export class SFMLEventUnion {
  static STRUCT_DEF: StructDef = [
    "i32",
    { "struct": ["i32", "u32", "u32"] },
    { "struct": ["i32", "i32", "i32", "i32", "i32", "i32", "i32"] },
    { "struct": ["i32", "u32"] },
    { "struct": ["i32", "i32", "i32"] },
    { "struct": ["i32", "i32", "i32", "i32"] },
    { "struct": ["i32", "i32", "i32", "i32"] },
    { "struct": ["i32", "i32", "f32", "i32", "i32"] },
    { "struct": ["i32", "u32", "i32", "f32"] },
    { "struct": ["i32", "u32", "u32"] },
    { "struct": ["i32", "u32"] },
    { "struct": ["i32", "u32", "i32", "i32"] },
    { "struct": ["i32", "i32", "f32", "f32", "f32"] },
  ];

  static deserialize(flatValues: NumberLikeType[]): SFMLEventUnion {
    return new SFMLEventUnion(
      flatValues.shift()! as number,
      sfSizeEvent.deserialize(flatValues),
      sfKeyEvent.deserialize(flatValues),
      sfTextEvent.deserialize(flatValues),
      sfMouseMoveEvent.deserialize(flatValues),
      sfMouseButtonEvent.deserialize(flatValues),
      sfMouseWheelEvent.deserialize(flatValues),
      sfMouseWheelScrollEvent.deserialize(flatValues),
      sfJoystickMoveEvent.deserialize(flatValues),
      sfJoystickButtonEvent.deserialize(flatValues),
      sfJoystickConnectEvent.deserialize(flatValues),
      sfTouchEvent.deserialize(flatValues),
      sfSensorEvent.deserialize(flatValues),
    );
  }

  type: number;
  size: sfSizeEvent;
  key: sfKeyEvent;
  text: sfTextEvent;
  mouseMove: sfMouseMoveEvent;
  mouseButton: sfMouseButtonEvent;
  mouseWheel: sfMouseWheelEvent;
  mouseWheelScroll: sfMouseWheelScrollEvent;
  joystickMove: sfJoystickMoveEvent;
  joystickButton: sfJoystickButtonEvent;
  joystickConnect: sfJoystickConnectEvent;
  touch: sfTouchEvent;
  sensor: sfSensorEvent;

  constructor(
    type: number,
    size: sfSizeEvent,
    key: sfKeyEvent,
    text: sfTextEvent,
    mouseMove: sfMouseMoveEvent,
    mouseButton: sfMouseButtonEvent,
    mouseWheel: sfMouseWheelEvent,
    mouseWheelScroll: sfMouseWheelScrollEvent,
    joystickMove: sfJoystickMoveEvent,
    joystickButton: sfJoystickButtonEvent,
    joystickConnect: sfJoystickConnectEvent,
    touch: sfTouchEvent,
    sensor: sfSensorEvent,
  ) {
    this.type = type;
    this.size = size;
    this.key = key;
    this.text = text;
    this.mouseMove = mouseMove;
    this.mouseButton = mouseButton;
    this.mouseWheel = mouseWheel;
    this.mouseWheelScroll = mouseWheelScroll;
    this.joystickMove = joystickMove;
    this.joystickButton = joystickButton;
    this.joystickConnect = joystickConnect;
    this.touch = touch;
    this.sensor = sensor;
  }

  get buffer(): BufferSource {
    return serializeStruct(SFMLEventUnion.STRUCT_DEF, this);
  }
}

export class Color {
  static STRUCT_DEF: StructDef = ["u8", "u8", "u8", "u8", "i16"];

  static deserialize(flatValues: NumberLikeType[]): Color {
    return new Color(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  r: number;
  g: number;
  b: number;
  a: number;
  isSet: number;

  constructor(r: number, g: number, b: number, a: number, isSet: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.isSet = isSet;
  }

  get buffer(): BufferSource {
    return serializeStruct(Color.STRUCT_DEF, this);
  }

  /**
   * @original ```c
   * tguiColor tguiColor_createNull();
   * ```
   *
   * @param
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  createNull(): ResultType<"tguiColor_createNull"> {
    return accessLib().symbols.tguiColor_createNull();
  }

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
  fromRGB(
    red: number,
    green: number,
    blue: number,
  ): ResultType<"tguiColor_fromRGB"> {
    return accessLib().symbols.tguiColor_fromRGB(red, green, blue);
  }

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
  fromRGBA(
    red: number,
    green: number,
    blue: number,
    alpha: number,
  ): ResultType<"tguiColor_fromRGBA"> {
    return accessLib().symbols.tguiColor_fromRGBA(red, green, blue, alpha);
  }

  /**
   * @original ```c
   * tguiColor tguiColor_fromString(const char * string);
   * ```
   *
   * @param string `const char *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  fromString(string: BufferSource): ResultType<"tguiColor_fromString"> {
    return accessLib().symbols.tguiColor_fromString(string);
  }
}

export class Duration {
  static STRUCT_DEF: StructDef = ["i64"];

  static deserialize(flatValues: NumberLikeType[]): Duration {
    return new Duration(
      flatValues.shift()! as bigint,
    );
  }

  nanoseconds: bigint;

  constructor(nanoseconds: bigint) {
    this.nanoseconds = nanoseconds;
  }

  get buffer(): BufferSource {
    return serializeStruct(Duration.STRUCT_DEF, this);
  }

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromSeconds(float amount);
   * ```
   *
   * @param amount `float`
   * @returns `Duration { nanoseconds: long long }`
   */
  fromSeconds(amount: number): ResultType<"tguiDuration_fromSeconds"> {
    return accessLib().symbols.tguiDuration_fromSeconds(amount);
  }

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromMilliseconds(tguiInt32 amount);
   * ```
   *
   * @param amount `Int32`
   * @returns `Duration { nanoseconds: long long }`
   */
  fromMilliseconds(
    amount: number,
  ): ResultType<"tguiDuration_fromMilliseconds"> {
    return accessLib().symbols.tguiDuration_fromMilliseconds(amount);
  }

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromMicroseconds(tguiInt64 amount);
   * ```
   *
   * @param amount `Int64`
   * @returns `Duration { nanoseconds: long long }`
   */
  fromMicroseconds(
    amount: bigint,
  ): ResultType<"tguiDuration_fromMicroseconds"> {
    return accessLib().symbols.tguiDuration_fromMicroseconds(amount);
  }

  /**
   * @original ```c
   * tguiDuration tguiDuration_fromNanoseconds(tguiInt64 amount);
   * ```
   *
   * @param amount `Int64`
   * @returns `Duration { nanoseconds: long long }`
   */
  fromNanoseconds(amount: bigint): ResultType<"tguiDuration_fromNanoseconds"> {
    return accessLib().symbols.tguiDuration_fromNanoseconds(amount);
  }

  /**
   * @original ```c
   * float tguiDuration_asSeconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `float`
   */
  asSeconds(duration: Duration): ResultType<"tguiDuration_asSeconds"> {
    return accessLib().symbols.tguiDuration_asSeconds(duration.buffer);
  }

  /**
   * @original ```c
   * tguiInt32 tguiDuration_asMilliseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int32`
   */
  asMilliseconds(
    duration: Duration,
  ): ResultType<"tguiDuration_asMilliseconds"> {
    return accessLib().symbols.tguiDuration_asMilliseconds(duration.buffer);
  }

  /**
   * @original ```c
   * tguiInt64 tguiDuration_asMicroseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int64`
   */
  asMicroseconds(
    duration: Duration,
  ): ResultType<"tguiDuration_asMicroseconds"> {
    return accessLib().symbols.tguiDuration_asMicroseconds(duration.buffer);
  }

  /**
   * @original ```c
   * tguiInt64 tguiDuration_asNanoseconds(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `Int64`
   */
  asNanoseconds(duration: Duration): ResultType<"tguiDuration_asNanoseconds"> {
    return accessLib().symbols.tguiDuration_asNanoseconds(duration.buffer);
  }
}

export class FloatRect {
  static STRUCT_DEF: StructDef = ["f32", "f32", "f32", "f32"];

  static deserialize(flatValues: NumberLikeType[]): FloatRect {
    return new FloatRect(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  left: number;
  top: number;
  width: number;
  height: number;

  constructor(left: number, top: number, width: number, height: number) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  get buffer(): BufferSource {
    return serializeStruct(FloatRect.STRUCT_DEF, this);
  }

  /**
   * @original ```c
   * tguiBool tguiFloatRect_contains(const tguiFloatRect * rect, tguiVector2f pos);
   * ```
   *
   * @param rect `const FloatRect *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  contains(
    rect: Deno.PointerValue<unknown>,
    pos: Vector2f,
  ): ResultType<"tguiFloatRect_contains"> {
    return accessLib().symbols.tguiFloatRect_contains(rect, pos.buffer);
  }

  /**
   * @original ```c
   * tguiBool tguiFloatRect_intersects(const tguiFloatRect * rect, const tguiFloatRect * otherRect);
   * ```
   *
   * @param rect `const FloatRect *`
   * @param otherRect `const FloatRect *`
   * @returns `Bool`
   */
  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFloatRect_intersects"> {
    return accessLib().symbols.tguiFloatRect_intersects(rect, otherRect);
  }
}

export class FontGlyph {
  static STRUCT_DEF: StructDef = ["f32", {
    "struct": ["f32", "f32", "f32", "f32"],
  }, { "struct": ["u16", "u16", "u16", "u16"] }];

  static deserialize(flatValues: NumberLikeType[]): FontGlyph {
    return new FontGlyph(
      flatValues.shift()! as number,
      FloatRect.deserialize(flatValues),
      UIntRect.deserialize(flatValues),
    );
  }

  advance: number;
  bounds: FloatRect;
  textureRect: UIntRect;

  constructor(advance: number, bounds: FloatRect, textureRect: UIntRect) {
    this.advance = advance;
    this.bounds = bounds;
    this.textureRect = textureRect;
  }

  get buffer(): BufferSource {
    return serializeStruct(FontGlyph.STRUCT_DEF, this);
  }
}

export class UIntRect {
  static STRUCT_DEF: StructDef = ["u16", "u16", "u16", "u16"];

  static deserialize(flatValues: NumberLikeType[]): UIntRect {
    return new UIntRect(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  left: number;
  top: number;
  width: number;
  height: number;

  constructor(left: number, top: number, width: number, height: number) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  get buffer(): BufferSource {
    return serializeStruct(UIntRect.STRUCT_DEF, this);
  }

  /**
   * @original ```c
   * tguiBool tguiUIntRect_contains(const tguiUIntRect * rect, tguiVector2u pos);
   * ```
   *
   * @param rect `const UIntRect *`
   * @param pos `Vector2u { x: unsigned int; y: unsigned int }`
   * @returns `Bool`
   */
  contains(
    rect: Deno.PointerValue<unknown>,
    pos: Vector2u,
  ): ResultType<"tguiUIntRect_contains"> {
    return accessLib().symbols.tguiUIntRect_contains(rect, pos.buffer);
  }

  /**
   * @original ```c
   * tguiBool tguiUIntRect_intersects(const tguiUIntRect * rect, const tguiUIntRect * otherRect);
   * ```
   *
   * @param rect `const UIntRect *`
   * @param otherRect `const UIntRect *`
   * @returns `Bool`
   */
  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiUIntRect_intersects"> {
    return accessLib().symbols.tguiUIntRect_intersects(rect, otherRect);
  }
}

export class Vector2f {
  static STRUCT_DEF: StructDef = ["f32", "f32"];

  static deserialize(flatValues: NumberLikeType[]): Vector2f {
    return new Vector2f(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(Vector2f.STRUCT_DEF, this);
  }
}

export class Vector2i {
  static STRUCT_DEF: StructDef = ["i16", "i16"];

  static deserialize(flatValues: NumberLikeType[]): Vector2i {
    return new Vector2i(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(Vector2i.STRUCT_DEF, this);
  }
}

export class Vector2u {
  static STRUCT_DEF: StructDef = ["u16", "u16"];

  static deserialize(flatValues: NumberLikeType[]): Vector2u {
    return new Vector2u(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get buffer(): BufferSource {
    return serializeStruct(Vector2u.STRUCT_DEF, this);
  }
}

export class Vertex {
  static STRUCT_DEF: StructDef = [{ "struct": ["f32", "f32"] }, {
    "struct": ["u8", "u8", "u8", "u8"],
  }, { "struct": ["f32", "f32"] }];

  static deserialize(flatValues: NumberLikeType[]): Vertex {
    return new Vertex(
      Vector2f.deserialize(flatValues),
      VertexColor.deserialize(flatValues),
      Vector2f.deserialize(flatValues),
    );
  }

  position: Vector2f;
  color: VertexColor;
  texCoords: Vector2f;

  constructor(position: Vector2f, color: VertexColor, texCoords: Vector2f) {
    this.position = position;
    this.color = color;
    this.texCoords = texCoords;
  }

  get buffer(): BufferSource {
    return serializeStruct(Vertex.STRUCT_DEF, this);
  }
}

export class VertexColor {
  static STRUCT_DEF: StructDef = ["u8", "u8", "u8", "u8"];

  static deserialize(flatValues: NumberLikeType[]): VertexColor {
    return new VertexColor(
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
      flatValues.shift()! as number,
    );
  }

  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  get buffer(): BufferSource {
    return serializeStruct(VertexColor.STRUCT_DEF, this);
  }
}

export class IntRect {
  /**
   * @original ```c
   * tguiBool tguiIntRect_contains(const tguiIntRect * rect, tguiVector2i pos);
   * ```
   *
   * @param rect `const IntRect *`
   * @param pos `Vector2i { x: int; y: int }`
   * @returns `Bool`
   */
  contains(
    rect: Deno.PointerValue<unknown>,
    pos: Vector2i,
  ): ResultType<"tguiIntRect_contains"> {
    return accessLib().symbols.tguiIntRect_contains(rect, pos.buffer);
  }

  /**
   * @original ```c
   * tguiBool tguiIntRect_intersects(const tguiIntRect * rect, const tguiIntRect * otherRect);
   * ```
   *
   * @param rect `const IntRect *`
   * @param otherRect `const IntRect *`
   * @returns `Bool`
   */
  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiIntRect_intersects"> {
    return accessLib().symbols.tguiIntRect_intersects(rect, otherRect);
  }
}

export class tgui {
  /**
   * @original ```c
   * void tgui_setGlobalTextSize(unsigned int textSize);
   * ```
   *
   * @param textSize `unsigned int`
   * @returns `void`
   */
  setGlobalTextSize(textSize: number): ResultType<"tgui_setGlobalTextSize"> {
    return accessLib().symbols.tgui_setGlobalTextSize(textSize);
  }

  /**
   * @original ```c
   * unsigned int tgui_getGlobalTextSize();
   * ```
   *
   * @param
   * @returns `unsigned int`
   */
  getGlobalTextSize(): ResultType<"tgui_getGlobalTextSize"> {
    return accessLib().symbols.tgui_getGlobalTextSize();
  }

  /**
   * @original ```c
   * void tgui_setDoubleClickTime(tguiDuration duration);
   * ```
   *
   * @param duration `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  setDoubleClickTime(
    duration: Duration,
  ): ResultType<"tgui_setDoubleClickTime"> {
    return accessLib().symbols.tgui_setDoubleClickTime(duration.buffer);
  }

  /**
   * @original ```c
   * tguiDuration tgui_getDoubleClickTime();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  getDoubleClickTime(): ResultType<"tgui_getDoubleClickTime"> {
    return accessLib().symbols.tgui_getDoubleClickTime();
  }

  /**
   * @original ```c
   * void tgui_setResourcePath(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `void`
   */
  setResourcePath(path: BufferSource): ResultType<"tgui_setResourcePath"> {
    return accessLib().symbols.tgui_setResourcePath(path);
  }

  /**
   * @original ```c
   * void tgui_setEditCursorBlinkRate(tguiDuration blinkRate);
   * ```
   *
   * @param blinkRate `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  setEditCursorBlinkRate(
    blinkRate: Duration,
  ): ResultType<"tgui_setEditCursorBlinkRate"> {
    return accessLib().symbols.tgui_setEditCursorBlinkRate(blinkRate.buffer);
  }

  /**
   * @original ```c
   * tguiDuration tgui_getEditCursorBlinkRate();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  getEditCursorBlinkRate(): ResultType<"tgui_getEditCursorBlinkRate"> {
    return accessLib().symbols.tgui_getEditCursorBlinkRate();
  }

  /**
   * @original ```c
   * tguiUint8 * tgui_readFileToMemory(tguiUtf32 filename, size_t * fileSize);
   * ```
   *
   * @param filename `Utf32`
   * @param fileSize `size_t *`
   * @returns `Uint8 *`
   */
  readFileToMemory(
    filename: BufferSource,
    fileSize: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_readFileToMemory"> {
    return accessLib().symbols.tgui_readFileToMemory(filename, fileSize);
  }

  /**
   * @original ```c
   * tguiBool tgui_writeFile(tguiUtf32 filename, const char * textToWrite);
   * ```
   *
   * @param filename `Utf32`
   * @param textToWrite `const char *`
   * @returns `Bool`
   */
  writeFile(
    filename: BufferSource,
    textToWrite: BufferSource,
  ): ResultType<"tgui_writeFile"> {
    return accessLib().symbols.tgui_writeFile(filename, textToWrite);
  }

  /**
   * @original ```c
   * void tgui_readFileToMemory_free(tguiUint8 * arg0);
   * ```
   *
   * @param arg0 `Uint8 *`
   * @returns `void`
   */
  readFileToMemory_free(
    arg0: BufferSource,
  ): ResultType<"tgui_readFileToMemory_free"> {
    return accessLib().symbols.tgui_readFileToMemory_free(arg0);
  }

  /**
   * @original ```c
   * const char * tgui_getLastError();
   * ```
   *
   * @param
   * @returns `const char *`
   */
  getLastError(): ResultType<"tgui_getLastError"> {
    return accessLib().symbols.tgui_getLastError();
  }

  /**
   * @original ```c
   * void tgui_setBindingWidgetCleanupCallback(void (*)(tguiWidget *) function);
   * ```
   *
   * @param function `void (*)(Widget *)`
   * @returns `void`
   */
  setBindingWidgetCleanupCallback(
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_setBindingWidgetCleanupCallback"> {
    return accessLib().symbols.tgui_setBindingWidgetCleanupCallback(callback);
  }

  /**
   * @original ```c
   * const char * tgui_base64Encode(const uint8_t * data, size_t nrBytes);
   * ```
   *
   * @param data `const uint8_t *`
   * @param nrBytes `size_t`
   * @returns `const char *`
   */
  base64Encode(
    data: BufferSource,
    nrBytes: bigint,
  ): ResultType<"tgui_base64Encode"> {
    return accessLib().symbols.tgui_base64Encode(data, nrBytes);
  }

  /**
   * @original ```c
   * const uint8_t * tgui_base64Decode(const char * data, size_t * count);
   * ```
   *
   * @param data `const char *`
   * @param count `size_t *`
   * @returns `const uint8_t *`
   */
  base64Decode(
    data: BufferSource,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_base64Decode"> {
    return accessLib().symbols.tgui_base64Decode(data, count);
  }
}

export class Cursor {
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
  setStyle(
    type: number,
    pixels: Deno.PointerValue<unknown>,
    size: Vector2u,
    hotspot: Vector2u,
  ): ResultType<"tguiCursor_setStyle"> {
    return accessLib().symbols.tguiCursor_setStyle(
      type,
      pixels,
      size.buffer,
      hotspot.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiCursor_resetStyle(tguiCursorType type);
   * ```
   *
   * @param type `CursorType`
   * @returns `void`
   */
  resetStyle(type: number): ResultType<"tguiCursor_resetStyle"> {
    return accessLib().symbols.tguiCursor_resetStyle(type);
  }
}

export class Gui {
  /**
   * @original ```c
   * void tguiGui_draw(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `void`
   */
  draw(gui: Deno.PointerValue<unknown>): ResultType<"tguiGui_draw"> {
    return accessLib().symbols.tguiGui_draw(gui);
  }

  /**
   * @original ```c
   * tguiBool tguiGui_loadWidgetsFromFile(tguiGui * gui, const char * filename, tguiBool replaceExisting);
   * ```
   *
   * @param gui `Gui *`
   * @param filename `const char *`
   * @param replaceExisting `Bool`
   * @returns `Bool`
   */
  loadWidgetsFromFile(
    gui: Deno.PointerValue<unknown>,
    filename: BufferSource,
    replaceExisting: number,
  ): ResultType<"tguiGui_loadWidgetsFromFile"> {
    return accessLib().symbols.tguiGui_loadWidgetsFromFile(
      gui,
      filename,
      replaceExisting,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiGui_saveWidgetsToFile(tguiGui * gui, const char * filename);
   * ```
   *
   * @param gui `Gui *`
   * @param filename `const char *`
   * @returns `Bool`
   */
  saveWidgetsToFile(
    gui: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiGui_saveWidgetsToFile"> {
    return accessLib().symbols.tguiGui_saveWidgetsToFile(gui, filename);
  }

  /**
   * @original ```c
   * void tguiGui_setAbsoluteViewport(tguiGui * thisGui, tguiFloatRect viewport);
   * ```
   *
   * @param thisGui `Gui *`
   * @param viewport `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  setAbsoluteViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: FloatRect,
  ): ResultType<"tguiGui_setAbsoluteViewport"> {
    return accessLib().symbols.tguiGui_setAbsoluteViewport(
      thisGui,
      viewport.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiGui_setRelativeViewport(tguiGui * thisGui, tguiFloatRect viewport);
   * ```
   *
   * @param thisGui `Gui *`
   * @param viewport `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  setRelativeViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: FloatRect,
  ): ResultType<"tguiGui_setRelativeViewport"> {
    return accessLib().symbols.tguiGui_setRelativeViewport(
      thisGui,
      viewport.buffer,
    );
  }

  /**
   * @original ```c
   * tguiFloatRect tguiGui_getViewport(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  getViewport(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getViewport"> {
    return accessLib().symbols.tguiGui_getViewport(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setAbsoluteView(tguiGui * thisGui, tguiFloatRect view);
   * ```
   *
   * @param thisGui `Gui *`
   * @param view `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  setAbsoluteView(
    thisGui: Deno.PointerValue<unknown>,
    view: FloatRect,
  ): ResultType<"tguiGui_setAbsoluteView"> {
    return accessLib().symbols.tguiGui_setAbsoluteView(thisGui, view.buffer);
  }

  /**
   * @original ```c
   * void tguiGui_setRelativeView(tguiGui * thisGui, tguiFloatRect view);
   * ```
   *
   * @param thisGui `Gui *`
   * @param view `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  setRelativeView(
    thisGui: Deno.PointerValue<unknown>,
    view: FloatRect,
  ): ResultType<"tguiGui_setRelativeView"> {
    return accessLib().symbols.tguiGui_setRelativeView(thisGui, view.buffer);
  }

  /**
   * @original ```c
   * tguiFloatRect tguiGui_getView(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  getView(thisGui: Deno.PointerValue<unknown>): ResultType<"tguiGui_getView"> {
    return accessLib().symbols.tguiGui_getView(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setTabKeyUsageEnabled(tguiGui * thisGui, tguiBool value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `Bool`
   * @returns `void`
   */
  setTabKeyUsageEnabled(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setTabKeyUsageEnabled"> {
    return accessLib().symbols.tguiGui_setTabKeyUsageEnabled(thisGui, value);
  }

  /**
   * @original ```c
   * tguiBool tguiGui_isTabKeyUsageEnabled(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Bool`
   */
  isTabKeyUsageEnabled(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_isTabKeyUsageEnabled"> {
    return accessLib().symbols.tguiGui_isTabKeyUsageEnabled(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setFont(tguiGui * thisGui, const tguiFont * value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `const Font *`
   * @returns `void`
   */
  setFont(
    thisGui: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_setFont"> {
    return accessLib().symbols.tguiGui_setFont(thisGui, value);
  }

  /**
   * @original ```c
   * const tguiFont * tguiGui_getFont(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `const Font *`
   */
  getFont(thisGui: Deno.PointerValue<unknown>): ResultType<"tguiGui_getFont"> {
    return accessLib().symbols.tguiGui_getFont(thisGui);
  }

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
  add(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiGui_add"> {
    return accessLib().symbols.tguiGui_add(thisGui, widget, widgetName);
  }

  /**
   * @original ```c
   * tguiWidget * tguiGui_get(const tguiGui * thisGui, tguiUtf32 widgetName);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param widgetName `Utf32`
   * @returns `Widget *`
   */
  get(
    thisGui: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiGui_get"> {
    return accessLib().symbols.tguiGui_get(thisGui, widgetName);
  }

  /**
   * @original ```c
   * tguiWidget ** tguiGui_getWidgets(const tguiGui * thisGui, size_t * returnCount);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param returnCount `size_t *`
   * @returns `Widget **`
   */
  getWidgets(
    thisGui: Deno.PointerValue<unknown>,
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getWidgets"> {
    return accessLib().symbols.tguiGui_getWidgets(thisGui, returnCount);
  }

  /**
   * @original ```c
   * tguiBool tguiGui_remove(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `Bool`
   */
  remove(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_remove"> {
    return accessLib().symbols.tguiGui_remove(thisGui, widget);
  }

  /**
   * @original ```c
   * void tguiGui_removeAllWidgets(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  removeAllWidgets(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_removeAllWidgets"> {
    return accessLib().symbols.tguiGui_removeAllWidgets(thisGui);
  }

  /**
   * @original ```c
   * tguiWidget * tguiGui_getFocusedChild(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Widget *`
   */
  getFocusedChild(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getFocusedChild"> {
    return accessLib().symbols.tguiGui_getFocusedChild(thisGui);
  }

  /**
   * @original ```c
   * tguiWidget * tguiGui_getFocusedLeaf(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Widget *`
   */
  getFocusedLeaf(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getFocusedLeaf"> {
    return accessLib().symbols.tguiGui_getFocusedLeaf(thisGui);
  }

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
  getWidgetAtPos(
    thisGui: Deno.PointerValue<unknown>,
    pos: Vector2f,
    recursive: number,
  ): ResultType<"tguiGui_getWidgetAtPos"> {
    return accessLib().symbols.tguiGui_getWidgetAtPos(
      thisGui,
      pos.buffer,
      recursive,
    );
  }

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
  getWidgetBelowMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    mousePos: Vector2i,
    recursive: number,
  ): ResultType<"tguiGui_getWidgetBelowMouseCursor"> {
    return accessLib().symbols.tguiGui_getWidgetBelowMouseCursor(
      thisGui,
      mousePos.buffer,
      recursive,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiGui_focusNextWidget(tguiGui * thisGui, tguiBool recursive);
   * ```
   *
   * @param thisGui `Gui *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  focusNextWidget(
    thisGui: Deno.PointerValue<unknown>,
    recursive: number,
  ): ResultType<"tguiGui_focusNextWidget"> {
    return accessLib().symbols.tguiGui_focusNextWidget(thisGui, recursive);
  }

  /**
   * @original ```c
   * tguiBool tguiGui_focusPreviousWidget(tguiGui * thisGui, tguiBool recursive);
   * ```
   *
   * @param thisGui `Gui *`
   * @param recursive `Bool`
   * @returns `Bool`
   */
  focusPreviousWidget(
    thisGui: Deno.PointerValue<unknown>,
    recursive: number,
  ): ResultType<"tguiGui_focusPreviousWidget"> {
    return accessLib().symbols.tguiGui_focusPreviousWidget(thisGui, recursive);
  }

  /**
   * @original ```c
   * void tguiGui_unfocusAllWidgets(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  unfocusAllWidgets(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_unfocusAllWidgets"> {
    return accessLib().symbols.tguiGui_unfocusAllWidgets(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_moveWidgetToFront(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `void`
   */
  moveWidgetToFront(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetToFront"> {
    return accessLib().symbols.tguiGui_moveWidgetToFront(thisGui, widget);
  }

  /**
   * @original ```c
   * void tguiGui_moveWidgetToBack(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `void`
   */
  moveWidgetToBack(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetToBack"> {
    return accessLib().symbols.tguiGui_moveWidgetToBack(thisGui, widget);
  }

  /**
   * @original ```c
   * size_t tguiGui_moveWidgetForward(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  moveWidgetForward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetForward"> {
    return accessLib().symbols.tguiGui_moveWidgetForward(thisGui, widget);
  }

  /**
   * @original ```c
   * size_t tguiGui_moveWidgetBackward(tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `Gui *`
   * @param widget `Widget *`
   * @returns `size_t`
   */
  moveWidgetBackward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetBackward"> {
    return accessLib().symbols.tguiGui_moveWidgetBackward(thisGui, widget);
  }

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
  setWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    index: bigint,
  ): ResultType<"tguiGui_setWidgetIndex"> {
    return accessLib().symbols.tguiGui_setWidgetIndex(thisGui, widget, index);
  }

  /**
   * @original ```c
   * int tguiGui_getWidgetIndex(const tguiGui * thisGui, tguiWidget * widget);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param widget `Widget *`
   * @returns `int`
   */
  getWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getWidgetIndex"> {
    return accessLib().symbols.tguiGui_getWidgetIndex(thisGui, widget);
  }

  /**
   * @original ```c
   * void tguiGui_setOpacity(tguiGui * thisGui, float value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `float`
   * @returns `void`
   */
  setOpacity(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setOpacity"> {
    return accessLib().symbols.tguiGui_setOpacity(thisGui, value);
  }

  /**
   * @original ```c
   * float tguiGui_getOpacity(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `float`
   */
  getOpacity(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getOpacity"> {
    return accessLib().symbols.tguiGui_getOpacity(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setTextSize(tguiGui * thisGui, unsigned int value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setTextSize(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setTextSize"> {
    return accessLib().symbols.tguiGui_setTextSize(thisGui, value);
  }

  /**
   * @original ```c
   * unsigned int tguiGui_getTextSize(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `unsigned int`
   */
  getTextSize(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getTextSize"> {
    return accessLib().symbols.tguiGui_getTextSize(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setDrawingUpdatesTime(tguiGui * thisGui, tguiBool drawUpdatesTime);
   * ```
   *
   * @param thisGui `Gui *`
   * @param drawUpdatesTime `Bool`
   * @returns `void`
   */
  setDrawingUpdatesTime(
    thisGui: Deno.PointerValue<unknown>,
    drawUpdatesTime: number,
  ): ResultType<"tguiGui_setDrawingUpdatesTime"> {
    return accessLib().symbols.tguiGui_setDrawingUpdatesTime(
      thisGui,
      drawUpdatesTime,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiGui_updateTime(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `Bool`
   */
  updateTime(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_updateTime"> {
    return accessLib().symbols.tguiGui_updateTime(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_setOverrideMouseCursor(tguiGui * thisGui, tguiCursorType type);
   * ```
   *
   * @param thisGui `Gui *`
   * @param type `CursorType`
   * @returns `void`
   */
  setOverrideMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    type: number,
  ): ResultType<"tguiGui_setOverrideMouseCursor"> {
    return accessLib().symbols.tguiGui_setOverrideMouseCursor(thisGui, type);
  }

  /**
   * @original ```c
   * void tguiGui_restoreOverrideMouseCursor(tguiGui * thisGui);
   * ```
   *
   * @param thisGui `Gui *`
   * @returns `void`
   */
  restoreOverrideMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_restoreOverrideMouseCursor"> {
    return accessLib().symbols.tguiGui_restoreOverrideMouseCursor(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_requestMouseCursor(tguiGui * thisGui, tguiCursorType type);
   * ```
   *
   * @param thisGui `Gui *`
   * @param type `CursorType`
   * @returns `void`
   */
  requestMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    type: number,
  ): ResultType<"tguiGui_requestMouseCursor"> {
    return accessLib().symbols.tguiGui_requestMouseCursor(thisGui, type);
  }

  /**
   * @original ```c
   * tguiVector2f tguiGui_mapPixelToCoords(const tguiGui * thisGui, tguiVector2i pixel);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param pixel `Vector2i { x: int; y: int }`
   * @returns `Vector2f { x: float; y: float }`
   */
  mapPixelToCoords(
    thisGui: Deno.PointerValue<unknown>,
    pixel: Vector2i,
  ): ResultType<"tguiGui_mapPixelToCoords"> {
    return accessLib().symbols.tguiGui_mapPixelToCoords(thisGui, pixel.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiGui_mapCoordsToPixel(const tguiGui * thisGui, tguiVector2f coord);
   * ```
   *
   * @param thisGui `const Gui *`
   * @param coord `Vector2f { x: float; y: float }`
   * @returns `Vector2f { x: float; y: float }`
   */
  mapCoordsToPixel(
    thisGui: Deno.PointerValue<unknown>,
    coord: Vector2f,
  ): ResultType<"tguiGui_mapCoordsToPixel"> {
    return accessLib().symbols.tguiGui_mapCoordsToPixel(thisGui, coord.buffer);
  }

  /**
   * @original ```c
   * void tguiGui_setKeyboardNavigationEnabled(tguiGui * thisGui, tguiBool value);
   * ```
   *
   * @param thisGui `Gui *`
   * @param value `Bool`
   * @returns `void`
   */
  setKeyboardNavigationEnabled(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setKeyboardNavigationEnabled"> {
    return accessLib().symbols.tguiGui_setKeyboardNavigationEnabled(
      thisGui,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiGui_isKeyboardNavigationEnabled(const tguiGui * thisGui);
   * ```
   *
   * @param thisGui `const Gui *`
   * @returns `Bool`
   */
  isKeyboardNavigationEnabled(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_isKeyboardNavigationEnabled"> {
    return accessLib().symbols.tguiGui_isKeyboardNavigationEnabled(thisGui);
  }

  /**
   * @original ```c
   * void tguiGui_mainLoop(tguiGui * thisGui, tguiColor clearColor);
   * ```
   *
   * @param thisGui `Gui *`
   * @param clearColor `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  mainLoop(
    thisGui: Deno.PointerValue<unknown>,
    clearColor: Color,
  ): ResultType<"tguiGui_mainLoop"> {
    return accessLib().symbols.tguiGui_mainLoop(thisGui, clearColor.buffer);
  }
}

export class GuiCSFMLGraphics {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiGui * tguiGuiCSFMLGraphics_create(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `Gui *`
   */
  constructor(window: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiGuiCSFMLGraphics_create(window);
  }

  /**
   * @original ```c
   * void tguiGuiCSFMLGraphics_destroy(tguiGui * gui);
   * ```
   *
   * @param gui `Gui *`
   * @returns `void`
   */
  destroy(): ResultType<"tguiGuiCSFMLGraphics_destroy"> {
    return accessLib().symbols.tguiGuiCSFMLGraphics_destroy(this.pointer);
  }

  /**
   * @original ```c
   * void tguiGuiCSFMLGraphics_handleEvent(tguiGui * gui, const sfEvent * event);
   * ```
   *
   * @param gui `Gui *`
   * @param event `const sfEvent *`
   * @returns `void`
   */
  handleEvent(
    event: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGuiCSFMLGraphics_handleEvent"> {
    return accessLib().symbols.tguiGuiCSFMLGraphics_handleEvent(
      this.pointer,
      event,
    );
  }
}

export class BackendRenderTarget {
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
  drawWidget(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_drawWidget"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawWidget(
      target,
      states,
      widget,
    );
  }

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
  addClippingLayer(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    rect: FloatRect,
  ): ResultType<"tguiBackendRenderTarget_addClippingLayer"> {
    return accessLib().symbols.tguiBackendRenderTarget_addClippingLayer(
      target,
      states,
      rect.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiBackendRenderTarget_removeClippingLayer(tguiBackendRenderTarget * target);
   * ```
   *
   * @param target `BackendRenderTarget *`
   * @returns `void`
   */
  removeClippingLayer(
    target: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_removeClippingLayer"> {
    return accessLib().symbols.tguiBackendRenderTarget_removeClippingLayer(
      target,
    );
  }

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
  drawBorders(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    borders: Deno.PointerValue<unknown>,
    size: Vector2f,
    color: Color,
  ): ResultType<"tguiBackendRenderTarget_drawBorders"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawBorders(
      target,
      states,
      borders,
      size.buffer,
      color.buffer,
    );
  }

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
  drawFilledRect(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: Vector2f,
    color: Color,
  ): ResultType<"tguiBackendRenderTarget_drawFilledRect"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawFilledRect(
      target,
      states,
      size.buffer,
      color.buffer,
    );
  }

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
  drawSprite(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    sprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_drawSprite"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawSprite(
      target,
      states,
      sprite,
    );
  }

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
  drawText(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_drawText"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawText(
      target,
      states,
      text,
    );
  }

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
  drawTextOutline(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_drawTextOutline"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawTextOutline(
      target,
      states,
      text,
    );
  }

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
  drawTextWithoutOutline(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_drawTextWithoutOutline"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawTextWithoutOutline(
      target,
      states,
      text,
    );
  }

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
  drawTriangle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    point1: Vertex,
    point2: Vertex,
    point3: Vertex,
  ): ResultType<"tguiBackendRenderTarget_drawTriangle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawTriangle(
      target,
      states,
      point1.buffer,
      point2.buffer,
      point3.buffer,
    );
  }

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
  drawCircle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: number,
    backgroundColor: Color,
    borderThickness: number,
    borderColor: Color,
  ): ResultType<"tguiBackendRenderTarget_drawCircle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawCircle(
      target,
      states,
      size,
      backgroundColor.buffer,
      borderThickness,
      borderColor.buffer,
    );
  }

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
  drawRoundedRectangle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: Vector2f,
    backgroundColor: Color,
    radius: number,
    borders: Deno.PointerValue<unknown>,
    borderColor: Color,
  ): ResultType<"tguiBackendRenderTarget_drawRoundedRectangle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawRoundedRectangle(
      target,
      states,
      size.buffer,
      backgroundColor.buffer,
      radius,
      borders,
      borderColor.buffer,
    );
  }

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
  drawVertexArray(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    vertices: Deno.PointerValue<unknown>,
    vertexCount: bigint,
    indices: Deno.PointerValue<unknown>,
    indexCount: bigint,
  ): ResultType<"tguiBackendRenderTarget_drawVertexArray"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawVertexArray(
      target,
      states,
      vertices,
      vertexCount,
      indices,
      indexCount,
    );
  }
}

export class CustomWidget {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiWidget * tguiCustomWidget_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    this.ptr = accessLib().symbols.tguiCustomWidget_create();
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setPositionChangedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setPositionChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setPositionChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setPositionChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setSizeChangedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setSizeChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setSizeChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setSizeChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setVisibleChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  setVisibleChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setVisibleChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setVisibleChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setEnableChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  setEnableChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setEnableChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setEnableChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setFocusChangedCallback(tguiWidget * widget, void (*)(tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Bool)`
   * @returns `void`
   */
  setFocusChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setFocusChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setFocusChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setCanGainFocusCallback(tguiWidget * widget, tguiBool (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(void)`
   * @returns `void`
   */
  setCanGainFocusCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setCanGainFocusCallback"> {
    return accessLib().symbols.tguiCustomWidget_setCanGainFocusCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setGetFullSizeCallback(tguiWidget * widget, tguiVector2f (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Vector2f (*)(void)`
   * @returns `void`
   */
  setGetFullSizeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setGetFullSizeCallback"> {
    return accessLib().symbols.tguiCustomWidget_setGetFullSizeCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setGetWidgetOffsetCallback(tguiWidget * widget, tguiVector2f (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Vector2f (*)(void)`
   * @returns `void`
   */
  setGetWidgetOffsetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setGetWidgetOffsetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setGetWidgetOffsetCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setUpdateTimeCallback(tguiWidget * widget, tguiBool (*)(tguiDuration) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiDuration)`
   * @returns `void`
   */
  setUpdateTimeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setUpdateTimeCallback"> {
    return accessLib().symbols.tguiCustomWidget_setUpdateTimeCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseOnWidgetCallback(tguiWidget * widget, tguiBool (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiVector2f)`
   * @returns `void`
   */
  setMouseOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseOnWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseOnWidgetCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMousePressedCallback(tguiWidget * widget, tguiBool (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiVector2f)`
   * @returns `void`
   */
  setLeftMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setLeftMousePressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setLeftMousePressedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMouseReleasedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setLeftMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setLeftMouseReleasedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setLeftMouseReleasedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setRightMousePressedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setRightMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRightMousePressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRightMousePressedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setRightMouseReleasedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setRightMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRightMouseReleasedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRightMouseReleasedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseMovedCallback(tguiWidget * widget, void (*)(tguiVector2f) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Vector2f)`
   * @returns `void`
   */
  setMouseMovedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseMovedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseMovedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setKeyPressedCallback(tguiWidget * widget, void (*)(tguiKeyEvent) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(KeyEvent)`
   * @returns `void`
   */
  setKeyPressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setKeyPressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setKeyPressedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setTextEnteredCallback(tguiWidget * widget, void (*)(tguiChar32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(Char32)`
   * @returns `void`
   */
  setTextEnteredCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setTextEnteredCallback"> {
    return accessLib().symbols.tguiCustomWidget_setTextEnteredCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setScrolledCallback(tguiWidget * widget, tguiBool (*)(float, tguiVector2f, tguiBool) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(float, tguiVector2f, tguiBool)`
   * @returns `void`
   */
  setScrolledCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setScrolledCallback"> {
    return accessLib().symbols.tguiCustomWidget_setScrolledCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseNoLongerOnWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  setMouseNoLongerOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseNoLongerOnWidgetCallback"> {
    return accessLib().symbols
      .tguiCustomWidget_setMouseNoLongerOnWidgetCallback(widget, callback);
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  setLeftMouseButtonNoLongerDownCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback"> {
    return accessLib().symbols
      .tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback(
        widget,
        callback,
      );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseEnteredWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  setMouseEnteredWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseEnteredWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseEnteredWidgetCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setMouseLeftWidgetCallback(tguiWidget * widget, void (*)(void) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(void)`
   * @returns `void`
   */
  setMouseLeftWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseLeftWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseLeftWidgetCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setRendererChangedCallback(tguiWidget * widget, tguiBool (*)(tguiUtf32) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `Bool (*)(tguiUtf32)`
   * @returns `void`
   */
  setRendererChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRendererChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRendererChangedCallback(
      widget,
      callback,
    );
  }

  /**
   * @original ```c
   * void tguiCustomWidget_setDrawCallback(tguiWidget * widget, void (*)(tguiBackendRenderTarget *, tguiRenderStates *) function);
   * ```
   *
   * @param widget `Widget *`
   * @param function `void (*)(BackendRenderTarget *, tguiRenderStates *)`
   * @returns `void`
   */
  setDrawCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setDrawCallback"> {
    return accessLib().symbols.tguiCustomWidget_setDrawCallback(
      widget,
      callback,
    );
  }
}

export class Filesystem {
  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_getParentPath(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Utf32`
   */
  getParentPath(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_getParentPath"> {
    return accessLib().symbols.tguiFilesystem_getParentPath(path);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_joinPaths(tguiUtf32 path1, tguiUtf32 path2);
   * ```
   *
   * @param path1 `Utf32`
   * @param path2 `Utf32`
   * @returns `Utf32`
   */
  joinPaths(
    path1: BufferSource,
    path2: BufferSource,
  ): ResultType<"tguiFilesystem_joinPaths"> {
    return accessLib().symbols.tguiFilesystem_joinPaths(path1, path2);
  }

  /**
   * @original ```c
   * tguiBool tguiFilesystem_directoryExists(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  directoryExists(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_directoryExists"> {
    return accessLib().symbols.tguiFilesystem_directoryExists(path);
  }

  /**
   * @original ```c
   * tguiBool tguiFilesystem_fileExists(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  fileExists(path: BufferSource): ResultType<"tguiFilesystem_fileExists"> {
    return accessLib().symbols.tguiFilesystem_fileExists(path);
  }

  /**
   * @original ```c
   * tguiBool tguiFilesystem_createDirectory(tguiUtf32 path);
   * ```
   *
   * @param path `Utf32`
   * @returns `Bool`
   */
  createDirectory(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_createDirectory"> {
    return accessLib().symbols.tguiFilesystem_createDirectory(path);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFilesystem_getLocalDataDirectory();
   * ```
   *
   * @param
   * @returns `Utf32`
   */
  getLocalDataDirectory(): ResultType<"tguiFilesystem_getLocalDataDirectory"> {
    return accessLib().symbols.tguiFilesystem_getLocalDataDirectory();
  }
}

export class Font {
  /**
   * @original ```c
   * tguiFont * tguiFont_createNull();
   * ```
   *
   * @param
   * @returns `Font *`
   */
  createNull(): ResultType<"tguiFont_createNull"> {
    return accessLib().symbols.tguiFont_createNull();
  }

  /**
   * @original ```c
   * tguiFont * tguiFont_createFromFile(tguiUtf32 filename);
   * ```
   *
   * @param filename `Utf32`
   * @returns `Font *`
   */
  createFromFile(
    filename: BufferSource,
  ): ResultType<"tguiFont_createFromFile"> {
    return accessLib().symbols.tguiFont_createFromFile(filename);
  }

  /**
   * @original ```c
   * tguiFont * tguiFont_createFromMemory(tguiUint8 * data, size_t dataSize);
   * ```
   *
   * @param data `Uint8 *`
   * @param dataSize `size_t`
   * @returns `Font *`
   */
  createFromMemory(
    data: BufferSource,
    dataSize: bigint,
  ): ResultType<"tguiFont_createFromMemory"> {
    return accessLib().symbols.tguiFont_createFromMemory(data, dataSize);
  }

  /**
   * @original ```c
   * void tguiFont_destroy(tguiFont * font);
   * ```
   *
   * @param font `Font *`
   * @returns `void`
   */
  destroy(font: Deno.PointerValue<unknown>): ResultType<"tguiFont_destroy"> {
    return accessLib().symbols.tguiFont_destroy(font);
  }

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
  getGlyph(
    font: Deno.PointerValue<unknown>,
    codePoint: number,
    characterSize: number,
    bold: number,
    outlineThickness: number,
  ): ResultType<"tguiFont_getGlyph"> {
    return accessLib().symbols.tguiFont_getGlyph(
      font,
      codePoint,
      characterSize,
      bold,
      outlineThickness,
    );
  }

  /**
   * @original ```c
   * void tguiFont_setGlobalFont(const tguiFont * font);
   * ```
   *
   * @param font `const Font *`
   * @returns `void`
   */
  setGlobalFont(
    font: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFont_setGlobalFont"> {
    return accessLib().symbols.tguiFont_setGlobalFont(font);
  }

  /**
   * @original ```c
   * const tguiFont * tguiFont_getGlobalFont();
   * ```
   *
   * @param
   * @returns `const Font *`
   */
  getGlobalFont(): ResultType<"tguiFont_getGlobalFont"> {
    return accessLib().symbols.tguiFont_getGlobalFont();
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFont_getId(const tguiFont * thisFont);
   * ```
   *
   * @param thisFont `const Font *`
   * @returns `Utf32`
   */
  getId(thisFont: Deno.PointerValue<unknown>): ResultType<"tguiFont_getId"> {
    return accessLib().symbols.tguiFont_getId(thisFont);
  }

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
  getKerning(
    thisFont: Deno.PointerValue<unknown>,
    first: number,
    second: number,
    characterSize: number,
    bold: number,
  ): ResultType<"tguiFont_getKerning"> {
    return accessLib().symbols.tguiFont_getKerning(
      thisFont,
      first,
      second,
      characterSize,
      bold,
    );
  }

  /**
   * @original ```c
   * float tguiFont_getLineSpacing(const tguiFont * thisFont, unsigned int characterSize);
   * ```
   *
   * @param thisFont `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getLineSpacing(
    thisFont: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiFont_getLineSpacing"> {
    return accessLib().symbols.tguiFont_getLineSpacing(thisFont, characterSize);
  }

  /**
   * @original ```c
   * float tguiFont_getFontHeight(const tguiFont * thisFont, unsigned int characterSize);
   * ```
   *
   * @param thisFont `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getFontHeight(
    thisFont: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiFont_getFontHeight"> {
    return accessLib().symbols.tguiFont_getFontHeight(thisFont, characterSize);
  }

  /**
   * @original ```c
   * void tguiFont_setSmooth(tguiFont * thisFont, tguiBool value);
   * ```
   *
   * @param thisFont `Font *`
   * @param value `Bool`
   * @returns `void`
   */
  setSmooth(
    thisFont: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiFont_setSmooth"> {
    return accessLib().symbols.tguiFont_setSmooth(thisFont, value);
  }

  /**
   * @original ```c
   * tguiBool tguiFont_isSmooth(const tguiFont * thisFont);
   * ```
   *
   * @param thisFont `const Font *`
   * @returns `Bool`
   */
  isSmooth(
    thisFont: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFont_isSmooth"> {
    return accessLib().symbols.tguiFont_isSmooth(thisFont);
  }
}

export class Layout {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiLayout * tguiLayout_create(float constant);
   * ```
   *
   * @param constant `float`
   * @returns `Layout *`
   */
  constructor(constant: number) {
    this.ptr = accessLib().symbols.tguiLayout_create(constant);
  }

  /**
   * @original ```c
   * tguiLayout * tguiLayout_createFromString(const char * expression);
   * ```
   *
   * @param expression `const char *`
   * @returns `Layout *`
   */
  createFromString(
    expression: BufferSource,
  ): ResultType<"tguiLayout_createFromString"> {
    return accessLib().symbols.tguiLayout_createFromString(expression);
  }

  /**
   * @original ```c
   * tguiLayout * tguiLayout_copy(const tguiLayout * other);
   * ```
   *
   * @param other `const Layout *`
   * @returns `Layout *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLayout_copy(other);
  }

  /**
   * @original ```c
   * void tguiLayout_destroy(tguiLayout * layout);
   * ```
   *
   * @param layout `Layout *`
   * @returns `void`
   */
  destroy(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_destroy"> {
    return accessLib().symbols.tguiLayout_destroy(layout);
  }

  /**
   * @original ```c
   * void tguiLayout_replaceValue(tguiLayout * layout, const tguiLayout * newLayout);
   * ```
   *
   * @param layout `Layout *`
   * @param newLayout `const Layout *`
   * @returns `void`
   */
  replaceValue(
    layout: Deno.PointerValue<unknown>,
    newLayout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_replaceValue"> {
    return accessLib().symbols.tguiLayout_replaceValue(layout, newLayout);
  }

  /**
   * @original ```c
   * float tguiLayout_getValue(const tguiLayout * layout);
   * ```
   *
   * @param layout `const Layout *`
   * @returns `float`
   */
  getValue(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_getValue"> {
    return accessLib().symbols.tguiLayout_getValue(layout);
  }

  /**
   * @original ```c
   * tguiBool tguiLayout_isConstant(const tguiLayout * layout);
   * ```
   *
   * @param layout `const Layout *`
   * @returns `Bool`
   */
  isConstant(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_isConstant"> {
    return accessLib().symbols.tguiLayout_isConstant(layout);
  }
}

export class Layout2d {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_create(tguiVector2f constant);
   * ```
   *
   * @param constant `Vector2f { x: float; y: float }`
   * @returns `Layout2d *`
   */
  constructor(constant: Vector2f) {
    this.ptr = accessLib().symbols.tguiLayout2d_create(constant.buffer);
  }

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_createFromLayouts(tguiLayout * x, tguiLayout * y);
   * ```
   *
   * @param x `Layout *`
   * @param y `Layout *`
   * @returns `Layout2d *`
   */
  createFromLayouts(
    x: Deno.PointerValue<unknown>,
    y: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout2d_createFromLayouts"> {
    return accessLib().symbols.tguiLayout2d_createFromLayouts(x, y);
  }

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_createFromString(const char * expression);
   * ```
   *
   * @param expression `const char *`
   * @returns `Layout2d *`
   */
  createFromString(
    expression: BufferSource,
  ): ResultType<"tguiLayout2d_createFromString"> {
    return accessLib().symbols.tguiLayout2d_createFromString(expression);
  }

  /**
   * @original ```c
   * tguiLayout2d * tguiLayout2d_copy(const tguiLayout2d * other);
   * ```
   *
   * @param other `const Layout2d *`
   * @returns `Layout2d *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLayout2d_copy(other);
  }

  /**
   * @original ```c
   * void tguiLayout2d_destroy(tguiLayout2d * layout);
   * ```
   *
   * @param layout `Layout2d *`
   * @returns `void`
   */
  destroy(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout2d_destroy"> {
    return accessLib().symbols.tguiLayout2d_destroy(layout);
  }

  /**
   * @original ```c
   * tguiVector2f tguiLayout2d_getValue(const tguiLayout2d * layout);
   * ```
   *
   * @param layout `const Layout2d *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getValue(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout2d_getValue"> {
    return accessLib().symbols.tguiLayout2d_getValue(layout);
  }
}

export class Outline {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

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
  constructor(left: number, top: number, right: number, bottom: number) {
    this.ptr = accessLib().symbols.tguiOutline_create(left, top, right, bottom);
  }

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
  createFromStrings(
    left: BufferSource,
    top: BufferSource,
    right: BufferSource,
    bottom: BufferSource,
  ): ResultType<"tguiOutline_createFromStrings"> {
    return accessLib().symbols.tguiOutline_createFromStrings(
      left,
      top,
      right,
      bottom,
    );
  }

  /**
   * @original ```c
   * tguiOutline * tguiOutline_copy(const tguiOutline * other);
   * ```
   *
   * @param other `const Outline *`
   * @returns `Outline *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiOutline_copy(other);
  }

  /**
   * @original ```c
   * void tguiOutline_destroy(tguiOutline * outline);
   * ```
   *
   * @param outline `Outline *`
   * @returns `void`
   */
  destroy(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_destroy"> {
    return accessLib().symbols.tguiOutline_destroy(outline);
  }

  /**
   * @original ```c
   * float tguiOutline_getLeft(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  getLeft(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getLeft"> {
    return accessLib().symbols.tguiOutline_getLeft(outline);
  }

  /**
   * @original ```c
   * float tguiOutline_getTop(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  getTop(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getTop"> {
    return accessLib().symbols.tguiOutline_getTop(outline);
  }

  /**
   * @original ```c
   * float tguiOutline_getRight(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  getRight(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getRight"> {
    return accessLib().symbols.tguiOutline_getRight(outline);
  }

  /**
   * @original ```c
   * float tguiOutline_getBottom(const tguiOutline * outline);
   * ```
   *
   * @param outline `const Outline *`
   * @returns `float`
   */
  getBottom(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getBottom"> {
    return accessLib().symbols.tguiOutline_getBottom(outline);
  }
}

export class RendererData {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRendererData * tguiRendererData_copy(const tguiRendererData * data);
   * ```
   *
   * @param data `const RendererData *`
   * @returns `RendererData *`
   */
  constructor(data: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiRendererData_copy(data);
  }

  /**
   * @original ```c
   * void tguiRendererData_destroy(tguiRendererData * data);
   * ```
   *
   * @param data `RendererData *`
   * @returns `void`
   */
  destroy(
    data: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRendererData_destroy"> {
    return accessLib().symbols.tguiRendererData_destroy(data);
  }
}

export class Sprite {
  /**
   * @original ```c
   * tguiSprite * tguiSprite_createNull();
   * ```
   *
   * @param
   * @returns `Sprite *`
   */
  createNull(): ResultType<"tguiSprite_createNull"> {
    return accessLib().symbols.tguiSprite_createNull();
  }

  /**
   * @original ```c
   * tguiSprite * tguiSprite_createFromTexture(tguiTexture * texture);
   * ```
   *
   * @param texture `Texture *`
   * @returns `Sprite *`
   */
  createFromTexture(
    texture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_createFromTexture"> {
    return accessLib().symbols.tguiSprite_createFromTexture(texture);
  }

  /**
   * @original ```c
   * void tguiSprite_destroy(tguiSprite * sprite);
   * ```
   *
   * @param sprite `Sprite *`
   * @returns `void`
   */
  destroy(
    sprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_destroy"> {
    return accessLib().symbols.tguiSprite_destroy(sprite);
  }

  /**
   * @original ```c
   * tguiSpriteScalingType tguiSprite_getScalingType(const tguiSprite * sprite);
   * ```
   *
   * @param sprite `const Sprite *`
   * @returns `SpriteScalingType`
   */
  getScalingType(
    sprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getScalingType"> {
    return accessLib().symbols.tguiSprite_getScalingType(sprite);
  }

  /**
   * @original ```c
   * tguiBool tguiSprite_isSet(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Bool`
   */
  isSet(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_isSet"> {
    return accessLib().symbols.tguiSprite_isSet(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setTexture(tguiSprite * thisSprite, const tguiTexture * value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTexture(
    thisSprite: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_setTexture"> {
    return accessLib().symbols.tguiSprite_setTexture(thisSprite, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSprite_getTexture(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `const Texture *`
   */
  getTexture(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getTexture"> {
    return accessLib().symbols.tguiSprite_getTexture(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setPosition(tguiSprite * thisSprite, tguiVector2f value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setPosition(
    thisSprite: Deno.PointerValue<unknown>,
    value: Vector2f,
  ): ResultType<"tguiSprite_setPosition"> {
    return accessLib().symbols.tguiSprite_setPosition(thisSprite, value.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiSprite_getPosition(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getPosition(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getPosition"> {
    return accessLib().symbols.tguiSprite_getPosition(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setSize(tguiSprite * thisSprite, tguiVector2f value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setSize(
    thisSprite: Deno.PointerValue<unknown>,
    value: Vector2f,
  ): ResultType<"tguiSprite_setSize"> {
    return accessLib().symbols.tguiSprite_setSize(thisSprite, value.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiSprite_getSize(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getSize(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getSize"> {
    return accessLib().symbols.tguiSprite_getSize(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setOpacity(tguiSprite * thisSprite, float value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `float`
   * @returns `void`
   */
  setOpacity(
    thisSprite: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiSprite_setOpacity"> {
    return accessLib().symbols.tguiSprite_setOpacity(thisSprite, value);
  }

  /**
   * @original ```c
   * float tguiSprite_getOpacity(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `float`
   */
  getOpacity(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getOpacity"> {
    return accessLib().symbols.tguiSprite_getOpacity(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setVisibleRect(tguiSprite * thisSprite, tguiFloatRect value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `FloatRect { left: float; top: float; width: float; height: float }`
   * @returns `void`
   */
  setVisibleRect(
    thisSprite: Deno.PointerValue<unknown>,
    value: FloatRect,
  ): ResultType<"tguiSprite_setVisibleRect"> {
    return accessLib().symbols.tguiSprite_setVisibleRect(
      thisSprite,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiFloatRect tguiSprite_getVisibleRect(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `FloatRect { left: float; top: float; width: float; height: float }`
   */
  getVisibleRect(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getVisibleRect"> {
    return accessLib().symbols.tguiSprite_getVisibleRect(thisSprite);
  }

  /**
   * @original ```c
   * void tguiSprite_setRotation(tguiSprite * thisSprite, float value);
   * ```
   *
   * @param thisSprite `Sprite *`
   * @param value `float`
   * @returns `void`
   */
  setRotation(
    thisSprite: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiSprite_setRotation"> {
    return accessLib().symbols.tguiSprite_setRotation(thisSprite, value);
  }

  /**
   * @original ```c
   * float tguiSprite_getRotation(const tguiSprite * thisSprite);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @returns `float`
   */
  getRotation(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getRotation"> {
    return accessLib().symbols.tguiSprite_getRotation(thisSprite);
  }

  /**
   * @original ```c
   * tguiBool tguiSprite_isTransparentPixel(const tguiSprite * thisSprite, tguiVector2f pos);
   * ```
   *
   * @param thisSprite `const Sprite *`
   * @param pos `Vector2f { x: float; y: float }`
   * @returns `Bool`
   */
  isTransparentPixel(
    thisSprite: Deno.PointerValue<unknown>,
    pos: Vector2f,
  ): ResultType<"tguiSprite_isTransparentPixel"> {
    return accessLib().symbols.tguiSprite_isTransparentPixel(
      thisSprite,
      pos.buffer,
    );
  }
}

export class Text {
  /**
   * @original ```c
   * float tguiText_getStaticExtraHorizontalPadding(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getStaticExtraHorizontalPadding(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraHorizontalPadding"> {
    return accessLib().symbols.tguiText_getStaticExtraHorizontalPadding(
      font,
      characterSize,
    );
  }

  /**
   * @original ```c
   * float tguiText_getStaticExtraHorizontalOffset(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getStaticExtraHorizontalOffset(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraHorizontalOffset"> {
    return accessLib().symbols.tguiText_getStaticExtraHorizontalOffset(
      font,
      characterSize,
    );
  }

  /**
   * @original ```c
   * float tguiText_getStaticExtraVerticalPadding(unsigned int characterSize);
   * ```
   *
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getStaticExtraVerticalPadding(
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraVerticalPadding"> {
    return accessLib().symbols.tguiText_getStaticExtraVerticalPadding(
      characterSize,
    );
  }

  /**
   * @original ```c
   * float tguiText_getStaticLineHeight(const tguiFont * font, unsigned int characterSize);
   * ```
   *
   * @param font `const Font *`
   * @param characterSize `unsigned int`
   * @returns `float`
   */
  getStaticLineHeight(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticLineHeight"> {
    return accessLib().symbols.tguiText_getStaticLineHeight(
      font,
      characterSize,
    );
  }

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
  getStaticLineWidth(
    text: BufferSource,
    font: Deno.PointerValue<unknown>,
    characterSize: number,
    style: number,
  ): ResultType<"tguiText_getStaticLineWidth"> {
    return accessLib().symbols.tguiText_getStaticLineWidth(
      text,
      font,
      characterSize,
      style,
    );
  }

  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiText * tguiText_create();
   * ```
   *
   * @param
   * @returns `Text *`
   */
  constructor() {
    this.ptr = accessLib().symbols.tguiText_create();
  }

  /**
   * @original ```c
   * void tguiText_destroy(tguiText * text);
   * ```
   *
   * @param text `Text *`
   * @returns `void`
   */
  destroy(text: Deno.PointerValue<unknown>): ResultType<"tguiText_destroy"> {
    return accessLib().symbols.tguiText_destroy(text);
  }

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
  findBestTextSize(
    font: Deno.PointerValue<unknown>,
    height: number,
    fit: number,
  ): ResultType<"tguiText_findBestTextSize"> {
    return accessLib().symbols.tguiText_findBestTextSize(font, height, fit);
  }

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
  wordWrap(
    maxWidth: number,
    text: BufferSource,
    font: Deno.PointerValue<unknown>,
    textSize: number,
    bold: number,
  ): ResultType<"tguiText_wordWrap"> {
    return accessLib().symbols.tguiText_wordWrap(
      maxWidth,
      text,
      font,
      textSize,
      bold,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiText_getSize(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getSize(): ResultType<"tguiText_getSize"> {
    return accessLib().symbols.tguiText_getSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setPosition(tguiText * thisText, tguiVector2f value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setPosition(value: Vector2f): ResultType<"tguiText_setPosition"> {
    return accessLib().symbols.tguiText_setPosition(this.pointer, value.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiText_getPosition(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getPosition(): ResultType<"tguiText_getPosition"> {
    return accessLib().symbols.tguiText_getPosition(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setString(tguiText * thisText, tguiUtf32 value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Utf32`
   * @returns `void`
   */
  setString(value: BufferSource): ResultType<"tguiText_setString"> {
    return accessLib().symbols.tguiText_setString(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiText_getString(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Utf32`
   */
  getString(): ResultType<"tguiText_getString"> {
    return accessLib().symbols.tguiText_getString(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setCharacterSize(tguiText * thisText, unsigned int value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setCharacterSize(value: number): ResultType<"tguiText_setCharacterSize"> {
    return accessLib().symbols.tguiText_setCharacterSize(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiText_getCharacterSize(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `unsigned int`
   */
  getCharacterSize(): ResultType<"tguiText_getCharacterSize"> {
    return accessLib().symbols.tguiText_getCharacterSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setColor(tguiText * thisText, tguiColor value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setColor(value: Color): ResultType<"tguiText_setColor"> {
    return accessLib().symbols.tguiText_setColor(this.pointer, value.buffer);
  }

  /**
   * @original ```c
   * tguiColor tguiText_getColor(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getColor(): ResultType<"tguiText_getColor"> {
    return accessLib().symbols.tguiText_getColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setOpacity(tguiText * thisText, float value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `float`
   * @returns `void`
   */
  setOpacity(value: number): ResultType<"tguiText_setOpacity"> {
    return accessLib().symbols.tguiText_setOpacity(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiText_getOpacity(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getOpacity(): ResultType<"tguiText_getOpacity"> {
    return accessLib().symbols.tguiText_getOpacity(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setFont(tguiText * thisText, const tguiFont * value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `const Font *`
   * @returns `void`
   */
  setFont(value: Deno.PointerValue<unknown>): ResultType<"tguiText_setFont"> {
    return accessLib().symbols.tguiText_setFont(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiFont * tguiText_getFont(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `const Font *`
   */
  getFont(): ResultType<"tguiText_getFont"> {
    return accessLib().symbols.tguiText_getFont(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setStyle(tguiText * thisText, tguiUint32 value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Uint32`
   * @returns `void`
   */
  setStyle(value: number): ResultType<"tguiText_setStyle"> {
    return accessLib().symbols.tguiText_setStyle(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUint32 tguiText_getStyle(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Uint32`
   */
  getStyle(): ResultType<"tguiText_getStyle"> {
    return accessLib().symbols.tguiText_getStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setOutlineColor(tguiText * thisText, tguiColor value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setOutlineColor(value: Color): ResultType<"tguiText_setOutlineColor"> {
    return accessLib().symbols.tguiText_setOutlineColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiText_getOutlineColor(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getOutlineColor(): ResultType<"tguiText_getOutlineColor"> {
    return accessLib().symbols.tguiText_getOutlineColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiText_setOutlineThickness(tguiText * thisText, float value);
   * ```
   *
   * @param thisText `Text *`
   * @param value `float`
   * @returns `void`
   */
  setOutlineThickness(
    value: number,
  ): ResultType<"tguiText_setOutlineThickness"> {
    return accessLib().symbols.tguiText_setOutlineThickness(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiText_getOutlineThickness(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getOutlineThickness(): ResultType<"tguiText_getOutlineThickness"> {
    return accessLib().symbols.tguiText_getOutlineThickness(this.pointer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiText_findCharacterPos(const tguiText * thisText, size_t index);
   * ```
   *
   * @param thisText `const Text *`
   * @param index `size_t`
   * @returns `Vector2f { x: float; y: float }`
   */
  findCharacterPos(index: bigint): ResultType<"tguiText_findCharacterPos"> {
    return accessLib().symbols.tguiText_findCharacterPos(this.pointer, index);
  }

  /**
   * @original ```c
   * float tguiText_getExtraHorizontalPadding(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getExtraHorizontalPadding(): ResultType<
    "tguiText_getExtraHorizontalPadding"
  > {
    return accessLib().symbols.tguiText_getExtraHorizontalPadding(this.pointer);
  }

  /**
   * @original ```c
   * float tguiText_getExtraHorizontalOffset(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getExtraHorizontalOffset(): ResultType<"tguiText_getExtraHorizontalOffset"> {
    return accessLib().symbols.tguiText_getExtraHorizontalOffset(this.pointer);
  }

  /**
   * @original ```c
   * float tguiText_getLineHeight(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getLineHeight(): ResultType<"tguiText_getLineHeight"> {
    return accessLib().symbols.tguiText_getLineHeight(this.pointer);
  }

  /**
   * @original ```c
   * float tguiText_getLineWidth(const tguiText * thisText);
   * ```
   *
   * @param thisText `const Text *`
   * @returns `float`
   */
  getLineWidth(): ResultType<"tguiText_getLineWidth"> {
    return accessLib().symbols.tguiText_getLineWidth(this.pointer);
  }
}

export class Texture {
  /**
   * @original ```c
   * tguiTexture * tguiTexture_createNull();
   * ```
   *
   * @param
   * @returns `Texture *`
   */
  createNull(): ResultType<"tguiTexture_createNull"> {
    return accessLib().symbols.tguiTexture_createNull();
  }

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
  createFromFile(
    filename: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
  ): ResultType<"tguiTexture_createFromFile"> {
    return accessLib().symbols.tguiTexture_createFromFile(
      filename,
      partRect.buffer,
      middleRect.buffer,
    );
  }

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
  createFromFileEx(
    filename: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromFileEx"> {
    return accessLib().symbols.tguiTexture_createFromFileEx(
      filename,
      partRect.buffer,
      middleRect.buffer,
      smoothing,
    );
  }

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
  createFromMemory(
    data: BufferSource,
    dataSize: bigint,
    partRect: UIntRect,
    middleRect: UIntRect,
  ): ResultType<"tguiTexture_createFromMemory"> {
    return accessLib().symbols.tguiTexture_createFromMemory(
      data,
      dataSize,
      partRect.buffer,
      middleRect.buffer,
    );
  }

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
  createFromMemoryEx(
    data: BufferSource,
    dataSize: bigint,
    partRect: UIntRect,
    middleRect: UIntRect,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromMemoryEx"> {
    return accessLib().symbols.tguiTexture_createFromMemoryEx(
      data,
      dataSize,
      partRect.buffer,
      middleRect.buffer,
      smoothing,
    );
  }

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
  createFromPixelData(
    size: Vector2u,
    pixels: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
  ): ResultType<"tguiTexture_createFromPixelData"> {
    return accessLib().symbols.tguiTexture_createFromPixelData(
      size.buffer,
      pixels,
      partRect.buffer,
      middleRect.buffer,
    );
  }

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
  createFromPixelDataEx(
    size: Vector2u,
    pixels: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromPixelDataEx"> {
    return accessLib().symbols.tguiTexture_createFromPixelDataEx(
      size.buffer,
      pixels,
      partRect.buffer,
      middleRect.buffer,
      smoothing,
    );
  }

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
  createFromBase64(
    imageAsBase64: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
  ): ResultType<"tguiTexture_createFromBase64"> {
    return accessLib().symbols.tguiTexture_createFromBase64(
      imageAsBase64,
      partRect.buffer,
      middleRect.buffer,
    );
  }

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
  createFromBase64Ex(
    imageAsBase64: BufferSource,
    partRect: UIntRect,
    middleRect: UIntRect,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromBase64Ex"> {
    return accessLib().symbols.tguiTexture_createFromBase64Ex(
      imageAsBase64,
      partRect.buffer,
      middleRect.buffer,
      smoothing,
    );
  }

  /**
   * @original ```c
   * void tguiTexture_destroy(tguiTexture * texture);
   * ```
   *
   * @param texture `Texture *`
   * @returns `void`
   */
  destroy(
    texture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_destroy"> {
    return accessLib().symbols.tguiTexture_destroy(texture);
  }

  /**
   * @original ```c
   * void tguiTexture_setColor(tguiTexture * thisTexture, tguiColor value);
   * ```
   *
   * @param thisTexture `Texture *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setColor(
    thisTexture: Deno.PointerValue<unknown>,
    value: Color,
  ): ResultType<"tguiTexture_setColor"> {
    return accessLib().symbols.tguiTexture_setColor(thisTexture, value.buffer);
  }

  /**
   * @original ```c
   * tguiColor tguiTexture_getColor(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getColor(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getColor"> {
    return accessLib().symbols.tguiTexture_getColor(thisTexture);
  }

  /**
   * @original ```c
   * void tguiTexture_setMiddleRect(tguiTexture * thisTexture, tguiUIntRect value);
   * ```
   *
   * @param thisTexture `Texture *`
   * @param value `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   * @returns `void`
   */
  setMiddleRect(
    thisTexture: Deno.PointerValue<unknown>,
    value: UIntRect,
  ): ResultType<"tguiTexture_setMiddleRect"> {
    return accessLib().symbols.tguiTexture_setMiddleRect(
      thisTexture,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiUIntRect tguiTexture_getMiddleRect(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   */
  getMiddleRect(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getMiddleRect"> {
    return accessLib().symbols.tguiTexture_getMiddleRect(thisTexture);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTexture_getId(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Utf32`
   */
  getId(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getId"> {
    return accessLib().symbols.tguiTexture_getId(thisTexture);
  }

  /**
   * @original ```c
   * tguiVector2u tguiTexture_getImageSize(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Vector2u { x: unsigned int; y: unsigned int }`
   */
  getImageSize(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getImageSize"> {
    return accessLib().symbols.tguiTexture_getImageSize(thisTexture);
  }

  /**
   * @original ```c
   * tguiUIntRect tguiTexture_getPartRect(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `UIntRect { left: unsigned int; top: unsigned int; width: unsigned int; height: unsigned int }`
   */
  getPartRect(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getPartRect"> {
    return accessLib().symbols.tguiTexture_getPartRect(thisTexture);
  }

  /**
   * @original ```c
   * tguiBool tguiTexture_isSmooth(const tguiTexture * thisTexture);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @returns `Bool`
   */
  isSmooth(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_isSmooth"> {
    return accessLib().symbols.tguiTexture_isSmooth(thisTexture);
  }

  /**
   * @original ```c
   * tguiBool tguiTexture_isTransparentPixel(const tguiTexture * thisTexture, tguiVector2u pos);
   * ```
   *
   * @param thisTexture `const Texture *`
   * @param pos `Vector2u { x: unsigned int; y: unsigned int }`
   * @returns `Bool`
   */
  isTransparentPixel(
    thisTexture: Deno.PointerValue<unknown>,
    pos: Vector2u,
  ): ResultType<"tguiTexture_isTransparentPixel"> {
    return accessLib().symbols.tguiTexture_isTransparentPixel(
      thisTexture,
      pos.buffer,
    );
  }

  /**
   * @original ```c
   * void tguiTexture_setDefaultSmooth(tguiBool smooth);
   * ```
   *
   * @param smooth `Bool`
   * @returns `void`
   */
  setDefaultSmooth(smooth: number): ResultType<"tguiTexture_setDefaultSmooth"> {
    return accessLib().symbols.tguiTexture_setDefaultSmooth(smooth);
  }

  /**
   * @original ```c
   * tguiBool tguiTexture_getDefaultSmooth();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  getDefaultSmooth(): ResultType<"tguiTexture_getDefaultSmooth"> {
    return accessLib().symbols.tguiTexture_getDefaultSmooth();
  }
}

export class Theme {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiTheme * tguiTheme_create();
   * ```
   *
   * @param
   * @returns `Theme *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTheme_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiTheme * tguiTheme_copy(const tguiTheme * theme);
   * ```
   *
   * @param theme `const Theme *`
   * @returns `Theme *`
   */
  copy(theme: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTheme_copy(theme);
  }

  /**
   * @original ```c
   * void tguiTheme_destroy(tguiTheme * theme);
   * ```
   *
   * @param theme `Theme *`
   * @returns `void`
   */
  destroy(theme: Deno.PointerValue<unknown>): ResultType<"tguiTheme_destroy"> {
    return accessLib().symbols.tguiTheme_destroy(theme);
  }

  /**
   * @original ```c
   * tguiBool tguiTheme_load(tguiTheme * theme, const char * filename);
   * ```
   *
   * @param theme `Theme *`
   * @param filename `const char *`
   * @returns `Bool`
   */
  load(
    theme: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiTheme_load"> {
    return accessLib().symbols.tguiTheme_load(theme, filename);
  }

  /**
   * @original ```c
   * void tguiTheme_replace(tguiTheme * theme, tguiTheme * otherTheme);
   * ```
   *
   * @param theme `Theme *`
   * @param otherTheme `Theme *`
   * @returns `void`
   */
  replace(
    theme: Deno.PointerValue<unknown>,
    otherTheme: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTheme_replace"> {
    return accessLib().symbols.tguiTheme_replace(theme, otherTheme);
  }

  /**
   * @original ```c
   * tguiRendererData * tguiTheme_getRenderer(tguiTheme * theme, const char * id);
   * ```
   *
   * @param theme `Theme *`
   * @param id `const char *`
   * @returns `RendererData *`
   */
  getRenderer(
    theme: Deno.PointerValue<unknown>,
    id: BufferSource,
  ): ResultType<"tguiTheme_getRenderer"> {
    return accessLib().symbols.tguiTheme_getRenderer(theme, id);
  }

  /**
   * @original ```c
   * void tguiTheme_setDefault(tguiTheme * defaultTheme);
   * ```
   *
   * @param defaultTheme `Theme *`
   * @returns `void`
   */
  setDefault(
    defaultTheme: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTheme_setDefault"> {
    return accessLib().symbols.tguiTheme_setDefault(defaultTheme);
  }

  /**
   * @original ```c
   * tguiTheme * tguiTheme_getDefault();
   * ```
   *
   * @param
   * @returns `Theme *`
   */
  getDefault(): ResultType<"tguiTheme_getDefault"> {
    return accessLib().symbols.tguiTheme_getDefault();
  }

  /**
   * @original ```c
   * tguiBool tguiTheme_hasGlobalProperty(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  hasGlobalProperty(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_hasGlobalProperty"> {
    return accessLib().symbols.tguiTheme_hasGlobalProperty(theme, property);
  }

  /**
   * @original ```c
   * tguiBool tguiTheme_getGlobalPropertyBool(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  getGlobalPropertyBool(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyBool"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyBool(theme, property);
  }

  /**
   * @original ```c
   * tguiFont * tguiTheme_getGlobalPropertyFont(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Font *`
   */
  getGlobalPropertyFont(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyFont"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyFont(theme, property);
  }

  /**
   * @original ```c
   * tguiColor tguiTheme_getGlobalPropertyColor(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getGlobalPropertyColor(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyColor"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyColor(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getGlobalPropertyString(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  getGlobalPropertyString(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyString"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyString(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * float tguiTheme_getGlobalPropertyNumber(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `float`
   */
  getGlobalPropertyNumber(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyNumber"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyNumber(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * tguiOutline * tguiTheme_getGlobalPropertyOutline(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Outline *`
   */
  getGlobalPropertyOutline(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyOutline"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyOutline(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * tguiTexture * tguiTheme_getGlobalPropertyTexture(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Texture *`
   */
  getGlobalPropertyTexture(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyTexture"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyTexture(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiTheme_getGlobalPropertyTextStyle(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `Uint32`
   */
  getGlobalPropertyTextStyle(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyTextStyle"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyTextStyle(
      theme,
      property,
    );
  }

  /**
   * @original ```c
   * tguiRendererData * tguiTheme_getGlobalPropertyRendererData(const tguiTheme * theme, tguiUtf32 property);
   * ```
   *
   * @param theme `const Theme *`
   * @param property `Utf32`
   * @returns `RendererData *`
   */
  getGlobalPropertyRendererData(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyRendererData"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyRendererData(
      theme,
      property,
    );
  }

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
  addRendererDefaultSubwidget(
    widgetType: BufferSource,
    property: BufferSource,
    propertyWidgetType: BufferSource,
  ): ResultType<"tguiTheme_addRendererDefaultSubwidget"> {
    return accessLib().symbols.tguiTheme_addRendererDefaultSubwidget(
      widgetType,
      property,
      propertyWidgetType,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererDefaultSubwidget(tguiUtf32 widgetType, tguiUtf32 property);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  getRendererDefaultSubwidget(
    widgetType: BufferSource,
    property: BufferSource,
  ): ResultType<"tguiTheme_getRendererDefaultSubwidget"> {
    return accessLib().symbols.tguiTheme_getRendererDefaultSubwidget(
      widgetType,
      property,
    );
  }

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
  addRendererInheritedGlobalProperty(
    widgetType: BufferSource,
    property: BufferSource,
    globalProperty: BufferSource,
  ): ResultType<"tguiTheme_addRendererInheritedGlobalProperty"> {
    return accessLib().symbols.tguiTheme_addRendererInheritedGlobalProperty(
      widgetType,
      property,
      globalProperty,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererInheritedGlobalProperty(tguiUtf32 widgetType, tguiUtf32 property);
   * ```
   *
   * @param widgetType `Utf32`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  getRendererInheritedGlobalProperty(
    widgetType: BufferSource,
    property: BufferSource,
  ): ResultType<"tguiTheme_getRendererInheritedGlobalProperty"> {
    return accessLib().symbols.tguiTheme_getRendererInheritedGlobalProperty(
      widgetType,
      property,
    );
  }

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
  addRenderer(
    id: BufferSource,
    renderer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTheme_addRenderer"> {
    return accessLib().symbols.tguiTheme_addRenderer(
      this.pointer,
      id,
      renderer,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiTheme_removeRenderer(tguiTheme * thisTheme, tguiUtf32 id);
   * ```
   *
   * @param thisTheme `Theme *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  removeRenderer(id: BufferSource): ResultType<"tguiTheme_removeRenderer"> {
    return accessLib().symbols.tguiTheme_removeRenderer(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getPrimary(const tguiTheme * thisTheme);
   * ```
   *
   * @param thisTheme `const Theme *`
   * @returns `Utf32`
   */
  getPrimary(): ResultType<"tguiTheme_getPrimary"> {
    return accessLib().symbols.tguiTheme_getPrimary(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTheme_addRendererInheritanceParent(tguiUtf32 widgetType, tguiUtf32 parentType);
   * ```
   *
   * @param widgetType `Utf32`
   * @param parentType `Utf32`
   * @returns `void`
   */
  addRendererInheritanceParent(
    widgetType: BufferSource,
    parentType: BufferSource,
  ): ResultType<"tguiTheme_addRendererInheritanceParent"> {
    return accessLib().symbols.tguiTheme_addRendererInheritanceParent(
      widgetType,
      parentType,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTheme_getRendererInheritanceParent(tguiUtf32 widgetType);
   * ```
   *
   * @param widgetType `Utf32`
   * @returns `Utf32`
   */
  getRendererInheritanceParent(
    widgetType: BufferSource,
  ): ResultType<"tguiTheme_getRendererInheritanceParent"> {
    return accessLib().symbols.tguiTheme_getRendererInheritanceParent(
      widgetType,
    );
  }
}

export class Timer {
  /**
   * @original ```c
   * void tguiTimer_scheduleCallback(void (*)(void) callback, tguiDuration interval);
   * ```
   *
   * @param callback `void (*)(void)`
   * @param interval `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  scheduleCallback(
    callback: Deno.PointerValue<unknown>,
    interval: Duration,
  ): ResultType<"tguiTimer_scheduleCallback"> {
    return accessLib().symbols.tguiTimer_scheduleCallback(
      callback,
      interval.buffer,
    );
  }

  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

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
  constructor(
    callback: Deno.PointerValue<unknown>,
    interval: Duration,
    enable: number,
  ) {
    this.ptr = accessLib().symbols.tguiTimer_create(
      callback,
      interval.buffer,
      enable,
    );
  }

  /**
   * @original ```c
   * void tguiTimer_destroy(tguiTimer * timer);
   * ```
   *
   * @param timer `Timer *`
   * @returns `void`
   */
  destroy(timer: Deno.PointerValue<unknown>): ResultType<"tguiTimer_destroy"> {
    return accessLib().symbols.tguiTimer_destroy(timer);
  }

  /**
   * @original ```c
   * void tguiTimer_setInterval(tguiTimer * timer, tguiDuration interval);
   * ```
   *
   * @param timer `Timer *`
   * @param interval `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  setInterval(
    timer: Deno.PointerValue<unknown>,
    interval: Duration,
  ): ResultType<"tguiTimer_setInterval"> {
    return accessLib().symbols.tguiTimer_setInterval(timer, interval.buffer);
  }

  /**
   * @original ```c
   * tguiDuration tguiTimer_getInterval(const tguiTimer * timer);
   * ```
   *
   * @param timer `const Timer *`
   * @returns `Duration { nanoseconds: long long }`
   */
  getInterval(
    timer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_getInterval"> {
    return accessLib().symbols.tguiTimer_getInterval(timer);
  }

  /**
   * @original ```c
   * void tguiTimer_setEnabled(tguiTimer * timer, tguiBool enabled);
   * ```
   *
   * @param timer `Timer *`
   * @param enabled `Bool`
   * @returns `void`
   */
  setEnabled(
    timer: Deno.PointerValue<unknown>,
    enabled: number,
  ): ResultType<"tguiTimer_setEnabled"> {
    return accessLib().symbols.tguiTimer_setEnabled(timer, enabled);
  }

  /**
   * @original ```c
   * tguiBool tguiTimer_isEnabled(const tguiTimer * timer);
   * ```
   *
   * @param timer `const Timer *`
   * @returns `Bool`
   */
  isEnabled(
    timer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_isEnabled"> {
    return accessLib().symbols.tguiTimer_isEnabled(timer);
  }

  /**
   * @original ```c
   * void tguiTimer_setCallback(tguiTimer * timer, void (*)(tguiTimer *) callback);
   * ```
   *
   * @param timer `Timer *`
   * @param callback `void (*)(Timer *)`
   * @returns `void`
   */
  setCallback(
    timer: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_setCallback"> {
    return accessLib().symbols.tguiTimer_setCallback(timer, callback);
  }

  /**
   * @original ```c
   * void tguiTimer_restart(tguiTimer * timer);
   * ```
   *
   * @param timer `Timer *`
   * @returns `void`
   */
  restart(timer: Deno.PointerValue<unknown>): ResultType<"tguiTimer_restart"> {
    return accessLib().symbols.tguiTimer_restart(timer);
  }
}

export class ToolTip {
  /**
   * @original ```c
   * void tguiToolTip_setInitialDelay(tguiDuration delay);
   * ```
   *
   * @param delay `Duration { nanoseconds: long long }`
   * @returns `void`
   */
  setInitialDelay(delay: Duration): ResultType<"tguiToolTip_setInitialDelay"> {
    return accessLib().symbols.tguiToolTip_setInitialDelay(delay.buffer);
  }

  /**
   * @original ```c
   * tguiDuration tguiToolTip_getInitialDelay();
   * ```
   *
   * @param
   * @returns `Duration { nanoseconds: long long }`
   */
  getInitialDelay(): ResultType<"tguiToolTip_getInitialDelay"> {
    return accessLib().symbols.tguiToolTip_getInitialDelay();
  }

  /**
   * @original ```c
   * void tguiToolTip_setDistanceToMouse(tguiVector2f distance);
   * ```
   *
   * @param distance `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setDistanceToMouse(
    distance: Vector2f,
  ): ResultType<"tguiToolTip_setDistanceToMouse"> {
    return accessLib().symbols.tguiToolTip_setDistanceToMouse(distance.buffer);
  }

  /**
   * @original ```c
   * tguiVector2f tguiToolTip_getDistanceToMouse();
   * ```
   *
   * @param
   * @returns `Vector2f { x: float; y: float }`
   */
  getDistanceToMouse(): ResultType<"tguiToolTip_getDistanceToMouse"> {
    return accessLib().symbols.tguiToolTip_getDistanceToMouse();
  }

  /**
   * @original ```c
   * void tguiToolTip_setShowOnDisabledWidget(tguiBool show);
   * ```
   *
   * @param show `Bool`
   * @returns `void`
   */
  setShowOnDisabledWidget(
    show: number,
  ): ResultType<"tguiToolTip_setShowOnDisabledWidget"> {
    return accessLib().symbols.tguiToolTip_setShowOnDisabledWidget(show);
  }

  /**
   * @original ```c
   * tguiBool tguiToolTip_getShowOnDisabledWidget();
   * ```
   *
   * @param
   * @returns `Bool`
   */
  getShowOnDisabledWidget(): ResultType<"tguiToolTip_getShowOnDisabledWidget"> {
    return accessLib().symbols.tguiToolTip_getShowOnDisabledWidget();
  }
}

export class SFMLEvent {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * sfEvent * SFMLEvent_create();
   * ```
   *
   * @param
   * @returns `sfEvent *`
   */
  constructor() {
    this.ptr = accessLib().symbols.SFMLEvent_create();
  }

  /**
   * @original ```c
   * SFMLEventUnion SFMLEvent_convert(sfEvent * SFMLEvent);
   * ```
   *
   * @param SFMLEvent `sfEvent *`
   * @returns `SFMLEventUnion { type: sfEventType; size: sfSizeEvent; key: sfKeyEvent; text: sfTextEvent; mouseMove: sfMouseMoveEvent; mouseButton: sfMouseButtonEvent; mouseWheel: sfMouseWheelEvent; mouseWheelScroll: sfMouseWheelScrollEvent; joystickMove: sfJoystickMoveEvent; joystickButton: sfJoystickButtonEvent; joystickConnect: sfJoystickConnectEvent; touch: sfTouchEvent; sensor: sfSensorEvent }`
   */
  convert(
    SFMLEvent: Deno.PointerValue<unknown>,
  ): ResultType<"SFMLEvent_convert"> {
    return accessLib().symbols.SFMLEvent_convert(SFMLEvent);
  }

  /**
   * @original ```c
   * void SFMLEvent_destroy(sfEvent * SFMLEvent);
   * ```
   *
   * @param SFMLEvent `sfEvent *`
   * @returns `void`
   */
  destroy(
    SFMLEvent: Deno.PointerValue<unknown>,
  ): ResultType<"SFMLEvent_destroy"> {
    return accessLib().symbols.SFMLEvent_destroy(SFMLEvent);
  }
}

export class renderWindow {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

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
  constructor(mode: sfVideoMode, title: BufferSource, style: number) {
    this.ptr = accessLib().symbols.renderWindow_create(
      mode.buffer,
      title,
      style,
    );
  }

  /**
   * @original ```c
   * sfBool renderWindow_isOpen(const sfWindow * window);
   * ```
   *
   * @param window `const sfWindow *`
   * @returns `sfBool`
   */
  isOpen(): ResultType<"renderWindow_isOpen"> {
    return accessLib().symbols.renderWindow_isOpen(this.pointer);
  }

  /**
   * @original ```c
   * sfBool renderWindow_pollEvent(sfRenderWindow * window, sfEvent * event);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @param event `sfEvent *`
   * @returns `sfBool`
   */
  pollEvent(
    event: Deno.PointerValue<unknown>,
  ): ResultType<"renderWindow_pollEvent"> {
    return accessLib().symbols.renderWindow_pollEvent(this.pointer, event);
  }

  /**
   * @original ```c
   * void renderWindow_close(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  close(): ResultType<"renderWindow_close"> {
    return accessLib().symbols.renderWindow_close(this.pointer);
  }

  /**
   * @original ```c
   * void renderWindow_clear(sfRenderWindow * window, sfColor color);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @param color `sfColor { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char }`
   * @returns `void`
   */
  clear(color: sfColor): ResultType<"renderWindow_clear"> {
    return accessLib().symbols.renderWindow_clear(this.pointer, color.buffer);
  }

  /**
   * @original ```c
   * void renderWindow_display(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  display(): ResultType<"renderWindow_display"> {
    return accessLib().symbols.renderWindow_display(this.pointer);
  }

  /**
   * @original ```c
   * void renderWindow_destroy(sfRenderWindow * window);
   * ```
   *
   * @param window `sfRenderWindow *`
   * @returns `void`
   */
  destroy(): ResultType<"renderWindow_destroy"> {
    return accessLib().symbols.renderWindow_destroy(this.pointer);
  }
}

export class BitmapButton extends Button {
  /**
   * @original ```c
   * tguiWidget * tguiBitmapButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiBitmapButton_create());
  }

  /**
   * @original ```c
   * void tguiBitmapButton_setImage(tguiWidget * thisWidget, const tguiTexture * value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setImage(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBitmapButton_setImage"> {
    return accessLib().symbols.tguiBitmapButton_setImage(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiBitmapButton_getImage(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `const Texture *`
   */
  getImage(): ResultType<"tguiBitmapButton_getImage"> {
    return accessLib().symbols.tguiBitmapButton_getImage(this.pointer);
  }

  /**
   * @original ```c
   * void tguiBitmapButton_setImageScaling(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setImageScaling(
    value: number,
  ): ResultType<"tguiBitmapButton_setImageScaling"> {
    return accessLib().symbols.tguiBitmapButton_setImageScaling(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiBitmapButton_getImageScaling(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getImageScaling(): ResultType<"tguiBitmapButton_getImageScaling"> {
    return accessLib().symbols.tguiBitmapButton_getImageScaling(this.pointer);
  }
}

export class ChatBox extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiChatBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiChatBox_create());
  }

  /**
   * @original ```c
   * void tguiChatBox_addLine(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  addLine(text: BufferSource): ResultType<"tguiChatBox_addLine"> {
    return accessLib().symbols.tguiChatBox_addLine(this.pointer, text);
  }

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
  addLineWithColor(
    text: BufferSource,
    color: Color,
  ): ResultType<"tguiChatBox_addLineWithColor"> {
    return accessLib().symbols.tguiChatBox_addLineWithColor(
      this.pointer,
      text,
      color.buffer,
    );
  }

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
  addLineWithColorAndStyle(
    text: BufferSource,
    color: Color,
    style: number,
  ): ResultType<"tguiChatBox_addLineWithColorAndStyle"> {
    return accessLib().symbols.tguiChatBox_addLineWithColorAndStyle(
      this.pointer,
      text,
      color.buffer,
      style,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiChatBox_getLine(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Utf32`
   */
  getLine(lineIndex: bigint): ResultType<"tguiChatBox_getLine"> {
    return accessLib().symbols.tguiChatBox_getLine(this.pointer, lineIndex);
  }

  /**
   * @original ```c
   * tguiColor tguiChatBox_getLineColor(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getLineColor(lineIndex: bigint): ResultType<"tguiChatBox_getLineColor"> {
    return accessLib().symbols.tguiChatBox_getLineColor(
      this.pointer,
      lineIndex,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiChatBox_getLineTextStyle(const tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param lineIndex `size_t`
   * @returns `Uint32`
   */
  getLineTextStyle(
    lineIndex: bigint,
  ): ResultType<"tguiChatBox_getLineTextStyle"> {
    return accessLib().symbols.tguiChatBox_getLineTextStyle(
      this.pointer,
      lineIndex,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChatBox_removeLine(tguiWidget * thisWidget, size_t lineIndex);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param lineIndex `size_t`
   * @returns `Bool`
   */
  removeLine(lineIndex: bigint): ResultType<"tguiChatBox_removeLine"> {
    return accessLib().symbols.tguiChatBox_removeLine(this.pointer, lineIndex);
  }

  /**
   * @original ```c
   * void tguiChatBox_removeAllLines(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllLines(): ResultType<"tguiChatBox_removeAllLines"> {
    return accessLib().symbols.tguiChatBox_removeAllLines(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiChatBox_getLineAmount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getLineAmount(): ResultType<"tguiChatBox_getLineAmount"> {
    return accessLib().symbols.tguiChatBox_getLineAmount(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBox_setLineLimit(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setLineLimit(value: bigint): ResultType<"tguiChatBox_setLineLimit"> {
    return accessLib().symbols.tguiChatBox_setLineLimit(this.pointer, value);
  }

  /**
   * @original ```c
   * size_t tguiChatBox_getLineLimit(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getLineLimit(): ResultType<"tguiChatBox_getLineLimit"> {
    return accessLib().symbols.tguiChatBox_getLineLimit(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBox_setTextColor(tguiWidget * thisWidget, tguiColor value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiChatBox_setTextColor"> {
    return accessLib().symbols.tguiChatBox_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChatBox_getTextColor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiChatBox_getTextColor"> {
    return accessLib().symbols.tguiChatBox_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBox_setTextStyle(tguiWidget * thisWidget, tguiUint32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiChatBox_setTextStyle"> {
    return accessLib().symbols.tguiChatBox_setTextStyle(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUint32 tguiChatBox_getTextStyle(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiChatBox_getTextStyle"> {
    return accessLib().symbols.tguiChatBox_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBox_setLinesStartFromTop(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setLinesStartFromTop(
    value: number,
  ): ResultType<"tguiChatBox_setLinesStartFromTop"> {
    return accessLib().symbols.tguiChatBox_setLinesStartFromTop(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChatBox_getLinesStartFromTop(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getLinesStartFromTop(): ResultType<"tguiChatBox_getLinesStartFromTop"> {
    return accessLib().symbols.tguiChatBox_getLinesStartFromTop(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBox_setNewLinesBelowOthers(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setNewLinesBelowOthers(
    value: number,
  ): ResultType<"tguiChatBox_setNewLinesBelowOthers"> {
    return accessLib().symbols.tguiChatBox_setNewLinesBelowOthers(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiChatBox_getNewLinesBelowOthers(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getNewLinesBelowOthers(): ResultType<"tguiChatBox_getNewLinesBelowOthers"> {
    return accessLib().symbols.tguiChatBox_getNewLinesBelowOthers(this.pointer);
  }
}

export class CheckBox extends RadioButton {
  /**
   * @original ```c
   * tguiWidget * tguiCheckBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiCheckBox_create());
  }
}

export class ColorPicker extends ChildWindow {
  /**
   * @original ```c
   * tguiWidget * tguiColorPicker_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiColorPicker_create());
  }

  /**
   * @original ```c
   * void tguiColorPicker_setColor(tguiWidget * thisWidget, tguiColor value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setColor(value: Color): ResultType<"tguiColorPicker_setColor"> {
    return accessLib().symbols.tguiColorPicker_setColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiColorPicker_getColor(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getColor(): ResultType<"tguiColorPicker_getColor"> {
    return accessLib().symbols.tguiColorPicker_getColor(this.pointer);
  }
}

export class ComboBox extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiComboBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiComboBox_create());
  }

  /**
   * @original ```c
   * void tguiComboBox_setItemsToDisplay(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setItemsToDisplay(
    value: bigint,
  ): ResultType<"tguiComboBox_setItemsToDisplay"> {
    return accessLib().symbols.tguiComboBox_setItemsToDisplay(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * size_t tguiComboBox_getItemsToDisplay(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getItemsToDisplay(): ResultType<"tguiComboBox_getItemsToDisplay"> {
    return accessLib().symbols.tguiComboBox_getItemsToDisplay(this.pointer);
  }

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
  addItem(
    item: BufferSource,
    id: BufferSource,
  ): ResultType<"tguiComboBox_addItem"> {
    return accessLib().symbols.tguiComboBox_addItem(this.pointer, item, id);
  }

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
  addMultipleItems(
    items: Deno.PointerValue<unknown>,
    itemsLength: bigint,
  ): ResultType<"tguiComboBox_addMultipleItems"> {
    return accessLib().symbols.tguiComboBox_addMultipleItems(
      this.pointer,
      items,
      itemsLength,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Utf32`
   */
  getItemById(id: BufferSource): ResultType<"tguiComboBox_getItemById"> {
    return accessLib().symbols.tguiComboBox_getItemById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItemByIndex(index: bigint): ResultType<"tguiComboBox_getItemByIndex"> {
    return accessLib().symbols.tguiComboBox_getItemByIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * int tguiComboBox_getIndexById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `int`
   */
  getIndexById(id: BufferSource): ResultType<"tguiComboBox_getIndexById"> {
    return accessLib().symbols.tguiComboBox_getIndexById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getIdByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getIdByIndex(index: bigint): ResultType<"tguiComboBox_getIdByIndex"> {
    return accessLib().symbols.tguiComboBox_getIdByIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiComboBox_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBox_getItems"> {
    return accessLib().symbols.tguiComboBox_getItems(this.pointer, returnCount);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiComboBox_getItemIds(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getItemIds(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBox_getItemIds"> {
    return accessLib().symbols.tguiComboBox_getItemIds(
      this.pointer,
      returnCount,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  setSelectedItem(
    item: BufferSource,
  ): ResultType<"tguiComboBox_setSelectedItem"> {
    return accessLib().symbols.tguiComboBox_setSelectedItem(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItemById(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  setSelectedItemById(
    item: BufferSource,
  ): ResultType<"tguiComboBox_setSelectedItemById"> {
    return accessLib().symbols.tguiComboBox_setSelectedItemById(
      this.pointer,
      item,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_setSelectedItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  setSelectedItemByIndex(
    index: bigint,
  ): ResultType<"tguiComboBox_setSelectedItemByIndex"> {
    return accessLib().symbols.tguiComboBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  /**
   * @original ```c
   * void tguiComboBox_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  deselectItem(): ResultType<"tguiComboBox_deselectItem"> {
    return accessLib().symbols.tguiComboBox_deselectItem(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  removeItem(item: BufferSource): ResultType<"tguiComboBox_removeItem"> {
    return accessLib().symbols.tguiComboBox_removeItem(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  removeItemById(id: BufferSource): ResultType<"tguiComboBox_removeItemById"> {
    return accessLib().symbols.tguiComboBox_removeItemById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_removeItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeItemByIndex(
    index: bigint,
  ): ResultType<"tguiComboBox_removeItemByIndex"> {
    return accessLib().symbols.tguiComboBox_removeItemByIndex(
      this.pointer,
      index,
    );
  }

  /**
   * @original ```c
   * void tguiComboBox_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllItems(): ResultType<"tguiComboBox_removeAllItems"> {
    return accessLib().symbols.tguiComboBox_removeAllItems(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getSelectedItem(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedItem(): ResultType<"tguiComboBox_getSelectedItem"> {
    return accessLib().symbols.tguiComboBox_getSelectedItem(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getSelectedItemId(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedItemId(): ResultType<"tguiComboBox_getSelectedItemId"> {
    return accessLib().symbols.tguiComboBox_getSelectedItemId(this.pointer);
  }

  /**
   * @original ```c
   * int tguiComboBox_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getSelectedItemIndex(): ResultType<"tguiComboBox_getSelectedItemIndex"> {
    return accessLib().symbols.tguiComboBox_getSelectedItemIndex(this.pointer);
  }

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
  changeItem(
    originalValue: BufferSource,
    newValue: BufferSource,
  ): ResultType<"tguiComboBox_changeItem"> {
    return accessLib().symbols.tguiComboBox_changeItem(
      this.pointer,
      originalValue,
      newValue,
    );
  }

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
  changeItemById(
    id: BufferSource,
    newValue: BufferSource,
  ): ResultType<"tguiComboBox_changeItemById"> {
    return accessLib().symbols.tguiComboBox_changeItemById(
      this.pointer,
      id,
      newValue,
    );
  }

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
  changeItemByIndex(
    index: bigint,
    newValue: BufferSource,
  ): ResultType<"tguiComboBox_changeItemByIndex"> {
    return accessLib().symbols.tguiComboBox_changeItemByIndex(
      this.pointer,
      index,
      newValue,
    );
  }

  /**
   * @original ```c
   * size_t tguiComboBox_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getItemCount(): ResultType<"tguiComboBox_getItemCount"> {
    return accessLib().symbols.tguiComboBox_getItemCount(this.pointer);
  }

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
  setItemData(
    index: bigint,
    data: BufferSource,
  ): ResultType<"tguiComboBox_setItemData"> {
    return accessLib().symbols.tguiComboBox_setItemData(
      this.pointer,
      index,
      data,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItemData(index: bigint): ResultType<"tguiComboBox_getItemData"> {
    return accessLib().symbols.tguiComboBox_getItemData(this.pointer, index);
  }

  /**
   * @original ```c
   * void tguiComboBox_setMaximumItems(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setMaximumItems(value: bigint): ResultType<"tguiComboBox_setMaximumItems"> {
    return accessLib().symbols.tguiComboBox_setMaximumItems(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * size_t tguiComboBox_getMaximumItems(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getMaximumItems(): ResultType<"tguiComboBox_getMaximumItems"> {
    return accessLib().symbols.tguiComboBox_getMaximumItems(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBox_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiComboBox_setDefaultText"> {
    return accessLib().symbols.tguiComboBox_setDefaultText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiComboBox_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getDefaultText(): ResultType<"tguiComboBox_getDefaultText"> {
    return accessLib().symbols.tguiComboBox_getDefaultText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBox_setExpandDirection(tguiWidget * thisWidget, tguiComboBoxExpandDirection value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ComboBoxExpandDirection`
   * @returns `void`
   */
  setExpandDirection(
    value: number,
  ): ResultType<"tguiComboBox_setExpandDirection"> {
    return accessLib().symbols.tguiComboBox_setExpandDirection(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiComboBoxExpandDirection tguiComboBox_getExpandDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ComboBoxExpandDirection`
   */
  getExpandDirection(): ResultType<"tguiComboBox_getExpandDirection"> {
    return accessLib().symbols.tguiComboBox_getExpandDirection(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBox_setChangeItemOnScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setChangeItemOnScroll(
    value: number,
  ): ResultType<"tguiComboBox_setChangeItemOnScroll"> {
    return accessLib().symbols.tguiComboBox_setChangeItemOnScroll(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_getChangeItemOnScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getChangeItemOnScroll(): ResultType<"tguiComboBox_getChangeItemOnScroll"> {
    return accessLib().symbols.tguiComboBox_getChangeItemOnScroll(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_contains(const tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  contains(item: BufferSource): ResultType<"tguiComboBox_contains"> {
    return accessLib().symbols.tguiComboBox_contains(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiComboBox_containsId(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  containsId(id: BufferSource): ResultType<"tguiComboBox_containsId"> {
    return accessLib().symbols.tguiComboBox_containsId(this.pointer, id);
  }
}

export class EditBox extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiEditBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiEditBox_create());
  }

  /**
   * @original ```c
   * void tguiEditBox_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiEditBox_setText"> {
    return accessLib().symbols.tguiEditBox_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiEditBox_getText"> {
    return accessLib().symbols.tguiEditBox_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiEditBox_setDefaultText"> {
    return accessLib().symbols.tguiEditBox_setDefaultText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getDefaultText(): ResultType<"tguiEditBox_getDefaultText"> {
    return accessLib().symbols.tguiEditBox_getDefaultText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setPasswordCharacter(tguiWidget * thisWidget, tguiChar32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Char32`
   * @returns `void`
   */
  setPasswordCharacter(
    value: number,
  ): ResultType<"tguiEditBox_setPasswordCharacter"> {
    return accessLib().symbols.tguiEditBox_setPasswordCharacter(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiChar32 tguiEditBox_getPasswordCharacter(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Char32`
   */
  getPasswordCharacter(): ResultType<"tguiEditBox_getPasswordCharacter"> {
    return accessLib().symbols.tguiEditBox_getPasswordCharacter(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setMaximumCharacters(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setMaximumCharacters(
    value: number,
  ): ResultType<"tguiEditBox_setMaximumCharacters"> {
    return accessLib().symbols.tguiEditBox_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiEditBox_getMaximumCharacters(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getMaximumCharacters(): ResultType<"tguiEditBox_getMaximumCharacters"> {
    return accessLib().symbols.tguiEditBox_getMaximumCharacters(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setAlignment(value: number): ResultType<"tguiEditBox_setAlignment"> {
    return accessLib().symbols.tguiEditBox_setAlignment(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiEditBox_getAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getAlignment(): ResultType<"tguiEditBox_getAlignment"> {
    return accessLib().symbols.tguiEditBox_getAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setTextWidthLimited(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setTextWidthLimited(
    value: number,
  ): ResultType<"tguiEditBox_setTextWidthLimited"> {
    return accessLib().symbols.tguiEditBox_setTextWidthLimited(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiEditBox_isTextWidthLimited(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isTextWidthLimited(): ResultType<"tguiEditBox_isTextWidthLimited"> {
    return accessLib().symbols.tguiEditBox_isTextWidthLimited(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setReadOnly(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setReadOnly(value: number): ResultType<"tguiEditBox_setReadOnly"> {
    return accessLib().symbols.tguiEditBox_setReadOnly(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiEditBox_isReadOnly(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isReadOnly(): ResultType<"tguiEditBox_isReadOnly"> {
    return accessLib().symbols.tguiEditBox_isReadOnly(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setCaretPosition(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setCaretPosition(value: bigint): ResultType<"tguiEditBox_setCaretPosition"> {
    return accessLib().symbols.tguiEditBox_setCaretPosition(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * size_t tguiEditBox_getCaretPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getCaretPosition(): ResultType<"tguiEditBox_getCaretPosition"> {
    return accessLib().symbols.tguiEditBox_getCaretPosition(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBox_setSuffix(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setSuffix(value: BufferSource): ResultType<"tguiEditBox_setSuffix"> {
    return accessLib().symbols.tguiEditBox_setSuffix(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getSuffix(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSuffix(): ResultType<"tguiEditBox_getSuffix"> {
    return accessLib().symbols.tguiEditBox_getSuffix(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiEditBox_setInputValidator(tguiWidget * thisWidget, tguiUtf32 regex);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param regex `Utf32`
   * @returns `Bool`
   */
  setInputValidator(
    regex: BufferSource,
  ): ResultType<"tguiEditBox_setInputValidator"> {
    return accessLib().symbols.tguiEditBox_setInputValidator(
      this.pointer,
      regex,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getInputValidator(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getInputValidator(): ResultType<"tguiEditBox_getInputValidator"> {
    return accessLib().symbols.tguiEditBox_getInputValidator(this.pointer);
  }

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
  selectText(
    start: bigint,
    length: bigint,
  ): ResultType<"tguiEditBox_selectText"> {
    return accessLib().symbols.tguiEditBox_selectText(
      this.pointer,
      start,
      length,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiEditBox_getSelectedText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedText(): ResultType<"tguiEditBox_getSelectedText"> {
    return accessLib().symbols.tguiEditBox_getSelectedText(this.pointer);
  }
}

export class EditBoxSlider {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiWidget * tguiEditBoxSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    this.ptr = accessLib().symbols.tguiEditBoxSlider_create();
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getEditBoxRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getEditBoxRenderer(): ResultType<"tguiEditBoxSlider_getEditBoxRenderer"> {
    return accessLib().symbols.tguiEditBoxSlider_getEditBoxRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getEditBoxSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getEditBoxSharedRenderer(): ResultType<
    "tguiEditBoxSlider_getEditBoxSharedRenderer"
  > {
    return accessLib().symbols.tguiEditBoxSlider_getEditBoxSharedRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getSliderRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSliderRenderer(): ResultType<"tguiEditBoxSlider_getSliderRenderer"> {
    return accessLib().symbols.tguiEditBoxSlider_getSliderRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxSlider_getSliderSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSliderSharedRenderer(): ResultType<
    "tguiEditBoxSlider_getSliderSharedRenderer"
  > {
    return accessLib().symbols.tguiEditBoxSlider_getSliderSharedRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiEditBoxSlider_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `Bool`
   */
  setValue(value: number): ResultType<"tguiEditBoxSlider_setValue"> {
    return accessLib().symbols.tguiEditBoxSlider_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiEditBoxSlider_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getValue(): ResultType<"tguiEditBoxSlider_getValue"> {
    return accessLib().symbols.tguiEditBoxSlider_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiEditBoxSlider_setMinimum"> {
    return accessLib().symbols.tguiEditBoxSlider_setMinimum(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiEditBoxSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiEditBoxSlider_getMinimum"> {
    return accessLib().symbols.tguiEditBoxSlider_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiEditBoxSlider_setMaximum"> {
    return accessLib().symbols.tguiEditBoxSlider_setMaximum(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiEditBoxSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiEditBoxSlider_getMaximum"> {
    return accessLib().symbols.tguiEditBoxSlider_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStep(value: number): ResultType<"tguiEditBoxSlider_setStep"> {
    return accessLib().symbols.tguiEditBoxSlider_setStep(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiEditBoxSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStep(): ResultType<"tguiEditBoxSlider_getStep"> {
    return accessLib().symbols.tguiEditBoxSlider_getStep(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxSlider_setDecimalPlaces(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setDecimalPlaces(
    value: number,
  ): ResultType<"tguiEditBoxSlider_setDecimalPlaces"> {
    return accessLib().symbols.tguiEditBoxSlider_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiEditBoxSlider_getDecimalPlaces(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getDecimalPlaces(): ResultType<"tguiEditBoxSlider_getDecimalPlaces"> {
    return accessLib().symbols.tguiEditBoxSlider_getDecimalPlaces(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxSlider_setTextAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setTextAlignment(
    value: number,
  ): ResultType<"tguiEditBoxSlider_setTextAlignment"> {
    return accessLib().symbols.tguiEditBoxSlider_setTextAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiEditBoxSlider_getTextAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getTextAlignment(): ResultType<"tguiEditBoxSlider_getTextAlignment"> {
    return accessLib().symbols.tguiEditBoxSlider_getTextAlignment(this.pointer);
  }
}

export class FileDialog extends ChildWindow {
  /**
   * @original ```c
   * tguiWidget * tguiFileDialog_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiFileDialog_create());
  }

  /**
   * @original ```c
   * void tguiFileDialog_setFilename(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setFilename(value: BufferSource): ResultType<"tguiFileDialog_setFilename"> {
    return accessLib().symbols.tguiFileDialog_setFilename(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getFilename(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getFilename(): ResultType<"tguiFileDialog_getFilename"> {
    return accessLib().symbols.tguiFileDialog_getFilename(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiFileDialog_getFileTypeFiltersIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getFileTypeFiltersIndex(): ResultType<
    "tguiFileDialog_getFileTypeFiltersIndex"
  > {
    return accessLib().symbols.tguiFileDialog_getFileTypeFiltersIndex(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setConfirmButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setConfirmButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setConfirmButtonText"> {
    return accessLib().symbols.tguiFileDialog_setConfirmButtonText(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getConfirmButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getConfirmButtonText(): ResultType<"tguiFileDialog_getConfirmButtonText"> {
    return accessLib().symbols.tguiFileDialog_getConfirmButtonText(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setCancelButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setCancelButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setCancelButtonText"> {
    return accessLib().symbols.tguiFileDialog_setCancelButtonText(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getCancelButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getCancelButtonText(): ResultType<"tguiFileDialog_getCancelButtonText"> {
    return accessLib().symbols.tguiFileDialog_getCancelButtonText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialog_setCreateFolderButtonText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setCreateFolderButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setCreateFolderButtonText"> {
    return accessLib().symbols.tguiFileDialog_setCreateFolderButtonText(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getCreateFolderButtonText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getCreateFolderButtonText(): ResultType<
    "tguiFileDialog_getCreateFolderButtonText"
  > {
    return accessLib().symbols.tguiFileDialog_getCreateFolderButtonText(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setFilenameLabelText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setFilenameLabelText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setFilenameLabelText"> {
    return accessLib().symbols.tguiFileDialog_setFilenameLabelText(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getFilenameLabelText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getFilenameLabelText(): ResultType<"tguiFileDialog_getFilenameLabelText"> {
    return accessLib().symbols.tguiFileDialog_getFilenameLabelText(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setAllowCreateFolder(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAllowCreateFolder(
    value: number,
  ): ResultType<"tguiFileDialog_setAllowCreateFolder"> {
    return accessLib().symbols.tguiFileDialog_setAllowCreateFolder(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getAllowCreateFolder(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAllowCreateFolder(): ResultType<"tguiFileDialog_getAllowCreateFolder"> {
    return accessLib().symbols.tguiFileDialog_getAllowCreateFolder(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setFileMustExist(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setFileMustExist(
    value: number,
  ): ResultType<"tguiFileDialog_setFileMustExist"> {
    return accessLib().symbols.tguiFileDialog_setFileMustExist(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getFileMustExist(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getFileMustExist(): ResultType<"tguiFileDialog_getFileMustExist"> {
    return accessLib().symbols.tguiFileDialog_getFileMustExist(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialog_setSelectingDirectory(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setSelectingDirectory(
    value: number,
  ): ResultType<"tguiFileDialog_setSelectingDirectory"> {
    return accessLib().symbols.tguiFileDialog_setSelectingDirectory(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getSelectingDirectory(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getSelectingDirectory(): ResultType<"tguiFileDialog_getSelectingDirectory"> {
    return accessLib().symbols.tguiFileDialog_getSelectingDirectory(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialog_setMultiSelect(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setMultiSelect(value: number): ResultType<"tguiFileDialog_setMultiSelect"> {
    return accessLib().symbols.tguiFileDialog_setMultiSelect(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiFileDialog_getMultiSelect(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getMultiSelect(): ResultType<"tguiFileDialog_getMultiSelect"> {
    return accessLib().symbols.tguiFileDialog_getMultiSelect(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialog_setPath(tguiWidget * widget, tguiUtf32 path);
   * ```
   *
   * @param widget `Widget *`
   * @param path `Utf32`
   * @returns `void`
   */
  setPath(
    widget: Deno.PointerValue<unknown>,
    path: BufferSource,
  ): ResultType<"tguiFileDialog_setPath"> {
    return accessLib().symbols.tguiFileDialog_setPath(widget, path);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getPath(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  getPath(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getPath"> {
    return accessLib().symbols.tguiFileDialog_getPath(widget);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiFileDialog_getSelectedPaths(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `const Utf32 *`
   */
  getSelectedPaths(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getSelectedPaths"> {
    return accessLib().symbols.tguiFileDialog_getSelectedPaths(widget, count);
  }

  /**
   * @original ```c
   * void tguiFileDialog_setFileTypeFilters(tguiWidget * widget, const tguiFileDialogFilter * filters, size_t filterCount, size_t defaultFilterIndex);
   * ```
   *
   * @param widget `Widget *`
   * @param filters `const FileDialogFilter *`
   * @param filterCount `size_t`
   * @param defaultFilterIndex `size_t`
   * @returns `void`
   */
  setFileTypeFilters(
    widget: Deno.PointerValue<unknown>,
    filters: Deno.PointerValue<unknown>,
    filterCount: bigint,
    defaultFilterIndex: bigint,
  ): ResultType<"tguiFileDialog_setFileTypeFilters"> {
    return accessLib().symbols.tguiFileDialog_setFileTypeFilters(
      widget,
      filters,
      filterCount,
      defaultFilterIndex,
    );
  }

  /**
   * @original ```c
   * tguiFileDialogFilter ** tguiFileDialog_getFileTypeFilters(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `FileDialogFilter **`
   */
  getFileTypeFilters(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getFileTypeFilters"> {
    return accessLib().symbols.tguiFileDialog_getFileTypeFilters(widget, count);
  }

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
  setListViewColumnCaptions(
    widget: Deno.PointerValue<unknown>,
    nameColumnText: BufferSource,
    sizeColumnText: BufferSource,
    modifiedColumnText: BufferSource,
  ): ResultType<"tguiFileDialog_setListViewColumnCaptions"> {
    return accessLib().symbols.tguiFileDialog_setListViewColumnCaptions(
      widget,
      nameColumnText,
      sizeColumnText,
      modifiedColumnText,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsName(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  getListViewColumnCaptionsName(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getListViewColumnCaptionsName"> {
    return accessLib().symbols.tguiFileDialog_getListViewColumnCaptionsName(
      widget,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsSize(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  getListViewColumnCaptionsSize(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getListViewColumnCaptionsSize"> {
    return accessLib().symbols.tguiFileDialog_getListViewColumnCaptionsSize(
      widget,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiFileDialog_getListViewColumnCaptionsModified(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Utf32`
   */
  getListViewColumnCaptionsModified(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getListViewColumnCaptionsModified"> {
    return accessLib().symbols.tguiFileDialog_getListViewColumnCaptionsModified(
      widget,
    );
  }
}

export class FileDialogFilter {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiFileDialogFilter * tguiFileDialogFilter_create(tguiUtf32 name);
   * ```
   *
   * @param name `Utf32`
   * @returns `FileDialogFilter *`
   */
  constructor(name: BufferSource) {
    this.ptr = accessLib().symbols.tguiFileDialogFilter_create(name);
  }

  /**
   * @original ```c
   * void tguiFileDialogFilter_destroy(tguiFileDialogFilter * filter);
   * ```
   *
   * @param filter `FileDialogFilter *`
   * @returns `void`
   */
  destroy(
    filter: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogFilter_destroy"> {
    return accessLib().symbols.tguiFileDialogFilter_destroy(filter);
  }

  /**
   * @original ```c
   * void tguiFileDialogFilter_addExpression(tguiFileDialogFilter * filter, tguiUtf32 expression);
   * ```
   *
   * @param filter `FileDialogFilter *`
   * @param expression `Utf32`
   * @returns `void`
   */
  addExpression(
    filter: Deno.PointerValue<unknown>,
    expression: BufferSource,
  ): ResultType<"tguiFileDialogFilter_addExpression"> {
    return accessLib().symbols.tguiFileDialogFilter_addExpression(
      filter,
      expression,
    );
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiFileDialogFilter_getExpressions(const tguiFileDialogFilter * filter, size_t * count);
   * ```
   *
   * @param filter `const FileDialogFilter *`
   * @param count `size_t *`
   * @returns `const Utf32 *`
   */
  getExpressions(
    filter: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogFilter_getExpressions"> {
    return accessLib().symbols.tguiFileDialogFilter_getExpressions(
      filter,
      count,
    );
  }
}

export class Grid extends Container {
  /**
   * @original ```c
   * tguiWidget * tguiGrid_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiGrid_create());
  }

  /**
   * @original ```c
   * void tguiGrid_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAutoSize(value: number): ResultType<"tguiGrid_setAutoSize"> {
    return accessLib().symbols.tguiGrid_setAutoSize(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiGrid_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAutoSize(): ResultType<"tguiGrid_getAutoSize"> {
    return accessLib().symbols.tguiGrid_getAutoSize(this.pointer);
  }

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
  addWidget(
    widget: Deno.PointerValue<unknown>,
    row: bigint,
    col: bigint,
    alignment: number,
    padding: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_addWidget"> {
    return accessLib().symbols.tguiGrid_addWidget(
      this.pointer,
      widget,
      row,
      col,
      alignment,
      padding,
    );
  }

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
  setWidgetCell(
    widget: Deno.PointerValue<unknown>,
    row: bigint,
    col: bigint,
    alignment: number,
    padding: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_setWidgetCell"> {
    return accessLib().symbols.tguiGrid_setWidgetCell(
      this.pointer,
      widget,
      row,
      col,
      alignment,
      padding,
    );
  }

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
  getWidget(row: bigint, col: bigint): ResultType<"tguiGrid_getWidget"> {
    return accessLib().symbols.tguiGrid_getWidget(this.pointer, row, col);
  }

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
  setWidgetAlignment(
    widget: Deno.PointerValue<unknown>,
    alignment: number,
  ): ResultType<"tguiGrid_setWidgetAlignment"> {
    return accessLib().symbols.tguiGrid_setWidgetAlignment(
      this.pointer,
      widget,
      alignment,
    );
  }

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
  setWidgetAlignmentByCell(
    row: bigint,
    col: bigint,
    alignment: number,
  ): ResultType<"tguiGrid_setWidgetAlignmentByCell"> {
    return accessLib().symbols.tguiGrid_setWidgetAlignmentByCell(
      this.pointer,
      row,
      col,
      alignment,
    );
  }

  /**
   * @original ```c
   * tguiGridAlignment tguiGrid_getWidgetAlignment(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `GridAlignment`
   */
  getWidgetAlignment(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetAlignment"> {
    return accessLib().symbols.tguiGrid_getWidgetAlignment(
      this.pointer,
      widget,
    );
  }

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
  getWidgetAlignmentByCell(
    row: bigint,
    col: bigint,
  ): ResultType<"tguiGrid_getWidgetAlignmentByCell"> {
    return accessLib().symbols.tguiGrid_getWidgetAlignmentByCell(
      this.pointer,
      row,
      col,
    );
  }

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
  setWidgetPadding(
    widget: Deno.PointerValue<unknown>,
    padding: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_setWidgetPadding"> {
    return accessLib().symbols.tguiGrid_setWidgetPadding(
      this.pointer,
      widget,
      padding,
    );
  }

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
  setWidgetPaddingByCell(
    row: bigint,
    col: bigint,
    padding: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_setWidgetPaddingByCell"> {
    return accessLib().symbols.tguiGrid_setWidgetPaddingByCell(
      this.pointer,
      row,
      col,
      padding,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiGrid_getWidgetPadding(const tguiWidget * thisWidget, tguiWidget * widget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param widget `Widget *`
   * @returns `const Outline *`
   */
  getWidgetPadding(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetPadding"> {
    return accessLib().symbols.tguiGrid_getWidgetPadding(this.pointer, widget);
  }

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
  getWidgetPaddingByCell(
    row: bigint,
    col: bigint,
  ): ResultType<"tguiGrid_getWidgetPaddingByCell"> {
    return accessLib().symbols.tguiGrid_getWidgetPaddingByCell(
      this.pointer,
      row,
      col,
    );
  }

  /**
   * @original ```c
   * tguiGridWidgetLocation * tguiGrid_getWidgetLocations(const tguiWidget * grid, size_t * count);
   * ```
   *
   * @param grid `const Widget *`
   * @param count `size_t *`
   * @returns `GridWidgetLocation *`
   */
  getWidgetLocations(
    grid: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetLocations"> {
    return accessLib().symbols.tguiGrid_getWidgetLocations(grid, count);
  }
}

export class GridWidgetLocation {
  /**
   * @original ```c
   * void tguiGridWidgetLocation_destroy(tguiGridWidgetLocation * locationList, size_t count);
   * ```
   *
   * @param locationList `GridWidgetLocation *`
   * @param count `size_t`
   * @returns `void`
   */
  destroy(
    locationList: Deno.PointerValue<unknown>,
    count: bigint,
  ): ResultType<"tguiGridWidgetLocation_destroy"> {
    return accessLib().symbols.tguiGridWidgetLocation_destroy(
      locationList,
      count,
    );
  }
}

export class HorizontalLayout extends BoxLayoutRatios {
  /**
   * @original ```c
   * tguiWidget * tguiHorizontalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiHorizontalLayout_create());
  }
}

export class HorizontalWrap extends BoxLayout {
  /**
   * @original ```c
   * tguiWidget * tguiHorizontalWrap_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiHorizontalWrap_create());
  }
}

export class Knob extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiKnob_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiKnob_create());
  }

  /**
   * @original ```c
   * void tguiKnob_setStartRotation(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStartRotation(value: number): ResultType<"tguiKnob_setStartRotation"> {
    return accessLib().symbols.tguiKnob_setStartRotation(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiKnob_getStartRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStartRotation(): ResultType<"tguiKnob_getStartRotation"> {
    return accessLib().symbols.tguiKnob_getStartRotation(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnob_setEndRotation(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setEndRotation(value: number): ResultType<"tguiKnob_setEndRotation"> {
    return accessLib().symbols.tguiKnob_setEndRotation(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiKnob_getEndRotation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getEndRotation(): ResultType<"tguiKnob_getEndRotation"> {
    return accessLib().symbols.tguiKnob_getEndRotation(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnob_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiKnob_setMinimum"> {
    return accessLib().symbols.tguiKnob_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiKnob_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiKnob_getMinimum"> {
    return accessLib().symbols.tguiKnob_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnob_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiKnob_setMaximum"> {
    return accessLib().symbols.tguiKnob_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiKnob_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiKnob_getMaximum"> {
    return accessLib().symbols.tguiKnob_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnob_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setValue(value: number): ResultType<"tguiKnob_setValue"> {
    return accessLib().symbols.tguiKnob_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiKnob_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getValue(): ResultType<"tguiKnob_getValue"> {
    return accessLib().symbols.tguiKnob_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnob_setClockwiseTurning(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setClockwiseTurning(
    value: number,
  ): ResultType<"tguiKnob_setClockwiseTurning"> {
    return accessLib().symbols.tguiKnob_setClockwiseTurning(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiKnob_getClockwiseTurning(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getClockwiseTurning(): ResultType<"tguiKnob_getClockwiseTurning"> {
    return accessLib().symbols.tguiKnob_getClockwiseTurning(this.pointer);
  }
}

export class ListBox extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiListBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiListBox_create());
  }

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
  addItem(
    item: BufferSource,
    id: BufferSource,
  ): ResultType<"tguiListBox_addItem"> {
    return accessLib().symbols.tguiListBox_addItem(this.pointer, item, id);
  }

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
  addMultipleItems(
    items: Deno.PointerValue<unknown>,
    itemsLength: bigint,
  ): ResultType<"tguiListBox_addMultipleItems"> {
    return accessLib().symbols.tguiListBox_addMultipleItems(
      this.pointer,
      items,
      itemsLength,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Utf32`
   */
  getItemById(id: BufferSource): ResultType<"tguiListBox_getItemById"> {
    return accessLib().symbols.tguiListBox_getItemById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItemByIndex(index: bigint): ResultType<"tguiListBox_getItemByIndex"> {
    return accessLib().symbols.tguiListBox_getItemByIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * int tguiListBox_getIndexById(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `int`
   */
  getIndexById(id: BufferSource): ResultType<"tguiListBox_getIndexById"> {
    return accessLib().symbols.tguiListBox_getIndexById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getIdByIndex(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getIdByIndex(index: bigint): ResultType<"tguiListBox_getIdByIndex"> {
    return accessLib().symbols.tguiListBox_getIdByIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  setSelectedItem(
    item: BufferSource,
  ): ResultType<"tguiListBox_setSelectedItem"> {
    return accessLib().symbols.tguiListBox_setSelectedItem(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  setSelectedItemById(
    id: BufferSource,
  ): ResultType<"tguiListBox_setSelectedItemById"> {
    return accessLib().symbols.tguiListBox_setSelectedItemById(
      this.pointer,
      id,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_setSelectedItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  setSelectedItemByIndex(
    index: bigint,
  ): ResultType<"tguiListBox_setSelectedItemByIndex"> {
    return accessLib().symbols.tguiListBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  /**
   * @original ```c
   * void tguiListBox_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  deselectItem(): ResultType<"tguiListBox_deselectItem"> {
    return accessLib().symbols.tguiListBox_deselectItem(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItem(tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  removeItem(item: BufferSource): ResultType<"tguiListBox_removeItem"> {
    return accessLib().symbols.tguiListBox_removeItem(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItemById(tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  removeItemById(id: BufferSource): ResultType<"tguiListBox_removeItemById"> {
    return accessLib().symbols.tguiListBox_removeItemById(this.pointer, id);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_removeItemByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeItemByIndex(
    index: bigint,
  ): ResultType<"tguiListBox_removeItemByIndex"> {
    return accessLib().symbols.tguiListBox_removeItemByIndex(
      this.pointer,
      index,
    );
  }

  /**
   * @original ```c
   * void tguiListBox_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllItems(): ResultType<"tguiListBox_removeAllItems"> {
    return accessLib().symbols.tguiListBox_removeAllItems(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getSelectedItem(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedItem(): ResultType<"tguiListBox_getSelectedItem"> {
    return accessLib().symbols.tguiListBox_getSelectedItem(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getSelectedItemId(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedItemId(): ResultType<"tguiListBox_getSelectedItemId"> {
    return accessLib().symbols.tguiListBox_getSelectedItemId(this.pointer);
  }

  /**
   * @original ```c
   * int tguiListBox_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getSelectedItemIndex(): ResultType<"tguiListBox_getSelectedItemIndex"> {
    return accessLib().symbols.tguiListBox_getSelectedItemIndex(this.pointer);
  }

  /**
   * @original ```c
   * int tguiListBox_getHoveredItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getHoveredItemIndex(): ResultType<"tguiListBox_getHoveredItemIndex"> {
    return accessLib().symbols.tguiListBox_getHoveredItemIndex(this.pointer);
  }

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
  changeItem(
    originalValue: BufferSource,
    newValue: BufferSource,
  ): ResultType<"tguiListBox_changeItem"> {
    return accessLib().symbols.tguiListBox_changeItem(
      this.pointer,
      originalValue,
      newValue,
    );
  }

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
  changeItemById(
    id: BufferSource,
    newValue: BufferSource,
  ): ResultType<"tguiListBox_changeItemById"> {
    return accessLib().symbols.tguiListBox_changeItemById(
      this.pointer,
      id,
      newValue,
    );
  }

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
  changeItemByIndex(
    index: bigint,
    newValue: BufferSource,
  ): ResultType<"tguiListBox_changeItemByIndex"> {
    return accessLib().symbols.tguiListBox_changeItemByIndex(
      this.pointer,
      index,
      newValue,
    );
  }

  /**
   * @original ```c
   * size_t tguiListBox_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getItemCount(): ResultType<"tguiListBox_getItemCount"> {
    return accessLib().symbols.tguiListBox_getItemCount(this.pointer);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiListBox_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBox_getItems"> {
    return accessLib().symbols.tguiListBox_getItems(this.pointer, returnCount);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiListBox_getItemIds(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getItemIds(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBox_getItemIds"> {
    return accessLib().symbols.tguiListBox_getItemIds(
      this.pointer,
      returnCount,
    );
  }

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
  setItemData(
    index: bigint,
    data: BufferSource,
  ): ResultType<"tguiListBox_setItemData"> {
    return accessLib().symbols.tguiListBox_setItemData(
      this.pointer,
      index,
      data,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListBox_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItemData(index: bigint): ResultType<"tguiListBox_getItemData"> {
    return accessLib().symbols.tguiListBox_getItemData(this.pointer, index);
  }

  /**
   * @original ```c
   * void tguiListBox_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setItemHeight(value: number): ResultType<"tguiListBox_setItemHeight"> {
    return accessLib().symbols.tguiListBox_setItemHeight(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiListBox_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getItemHeight(): ResultType<"tguiListBox_getItemHeight"> {
    return accessLib().symbols.tguiListBox_getItemHeight(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBox_setMaximumItems(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setMaximumItems(value: bigint): ResultType<"tguiListBox_setMaximumItems"> {
    return accessLib().symbols.tguiListBox_setMaximumItems(this.pointer, value);
  }

  /**
   * @original ```c
   * size_t tguiListBox_getMaximumItems(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getMaximumItems(): ResultType<"tguiListBox_getMaximumItems"> {
    return accessLib().symbols.tguiListBox_getMaximumItems(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBox_setAutoScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAutoScroll(value: number): ResultType<"tguiListBox_setAutoScroll"> {
    return accessLib().symbols.tguiListBox_setAutoScroll(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_getAutoScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAutoScroll(): ResultType<"tguiListBox_getAutoScroll"> {
    return accessLib().symbols.tguiListBox_getAutoScroll(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBox_setTextAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setTextAlignment(value: number): ResultType<"tguiListBox_setTextAlignment"> {
    return accessLib().symbols.tguiListBox_setTextAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiListBox_getTextAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getTextAlignment(): ResultType<"tguiListBox_getTextAlignment"> {
    return accessLib().symbols.tguiListBox_getTextAlignment(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_contains(const tguiWidget * thisWidget, tguiUtf32 item);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param item `Utf32`
   * @returns `Bool`
   */
  contains(item: BufferSource): ResultType<"tguiListBox_contains"> {
    return accessLib().symbols.tguiListBox_contains(this.pointer, item);
  }

  /**
   * @original ```c
   * tguiBool tguiListBox_containsId(const tguiWidget * thisWidget, tguiUtf32 id);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param id `Utf32`
   * @returns `Bool`
   */
  containsId(id: BufferSource): ResultType<"tguiListBox_containsId"> {
    return accessLib().symbols.tguiListBox_containsId(this.pointer, id);
  }
}

export class ListView extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiListView_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiListView_create());
  }

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
  addColumn(
    text: BufferSource,
    width: number,
    columnAlignment: number,
  ): ResultType<"tguiListView_addColumn"> {
    return accessLib().symbols.tguiListView_addColumn(
      this.pointer,
      text,
      width,
      columnAlignment,
    );
  }

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
  setColumnText(
    index: bigint,
    text: BufferSource,
  ): ResultType<"tguiListView_setColumnText"> {
    return accessLib().symbols.tguiListView_setColumnText(
      this.pointer,
      index,
      text,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getColumnText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getColumnText(index: bigint): ResultType<"tguiListView_getColumnText"> {
    return accessLib().symbols.tguiListView_getColumnText(this.pointer, index);
  }

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
  setColumnWidth(
    index: bigint,
    width: number,
  ): ResultType<"tguiListView_setColumnWidth"> {
    return accessLib().symbols.tguiListView_setColumnWidth(
      this.pointer,
      index,
      width,
    );
  }

  /**
   * @original ```c
   * float tguiListView_getColumnWidth(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  getColumnWidth(index: bigint): ResultType<"tguiListView_getColumnWidth"> {
    return accessLib().symbols.tguiListView_getColumnWidth(this.pointer, index);
  }

  /**
   * @original ```c
   * float tguiListView_getColumnDesignWidth(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `float`
   */
  getColumnDesignWidth(
    index: bigint,
  ): ResultType<"tguiListView_getColumnDesignWidth"> {
    return accessLib().symbols.tguiListView_getColumnDesignWidth(
      this.pointer,
      index,
    );
  }

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
  setColumnAlignment(
    index: bigint,
    columnAlignment: number,
  ): ResultType<"tguiListView_setColumnAlignment"> {
    return accessLib().symbols.tguiListView_setColumnAlignment(
      this.pointer,
      index,
      columnAlignment,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiListView_getColumnAlignment(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `HorizontalAlignment`
   */
  getColumnAlignment(
    index: bigint,
  ): ResultType<"tguiListView_getColumnAlignment"> {
    return accessLib().symbols.tguiListView_getColumnAlignment(
      this.pointer,
      index,
    );
  }

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
  setColumnAutoResize(
    index: bigint,
    autoResize: number,
  ): ResultType<"tguiListView_setColumnAutoResize"> {
    return accessLib().symbols.tguiListView_setColumnAutoResize(
      this.pointer,
      index,
      autoResize,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getColumnAutoResize(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  getColumnAutoResize(
    index: bigint,
  ): ResultType<"tguiListView_getColumnAutoResize"> {
    return accessLib().symbols.tguiListView_getColumnAutoResize(
      this.pointer,
      index,
    );
  }

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
  setColumnExpanded(
    index: bigint,
    expand: number,
  ): ResultType<"tguiListView_setColumnExpanded"> {
    return accessLib().symbols.tguiListView_setColumnExpanded(
      this.pointer,
      index,
      expand,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getColumnExpanded(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  getColumnExpanded(
    index: bigint,
  ): ResultType<"tguiListView_getColumnExpanded"> {
    return accessLib().symbols.tguiListView_getColumnExpanded(
      this.pointer,
      index,
    );
  }

  /**
   * @original ```c
   * void tguiListView_removeAllColumns(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllColumns(): ResultType<"tguiListView_removeAllColumns"> {
    return accessLib().symbols.tguiListView_removeAllColumns(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiListView_getColumnCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getColumnCount(): ResultType<"tguiListView_getColumnCount"> {
    return accessLib().symbols.tguiListView_getColumnCount(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setHeaderVisible(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setHeaderVisible(value: number): ResultType<"tguiListView_setHeaderVisible"> {
    return accessLib().symbols.tguiListView_setHeaderVisible(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getHeaderVisible(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getHeaderVisible(): ResultType<"tguiListView_getHeaderVisible"> {
    return accessLib().symbols.tguiListView_getHeaderVisible(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setHeaderHeight(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setHeaderHeight(value: number): ResultType<"tguiListView_setHeaderHeight"> {
    return accessLib().symbols.tguiListView_setHeaderHeight(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiListView_getHeaderHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getHeaderHeight(): ResultType<"tguiListView_getHeaderHeight"> {
    return accessLib().symbols.tguiListView_getHeaderHeight(this.pointer);
  }

  /**
   * @original ```c
   * float tguiListView_getCurrentHeaderHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getCurrentHeaderHeight(): ResultType<"tguiListView_getCurrentHeaderHeight"> {
    return accessLib().symbols.tguiListView_getCurrentHeaderHeight(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * size_t tguiListView_addItem(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `size_t`
   */
  addItem(text: BufferSource): ResultType<"tguiListView_addItem"> {
    return accessLib().symbols.tguiListView_addItem(this.pointer, text);
  }

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
  addItemRow(
    item: Deno.PointerValue<unknown>,
    itemLength: bigint,
  ): ResultType<"tguiListView_addItemRow"> {
    return accessLib().symbols.tguiListView_addItemRow(
      this.pointer,
      item,
      itemLength,
    );
  }

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
  insertItem(
    index: bigint,
    text: BufferSource,
  ): ResultType<"tguiListView_insertItem"> {
    return accessLib().symbols.tguiListView_insertItem(
      this.pointer,
      index,
      text,
    );
  }

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
  insertItemRow(
    index: bigint,
    item: Deno.PointerValue<unknown>,
    itemLength: bigint,
  ): ResultType<"tguiListView_insertItemRow"> {
    return accessLib().symbols.tguiListView_insertItemRow(
      this.pointer,
      index,
      item,
      itemLength,
    );
  }

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
  changeItem(
    index: bigint,
    item: Deno.PointerValue<unknown>,
    itemLength: bigint,
  ): ResultType<"tguiListView_changeItem"> {
    return accessLib().symbols.tguiListView_changeItem(
      this.pointer,
      index,
      item,
      itemLength,
    );
  }

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
  changeSubItem(
    index: bigint,
    column: bigint,
    text: BufferSource,
  ): ResultType<"tguiListView_changeSubItem"> {
    return accessLib().symbols.tguiListView_changeSubItem(
      this.pointer,
      index,
      column,
      text,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_removeItem(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeItem(index: bigint): ResultType<"tguiListView_removeItem"> {
    return accessLib().symbols.tguiListView_removeItem(this.pointer, index);
  }

  /**
   * @original ```c
   * void tguiListView_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllItems(): ResultType<"tguiListView_removeAllItems"> {
    return accessLib().symbols.tguiListView_removeAllItems(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setSelectedItem(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `void`
   */
  setSelectedItem(index: bigint): ResultType<"tguiListView_setSelectedItem"> {
    return accessLib().symbols.tguiListView_setSelectedItem(
      this.pointer,
      index,
    );
  }

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
  setSelectedItems(
    indices: Deno.PointerValue<unknown>,
    indicesLength: bigint,
  ): ResultType<"tguiListView_setSelectedItems"> {
    return accessLib().symbols.tguiListView_setSelectedItems(
      this.pointer,
      indices,
      indicesLength,
    );
  }

  /**
   * @original ```c
   * int tguiListView_getSelectedItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getSelectedItemIndex(): ResultType<"tguiListView_getSelectedItemIndex"> {
    return accessLib().symbols.tguiListView_getSelectedItemIndex(this.pointer);
  }

  /**
   * @original ```c
   * int tguiListView_getHoveredItemIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getHoveredItemIndex(): ResultType<"tguiListView_getHoveredItemIndex"> {
    return accessLib().symbols.tguiListView_getHoveredItemIndex(this.pointer);
  }

  /**
   * @original ```c
   * const size_t * tguiListView_getSelectedItemIndices(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const size_t *`
   */
  getSelectedItemIndices(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_getSelectedItemIndices"> {
    return accessLib().symbols.tguiListView_getSelectedItemIndices(
      this.pointer,
      returnCount,
    );
  }

  /**
   * @original ```c
   * void tguiListView_deselectItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  deselectItems(): ResultType<"tguiListView_deselectItems"> {
    return accessLib().symbols.tguiListView_deselectItems(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setMultiSelect(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setMultiSelect(value: number): ResultType<"tguiListView_setMultiSelect"> {
    return accessLib().symbols.tguiListView_setMultiSelect(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getMultiSelect(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getMultiSelect(): ResultType<"tguiListView_getMultiSelect"> {
    return accessLib().symbols.tguiListView_getMultiSelect(this.pointer);
  }

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
  setItemData(
    index: bigint,
    data: BufferSource,
  ): ResultType<"tguiListView_setItemData"> {
    return accessLib().symbols.tguiListView_setItemData(
      this.pointer,
      index,
      data,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getItemData(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItemData(index: bigint): ResultType<"tguiListView_getItemData"> {
    return accessLib().symbols.tguiListView_getItemData(this.pointer, index);
  }

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
  setItemIcon(
    index: bigint,
    texture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_setItemIcon"> {
    return accessLib().symbols.tguiListView_setItemIcon(
      this.pointer,
      index,
      texture,
    );
  }

  /**
   * @original ```c
   * size_t tguiListView_getItemCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getItemCount(): ResultType<"tguiListView_getItemCount"> {
    return accessLib().symbols.tguiListView_getItemCount(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiListView_getItem(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getItem(index: bigint): ResultType<"tguiListView_getItem"> {
    return accessLib().symbols.tguiListView_getItem(this.pointer, index);
  }

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
  getItemCell(
    rowIndex: bigint,
    columnIndex: bigint,
  ): ResultType<"tguiListView_getItemCell"> {
    return accessLib().symbols.tguiListView_getItemCell(
      this.pointer,
      rowIndex,
      columnIndex,
    );
  }

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
  getItemRow(
    index: bigint,
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_getItemRow"> {
    return accessLib().symbols.tguiListView_getItemRow(
      this.pointer,
      index,
      returnCount,
    );
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiListView_getItems(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_getItems"> {
    return accessLib().symbols.tguiListView_getItems(this.pointer, returnCount);
  }

  /**
   * @original ```c
   * void tguiListView_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setItemHeight(value: number): ResultType<"tguiListView_setItemHeight"> {
    return accessLib().symbols.tguiListView_setItemHeight(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiListView_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getItemHeight(): ResultType<"tguiListView_getItemHeight"> {
    return accessLib().symbols.tguiListView_getItemHeight(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setHeaderTextSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setHeaderTextSize(
    value: number,
  ): ResultType<"tguiListView_setHeaderTextSize"> {
    return accessLib().symbols.tguiListView_setHeaderTextSize(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiListView_getHeaderTextSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getHeaderTextSize(): ResultType<"tguiListView_getHeaderTextSize"> {
    return accessLib().symbols.tguiListView_getHeaderTextSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setSeparatorWidth(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setSeparatorWidth(
    value: number,
  ): ResultType<"tguiListView_setSeparatorWidth"> {
    return accessLib().symbols.tguiListView_setSeparatorWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiListView_getSeparatorWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getSeparatorWidth(): ResultType<"tguiListView_getSeparatorWidth"> {
    return accessLib().symbols.tguiListView_getSeparatorWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setHeaderSeparatorHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setHeaderSeparatorHeight(
    value: number,
  ): ResultType<"tguiListView_setHeaderSeparatorHeight"> {
    return accessLib().symbols.tguiListView_setHeaderSeparatorHeight(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiListView_getHeaderSeparatorHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getHeaderSeparatorHeight(): ResultType<
    "tguiListView_getHeaderSeparatorHeight"
  > {
    return accessLib().symbols.tguiListView_getHeaderSeparatorHeight(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListView_setGridLinesWidth(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setGridLinesWidth(
    value: number,
  ): ResultType<"tguiListView_setGridLinesWidth"> {
    return accessLib().symbols.tguiListView_setGridLinesWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiListView_getGridLinesWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getGridLinesWidth(): ResultType<"tguiListView_getGridLinesWidth"> {
    return accessLib().symbols.tguiListView_getGridLinesWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setAutoScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAutoScroll(value: number): ResultType<"tguiListView_setAutoScroll"> {
    return accessLib().symbols.tguiListView_setAutoScroll(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getAutoScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAutoScroll(): ResultType<"tguiListView_getAutoScroll"> {
    return accessLib().symbols.tguiListView_getAutoScroll(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setShowVerticalGridLines(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setShowVerticalGridLines(
    value: number,
  ): ResultType<"tguiListView_setShowVerticalGridLines"> {
    return accessLib().symbols.tguiListView_setShowVerticalGridLines(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getShowVerticalGridLines(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getShowVerticalGridLines(): ResultType<
    "tguiListView_getShowVerticalGridLines"
  > {
    return accessLib().symbols.tguiListView_getShowVerticalGridLines(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListView_setShowHorizontalGridLines(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setShowHorizontalGridLines(
    value: number,
  ): ResultType<"tguiListView_setShowHorizontalGridLines"> {
    return accessLib().symbols.tguiListView_setShowHorizontalGridLines(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getShowHorizontalGridLines(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getShowHorizontalGridLines(): ResultType<
    "tguiListView_getShowHorizontalGridLines"
  > {
    return accessLib().symbols.tguiListView_getShowHorizontalGridLines(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListView_setFixedIconSize(tguiWidget * thisWidget, tguiVector2f value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Vector2f { x: float; y: float }`
   * @returns `void`
   */
  setFixedIconSize(
    value: Vector2f,
  ): ResultType<"tguiListView_setFixedIconSize"> {
    return accessLib().symbols.tguiListView_setFixedIconSize(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiVector2f tguiListView_getFixedIconSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Vector2f { x: float; y: float }`
   */
  getFixedIconSize(): ResultType<"tguiListView_getFixedIconSize"> {
    return accessLib().symbols.tguiListView_getFixedIconSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListView_setResizableColumns(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setResizableColumns(
    value: number,
  ): ResultType<"tguiListView_setResizableColumns"> {
    return accessLib().symbols.tguiListView_setResizableColumns(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiListView_getResizableColumns(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getResizableColumns(): ResultType<"tguiListView_getResizableColumns"> {
    return accessLib().symbols.tguiListView_getResizableColumns(this.pointer);
  }

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
  sort(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_sort"> {
    return accessLib().symbols.tguiListView_sort(widget, index, callback);
  }
}

export class MenuBar extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiMenuBar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiMenuBar_create());
  }

  /**
   * @original ```c
   * void tguiMenuBar_addMenu(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  addMenu(text: BufferSource): ResultType<"tguiMenuBar_addMenu"> {
    return accessLib().symbols.tguiMenuBar_addMenu(this.pointer, text);
  }

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
  addMenuItem(
    menu: BufferSource,
    text: BufferSource,
  ): ResultType<"tguiMenuBar_addMenuItem"> {
    return accessLib().symbols.tguiMenuBar_addMenuItem(
      this.pointer,
      menu,
      text,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiMenuBar_addMenuItemToLastMenu(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  addMenuItemToLastMenu(
    text: BufferSource,
  ): ResultType<"tguiMenuBar_addMenuItemToLastMenu"> {
    return accessLib().symbols.tguiMenuBar_addMenuItemToLastMenu(
      this.pointer,
      text,
    );
  }

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
  addMenuItemHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    createParents: number,
  ): ResultType<"tguiMenuBar_addMenuItemHierarchy"> {
    return accessLib().symbols.tguiMenuBar_addMenuItemHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
      createParents,
    );
  }

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
  changeMenuItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    text: BufferSource,
  ): ResultType<"tguiMenuBar_changeMenuItem"> {
    return accessLib().symbols.tguiMenuBar_changeMenuItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      text,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiMenuBar_removeMenu(tguiWidget * thisWidget, tguiUtf32 menu);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param menu `Utf32`
   * @returns `Bool`
   */
  removeMenu(menu: BufferSource): ResultType<"tguiMenuBar_removeMenu"> {
    return accessLib().symbols.tguiMenuBar_removeMenu(this.pointer, menu);
  }

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
  removeMenuItem(
    menu: BufferSource,
    menuItem: BufferSource,
  ): ResultType<"tguiMenuBar_removeMenuItem"> {
    return accessLib().symbols.tguiMenuBar_removeMenuItem(
      this.pointer,
      menu,
      menuItem,
    );
  }

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
  removeMenuItemHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    removeParentsWhenEmpty: number,
  ): ResultType<"tguiMenuBar_removeMenuItemHierarchy"> {
    return accessLib().symbols.tguiMenuBar_removeMenuItemHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
      removeParentsWhenEmpty,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBar_removeAllMenus(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllMenus(): ResultType<"tguiMenuBar_removeAllMenus"> {
    return accessLib().symbols.tguiMenuBar_removeAllMenus(this.pointer);
  }

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
  setMenuEnabled(
    text: BufferSource,
    enabled: number,
  ): ResultType<"tguiMenuBar_setMenuEnabled"> {
    return accessLib().symbols.tguiMenuBar_setMenuEnabled(
      this.pointer,
      text,
      enabled,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getMenuEnabled(const tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  getMenuEnabled(text: BufferSource): ResultType<"tguiMenuBar_getMenuEnabled"> {
    return accessLib().symbols.tguiMenuBar_getMenuEnabled(this.pointer, text);
  }

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
  setMenuItemEnabled(
    menu: BufferSource,
    text: BufferSource,
    enabled: number,
  ): ResultType<"tguiMenuBar_setMenuItemEnabled"> {
    return accessLib().symbols.tguiMenuBar_setMenuItemEnabled(
      this.pointer,
      menu,
      text,
      enabled,
    );
  }

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
  getMenuItemEnabled(
    menu: BufferSource,
    text: BufferSource,
  ): ResultType<"tguiMenuBar_getMenuItemEnabled"> {
    return accessLib().symbols.tguiMenuBar_getMenuItemEnabled(
      this.pointer,
      menu,
      text,
    );
  }

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
  setMenuItemEnabledHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    enabled: number,
  ): ResultType<"tguiMenuBar_setMenuItemEnabledHierarchy"> {
    return accessLib().symbols.tguiMenuBar_setMenuItemEnabledHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
      enabled,
    );
  }

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
  getMenuItemEnabledHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ): ResultType<"tguiMenuBar_getMenuItemEnabledHierarchy"> {
    return accessLib().symbols.tguiMenuBar_getMenuItemEnabledHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBar_closeMenu(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  closeMenu(): ResultType<"tguiMenuBar_closeMenu"> {
    return accessLib().symbols.tguiMenuBar_closeMenu(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMenuBar_setMinimumSubMenuWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimumSubMenuWidth(
    value: number,
  ): ResultType<"tguiMenuBar_setMinimumSubMenuWidth"> {
    return accessLib().symbols.tguiMenuBar_setMinimumSubMenuWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiMenuBar_getMinimumSubMenuWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimumSubMenuWidth(): ResultType<"tguiMenuBar_getMinimumSubMenuWidth"> {
    return accessLib().symbols.tguiMenuBar_getMinimumSubMenuWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMenuBar_setInvertedMenuDirection(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setInvertedMenuDirection(
    value: number,
  ): ResultType<"tguiMenuBar_setInvertedMenuDirection"> {
    return accessLib().symbols.tguiMenuBar_setInvertedMenuDirection(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiMenuBar_getInvertedMenuDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getInvertedMenuDirection(): ResultType<
    "tguiMenuBar_getInvertedMenuDirection"
  > {
    return accessLib().symbols.tguiMenuBar_getInvertedMenuDirection(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiMenuBarMenuList * tguiMenuBar_getMenus(tguiWidget * widget);
   * ```
   *
   * @param widget `Widget *`
   * @returns `MenuBarMenuList *`
   */
  getMenus(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBar_getMenus"> {
    return accessLib().symbols.tguiMenuBar_getMenus(widget);
  }
}

export class MenuBarMenuList {
  /**
   * @original ```c
   * void tguiMenuBarMenuList_destroy(tguiMenuBarMenuList * menuList);
   * ```
   *
   * @param menuList `MenuBarMenuList *`
   * @returns `void`
   */
  destroy(
    menuList: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarMenuList_destroy"> {
    return accessLib().symbols.tguiMenuBarMenuList_destroy(menuList);
  }
}

export class MessageBox extends ChildWindow {
  /**
   * @original ```c
   * tguiWidget * tguiMessageBox_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiMessageBox_create());
  }

  /**
   * @original ```c
   * void tguiMessageBox_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiMessageBox_setText"> {
    return accessLib().symbols.tguiMessageBox_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiMessageBox_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiMessageBox_getText"> {
    return accessLib().symbols.tguiMessageBox_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMessageBox_addButton(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  addButton(text: BufferSource): ResultType<"tguiMessageBox_addButton"> {
    return accessLib().symbols.tguiMessageBox_addButton(this.pointer, text);
  }

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
  changeButtons(
    buttonCaptions: Deno.PointerValue<unknown>,
    buttonCaptionsLength: bigint,
  ): ResultType<"tguiMessageBox_changeButtons"> {
    return accessLib().symbols.tguiMessageBox_changeButtons(
      this.pointer,
      buttonCaptions,
      buttonCaptionsLength,
    );
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiMessageBox_getButtons(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getButtons(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMessageBox_getButtons"> {
    return accessLib().symbols.tguiMessageBox_getButtons(
      this.pointer,
      returnCount,
    );
  }

  /**
   * @original ```c
   * void tguiMessageBox_setLabelAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setLabelAlignment(
    value: number,
  ): ResultType<"tguiMessageBox_setLabelAlignment"> {
    return accessLib().symbols.tguiMessageBox_setLabelAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiMessageBox_getLabelAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getLabelAlignment(): ResultType<"tguiMessageBox_getLabelAlignment"> {
    return accessLib().symbols.tguiMessageBox_getLabelAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMessageBox_setButtonAlignment(tguiWidget * thisWidget, tguiHorizontalAlignment value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `HorizontalAlignment`
   * @returns `void`
   */
  setButtonAlignment(
    value: number,
  ): ResultType<"tguiMessageBox_setButtonAlignment"> {
    return accessLib().symbols.tguiMessageBox_setButtonAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiHorizontalAlignment tguiMessageBox_getButtonAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `HorizontalAlignment`
   */
  getButtonAlignment(): ResultType<"tguiMessageBox_getButtonAlignment"> {
    return accessLib().symbols.tguiMessageBox_getButtonAlignment(this.pointer);
  }
}

export class Picture extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiPicture_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiPicture_create());
  }
}

export class ProgressBar extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiProgressBar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiProgressBar_create());
  }

  /**
   * @original ```c
   * void tguiProgressBar_setMinimum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiProgressBar_setMinimum"> {
    return accessLib().symbols.tguiProgressBar_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getMinimum(): ResultType<"tguiProgressBar_getMinimum"> {
    return accessLib().symbols.tguiProgressBar_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiProgressBar_setMaximum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiProgressBar_setMaximum"> {
    return accessLib().symbols.tguiProgressBar_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getMaximum(): ResultType<"tguiProgressBar_getMaximum"> {
    return accessLib().symbols.tguiProgressBar_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiProgressBar_setValue(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setValue(value: number): ResultType<"tguiProgressBar_setValue"> {
    return accessLib().symbols.tguiProgressBar_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiProgressBar_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getValue(): ResultType<"tguiProgressBar_getValue"> {
    return accessLib().symbols.tguiProgressBar_getValue(this.pointer);
  }

  /**
   * @original ```c
   * unsigned int tguiProgressBar_incrementValue(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `unsigned int`
   */
  incrementValue(): ResultType<"tguiProgressBar_incrementValue"> {
    return accessLib().symbols.tguiProgressBar_incrementValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiProgressBar_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiProgressBar_setText"> {
    return accessLib().symbols.tguiProgressBar_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiProgressBar_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiProgressBar_getText"> {
    return accessLib().symbols.tguiProgressBar_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiProgressBar_setFillDirection(tguiWidget * thisWidget, tguiProgressBarFillDirection value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ProgressBarFillDirection`
   * @returns `void`
   */
  setFillDirection(
    value: number,
  ): ResultType<"tguiProgressBar_setFillDirection"> {
    return accessLib().symbols.tguiProgressBar_setFillDirection(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiProgressBarFillDirection tguiProgressBar_getFillDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ProgressBarFillDirection`
   */
  getFillDirection(): ResultType<"tguiProgressBar_getFillDirection"> {
    return accessLib().symbols.tguiProgressBar_getFillDirection(this.pointer);
  }
}

export class RadioButtonGroup extends Container {
  /**
   * @original ```c
   * tguiWidget * tguiRadioButtonGroup_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiRadioButtonGroup_create());
  }

  /**
   * @original ```c
   * void tguiRadioButtonGroup_uncheckRadioButtons(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  uncheckRadioButtons(): ResultType<
    "tguiRadioButtonGroup_uncheckRadioButtons"
  > {
    return accessLib().symbols.tguiRadioButtonGroup_uncheckRadioButtons(
      this.pointer,
    );
  }
}

export class RangeSlider extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiRangeSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiRangeSlider_create());
  }

  /**
   * @original ```c
   * void tguiRangeSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiRangeSlider_setMinimum"> {
    return accessLib().symbols.tguiRangeSlider_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiRangeSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiRangeSlider_getMinimum"> {
    return accessLib().symbols.tguiRangeSlider_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRangeSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiRangeSlider_setMaximum"> {
    return accessLib().symbols.tguiRangeSlider_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiRangeSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiRangeSlider_getMaximum"> {
    return accessLib().symbols.tguiRangeSlider_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRangeSlider_setSelectionStart(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setSelectionStart(
    value: number,
  ): ResultType<"tguiRangeSlider_setSelectionStart"> {
    return accessLib().symbols.tguiRangeSlider_setSelectionStart(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiRangeSlider_getSelectionStart(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getSelectionStart(): ResultType<"tguiRangeSlider_getSelectionStart"> {
    return accessLib().symbols.tguiRangeSlider_getSelectionStart(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRangeSlider_setSelectionEnd(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setSelectionEnd(
    value: number,
  ): ResultType<"tguiRangeSlider_setSelectionEnd"> {
    return accessLib().symbols.tguiRangeSlider_setSelectionEnd(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiRangeSlider_getSelectionEnd(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getSelectionEnd(): ResultType<"tguiRangeSlider_getSelectionEnd"> {
    return accessLib().symbols.tguiRangeSlider_getSelectionEnd(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRangeSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStep(value: number): ResultType<"tguiRangeSlider_setStep"> {
    return accessLib().symbols.tguiRangeSlider_setStep(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiRangeSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStep(): ResultType<"tguiRangeSlider_getStep"> {
    return accessLib().symbols.tguiRangeSlider_getStep(this.pointer);
  }
}

export class Scrollbar extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiScrollbar_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiScrollbar_create());
  }

  /**
   * @original ```c
   * void tguiScrollbar_setViewportSize(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setViewportSize(value: number): ResultType<"tguiScrollbar_setViewportSize"> {
    return accessLib().symbols.tguiScrollbar_setViewportSize(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getViewportSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getViewportSize(): ResultType<"tguiScrollbar_getViewportSize"> {
    return accessLib().symbols.tguiScrollbar_getViewportSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbar_setMaximum(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiScrollbar_setMaximum"> {
    return accessLib().symbols.tguiScrollbar_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getMaximum(): ResultType<"tguiScrollbar_getMaximum"> {
    return accessLib().symbols.tguiScrollbar_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbar_setValue(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setValue(value: number): ResultType<"tguiScrollbar_setValue"> {
    return accessLib().symbols.tguiScrollbar_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getValue(): ResultType<"tguiScrollbar_getValue"> {
    return accessLib().symbols.tguiScrollbar_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbar_setScrollAmount(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setScrollAmount(value: number): ResultType<"tguiScrollbar_setScrollAmount"> {
    return accessLib().symbols.tguiScrollbar_setScrollAmount(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getScrollAmount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getScrollAmount(): ResultType<"tguiScrollbar_getScrollAmount"> {
    return accessLib().symbols.tguiScrollbar_getScrollAmount(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbar_setPolicy(tguiWidget * thisWidget, tguiScrollbarPolicy value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `ScrollbarPolicy`
   * @returns `void`
   */
  setPolicy(value: number): ResultType<"tguiScrollbar_setPolicy"> {
    return accessLib().symbols.tguiScrollbar_setPolicy(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiScrollbarPolicy tguiScrollbar_getPolicy(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `ScrollbarPolicy`
   */
  getPolicy(): ResultType<"tguiScrollbar_getPolicy"> {
    return accessLib().symbols.tguiScrollbar_getPolicy(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbar_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  setOrientation(value: number): ResultType<"tguiScrollbar_setOrientation"> {
    return accessLib().symbols.tguiScrollbar_setOrientation(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiOrientation tguiScrollbar_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  getOrientation(): ResultType<"tguiScrollbar_getOrientation"> {
    return accessLib().symbols.tguiScrollbar_getOrientation(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiScrollbar_isShown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isShown(): ResultType<"tguiScrollbar_isShown"> {
    return accessLib().symbols.tguiScrollbar_isShown(this.pointer);
  }

  /**
   * @original ```c
   * unsigned int tguiScrollbar_getMaxValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getMaxValue(): ResultType<"tguiScrollbar_getMaxValue"> {
    return accessLib().symbols.tguiScrollbar_getMaxValue(this.pointer);
  }

  /**
   * @original ```c
   * float tguiScrollbar_getDefaultWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getDefaultWidth(): ResultType<"tguiScrollbar_getDefaultWidth"> {
    return accessLib().symbols.tguiScrollbar_getDefaultWidth(this.pointer);
  }
}

export class Slider extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiSlider_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiSlider_create());
  }

  /**
   * @original ```c
   * void tguiSlider_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiSlider_setMinimum"> {
    return accessLib().symbols.tguiSlider_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSlider_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiSlider_getMinimum"> {
    return accessLib().symbols.tguiSlider_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiSlider_setMaximum"> {
    return accessLib().symbols.tguiSlider_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSlider_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiSlider_getMaximum"> {
    return accessLib().symbols.tguiSlider_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setValue(value: number): ResultType<"tguiSlider_setValue"> {
    return accessLib().symbols.tguiSlider_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSlider_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getValue(): ResultType<"tguiSlider_getValue"> {
    return accessLib().symbols.tguiSlider_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStep(value: number): ResultType<"tguiSlider_setStep"> {
    return accessLib().symbols.tguiSlider_setStep(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSlider_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStep(): ResultType<"tguiSlider_getStep"> {
    return accessLib().symbols.tguiSlider_getStep(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  setOrientation(value: number): ResultType<"tguiSlider_setOrientation"> {
    return accessLib().symbols.tguiSlider_setOrientation(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiOrientation tguiSlider_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  getOrientation(): ResultType<"tguiSlider_getOrientation"> {
    return accessLib().symbols.tguiSlider_getOrientation(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setInvertedDirection(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setInvertedDirection(
    value: number,
  ): ResultType<"tguiSlider_setInvertedDirection"> {
    return accessLib().symbols.tguiSlider_setInvertedDirection(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiSlider_getInvertedDirection(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getInvertedDirection(): ResultType<"tguiSlider_getInvertedDirection"> {
    return accessLib().symbols.tguiSlider_getInvertedDirection(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSlider_setChangeValueOnScroll(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setChangeValueOnScroll(
    value: number,
  ): ResultType<"tguiSlider_setChangeValueOnScroll"> {
    return accessLib().symbols.tguiSlider_setChangeValueOnScroll(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiSlider_getChangeValueOnScroll(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getChangeValueOnScroll(): ResultType<"tguiSlider_getChangeValueOnScroll"> {
    return accessLib().symbols.tguiSlider_getChangeValueOnScroll(this.pointer);
  }
}

export class SpinButton extends ClickableWidget {
  /**
   * @original ```c
   * tguiWidget * tguiSpinButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiSpinButton_create());
  }

  /**
   * @original ```c
   * void tguiSpinButton_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiSpinButton_setMinimum"> {
    return accessLib().symbols.tguiSpinButton_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinButton_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiSpinButton_getMinimum"> {
    return accessLib().symbols.tguiSpinButton_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinButton_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiSpinButton_setMaximum"> {
    return accessLib().symbols.tguiSpinButton_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinButton_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiSpinButton_getMaximum"> {
    return accessLib().symbols.tguiSpinButton_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinButton_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setValue(value: number): ResultType<"tguiSpinButton_setValue"> {
    return accessLib().symbols.tguiSpinButton_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinButton_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getValue(): ResultType<"tguiSpinButton_getValue"> {
    return accessLib().symbols.tguiSpinButton_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinButton_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStep(value: number): ResultType<"tguiSpinButton_setStep"> {
    return accessLib().symbols.tguiSpinButton_setStep(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinButton_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStep(): ResultType<"tguiSpinButton_getStep"> {
    return accessLib().symbols.tguiSpinButton_getStep(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinButton_setOrientation(tguiWidget * thisWidget, tguiOrientation value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Orientation`
   * @returns `void`
   */
  setOrientation(value: number): ResultType<"tguiSpinButton_setOrientation"> {
    return accessLib().symbols.tguiSpinButton_setOrientation(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiOrientation tguiSpinButton_getOrientation(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Orientation`
   */
  getOrientation(): ResultType<"tguiSpinButton_getOrientation"> {
    return accessLib().symbols.tguiSpinButton_getOrientation(this.pointer);
  }
}

export class SpinControl {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiWidget * tguiSpinControl_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    this.ptr = accessLib().symbols.tguiSpinControl_create();
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinButtonRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSpinButtonRenderer(): ResultType<"tguiSpinControl_getSpinButtonRenderer"> {
    return accessLib().symbols.tguiSpinControl_getSpinButtonRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinButtonSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSpinButtonSharedRenderer(): ResultType<
    "tguiSpinControl_getSpinButtonSharedRenderer"
  > {
    return accessLib().symbols.tguiSpinControl_getSpinButtonSharedRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinTextRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSpinTextRenderer(): ResultType<"tguiSpinControl_getSpinTextRenderer"> {
    return accessLib().symbols.tguiSpinControl_getSpinTextRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinControl_getSpinTextSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getSpinTextSharedRenderer(): ResultType<
    "tguiSpinControl_getSpinTextSharedRenderer"
  > {
    return accessLib().symbols.tguiSpinControl_getSpinTextSharedRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiSpinControl_setValue(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `Bool`
   */
  setValue(value: number): ResultType<"tguiSpinControl_setValue"> {
    return accessLib().symbols.tguiSpinControl_setValue(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinControl_getValue(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getValue(): ResultType<"tguiSpinControl_getValue"> {
    return accessLib().symbols.tguiSpinControl_getValue(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinControl_setMinimum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimum(value: number): ResultType<"tguiSpinControl_setMinimum"> {
    return accessLib().symbols.tguiSpinControl_setMinimum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinControl_getMinimum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimum(): ResultType<"tguiSpinControl_getMinimum"> {
    return accessLib().symbols.tguiSpinControl_getMinimum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinControl_setMaximum(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximum(value: number): ResultType<"tguiSpinControl_setMaximum"> {
    return accessLib().symbols.tguiSpinControl_setMaximum(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinControl_getMaximum(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximum(): ResultType<"tguiSpinControl_getMaximum"> {
    return accessLib().symbols.tguiSpinControl_getMaximum(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinControl_setStep(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setStep(value: number): ResultType<"tguiSpinControl_setStep"> {
    return accessLib().symbols.tguiSpinControl_setStep(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiSpinControl_getStep(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getStep(): ResultType<"tguiSpinControl_getStep"> {
    return accessLib().symbols.tguiSpinControl_getStep(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinControl_setDecimalPlaces(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setDecimalPlaces(
    value: number,
  ): ResultType<"tguiSpinControl_setDecimalPlaces"> {
    return accessLib().symbols.tguiSpinControl_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiSpinControl_getDecimalPlaces(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getDecimalPlaces(): ResultType<"tguiSpinControl_getDecimalPlaces"> {
    return accessLib().symbols.tguiSpinControl_getDecimalPlaces(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinControl_setSpinButtonWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setSpinButtonWidth(
    value: number,
  ): ResultType<"tguiSpinControl_setSpinButtonWidth"> {
    return accessLib().symbols.tguiSpinControl_setSpinButtonWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiSpinControl_getSpinButtonWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getSpinButtonWidth(): ResultType<"tguiSpinControl_getSpinButtonWidth"> {
    return accessLib().symbols.tguiSpinControl_getSpinButtonWidth(this.pointer);
  }
}

export class Tabs extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiTabs_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiTabs_create());
  }

  /**
   * @original ```c
   * void tguiTabs_setAutoSize(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setAutoSize(value: number): ResultType<"tguiTabs_setAutoSize"> {
    return accessLib().symbols.tguiTabs_setAutoSize(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_getAutoSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  getAutoSize(): ResultType<"tguiTabs_getAutoSize"> {
    return accessLib().symbols.tguiTabs_getAutoSize(this.pointer);
  }

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
  add(text: BufferSource, select: number): ResultType<"tguiTabs_add"> {
    return accessLib().symbols.tguiTabs_add(this.pointer, text, select);
  }

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
  insert(
    index: bigint,
    text: BufferSource,
    select: number,
  ): ResultType<"tguiTabs_insert"> {
    return accessLib().symbols.tguiTabs_insert(
      this.pointer,
      index,
      text,
      select,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTabs_getText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getText(index: bigint): ResultType<"tguiTabs_getText"> {
    return accessLib().symbols.tguiTabs_getText(this.pointer, index);
  }

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
  changeText(
    index: bigint,
    text: BufferSource,
  ): ResultType<"tguiTabs_changeText"> {
    return accessLib().symbols.tguiTabs_changeText(this.pointer, index, text);
  }

  /**
   * @original ```c
   * void tguiTabs_deselect(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  deselect(): ResultType<"tguiTabs_deselect"> {
    return accessLib().symbols.tguiTabs_deselect(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabs_removeAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAll(): ResultType<"tguiTabs_removeAll"> {
    return accessLib().symbols.tguiTabs_removeAll(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTabs_getSelected(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelected(): ResultType<"tguiTabs_getSelected"> {
    return accessLib().symbols.tguiTabs_getSelected(this.pointer);
  }

  /**
   * @original ```c
   * int tguiTabs_getSelectedIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getSelectedIndex(): ResultType<"tguiTabs_getSelectedIndex"> {
    return accessLib().symbols.tguiTabs_getSelectedIndex(this.pointer);
  }

  /**
   * @original ```c
   * int tguiTabs_getHoveredIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getHoveredIndex(): ResultType<"tguiTabs_getHoveredIndex"> {
    return accessLib().symbols.tguiTabs_getHoveredIndex(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiTabs_getTabsCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getTabsCount(): ResultType<"tguiTabs_getTabsCount"> {
    return accessLib().symbols.tguiTabs_getTabsCount(this.pointer);
  }

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
  setTabVisible(
    index: bigint,
    visible: number,
  ): ResultType<"tguiTabs_setTabVisible"> {
    return accessLib().symbols.tguiTabs_setTabVisible(
      this.pointer,
      index,
      visible,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_getTabVisible(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  getTabVisible(index: bigint): ResultType<"tguiTabs_getTabVisible"> {
    return accessLib().symbols.tguiTabs_getTabVisible(this.pointer, index);
  }

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
  setTabEnabled(
    index: bigint,
    visible: number,
  ): ResultType<"tguiTabs_setTabEnabled"> {
    return accessLib().symbols.tguiTabs_setTabEnabled(
      this.pointer,
      index,
      visible,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_getTabEnabled(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  getTabEnabled(index: bigint): ResultType<"tguiTabs_getTabEnabled"> {
    return accessLib().symbols.tguiTabs_getTabEnabled(this.pointer, index);
  }

  /**
   * @original ```c
   * void tguiTabs_setMaximumTabWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMaximumTabWidth(value: number): ResultType<"tguiTabs_setMaximumTabWidth"> {
    return accessLib().symbols.tguiTabs_setMaximumTabWidth(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiTabs_getMaximumTabWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMaximumTabWidth(): ResultType<"tguiTabs_getMaximumTabWidth"> {
    return accessLib().symbols.tguiTabs_getMaximumTabWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabs_setMinimumTabWidth(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setMinimumTabWidth(value: number): ResultType<"tguiTabs_setMinimumTabWidth"> {
    return accessLib().symbols.tguiTabs_setMinimumTabWidth(this.pointer, value);
  }

  /**
   * @original ```c
   * float tguiTabs_getMinimumTabWidth(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getMinimumTabWidth(): ResultType<"tguiTabs_getMinimumTabWidth"> {
    return accessLib().symbols.tguiTabs_getMinimumTabWidth(this.pointer);
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_selectByText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  selectByText(text: BufferSource): ResultType<"tguiTabs_selectByText"> {
    return accessLib().symbols.tguiTabs_selectByText(this.pointer, text);
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_selectByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  selectByIndex(index: bigint): ResultType<"tguiTabs_selectByIndex"> {
    return accessLib().symbols.tguiTabs_selectByIndex(this.pointer, index);
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_removeByText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  removeByText(text: BufferSource): ResultType<"tguiTabs_removeByText"> {
    return accessLib().symbols.tguiTabs_removeByText(this.pointer, text);
  }

  /**
   * @original ```c
   * tguiBool tguiTabs_removeByIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeByIndex(index: bigint): ResultType<"tguiTabs_removeByIndex"> {
    return accessLib().symbols.tguiTabs_removeByIndex(this.pointer, index);
  }
}

export class TabContainer extends Container {
  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiTabContainer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTabContainer_getTabsRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getTabsRenderer(): ResultType<"tguiTabContainer_getTabsRenderer"> {
    return accessLib().symbols.tguiTabContainer_getTabsRenderer(this.pointer);
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTabContainer_getTabsSharedRenderer(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Renderer *`
   */
  getTabsSharedRenderer(): ResultType<
    "tguiTabContainer_getTabsSharedRenderer"
  > {
    return accessLib().symbols.tguiTabContainer_getTabsSharedRenderer(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabContainer_select(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `void`
   */
  select(index: bigint): ResultType<"tguiTabContainer_select"> {
    return accessLib().symbols.tguiTabContainer_select(this.pointer, index);
  }

  /**
   * @original ```c
   * size_t tguiTabContainer_getPanelCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getPanelCount(): ResultType<"tguiTabContainer_getPanelCount"> {
    return accessLib().symbols.tguiTabContainer_getPanelCount(this.pointer);
  }

  /**
   * @original ```c
   * int tguiTabContainer_getSelectedIndex(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `int`
   */
  getSelectedIndex(): ResultType<"tguiTabContainer_getSelectedIndex"> {
    return accessLib().symbols.tguiTabContainer_getSelectedIndex(this.pointer);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTabContainer_getTabText(const tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param index `size_t`
   * @returns `Utf32`
   */
  getTabText(index: bigint): ResultType<"tguiTabContainer_getTabText"> {
    return accessLib().symbols.tguiTabContainer_getTabText(this.pointer, index);
  }

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
  changeTabText(
    index: bigint,
    text: BufferSource,
  ): ResultType<"tguiTabContainer_changeTabText"> {
    return accessLib().symbols.tguiTabContainer_changeTabText(
      this.pointer,
      index,
      text,
    );
  }

  /**
   * @original ```c
   * void tguiTabContainer_setTabFixedSize(tguiWidget * thisWidget, float value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `float`
   * @returns `void`
   */
  setTabFixedSize(
    value: number,
  ): ResultType<"tguiTabContainer_setTabFixedSize"> {
    return accessLib().symbols.tguiTabContainer_setTabFixedSize(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiTabContainer_getTabFixedSize(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `float`
   */
  getTabFixedSize(): ResultType<"tguiTabContainer_getTabFixedSize"> {
    return accessLib().symbols.tguiTabContainer_getTabFixedSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabContainer_setTabAlignment(tguiWidget * thisWidget, tguiTabContainerTabAlign value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `TabContainerTabAlign`
   * @returns `void`
   */
  setTabAlignment(
    value: number,
  ): ResultType<"tguiTabContainer_setTabAlignment"> {
    return accessLib().symbols.tguiTabContainer_setTabAlignment(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiTabContainerTabAlign tguiTabContainer_getTabAlignment(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `TabContainerTabAlign`
   */
  getTabAlignment(): ResultType<"tguiTabContainer_getTabAlignment"> {
    return accessLib().symbols.tguiTabContainer_getTabAlignment(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabContainer_setTabsHeight(tguiWidget * thisWidget, float height);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param height `float`
   * @returns `void`
   */
  setTabsHeight(height: number): ResultType<"tguiTabContainer_setTabsHeight"> {
    return accessLib().symbols.tguiTabContainer_setTabsHeight(
      this.pointer,
      height,
    );
  }

  /**
   * @original ```c
   * void tguiTabContainer_setTabsHeightFromLayout(tguiWidget * thisWidget, const tguiLayout * layout);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param layout `const Layout *`
   * @returns `void`
   */
  setTabsHeightFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_setTabsHeightFromLayout"> {
    return accessLib().symbols.tguiTabContainer_setTabsHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiTabContainer_removeTabWithName(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `Bool`
   */
  removeTabWithName(
    text: BufferSource,
  ): ResultType<"tguiTabContainer_removeTabWithName"> {
    return accessLib().symbols.tguiTabContainer_removeTabWithName(
      this.pointer,
      text,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiTabContainer_removeTabWithIndex(tguiWidget * thisWidget, size_t index);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param index `size_t`
   * @returns `Bool`
   */
  removeTabWithIndex(
    index: bigint,
  ): ResultType<"tguiTabContainer_removeTabWithIndex"> {
    return accessLib().symbols.tguiTabContainer_removeTabWithIndex(
      this.pointer,
      index,
    );
  }

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
  addTab(
    widget: Deno.PointerValue<unknown>,
    name: BufferSource,
    select: number,
  ): ResultType<"tguiTabContainer_addTab"> {
    return accessLib().symbols.tguiTabContainer_addTab(widget, name, select);
  }

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
  insertTab(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
    name: BufferSource,
    select: number,
  ): ResultType<"tguiTabContainer_insertTab"> {
    return accessLib().symbols.tguiTabContainer_insertTab(
      widget,
      index,
      name,
      select,
    );
  }

  /**
   * @original ```c
   * int tguiTabContainer_getIndex(const tguiWidget * widget, const tguiWidget * panel);
   * ```
   *
   * @param widget `const Widget *`
   * @param panel `const Widget *`
   * @returns `int`
   */
  getIndex(
    widget: Deno.PointerValue<unknown>,
    panel: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getIndex"> {
    return accessLib().symbols.tguiTabContainer_getIndex(widget, panel);
  }

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getSelected(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  getSelected(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getSelected"> {
    return accessLib().symbols.tguiTabContainer_getSelected(widget);
  }

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getPanel(const tguiWidget * widget, int index);
   * ```
   *
   * @param widget `const Widget *`
   * @param index `int`
   * @returns `Widget *`
   */
  getPanel(
    widget: Deno.PointerValue<unknown>,
    index: number,
  ): ResultType<"tguiTabContainer_getPanel"> {
    return accessLib().symbols.tguiTabContainer_getPanel(widget, index);
  }

  /**
   * @original ```c
   * tguiWidget * tguiTabContainer_getTabs(const tguiWidget * widget);
   * ```
   *
   * @param widget `const Widget *`
   * @returns `Widget *`
   */
  getTabs(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getTabs"> {
    return accessLib().symbols.tguiTabContainer_getTabs(widget);
  }
}

export class TextArea extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiTextArea_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiTextArea_create());
  }

  /**
   * @original ```c
   * void tguiTextArea_setText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setText(value: BufferSource): ResultType<"tguiTextArea_setText"> {
    return accessLib().symbols.tguiTextArea_setText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getText(): ResultType<"tguiTextArea_getText"> {
    return accessLib().symbols.tguiTextArea_getText(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_addText(tguiWidget * thisWidget, tguiUtf32 text);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param text `Utf32`
   * @returns `void`
   */
  addText(text: BufferSource): ResultType<"tguiTextArea_addText"> {
    return accessLib().symbols.tguiTextArea_addText(this.pointer, text);
  }

  /**
   * @original ```c
   * void tguiTextArea_setDefaultText(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiTextArea_setDefaultText"> {
    return accessLib().symbols.tguiTextArea_setDefaultText(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getDefaultText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getDefaultText(): ResultType<"tguiTextArea_getDefaultText"> {
    return accessLib().symbols.tguiTextArea_getDefaultText(this.pointer);
  }

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
  setSelectedText(
    selectionStartIndex: bigint,
    selectionEndIndex: bigint,
  ): ResultType<"tguiTextArea_setSelectedText"> {
    return accessLib().symbols.tguiTextArea_setSelectedText(
      this.pointer,
      selectionStartIndex,
      selectionEndIndex,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getSelectedText(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getSelectedText(): ResultType<"tguiTextArea_getSelectedText"> {
    return accessLib().symbols.tguiTextArea_getSelectedText(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getSelectionStart(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getSelectionStart(): ResultType<"tguiTextArea_getSelectionStart"> {
    return accessLib().symbols.tguiTextArea_getSelectionStart(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getSelectionEnd(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getSelectionEnd(): ResultType<"tguiTextArea_getSelectionEnd"> {
    return accessLib().symbols.tguiTextArea_getSelectionEnd(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_setMaximumCharacters(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setMaximumCharacters(
    value: bigint,
  ): ResultType<"tguiTextArea_setMaximumCharacters"> {
    return accessLib().symbols.tguiTextArea_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getMaximumCharacters(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getMaximumCharacters(): ResultType<"tguiTextArea_getMaximumCharacters"> {
    return accessLib().symbols.tguiTextArea_getMaximumCharacters(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_setTabString(tguiWidget * thisWidget, tguiUtf32 value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Utf32`
   * @returns `void`
   */
  setTabString(value: BufferSource): ResultType<"tguiTextArea_setTabString"> {
    return accessLib().symbols.tguiTextArea_setTabString(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiUtf32 tguiTextArea_getTabString(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Utf32`
   */
  getTabString(): ResultType<"tguiTextArea_getTabString"> {
    return accessLib().symbols.tguiTextArea_getTabString(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_setCaretPosition(tguiWidget * thisWidget, size_t value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `size_t`
   * @returns `void`
   */
  setCaretPosition(value: bigint): ResultType<"tguiTextArea_setCaretPosition"> {
    return accessLib().symbols.tguiTextArea_setCaretPosition(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretPosition(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getCaretPosition(): ResultType<"tguiTextArea_getCaretPosition"> {
    return accessLib().symbols.tguiTextArea_getCaretPosition(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretLine(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getCaretLine(): ResultType<"tguiTextArea_getCaretLine"> {
    return accessLib().symbols.tguiTextArea_getCaretLine(this.pointer);
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getCaretColumn(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getCaretColumn(): ResultType<"tguiTextArea_getCaretColumn"> {
    return accessLib().symbols.tguiTextArea_getCaretColumn(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_setReadOnly(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setReadOnly(value: number): ResultType<"tguiTextArea_setReadOnly"> {
    return accessLib().symbols.tguiTextArea_setReadOnly(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiTextArea_isReadOnly(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isReadOnly(): ResultType<"tguiTextArea_isReadOnly"> {
    return accessLib().symbols.tguiTextArea_isReadOnly(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextArea_enableMonospacedFontOptimization(tguiWidget * thisWidget, tguiBool enable);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param enable `Bool`
   * @returns `void`
   */
  enableMonospacedFontOptimization(
    enable: number,
  ): ResultType<"tguiTextArea_enableMonospacedFontOptimization"> {
    return accessLib().symbols.tguiTextArea_enableMonospacedFontOptimization(
      this.pointer,
      enable,
    );
  }

  /**
   * @original ```c
   * size_t tguiTextArea_getLinesCount(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `size_t`
   */
  getLinesCount(): ResultType<"tguiTextArea_getLinesCount"> {
    return accessLib().symbols.tguiTextArea_getLinesCount(this.pointer);
  }
}

export class ToggleButton extends ButtonBase {
  /**
   * @original ```c
   * tguiWidget * tguiToggleButton_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiToggleButton_create());
  }

  /**
   * @original ```c
   * void tguiToggleButton_setDown(tguiWidget * thisWidget, tguiBool value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `Bool`
   * @returns `void`
   */
  setDown(value: number): ResultType<"tguiToggleButton_setDown"> {
    return accessLib().symbols.tguiToggleButton_setDown(this.pointer, value);
  }

  /**
   * @original ```c
   * tguiBool tguiToggleButton_isDown(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `Bool`
   */
  isDown(): ResultType<"tguiToggleButton_isDown"> {
    return accessLib().symbols.tguiToggleButton_isDown(this.pointer);
  }
}

export class TreeView extends Widget {
  /**
   * @original ```c
   * tguiWidget * tguiTreeView_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiTreeView_create());
  }

  /**
   * @original ```c
   * void tguiTreeView_setItemHeight(tguiWidget * thisWidget, unsigned int value);
   * ```
   *
   * @param thisWidget `Widget *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setItemHeight(value: number): ResultType<"tguiTreeView_setItemHeight"> {
    return accessLib().symbols.tguiTreeView_setItemHeight(this.pointer, value);
  }

  /**
   * @original ```c
   * unsigned int tguiTreeView_getItemHeight(const tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @returns `unsigned int`
   */
  getItemHeight(): ResultType<"tguiTreeView_getItemHeight"> {
    return accessLib().symbols.tguiTreeView_getItemHeight(this.pointer);
  }

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
  addItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    createParents: number,
  ): ResultType<"tguiTreeView_addItem"> {
    return accessLib().symbols.tguiTreeView_addItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      createParents,
    );
  }

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
  changeItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    leafText: BufferSource,
  ): ResultType<"tguiTreeView_changeItem"> {
    return accessLib().symbols.tguiTreeView_changeItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      leafText,
    );
  }

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
  expand(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ): ResultType<"tguiTreeView_expand"> {
    return accessLib().symbols.tguiTreeView_expand(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

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
  collapse(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ): ResultType<"tguiTreeView_collapse"> {
    return accessLib().symbols.tguiTreeView_collapse(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  /**
   * @original ```c
   * void tguiTreeView_expandAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  expandAll(): ResultType<"tguiTreeView_expandAll"> {
    return accessLib().symbols.tguiTreeView_expandAll(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeView_collapseAll(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  collapseAll(): ResultType<"tguiTreeView_collapseAll"> {
    return accessLib().symbols.tguiTreeView_collapseAll(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeView_deselectItem(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  deselectItem(): ResultType<"tguiTreeView_deselectItem"> {
    return accessLib().symbols.tguiTreeView_deselectItem(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeView_removeAllItems(tguiWidget * thisWidget);
   * ```
   *
   * @param thisWidget `Widget *`
   * @returns `void`
   */
  removeAllItems(): ResultType<"tguiTreeView_removeAllItems"> {
    return accessLib().symbols.tguiTreeView_removeAllItems(this.pointer);
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiTreeView_getSelectedItem(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getSelectedItem(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getSelectedItem"> {
    return accessLib().symbols.tguiTreeView_getSelectedItem(
      this.pointer,
      returnCount,
    );
  }

  /**
   * @original ```c
   * const tguiUtf32 * tguiTreeView_getHoveredItem(const tguiWidget * thisWidget, size_t * returnCount);
   * ```
   *
   * @param thisWidget `const Widget *`
   * @param returnCount `size_t *`
   * @returns `const Utf32 *`
   */
  getHoveredItem(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getHoveredItem"> {
    return accessLib().symbols.tguiTreeView_getHoveredItem(
      this.pointer,
      returnCount,
    );
  }

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
  setItemIndexInParent(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    index: bigint,
  ): ResultType<"tguiTreeView_setItemIndexInParent"> {
    return accessLib().symbols.tguiTreeView_setItemIndexInParent(
      this.pointer,
      hierarchy,
      hierarchyLength,
      index,
    );
  }

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
  getItemIndexInParent(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ): ResultType<"tguiTreeView_getItemIndexInParent"> {
    return accessLib().symbols.tguiTreeView_getItemIndexInParent(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

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
  selectItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ): ResultType<"tguiTreeView_selectItem"> {
    return accessLib().symbols.tguiTreeView_selectItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

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
  removeItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    removeParentsWhenEmpty: number,
  ): ResultType<"tguiTreeView_removeItem"> {
    return accessLib().symbols.tguiTreeView_removeItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      removeParentsWhenEmpty,
    );
  }

  /**
   * @original ```c
   * const tguiTreeViewConstNode * tguiTreeView_getNode(const tguiWidget * widget, const tguiUtf32 * hierarchy, unsigned int hierarchyLength);
   * ```
   *
   * @param widget `const Widget *`
   * @param hierarchy `const Utf32 *`
   * @param hierarchyLength `unsigned int`
   * @returns `const TreeViewConstNode *`
   */
  getNode(
    widget: Deno.PointerValue<unknown>,
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: number,
  ): ResultType<"tguiTreeView_getNode"> {
    return accessLib().symbols.tguiTreeView_getNode(
      widget,
      hierarchy,
      hierarchyLength,
    );
  }

  /**
   * @original ```c
   * tguiTreeViewConstNode ** tguiTreeView_getNodes(const tguiWidget * widget, size_t * count);
   * ```
   *
   * @param widget `const Widget *`
   * @param count `size_t *`
   * @returns `TreeViewConstNode **`
   */
  getNodes(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getNodes"> {
    return accessLib().symbols.tguiTreeView_getNodes(widget, count);
  }
}

export class TreeViewConstNode {
  /**
   * @original ```c
   * void tguiTreeViewConstNode_destroy(tguiTreeViewConstNode * node);
   * ```
   *
   * @param node `TreeViewConstNode *`
   * @returns `void`
   */
  destroy(
    node: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewConstNode_destroy"> {
    return accessLib().symbols.tguiTreeViewConstNode_destroy(node);
  }
}

export class VerticalLayout extends BoxLayoutRatios {
  /**
   * @original ```c
   * tguiWidget * tguiVerticalLayout_create();
   * ```
   *
   * @param
   * @returns `Widget *`
   */
  constructor() {
    super(accessLib().symbols.tguiVerticalLayout_create());
  }
}

export class BoxLayoutRenderer extends GroupRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiBoxLayoutRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor() {
    super(accessLib().symbols.tguiBoxLayoutRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiBoxLayoutRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiBoxLayoutRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiBoxLayoutRenderer_setSpaceBetweenWidgets(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setSpaceBetweenWidgets(
    value: number,
  ): ResultType<"tguiBoxLayoutRenderer_setSpaceBetweenWidgets"> {
    return accessLib().symbols.tguiBoxLayoutRenderer_setSpaceBetweenWidgets(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiBoxLayoutRenderer_getSpaceBetweenWidgets(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getSpaceBetweenWidgets(): ResultType<
    "tguiBoxLayoutRenderer_getSpaceBetweenWidgets"
  > {
    return accessLib().symbols.tguiBoxLayoutRenderer_getSpaceBetweenWidgets(
      this.pointer,
    );
  }
}

export class ButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiButtonRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiButtonRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiButtonRenderer_setTextColor"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiButtonRenderer_getTextColor"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiButtonRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorFocused(): ResultType<"tguiButtonRenderer_getTextColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<
    "tguiButtonRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDown(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDown(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDown(): ResultType<"tguiButtonRenderer_getTextColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDownHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDownHover(): ResultType<
    "tguiButtonRenderer_getTextColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDownFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDownFocused(): ResultType<
    "tguiButtonRenderer_getTextColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDownDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextColorDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextColorDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiButtonRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorFocused(): ResultType<
    "tguiButtonRenderer_getBackgroundColorFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDisabled(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDown(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDown(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDown(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDown"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDownHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDownHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDownHover(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDownHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDownFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDownFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDownFocused(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDownFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBackgroundColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDownDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownDisabled"> {
    return accessLib().symbols
      .tguiButtonRenderer_setBackgroundColorDownDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBackgroundColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownDisabled"
  > {
    return accessLib().symbols
      .tguiButtonRenderer_getBackgroundColorDownDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorHover(): ResultType<"tguiButtonRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorFocused(): ResultType<
    "tguiButtonRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDisabled(): ResultType<
    "tguiButtonRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDown(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDown(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDown(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDown(): ResultType<"tguiButtonRenderer_getBorderColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDownHover(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDownHover(): ResultType<
    "tguiButtonRenderer_getBorderColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDownFocused(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDownFocused(): ResultType<
    "tguiButtonRenderer_getBorderColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setBorderColorDownDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDownDisabled(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getBorderColorDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getBorderColorDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTexture"> {
    return accessLib().symbols.tguiButtonRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTexture(): ResultType<"tguiButtonRenderer_getTexture"> {
    return accessLib().symbols.tguiButtonRenderer_getTexture(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureHover(): ResultType<"tguiButtonRenderer_getTextureHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureFocused(): ResultType<"tguiButtonRenderer_getTextureFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDisabled(): ResultType<"tguiButtonRenderer_getTextureDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDown(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDown(): ResultType<"tguiButtonRenderer_getTextureDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDown(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDownHover(): ResultType<"tguiButtonRenderer_getTextureDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDownFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDownFocused(): ResultType<
    "tguiButtonRenderer_getTextureDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextureDownDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDownDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiButtonRenderer_getTextureDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextureDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiButtonRenderer_setTextStyle"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiButtonRenderer_getTextStyle"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleHover(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleHover(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleHover(): ResultType<"tguiButtonRenderer_getTextStyleHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleFocused(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleFocused(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleFocused(): ResultType<"tguiButtonRenderer_getTextStyleFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDisabled(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleDisabled(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleDisabled(): ResultType<
    "tguiButtonRenderer_getTextStyleDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDown(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleDown(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDown(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleDown(): ResultType<"tguiButtonRenderer_getTextStyleDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownHover(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleDownHover(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleDownHover(): ResultType<
    "tguiButtonRenderer_getTextStyleDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownFocused(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleDownFocused(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleDownFocused(): ResultType<
    "tguiButtonRenderer_getTextStyleDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextStyleDownDisabled(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleDownDisabled(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiButtonRenderer_getTextStyleDownDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextStyleDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextOutlineColor(
    value: Color,
  ): ResultType<"tguiButtonRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiButtonRenderer_setTextOutlineColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiButtonRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextOutlineColor(): ResultType<"tguiButtonRenderer_getTextOutlineColor"> {
    return accessLib().symbols.tguiButtonRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiButtonRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiButtonRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getTextOutlineThickness(): ResultType<
    "tguiButtonRenderer_getTextOutlineThickness"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiButtonRenderer_setRoundedBorderRadius(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setRoundedBorderRadius(
    value: number,
  ): ResultType<"tguiButtonRenderer_setRoundedBorderRadius"> {
    return accessLib().symbols.tguiButtonRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiButtonRenderer_getRoundedBorderRadius(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getRoundedBorderRadius(): ResultType<
    "tguiButtonRenderer_getRoundedBorderRadius"
  > {
    return accessLib().symbols.tguiButtonRenderer_getRoundedBorderRadius(
      this.pointer,
    );
  }
}

export class ChatBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiChatBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiChatBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiChatBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiChatBoxRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiChatBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiChatBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiChatBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiChatBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiChatBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiChatBoxRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiChatBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChatBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiChatBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiChatBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiChatBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiChatBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiChatBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiChatBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiChatBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiChatBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setScrollbar"> {
    return accessLib().symbols.tguiChatBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiChatBoxRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiChatBoxRenderer_getScrollbar"> {
    return accessLib().symbols.tguiChatBoxRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiChatBoxRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiChatBoxRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiChatBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiChatBoxRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiChatBoxRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiChatBoxRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class ColorPickerRenderer extends ChildWindowRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiColorPickerRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor() {
    super(accessLib().symbols.tguiColorPickerRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiColorPickerRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiColorPickerRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setButton"> {
    return accessLib().symbols.tguiColorPickerRenderer_setButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getButton(): ResultType<"tguiColorPickerRenderer_getButton"> {
    return accessLib().symbols.tguiColorPickerRenderer_getButton(this.pointer);
  }

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setLabel(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setLabel(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setLabel"> {
    return accessLib().symbols.tguiColorPickerRenderer_setLabel(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getLabel(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getLabel(): ResultType<"tguiColorPickerRenderer_getLabel"> {
    return accessLib().symbols.tguiColorPickerRenderer_getLabel(this.pointer);
  }

  /**
   * @original ```c
   * void tguiColorPickerRenderer_setSlider(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setSlider(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setSlider"> {
    return accessLib().symbols.tguiColorPickerRenderer_setSlider(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiColorPickerRenderer_getSlider(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getSlider(): ResultType<"tguiColorPickerRenderer_getSlider"> {
    return accessLib().symbols.tguiColorPickerRenderer_getSlider(this.pointer);
  }
}

export class ComboBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiComboBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiComboBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiComboBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiComboBoxRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiComboBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiComboBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiComboBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiComboBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiComboBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiComboBoxRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiComboBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiComboBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiComboBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setDefaultTextColor(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setDefaultTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getDefaultTextColor(): ResultType<
    "tguiComboBoxRenderer_getDefaultTextColor"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowBackgroundColor(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowBackgroundColor(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColor"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColorHover"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setArrowBackgroundColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowBackgroundColorHover(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getArrowBackgroundColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColorDisabled"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setArrowBackgroundColorDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowBackgroundColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColorDisabled"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getArrowBackgroundColorDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColor(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColor(): ResultType<"tguiComboBoxRenderer_getArrowColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColorHover(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColorHover(): ResultType<"tguiComboBoxRenderer_getArrowColorHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setArrowColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColorDisabled(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setArrowColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getArrowColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getArrowColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiComboBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiComboBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiComboBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiComboBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureBackgroundDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackgroundDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureBackgroundDisabled"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setTextureBackgroundDisabled(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureBackgroundDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackgroundDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextureBackgroundDisabled"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getTextureBackgroundDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrow(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrow(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrow"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrow(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrow(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrow(): ResultType<"tguiComboBoxRenderer_getTextureArrow"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrow(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrowHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrowHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrowHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrowHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowHover(): ResultType<
    "tguiComboBoxRenderer_getTextureArrowHover"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrowHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextureArrowDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrowDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrowDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiComboBoxRenderer_getTextureArrowDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextureArrowDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrowDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiComboBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiComboBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiComboBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setDefaultTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setDefaultTextStyle(
    value: number,
  ): ResultType<"tguiComboBoxRenderer_setDefaultTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiComboBoxRenderer_getDefaultTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getDefaultTextStyle(): ResultType<
    "tguiComboBoxRenderer_getDefaultTextStyle"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiComboBoxRenderer_setListBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setListBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setListBox"> {
    return accessLib().symbols.tguiComboBoxRenderer_setListBox(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiComboBoxRenderer_getListBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getListBox(): ResultType<"tguiComboBoxRenderer_getListBox"> {
    return accessLib().symbols.tguiComboBoxRenderer_getListBox(this.pointer);
  }
}

export class EditBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiEditBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiEditBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiEditBoxRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiEditBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiEditBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiEditBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiEditBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiEditBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiEditBoxRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setCaretWidth(
    value: number,
  ): ResultType<"tguiEditBoxRenderer_setCaretWidth"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiEditBoxRenderer_getCaretWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getCaretWidth(): ResultType<"tguiEditBoxRenderer_getCaretWidth"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiEditBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiEditBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setDefaultTextColor(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setDefaultTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getDefaultTextColor(): ResultType<"tguiEditBoxRenderer_getDefaultTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorFocused(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setTextColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorFocused(): ResultType<"tguiEditBoxRenderer_getTextColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiEditBoxRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setSelectedTextBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextBackgroundColor(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setSelectedTextBackgroundColor"> {
    return accessLib().symbols
      .tguiEditBoxRenderer_setSelectedTextBackgroundColor(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getSelectedTextBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextBackgroundColor(): ResultType<
    "tguiEditBoxRenderer_getSelectedTextBackgroundColor"
  > {
    return accessLib().symbols
      .tguiEditBoxRenderer_getSelectedTextBackgroundColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiEditBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorFocused(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorFocused(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorFocused"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCaretColor(value: Color): ResultType<"tguiEditBoxRenderer_setCaretColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getCaretColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCaretColor(): ResultType<"tguiEditBoxRenderer_getCaretColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setCaretColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCaretColorHover(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setCaretColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getCaretColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCaretColorHover(): ResultType<"tguiEditBoxRenderer_getCaretColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiEditBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorHover(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorHover(): ResultType<"tguiEditBoxRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorFocused(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorFocused(): ResultType<
    "tguiEditBoxRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDisabled(
    value: Color,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiEditBoxRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTexture"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTexture(): ResultType<"tguiEditBoxRenderer_getTexture"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTexture(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureHover(): ResultType<"tguiEditBoxRenderer_getTextureHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureFocused(): ResultType<"tguiEditBoxRenderer_getTextureFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextureDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiEditBoxRenderer_getTextureDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDisabled(): ResultType<"tguiEditBoxRenderer_getTextureDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiEditBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiEditBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiEditBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiEditBoxRenderer_setDefaultTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setDefaultTextStyle(
    value: number,
  ): ResultType<"tguiEditBoxRenderer_setDefaultTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiEditBoxRenderer_getDefaultTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getDefaultTextStyle(): ResultType<"tguiEditBoxRenderer_getDefaultTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }
}

export class FileDialogRenderer extends ChildWindowRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiFileDialogRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor() {
    super(accessLib().symbols.tguiFileDialogRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiFileDialogRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiFileDialogRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setListView(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setListView(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setListView"> {
    return accessLib().symbols.tguiFileDialogRenderer_setListView(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getListView(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getListView(): ResultType<"tguiFileDialogRenderer_getListView"> {
    return accessLib().symbols.tguiFileDialogRenderer_getListView(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setEditBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setEditBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setEditBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_setEditBox(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getEditBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getEditBox(): ResultType<"tguiFileDialogRenderer_getEditBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_getEditBox(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setFilenameLabel(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setFilenameLabel(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setFilenameLabel"> {
    return accessLib().symbols.tguiFileDialogRenderer_setFilenameLabel(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getFilenameLabel(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getFilenameLabel(): ResultType<"tguiFileDialogRenderer_getFilenameLabel"> {
    return accessLib().symbols.tguiFileDialogRenderer_getFilenameLabel(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setFileTypeComboBox(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setFileTypeComboBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setFileTypeComboBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_setFileTypeComboBox(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getFileTypeComboBox(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getFileTypeComboBox(): ResultType<
    "tguiFileDialogRenderer_getFileTypeComboBox"
  > {
    return accessLib().symbols.tguiFileDialogRenderer_getFileTypeComboBox(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getButton(): ResultType<"tguiFileDialogRenderer_getButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getButton(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setBackButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setBackButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setBackButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setBackButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getBackButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getBackButton(): ResultType<"tguiFileDialogRenderer_getBackButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getBackButton(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setForwardButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setForwardButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setForwardButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setForwardButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getForwardButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getForwardButton(): ResultType<"tguiFileDialogRenderer_getForwardButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getForwardButton(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setUpButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setUpButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setUpButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setUpButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiFileDialogRenderer_getUpButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getUpButton(): ResultType<"tguiFileDialogRenderer_getUpButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getUpButton(this.pointer);
  }

  /**
   * @original ```c
   * void tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  setArrowsOnNavigationButtonsVisible(
    value: number,
  ): ResultType<"tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible"> {
    return accessLib().symbols
      .tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible(
        this.pointer,
        value,
      );
  }

  /**
   * @original ```c
   * tguiBool tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  getArrowsOnNavigationButtonsVisible(): ResultType<
    "tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible"
  > {
    return accessLib().symbols
      .tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible(this.pointer);
  }
}

export class KnobRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiKnobRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiKnobRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiKnobRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiKnobRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setBorders"> {
    return accessLib().symbols.tguiKnobRenderer_setBorders(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiOutline * tguiKnobRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiKnobRenderer_getBorders"> {
    return accessLib().symbols.tguiKnobRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiKnobRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiKnobRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiKnobRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiKnobRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setThumbColor(value: Color): ResultType<"tguiKnobRenderer_setThumbColor"> {
    return accessLib().symbols.tguiKnobRenderer_setThumbColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getThumbColor(): ResultType<"tguiKnobRenderer_getThumbColor"> {
    return accessLib().symbols.tguiKnobRenderer_getThumbColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(value: Color): ResultType<"tguiKnobRenderer_setBorderColor"> {
    return accessLib().symbols.tguiKnobRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiKnobRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiKnobRenderer_getBorderColor"> {
    return accessLib().symbols.tguiKnobRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiKnobRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiKnobRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<"tguiKnobRenderer_getTextureBackground"> {
    return accessLib().symbols.tguiKnobRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setTextureForeground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureForeground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setTextureForeground"> {
    return accessLib().symbols.tguiKnobRenderer_setTextureForeground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiKnobRenderer_getTextureForeground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureForeground(): ResultType<"tguiKnobRenderer_getTextureForeground"> {
    return accessLib().symbols.tguiKnobRenderer_getTextureForeground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiKnobRenderer_setImageRotation(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setImageRotation(
    value: number,
  ): ResultType<"tguiKnobRenderer_setImageRotation"> {
    return accessLib().symbols.tguiKnobRenderer_setImageRotation(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiKnobRenderer_getImageRotation(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getImageRotation(): ResultType<"tguiKnobRenderer_getImageRotation"> {
    return accessLib().symbols.tguiKnobRenderer_getImageRotation(this.pointer);
  }
}

export class LabelRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiLabelRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiLabelRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiLabelRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLabelRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setBorders"> {
    return accessLib().symbols.tguiLabelRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiLabelRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiLabelRenderer_getBorders"> {
    return accessLib().symbols.tguiLabelRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setPadding"> {
    return accessLib().symbols.tguiLabelRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiLabelRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiLabelRenderer_getPadding"> {
    return accessLib().symbols.tguiLabelRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiLabelRenderer_setTextColor"> {
    return accessLib().symbols.tguiLabelRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiLabelRenderer_getTextColor"> {
    return accessLib().symbols.tguiLabelRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextOutlineColor(
    value: Color,
  ): ResultType<"tguiLabelRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiLabelRenderer_setTextOutlineColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextOutlineColor(): ResultType<"tguiLabelRenderer_getTextOutlineColor"> {
    return accessLib().symbols.tguiLabelRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiLabelRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiLabelRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiLabelRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getTextOutlineThickness(): ResultType<
    "tguiLabelRenderer_getTextOutlineThickness"
  > {
    return accessLib().symbols.tguiLabelRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiLabelRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiLabelRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiLabelRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiLabelRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(value: Color): ResultType<"tguiLabelRenderer_setBorderColor"> {
    return accessLib().symbols.tguiLabelRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiLabelRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiLabelRenderer_getBorderColor"> {
    return accessLib().symbols.tguiLabelRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiLabelRenderer_setTextStyle"> {
    return accessLib().symbols.tguiLabelRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiLabelRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiLabelRenderer_getTextStyle"> {
    return accessLib().symbols.tguiLabelRenderer_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setScrollbar"> {
    return accessLib().symbols.tguiLabelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiLabelRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiLabelRenderer_getScrollbar"> {
    return accessLib().symbols.tguiLabelRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiLabelRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiLabelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiLabelRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiLabelRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiLabelRenderer_getScrollbarWidth(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiLabelRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiLabelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiLabelRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<"tguiLabelRenderer_getTextureBackground"> {
    return accessLib().symbols.tguiLabelRenderer_getTextureBackground(
      this.pointer,
    );
  }
}

export class ListBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiListBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiListBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiListBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiListBoxRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiListBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiListBoxRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiListBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiListBoxRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiListBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiListBoxRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiListBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiListBoxRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiListBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiListBoxRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColor(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColor(): ResultType<
    "tguiListBoxRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiListBoxRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColorHover(): ResultType<
    "tguiListBoxRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiListBoxRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiListBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiListBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiListBoxRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiListBoxRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColorHover(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColorHover(): ResultType<
    "tguiListBoxRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiListBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListBoxRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiListBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiListBoxRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiListBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(value: number): ResultType<"tguiListBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiListBoxRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiListBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextStyle(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setSelectedTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setSelectedTextStyle(
    value: number,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiListBoxRenderer_getSelectedTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getSelectedTextStyle(): ResultType<
    "tguiListBoxRenderer_getSelectedTextStyle"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextStyle(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setScrollbar"> {
    return accessLib().symbols.tguiListBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiListBoxRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiListBoxRenderer_getScrollbar"> {
    return accessLib().symbols.tguiListBoxRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListBoxRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiListBoxRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiListBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiListBoxRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiListBoxRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiListBoxRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class ListViewRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiListViewRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiListViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiListViewRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiListViewRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setBorders"> {
    return accessLib().symbols.tguiListViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiListViewRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiListViewRenderer_getBorders"> {
    return accessLib().symbols.tguiListViewRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setPadding"> {
    return accessLib().symbols.tguiListViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiListViewRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiListViewRenderer_getPadding"> {
    return accessLib().symbols.tguiListViewRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiListViewRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiListViewRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiListViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColor(): ResultType<
    "tguiListViewRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiListViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColorHover(): ResultType<
    "tguiListViewRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiListViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiListViewRenderer_setTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiListViewRenderer_getTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiListViewRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiListViewRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColorHover(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColorHover(): ResultType<
    "tguiListViewRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setHeaderBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setHeaderBackgroundColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setHeaderBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setHeaderBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getHeaderBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getHeaderBackgroundColor(): ResultType<
    "tguiListViewRenderer_getHeaderBackgroundColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getHeaderBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setHeaderTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setHeaderTextColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setHeaderTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setHeaderTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getHeaderTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getHeaderTextColor(): ResultType<"tguiListViewRenderer_getHeaderTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_getHeaderTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setBorderColor"> {
    return accessLib().symbols.tguiListViewRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiListViewRenderer_getBorderColor"> {
    return accessLib().symbols.tguiListViewRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setSeparatorColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSeparatorColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setSeparatorColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSeparatorColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getSeparatorColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSeparatorColor(): ResultType<"tguiListViewRenderer_getSeparatorColor"> {
    return accessLib().symbols.tguiListViewRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setGridLinesColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setGridLinesColor(
    value: Color,
  ): ResultType<"tguiListViewRenderer_setGridLinesColor"> {
    return accessLib().symbols.tguiListViewRenderer_setGridLinesColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiListViewRenderer_getGridLinesColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getGridLinesColor(): ResultType<"tguiListViewRenderer_getGridLinesColor"> {
    return accessLib().symbols.tguiListViewRenderer_getGridLinesColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextureHeaderBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureHeaderBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setTextureHeaderBackground"> {
    return accessLib().symbols.tguiListViewRenderer_setTextureHeaderBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiListViewRenderer_getTextureHeaderBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureHeaderBackground(): ResultType<
    "tguiListViewRenderer_getTextureHeaderBackground"
  > {
    return accessLib().symbols.tguiListViewRenderer_getTextureHeaderBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiListViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiListViewRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiListViewRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiListViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setScrollbar"> {
    return accessLib().symbols.tguiListViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiListViewRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiListViewRenderer_getScrollbar"> {
    return accessLib().symbols.tguiListViewRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiListViewRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiListViewRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiListViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiListViewRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiListViewRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiListViewRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class MenuBarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiMenuBarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiMenuBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiMenuBarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiMenuBarRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiMenuBarRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiMenuBarRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColor(
    value: Color,
  ): ResultType<"tguiMenuBarRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSelectedBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColor(): ResultType<
    "tguiMenuBarRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiMenuBarRenderer_setTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiMenuBarRenderer_getTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiMenuBarRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiMenuBarRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiMenuBarRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<
    "tguiMenuBarRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSeparatorColor(
    value: Color,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMenuBarRenderer_getSeparatorColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSeparatorColor(): ResultType<"tguiMenuBarRenderer_getSeparatorColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureItemBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureItemBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureItemBackground"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextureItemBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureItemBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureItemBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureItemBackground"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextureItemBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setTextureSelectedItemBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureSelectedItemBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureSelectedItemBackground"> {
    return accessLib().symbols
      .tguiMenuBarRenderer_setTextureSelectedItemBackground(
        this.pointer,
        value,
      );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiMenuBarRenderer_getTextureSelectedItemBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureSelectedItemBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureSelectedItemBackground"
  > {
    return accessLib().symbols
      .tguiMenuBarRenderer_getTextureSelectedItemBackground(this.pointer);
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setDistanceToSide(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiMenuBarRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getDistanceToSide(): ResultType<"tguiMenuBarRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiMenuBarRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setSeparatorThickness(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorThickness"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorThickness(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getSeparatorThickness(): ResultType<
    "tguiMenuBarRenderer_getSeparatorThickness"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorThickness(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorVerticalPadding(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setSeparatorVerticalPadding(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorVerticalPadding"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorVerticalPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorVerticalPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getSeparatorVerticalPadding(): ResultType<
    "tguiMenuBarRenderer_getSeparatorVerticalPadding"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorVerticalPadding(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMenuBarRenderer_setSeparatorSidePadding(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setSeparatorSidePadding(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorSidePadding"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorSidePadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiMenuBarRenderer_getSeparatorSidePadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getSeparatorSidePadding(): ResultType<
    "tguiMenuBarRenderer_getSeparatorSidePadding"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorSidePadding(
      this.pointer,
    );
  }
}

export class MessageBoxRenderer extends ChildWindowRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiMessageBoxRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor() {
    super(accessLib().symbols.tguiMessageBoxRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiMessageBoxRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiMessageBoxRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiMessageBoxRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(
    value: Color,
  ): ResultType<"tguiMessageBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiMessageBoxRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiMessageBoxRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiMessageBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiMessageBoxRenderer_getTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiMessageBoxRenderer_setButton(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMessageBoxRenderer_setButton"> {
    return accessLib().symbols.tguiMessageBoxRenderer_setButton(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiMessageBoxRenderer_getButton(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getButton(): ResultType<"tguiMessageBoxRenderer_getButton"> {
    return accessLib().symbols.tguiMessageBoxRenderer_getButton(this.pointer);
  }
}

export class PictureRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiPictureRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiPictureRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiPictureRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiPictureRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiPictureRenderer_setTexture(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPictureRenderer_setTexture"> {
    return accessLib().symbols.tguiPictureRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiPictureRenderer_getTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTexture(): ResultType<"tguiPictureRenderer_getTexture"> {
    return accessLib().symbols.tguiPictureRenderer_getTexture(this.pointer);
  }
}

export class ProgressBarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiProgressBarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiProgressBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiProgressBarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiProgressBarRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setBorders"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiProgressBarRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiProgressBarRenderer_getBorders"> {
    return accessLib().symbols.tguiProgressBarRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setTextColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiProgressBarRenderer_getTextColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextColorFilled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorFilled(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setTextColorFilled"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextColorFilled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextColorFilled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorFilled(): ResultType<
    "tguiProgressBarRenderer_getTextColorFilled"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextColorFilled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<
    "tguiProgressBarRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setFillColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setFillColor(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setFillColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setFillColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getFillColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getFillColor(): ResultType<"tguiProgressBarRenderer_getFillColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getFillColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setBorderColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiProgressBarRenderer_getBorderColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiProgressBarRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiProgressBarRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextureFill(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureFill(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setTextureFill"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextureFill(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiProgressBarRenderer_getTextureFill(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureFill(): ResultType<"tguiProgressBarRenderer_getTextureFill"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextureFill(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(
    value: number,
  ): ResultType<"tguiProgressBarRenderer_setTextStyle"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiProgressBarRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiProgressBarRenderer_getTextStyle"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextStyle(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextOutlineColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextOutlineColor(
    value: Color,
  ): ResultType<"tguiProgressBarRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextOutlineColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiProgressBarRenderer_getTextOutlineColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextOutlineColor(): ResultType<
    "tguiProgressBarRenderer_getTextOutlineColor"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiProgressBarRenderer_setTextOutlineThickness(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiProgressBarRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiProgressBarRenderer_getTextOutlineThickness(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getTextOutlineThickness(): ResultType<
    "tguiProgressBarRenderer_getTextOutlineThickness"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }
}

export class RadioButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiRadioButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiRadioButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiRadioButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiRadioButtonRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextDistanceRatio(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setTextDistanceRatio(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextDistanceRatio"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextDistanceRatio(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiRadioButtonRenderer_getTextDistanceRatio(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getTextDistanceRatio(): ResultType<
    "tguiRadioButtonRenderer_getTextDistanceRatio"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextDistanceRatio(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiRadioButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiRadioButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiRadioButtonRenderer_getTextColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiRadioButtonRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorChecked(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorChecked(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getTextColorChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorChecked(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorCheckedHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorCheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorCheckedHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextColorCheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorCheckedHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorCheckedDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextColorCheckedDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getTextColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextColorCheckedDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorChecked(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorChecked"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorChecked(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorChecked"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorChecked(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorCheckedHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorCheckedHover"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorCheckedHover"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorCheckedDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiRadioButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorHover(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorFocused(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorFocused(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorFocused(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorChecked(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorChecked(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorChecked(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorChecked(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorCheckedHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedHover"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedHover"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedFocused(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorCheckedFocused(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedFocused"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedFocused(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorCheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedFocused"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedFocused(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setBorderColorCheckedDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorCheckedDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedDisabled(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getBorderColorCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCheckColor(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCheckColor(): ResultType<"tguiRadioButtonRenderer_getCheckColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCheckColorHover(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCheckColorHover(): ResultType<
    "tguiRadioButtonRenderer_getCheckColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setCheckColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCheckColorDisabled(
    value: Color,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRadioButtonRenderer_getCheckColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCheckColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getCheckColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUnchecked(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureUnchecked(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUnchecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureUnchecked(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUnchecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureUnchecked(): ResultType<
    "tguiRadioButtonRenderer_getTextureUnchecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureUnchecked(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureChecked(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureChecked(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureChecked(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureChecked(): ResultType<"tguiRadioButtonRenderer_getTextureChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureChecked(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureUncheckedHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureUncheckedHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureUncheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureUncheckedHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureCheckedHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureCheckedHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureCheckedHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureUncheckedFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedFocused"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureUncheckedFocused(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureUncheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedFocused"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureUncheckedFocused(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedFocused(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureCheckedFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedFocused"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureCheckedFocused(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedFocused(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureCheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedFocused"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureCheckedFocused(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureUncheckedDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureUncheckedDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureUncheckedDisabled(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureUncheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureUncheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureUncheckedDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextureCheckedDisabled(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureCheckedDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureCheckedDisabled(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRadioButtonRenderer_getTextureCheckedDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureCheckedDisabled(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextStyle(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyle(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextStyle"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiRadioButtonRenderer_getTextStyle(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyle(): ResultType<"tguiRadioButtonRenderer_getTextStyle"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextStyle(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRadioButtonRenderer_setTextStyleChecked(tguiRenderer * thisRenderer, tguiUint32 value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Uint32`
   * @returns `void`
   */
  setTextStyleChecked(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextStyleChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextStyleChecked(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiRadioButtonRenderer_getTextStyleChecked(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Uint32`
   */
  getTextStyleChecked(): ResultType<
    "tguiRadioButtonRenderer_getTextStyleChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextStyleChecked(
      this.pointer,
    );
  }
}

export class RangeSliderRenderer extends SliderRenderer {
  /**
   * @original ```c
   * tguiRenderer * tguiRangeSliderRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor() {
    super(accessLib().symbols.tguiRangeSliderRenderer_create());
  }

  /**
   * @original ```c
   * tguiRenderer * tguiRangeSliderRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiRangeSliderRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setSelectedTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTrackColor(
    value: Color,
  ): ResultType<"tguiRangeSliderRenderer_setSelectedTrackColor"> {
    return accessLib().symbols.tguiRangeSliderRenderer_setSelectedTrackColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiRangeSliderRenderer_getSelectedTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTrackColor(): ResultType<
    "tguiRangeSliderRenderer_getSelectedTrackColor"
  > {
    return accessLib().symbols.tguiRangeSliderRenderer_getSelectedTrackColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setSelectedTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTrackColorHover(
    value: Color,
  ): ResultType<"tguiRangeSliderRenderer_setSelectedTrackColorHover"> {
    return accessLib().symbols
      .tguiRangeSliderRenderer_setSelectedTrackColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiRangeSliderRenderer_getSelectedTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTrackColorHover(): ResultType<
    "tguiRangeSliderRenderer_getSelectedTrackColorHover"
  > {
    return accessLib().symbols
      .tguiRangeSliderRenderer_getSelectedTrackColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setTextureSelectedTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureSelectedTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRangeSliderRenderer_setTextureSelectedTrack"> {
    return accessLib().symbols.tguiRangeSliderRenderer_setTextureSelectedTrack(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRangeSliderRenderer_getTextureSelectedTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureSelectedTrack(): ResultType<
    "tguiRangeSliderRenderer_getTextureSelectedTrack"
  > {
    return accessLib().symbols.tguiRangeSliderRenderer_getTextureSelectedTrack(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiRangeSliderRenderer_setTextureSelectedTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureSelectedTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRangeSliderRenderer_setTextureSelectedTrackHover"> {
    return accessLib().symbols
      .tguiRangeSliderRenderer_setTextureSelectedTrackHover(
        this.pointer,
        value,
      );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiRangeSliderRenderer_getTextureSelectedTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureSelectedTrackHover(): ResultType<
    "tguiRangeSliderRenderer_getTextureSelectedTrackHover"
  > {
    return accessLib().symbols
      .tguiRangeSliderRenderer_getTextureSelectedTrackHover(this.pointer);
  }
}

export class ScrollbarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiScrollbarRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiScrollbarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiScrollbarRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiScrollbarRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTrackColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTrackColor(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setTrackColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTrackColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getTrackColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTrackColor(): ResultType<"tguiScrollbarRenderer_getTrackColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTrackColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTrackColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTrackColorHover(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setTrackColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTrackColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getTrackColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTrackColorHover(): ResultType<"tguiScrollbarRenderer_getTrackColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setThumbColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setThumbColor(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setThumbColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setThumbColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getThumbColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getThumbColor(): ResultType<"tguiScrollbarRenderer_getThumbColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getThumbColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setThumbColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setThumbColorHover(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setThumbColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setThumbColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getThumbColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getThumbColorHover(): ResultType<"tguiScrollbarRenderer_getThumbColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowBackgroundColor(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setArrowBackgroundColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowBackgroundColor(): ResultType<
    "tguiScrollbarRenderer_getArrowBackgroundColor"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setArrowBackgroundColorHover"> {
    return accessLib().symbols
      .tguiScrollbarRenderer_setArrowBackgroundColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowBackgroundColorHover(): ResultType<
    "tguiScrollbarRenderer_getArrowBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiScrollbarRenderer_getArrowBackgroundColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColor(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setArrowColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColor(): ResultType<"tguiScrollbarRenderer_getArrowColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColorHover(
    value: Color,
  ): ResultType<"tguiScrollbarRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiScrollbarRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColorHover(): ResultType<"tguiScrollbarRenderer_getArrowColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureTrack(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureTrack"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureTrack(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTrack(): ResultType<"tguiScrollbarRenderer_getTextureTrack"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureTrack(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureTrackHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureTrackHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureTrackHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTrackHover(): ResultType<
    "tguiScrollbarRenderer_getTextureTrackHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureThumb(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureThumb(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureThumb"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureThumb(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureThumb(): ResultType<"tguiScrollbarRenderer_getTextureThumb"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureThumb(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureThumbHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureThumbHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureThumbHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureThumbHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureThumbHover(): ResultType<
    "tguiScrollbarRenderer_getTextureThumbHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowUp(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowUp"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowUp(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowUp(): ResultType<"tguiScrollbarRenderer_getTextureArrowUp"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowUpHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowUpHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowUpHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowUpHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowUpHover(): ResultType<
    "tguiScrollbarRenderer_getTextureArrowUpHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowDown"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowDown(): ResultType<
    "tguiScrollbarRenderer_getTextureArrowDown"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiScrollbarRenderer_setTextureArrowDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowDownHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiScrollbarRenderer_getTextureArrowDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowDownHover(): ResultType<
    "tguiScrollbarRenderer_getTextureArrowDownHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowDownHover(
      this.pointer,
    );
  }
}

export class SpinButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinButtonRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiSpinButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiSpinButtonRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiSpinButtonRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiSpinButtonRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiSpinButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorderBetweenArrows(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setBorderBetweenArrows(
    value: number,
  ): ResultType<"tguiSpinButtonRenderer_setBorderBetweenArrows"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorderBetweenArrows(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiSpinButtonRenderer_getBorderBetweenArrows(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getBorderBetweenArrows(): ResultType<
    "tguiSpinButtonRenderer_getBorderBetweenArrows"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorderBetweenArrows(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiSpinButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<
    "tguiSpinButtonRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiSpinButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiSpinButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setArrowColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColor(
    value: Color,
  ): ResultType<"tguiSpinButtonRenderer_setArrowColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setArrowColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getArrowColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColor(): ResultType<"tguiSpinButtonRenderer_getArrowColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getArrowColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setArrowColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setArrowColorHover(
    value: Color,
  ): ResultType<"tguiSpinButtonRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setArrowColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getArrowColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getArrowColorHover(): ResultType<
    "tguiSpinButtonRenderer_getArrowColorHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiSpinButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiSpinButtonRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiSpinButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowUp(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowUp"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowUp(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowUp(): ResultType<"tguiSpinButtonRenderer_getTextureArrowUp"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowUpHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowUpHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowUpHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowUpHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowUpHover(): ResultType<
    "tguiSpinButtonRenderer_getTextureArrowUpHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowDown(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowDown"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowDown(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowDown(): ResultType<
    "tguiSpinButtonRenderer_getTextureArrowDown"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiSpinButtonRenderer_setTextureArrowDownHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureArrowDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowDownHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiSpinButtonRenderer_getTextureArrowDownHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureArrowDownHover(): ResultType<
    "tguiSpinButtonRenderer_getTextureArrowDownHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowDownHover(
      this.pointer,
    );
  }
}

export class TabsRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTabsRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTabsRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTabsRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTabsRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setBorders"> {
    return accessLib().symbols.tguiTabsRenderer_setBorders(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiOutline * tguiTabsRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiTabsRenderer_getBorders"> {
    return accessLib().symbols.tguiTabsRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiTabsRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiTabsRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColor(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColor(): ResultType<
    "tguiTabsRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBackgroundColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorDisabled(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBackgroundColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorDisabled(): ResultType<
    "tguiTabsRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiTabsRenderer_setTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiTabsRenderer_getTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiTabsRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<"tguiTabsRenderer_getSelectedTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextColorDisabled(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorDisabled(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColorDisabled(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getTextColorDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorDisabled(): ResultType<"tguiTabsRenderer_getTextColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(value: Color): ResultType<"tguiTabsRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiTabsRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_getBorderColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColorHover(): ResultType<"tguiTabsRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBorderColor(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBorderColor(): ResultType<
    "tguiTabsRenderer_getSelectedBorderColor"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setSelectedBorderColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBorderColorHover(
    value: Color,
  ): ResultType<"tguiTabsRenderer_setSelectedBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBorderColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTabsRenderer_getSelectedBorderColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBorderColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedBorderColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBorderColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureTab(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTab(): ResultType<"tguiTabsRenderer_getTextureTab"> {
    return accessLib().symbols.tguiTabsRenderer_getTextureTab(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureTabHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureTabHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureTabHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureTabHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureTabHover(): ResultType<"tguiTabsRenderer_getTextureTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_getTextureTabHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureSelectedTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureSelectedTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureSelectedTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureSelectedTab(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureSelectedTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureSelectedTab(): ResultType<
    "tguiTabsRenderer_getTextureSelectedTab"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureSelectedTab(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureSelectedTabHover(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureSelectedTabHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureSelectedTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureSelectedTabHover(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureSelectedTabHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureSelectedTabHover(): ResultType<
    "tguiTabsRenderer_getTextureSelectedTabHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureSelectedTabHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setTextureDisabledTab(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureDisabledTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureDisabledTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureDisabledTab(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTabsRenderer_getTextureDisabledTab(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureDisabledTab(): ResultType<
    "tguiTabsRenderer_getTextureDisabledTab"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureDisabledTab(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTabsRenderer_setDistanceToSide(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setDistanceToSide(
    value: number,
  ): ResultType<"tguiTabsRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiTabsRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiTabsRenderer_getDistanceToSide(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getDistanceToSide(): ResultType<"tguiTabsRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiTabsRenderer_getDistanceToSide(this.pointer);
  }
}

export class TextAreaRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTextAreaRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTextAreaRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTextAreaRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTextAreaRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setBorders"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiTextAreaRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiTextAreaRenderer_getBorders"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setPadding"> {
    return accessLib().symbols.tguiTextAreaRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiTextAreaRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiTextAreaRenderer_getPadding"> {
    return accessLib().symbols.tguiTextAreaRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiTextAreaRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiTextAreaRenderer_setTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiTextAreaRenderer_getTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setDefaultTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setDefaultTextColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setDefaultTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getDefaultTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getDefaultTextColor(): ResultType<
    "tguiTextAreaRenderer_getDefaultTextColor"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiTextAreaRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setSelectedTextBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextBackgroundColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setSelectedTextBackgroundColor"> {
    return accessLib().symbols
      .tguiTextAreaRenderer_setSelectedTextBackgroundColor(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getSelectedTextBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextBackgroundColor(): ResultType<
    "tguiTextAreaRenderer_getSelectedTextBackgroundColor"
  > {
    return accessLib().symbols
      .tguiTextAreaRenderer_getSelectedTextBackgroundColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiTextAreaRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setCaretColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setCaretColor(
    value: Color,
  ): ResultType<"tguiTextAreaRenderer_setCaretColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setCaretColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTextAreaRenderer_getCaretColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getCaretColor(): ResultType<"tguiTextAreaRenderer_getCaretColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getCaretColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiTextAreaRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTextAreaRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiTextAreaRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setCaretWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setCaretWidth(
    value: number,
  ): ResultType<"tguiTextAreaRenderer_setCaretWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiTextAreaRenderer_getCaretWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getCaretWidth(): ResultType<"tguiTextAreaRenderer_getCaretWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_getCaretWidth(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setScrollbar"> {
    return accessLib().symbols.tguiTextAreaRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiTextAreaRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiTextAreaRenderer_getScrollbar"> {
    return accessLib().symbols.tguiTextAreaRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTextAreaRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiTextAreaRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiTextAreaRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiTextAreaRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class TreeViewRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTreeViewRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTreeViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiTreeViewRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTreeViewRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBorders(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setBorders"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiTreeViewRenderer_getBorders(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getBorders(): ResultType<"tguiTreeViewRenderer_getBorders"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBorders(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setPadding(tguiRenderer * thisRenderer, const tguiOutline * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Outline *`
   * @returns `void`
   */
  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setPadding"> {
    return accessLib().symbols.tguiTreeViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiOutline * tguiTreeViewRenderer_getPadding(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Outline *`
   */
  getPadding(): ResultType<"tguiTreeViewRenderer_getPadding"> {
    return accessLib().symbols.tguiTreeViewRenderer_getPadding(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColor(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColor(): ResultType<"tguiTreeViewRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBackgroundColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBackgroundColorHover(): ResultType<
    "tguiTreeViewRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedBackgroundColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColor(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedBackgroundColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColor(): ResultType<
    "tguiTreeViewRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedBackgroundColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedBackgroundColorHover(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiTreeViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value.buffer,
      );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedBackgroundColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedBackgroundColorHover(): ResultType<
    "tguiTreeViewRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiTreeViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColor(value: Color): ResultType<"tguiTreeViewRenderer_setTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColor(): ResultType<"tguiTreeViewRenderer_getTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextColor(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setTextColorHover(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getTextColorHover(): ResultType<"tguiTreeViewRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedTextColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColor(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedTextColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedTextColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColor(): ResultType<
    "tguiTreeViewRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setSelectedTextColorHover(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setSelectedTextColorHover(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getSelectedTextColorHover(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getSelectedTextColorHover(): ResultType<
    "tguiTreeViewRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setBorderColor(tguiRenderer * thisRenderer, tguiColor value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   * @returns `void`
   */
  setBorderColor(
    value: Color,
  ): ResultType<"tguiTreeViewRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBorderColor(
      this.pointer,
      value.buffer,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiTreeViewRenderer_getBorderColor(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getBorderColor(): ResultType<"tguiTreeViewRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBorderColor(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBackground(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBackground(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBackground(): ResultType<
    "tguiTreeViewRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBranchExpanded(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBranchExpanded(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBranchExpanded"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBranchExpanded(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBranchExpanded(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBranchExpanded(): ResultType<
    "tguiTreeViewRenderer_getTextureBranchExpanded"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBranchExpanded(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureBranchCollapsed(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureBranchCollapsed(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBranchCollapsed"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBranchCollapsed(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureBranchCollapsed(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureBranchCollapsed(): ResultType<
    "tguiTreeViewRenderer_getTextureBranchCollapsed"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBranchCollapsed(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setTextureLeaf(tguiRenderer * thisRenderer, const tguiTexture * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Texture *`
   * @returns `void`
   */
  setTextureLeaf(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureLeaf"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureLeaf(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiTexture * tguiTreeViewRenderer_getTextureLeaf(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Texture *`
   */
  getTextureLeaf(): ResultType<"tguiTreeViewRenderer_getTextureLeaf"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureLeaf(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setScrollbar(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setScrollbar"> {
    return accessLib().symbols.tguiTreeViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiTreeViewRenderer_getScrollbar(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getScrollbar(): ResultType<"tguiTreeViewRenderer_getScrollbar"> {
    return accessLib().symbols.tguiTreeViewRenderer_getScrollbar(this.pointer);
  }

  /**
   * @original ```c
   * void tguiTreeViewRenderer_setScrollbarWidth(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiTreeViewRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiTreeViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiTreeViewRenderer_getScrollbarWidth(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getScrollbarWidth(): ResultType<"tguiTreeViewRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiTreeViewRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class WidgetRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  /**
   * @original ```c
   * tguiRenderer * tguiWidgetRenderer_create();
   * ```
   *
   * @param
   * @returns `Renderer *`
   */
  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiWidgetRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  /**
   * @original ```c
   * tguiRenderer * tguiWidgetRenderer_copy(const tguiRenderer * other);
   * ```
   *
   * @param other `const Renderer *`
   * @returns `Renderer *`
   */
  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiWidgetRenderer_copy(other);
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setOpacity(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setOpacity(value: number): ResultType<"tguiWidgetRenderer_setOpacity"> {
    return accessLib().symbols.tguiWidgetRenderer_setOpacity(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiWidgetRenderer_getOpacity(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getOpacity(): ResultType<"tguiWidgetRenderer_getOpacity"> {
    return accessLib().symbols.tguiWidgetRenderer_getOpacity(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setOpacityDisabled(tguiRenderer * thisRenderer, float value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `float`
   * @returns `void`
   */
  setOpacityDisabled(
    value: number,
  ): ResultType<"tguiWidgetRenderer_setOpacityDisabled"> {
    return accessLib().symbols.tguiWidgetRenderer_setOpacityDisabled(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * float tguiWidgetRenderer_getOpacityDisabled(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `float`
   */
  getOpacityDisabled(): ResultType<"tguiWidgetRenderer_getOpacityDisabled"> {
    return accessLib().symbols.tguiWidgetRenderer_getOpacityDisabled(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setFont(tguiRenderer * thisRenderer, const tguiFont * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const Font *`
   * @returns `void`
   */
  setFont(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setFont"> {
    return accessLib().symbols.tguiWidgetRenderer_setFont(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiFont * tguiWidgetRenderer_getFont(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const Font *`
   */
  getFont(): ResultType<"tguiWidgetRenderer_getFont"> {
    return accessLib().symbols.tguiWidgetRenderer_getFont(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setTextSize(tguiRenderer * thisRenderer, unsigned int value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `unsigned int`
   * @returns `void`
   */
  setTextSize(value: number): ResultType<"tguiWidgetRenderer_setTextSize"> {
    return accessLib().symbols.tguiWidgetRenderer_setTextSize(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * unsigned int tguiWidgetRenderer_getTextSize(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `unsigned int`
   */
  getTextSize(): ResultType<"tguiWidgetRenderer_getTextSize"> {
    return accessLib().symbols.tguiWidgetRenderer_getTextSize(this.pointer);
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setTransparentTexture(tguiRenderer * thisRenderer, tguiBool value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `Bool`
   * @returns `void`
   */
  setTransparentTexture(
    value: number,
  ): ResultType<"tguiWidgetRenderer_setTransparentTexture"> {
    return accessLib().symbols.tguiWidgetRenderer_setTransparentTexture(
      this.pointer,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_getTransparentTexture(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `Bool`
   */
  getTransparentTexture(): ResultType<
    "tguiWidgetRenderer_getTransparentTexture"
  > {
    return accessLib().symbols.tguiWidgetRenderer_getTransparentTexture(
      this.pointer,
    );
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_setData(tguiRenderer * thisRenderer, const tguiRendererData * value);
   * ```
   *
   * @param thisRenderer `Renderer *`
   * @param value `const RendererData *`
   * @returns `void`
   */
  setData(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setData"> {
    return accessLib().symbols.tguiWidgetRenderer_setData(this.pointer, value);
  }

  /**
   * @original ```c
   * const tguiRendererData * tguiWidgetRenderer_getData(const tguiRenderer * thisRenderer);
   * ```
   *
   * @param thisRenderer `const Renderer *`
   * @returns `const RendererData *`
   */
  getData(): ResultType<"tguiWidgetRenderer_getData"> {
    return accessLib().symbols.tguiWidgetRenderer_getData(this.pointer);
  }

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
  setPropertyBool(
    property: BufferSource,
    value: number,
  ): ResultType<"tguiWidgetRenderer_setPropertyBool"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyBool(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyFont(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setPropertyFont"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyFont(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyColor(
    property: BufferSource,
    value: Color,
  ): ResultType<"tguiWidgetRenderer_setPropertyColor"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyColor(
      this.pointer,
      property,
      value.buffer,
    );
  }

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
  setPropertyString(
    property: BufferSource,
    value: BufferSource,
  ): ResultType<"tguiWidgetRenderer_setPropertyString"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyString(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyNumber(
    property: BufferSource,
    value: number,
  ): ResultType<"tguiWidgetRenderer_setPropertyNumber"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyNumber(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyOutline(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setPropertyOutline"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyOutline(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyTexture(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setPropertyTexture"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyTexture(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyTextStyle(
    property: BufferSource,
    value: number,
  ): ResultType<"tguiWidgetRenderer_setPropertyTextStyle"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyTextStyle(
      this.pointer,
      property,
      value,
    );
  }

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
  setPropertyRendererData(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setPropertyRendererData"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyRendererData(
      this.pointer,
      property,
      value,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_hasProperty(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  hasProperty(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_hasProperty"> {
    return accessLib().symbols.tguiWidgetRenderer_hasProperty(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiBool tguiWidgetRenderer_getPropertyBool(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Bool`
   */
  getPropertyBool(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyBool"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyBool(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiFont * tguiWidgetRenderer_getPropertyFont(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Font *`
   */
  getPropertyFont(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyFont"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyFont(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiColor tguiWidgetRenderer_getPropertyColor(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Color { r: unsigned char; g: unsigned char; b: unsigned char; a: unsigned char; isSet: int }`
   */
  getPropertyColor(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyColor"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyColor(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiUtf32 tguiWidgetRenderer_getPropertyString(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Utf32`
   */
  getPropertyString(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyString"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyString(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * float tguiWidgetRenderer_getPropertyNumber(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `float`
   */
  getPropertyNumber(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyNumber"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyNumber(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiOutline * tguiWidgetRenderer_getPropertyOutline(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Outline *`
   */
  getPropertyOutline(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyOutline"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyOutline(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiTexture * tguiWidgetRenderer_getPropertyTexture(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Texture *`
   */
  getPropertyTexture(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyTexture"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyTexture(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiUint32 tguiWidgetRenderer_getPropertyTextStyle(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `Uint32`
   */
  getPropertyTextStyle(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyTextStyle"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyTextStyle(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * tguiRendererData * tguiWidgetRenderer_getPropertyRendererData(const tguiRenderer * renderer, tguiUtf32 property);
   * ```
   *
   * @param renderer `const Renderer *`
   * @param property `Utf32`
   * @returns `RendererData *`
   */
  getPropertyRendererData(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyRendererData"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyRendererData(
      renderer,
      property,
    );
  }

  /**
   * @original ```c
   * void tguiWidgetRenderer_destroy(tguiRenderer * renderer);
   * ```
   *
   * @param renderer `Renderer *`
   * @returns `void`
   */
  destroy(
    renderer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_destroy"> {
    return accessLib().symbols.tguiWidgetRenderer_destroy(renderer);
  }
}
