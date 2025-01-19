import { accessLib, type ResultType } from "./ctgui.ts";

export class Widget {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiWidget_copy(other);
  }

  destroy(): ResultType<"tguiWidget_destroy"> {
    return accessLib().symbols.tguiWidget_destroy(this.pointer);
  }

  setAutoLayout(layout: number): ResultType<"tguiWidget_setAutoLayout"> {
    return accessLib().symbols.tguiWidget_setAutoLayout(this.pointer, layout);
  }

  getAutoLayout(): ResultType<"tguiWidget_getAutoLayout"> {
    return accessLib().symbols.tguiWidget_getAutoLayout(this.pointer);
  }

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

  signalDisconnectAll(
    signalName: BufferSource,
  ): ResultType<"tguiWidget_signalDisconnectAll"> {
    return accessLib().symbols.tguiWidget_signalDisconnectAll(
      this.pointer,
      signalName,
    );
  }

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

  isSignalEnabled(
    signalName: BufferSource,
  ): ResultType<"tguiWidget_isSignalEnabled"> {
    return accessLib().symbols.tguiWidget_isSignalEnabled(
      this.pointer,
      signalName,
    );
  }

  setRenderer(
    renderer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setRenderer"> {
    return accessLib().symbols.tguiWidget_setRenderer(this.pointer, renderer);
  }

  getRenderer(): ResultType<"tguiWidget_getRenderer"> {
    return accessLib().symbols.tguiWidget_getRenderer(this.pointer);
  }

  getSharedRenderer(): ResultType<"tguiWidget_getSharedRenderer"> {
    return accessLib().symbols.tguiWidget_getSharedRenderer(this.pointer);
  }

  showWithEffect(
    type: number,
    duration: BufferSource,
  ): ResultType<"tguiWidget_showWithEffect"> {
    return accessLib().symbols.tguiWidget_showWithEffect(
      this.pointer,
      type,
      duration,
    );
  }

  hideWithEffect(
    type: number,
    duration: BufferSource,
  ): ResultType<"tguiWidget_hideWithEffect"> {
    return accessLib().symbols.tguiWidget_hideWithEffect(
      this.pointer,
      type,
      duration,
    );
  }

  moveWithAnimation(
    position: BufferSource,
    duration: BufferSource,
  ): ResultType<"tguiWidget_moveWithAnimation"> {
    return accessLib().symbols.tguiWidget_moveWithAnimation(
      this.pointer,
      position,
      duration,
    );
  }

  resizeWithAnimation(
    size: BufferSource,
    duration: BufferSource,
  ): ResultType<"tguiWidget_resizeWithAnimation"> {
    return accessLib().symbols.tguiWidget_resizeWithAnimation(
      this.pointer,
      size,
      duration,
    );
  }

  setToolTip(
    toolTip: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setToolTip"> {
    return accessLib().symbols.tguiWidget_setToolTip(this.pointer, toolTip);
  }

  getToolTip(): ResultType<"tguiWidget_getToolTip"> {
    return accessLib().symbols.tguiWidget_getToolTip(this.pointer);
  }

  getParent(): ResultType<"tguiWidget_getParent"> {
    return accessLib().symbols.tguiWidget_getParent(this.pointer);
  }

  updateTime(duration: BufferSource): ResultType<"tguiWidget_updateTime"> {
    return accessLib().symbols.tguiWidget_updateTime(this.pointer, duration);
  }

  setPosition(position: BufferSource): ResultType<"tguiWidget_setPosition"> {
    return accessLib().symbols.tguiWidget_setPosition(this.pointer, position);
  }

  setPositionFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setPositionFromLayout"> {
    return accessLib().symbols.tguiWidget_setPositionFromLayout(
      this.pointer,
      layout,
    );
  }

  getPosition(): ResultType<"tguiWidget_getPosition"> {
    return accessLib().symbols.tguiWidget_getPosition(this.pointer);
  }

  getAbsolutePosition(): ResultType<"tguiWidget_getAbsolutePosition"> {
    return accessLib().symbols.tguiWidget_getAbsolutePosition(this.pointer);
  }

  getAbsolutePositionWithOffset(
    offset: BufferSource,
  ): ResultType<"tguiWidget_getAbsolutePositionWithOffset"> {
    return accessLib().symbols.tguiWidget_getAbsolutePositionWithOffset(
      this.pointer,
      offset,
    );
  }

  getWidgetOffset(): ResultType<"tguiWidget_getWidgetOffset"> {
    return accessLib().symbols.tguiWidget_getWidgetOffset(this.pointer);
  }

  setWidth(width: number): ResultType<"tguiWidget_setWidth"> {
    return accessLib().symbols.tguiWidget_setWidth(this.pointer, width);
  }

  setWidthFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setWidthFromLayout"> {
    return accessLib().symbols.tguiWidget_setWidthFromLayout(
      this.pointer,
      layout,
    );
  }

  setHeight(height: number): ResultType<"tguiWidget_setHeight"> {
    return accessLib().symbols.tguiWidget_setHeight(this.pointer, height);
  }

  setHeightFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setHeightFromLayout"> {
    return accessLib().symbols.tguiWidget_setHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  setSize(size: BufferSource): ResultType<"tguiWidget_setSize"> {
    return accessLib().symbols.tguiWidget_setSize(this.pointer, size);
  }

  setSizeFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setSizeFromLayout"> {
    return accessLib().symbols.tguiWidget_setSizeFromLayout(
      this.pointer,
      layout,
    );
  }

  getSize(): ResultType<"tguiWidget_getSize"> {
    return accessLib().symbols.tguiWidget_getSize(this.pointer);
  }

  getFullSize(): ResultType<"tguiWidget_getFullSize"> {
    return accessLib().symbols.tguiWidget_getFullSize(this.pointer);
  }

  setOrigin(value: BufferSource): ResultType<"tguiWidget_setOrigin"> {
    return accessLib().symbols.tguiWidget_setOrigin(this.pointer, value);
  }

  getOrigin(): ResultType<"tguiWidget_getOrigin"> {
    return accessLib().symbols.tguiWidget_getOrigin(this.pointer);
  }

  setScale(origin: BufferSource): ResultType<"tguiWidget_setScale"> {
    return accessLib().symbols.tguiWidget_setScale(this.pointer, origin);
  }

  setScaleWithOrigin(
    scale: BufferSource,
    origin: BufferSource,
  ): ResultType<"tguiWidget_setScaleWithOrigin"> {
    return accessLib().symbols.tguiWidget_setScaleWithOrigin(
      this.pointer,
      scale,
      origin,
    );
  }

  getScale(): ResultType<"tguiWidget_getScale"> {
    return accessLib().symbols.tguiWidget_getScale(this.pointer);
  }

  getScaleOrigin(): ResultType<"tguiWidget_getScaleOrigin"> {
    return accessLib().symbols.tguiWidget_getScaleOrigin(this.pointer);
  }

  setRotation(angle: number): ResultType<"tguiWidget_setRotation"> {
    return accessLib().symbols.tguiWidget_setRotation(this.pointer, angle);
  }

  setRotationWithOrigin(
    angle: number,
    origin: BufferSource,
  ): ResultType<"tguiWidget_setRotationWithOrigin"> {
    return accessLib().symbols.tguiWidget_setRotationWithOrigin(
      this.pointer,
      angle,
      origin,
    );
  }

  getRotation(): ResultType<"tguiWidget_getRotation"> {
    return accessLib().symbols.tguiWidget_getRotation(this.pointer);
  }

  getRotationOrigin(): ResultType<"tguiWidget_getRotationOrigin"> {
    return accessLib().symbols.tguiWidget_getRotationOrigin(this.pointer);
  }

  setVisible(value: number): ResultType<"tguiWidget_setVisible"> {
    return accessLib().symbols.tguiWidget_setVisible(this.pointer, value);
  }

  isVisible(): ResultType<"tguiWidget_isVisible"> {
    return accessLib().symbols.tguiWidget_isVisible(this.pointer);
  }

  setEnabled(value: number): ResultType<"tguiWidget_setEnabled"> {
    return accessLib().symbols.tguiWidget_setEnabled(this.pointer, value);
  }

  isEnabled(): ResultType<"tguiWidget_isEnabled"> {
    return accessLib().symbols.tguiWidget_isEnabled(this.pointer);
  }

  setFocused(value: number): ResultType<"tguiWidget_setFocused"> {
    return accessLib().symbols.tguiWidget_setFocused(this.pointer, value);
  }

  isFocused(): ResultType<"tguiWidget_isFocused"> {
    return accessLib().symbols.tguiWidget_isFocused(this.pointer);
  }

  setFocusable(value: number): ResultType<"tguiWidget_setFocusable"> {
    return accessLib().symbols.tguiWidget_setFocusable(this.pointer, value);
  }

  isFocusable(): ResultType<"tguiWidget_isFocusable"> {
    return accessLib().symbols.tguiWidget_isFocusable(this.pointer);
  }

  getWidgetType(): ResultType<"tguiWidget_getWidgetType"> {
    return accessLib().symbols.tguiWidget_getWidgetType(this.pointer);
  }

  moveToFront(): ResultType<"tguiWidget_moveToFront"> {
    return accessLib().symbols.tguiWidget_moveToFront(this.pointer);
  }

  moveToBack(): ResultType<"tguiWidget_moveToBack"> {
    return accessLib().symbols.tguiWidget_moveToBack(this.pointer);
  }

  setUserData(value: BufferSource): ResultType<"tguiWidget_setUserData"> {
    return accessLib().symbols.tguiWidget_setUserData(this.pointer, value);
  }

  getUserData(): ResultType<"tguiWidget_getUserData"> {
    return accessLib().symbols.tguiWidget_getUserData(this.pointer);
  }

  hasUserData(): ResultType<"tguiWidget_hasUserData"> {
    return accessLib().symbols.tguiWidget_hasUserData(this.pointer);
  }

  isAnimationPlaying(): ResultType<"tguiWidget_isAnimationPlaying"> {
    return accessLib().symbols.tguiWidget_isAnimationPlaying(this.pointer);
  }

  setTextSize(value: number): ResultType<"tguiWidget_setTextSize"> {
    return accessLib().symbols.tguiWidget_setTextSize(this.pointer, value);
  }

  getTextSize(): ResultType<"tguiWidget_getTextSize"> {
    return accessLib().symbols.tguiWidget_getTextSize(this.pointer);
  }

  setWidgetName(value: BufferSource): ResultType<"tguiWidget_setWidgetName"> {
    return accessLib().symbols.tguiWidget_setWidgetName(this.pointer, value);
  }

  getWidgetName(): ResultType<"tguiWidget_getWidgetName"> {
    return accessLib().symbols.tguiWidget_getWidgetName(this.pointer);
  }

  setMouseCursor(value: number): ResultType<"tguiWidget_setMouseCursor"> {
    return accessLib().symbols.tguiWidget_setMouseCursor(this.pointer, value);
  }

  getMouseCursor(): ResultType<"tguiWidget_getMouseCursor"> {
    return accessLib().symbols.tguiWidget_getMouseCursor(this.pointer);
  }

  setNavigationUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationUp"> {
    return accessLib().symbols.tguiWidget_setNavigationUp(this.pointer, value);
  }

  getNavigationUp(): ResultType<"tguiWidget_getNavigationUp"> {
    return accessLib().symbols.tguiWidget_getNavigationUp(this.pointer);
  }

  setNavigationDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationDown"> {
    return accessLib().symbols.tguiWidget_setNavigationDown(
      this.pointer,
      value,
    );
  }

  getNavigationDown(): ResultType<"tguiWidget_getNavigationDown"> {
    return accessLib().symbols.tguiWidget_getNavigationDown(this.pointer);
  }

  setNavigationLeft(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationLeft"> {
    return accessLib().symbols.tguiWidget_setNavigationLeft(
      this.pointer,
      value,
    );
  }

  getNavigationLeft(): ResultType<"tguiWidget_getNavigationLeft"> {
    return accessLib().symbols.tguiWidget_getNavigationLeft(this.pointer);
  }

  setNavigationRight(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidget_setNavigationRight"> {
    return accessLib().symbols.tguiWidget_setNavigationRight(
      this.pointer,
      value,
    );
  }

  getNavigationRight(): ResultType<"tguiWidget_getNavigationRight"> {
    return accessLib().symbols.tguiWidget_getNavigationRight(this.pointer);
  }

  setIgnoreMouseEvents(
    value: number,
  ): ResultType<"tguiWidget_setIgnoreMouseEvents"> {
    return accessLib().symbols.tguiWidget_setIgnoreMouseEvents(
      this.pointer,
      value,
    );
  }

  getIgnoreMouseEvents(): ResultType<"tguiWidget_getIgnoreMouseEvents"> {
    return accessLib().symbols.tguiWidget_getIgnoreMouseEvents(this.pointer);
  }

  finishAllAnimations(): ResultType<"tguiWidget_finishAllAnimations"> {
    return accessLib().symbols.tguiWidget_finishAllAnimations(this.pointer);
  }

  setAutoLayoutUpdateEnabled(
    enabled: number,
  ): ResultType<"tguiWidget_setAutoLayoutUpdateEnabled"> {
    return accessLib().symbols.tguiWidget_setAutoLayoutUpdateEnabled(
      this.pointer,
      enabled,
    );
  }

  isMouseDown(): ResultType<"tguiWidget_isMouseDown"> {
    return accessLib().symbols.tguiWidget_isMouseDown(this.pointer);
  }

  isMouseOnWidget(pos: BufferSource): ResultType<"tguiWidget_isMouseOnWidget"> {
    return accessLib().symbols.tguiWidget_isMouseOnWidget(this.pointer, pos);
  }
}

export class ClickableWidget extends Widget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiClickableWidget_create());
  }
}

export class Container extends Widget {
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

  saveWidgetsToFile(
    container: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiContainer_saveWidgetsToFile"> {
    return accessLib().symbols.tguiContainer_saveWidgetsToFile(
      container,
      filename,
    );
  }

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

  get(widgetName: BufferSource): ResultType<"tguiContainer_get"> {
    return accessLib().symbols.tguiContainer_get(this.pointer, widgetName);
  }

  getWidgets(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_getWidgets"> {
    return accessLib().symbols.tguiContainer_getWidgets(
      this.pointer,
      returnCount,
    );
  }

  remove(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_remove"> {
    return accessLib().symbols.tguiContainer_remove(this.pointer, widget);
  }

  removeAllWidgets(): ResultType<"tguiContainer_removeAllWidgets"> {
    return accessLib().symbols.tguiContainer_removeAllWidgets(this.pointer);
  }

  moveWidgetToFront(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetToFront"> {
    return accessLib().symbols.tguiContainer_moveWidgetToFront(
      this.pointer,
      widget,
    );
  }

  moveWidgetToBack(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetToBack"> {
    return accessLib().symbols.tguiContainer_moveWidgetToBack(
      this.pointer,
      widget,
    );
  }

  moveWidgetForward(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetForward"> {
    return accessLib().symbols.tguiContainer_moveWidgetForward(
      this.pointer,
      widget,
    );
  }

  moveWidgetBackward(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_moveWidgetBackward"> {
    return accessLib().symbols.tguiContainer_moveWidgetBackward(
      this.pointer,
      widget,
    );
  }

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

  getWidgetIndex(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiContainer_getWidgetIndex"> {
    return accessLib().symbols.tguiContainer_getWidgetIndex(
      this.pointer,
      widget,
    );
  }

  getFocusedChild(): ResultType<"tguiContainer_getFocusedChild"> {
    return accessLib().symbols.tguiContainer_getFocusedChild(this.pointer);
  }

  getFocusedLeaf(): ResultType<"tguiContainer_getFocusedLeaf"> {
    return accessLib().symbols.tguiContainer_getFocusedLeaf(this.pointer);
  }

  getWidgetAtPos(
    pos: BufferSource,
    recursive: number,
  ): ResultType<"tguiContainer_getWidgetAtPos"> {
    return accessLib().symbols.tguiContainer_getWidgetAtPos(
      this.pointer,
      pos,
      recursive,
    );
  }

  focusNextWidget(
    recursive: number,
  ): ResultType<"tguiContainer_focusNextWidget"> {
    return accessLib().symbols.tguiContainer_focusNextWidget(
      this.pointer,
      recursive,
    );
  }

  focusPreviousWidget(
    recursive: number,
  ): ResultType<"tguiContainer_focusPreviousWidget"> {
    return accessLib().symbols.tguiContainer_focusPreviousWidget(
      this.pointer,
      recursive,
    );
  }

  getInnerSize(): ResultType<"tguiContainer_getInnerSize"> {
    return accessLib().symbols.tguiContainer_getInnerSize(this.pointer);
  }

  getChildWidgetsOffset(): ResultType<"tguiContainer_getChildWidgetsOffset"> {
    return accessLib().symbols.tguiContainer_getChildWidgetsOffset(
      this.pointer,
    );
  }
}

export class ChildWindow extends Container {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiChildWindow_create());
  }

  setClientSize(
    size: BufferSource,
  ): ResultType<"tguiChildWindow_setClientSize"> {
    return accessLib().symbols.tguiChildWindow_setClientSize(
      this.pointer,
      size,
    );
  }

  setClientSizeFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindow_setClientSizeFromLayout"> {
    return accessLib().symbols.tguiChildWindow_setClientSizeFromLayout(
      this.pointer,
      layout,
    );
  }

  getClientSize(): ResultType<"tguiChildWindow_getClientSize"> {
    return accessLib().symbols.tguiChildWindow_getClientSize(this.pointer);
  }

  setMaximumSize(
    value: BufferSource,
  ): ResultType<"tguiChildWindow_setMaximumSize"> {
    return accessLib().symbols.tguiChildWindow_setMaximumSize(
      this.pointer,
      value,
    );
  }

  getMaximumSize(): ResultType<"tguiChildWindow_getMaximumSize"> {
    return accessLib().symbols.tguiChildWindow_getMaximumSize(this.pointer);
  }

  setMinimumSize(
    value: BufferSource,
  ): ResultType<"tguiChildWindow_setMinimumSize"> {
    return accessLib().symbols.tguiChildWindow_setMinimumSize(
      this.pointer,
      value,
    );
  }

  getMinimumSize(): ResultType<"tguiChildWindow_getMinimumSize"> {
    return accessLib().symbols.tguiChildWindow_getMinimumSize(this.pointer);
  }

  setTitle(value: BufferSource): ResultType<"tguiChildWindow_setTitle"> {
    return accessLib().symbols.tguiChildWindow_setTitle(this.pointer, value);
  }

  getTitle(): ResultType<"tguiChildWindow_getTitle"> {
    return accessLib().symbols.tguiChildWindow_getTitle(this.pointer);
  }

  setTitleTextSize(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleTextSize"> {
    return accessLib().symbols.tguiChildWindow_setTitleTextSize(
      this.pointer,
      value,
    );
  }

  getTitleTextSize(): ResultType<"tguiChildWindow_getTitleTextSize"> {
    return accessLib().symbols.tguiChildWindow_getTitleTextSize(this.pointer);
  }

  setTitleAlignment(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleAlignment"> {
    return accessLib().symbols.tguiChildWindow_setTitleAlignment(
      this.pointer,
      value,
    );
  }

  getTitleAlignment(): ResultType<"tguiChildWindow_getTitleAlignment"> {
    return accessLib().symbols.tguiChildWindow_getTitleAlignment(this.pointer);
  }

  setTitleButtons(
    value: number,
  ): ResultType<"tguiChildWindow_setTitleButtons"> {
    return accessLib().symbols.tguiChildWindow_setTitleButtons(
      this.pointer,
      value,
    );
  }

  getTitleButtons(): ResultType<"tguiChildWindow_getTitleButtons"> {
    return accessLib().symbols.tguiChildWindow_getTitleButtons(this.pointer);
  }

  setCloseBehavior(
    value: number,
  ): ResultType<"tguiChildWindow_setCloseBehavior"> {
    return accessLib().symbols.tguiChildWindow_setCloseBehavior(
      this.pointer,
      value,
    );
  }

  getCloseBehavior(): ResultType<"tguiChildWindow_getCloseBehavior"> {
    return accessLib().symbols.tguiChildWindow_getCloseBehavior(this.pointer);
  }

  setResizable(value: number): ResultType<"tguiChildWindow_setResizable"> {
    return accessLib().symbols.tguiChildWindow_setResizable(
      this.pointer,
      value,
    );
  }

  isResizable(): ResultType<"tguiChildWindow_isResizable"> {
    return accessLib().symbols.tguiChildWindow_isResizable(this.pointer);
  }

  setKeepInParent(
    value: number,
  ): ResultType<"tguiChildWindow_setKeepInParent"> {
    return accessLib().symbols.tguiChildWindow_setKeepInParent(
      this.pointer,
      value,
    );
  }

  getKeepInParent(): ResultType<"tguiChildWindow_getKeepInParent"> {
    return accessLib().symbols.tguiChildWindow_getKeepInParent(this.pointer);
  }

  setPositionLocked(
    value: number,
  ): ResultType<"tguiChildWindow_setPositionLocked"> {
    return accessLib().symbols.tguiChildWindow_setPositionLocked(
      this.pointer,
      value,
    );
  }

  isPositionLocked(): ResultType<"tguiChildWindow_isPositionLocked"> {
    return accessLib().symbols.tguiChildWindow_isPositionLocked(this.pointer);
  }
}

export class Group extends Container {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiGroup_create());
  }
}

export class ChildWindowRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiChildWindowRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiChildWindowRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setBorders"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiChildWindowRenderer_getBorders"> {
    return accessLib().symbols.tguiChildWindowRenderer_getBorders(this.pointer);
  }

  setTitleBarColor(
    value: BufferSource,
  ): ResultType<"tguiChildWindowRenderer_setTitleBarColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleBarColor(
      this.pointer,
      value,
    );
  }

  getTitleBarColor(): ResultType<"tguiChildWindowRenderer_getTitleBarColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleBarColor(
      this.pointer,
    );
  }

  setTitleColor(
    value: BufferSource,
  ): ResultType<"tguiChildWindowRenderer_setTitleColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleColor(
      this.pointer,
      value,
    );
  }

  getTitleColor(): ResultType<"tguiChildWindowRenderer_getTitleColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleColor(
      this.pointer,
    );
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiChildWindowRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<
    "tguiChildWindowRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiChildWindowRenderer_setBorderColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiChildWindowRenderer_getBorderColor"> {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderColor(
      this.pointer,
    );
  }

  setBorderColorFocused(
    value: BufferSource,
  ): ResultType<"tguiChildWindowRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused(): ResultType<
    "tguiChildWindowRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderBelowTitleBar(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setBorderBelowTitleBar"> {
    return accessLib().symbols.tguiChildWindowRenderer_setBorderBelowTitleBar(
      this.pointer,
      value,
    );
  }

  getBorderBelowTitleBar(): ResultType<
    "tguiChildWindowRenderer_getBorderBelowTitleBar"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getBorderBelowTitleBar(
      this.pointer,
    );
  }

  setTitleBarHeight(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setTitleBarHeight"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTitleBarHeight(
      this.pointer,
      value,
    );
  }

  getTitleBarHeight(): ResultType<"tguiChildWindowRenderer_getTitleBarHeight"> {
    return accessLib().symbols.tguiChildWindowRenderer_getTitleBarHeight(
      this.pointer,
    );
  }

  setDistanceToSide(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiChildWindowRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide(): ResultType<"tguiChildWindowRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiChildWindowRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  setPaddingBetweenButtons(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setPaddingBetweenButtons"> {
    return accessLib().symbols.tguiChildWindowRenderer_setPaddingBetweenButtons(
      this.pointer,
      value,
    );
  }

  getPaddingBetweenButtons(): ResultType<
    "tguiChildWindowRenderer_getPaddingBetweenButtons"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getPaddingBetweenButtons(
      this.pointer,
    );
  }

  setMinimumResizableBorderWidth(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setMinimumResizableBorderWidth"> {
    return accessLib().symbols
      .tguiChildWindowRenderer_setMinimumResizableBorderWidth(
        this.pointer,
        value,
      );
  }

  getMinimumResizableBorderWidth(): ResultType<
    "tguiChildWindowRenderer_getMinimumResizableBorderWidth"
  > {
    return accessLib().symbols
      .tguiChildWindowRenderer_getMinimumResizableBorderWidth(this.pointer);
  }

  setShowTextOnTitleButtons(
    value: number,
  ): ResultType<"tguiChildWindowRenderer_setShowTextOnTitleButtons"> {
    return accessLib().symbols
      .tguiChildWindowRenderer_setShowTextOnTitleButtons(this.pointer, value);
  }

  getShowTextOnTitleButtons(): ResultType<
    "tguiChildWindowRenderer_getShowTextOnTitleButtons"
  > {
    return accessLib().symbols
      .tguiChildWindowRenderer_getShowTextOnTitleButtons(this.pointer);
  }

  setTextureTitleBar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setTextureTitleBar"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTextureTitleBar(
      this.pointer,
      value,
    );
  }

  getTextureTitleBar(): ResultType<
    "tguiChildWindowRenderer_getTextureTitleBar"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getTextureTitleBar(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiChildWindowRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiChildWindowRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiChildWindowRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setCloseButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setCloseButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setCloseButton(
      this.pointer,
      value,
    );
  }

  getCloseButton(): ResultType<"tguiChildWindowRenderer_getCloseButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_getCloseButton(
      this.pointer,
    );
  }

  setMaximizeButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setMaximizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setMaximizeButton(
      this.pointer,
      value,
    );
  }

  getMaximizeButton(): ResultType<"tguiChildWindowRenderer_getMaximizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_getMaximizeButton(
      this.pointer,
    );
  }

  setMinimizeButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChildWindowRenderer_setMinimizeButton"> {
    return accessLib().symbols.tguiChildWindowRenderer_setMinimizeButton(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiGroupRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiGroupRenderer_copy(other);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGroupRenderer_setPadding"> {
    return accessLib().symbols.tguiGroupRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiGroupRenderer_getPadding"> {
    return accessLib().symbols.tguiGroupRenderer_getPadding(this.pointer);
  }
}

export class BoxLayout extends Group {
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

  removeAtIndex(index: bigint): ResultType<"tguiBoxLayout_removeAtIndex"> {
    return accessLib().symbols.tguiBoxLayout_removeAtIndex(this.pointer, index);
  }

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

  addSpace(ratio: number): ResultType<"tguiBoxLayoutRatios_addSpace"> {
    return accessLib().symbols.tguiBoxLayoutRatios_addSpace(
      this.pointer,
      ratio,
    );
  }

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

  getRatio(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBoxLayoutRatios_getRatio"> {
    return accessLib().symbols.tguiBoxLayoutRatios_getRatio(
      this.pointer,
      widget,
    );
  }

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
  setText(value: BufferSource): ResultType<"tguiButtonBase_setText"> {
    return accessLib().symbols.tguiButtonBase_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiButtonBase_getText"> {
    return accessLib().symbols.tguiButtonBase_getText(this.pointer);
  }

  setIgnoreKeyEvents(
    value: number,
  ): ResultType<"tguiButtonBase_setIgnoreKeyEvents"> {
    return accessLib().symbols.tguiButtonBase_setIgnoreKeyEvents(
      this.pointer,
      value,
    );
  }

  getIgnoreKeyEvents(): ResultType<"tguiButtonBase_getIgnoreKeyEvents"> {
    return accessLib().symbols.tguiButtonBase_getIgnoreKeyEvents(this.pointer);
  }

  setTextPositionAbs(
    widget: Deno.PointerValue<unknown>,
    position: BufferSource,
    origin: BufferSource,
  ): ResultType<"tguiButtonBase_setTextPositionAbs"> {
    return accessLib().symbols.tguiButtonBase_setTextPositionAbs(
      widget,
      position,
      origin,
    );
  }

  setTextPositionRel(
    widget: Deno.PointerValue<unknown>,
    position: BufferSource,
    origin: BufferSource,
  ): ResultType<"tguiButtonBase_setTextPositionRel"> {
    return accessLib().symbols.tguiButtonBase_setTextPositionRel(
      widget,
      position,
      origin,
    );
  }
}

export class Button extends ButtonBase {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiButton_create());
  }
}

export class Label extends ClickableWidget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiLabel_create());
  }

  setText(value: BufferSource): ResultType<"tguiLabel_setText"> {
    return accessLib().symbols.tguiLabel_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiLabel_getText"> {
    return accessLib().symbols.tguiLabel_getText(this.pointer);
  }

  setHorizontalAlignment(
    value: number,
  ): ResultType<"tguiLabel_setHorizontalAlignment"> {
    return accessLib().symbols.tguiLabel_setHorizontalAlignment(
      this.pointer,
      value,
    );
  }

  getHorizontalAlignment(): ResultType<"tguiLabel_getHorizontalAlignment"> {
    return accessLib().symbols.tguiLabel_getHorizontalAlignment(this.pointer);
  }

  setVerticalAlignment(
    value: number,
  ): ResultType<"tguiLabel_setVerticalAlignment"> {
    return accessLib().symbols.tguiLabel_setVerticalAlignment(
      this.pointer,
      value,
    );
  }

  getVerticalAlignment(): ResultType<"tguiLabel_getVerticalAlignment"> {
    return accessLib().symbols.tguiLabel_getVerticalAlignment(this.pointer);
  }

  setAutoSize(value: number): ResultType<"tguiLabel_setAutoSize"> {
    return accessLib().symbols.tguiLabel_setAutoSize(this.pointer, value);
  }

  getAutoSize(): ResultType<"tguiLabel_getAutoSize"> {
    return accessLib().symbols.tguiLabel_getAutoSize(this.pointer);
  }

  setMaximumTextWidth(
    value: number,
  ): ResultType<"tguiLabel_setMaximumTextWidth"> {
    return accessLib().symbols.tguiLabel_setMaximumTextWidth(
      this.pointer,
      value,
    );
  }

  getMaximumTextWidth(): ResultType<"tguiLabel_getMaximumTextWidth"> {
    return accessLib().symbols.tguiLabel_getMaximumTextWidth(this.pointer);
  }
}

export class Panel extends Group {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiPanel_create());
  }

  setEventBubbling(
    useEventBubbling: number,
  ): ResultType<"tguiPanel_setEventBubbling"> {
    return accessLib().symbols.tguiPanel_setEventBubbling(useEventBubbling);
  }

  getEventBubbling(): ResultType<"tguiPanel_getEventBubbling"> {
    return accessLib().symbols.tguiPanel_getEventBubbling();
  }
}

export class RadioButton extends ClickableWidget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiRadioButton_create());
  }

  setChecked(value: number): ResultType<"tguiRadioButton_setChecked"> {
    return accessLib().symbols.tguiRadioButton_setChecked(this.pointer, value);
  }

  isChecked(): ResultType<"tguiRadioButton_isChecked"> {
    return accessLib().symbols.tguiRadioButton_isChecked(this.pointer);
  }

  setText(value: BufferSource): ResultType<"tguiRadioButton_setText"> {
    return accessLib().symbols.tguiRadioButton_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiRadioButton_getText"> {
    return accessLib().symbols.tguiRadioButton_getText(this.pointer);
  }

  setTextClickable(
    value: number,
  ): ResultType<"tguiRadioButton_setTextClickable"> {
    return accessLib().symbols.tguiRadioButton_setTextClickable(
      this.pointer,
      value,
    );
  }

  isTextClickable(): ResultType<"tguiRadioButton_isTextClickable"> {
    return accessLib().symbols.tguiRadioButton_isTextClickable(this.pointer);
  }
}

export class ScrollablePanel extends Panel {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiScrollablePanel_create());
  }

  setContentSize(
    value: BufferSource,
  ): ResultType<"tguiScrollablePanel_setContentSize"> {
    return accessLib().symbols.tguiScrollablePanel_setContentSize(
      this.pointer,
      value,
    );
  }

  getContentSize(): ResultType<"tguiScrollablePanel_getContentSize"> {
    return accessLib().symbols.tguiScrollablePanel_getContentSize(this.pointer);
  }

  getContentOffset(): ResultType<"tguiScrollablePanel_getContentOffset"> {
    return accessLib().symbols.tguiScrollablePanel_getContentOffset(
      this.pointer,
    );
  }
}

export class PanelRenderer extends GroupRenderer {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiPanelRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiPanelRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPanelRenderer_setBorders"> {
    return accessLib().symbols.tguiPanelRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiPanelRenderer_getBorders"> {
    return accessLib().symbols.tguiPanelRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiPanelRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiPanelRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiPanelRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiPanelRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiPanelRenderer_setBorderColor"> {
    return accessLib().symbols.tguiPanelRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiPanelRenderer_getBorderColor"> {
    return accessLib().symbols.tguiPanelRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPanelRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiPanelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<"tguiPanelRenderer_getTextureBackground"> {
    return accessLib().symbols.tguiPanelRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setRoundedBorderRadius(
    value: number,
  ): ResultType<"tguiPanelRenderer_setRoundedBorderRadius"> {
    return accessLib().symbols.tguiPanelRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

  getRoundedBorderRadius(): ResultType<
    "tguiPanelRenderer_getRoundedBorderRadius"
  > {
    return accessLib().symbols.tguiPanelRenderer_getRoundedBorderRadius(
      this.pointer,
    );
  }
}

export class ScrollablePanelRenderer extends PanelRenderer {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : accessLib().symbols.tguiScrollablePanelRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiScrollablePanelRenderer_copy(
      other,
    );
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollablePanelRenderer_setScrollbar"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiScrollablePanelRenderer_getScrollbar"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_getScrollbar(
      this.pointer,
    );
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiScrollablePanelRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiScrollablePanelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiSliderRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiSliderRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setBorders"> {
    return accessLib().symbols.tguiSliderRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiSliderRenderer_getBorders"> {
    return accessLib().symbols.tguiSliderRenderer_getBorders(this.pointer);
  }

  setTrackColor(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setTrackColor"> {
    return accessLib().symbols.tguiSliderRenderer_setTrackColor(
      this.pointer,
      value,
    );
  }

  getTrackColor(): ResultType<"tguiSliderRenderer_getTrackColor"> {
    return accessLib().symbols.tguiSliderRenderer_getTrackColor(this.pointer);
  }

  setTrackColorHover(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setTrackColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTrackColorHover(
      this.pointer,
      value,
    );
  }

  getTrackColorHover(): ResultType<"tguiSliderRenderer_getTrackColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  setThumbColor(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setThumbColor"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor(): ResultType<"tguiSliderRenderer_getThumbColor"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbColor(this.pointer);
  }

  setThumbColorHover(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setThumbColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbColorHover(
      this.pointer,
      value,
    );
  }

  getThumbColorHover(): ResultType<"tguiSliderRenderer_getThumbColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setBorderColor"> {
    return accessLib().symbols.tguiSliderRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiSliderRenderer_getBorderColor"> {
    return accessLib().symbols.tguiSliderRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiSliderRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover(): ResultType<"tguiSliderRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiSliderRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setTextureTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureTrack"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  getTextureTrack(): ResultType<"tguiSliderRenderer_getTextureTrack"> {
    return accessLib().symbols.tguiSliderRenderer_getTextureTrack(this.pointer);
  }

  setTextureTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureTrackHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  getTextureTrackHover(): ResultType<
    "tguiSliderRenderer_getTextureTrackHover"
  > {
    return accessLib().symbols.tguiSliderRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  setTextureThumb(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureThumb"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  getTextureThumb(): ResultType<"tguiSliderRenderer_getTextureThumb"> {
    return accessLib().symbols.tguiSliderRenderer_getTextureThumb(this.pointer);
  }

  setTextureThumbHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSliderRenderer_setTextureThumbHover"> {
    return accessLib().symbols.tguiSliderRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  getTextureThumbHover(): ResultType<
    "tguiSliderRenderer_getTextureThumbHover"
  > {
    return accessLib().symbols.tguiSliderRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  setThumbWithinTrack(
    value: number,
  ): ResultType<"tguiSliderRenderer_setThumbWithinTrack"> {
    return accessLib().symbols.tguiSliderRenderer_setThumbWithinTrack(
      this.pointer,
      value,
    );
  }

  getThumbWithinTrack(): ResultType<"tguiSliderRenderer_getThumbWithinTrack"> {
    return accessLib().symbols.tguiSliderRenderer_getThumbWithinTrack(
      this.pointer,
    );
  }
}

export class sfColor {
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
}

export class Color {
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

  createNull(): ResultType<"tguiColor_createNull"> {
    return accessLib().symbols.tguiColor_createNull();
  }

  fromRGB(
    red: number,
    green: number,
    blue: number,
  ): ResultType<"tguiColor_fromRGB"> {
    return accessLib().symbols.tguiColor_fromRGB(red, green, blue);
  }

  fromRGBA(
    red: number,
    green: number,
    blue: number,
    alpha: number,
  ): ResultType<"tguiColor_fromRGBA"> {
    return accessLib().symbols.tguiColor_fromRGBA(red, green, blue, alpha);
  }

  fromString(string: BufferSource): ResultType<"tguiColor_fromString"> {
    return accessLib().symbols.tguiColor_fromString(string);
  }
}

export class Duration {
  nanoseconds: bigint;

  constructor(nanoseconds: bigint) {
    this.nanoseconds = nanoseconds;
  }

  fromSeconds(amount: number): ResultType<"tguiDuration_fromSeconds"> {
    return accessLib().symbols.tguiDuration_fromSeconds(amount);
  }

  fromMilliseconds(
    amount: number,
  ): ResultType<"tguiDuration_fromMilliseconds"> {
    return accessLib().symbols.tguiDuration_fromMilliseconds(amount);
  }

  fromMicroseconds(
    amount: bigint,
  ): ResultType<"tguiDuration_fromMicroseconds"> {
    return accessLib().symbols.tguiDuration_fromMicroseconds(amount);
  }

  fromNanoseconds(amount: bigint): ResultType<"tguiDuration_fromNanoseconds"> {
    return accessLib().symbols.tguiDuration_fromNanoseconds(amount);
  }

  asSeconds(duration: BufferSource): ResultType<"tguiDuration_asSeconds"> {
    return accessLib().symbols.tguiDuration_asSeconds(duration);
  }

  asMilliseconds(
    duration: BufferSource,
  ): ResultType<"tguiDuration_asMilliseconds"> {
    return accessLib().symbols.tguiDuration_asMilliseconds(duration);
  }

  asMicroseconds(
    duration: BufferSource,
  ): ResultType<"tguiDuration_asMicroseconds"> {
    return accessLib().symbols.tguiDuration_asMicroseconds(duration);
  }

  asNanoseconds(
    duration: BufferSource,
  ): ResultType<"tguiDuration_asNanoseconds"> {
    return accessLib().symbols.tguiDuration_asNanoseconds(duration);
  }
}

export class FloatRect {
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

  contains(
    rect: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ): ResultType<"tguiFloatRect_contains"> {
    return accessLib().symbols.tguiFloatRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFloatRect_intersects"> {
    return accessLib().symbols.tguiFloatRect_intersects(rect, otherRect);
  }
}

export class FontGlyph {
  advance: number;
  bounds: BufferSource;
  textureRect: BufferSource;

  constructor(
    advance: number,
    bounds: BufferSource,
    textureRect: BufferSource,
  ) {
    this.advance = advance;
    this.bounds = bounds;
    this.textureRect = textureRect;
  }
}

export class UIntRect {
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

  contains(
    rect: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ): ResultType<"tguiUIntRect_contains"> {
    return accessLib().symbols.tguiUIntRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiUIntRect_intersects"> {
    return accessLib().symbols.tguiUIntRect_intersects(rect, otherRect);
  }
}

export class Vector2f {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Vector2i {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Vector2u {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Vertex {
  position: BufferSource;
  color: BufferSource;
  texCoords: BufferSource;

  constructor(
    position: BufferSource,
    color: BufferSource,
    texCoords: BufferSource,
  ) {
    this.position = position;
    this.color = color;
    this.texCoords = texCoords;
  }
}

export class VertexColor {
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
}

export class IntRect {
  contains(
    rect: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ): ResultType<"tguiIntRect_contains"> {
    return accessLib().symbols.tguiIntRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ): ResultType<"tguiIntRect_intersects"> {
    return accessLib().symbols.tguiIntRect_intersects(rect, otherRect);
  }
}

export class tgui {
  setGlobalTextSize(textSize: number): ResultType<"tgui_setGlobalTextSize"> {
    return accessLib().symbols.tgui_setGlobalTextSize(textSize);
  }

  getGlobalTextSize(): ResultType<"tgui_getGlobalTextSize"> {
    return accessLib().symbols.tgui_getGlobalTextSize();
  }

  setDoubleClickTime(
    duration: BufferSource,
  ): ResultType<"tgui_setDoubleClickTime"> {
    return accessLib().symbols.tgui_setDoubleClickTime(duration);
  }

  getDoubleClickTime(): ResultType<"tgui_getDoubleClickTime"> {
    return accessLib().symbols.tgui_getDoubleClickTime();
  }

  setResourcePath(path: BufferSource): ResultType<"tgui_setResourcePath"> {
    return accessLib().symbols.tgui_setResourcePath(path);
  }

  setEditCursorBlinkRate(
    blinkRate: BufferSource,
  ): ResultType<"tgui_setEditCursorBlinkRate"> {
    return accessLib().symbols.tgui_setEditCursorBlinkRate(blinkRate);
  }

  getEditCursorBlinkRate(): ResultType<"tgui_getEditCursorBlinkRate"> {
    return accessLib().symbols.tgui_getEditCursorBlinkRate();
  }

  readFileToMemory(
    filename: BufferSource,
    fileSize: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_readFileToMemory"> {
    return accessLib().symbols.tgui_readFileToMemory(filename, fileSize);
  }

  writeFile(
    filename: BufferSource,
    textToWrite: BufferSource,
  ): ResultType<"tgui_writeFile"> {
    return accessLib().symbols.tgui_writeFile(filename, textToWrite);
  }

  readFileToMemory_free(
    arg0: BufferSource,
  ): ResultType<"tgui_readFileToMemory_free"> {
    return accessLib().symbols.tgui_readFileToMemory_free(arg0);
  }

  getLastError(): ResultType<"tgui_getLastError"> {
    return accessLib().symbols.tgui_getLastError();
  }

  setBindingWidgetCleanupCallback(
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_setBindingWidgetCleanupCallback"> {
    return accessLib().symbols.tgui_setBindingWidgetCleanupCallback(callback);
  }

  base64Encode(
    data: BufferSource,
    nrBytes: bigint,
  ): ResultType<"tgui_base64Encode"> {
    return accessLib().symbols.tgui_base64Encode(data, nrBytes);
  }

  base64Decode(
    data: BufferSource,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tgui_base64Decode"> {
    return accessLib().symbols.tgui_base64Decode(data, count);
  }
}

export class Cursor {
  setStyle(
    type: number,
    pixels: Deno.PointerValue<unknown>,
    size: BufferSource,
    hotspot: BufferSource,
  ): ResultType<"tguiCursor_setStyle"> {
    return accessLib().symbols.tguiCursor_setStyle(type, pixels, size, hotspot);
  }

  resetStyle(type: number): ResultType<"tguiCursor_resetStyle"> {
    return accessLib().symbols.tguiCursor_resetStyle(type);
  }
}

export class Gui {
  draw(gui: Deno.PointerValue<unknown>): ResultType<"tguiGui_draw"> {
    return accessLib().symbols.tguiGui_draw(gui);
  }

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

  saveWidgetsToFile(
    gui: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiGui_saveWidgetsToFile"> {
    return accessLib().symbols.tguiGui_saveWidgetsToFile(gui, filename);
  }

  setAbsoluteViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: BufferSource,
  ): ResultType<"tguiGui_setAbsoluteViewport"> {
    return accessLib().symbols.tguiGui_setAbsoluteViewport(thisGui, viewport);
  }

  setRelativeViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: BufferSource,
  ): ResultType<"tguiGui_setRelativeViewport"> {
    return accessLib().symbols.tguiGui_setRelativeViewport(thisGui, viewport);
  }

  getViewport(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getViewport"> {
    return accessLib().symbols.tguiGui_getViewport(thisGui);
  }

  setAbsoluteView(
    thisGui: Deno.PointerValue<unknown>,
    view: BufferSource,
  ): ResultType<"tguiGui_setAbsoluteView"> {
    return accessLib().symbols.tguiGui_setAbsoluteView(thisGui, view);
  }

  setRelativeView(
    thisGui: Deno.PointerValue<unknown>,
    view: BufferSource,
  ): ResultType<"tguiGui_setRelativeView"> {
    return accessLib().symbols.tguiGui_setRelativeView(thisGui, view);
  }

  getView(thisGui: Deno.PointerValue<unknown>): ResultType<"tguiGui_getView"> {
    return accessLib().symbols.tguiGui_getView(thisGui);
  }

  setTabKeyUsageEnabled(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setTabKeyUsageEnabled"> {
    return accessLib().symbols.tguiGui_setTabKeyUsageEnabled(thisGui, value);
  }

  isTabKeyUsageEnabled(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_isTabKeyUsageEnabled"> {
    return accessLib().symbols.tguiGui_isTabKeyUsageEnabled(thisGui);
  }

  setFont(
    thisGui: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_setFont"> {
    return accessLib().symbols.tguiGui_setFont(thisGui, value);
  }

  getFont(thisGui: Deno.PointerValue<unknown>): ResultType<"tguiGui_getFont"> {
    return accessLib().symbols.tguiGui_getFont(thisGui);
  }

  add(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiGui_add"> {
    return accessLib().symbols.tguiGui_add(thisGui, widget, widgetName);
  }

  get(
    thisGui: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ): ResultType<"tguiGui_get"> {
    return accessLib().symbols.tguiGui_get(thisGui, widgetName);
  }

  getWidgets(
    thisGui: Deno.PointerValue<unknown>,
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getWidgets"> {
    return accessLib().symbols.tguiGui_getWidgets(thisGui, returnCount);
  }

  remove(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_remove"> {
    return accessLib().symbols.tguiGui_remove(thisGui, widget);
  }

  removeAllWidgets(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_removeAllWidgets"> {
    return accessLib().symbols.tguiGui_removeAllWidgets(thisGui);
  }

  getFocusedChild(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getFocusedChild"> {
    return accessLib().symbols.tguiGui_getFocusedChild(thisGui);
  }

  getFocusedLeaf(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getFocusedLeaf"> {
    return accessLib().symbols.tguiGui_getFocusedLeaf(thisGui);
  }

  getWidgetAtPos(
    thisGui: Deno.PointerValue<unknown>,
    pos: BufferSource,
    recursive: number,
  ): ResultType<"tguiGui_getWidgetAtPos"> {
    return accessLib().symbols.tguiGui_getWidgetAtPos(thisGui, pos, recursive);
  }

  getWidgetBelowMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    mousePos: BufferSource,
    recursive: number,
  ): ResultType<"tguiGui_getWidgetBelowMouseCursor"> {
    return accessLib().symbols.tguiGui_getWidgetBelowMouseCursor(
      thisGui,
      mousePos,
      recursive,
    );
  }

  focusNextWidget(
    thisGui: Deno.PointerValue<unknown>,
    recursive: number,
  ): ResultType<"tguiGui_focusNextWidget"> {
    return accessLib().symbols.tguiGui_focusNextWidget(thisGui, recursive);
  }

  focusPreviousWidget(
    thisGui: Deno.PointerValue<unknown>,
    recursive: number,
  ): ResultType<"tguiGui_focusPreviousWidget"> {
    return accessLib().symbols.tguiGui_focusPreviousWidget(thisGui, recursive);
  }

  unfocusAllWidgets(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_unfocusAllWidgets"> {
    return accessLib().symbols.tguiGui_unfocusAllWidgets(thisGui);
  }

  moveWidgetToFront(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetToFront"> {
    return accessLib().symbols.tguiGui_moveWidgetToFront(thisGui, widget);
  }

  moveWidgetToBack(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetToBack"> {
    return accessLib().symbols.tguiGui_moveWidgetToBack(thisGui, widget);
  }

  moveWidgetForward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetForward"> {
    return accessLib().symbols.tguiGui_moveWidgetForward(thisGui, widget);
  }

  moveWidgetBackward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_moveWidgetBackward"> {
    return accessLib().symbols.tguiGui_moveWidgetBackward(thisGui, widget);
  }

  setWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    index: bigint,
  ): ResultType<"tguiGui_setWidgetIndex"> {
    return accessLib().symbols.tguiGui_setWidgetIndex(thisGui, widget, index);
  }

  getWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getWidgetIndex"> {
    return accessLib().symbols.tguiGui_getWidgetIndex(thisGui, widget);
  }

  setOpacity(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setOpacity"> {
    return accessLib().symbols.tguiGui_setOpacity(thisGui, value);
  }

  getOpacity(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getOpacity"> {
    return accessLib().symbols.tguiGui_getOpacity(thisGui);
  }

  setTextSize(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setTextSize"> {
    return accessLib().symbols.tguiGui_setTextSize(thisGui, value);
  }

  getTextSize(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_getTextSize"> {
    return accessLib().symbols.tguiGui_getTextSize(thisGui);
  }

  setDrawingUpdatesTime(
    thisGui: Deno.PointerValue<unknown>,
    drawUpdatesTime: number,
  ): ResultType<"tguiGui_setDrawingUpdatesTime"> {
    return accessLib().symbols.tguiGui_setDrawingUpdatesTime(
      thisGui,
      drawUpdatesTime,
    );
  }

  updateTime(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_updateTime"> {
    return accessLib().symbols.tguiGui_updateTime(thisGui);
  }

  setOverrideMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    type: number,
  ): ResultType<"tguiGui_setOverrideMouseCursor"> {
    return accessLib().symbols.tguiGui_setOverrideMouseCursor(thisGui, type);
  }

  restoreOverrideMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_restoreOverrideMouseCursor"> {
    return accessLib().symbols.tguiGui_restoreOverrideMouseCursor(thisGui);
  }

  requestMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    type: number,
  ): ResultType<"tguiGui_requestMouseCursor"> {
    return accessLib().symbols.tguiGui_requestMouseCursor(thisGui, type);
  }

  mapPixelToCoords(
    thisGui: Deno.PointerValue<unknown>,
    pixel: BufferSource,
  ): ResultType<"tguiGui_mapPixelToCoords"> {
    return accessLib().symbols.tguiGui_mapPixelToCoords(thisGui, pixel);
  }

  mapCoordsToPixel(
    thisGui: Deno.PointerValue<unknown>,
    coord: BufferSource,
  ): ResultType<"tguiGui_mapCoordsToPixel"> {
    return accessLib().symbols.tguiGui_mapCoordsToPixel(thisGui, coord);
  }

  setKeyboardNavigationEnabled(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiGui_setKeyboardNavigationEnabled"> {
    return accessLib().symbols.tguiGui_setKeyboardNavigationEnabled(
      thisGui,
      value,
    );
  }

  isKeyboardNavigationEnabled(
    thisGui: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGui_isKeyboardNavigationEnabled"> {
    return accessLib().symbols.tguiGui_isKeyboardNavigationEnabled(thisGui);
  }

  mainLoop(
    thisGui: Deno.PointerValue<unknown>,
    clearColor: BufferSource,
  ): ResultType<"tguiGui_mainLoop"> {
    return accessLib().symbols.tguiGui_mainLoop(thisGui, clearColor);
  }
}

export class GuiCSFMLGraphics {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(window: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiGuiCSFMLGraphics_create(window);
  }

  destroy(): ResultType<"tguiGuiCSFMLGraphics_destroy"> {
    return accessLib().symbols.tguiGuiCSFMLGraphics_destroy(this.pointer);
  }

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

  addClippingLayer(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    rect: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_addClippingLayer"> {
    return accessLib().symbols.tguiBackendRenderTarget_addClippingLayer(
      target,
      states,
      rect,
    );
  }

  removeClippingLayer(
    target: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBackendRenderTarget_removeClippingLayer"> {
    return accessLib().symbols.tguiBackendRenderTarget_removeClippingLayer(
      target,
    );
  }

  drawBorders(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    borders: Deno.PointerValue<unknown>,
    size: BufferSource,
    color: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_drawBorders"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawBorders(
      target,
      states,
      borders,
      size,
      color,
    );
  }

  drawFilledRect(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: BufferSource,
    color: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_drawFilledRect"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawFilledRect(
      target,
      states,
      size,
      color,
    );
  }

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

  drawTriangle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    point1: BufferSource,
    point2: BufferSource,
    point3: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_drawTriangle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawTriangle(
      target,
      states,
      point1,
      point2,
      point3,
    );
  }

  drawCircle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: number,
    backgroundColor: BufferSource,
    borderThickness: number,
    borderColor: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_drawCircle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawCircle(
      target,
      states,
      size,
      backgroundColor,
      borderThickness,
      borderColor,
    );
  }

  drawRoundedRectangle(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    size: BufferSource,
    backgroundColor: BufferSource,
    radius: number,
    borders: Deno.PointerValue<unknown>,
    borderColor: BufferSource,
  ): ResultType<"tguiBackendRenderTarget_drawRoundedRectangle"> {
    return accessLib().symbols.tguiBackendRenderTarget_drawRoundedRectangle(
      target,
      states,
      size,
      backgroundColor,
      radius,
      borders,
      borderColor,
    );
  }

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

  constructor() {
    this.ptr = accessLib().symbols.tguiCustomWidget_create();
  }

  setPositionChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setPositionChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setPositionChangedCallback(
      widget,
      callback,
    );
  }

  setSizeChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setSizeChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setSizeChangedCallback(
      widget,
      callback,
    );
  }

  setVisibleChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setVisibleChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setVisibleChangedCallback(
      widget,
      callback,
    );
  }

  setEnableChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setEnableChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setEnableChangedCallback(
      widget,
      callback,
    );
  }

  setFocusChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setFocusChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setFocusChangedCallback(
      widget,
      callback,
    );
  }

  setCanGainFocusCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setCanGainFocusCallback"> {
    return accessLib().symbols.tguiCustomWidget_setCanGainFocusCallback(
      widget,
      callback,
    );
  }

  setGetFullSizeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setGetFullSizeCallback"> {
    return accessLib().symbols.tguiCustomWidget_setGetFullSizeCallback(
      widget,
      callback,
    );
  }

  setGetWidgetOffsetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setGetWidgetOffsetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setGetWidgetOffsetCallback(
      widget,
      callback,
    );
  }

  setUpdateTimeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setUpdateTimeCallback"> {
    return accessLib().symbols.tguiCustomWidget_setUpdateTimeCallback(
      widget,
      callback,
    );
  }

  setMouseOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseOnWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseOnWidgetCallback(
      widget,
      callback,
    );
  }

  setLeftMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setLeftMousePressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setLeftMousePressedCallback(
      widget,
      callback,
    );
  }

  setLeftMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setLeftMouseReleasedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setLeftMouseReleasedCallback(
      widget,
      callback,
    );
  }

  setRightMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRightMousePressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRightMousePressedCallback(
      widget,
      callback,
    );
  }

  setRightMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRightMouseReleasedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRightMouseReleasedCallback(
      widget,
      callback,
    );
  }

  setMouseMovedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseMovedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseMovedCallback(
      widget,
      callback,
    );
  }

  setKeyPressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setKeyPressedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setKeyPressedCallback(
      widget,
      callback,
    );
  }

  setTextEnteredCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setTextEnteredCallback"> {
    return accessLib().symbols.tguiCustomWidget_setTextEnteredCallback(
      widget,
      callback,
    );
  }

  setScrolledCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setScrolledCallback"> {
    return accessLib().symbols.tguiCustomWidget_setScrolledCallback(
      widget,
      callback,
    );
  }

  setMouseNoLongerOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseNoLongerOnWidgetCallback"> {
    return accessLib().symbols
      .tguiCustomWidget_setMouseNoLongerOnWidgetCallback(widget, callback);
  }

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

  setMouseEnteredWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseEnteredWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseEnteredWidgetCallback(
      widget,
      callback,
    );
  }

  setMouseLeftWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setMouseLeftWidgetCallback"> {
    return accessLib().symbols.tguiCustomWidget_setMouseLeftWidgetCallback(
      widget,
      callback,
    );
  }

  setRendererChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiCustomWidget_setRendererChangedCallback"> {
    return accessLib().symbols.tguiCustomWidget_setRendererChangedCallback(
      widget,
      callback,
    );
  }

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
  getParentPath(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_getParentPath"> {
    return accessLib().symbols.tguiFilesystem_getParentPath(path);
  }

  joinPaths(
    path1: BufferSource,
    path2: BufferSource,
  ): ResultType<"tguiFilesystem_joinPaths"> {
    return accessLib().symbols.tguiFilesystem_joinPaths(path1, path2);
  }

  directoryExists(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_directoryExists"> {
    return accessLib().symbols.tguiFilesystem_directoryExists(path);
  }

  fileExists(path: BufferSource): ResultType<"tguiFilesystem_fileExists"> {
    return accessLib().symbols.tguiFilesystem_fileExists(path);
  }

  createDirectory(
    path: BufferSource,
  ): ResultType<"tguiFilesystem_createDirectory"> {
    return accessLib().symbols.tguiFilesystem_createDirectory(path);
  }

  getLocalDataDirectory(): ResultType<"tguiFilesystem_getLocalDataDirectory"> {
    return accessLib().symbols.tguiFilesystem_getLocalDataDirectory();
  }
}

export class Font {
  createNull(): ResultType<"tguiFont_createNull"> {
    return accessLib().symbols.tguiFont_createNull();
  }

  createFromFile(
    filename: BufferSource,
  ): ResultType<"tguiFont_createFromFile"> {
    return accessLib().symbols.tguiFont_createFromFile(filename);
  }

  createFromMemory(
    data: BufferSource,
    dataSize: bigint,
  ): ResultType<"tguiFont_createFromMemory"> {
    return accessLib().symbols.tguiFont_createFromMemory(data, dataSize);
  }

  destroy(font: Deno.PointerValue<unknown>): ResultType<"tguiFont_destroy"> {
    return accessLib().symbols.tguiFont_destroy(font);
  }

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

  setGlobalFont(
    font: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFont_setGlobalFont"> {
    return accessLib().symbols.tguiFont_setGlobalFont(font);
  }

  getGlobalFont(): ResultType<"tguiFont_getGlobalFont"> {
    return accessLib().symbols.tguiFont_getGlobalFont();
  }

  getId(thisFont: Deno.PointerValue<unknown>): ResultType<"tguiFont_getId"> {
    return accessLib().symbols.tguiFont_getId(thisFont);
  }

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

  getLineSpacing(
    thisFont: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiFont_getLineSpacing"> {
    return accessLib().symbols.tguiFont_getLineSpacing(thisFont, characterSize);
  }

  getFontHeight(
    thisFont: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiFont_getFontHeight"> {
    return accessLib().symbols.tguiFont_getFontHeight(thisFont, characterSize);
  }

  setSmooth(
    thisFont: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiFont_setSmooth"> {
    return accessLib().symbols.tguiFont_setSmooth(thisFont, value);
  }

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

  constructor(constant: number) {
    this.ptr = accessLib().symbols.tguiLayout_create(constant);
  }

  createFromString(
    expression: BufferSource,
  ): ResultType<"tguiLayout_createFromString"> {
    return accessLib().symbols.tguiLayout_createFromString(expression);
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLayout_copy(other);
  }

  destroy(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_destroy"> {
    return accessLib().symbols.tguiLayout_destroy(layout);
  }

  replaceValue(
    layout: Deno.PointerValue<unknown>,
    newLayout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_replaceValue"> {
    return accessLib().symbols.tguiLayout_replaceValue(layout, newLayout);
  }

  getValue(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout_getValue"> {
    return accessLib().symbols.tguiLayout_getValue(layout);
  }

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

  constructor(constant: BufferSource) {
    this.ptr = accessLib().symbols.tguiLayout2d_create(constant);
  }

  createFromLayouts(
    x: Deno.PointerValue<unknown>,
    y: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout2d_createFromLayouts"> {
    return accessLib().symbols.tguiLayout2d_createFromLayouts(x, y);
  }

  createFromString(
    expression: BufferSource,
  ): ResultType<"tguiLayout2d_createFromString"> {
    return accessLib().symbols.tguiLayout2d_createFromString(expression);
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLayout2d_copy(other);
  }

  destroy(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLayout2d_destroy"> {
    return accessLib().symbols.tguiLayout2d_destroy(layout);
  }

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

  constructor(left: number, top: number, right: number, bottom: number) {
    this.ptr = accessLib().symbols.tguiOutline_create(left, top, right, bottom);
  }

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

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiOutline_copy(other);
  }

  destroy(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_destroy"> {
    return accessLib().symbols.tguiOutline_destroy(outline);
  }

  getLeft(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getLeft"> {
    return accessLib().symbols.tguiOutline_getLeft(outline);
  }

  getTop(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getTop"> {
    return accessLib().symbols.tguiOutline_getTop(outline);
  }

  getRight(
    outline: Deno.PointerValue<unknown>,
  ): ResultType<"tguiOutline_getRight"> {
    return accessLib().symbols.tguiOutline_getRight(outline);
  }

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

  constructor(data: Deno.PointerValue<unknown>) {
    this.ptr = accessLib().symbols.tguiRendererData_copy(data);
  }

  destroy(
    data: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRendererData_destroy"> {
    return accessLib().symbols.tguiRendererData_destroy(data);
  }
}

export class Sprite {
  createNull(): ResultType<"tguiSprite_createNull"> {
    return accessLib().symbols.tguiSprite_createNull();
  }

  createFromTexture(
    texture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_createFromTexture"> {
    return accessLib().symbols.tguiSprite_createFromTexture(texture);
  }

  destroy(
    sprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_destroy"> {
    return accessLib().symbols.tguiSprite_destroy(sprite);
  }

  getScalingType(
    sprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getScalingType"> {
    return accessLib().symbols.tguiSprite_getScalingType(sprite);
  }

  isSet(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_isSet"> {
    return accessLib().symbols.tguiSprite_isSet(thisSprite);
  }

  setTexture(
    thisSprite: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_setTexture"> {
    return accessLib().symbols.tguiSprite_setTexture(thisSprite, value);
  }

  getTexture(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getTexture"> {
    return accessLib().symbols.tguiSprite_getTexture(thisSprite);
  }

  setPosition(
    thisSprite: Deno.PointerValue<unknown>,
    value: BufferSource,
  ): ResultType<"tguiSprite_setPosition"> {
    return accessLib().symbols.tguiSprite_setPosition(thisSprite, value);
  }

  getPosition(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getPosition"> {
    return accessLib().symbols.tguiSprite_getPosition(thisSprite);
  }

  setSize(
    thisSprite: Deno.PointerValue<unknown>,
    value: BufferSource,
  ): ResultType<"tguiSprite_setSize"> {
    return accessLib().symbols.tguiSprite_setSize(thisSprite, value);
  }

  getSize(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getSize"> {
    return accessLib().symbols.tguiSprite_getSize(thisSprite);
  }

  setOpacity(
    thisSprite: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiSprite_setOpacity"> {
    return accessLib().symbols.tguiSprite_setOpacity(thisSprite, value);
  }

  getOpacity(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getOpacity"> {
    return accessLib().symbols.tguiSprite_getOpacity(thisSprite);
  }

  setVisibleRect(
    thisSprite: Deno.PointerValue<unknown>,
    value: BufferSource,
  ): ResultType<"tguiSprite_setVisibleRect"> {
    return accessLib().symbols.tguiSprite_setVisibleRect(thisSprite, value);
  }

  getVisibleRect(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getVisibleRect"> {
    return accessLib().symbols.tguiSprite_getVisibleRect(thisSprite);
  }

  setRotation(
    thisSprite: Deno.PointerValue<unknown>,
    value: number,
  ): ResultType<"tguiSprite_setRotation"> {
    return accessLib().symbols.tguiSprite_setRotation(thisSprite, value);
  }

  getRotation(
    thisSprite: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSprite_getRotation"> {
    return accessLib().symbols.tguiSprite_getRotation(thisSprite);
  }

  isTransparentPixel(
    thisSprite: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ): ResultType<"tguiSprite_isTransparentPixel"> {
    return accessLib().symbols.tguiSprite_isTransparentPixel(thisSprite, pos);
  }
}

export class Text {
  getStaticExtraHorizontalPadding(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraHorizontalPadding"> {
    return accessLib().symbols.tguiText_getStaticExtraHorizontalPadding(
      font,
      characterSize,
    );
  }

  getStaticExtraHorizontalOffset(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraHorizontalOffset"> {
    return accessLib().symbols.tguiText_getStaticExtraHorizontalOffset(
      font,
      characterSize,
    );
  }

  getStaticExtraVerticalPadding(
    characterSize: number,
  ): ResultType<"tguiText_getStaticExtraVerticalPadding"> {
    return accessLib().symbols.tguiText_getStaticExtraVerticalPadding(
      characterSize,
    );
  }

  getStaticLineHeight(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ): ResultType<"tguiText_getStaticLineHeight"> {
    return accessLib().symbols.tguiText_getStaticLineHeight(
      font,
      characterSize,
    );
  }

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

  constructor() {
    this.ptr = accessLib().symbols.tguiText_create();
  }

  destroy(text: Deno.PointerValue<unknown>): ResultType<"tguiText_destroy"> {
    return accessLib().symbols.tguiText_destroy(text);
  }

  findBestTextSize(
    font: Deno.PointerValue<unknown>,
    height: number,
    fit: number,
  ): ResultType<"tguiText_findBestTextSize"> {
    return accessLib().symbols.tguiText_findBestTextSize(font, height, fit);
  }

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

  getSize(): ResultType<"tguiText_getSize"> {
    return accessLib().symbols.tguiText_getSize(this.pointer);
  }

  setPosition(value: BufferSource): ResultType<"tguiText_setPosition"> {
    return accessLib().symbols.tguiText_setPosition(this.pointer, value);
  }

  getPosition(): ResultType<"tguiText_getPosition"> {
    return accessLib().symbols.tguiText_getPosition(this.pointer);
  }

  setString(value: BufferSource): ResultType<"tguiText_setString"> {
    return accessLib().symbols.tguiText_setString(this.pointer, value);
  }

  getString(): ResultType<"tguiText_getString"> {
    return accessLib().symbols.tguiText_getString(this.pointer);
  }

  setCharacterSize(value: number): ResultType<"tguiText_setCharacterSize"> {
    return accessLib().symbols.tguiText_setCharacterSize(this.pointer, value);
  }

  getCharacterSize(): ResultType<"tguiText_getCharacterSize"> {
    return accessLib().symbols.tguiText_getCharacterSize(this.pointer);
  }

  setColor(value: BufferSource): ResultType<"tguiText_setColor"> {
    return accessLib().symbols.tguiText_setColor(this.pointer, value);
  }

  getColor(): ResultType<"tguiText_getColor"> {
    return accessLib().symbols.tguiText_getColor(this.pointer);
  }

  setOpacity(value: number): ResultType<"tguiText_setOpacity"> {
    return accessLib().symbols.tguiText_setOpacity(this.pointer, value);
  }

  getOpacity(): ResultType<"tguiText_getOpacity"> {
    return accessLib().symbols.tguiText_getOpacity(this.pointer);
  }

  setFont(value: Deno.PointerValue<unknown>): ResultType<"tguiText_setFont"> {
    return accessLib().symbols.tguiText_setFont(this.pointer, value);
  }

  getFont(): ResultType<"tguiText_getFont"> {
    return accessLib().symbols.tguiText_getFont(this.pointer);
  }

  setStyle(value: number): ResultType<"tguiText_setStyle"> {
    return accessLib().symbols.tguiText_setStyle(this.pointer, value);
  }

  getStyle(): ResultType<"tguiText_getStyle"> {
    return accessLib().symbols.tguiText_getStyle(this.pointer);
  }

  setOutlineColor(value: BufferSource): ResultType<"tguiText_setOutlineColor"> {
    return accessLib().symbols.tguiText_setOutlineColor(this.pointer, value);
  }

  getOutlineColor(): ResultType<"tguiText_getOutlineColor"> {
    return accessLib().symbols.tguiText_getOutlineColor(this.pointer);
  }

  setOutlineThickness(
    value: number,
  ): ResultType<"tguiText_setOutlineThickness"> {
    return accessLib().symbols.tguiText_setOutlineThickness(
      this.pointer,
      value,
    );
  }

  getOutlineThickness(): ResultType<"tguiText_getOutlineThickness"> {
    return accessLib().symbols.tguiText_getOutlineThickness(this.pointer);
  }

  findCharacterPos(index: bigint): ResultType<"tguiText_findCharacterPos"> {
    return accessLib().symbols.tguiText_findCharacterPos(this.pointer, index);
  }

  getExtraHorizontalPadding(): ResultType<
    "tguiText_getExtraHorizontalPadding"
  > {
    return accessLib().symbols.tguiText_getExtraHorizontalPadding(this.pointer);
  }

  getExtraHorizontalOffset(): ResultType<"tguiText_getExtraHorizontalOffset"> {
    return accessLib().symbols.tguiText_getExtraHorizontalOffset(this.pointer);
  }

  getLineHeight(): ResultType<"tguiText_getLineHeight"> {
    return accessLib().symbols.tguiText_getLineHeight(this.pointer);
  }

  getLineWidth(): ResultType<"tguiText_getLineWidth"> {
    return accessLib().symbols.tguiText_getLineWidth(this.pointer);
  }
}

export class Texture {
  createNull(): ResultType<"tguiTexture_createNull"> {
    return accessLib().symbols.tguiTexture_createNull();
  }

  createFromFile(
    filename: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
  ): ResultType<"tguiTexture_createFromFile"> {
    return accessLib().symbols.tguiTexture_createFromFile(
      filename,
      partRect,
      middleRect,
    );
  }

  createFromFileEx(
    filename: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromFileEx"> {
    return accessLib().symbols.tguiTexture_createFromFileEx(
      filename,
      partRect,
      middleRect,
      smoothing,
    );
  }

  createFromMemory(
    data: BufferSource,
    dataSize: bigint,
    partRect: BufferSource,
    middleRect: BufferSource,
  ): ResultType<"tguiTexture_createFromMemory"> {
    return accessLib().symbols.tguiTexture_createFromMemory(
      data,
      dataSize,
      partRect,
      middleRect,
    );
  }

  createFromMemoryEx(
    data: BufferSource,
    dataSize: bigint,
    partRect: BufferSource,
    middleRect: BufferSource,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromMemoryEx"> {
    return accessLib().symbols.tguiTexture_createFromMemoryEx(
      data,
      dataSize,
      partRect,
      middleRect,
      smoothing,
    );
  }

  createFromPixelData(
    size: BufferSource,
    pixels: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
  ): ResultType<"tguiTexture_createFromPixelData"> {
    return accessLib().symbols.tguiTexture_createFromPixelData(
      size,
      pixels,
      partRect,
      middleRect,
    );
  }

  createFromPixelDataEx(
    size: BufferSource,
    pixels: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromPixelDataEx"> {
    return accessLib().symbols.tguiTexture_createFromPixelDataEx(
      size,
      pixels,
      partRect,
      middleRect,
      smoothing,
    );
  }

  createFromBase64(
    imageAsBase64: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
  ): ResultType<"tguiTexture_createFromBase64"> {
    return accessLib().symbols.tguiTexture_createFromBase64(
      imageAsBase64,
      partRect,
      middleRect,
    );
  }

  createFromBase64Ex(
    imageAsBase64: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
    smoothing: number,
  ): ResultType<"tguiTexture_createFromBase64Ex"> {
    return accessLib().symbols.tguiTexture_createFromBase64Ex(
      imageAsBase64,
      partRect,
      middleRect,
      smoothing,
    );
  }

  destroy(
    texture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_destroy"> {
    return accessLib().symbols.tguiTexture_destroy(texture);
  }

  setColor(
    thisTexture: Deno.PointerValue<unknown>,
    value: BufferSource,
  ): ResultType<"tguiTexture_setColor"> {
    return accessLib().symbols.tguiTexture_setColor(thisTexture, value);
  }

  getColor(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getColor"> {
    return accessLib().symbols.tguiTexture_getColor(thisTexture);
  }

  setMiddleRect(
    thisTexture: Deno.PointerValue<unknown>,
    value: BufferSource,
  ): ResultType<"tguiTexture_setMiddleRect"> {
    return accessLib().symbols.tguiTexture_setMiddleRect(thisTexture, value);
  }

  getMiddleRect(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getMiddleRect"> {
    return accessLib().symbols.tguiTexture_getMiddleRect(thisTexture);
  }

  getId(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getId"> {
    return accessLib().symbols.tguiTexture_getId(thisTexture);
  }

  getImageSize(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getImageSize"> {
    return accessLib().symbols.tguiTexture_getImageSize(thisTexture);
  }

  getPartRect(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_getPartRect"> {
    return accessLib().symbols.tguiTexture_getPartRect(thisTexture);
  }

  isSmooth(
    thisTexture: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTexture_isSmooth"> {
    return accessLib().symbols.tguiTexture_isSmooth(thisTexture);
  }

  isTransparentPixel(
    thisTexture: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ): ResultType<"tguiTexture_isTransparentPixel"> {
    return accessLib().symbols.tguiTexture_isTransparentPixel(thisTexture, pos);
  }

  setDefaultSmooth(smooth: number): ResultType<"tguiTexture_setDefaultSmooth"> {
    return accessLib().symbols.tguiTexture_setDefaultSmooth(smooth);
  }

  getDefaultSmooth(): ResultType<"tguiTexture_getDefaultSmooth"> {
    return accessLib().symbols.tguiTexture_getDefaultSmooth();
  }
}

export class Theme {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTheme_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(theme: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTheme_copy(theme);
  }

  destroy(theme: Deno.PointerValue<unknown>): ResultType<"tguiTheme_destroy"> {
    return accessLib().symbols.tguiTheme_destroy(theme);
  }

  load(
    theme: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ): ResultType<"tguiTheme_load"> {
    return accessLib().symbols.tguiTheme_load(theme, filename);
  }

  replace(
    theme: Deno.PointerValue<unknown>,
    otherTheme: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTheme_replace"> {
    return accessLib().symbols.tguiTheme_replace(theme, otherTheme);
  }

  getRenderer(
    theme: Deno.PointerValue<unknown>,
    id: BufferSource,
  ): ResultType<"tguiTheme_getRenderer"> {
    return accessLib().symbols.tguiTheme_getRenderer(theme, id);
  }

  setDefault(
    defaultTheme: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTheme_setDefault"> {
    return accessLib().symbols.tguiTheme_setDefault(defaultTheme);
  }

  getDefault(): ResultType<"tguiTheme_getDefault"> {
    return accessLib().symbols.tguiTheme_getDefault();
  }

  hasGlobalProperty(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_hasGlobalProperty"> {
    return accessLib().symbols.tguiTheme_hasGlobalProperty(theme, property);
  }

  getGlobalPropertyBool(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyBool"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyBool(theme, property);
  }

  getGlobalPropertyFont(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyFont"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyFont(theme, property);
  }

  getGlobalPropertyColor(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyColor"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyColor(
      theme,
      property,
    );
  }

  getGlobalPropertyString(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyString"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyString(
      theme,
      property,
    );
  }

  getGlobalPropertyNumber(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyNumber"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyNumber(
      theme,
      property,
    );
  }

  getGlobalPropertyOutline(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyOutline"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyOutline(
      theme,
      property,
    );
  }

  getGlobalPropertyTexture(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyTexture"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyTexture(
      theme,
      property,
    );
  }

  getGlobalPropertyTextStyle(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyTextStyle"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyTextStyle(
      theme,
      property,
    );
  }

  getGlobalPropertyRendererData(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiTheme_getGlobalPropertyRendererData"> {
    return accessLib().symbols.tguiTheme_getGlobalPropertyRendererData(
      theme,
      property,
    );
  }

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

  getRendererDefaultSubwidget(
    widgetType: BufferSource,
    property: BufferSource,
  ): ResultType<"tguiTheme_getRendererDefaultSubwidget"> {
    return accessLib().symbols.tguiTheme_getRendererDefaultSubwidget(
      widgetType,
      property,
    );
  }

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

  getRendererInheritedGlobalProperty(
    widgetType: BufferSource,
    property: BufferSource,
  ): ResultType<"tguiTheme_getRendererInheritedGlobalProperty"> {
    return accessLib().symbols.tguiTheme_getRendererInheritedGlobalProperty(
      widgetType,
      property,
    );
  }

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

  removeRenderer(id: BufferSource): ResultType<"tguiTheme_removeRenderer"> {
    return accessLib().symbols.tguiTheme_removeRenderer(this.pointer, id);
  }

  getPrimary(): ResultType<"tguiTheme_getPrimary"> {
    return accessLib().symbols.tguiTheme_getPrimary(this.pointer);
  }

  addRendererInheritanceParent(
    widgetType: BufferSource,
    parentType: BufferSource,
  ): ResultType<"tguiTheme_addRendererInheritanceParent"> {
    return accessLib().symbols.tguiTheme_addRendererInheritanceParent(
      widgetType,
      parentType,
    );
  }

  getRendererInheritanceParent(
    widgetType: BufferSource,
  ): ResultType<"tguiTheme_getRendererInheritanceParent"> {
    return accessLib().symbols.tguiTheme_getRendererInheritanceParent(
      widgetType,
    );
  }
}

export class Timer {
  scheduleCallback(
    callback: Deno.PointerValue<unknown>,
    interval: BufferSource,
  ): ResultType<"tguiTimer_scheduleCallback"> {
    return accessLib().symbols.tguiTimer_scheduleCallback(callback, interval);
  }

  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(
    callback: Deno.PointerValue<unknown>,
    interval: BufferSource,
    enable: number,
  ) {
    this.ptr = accessLib().symbols.tguiTimer_create(callback, interval, enable);
  }

  destroy(timer: Deno.PointerValue<unknown>): ResultType<"tguiTimer_destroy"> {
    return accessLib().symbols.tguiTimer_destroy(timer);
  }

  setInterval(
    timer: Deno.PointerValue<unknown>,
    interval: BufferSource,
  ): ResultType<"tguiTimer_setInterval"> {
    return accessLib().symbols.tguiTimer_setInterval(timer, interval);
  }

  getInterval(
    timer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_getInterval"> {
    return accessLib().symbols.tguiTimer_getInterval(timer);
  }

  setEnabled(
    timer: Deno.PointerValue<unknown>,
    enabled: number,
  ): ResultType<"tguiTimer_setEnabled"> {
    return accessLib().symbols.tguiTimer_setEnabled(timer, enabled);
  }

  isEnabled(
    timer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_isEnabled"> {
    return accessLib().symbols.tguiTimer_isEnabled(timer);
  }

  setCallback(
    timer: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTimer_setCallback"> {
    return accessLib().symbols.tguiTimer_setCallback(timer, callback);
  }

  restart(timer: Deno.PointerValue<unknown>): ResultType<"tguiTimer_restart"> {
    return accessLib().symbols.tguiTimer_restart(timer);
  }
}

export class ToolTip {
  setInitialDelay(
    delay: BufferSource,
  ): ResultType<"tguiToolTip_setInitialDelay"> {
    return accessLib().symbols.tguiToolTip_setInitialDelay(delay);
  }

  getInitialDelay(): ResultType<"tguiToolTip_getInitialDelay"> {
    return accessLib().symbols.tguiToolTip_getInitialDelay();
  }

  setDistanceToMouse(
    distance: BufferSource,
  ): ResultType<"tguiToolTip_setDistanceToMouse"> {
    return accessLib().symbols.tguiToolTip_setDistanceToMouse(distance);
  }

  getDistanceToMouse(): ResultType<"tguiToolTip_getDistanceToMouse"> {
    return accessLib().symbols.tguiToolTip_getDistanceToMouse();
  }

  setShowOnDisabledWidget(
    show: number,
  ): ResultType<"tguiToolTip_setShowOnDisabledWidget"> {
    return accessLib().symbols.tguiToolTip_setShowOnDisabledWidget(show);
  }

  getShowOnDisabledWidget(): ResultType<"tguiToolTip_getShowOnDisabledWidget"> {
    return accessLib().symbols.tguiToolTip_getShowOnDisabledWidget();
  }
}

export class sfEvent {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor() {
    this.ptr = accessLib().symbols.sfEvent_create();
  }

  destroy(event: Deno.PointerValue<unknown>): ResultType<"sfEvent_destroy"> {
    return accessLib().symbols.sfEvent_destroy(event);
  }
}

export class renderWindow {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(mode: BufferSource, title: BufferSource, style: number) {
    this.ptr = accessLib().symbols.renderWindow_create(mode, title, style);
  }

  isOpen(): ResultType<"renderWindow_isOpen"> {
    return accessLib().symbols.renderWindow_isOpen(this.pointer);
  }

  pollEvent(
    event: Deno.PointerValue<unknown>,
  ): ResultType<"renderWindow_pollEvent"> {
    return accessLib().symbols.renderWindow_pollEvent(this.pointer, event);
  }

  close(): ResultType<"renderWindow_close"> {
    return accessLib().symbols.renderWindow_close(this.pointer);
  }

  clear(color: BufferSource): ResultType<"renderWindow_clear"> {
    return accessLib().symbols.renderWindow_clear(this.pointer, color);
  }

  display(): ResultType<"renderWindow_display"> {
    return accessLib().symbols.renderWindow_display(this.pointer);
  }

  destroy(): ResultType<"renderWindow_destroy"> {
    return accessLib().symbols.renderWindow_destroy(this.pointer);
  }
}

export class BitmapButton extends Button {
  constructor() {
    super(accessLib().symbols.tguiBitmapButton_create());
  }

  setImage(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiBitmapButton_setImage"> {
    return accessLib().symbols.tguiBitmapButton_setImage(this.pointer, value);
  }

  getImage(): ResultType<"tguiBitmapButton_getImage"> {
    return accessLib().symbols.tguiBitmapButton_getImage(this.pointer);
  }

  setImageScaling(
    value: number,
  ): ResultType<"tguiBitmapButton_setImageScaling"> {
    return accessLib().symbols.tguiBitmapButton_setImageScaling(
      this.pointer,
      value,
    );
  }

  getImageScaling(): ResultType<"tguiBitmapButton_getImageScaling"> {
    return accessLib().symbols.tguiBitmapButton_getImageScaling(this.pointer);
  }
}

export class ChatBox extends Widget {
  constructor() {
    super(accessLib().symbols.tguiChatBox_create());
  }

  addLine(text: BufferSource): ResultType<"tguiChatBox_addLine"> {
    return accessLib().symbols.tguiChatBox_addLine(this.pointer, text);
  }

  addLineWithColor(
    text: BufferSource,
    color: BufferSource,
  ): ResultType<"tguiChatBox_addLineWithColor"> {
    return accessLib().symbols.tguiChatBox_addLineWithColor(
      this.pointer,
      text,
      color,
    );
  }

  addLineWithColorAndStyle(
    text: BufferSource,
    color: BufferSource,
    style: number,
  ): ResultType<"tguiChatBox_addLineWithColorAndStyle"> {
    return accessLib().symbols.tguiChatBox_addLineWithColorAndStyle(
      this.pointer,
      text,
      color,
      style,
    );
  }

  getLine(lineIndex: bigint): ResultType<"tguiChatBox_getLine"> {
    return accessLib().symbols.tguiChatBox_getLine(this.pointer, lineIndex);
  }

  getLineColor(lineIndex: bigint): ResultType<"tguiChatBox_getLineColor"> {
    return accessLib().symbols.tguiChatBox_getLineColor(
      this.pointer,
      lineIndex,
    );
  }

  getLineTextStyle(
    lineIndex: bigint,
  ): ResultType<"tguiChatBox_getLineTextStyle"> {
    return accessLib().symbols.tguiChatBox_getLineTextStyle(
      this.pointer,
      lineIndex,
    );
  }

  removeLine(lineIndex: bigint): ResultType<"tguiChatBox_removeLine"> {
    return accessLib().symbols.tguiChatBox_removeLine(this.pointer, lineIndex);
  }

  removeAllLines(): ResultType<"tguiChatBox_removeAllLines"> {
    return accessLib().symbols.tguiChatBox_removeAllLines(this.pointer);
  }

  getLineAmount(): ResultType<"tguiChatBox_getLineAmount"> {
    return accessLib().symbols.tguiChatBox_getLineAmount(this.pointer);
  }

  setLineLimit(value: bigint): ResultType<"tguiChatBox_setLineLimit"> {
    return accessLib().symbols.tguiChatBox_setLineLimit(this.pointer, value);
  }

  getLineLimit(): ResultType<"tguiChatBox_getLineLimit"> {
    return accessLib().symbols.tguiChatBox_getLineLimit(this.pointer);
  }

  setTextColor(value: BufferSource): ResultType<"tguiChatBox_setTextColor"> {
    return accessLib().symbols.tguiChatBox_setTextColor(this.pointer, value);
  }

  getTextColor(): ResultType<"tguiChatBox_getTextColor"> {
    return accessLib().symbols.tguiChatBox_getTextColor(this.pointer);
  }

  setTextStyle(value: number): ResultType<"tguiChatBox_setTextStyle"> {
    return accessLib().symbols.tguiChatBox_setTextStyle(this.pointer, value);
  }

  getTextStyle(): ResultType<"tguiChatBox_getTextStyle"> {
    return accessLib().symbols.tguiChatBox_getTextStyle(this.pointer);
  }

  setLinesStartFromTop(
    value: number,
  ): ResultType<"tguiChatBox_setLinesStartFromTop"> {
    return accessLib().symbols.tguiChatBox_setLinesStartFromTop(
      this.pointer,
      value,
    );
  }

  getLinesStartFromTop(): ResultType<"tguiChatBox_getLinesStartFromTop"> {
    return accessLib().symbols.tguiChatBox_getLinesStartFromTop(this.pointer);
  }

  setNewLinesBelowOthers(
    value: number,
  ): ResultType<"tguiChatBox_setNewLinesBelowOthers"> {
    return accessLib().symbols.tguiChatBox_setNewLinesBelowOthers(
      this.pointer,
      value,
    );
  }

  getNewLinesBelowOthers(): ResultType<"tguiChatBox_getNewLinesBelowOthers"> {
    return accessLib().symbols.tguiChatBox_getNewLinesBelowOthers(this.pointer);
  }
}

export class CheckBox extends RadioButton {
  constructor() {
    super(accessLib().symbols.tguiCheckBox_create());
  }
}

export class ColorPicker extends ChildWindow {
  constructor() {
    super(accessLib().symbols.tguiColorPicker_create());
  }

  setColor(value: BufferSource): ResultType<"tguiColorPicker_setColor"> {
    return accessLib().symbols.tguiColorPicker_setColor(this.pointer, value);
  }

  getColor(): ResultType<"tguiColorPicker_getColor"> {
    return accessLib().symbols.tguiColorPicker_getColor(this.pointer);
  }
}

export class ComboBox extends Widget {
  constructor() {
    super(accessLib().symbols.tguiComboBox_create());
  }

  setItemsToDisplay(
    value: bigint,
  ): ResultType<"tguiComboBox_setItemsToDisplay"> {
    return accessLib().symbols.tguiComboBox_setItemsToDisplay(
      this.pointer,
      value,
    );
  }

  getItemsToDisplay(): ResultType<"tguiComboBox_getItemsToDisplay"> {
    return accessLib().symbols.tguiComboBox_getItemsToDisplay(this.pointer);
  }

  addItem(
    item: BufferSource,
    id: BufferSource,
  ): ResultType<"tguiComboBox_addItem"> {
    return accessLib().symbols.tguiComboBox_addItem(this.pointer, item, id);
  }

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

  getItemById(id: BufferSource): ResultType<"tguiComboBox_getItemById"> {
    return accessLib().symbols.tguiComboBox_getItemById(this.pointer, id);
  }

  getItemByIndex(index: bigint): ResultType<"tguiComboBox_getItemByIndex"> {
    return accessLib().symbols.tguiComboBox_getItemByIndex(this.pointer, index);
  }

  getIndexById(id: BufferSource): ResultType<"tguiComboBox_getIndexById"> {
    return accessLib().symbols.tguiComboBox_getIndexById(this.pointer, id);
  }

  getIdByIndex(index: bigint): ResultType<"tguiComboBox_getIdByIndex"> {
    return accessLib().symbols.tguiComboBox_getIdByIndex(this.pointer, index);
  }

  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBox_getItems"> {
    return accessLib().symbols.tguiComboBox_getItems(this.pointer, returnCount);
  }

  getItemIds(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBox_getItemIds"> {
    return accessLib().symbols.tguiComboBox_getItemIds(
      this.pointer,
      returnCount,
    );
  }

  setSelectedItem(
    item: BufferSource,
  ): ResultType<"tguiComboBox_setSelectedItem"> {
    return accessLib().symbols.tguiComboBox_setSelectedItem(this.pointer, item);
  }

  setSelectedItemById(
    item: BufferSource,
  ): ResultType<"tguiComboBox_setSelectedItemById"> {
    return accessLib().symbols.tguiComboBox_setSelectedItemById(
      this.pointer,
      item,
    );
  }

  setSelectedItemByIndex(
    index: bigint,
  ): ResultType<"tguiComboBox_setSelectedItemByIndex"> {
    return accessLib().symbols.tguiComboBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  deselectItem(): ResultType<"tguiComboBox_deselectItem"> {
    return accessLib().symbols.tguiComboBox_deselectItem(this.pointer);
  }

  removeItem(item: BufferSource): ResultType<"tguiComboBox_removeItem"> {
    return accessLib().symbols.tguiComboBox_removeItem(this.pointer, item);
  }

  removeItemById(id: BufferSource): ResultType<"tguiComboBox_removeItemById"> {
    return accessLib().symbols.tguiComboBox_removeItemById(this.pointer, id);
  }

  removeItemByIndex(
    index: bigint,
  ): ResultType<"tguiComboBox_removeItemByIndex"> {
    return accessLib().symbols.tguiComboBox_removeItemByIndex(
      this.pointer,
      index,
    );
  }

  removeAllItems(): ResultType<"tguiComboBox_removeAllItems"> {
    return accessLib().symbols.tguiComboBox_removeAllItems(this.pointer);
  }

  getSelectedItem(): ResultType<"tguiComboBox_getSelectedItem"> {
    return accessLib().symbols.tguiComboBox_getSelectedItem(this.pointer);
  }

  getSelectedItemId(): ResultType<"tguiComboBox_getSelectedItemId"> {
    return accessLib().symbols.tguiComboBox_getSelectedItemId(this.pointer);
  }

  getSelectedItemIndex(): ResultType<"tguiComboBox_getSelectedItemIndex"> {
    return accessLib().symbols.tguiComboBox_getSelectedItemIndex(this.pointer);
  }

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

  getItemCount(): ResultType<"tguiComboBox_getItemCount"> {
    return accessLib().symbols.tguiComboBox_getItemCount(this.pointer);
  }

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

  getItemData(index: bigint): ResultType<"tguiComboBox_getItemData"> {
    return accessLib().symbols.tguiComboBox_getItemData(this.pointer, index);
  }

  setMaximumItems(value: bigint): ResultType<"tguiComboBox_setMaximumItems"> {
    return accessLib().symbols.tguiComboBox_setMaximumItems(
      this.pointer,
      value,
    );
  }

  getMaximumItems(): ResultType<"tguiComboBox_getMaximumItems"> {
    return accessLib().symbols.tguiComboBox_getMaximumItems(this.pointer);
  }

  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiComboBox_setDefaultText"> {
    return accessLib().symbols.tguiComboBox_setDefaultText(this.pointer, value);
  }

  getDefaultText(): ResultType<"tguiComboBox_getDefaultText"> {
    return accessLib().symbols.tguiComboBox_getDefaultText(this.pointer);
  }

  setExpandDirection(
    value: number,
  ): ResultType<"tguiComboBox_setExpandDirection"> {
    return accessLib().symbols.tguiComboBox_setExpandDirection(
      this.pointer,
      value,
    );
  }

  getExpandDirection(): ResultType<"tguiComboBox_getExpandDirection"> {
    return accessLib().symbols.tguiComboBox_getExpandDirection(this.pointer);
  }

  setChangeItemOnScroll(
    value: number,
  ): ResultType<"tguiComboBox_setChangeItemOnScroll"> {
    return accessLib().symbols.tguiComboBox_setChangeItemOnScroll(
      this.pointer,
      value,
    );
  }

  getChangeItemOnScroll(): ResultType<"tguiComboBox_getChangeItemOnScroll"> {
    return accessLib().symbols.tguiComboBox_getChangeItemOnScroll(this.pointer);
  }

  contains(item: BufferSource): ResultType<"tguiComboBox_contains"> {
    return accessLib().symbols.tguiComboBox_contains(this.pointer, item);
  }

  containsId(id: BufferSource): ResultType<"tguiComboBox_containsId"> {
    return accessLib().symbols.tguiComboBox_containsId(this.pointer, id);
  }
}

export class EditBox extends ClickableWidget {
  constructor() {
    super(accessLib().symbols.tguiEditBox_create());
  }

  setText(value: BufferSource): ResultType<"tguiEditBox_setText"> {
    return accessLib().symbols.tguiEditBox_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiEditBox_getText"> {
    return accessLib().symbols.tguiEditBox_getText(this.pointer);
  }

  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiEditBox_setDefaultText"> {
    return accessLib().symbols.tguiEditBox_setDefaultText(this.pointer, value);
  }

  getDefaultText(): ResultType<"tguiEditBox_getDefaultText"> {
    return accessLib().symbols.tguiEditBox_getDefaultText(this.pointer);
  }

  setPasswordCharacter(
    value: number,
  ): ResultType<"tguiEditBox_setPasswordCharacter"> {
    return accessLib().symbols.tguiEditBox_setPasswordCharacter(
      this.pointer,
      value,
    );
  }

  getPasswordCharacter(): ResultType<"tguiEditBox_getPasswordCharacter"> {
    return accessLib().symbols.tguiEditBox_getPasswordCharacter(this.pointer);
  }

  setMaximumCharacters(
    value: number,
  ): ResultType<"tguiEditBox_setMaximumCharacters"> {
    return accessLib().symbols.tguiEditBox_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  getMaximumCharacters(): ResultType<"tguiEditBox_getMaximumCharacters"> {
    return accessLib().symbols.tguiEditBox_getMaximumCharacters(this.pointer);
  }

  setAlignment(value: number): ResultType<"tguiEditBox_setAlignment"> {
    return accessLib().symbols.tguiEditBox_setAlignment(this.pointer, value);
  }

  getAlignment(): ResultType<"tguiEditBox_getAlignment"> {
    return accessLib().symbols.tguiEditBox_getAlignment(this.pointer);
  }

  setTextWidthLimited(
    value: number,
  ): ResultType<"tguiEditBox_setTextWidthLimited"> {
    return accessLib().symbols.tguiEditBox_setTextWidthLimited(
      this.pointer,
      value,
    );
  }

  isTextWidthLimited(): ResultType<"tguiEditBox_isTextWidthLimited"> {
    return accessLib().symbols.tguiEditBox_isTextWidthLimited(this.pointer);
  }

  setReadOnly(value: number): ResultType<"tguiEditBox_setReadOnly"> {
    return accessLib().symbols.tguiEditBox_setReadOnly(this.pointer, value);
  }

  isReadOnly(): ResultType<"tguiEditBox_isReadOnly"> {
    return accessLib().symbols.tguiEditBox_isReadOnly(this.pointer);
  }

  setCaretPosition(value: bigint): ResultType<"tguiEditBox_setCaretPosition"> {
    return accessLib().symbols.tguiEditBox_setCaretPosition(
      this.pointer,
      value,
    );
  }

  getCaretPosition(): ResultType<"tguiEditBox_getCaretPosition"> {
    return accessLib().symbols.tguiEditBox_getCaretPosition(this.pointer);
  }

  setSuffix(value: BufferSource): ResultType<"tguiEditBox_setSuffix"> {
    return accessLib().symbols.tguiEditBox_setSuffix(this.pointer, value);
  }

  getSuffix(): ResultType<"tguiEditBox_getSuffix"> {
    return accessLib().symbols.tguiEditBox_getSuffix(this.pointer);
  }

  setInputValidator(
    regex: BufferSource,
  ): ResultType<"tguiEditBox_setInputValidator"> {
    return accessLib().symbols.tguiEditBox_setInputValidator(
      this.pointer,
      regex,
    );
  }

  getInputValidator(): ResultType<"tguiEditBox_getInputValidator"> {
    return accessLib().symbols.tguiEditBox_getInputValidator(this.pointer);
  }

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

  getSelectedText(): ResultType<"tguiEditBox_getSelectedText"> {
    return accessLib().symbols.tguiEditBox_getSelectedText(this.pointer);
  }
}

export class EditBoxSlider {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor() {
    this.ptr = accessLib().symbols.tguiEditBoxSlider_create();
  }

  getEditBoxRenderer(): ResultType<"tguiEditBoxSlider_getEditBoxRenderer"> {
    return accessLib().symbols.tguiEditBoxSlider_getEditBoxRenderer(
      this.pointer,
    );
  }

  getEditBoxSharedRenderer(): ResultType<
    "tguiEditBoxSlider_getEditBoxSharedRenderer"
  > {
    return accessLib().symbols.tguiEditBoxSlider_getEditBoxSharedRenderer(
      this.pointer,
    );
  }

  getSliderRenderer(): ResultType<"tguiEditBoxSlider_getSliderRenderer"> {
    return accessLib().symbols.tguiEditBoxSlider_getSliderRenderer(
      this.pointer,
    );
  }

  getSliderSharedRenderer(): ResultType<
    "tguiEditBoxSlider_getSliderSharedRenderer"
  > {
    return accessLib().symbols.tguiEditBoxSlider_getSliderSharedRenderer(
      this.pointer,
    );
  }

  setValue(value: number): ResultType<"tguiEditBoxSlider_setValue"> {
    return accessLib().symbols.tguiEditBoxSlider_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiEditBoxSlider_getValue"> {
    return accessLib().symbols.tguiEditBoxSlider_getValue(this.pointer);
  }

  setMinimum(value: number): ResultType<"tguiEditBoxSlider_setMinimum"> {
    return accessLib().symbols.tguiEditBoxSlider_setMinimum(
      this.pointer,
      value,
    );
  }

  getMinimum(): ResultType<"tguiEditBoxSlider_getMinimum"> {
    return accessLib().symbols.tguiEditBoxSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiEditBoxSlider_setMaximum"> {
    return accessLib().symbols.tguiEditBoxSlider_setMaximum(
      this.pointer,
      value,
    );
  }

  getMaximum(): ResultType<"tguiEditBoxSlider_getMaximum"> {
    return accessLib().symbols.tguiEditBoxSlider_getMaximum(this.pointer);
  }

  setStep(value: number): ResultType<"tguiEditBoxSlider_setStep"> {
    return accessLib().symbols.tguiEditBoxSlider_setStep(this.pointer, value);
  }

  getStep(): ResultType<"tguiEditBoxSlider_getStep"> {
    return accessLib().symbols.tguiEditBoxSlider_getStep(this.pointer);
  }

  setDecimalPlaces(
    value: number,
  ): ResultType<"tguiEditBoxSlider_setDecimalPlaces"> {
    return accessLib().symbols.tguiEditBoxSlider_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  getDecimalPlaces(): ResultType<"tguiEditBoxSlider_getDecimalPlaces"> {
    return accessLib().symbols.tguiEditBoxSlider_getDecimalPlaces(this.pointer);
  }

  setTextAlignment(
    value: number,
  ): ResultType<"tguiEditBoxSlider_setTextAlignment"> {
    return accessLib().symbols.tguiEditBoxSlider_setTextAlignment(
      this.pointer,
      value,
    );
  }

  getTextAlignment(): ResultType<"tguiEditBoxSlider_getTextAlignment"> {
    return accessLib().symbols.tguiEditBoxSlider_getTextAlignment(this.pointer);
  }
}

export class FileDialog extends ChildWindow {
  constructor() {
    super(accessLib().symbols.tguiFileDialog_create());
  }

  setFilename(value: BufferSource): ResultType<"tguiFileDialog_setFilename"> {
    return accessLib().symbols.tguiFileDialog_setFilename(this.pointer, value);
  }

  getFilename(): ResultType<"tguiFileDialog_getFilename"> {
    return accessLib().symbols.tguiFileDialog_getFilename(this.pointer);
  }

  getFileTypeFiltersIndex(): ResultType<
    "tguiFileDialog_getFileTypeFiltersIndex"
  > {
    return accessLib().symbols.tguiFileDialog_getFileTypeFiltersIndex(
      this.pointer,
    );
  }

  setConfirmButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setConfirmButtonText"> {
    return accessLib().symbols.tguiFileDialog_setConfirmButtonText(
      this.pointer,
      value,
    );
  }

  getConfirmButtonText(): ResultType<"tguiFileDialog_getConfirmButtonText"> {
    return accessLib().symbols.tguiFileDialog_getConfirmButtonText(
      this.pointer,
    );
  }

  setCancelButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setCancelButtonText"> {
    return accessLib().symbols.tguiFileDialog_setCancelButtonText(
      this.pointer,
      value,
    );
  }

  getCancelButtonText(): ResultType<"tguiFileDialog_getCancelButtonText"> {
    return accessLib().symbols.tguiFileDialog_getCancelButtonText(this.pointer);
  }

  setCreateFolderButtonText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setCreateFolderButtonText"> {
    return accessLib().symbols.tguiFileDialog_setCreateFolderButtonText(
      this.pointer,
      value,
    );
  }

  getCreateFolderButtonText(): ResultType<
    "tguiFileDialog_getCreateFolderButtonText"
  > {
    return accessLib().symbols.tguiFileDialog_getCreateFolderButtonText(
      this.pointer,
    );
  }

  setFilenameLabelText(
    value: BufferSource,
  ): ResultType<"tguiFileDialog_setFilenameLabelText"> {
    return accessLib().symbols.tguiFileDialog_setFilenameLabelText(
      this.pointer,
      value,
    );
  }

  getFilenameLabelText(): ResultType<"tguiFileDialog_getFilenameLabelText"> {
    return accessLib().symbols.tguiFileDialog_getFilenameLabelText(
      this.pointer,
    );
  }

  setAllowCreateFolder(
    value: number,
  ): ResultType<"tguiFileDialog_setAllowCreateFolder"> {
    return accessLib().symbols.tguiFileDialog_setAllowCreateFolder(
      this.pointer,
      value,
    );
  }

  getAllowCreateFolder(): ResultType<"tguiFileDialog_getAllowCreateFolder"> {
    return accessLib().symbols.tguiFileDialog_getAllowCreateFolder(
      this.pointer,
    );
  }

  setFileMustExist(
    value: number,
  ): ResultType<"tguiFileDialog_setFileMustExist"> {
    return accessLib().symbols.tguiFileDialog_setFileMustExist(
      this.pointer,
      value,
    );
  }

  getFileMustExist(): ResultType<"tguiFileDialog_getFileMustExist"> {
    return accessLib().symbols.tguiFileDialog_getFileMustExist(this.pointer);
  }

  setSelectingDirectory(
    value: number,
  ): ResultType<"tguiFileDialog_setSelectingDirectory"> {
    return accessLib().symbols.tguiFileDialog_setSelectingDirectory(
      this.pointer,
      value,
    );
  }

  getSelectingDirectory(): ResultType<"tguiFileDialog_getSelectingDirectory"> {
    return accessLib().symbols.tguiFileDialog_getSelectingDirectory(
      this.pointer,
    );
  }

  setMultiSelect(value: number): ResultType<"tguiFileDialog_setMultiSelect"> {
    return accessLib().symbols.tguiFileDialog_setMultiSelect(
      this.pointer,
      value,
    );
  }

  getMultiSelect(): ResultType<"tguiFileDialog_getMultiSelect"> {
    return accessLib().symbols.tguiFileDialog_getMultiSelect(this.pointer);
  }

  setPath(
    widget: Deno.PointerValue<unknown>,
    path: BufferSource,
  ): ResultType<"tguiFileDialog_setPath"> {
    return accessLib().symbols.tguiFileDialog_setPath(widget, path);
  }

  getPath(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getPath"> {
    return accessLib().symbols.tguiFileDialog_getPath(widget);
  }

  getSelectedPaths(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getSelectedPaths"> {
    return accessLib().symbols.tguiFileDialog_getSelectedPaths(widget, count);
  }

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

  getFileTypeFilters(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getFileTypeFilters"> {
    return accessLib().symbols.tguiFileDialog_getFileTypeFilters(widget, count);
  }

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

  getListViewColumnCaptionsName(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getListViewColumnCaptionsName"> {
    return accessLib().symbols.tguiFileDialog_getListViewColumnCaptionsName(
      widget,
    );
  }

  getListViewColumnCaptionsSize(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialog_getListViewColumnCaptionsSize"> {
    return accessLib().symbols.tguiFileDialog_getListViewColumnCaptionsSize(
      widget,
    );
  }

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

  constructor(name: BufferSource) {
    this.ptr = accessLib().symbols.tguiFileDialogFilter_create(name);
  }

  destroy(
    filter: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogFilter_destroy"> {
    return accessLib().symbols.tguiFileDialogFilter_destroy(filter);
  }

  addExpression(
    filter: Deno.PointerValue<unknown>,
    expression: BufferSource,
  ): ResultType<"tguiFileDialogFilter_addExpression"> {
    return accessLib().symbols.tguiFileDialogFilter_addExpression(
      filter,
      expression,
    );
  }

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
  constructor() {
    super(accessLib().symbols.tguiGrid_create());
  }

  setAutoSize(value: number): ResultType<"tguiGrid_setAutoSize"> {
    return accessLib().symbols.tguiGrid_setAutoSize(this.pointer, value);
  }

  getAutoSize(): ResultType<"tguiGrid_getAutoSize"> {
    return accessLib().symbols.tguiGrid_getAutoSize(this.pointer);
  }

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

  getWidget(row: bigint, col: bigint): ResultType<"tguiGrid_getWidget"> {
    return accessLib().symbols.tguiGrid_getWidget(this.pointer, row, col);
  }

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

  getWidgetAlignment(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetAlignment"> {
    return accessLib().symbols.tguiGrid_getWidgetAlignment(
      this.pointer,
      widget,
    );
  }

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

  getWidgetPadding(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetPadding"> {
    return accessLib().symbols.tguiGrid_getWidgetPadding(this.pointer, widget);
  }

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

  getWidgetLocations(
    grid: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiGrid_getWidgetLocations"> {
    return accessLib().symbols.tguiGrid_getWidgetLocations(grid, count);
  }
}

export class GridWidgetLocation {
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
  constructor() {
    super(accessLib().symbols.tguiHorizontalLayout_create());
  }
}

export class HorizontalWrap extends BoxLayout {
  constructor() {
    super(accessLib().symbols.tguiHorizontalWrap_create());
  }
}

export class Knob extends Widget {
  constructor() {
    super(accessLib().symbols.tguiKnob_create());
  }

  setStartRotation(value: number): ResultType<"tguiKnob_setStartRotation"> {
    return accessLib().symbols.tguiKnob_setStartRotation(this.pointer, value);
  }

  getStartRotation(): ResultType<"tguiKnob_getStartRotation"> {
    return accessLib().symbols.tguiKnob_getStartRotation(this.pointer);
  }

  setEndRotation(value: number): ResultType<"tguiKnob_setEndRotation"> {
    return accessLib().symbols.tguiKnob_setEndRotation(this.pointer, value);
  }

  getEndRotation(): ResultType<"tguiKnob_getEndRotation"> {
    return accessLib().symbols.tguiKnob_getEndRotation(this.pointer);
  }

  setMinimum(value: number): ResultType<"tguiKnob_setMinimum"> {
    return accessLib().symbols.tguiKnob_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiKnob_getMinimum"> {
    return accessLib().symbols.tguiKnob_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiKnob_setMaximum"> {
    return accessLib().symbols.tguiKnob_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiKnob_getMaximum"> {
    return accessLib().symbols.tguiKnob_getMaximum(this.pointer);
  }

  setValue(value: number): ResultType<"tguiKnob_setValue"> {
    return accessLib().symbols.tguiKnob_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiKnob_getValue"> {
    return accessLib().symbols.tguiKnob_getValue(this.pointer);
  }

  setClockwiseTurning(
    value: number,
  ): ResultType<"tguiKnob_setClockwiseTurning"> {
    return accessLib().symbols.tguiKnob_setClockwiseTurning(
      this.pointer,
      value,
    );
  }

  getClockwiseTurning(): ResultType<"tguiKnob_getClockwiseTurning"> {
    return accessLib().symbols.tguiKnob_getClockwiseTurning(this.pointer);
  }
}

export class ListBox extends Widget {
  constructor() {
    super(accessLib().symbols.tguiListBox_create());
  }

  addItem(
    item: BufferSource,
    id: BufferSource,
  ): ResultType<"tguiListBox_addItem"> {
    return accessLib().symbols.tguiListBox_addItem(this.pointer, item, id);
  }

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

  getItemById(id: BufferSource): ResultType<"tguiListBox_getItemById"> {
    return accessLib().symbols.tguiListBox_getItemById(this.pointer, id);
  }

  getItemByIndex(index: bigint): ResultType<"tguiListBox_getItemByIndex"> {
    return accessLib().symbols.tguiListBox_getItemByIndex(this.pointer, index);
  }

  getIndexById(id: BufferSource): ResultType<"tguiListBox_getIndexById"> {
    return accessLib().symbols.tguiListBox_getIndexById(this.pointer, id);
  }

  getIdByIndex(index: bigint): ResultType<"tguiListBox_getIdByIndex"> {
    return accessLib().symbols.tguiListBox_getIdByIndex(this.pointer, index);
  }

  setSelectedItem(
    item: BufferSource,
  ): ResultType<"tguiListBox_setSelectedItem"> {
    return accessLib().symbols.tguiListBox_setSelectedItem(this.pointer, item);
  }

  setSelectedItemById(
    id: BufferSource,
  ): ResultType<"tguiListBox_setSelectedItemById"> {
    return accessLib().symbols.tguiListBox_setSelectedItemById(
      this.pointer,
      id,
    );
  }

  setSelectedItemByIndex(
    index: bigint,
  ): ResultType<"tguiListBox_setSelectedItemByIndex"> {
    return accessLib().symbols.tguiListBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  deselectItem(): ResultType<"tguiListBox_deselectItem"> {
    return accessLib().symbols.tguiListBox_deselectItem(this.pointer);
  }

  removeItem(item: BufferSource): ResultType<"tguiListBox_removeItem"> {
    return accessLib().symbols.tguiListBox_removeItem(this.pointer, item);
  }

  removeItemById(id: BufferSource): ResultType<"tguiListBox_removeItemById"> {
    return accessLib().symbols.tguiListBox_removeItemById(this.pointer, id);
  }

  removeItemByIndex(
    index: bigint,
  ): ResultType<"tguiListBox_removeItemByIndex"> {
    return accessLib().symbols.tguiListBox_removeItemByIndex(
      this.pointer,
      index,
    );
  }

  removeAllItems(): ResultType<"tguiListBox_removeAllItems"> {
    return accessLib().symbols.tguiListBox_removeAllItems(this.pointer);
  }

  getSelectedItem(): ResultType<"tguiListBox_getSelectedItem"> {
    return accessLib().symbols.tguiListBox_getSelectedItem(this.pointer);
  }

  getSelectedItemId(): ResultType<"tguiListBox_getSelectedItemId"> {
    return accessLib().symbols.tguiListBox_getSelectedItemId(this.pointer);
  }

  getSelectedItemIndex(): ResultType<"tguiListBox_getSelectedItemIndex"> {
    return accessLib().symbols.tguiListBox_getSelectedItemIndex(this.pointer);
  }

  getHoveredItemIndex(): ResultType<"tguiListBox_getHoveredItemIndex"> {
    return accessLib().symbols.tguiListBox_getHoveredItemIndex(this.pointer);
  }

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

  getItemCount(): ResultType<"tguiListBox_getItemCount"> {
    return accessLib().symbols.tguiListBox_getItemCount(this.pointer);
  }

  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBox_getItems"> {
    return accessLib().symbols.tguiListBox_getItems(this.pointer, returnCount);
  }

  getItemIds(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBox_getItemIds"> {
    return accessLib().symbols.tguiListBox_getItemIds(
      this.pointer,
      returnCount,
    );
  }

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

  getItemData(index: bigint): ResultType<"tguiListBox_getItemData"> {
    return accessLib().symbols.tguiListBox_getItemData(this.pointer, index);
  }

  setItemHeight(value: number): ResultType<"tguiListBox_setItemHeight"> {
    return accessLib().symbols.tguiListBox_setItemHeight(this.pointer, value);
  }

  getItemHeight(): ResultType<"tguiListBox_getItemHeight"> {
    return accessLib().symbols.tguiListBox_getItemHeight(this.pointer);
  }

  setMaximumItems(value: bigint): ResultType<"tguiListBox_setMaximumItems"> {
    return accessLib().symbols.tguiListBox_setMaximumItems(this.pointer, value);
  }

  getMaximumItems(): ResultType<"tguiListBox_getMaximumItems"> {
    return accessLib().symbols.tguiListBox_getMaximumItems(this.pointer);
  }

  setAutoScroll(value: number): ResultType<"tguiListBox_setAutoScroll"> {
    return accessLib().symbols.tguiListBox_setAutoScroll(this.pointer, value);
  }

  getAutoScroll(): ResultType<"tguiListBox_getAutoScroll"> {
    return accessLib().symbols.tguiListBox_getAutoScroll(this.pointer);
  }

  setTextAlignment(value: number): ResultType<"tguiListBox_setTextAlignment"> {
    return accessLib().symbols.tguiListBox_setTextAlignment(
      this.pointer,
      value,
    );
  }

  getTextAlignment(): ResultType<"tguiListBox_getTextAlignment"> {
    return accessLib().symbols.tguiListBox_getTextAlignment(this.pointer);
  }

  contains(item: BufferSource): ResultType<"tguiListBox_contains"> {
    return accessLib().symbols.tguiListBox_contains(this.pointer, item);
  }

  containsId(id: BufferSource): ResultType<"tguiListBox_containsId"> {
    return accessLib().symbols.tguiListBox_containsId(this.pointer, id);
  }
}

export class ListView extends Widget {
  constructor() {
    super(accessLib().symbols.tguiListView_create());
  }

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

  getColumnText(index: bigint): ResultType<"tguiListView_getColumnText"> {
    return accessLib().symbols.tguiListView_getColumnText(this.pointer, index);
  }

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

  getColumnWidth(index: bigint): ResultType<"tguiListView_getColumnWidth"> {
    return accessLib().symbols.tguiListView_getColumnWidth(this.pointer, index);
  }

  getColumnDesignWidth(
    index: bigint,
  ): ResultType<"tguiListView_getColumnDesignWidth"> {
    return accessLib().symbols.tguiListView_getColumnDesignWidth(
      this.pointer,
      index,
    );
  }

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

  getColumnAlignment(
    index: bigint,
  ): ResultType<"tguiListView_getColumnAlignment"> {
    return accessLib().symbols.tguiListView_getColumnAlignment(
      this.pointer,
      index,
    );
  }

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

  getColumnAutoResize(
    index: bigint,
  ): ResultType<"tguiListView_getColumnAutoResize"> {
    return accessLib().symbols.tguiListView_getColumnAutoResize(
      this.pointer,
      index,
    );
  }

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

  getColumnExpanded(
    index: bigint,
  ): ResultType<"tguiListView_getColumnExpanded"> {
    return accessLib().symbols.tguiListView_getColumnExpanded(
      this.pointer,
      index,
    );
  }

  removeAllColumns(): ResultType<"tguiListView_removeAllColumns"> {
    return accessLib().symbols.tguiListView_removeAllColumns(this.pointer);
  }

  getColumnCount(): ResultType<"tguiListView_getColumnCount"> {
    return accessLib().symbols.tguiListView_getColumnCount(this.pointer);
  }

  setHeaderVisible(value: number): ResultType<"tguiListView_setHeaderVisible"> {
    return accessLib().symbols.tguiListView_setHeaderVisible(
      this.pointer,
      value,
    );
  }

  getHeaderVisible(): ResultType<"tguiListView_getHeaderVisible"> {
    return accessLib().symbols.tguiListView_getHeaderVisible(this.pointer);
  }

  setHeaderHeight(value: number): ResultType<"tguiListView_setHeaderHeight"> {
    return accessLib().symbols.tguiListView_setHeaderHeight(
      this.pointer,
      value,
    );
  }

  getHeaderHeight(): ResultType<"tguiListView_getHeaderHeight"> {
    return accessLib().symbols.tguiListView_getHeaderHeight(this.pointer);
  }

  getCurrentHeaderHeight(): ResultType<"tguiListView_getCurrentHeaderHeight"> {
    return accessLib().symbols.tguiListView_getCurrentHeaderHeight(
      this.pointer,
    );
  }

  addItem(text: BufferSource): ResultType<"tguiListView_addItem"> {
    return accessLib().symbols.tguiListView_addItem(this.pointer, text);
  }

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

  removeItem(index: bigint): ResultType<"tguiListView_removeItem"> {
    return accessLib().symbols.tguiListView_removeItem(this.pointer, index);
  }

  removeAllItems(): ResultType<"tguiListView_removeAllItems"> {
    return accessLib().symbols.tguiListView_removeAllItems(this.pointer);
  }

  setSelectedItem(index: bigint): ResultType<"tguiListView_setSelectedItem"> {
    return accessLib().symbols.tguiListView_setSelectedItem(
      this.pointer,
      index,
    );
  }

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

  getSelectedItemIndex(): ResultType<"tguiListView_getSelectedItemIndex"> {
    return accessLib().symbols.tguiListView_getSelectedItemIndex(this.pointer);
  }

  getHoveredItemIndex(): ResultType<"tguiListView_getHoveredItemIndex"> {
    return accessLib().symbols.tguiListView_getHoveredItemIndex(this.pointer);
  }

  getSelectedItemIndices(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_getSelectedItemIndices"> {
    return accessLib().symbols.tguiListView_getSelectedItemIndices(
      this.pointer,
      returnCount,
    );
  }

  deselectItems(): ResultType<"tguiListView_deselectItems"> {
    return accessLib().symbols.tguiListView_deselectItems(this.pointer);
  }

  setMultiSelect(value: number): ResultType<"tguiListView_setMultiSelect"> {
    return accessLib().symbols.tguiListView_setMultiSelect(this.pointer, value);
  }

  getMultiSelect(): ResultType<"tguiListView_getMultiSelect"> {
    return accessLib().symbols.tguiListView_getMultiSelect(this.pointer);
  }

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

  getItemData(index: bigint): ResultType<"tguiListView_getItemData"> {
    return accessLib().symbols.tguiListView_getItemData(this.pointer, index);
  }

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

  getItemCount(): ResultType<"tguiListView_getItemCount"> {
    return accessLib().symbols.tguiListView_getItemCount(this.pointer);
  }

  getItem(index: bigint): ResultType<"tguiListView_getItem"> {
    return accessLib().symbols.tguiListView_getItem(this.pointer, index);
  }

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

  getItems(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_getItems"> {
    return accessLib().symbols.tguiListView_getItems(this.pointer, returnCount);
  }

  setItemHeight(value: number): ResultType<"tguiListView_setItemHeight"> {
    return accessLib().symbols.tguiListView_setItemHeight(this.pointer, value);
  }

  getItemHeight(): ResultType<"tguiListView_getItemHeight"> {
    return accessLib().symbols.tguiListView_getItemHeight(this.pointer);
  }

  setHeaderTextSize(
    value: number,
  ): ResultType<"tguiListView_setHeaderTextSize"> {
    return accessLib().symbols.tguiListView_setHeaderTextSize(
      this.pointer,
      value,
    );
  }

  getHeaderTextSize(): ResultType<"tguiListView_getHeaderTextSize"> {
    return accessLib().symbols.tguiListView_getHeaderTextSize(this.pointer);
  }

  setSeparatorWidth(
    value: number,
  ): ResultType<"tguiListView_setSeparatorWidth"> {
    return accessLib().symbols.tguiListView_setSeparatorWidth(
      this.pointer,
      value,
    );
  }

  getSeparatorWidth(): ResultType<"tguiListView_getSeparatorWidth"> {
    return accessLib().symbols.tguiListView_getSeparatorWidth(this.pointer);
  }

  setHeaderSeparatorHeight(
    value: number,
  ): ResultType<"tguiListView_setHeaderSeparatorHeight"> {
    return accessLib().symbols.tguiListView_setHeaderSeparatorHeight(
      this.pointer,
      value,
    );
  }

  getHeaderSeparatorHeight(): ResultType<
    "tguiListView_getHeaderSeparatorHeight"
  > {
    return accessLib().symbols.tguiListView_getHeaderSeparatorHeight(
      this.pointer,
    );
  }

  setGridLinesWidth(
    value: number,
  ): ResultType<"tguiListView_setGridLinesWidth"> {
    return accessLib().symbols.tguiListView_setGridLinesWidth(
      this.pointer,
      value,
    );
  }

  getGridLinesWidth(): ResultType<"tguiListView_getGridLinesWidth"> {
    return accessLib().symbols.tguiListView_getGridLinesWidth(this.pointer);
  }

  setAutoScroll(value: number): ResultType<"tguiListView_setAutoScroll"> {
    return accessLib().symbols.tguiListView_setAutoScroll(this.pointer, value);
  }

  getAutoScroll(): ResultType<"tguiListView_getAutoScroll"> {
    return accessLib().symbols.tguiListView_getAutoScroll(this.pointer);
  }

  setShowVerticalGridLines(
    value: number,
  ): ResultType<"tguiListView_setShowVerticalGridLines"> {
    return accessLib().symbols.tguiListView_setShowVerticalGridLines(
      this.pointer,
      value,
    );
  }

  getShowVerticalGridLines(): ResultType<
    "tguiListView_getShowVerticalGridLines"
  > {
    return accessLib().symbols.tguiListView_getShowVerticalGridLines(
      this.pointer,
    );
  }

  setShowHorizontalGridLines(
    value: number,
  ): ResultType<"tguiListView_setShowHorizontalGridLines"> {
    return accessLib().symbols.tguiListView_setShowHorizontalGridLines(
      this.pointer,
      value,
    );
  }

  getShowHorizontalGridLines(): ResultType<
    "tguiListView_getShowHorizontalGridLines"
  > {
    return accessLib().symbols.tguiListView_getShowHorizontalGridLines(
      this.pointer,
    );
  }

  setFixedIconSize(
    value: BufferSource,
  ): ResultType<"tguiListView_setFixedIconSize"> {
    return accessLib().symbols.tguiListView_setFixedIconSize(
      this.pointer,
      value,
    );
  }

  getFixedIconSize(): ResultType<"tguiListView_getFixedIconSize"> {
    return accessLib().symbols.tguiListView_getFixedIconSize(this.pointer);
  }

  setResizableColumns(
    value: number,
  ): ResultType<"tguiListView_setResizableColumns"> {
    return accessLib().symbols.tguiListView_setResizableColumns(
      this.pointer,
      value,
    );
  }

  getResizableColumns(): ResultType<"tguiListView_getResizableColumns"> {
    return accessLib().symbols.tguiListView_getResizableColumns(this.pointer);
  }

  sort(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
    callback: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListView_sort"> {
    return accessLib().symbols.tguiListView_sort(widget, index, callback);
  }
}

export class MenuBar extends Widget {
  constructor() {
    super(accessLib().symbols.tguiMenuBar_create());
  }

  addMenu(text: BufferSource): ResultType<"tguiMenuBar_addMenu"> {
    return accessLib().symbols.tguiMenuBar_addMenu(this.pointer, text);
  }

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

  addMenuItemToLastMenu(
    text: BufferSource,
  ): ResultType<"tguiMenuBar_addMenuItemToLastMenu"> {
    return accessLib().symbols.tguiMenuBar_addMenuItemToLastMenu(
      this.pointer,
      text,
    );
  }

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

  removeMenu(menu: BufferSource): ResultType<"tguiMenuBar_removeMenu"> {
    return accessLib().symbols.tguiMenuBar_removeMenu(this.pointer, menu);
  }

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

  removeAllMenus(): ResultType<"tguiMenuBar_removeAllMenus"> {
    return accessLib().symbols.tguiMenuBar_removeAllMenus(this.pointer);
  }

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

  getMenuEnabled(text: BufferSource): ResultType<"tguiMenuBar_getMenuEnabled"> {
    return accessLib().symbols.tguiMenuBar_getMenuEnabled(this.pointer, text);
  }

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

  closeMenu(): ResultType<"tguiMenuBar_closeMenu"> {
    return accessLib().symbols.tguiMenuBar_closeMenu(this.pointer);
  }

  setMinimumSubMenuWidth(
    value: number,
  ): ResultType<"tguiMenuBar_setMinimumSubMenuWidth"> {
    return accessLib().symbols.tguiMenuBar_setMinimumSubMenuWidth(
      this.pointer,
      value,
    );
  }

  getMinimumSubMenuWidth(): ResultType<"tguiMenuBar_getMinimumSubMenuWidth"> {
    return accessLib().symbols.tguiMenuBar_getMinimumSubMenuWidth(this.pointer);
  }

  setInvertedMenuDirection(
    value: number,
  ): ResultType<"tguiMenuBar_setInvertedMenuDirection"> {
    return accessLib().symbols.tguiMenuBar_setInvertedMenuDirection(
      this.pointer,
      value,
    );
  }

  getInvertedMenuDirection(): ResultType<
    "tguiMenuBar_getInvertedMenuDirection"
  > {
    return accessLib().symbols.tguiMenuBar_getInvertedMenuDirection(
      this.pointer,
    );
  }

  getMenus(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBar_getMenus"> {
    return accessLib().symbols.tguiMenuBar_getMenus(widget);
  }
}

export class MenuBarMenuList {
  destroy(
    menuList: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarMenuList_destroy"> {
    return accessLib().symbols.tguiMenuBarMenuList_destroy(menuList);
  }
}

export class MessageBox extends ChildWindow {
  constructor() {
    super(accessLib().symbols.tguiMessageBox_create());
  }

  setText(value: BufferSource): ResultType<"tguiMessageBox_setText"> {
    return accessLib().symbols.tguiMessageBox_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiMessageBox_getText"> {
    return accessLib().symbols.tguiMessageBox_getText(this.pointer);
  }

  addButton(text: BufferSource): ResultType<"tguiMessageBox_addButton"> {
    return accessLib().symbols.tguiMessageBox_addButton(this.pointer, text);
  }

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

  getButtons(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMessageBox_getButtons"> {
    return accessLib().symbols.tguiMessageBox_getButtons(
      this.pointer,
      returnCount,
    );
  }

  setLabelAlignment(
    value: number,
  ): ResultType<"tguiMessageBox_setLabelAlignment"> {
    return accessLib().symbols.tguiMessageBox_setLabelAlignment(
      this.pointer,
      value,
    );
  }

  getLabelAlignment(): ResultType<"tguiMessageBox_getLabelAlignment"> {
    return accessLib().symbols.tguiMessageBox_getLabelAlignment(this.pointer);
  }

  setButtonAlignment(
    value: number,
  ): ResultType<"tguiMessageBox_setButtonAlignment"> {
    return accessLib().symbols.tguiMessageBox_setButtonAlignment(
      this.pointer,
      value,
    );
  }

  getButtonAlignment(): ResultType<"tguiMessageBox_getButtonAlignment"> {
    return accessLib().symbols.tguiMessageBox_getButtonAlignment(this.pointer);
  }
}

export class Picture extends ClickableWidget {
  constructor() {
    super(accessLib().symbols.tguiPicture_create());
  }
}

export class ProgressBar extends ClickableWidget {
  constructor() {
    super(accessLib().symbols.tguiProgressBar_create());
  }

  setMinimum(value: number): ResultType<"tguiProgressBar_setMinimum"> {
    return accessLib().symbols.tguiProgressBar_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiProgressBar_getMinimum"> {
    return accessLib().symbols.tguiProgressBar_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiProgressBar_setMaximum"> {
    return accessLib().symbols.tguiProgressBar_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiProgressBar_getMaximum"> {
    return accessLib().symbols.tguiProgressBar_getMaximum(this.pointer);
  }

  setValue(value: number): ResultType<"tguiProgressBar_setValue"> {
    return accessLib().symbols.tguiProgressBar_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiProgressBar_getValue"> {
    return accessLib().symbols.tguiProgressBar_getValue(this.pointer);
  }

  incrementValue(): ResultType<"tguiProgressBar_incrementValue"> {
    return accessLib().symbols.tguiProgressBar_incrementValue(this.pointer);
  }

  setText(value: BufferSource): ResultType<"tguiProgressBar_setText"> {
    return accessLib().symbols.tguiProgressBar_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiProgressBar_getText"> {
    return accessLib().symbols.tguiProgressBar_getText(this.pointer);
  }

  setFillDirection(
    value: number,
  ): ResultType<"tguiProgressBar_setFillDirection"> {
    return accessLib().symbols.tguiProgressBar_setFillDirection(
      this.pointer,
      value,
    );
  }

  getFillDirection(): ResultType<"tguiProgressBar_getFillDirection"> {
    return accessLib().symbols.tguiProgressBar_getFillDirection(this.pointer);
  }
}

export class RadioButtonGroup extends Container {
  constructor() {
    super(accessLib().symbols.tguiRadioButtonGroup_create());
  }

  uncheckRadioButtons(): ResultType<
    "tguiRadioButtonGroup_uncheckRadioButtons"
  > {
    return accessLib().symbols.tguiRadioButtonGroup_uncheckRadioButtons(
      this.pointer,
    );
  }
}

export class RangeSlider extends Widget {
  constructor() {
    super(accessLib().symbols.tguiRangeSlider_create());
  }

  setMinimum(value: number): ResultType<"tguiRangeSlider_setMinimum"> {
    return accessLib().symbols.tguiRangeSlider_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiRangeSlider_getMinimum"> {
    return accessLib().symbols.tguiRangeSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiRangeSlider_setMaximum"> {
    return accessLib().symbols.tguiRangeSlider_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiRangeSlider_getMaximum"> {
    return accessLib().symbols.tguiRangeSlider_getMaximum(this.pointer);
  }

  setSelectionStart(
    value: number,
  ): ResultType<"tguiRangeSlider_setSelectionStart"> {
    return accessLib().symbols.tguiRangeSlider_setSelectionStart(
      this.pointer,
      value,
    );
  }

  getSelectionStart(): ResultType<"tguiRangeSlider_getSelectionStart"> {
    return accessLib().symbols.tguiRangeSlider_getSelectionStart(this.pointer);
  }

  setSelectionEnd(
    value: number,
  ): ResultType<"tguiRangeSlider_setSelectionEnd"> {
    return accessLib().symbols.tguiRangeSlider_setSelectionEnd(
      this.pointer,
      value,
    );
  }

  getSelectionEnd(): ResultType<"tguiRangeSlider_getSelectionEnd"> {
    return accessLib().symbols.tguiRangeSlider_getSelectionEnd(this.pointer);
  }

  setStep(value: number): ResultType<"tguiRangeSlider_setStep"> {
    return accessLib().symbols.tguiRangeSlider_setStep(this.pointer, value);
  }

  getStep(): ResultType<"tguiRangeSlider_getStep"> {
    return accessLib().symbols.tguiRangeSlider_getStep(this.pointer);
  }
}

export class Scrollbar extends Widget {
  constructor() {
    super(accessLib().symbols.tguiScrollbar_create());
  }

  setViewportSize(value: number): ResultType<"tguiScrollbar_setViewportSize"> {
    return accessLib().symbols.tguiScrollbar_setViewportSize(
      this.pointer,
      value,
    );
  }

  getViewportSize(): ResultType<"tguiScrollbar_getViewportSize"> {
    return accessLib().symbols.tguiScrollbar_getViewportSize(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiScrollbar_setMaximum"> {
    return accessLib().symbols.tguiScrollbar_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiScrollbar_getMaximum"> {
    return accessLib().symbols.tguiScrollbar_getMaximum(this.pointer);
  }

  setValue(value: number): ResultType<"tguiScrollbar_setValue"> {
    return accessLib().symbols.tguiScrollbar_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiScrollbar_getValue"> {
    return accessLib().symbols.tguiScrollbar_getValue(this.pointer);
  }

  setScrollAmount(value: number): ResultType<"tguiScrollbar_setScrollAmount"> {
    return accessLib().symbols.tguiScrollbar_setScrollAmount(
      this.pointer,
      value,
    );
  }

  getScrollAmount(): ResultType<"tguiScrollbar_getScrollAmount"> {
    return accessLib().symbols.tguiScrollbar_getScrollAmount(this.pointer);
  }

  setPolicy(value: number): ResultType<"tguiScrollbar_setPolicy"> {
    return accessLib().symbols.tguiScrollbar_setPolicy(this.pointer, value);
  }

  getPolicy(): ResultType<"tguiScrollbar_getPolicy"> {
    return accessLib().symbols.tguiScrollbar_getPolicy(this.pointer);
  }

  setOrientation(value: number): ResultType<"tguiScrollbar_setOrientation"> {
    return accessLib().symbols.tguiScrollbar_setOrientation(
      this.pointer,
      value,
    );
  }

  getOrientation(): ResultType<"tguiScrollbar_getOrientation"> {
    return accessLib().symbols.tguiScrollbar_getOrientation(this.pointer);
  }

  isShown(): ResultType<"tguiScrollbar_isShown"> {
    return accessLib().symbols.tguiScrollbar_isShown(this.pointer);
  }

  getMaxValue(): ResultType<"tguiScrollbar_getMaxValue"> {
    return accessLib().symbols.tguiScrollbar_getMaxValue(this.pointer);
  }

  getDefaultWidth(): ResultType<"tguiScrollbar_getDefaultWidth"> {
    return accessLib().symbols.tguiScrollbar_getDefaultWidth(this.pointer);
  }
}

export class Slider extends Widget {
  constructor() {
    super(accessLib().symbols.tguiSlider_create());
  }

  setMinimum(value: number): ResultType<"tguiSlider_setMinimum"> {
    return accessLib().symbols.tguiSlider_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiSlider_getMinimum"> {
    return accessLib().symbols.tguiSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiSlider_setMaximum"> {
    return accessLib().symbols.tguiSlider_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiSlider_getMaximum"> {
    return accessLib().symbols.tguiSlider_getMaximum(this.pointer);
  }

  setValue(value: number): ResultType<"tguiSlider_setValue"> {
    return accessLib().symbols.tguiSlider_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiSlider_getValue"> {
    return accessLib().symbols.tguiSlider_getValue(this.pointer);
  }

  setStep(value: number): ResultType<"tguiSlider_setStep"> {
    return accessLib().symbols.tguiSlider_setStep(this.pointer, value);
  }

  getStep(): ResultType<"tguiSlider_getStep"> {
    return accessLib().symbols.tguiSlider_getStep(this.pointer);
  }

  setOrientation(value: number): ResultType<"tguiSlider_setOrientation"> {
    return accessLib().symbols.tguiSlider_setOrientation(this.pointer, value);
  }

  getOrientation(): ResultType<"tguiSlider_getOrientation"> {
    return accessLib().symbols.tguiSlider_getOrientation(this.pointer);
  }

  setInvertedDirection(
    value: number,
  ): ResultType<"tguiSlider_setInvertedDirection"> {
    return accessLib().symbols.tguiSlider_setInvertedDirection(
      this.pointer,
      value,
    );
  }

  getInvertedDirection(): ResultType<"tguiSlider_getInvertedDirection"> {
    return accessLib().symbols.tguiSlider_getInvertedDirection(this.pointer);
  }

  setChangeValueOnScroll(
    value: number,
  ): ResultType<"tguiSlider_setChangeValueOnScroll"> {
    return accessLib().symbols.tguiSlider_setChangeValueOnScroll(
      this.pointer,
      value,
    );
  }

  getChangeValueOnScroll(): ResultType<"tguiSlider_getChangeValueOnScroll"> {
    return accessLib().symbols.tguiSlider_getChangeValueOnScroll(this.pointer);
  }
}

export class SpinButton extends ClickableWidget {
  constructor() {
    super(accessLib().symbols.tguiSpinButton_create());
  }

  setMinimum(value: number): ResultType<"tguiSpinButton_setMinimum"> {
    return accessLib().symbols.tguiSpinButton_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiSpinButton_getMinimum"> {
    return accessLib().symbols.tguiSpinButton_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiSpinButton_setMaximum"> {
    return accessLib().symbols.tguiSpinButton_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiSpinButton_getMaximum"> {
    return accessLib().symbols.tguiSpinButton_getMaximum(this.pointer);
  }

  setValue(value: number): ResultType<"tguiSpinButton_setValue"> {
    return accessLib().symbols.tguiSpinButton_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiSpinButton_getValue"> {
    return accessLib().symbols.tguiSpinButton_getValue(this.pointer);
  }

  setStep(value: number): ResultType<"tguiSpinButton_setStep"> {
    return accessLib().symbols.tguiSpinButton_setStep(this.pointer, value);
  }

  getStep(): ResultType<"tguiSpinButton_getStep"> {
    return accessLib().symbols.tguiSpinButton_getStep(this.pointer);
  }

  setOrientation(value: number): ResultType<"tguiSpinButton_setOrientation"> {
    return accessLib().symbols.tguiSpinButton_setOrientation(
      this.pointer,
      value,
    );
  }

  getOrientation(): ResultType<"tguiSpinButton_getOrientation"> {
    return accessLib().symbols.tguiSpinButton_getOrientation(this.pointer);
  }
}

export class SpinControl {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor() {
    this.ptr = accessLib().symbols.tguiSpinControl_create();
  }

  getSpinButtonRenderer(): ResultType<"tguiSpinControl_getSpinButtonRenderer"> {
    return accessLib().symbols.tguiSpinControl_getSpinButtonRenderer(
      this.pointer,
    );
  }

  getSpinButtonSharedRenderer(): ResultType<
    "tguiSpinControl_getSpinButtonSharedRenderer"
  > {
    return accessLib().symbols.tguiSpinControl_getSpinButtonSharedRenderer(
      this.pointer,
    );
  }

  getSpinTextRenderer(): ResultType<"tguiSpinControl_getSpinTextRenderer"> {
    return accessLib().symbols.tguiSpinControl_getSpinTextRenderer(
      this.pointer,
    );
  }

  getSpinTextSharedRenderer(): ResultType<
    "tguiSpinControl_getSpinTextSharedRenderer"
  > {
    return accessLib().symbols.tguiSpinControl_getSpinTextSharedRenderer(
      this.pointer,
    );
  }

  setValue(value: number): ResultType<"tguiSpinControl_setValue"> {
    return accessLib().symbols.tguiSpinControl_setValue(this.pointer, value);
  }

  getValue(): ResultType<"tguiSpinControl_getValue"> {
    return accessLib().symbols.tguiSpinControl_getValue(this.pointer);
  }

  setMinimum(value: number): ResultType<"tguiSpinControl_setMinimum"> {
    return accessLib().symbols.tguiSpinControl_setMinimum(this.pointer, value);
  }

  getMinimum(): ResultType<"tguiSpinControl_getMinimum"> {
    return accessLib().symbols.tguiSpinControl_getMinimum(this.pointer);
  }

  setMaximum(value: number): ResultType<"tguiSpinControl_setMaximum"> {
    return accessLib().symbols.tguiSpinControl_setMaximum(this.pointer, value);
  }

  getMaximum(): ResultType<"tguiSpinControl_getMaximum"> {
    return accessLib().symbols.tguiSpinControl_getMaximum(this.pointer);
  }

  setStep(value: number): ResultType<"tguiSpinControl_setStep"> {
    return accessLib().symbols.tguiSpinControl_setStep(this.pointer, value);
  }

  getStep(): ResultType<"tguiSpinControl_getStep"> {
    return accessLib().symbols.tguiSpinControl_getStep(this.pointer);
  }

  setDecimalPlaces(
    value: number,
  ): ResultType<"tguiSpinControl_setDecimalPlaces"> {
    return accessLib().symbols.tguiSpinControl_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  getDecimalPlaces(): ResultType<"tguiSpinControl_getDecimalPlaces"> {
    return accessLib().symbols.tguiSpinControl_getDecimalPlaces(this.pointer);
  }

  setSpinButtonWidth(
    value: number,
  ): ResultType<"tguiSpinControl_setSpinButtonWidth"> {
    return accessLib().symbols.tguiSpinControl_setSpinButtonWidth(
      this.pointer,
      value,
    );
  }

  getSpinButtonWidth(): ResultType<"tguiSpinControl_getSpinButtonWidth"> {
    return accessLib().symbols.tguiSpinControl_getSpinButtonWidth(this.pointer);
  }
}

export class Tabs extends Widget {
  constructor() {
    super(accessLib().symbols.tguiTabs_create());
  }

  setAutoSize(value: number): ResultType<"tguiTabs_setAutoSize"> {
    return accessLib().symbols.tguiTabs_setAutoSize(this.pointer, value);
  }

  getAutoSize(): ResultType<"tguiTabs_getAutoSize"> {
    return accessLib().symbols.tguiTabs_getAutoSize(this.pointer);
  }

  add(text: BufferSource, select: number): ResultType<"tguiTabs_add"> {
    return accessLib().symbols.tguiTabs_add(this.pointer, text, select);
  }

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

  getText(index: bigint): ResultType<"tguiTabs_getText"> {
    return accessLib().symbols.tguiTabs_getText(this.pointer, index);
  }

  changeText(
    index: bigint,
    text: BufferSource,
  ): ResultType<"tguiTabs_changeText"> {
    return accessLib().symbols.tguiTabs_changeText(this.pointer, index, text);
  }

  deselect(): ResultType<"tguiTabs_deselect"> {
    return accessLib().symbols.tguiTabs_deselect(this.pointer);
  }

  removeAll(): ResultType<"tguiTabs_removeAll"> {
    return accessLib().symbols.tguiTabs_removeAll(this.pointer);
  }

  getSelected(): ResultType<"tguiTabs_getSelected"> {
    return accessLib().symbols.tguiTabs_getSelected(this.pointer);
  }

  getSelectedIndex(): ResultType<"tguiTabs_getSelectedIndex"> {
    return accessLib().symbols.tguiTabs_getSelectedIndex(this.pointer);
  }

  getHoveredIndex(): ResultType<"tguiTabs_getHoveredIndex"> {
    return accessLib().symbols.tguiTabs_getHoveredIndex(this.pointer);
  }

  getTabsCount(): ResultType<"tguiTabs_getTabsCount"> {
    return accessLib().symbols.tguiTabs_getTabsCount(this.pointer);
  }

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

  getTabVisible(index: bigint): ResultType<"tguiTabs_getTabVisible"> {
    return accessLib().symbols.tguiTabs_getTabVisible(this.pointer, index);
  }

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

  getTabEnabled(index: bigint): ResultType<"tguiTabs_getTabEnabled"> {
    return accessLib().symbols.tguiTabs_getTabEnabled(this.pointer, index);
  }

  setMaximumTabWidth(value: number): ResultType<"tguiTabs_setMaximumTabWidth"> {
    return accessLib().symbols.tguiTabs_setMaximumTabWidth(this.pointer, value);
  }

  getMaximumTabWidth(): ResultType<"tguiTabs_getMaximumTabWidth"> {
    return accessLib().symbols.tguiTabs_getMaximumTabWidth(this.pointer);
  }

  setMinimumTabWidth(value: number): ResultType<"tguiTabs_setMinimumTabWidth"> {
    return accessLib().symbols.tguiTabs_setMinimumTabWidth(this.pointer, value);
  }

  getMinimumTabWidth(): ResultType<"tguiTabs_getMinimumTabWidth"> {
    return accessLib().symbols.tguiTabs_getMinimumTabWidth(this.pointer);
  }

  selectByText(text: BufferSource): ResultType<"tguiTabs_selectByText"> {
    return accessLib().symbols.tguiTabs_selectByText(this.pointer, text);
  }

  selectByIndex(index: bigint): ResultType<"tguiTabs_selectByIndex"> {
    return accessLib().symbols.tguiTabs_selectByIndex(this.pointer, index);
  }

  removeByText(text: BufferSource): ResultType<"tguiTabs_removeByText"> {
    return accessLib().symbols.tguiTabs_removeByText(this.pointer, text);
  }

  removeByIndex(index: bigint): ResultType<"tguiTabs_removeByIndex"> {
    return accessLib().symbols.tguiTabs_removeByIndex(this.pointer, index);
  }
}

export class TabContainer extends Container {
  constructor() {
    super(accessLib().symbols.tguiTabContainer_create());
  }

  getTabsRenderer(): ResultType<"tguiTabContainer_getTabsRenderer"> {
    return accessLib().symbols.tguiTabContainer_getTabsRenderer(this.pointer);
  }

  getTabsSharedRenderer(): ResultType<
    "tguiTabContainer_getTabsSharedRenderer"
  > {
    return accessLib().symbols.tguiTabContainer_getTabsSharedRenderer(
      this.pointer,
    );
  }

  select(index: bigint): ResultType<"tguiTabContainer_select"> {
    return accessLib().symbols.tguiTabContainer_select(this.pointer, index);
  }

  getPanelCount(): ResultType<"tguiTabContainer_getPanelCount"> {
    return accessLib().symbols.tguiTabContainer_getPanelCount(this.pointer);
  }

  getSelectedIndex(): ResultType<"tguiTabContainer_getSelectedIndex"> {
    return accessLib().symbols.tguiTabContainer_getSelectedIndex(this.pointer);
  }

  getTabText(index: bigint): ResultType<"tguiTabContainer_getTabText"> {
    return accessLib().symbols.tguiTabContainer_getTabText(this.pointer, index);
  }

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

  setTabFixedSize(
    value: number,
  ): ResultType<"tguiTabContainer_setTabFixedSize"> {
    return accessLib().symbols.tguiTabContainer_setTabFixedSize(
      this.pointer,
      value,
    );
  }

  getTabFixedSize(): ResultType<"tguiTabContainer_getTabFixedSize"> {
    return accessLib().symbols.tguiTabContainer_getTabFixedSize(this.pointer);
  }

  setTabAlignment(
    value: number,
  ): ResultType<"tguiTabContainer_setTabAlignment"> {
    return accessLib().symbols.tguiTabContainer_setTabAlignment(
      this.pointer,
      value,
    );
  }

  getTabAlignment(): ResultType<"tguiTabContainer_getTabAlignment"> {
    return accessLib().symbols.tguiTabContainer_getTabAlignment(this.pointer);
  }

  setTabsHeight(height: number): ResultType<"tguiTabContainer_setTabsHeight"> {
    return accessLib().symbols.tguiTabContainer_setTabsHeight(
      this.pointer,
      height,
    );
  }

  setTabsHeightFromLayout(
    layout: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_setTabsHeightFromLayout"> {
    return accessLib().symbols.tguiTabContainer_setTabsHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  removeTabWithName(
    text: BufferSource,
  ): ResultType<"tguiTabContainer_removeTabWithName"> {
    return accessLib().symbols.tguiTabContainer_removeTabWithName(
      this.pointer,
      text,
    );
  }

  removeTabWithIndex(
    index: bigint,
  ): ResultType<"tguiTabContainer_removeTabWithIndex"> {
    return accessLib().symbols.tguiTabContainer_removeTabWithIndex(
      this.pointer,
      index,
    );
  }

  addTab(
    widget: Deno.PointerValue<unknown>,
    name: BufferSource,
    select: number,
  ): ResultType<"tguiTabContainer_addTab"> {
    return accessLib().symbols.tguiTabContainer_addTab(widget, name, select);
  }

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

  getIndex(
    widget: Deno.PointerValue<unknown>,
    panel: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getIndex"> {
    return accessLib().symbols.tguiTabContainer_getIndex(widget, panel);
  }

  getSelected(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getSelected"> {
    return accessLib().symbols.tguiTabContainer_getSelected(widget);
  }

  getPanel(
    widget: Deno.PointerValue<unknown>,
    index: number,
  ): ResultType<"tguiTabContainer_getPanel"> {
    return accessLib().symbols.tguiTabContainer_getPanel(widget, index);
  }

  getTabs(
    widget: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabContainer_getTabs"> {
    return accessLib().symbols.tguiTabContainer_getTabs(widget);
  }
}

export class TextArea extends Widget {
  constructor() {
    super(accessLib().symbols.tguiTextArea_create());
  }

  setText(value: BufferSource): ResultType<"tguiTextArea_setText"> {
    return accessLib().symbols.tguiTextArea_setText(this.pointer, value);
  }

  getText(): ResultType<"tguiTextArea_getText"> {
    return accessLib().symbols.tguiTextArea_getText(this.pointer);
  }

  addText(text: BufferSource): ResultType<"tguiTextArea_addText"> {
    return accessLib().symbols.tguiTextArea_addText(this.pointer, text);
  }

  setDefaultText(
    value: BufferSource,
  ): ResultType<"tguiTextArea_setDefaultText"> {
    return accessLib().symbols.tguiTextArea_setDefaultText(this.pointer, value);
  }

  getDefaultText(): ResultType<"tguiTextArea_getDefaultText"> {
    return accessLib().symbols.tguiTextArea_getDefaultText(this.pointer);
  }

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

  getSelectedText(): ResultType<"tguiTextArea_getSelectedText"> {
    return accessLib().symbols.tguiTextArea_getSelectedText(this.pointer);
  }

  getSelectionStart(): ResultType<"tguiTextArea_getSelectionStart"> {
    return accessLib().symbols.tguiTextArea_getSelectionStart(this.pointer);
  }

  getSelectionEnd(): ResultType<"tguiTextArea_getSelectionEnd"> {
    return accessLib().symbols.tguiTextArea_getSelectionEnd(this.pointer);
  }

  setMaximumCharacters(
    value: bigint,
  ): ResultType<"tguiTextArea_setMaximumCharacters"> {
    return accessLib().symbols.tguiTextArea_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  getMaximumCharacters(): ResultType<"tguiTextArea_getMaximumCharacters"> {
    return accessLib().symbols.tguiTextArea_getMaximumCharacters(this.pointer);
  }

  setTabString(value: BufferSource): ResultType<"tguiTextArea_setTabString"> {
    return accessLib().symbols.tguiTextArea_setTabString(this.pointer, value);
  }

  getTabString(): ResultType<"tguiTextArea_getTabString"> {
    return accessLib().symbols.tguiTextArea_getTabString(this.pointer);
  }

  setCaretPosition(value: bigint): ResultType<"tguiTextArea_setCaretPosition"> {
    return accessLib().symbols.tguiTextArea_setCaretPosition(
      this.pointer,
      value,
    );
  }

  getCaretPosition(): ResultType<"tguiTextArea_getCaretPosition"> {
    return accessLib().symbols.tguiTextArea_getCaretPosition(this.pointer);
  }

  getCaretLine(): ResultType<"tguiTextArea_getCaretLine"> {
    return accessLib().symbols.tguiTextArea_getCaretLine(this.pointer);
  }

  getCaretColumn(): ResultType<"tguiTextArea_getCaretColumn"> {
    return accessLib().symbols.tguiTextArea_getCaretColumn(this.pointer);
  }

  setReadOnly(value: number): ResultType<"tguiTextArea_setReadOnly"> {
    return accessLib().symbols.tguiTextArea_setReadOnly(this.pointer, value);
  }

  isReadOnly(): ResultType<"tguiTextArea_isReadOnly"> {
    return accessLib().symbols.tguiTextArea_isReadOnly(this.pointer);
  }

  enableMonospacedFontOptimization(
    enable: number,
  ): ResultType<"tguiTextArea_enableMonospacedFontOptimization"> {
    return accessLib().symbols.tguiTextArea_enableMonospacedFontOptimization(
      this.pointer,
      enable,
    );
  }

  getLinesCount(): ResultType<"tguiTextArea_getLinesCount"> {
    return accessLib().symbols.tguiTextArea_getLinesCount(this.pointer);
  }
}

export class ToggleButton extends ButtonBase {
  constructor() {
    super(accessLib().symbols.tguiToggleButton_create());
  }

  setDown(value: number): ResultType<"tguiToggleButton_setDown"> {
    return accessLib().symbols.tguiToggleButton_setDown(this.pointer, value);
  }

  isDown(): ResultType<"tguiToggleButton_isDown"> {
    return accessLib().symbols.tguiToggleButton_isDown(this.pointer);
  }
}

export class TreeView extends Widget {
  constructor() {
    super(accessLib().symbols.tguiTreeView_create());
  }

  setItemHeight(value: number): ResultType<"tguiTreeView_setItemHeight"> {
    return accessLib().symbols.tguiTreeView_setItemHeight(this.pointer, value);
  }

  getItemHeight(): ResultType<"tguiTreeView_getItemHeight"> {
    return accessLib().symbols.tguiTreeView_getItemHeight(this.pointer);
  }

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

  expandAll(): ResultType<"tguiTreeView_expandAll"> {
    return accessLib().symbols.tguiTreeView_expandAll(this.pointer);
  }

  collapseAll(): ResultType<"tguiTreeView_collapseAll"> {
    return accessLib().symbols.tguiTreeView_collapseAll(this.pointer);
  }

  deselectItem(): ResultType<"tguiTreeView_deselectItem"> {
    return accessLib().symbols.tguiTreeView_deselectItem(this.pointer);
  }

  removeAllItems(): ResultType<"tguiTreeView_removeAllItems"> {
    return accessLib().symbols.tguiTreeView_removeAllItems(this.pointer);
  }

  getSelectedItem(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getSelectedItem"> {
    return accessLib().symbols.tguiTreeView_getSelectedItem(
      this.pointer,
      returnCount,
    );
  }

  getHoveredItem(
    returnCount: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getHoveredItem"> {
    return accessLib().symbols.tguiTreeView_getHoveredItem(
      this.pointer,
      returnCount,
    );
  }

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

  getNodes(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeView_getNodes"> {
    return accessLib().symbols.tguiTreeView_getNodes(widget, count);
  }
}

export class TreeViewConstNode {
  destroy(
    node: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewConstNode_destroy"> {
    return accessLib().symbols.tguiTreeViewConstNode_destroy(node);
  }
}

export class VerticalLayout extends BoxLayoutRatios {
  constructor() {
    super(accessLib().symbols.tguiVerticalLayout_create());
  }
}

export class BoxLayoutRenderer extends GroupRenderer {
  constructor() {
    super(accessLib().symbols.tguiBoxLayoutRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiBoxLayoutRenderer_copy(other);
  }

  setSpaceBetweenWidgets(
    value: number,
  ): ResultType<"tguiBoxLayoutRenderer_setSpaceBetweenWidgets"> {
    return accessLib().symbols.tguiBoxLayoutRenderer_setSpaceBetweenWidgets(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiButtonRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiButtonRenderer_getBorders(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColor"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiButtonRenderer_getTextColor"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiButtonRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setTextColorFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorFocused(
      this.pointer,
      value,
    );
  }

  getTextColorFocused(): ResultType<"tguiButtonRenderer_getTextColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<
    "tguiButtonRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setTextColorDown(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDown(
      this.pointer,
      value,
    );
  }

  getTextColorDown(): ResultType<"tguiButtonRenderer_getTextColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDown(
      this.pointer,
    );
  }

  setTextColorDownHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownHover(
      this.pointer,
      value,
    );
  }

  getTextColorDownHover(): ResultType<
    "tguiButtonRenderer_getTextColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownHover(
      this.pointer,
    );
  }

  setTextColorDownFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownFocused(
      this.pointer,
      value,
    );
  }

  getTextColorDownFocused(): ResultType<
    "tguiButtonRenderer_getTextColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownFocused(
      this.pointer,
    );
  }

  setTextColorDownDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextColorDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextColorDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextColorDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextColorDownDisabled(
      this.pointer,
    );
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiButtonRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorFocused(): ResultType<
    "tguiButtonRenderer_getBackgroundColorFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setBackgroundColorDown(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDown(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDown(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDown"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDown(
      this.pointer,
    );
  }

  setBackgroundColorDownHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDownHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDownHover(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDownHover(
      this.pointer,
    );
  }

  setBackgroundColorDownFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBackgroundColorDownFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDownFocused(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBackgroundColorDownFocused(
      this.pointer,
    );
  }

  setBackgroundColorDownDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBackgroundColorDownDisabled"> {
    return accessLib().symbols
      .tguiButtonRenderer_setBackgroundColorDownDisabled(this.pointer, value);
  }

  getBackgroundColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getBackgroundColorDownDisabled"
  > {
    return accessLib().symbols
      .tguiButtonRenderer_getBackgroundColorDownDisabled(this.pointer);
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover(): ResultType<"tguiButtonRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused(): ResultType<
    "tguiButtonRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled(): ResultType<
    "tguiButtonRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setBorderColorDown(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDown(
      this.pointer,
      value,
    );
  }

  getBorderColorDown(): ResultType<"tguiButtonRenderer_getBorderColorDown"> {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDown(
      this.pointer,
    );
  }

  setBorderColorDownHover(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownHover(
      this.pointer,
      value,
    );
  }

  getBorderColorDownHover(): ResultType<
    "tguiButtonRenderer_getBorderColorDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownHover(
      this.pointer,
    );
  }

  setBorderColorDownFocused(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorDownFocused(): ResultType<
    "tguiButtonRenderer_getBorderColorDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownFocused(
      this.pointer,
    );
  }

  setBorderColorDownDisabled(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setBorderColorDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setBorderColorDownDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDownDisabled(): ResultType<
    "tguiButtonRenderer_getBorderColorDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getBorderColorDownDisabled(
      this.pointer,
    );
  }

  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTexture"> {
    return accessLib().symbols.tguiButtonRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  getTexture(): ResultType<"tguiButtonRenderer_getTexture"> {
    return accessLib().symbols.tguiButtonRenderer_getTexture(this.pointer);
  }

  setTextureHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  getTextureHover(): ResultType<"tguiButtonRenderer_getTextureHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureHover(this.pointer);
  }

  setTextureFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  getTextureFocused(): ResultType<"tguiButtonRenderer_getTextureFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureFocused(
      this.pointer,
    );
  }

  setTextureDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDisabled(): ResultType<"tguiButtonRenderer_getTextureDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  setTextureDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDown(
      this.pointer,
      value,
    );
  }

  getTextureDown(): ResultType<"tguiButtonRenderer_getTextureDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDown(this.pointer);
  }

  setTextureDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownHover(
      this.pointer,
      value,
    );
  }

  getTextureDownHover(): ResultType<"tguiButtonRenderer_getTextureDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownHover(
      this.pointer,
    );
  }

  setTextureDownFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownFocused(
      this.pointer,
      value,
    );
  }

  getTextureDownFocused(): ResultType<
    "tguiButtonRenderer_getTextureDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownFocused(
      this.pointer,
    );
  }

  setTextureDownDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiButtonRenderer_setTextureDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextureDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextureDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextureDownDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number): ResultType<"tguiButtonRenderer_setTextStyle"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiButtonRenderer_getTextStyle"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyle(this.pointer);
  }

  setTextStyleHover(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleHover(
      this.pointer,
      value,
    );
  }

  getTextStyleHover(): ResultType<"tguiButtonRenderer_getTextStyleHover"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleHover(
      this.pointer,
    );
  }

  setTextStyleFocused(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleFocused(
      this.pointer,
      value,
    );
  }

  getTextStyleFocused(): ResultType<"tguiButtonRenderer_getTextStyleFocused"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleFocused(
      this.pointer,
    );
  }

  setTextStyleDisabled(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDisabled(
      this.pointer,
      value,
    );
  }

  getTextStyleDisabled(): ResultType<
    "tguiButtonRenderer_getTextStyleDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDisabled(
      this.pointer,
    );
  }

  setTextStyleDown(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDown"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDown(
      this.pointer,
      value,
    );
  }

  getTextStyleDown(): ResultType<"tguiButtonRenderer_getTextStyleDown"> {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDown(
      this.pointer,
    );
  }

  setTextStyleDownHover(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownHover"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownHover(
      this.pointer,
      value,
    );
  }

  getTextStyleDownHover(): ResultType<
    "tguiButtonRenderer_getTextStyleDownHover"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownHover(
      this.pointer,
    );
  }

  setTextStyleDownFocused(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownFocused"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownFocused(
      this.pointer,
      value,
    );
  }

  getTextStyleDownFocused(): ResultType<
    "tguiButtonRenderer_getTextStyleDownFocused"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownFocused(
      this.pointer,
    );
  }

  setTextStyleDownDisabled(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextStyleDownDisabled"> {
    return accessLib().symbols.tguiButtonRenderer_setTextStyleDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextStyleDownDisabled(): ResultType<
    "tguiButtonRenderer_getTextStyleDownDisabled"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextStyleDownDisabled(
      this.pointer,
    );
  }

  setTextOutlineColor(
    value: BufferSource,
  ): ResultType<"tguiButtonRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiButtonRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor(): ResultType<"tguiButtonRenderer_getTextOutlineColor"> {
    return accessLib().symbols.tguiButtonRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiButtonRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiButtonRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  getTextOutlineThickness(): ResultType<
    "tguiButtonRenderer_getTextOutlineThickness"
  > {
    return accessLib().symbols.tguiButtonRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  setRoundedBorderRadius(
    value: number,
  ): ResultType<"tguiButtonRenderer_setRoundedBorderRadius"> {
    return accessLib().symbols.tguiButtonRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiChatBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiChatBoxRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiChatBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiChatBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiChatBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiChatBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiChatBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiChatBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiChatBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiChatBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiChatBoxRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiChatBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiChatBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiChatBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiChatBoxRenderer_setScrollbar"> {
    return accessLib().symbols.tguiChatBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiChatBoxRenderer_getScrollbar"> {
    return accessLib().symbols.tguiChatBoxRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiChatBoxRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiChatBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth(): ResultType<"tguiChatBoxRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiChatBoxRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class ColorPickerRenderer extends ChildWindowRenderer {
  constructor() {
    super(accessLib().symbols.tguiColorPickerRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiColorPickerRenderer_copy(other);
  }

  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setButton"> {
    return accessLib().symbols.tguiColorPickerRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton(): ResultType<"tguiColorPickerRenderer_getButton"> {
    return accessLib().symbols.tguiColorPickerRenderer_getButton(this.pointer);
  }

  setLabel(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setLabel"> {
    return accessLib().symbols.tguiColorPickerRenderer_setLabel(
      this.pointer,
      value,
    );
  }

  getLabel(): ResultType<"tguiColorPickerRenderer_getLabel"> {
    return accessLib().symbols.tguiColorPickerRenderer_getLabel(this.pointer);
  }

  setSlider(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiColorPickerRenderer_setSlider"> {
    return accessLib().symbols.tguiColorPickerRenderer_setSlider(
      this.pointer,
      value,
    );
  }

  getSlider(): ResultType<"tguiColorPickerRenderer_getSlider"> {
    return accessLib().symbols.tguiColorPickerRenderer_getSlider(this.pointer);
  }
}

export class ComboBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiComboBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiComboBoxRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiComboBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiComboBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiComboBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiComboBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiComboBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiComboBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextColor(this.pointer);
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setDefaultTextColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor(): ResultType<
    "tguiComboBoxRenderer_getDefaultTextColor"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setArrowBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowBackgroundColor(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColor(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColor"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  setArrowBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColorHover"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setArrowBackgroundColorHover(this.pointer, value);
  }

  getArrowBackgroundColorHover(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getArrowBackgroundColorHover(this.pointer);
  }

  setArrowBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowBackgroundColorDisabled"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setArrowBackgroundColorDisabled(
        this.pointer,
        value,
      );
  }

  getArrowBackgroundColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getArrowBackgroundColorDisabled"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getArrowBackgroundColorDisabled(this.pointer);
  }

  setArrowColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor(): ResultType<"tguiComboBoxRenderer_getArrowColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColor(this.pointer);
  }

  setArrowColorHover(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover(): ResultType<"tguiComboBoxRenderer_getArrowColorHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setArrowColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setArrowColorDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setArrowColorDisabled(
      this.pointer,
      value,
    );
  }

  getArrowColorDisabled(): ResultType<
    "tguiComboBoxRenderer_getArrowColorDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getArrowColorDisabled(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiComboBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiComboBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiComboBoxRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiComboBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureBackgroundDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureBackgroundDisabled"> {
    return accessLib().symbols
      .tguiComboBoxRenderer_setTextureBackgroundDisabled(this.pointer, value);
  }

  getTextureBackgroundDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextureBackgroundDisabled"
  > {
    return accessLib().symbols
      .tguiComboBoxRenderer_getTextureBackgroundDisabled(this.pointer);
  }

  setTextureArrow(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrow"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrow(
      this.pointer,
      value,
    );
  }

  getTextureArrow(): ResultType<"tguiComboBoxRenderer_getTextureArrow"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrow(
      this.pointer,
    );
  }

  setTextureArrowHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrowHover"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrowHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowHover(): ResultType<
    "tguiComboBoxRenderer_getTextureArrowHover"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrowHover(
      this.pointer,
    );
  }

  setTextureArrowDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setTextureArrowDisabled"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextureArrowDisabled(
      this.pointer,
      value,
    );
  }

  getTextureArrowDisabled(): ResultType<
    "tguiComboBoxRenderer_getTextureArrowDisabled"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getTextureArrowDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number): ResultType<"tguiComboBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiComboBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_getTextStyle(this.pointer);
  }

  setDefaultTextStyle(
    value: number,
  ): ResultType<"tguiComboBoxRenderer_setDefaultTextStyle"> {
    return accessLib().symbols.tguiComboBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  getDefaultTextStyle(): ResultType<
    "tguiComboBoxRenderer_getDefaultTextStyle"
  > {
    return accessLib().symbols.tguiComboBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }

  setListBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiComboBoxRenderer_setListBox"> {
    return accessLib().symbols.tguiComboBoxRenderer_setListBox(
      this.pointer,
      value,
    );
  }

  getListBox(): ResultType<"tguiComboBoxRenderer_getListBox"> {
    return accessLib().symbols.tguiComboBoxRenderer_getListBox(this.pointer);
  }
}

export class EditBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiEditBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiEditBoxRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiEditBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiEditBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiEditBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiEditBoxRenderer_getPadding(this.pointer);
  }

  setCaretWidth(
    value: number,
  ): ResultType<"tguiEditBoxRenderer_setCaretWidth"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  getCaretWidth(): ResultType<"tguiEditBoxRenderer_getCaretWidth"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretWidth(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiEditBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColor(this.pointer);
  }

  setDefaultTextColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor(): ResultType<"tguiEditBoxRenderer_getDefaultTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setTextColorFocused(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setTextColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColorFocused(
      this.pointer,
      value,
    );
  }

  getTextColorFocused(): ResultType<"tguiEditBoxRenderer_getTextColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiEditBoxRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setSelectedTextBackgroundColor"> {
    return accessLib().symbols
      .tguiEditBoxRenderer_setSelectedTextBackgroundColor(this.pointer, value);
  }

  getSelectedTextBackgroundColor(): ResultType<
    "tguiEditBoxRenderer_getSelectedTextBackgroundColor"
  > {
    return accessLib().symbols
      .tguiEditBoxRenderer_getSelectedTextBackgroundColor(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiEditBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorFocused(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorFocused(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorFocused"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setCaretColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setCaretColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretColor(
      this.pointer,
      value,
    );
  }

  getCaretColor(): ResultType<"tguiEditBoxRenderer_getCaretColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretColor(this.pointer);
  }

  setCaretColorHover(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setCaretColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setCaretColorHover(
      this.pointer,
      value,
    );
  }

  getCaretColorHover(): ResultType<"tguiEditBoxRenderer_getCaretColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getCaretColorHover(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiEditBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover(): ResultType<"tguiEditBoxRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused(): ResultType<
    "tguiEditBoxRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiEditBoxRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled(): ResultType<
    "tguiEditBoxRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiEditBoxRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTexture"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  getTexture(): ResultType<"tguiEditBoxRenderer_getTexture"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTexture(this.pointer);
  }

  setTextureHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  getTextureHover(): ResultType<"tguiEditBoxRenderer_getTextureHover"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureHover(
      this.pointer,
    );
  }

  setTextureFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  getTextureFocused(): ResultType<"tguiEditBoxRenderer_getTextureFocused"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureFocused(
      this.pointer,
    );
  }

  setTextureDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiEditBoxRenderer_setTextureDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDisabled(): ResultType<"tguiEditBoxRenderer_getTextureDisabled"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number): ResultType<"tguiEditBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiEditBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_getTextStyle(this.pointer);
  }

  setDefaultTextStyle(
    value: number,
  ): ResultType<"tguiEditBoxRenderer_setDefaultTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  getDefaultTextStyle(): ResultType<"tguiEditBoxRenderer_getDefaultTextStyle"> {
    return accessLib().symbols.tguiEditBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }
}

export class FileDialogRenderer extends ChildWindowRenderer {
  constructor() {
    super(accessLib().symbols.tguiFileDialogRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiFileDialogRenderer_copy(other);
  }

  setListView(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setListView"> {
    return accessLib().symbols.tguiFileDialogRenderer_setListView(
      this.pointer,
      value,
    );
  }

  getListView(): ResultType<"tguiFileDialogRenderer_getListView"> {
    return accessLib().symbols.tguiFileDialogRenderer_getListView(this.pointer);
  }

  setEditBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setEditBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_setEditBox(
      this.pointer,
      value,
    );
  }

  getEditBox(): ResultType<"tguiFileDialogRenderer_getEditBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_getEditBox(this.pointer);
  }

  setFilenameLabel(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setFilenameLabel"> {
    return accessLib().symbols.tguiFileDialogRenderer_setFilenameLabel(
      this.pointer,
      value,
    );
  }

  getFilenameLabel(): ResultType<"tguiFileDialogRenderer_getFilenameLabel"> {
    return accessLib().symbols.tguiFileDialogRenderer_getFilenameLabel(
      this.pointer,
    );
  }

  setFileTypeComboBox(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setFileTypeComboBox"> {
    return accessLib().symbols.tguiFileDialogRenderer_setFileTypeComboBox(
      this.pointer,
      value,
    );
  }

  getFileTypeComboBox(): ResultType<
    "tguiFileDialogRenderer_getFileTypeComboBox"
  > {
    return accessLib().symbols.tguiFileDialogRenderer_getFileTypeComboBox(
      this.pointer,
    );
  }

  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton(): ResultType<"tguiFileDialogRenderer_getButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getButton(this.pointer);
  }

  setBackButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setBackButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setBackButton(
      this.pointer,
      value,
    );
  }

  getBackButton(): ResultType<"tguiFileDialogRenderer_getBackButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getBackButton(
      this.pointer,
    );
  }

  setForwardButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setForwardButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setForwardButton(
      this.pointer,
      value,
    );
  }

  getForwardButton(): ResultType<"tguiFileDialogRenderer_getForwardButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getForwardButton(
      this.pointer,
    );
  }

  setUpButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiFileDialogRenderer_setUpButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_setUpButton(
      this.pointer,
      value,
    );
  }

  getUpButton(): ResultType<"tguiFileDialogRenderer_getUpButton"> {
    return accessLib().symbols.tguiFileDialogRenderer_getUpButton(this.pointer);
  }

  setArrowsOnNavigationButtonsVisible(
    value: number,
  ): ResultType<"tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible"> {
    return accessLib().symbols
      .tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible(
        this.pointer,
        value,
      );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiKnobRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiKnobRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setBorders"> {
    return accessLib().symbols.tguiKnobRenderer_setBorders(this.pointer, value);
  }

  getBorders(): ResultType<"tguiKnobRenderer_getBorders"> {
    return accessLib().symbols.tguiKnobRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiKnobRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiKnobRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiKnobRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiKnobRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setThumbColor(
    value: BufferSource,
  ): ResultType<"tguiKnobRenderer_setThumbColor"> {
    return accessLib().symbols.tguiKnobRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor(): ResultType<"tguiKnobRenderer_getThumbColor"> {
    return accessLib().symbols.tguiKnobRenderer_getThumbColor(this.pointer);
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiKnobRenderer_setBorderColor"> {
    return accessLib().symbols.tguiKnobRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiKnobRenderer_getBorderColor"> {
    return accessLib().symbols.tguiKnobRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiKnobRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<"tguiKnobRenderer_getTextureBackground"> {
    return accessLib().symbols.tguiKnobRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureForeground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiKnobRenderer_setTextureForeground"> {
    return accessLib().symbols.tguiKnobRenderer_setTextureForeground(
      this.pointer,
      value,
    );
  }

  getTextureForeground(): ResultType<"tguiKnobRenderer_getTextureForeground"> {
    return accessLib().symbols.tguiKnobRenderer_getTextureForeground(
      this.pointer,
    );
  }

  setImageRotation(
    value: number,
  ): ResultType<"tguiKnobRenderer_setImageRotation"> {
    return accessLib().symbols.tguiKnobRenderer_setImageRotation(
      this.pointer,
      value,
    );
  }

  getImageRotation(): ResultType<"tguiKnobRenderer_getImageRotation"> {
    return accessLib().symbols.tguiKnobRenderer_getImageRotation(this.pointer);
  }
}

export class LabelRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiLabelRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiLabelRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setBorders"> {
    return accessLib().symbols.tguiLabelRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiLabelRenderer_getBorders"> {
    return accessLib().symbols.tguiLabelRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setPadding"> {
    return accessLib().symbols.tguiLabelRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiLabelRenderer_getPadding"> {
    return accessLib().symbols.tguiLabelRenderer_getPadding(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiLabelRenderer_setTextColor"> {
    return accessLib().symbols.tguiLabelRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiLabelRenderer_getTextColor"> {
    return accessLib().symbols.tguiLabelRenderer_getTextColor(this.pointer);
  }

  setTextOutlineColor(
    value: BufferSource,
  ): ResultType<"tguiLabelRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiLabelRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor(): ResultType<"tguiLabelRenderer_getTextOutlineColor"> {
    return accessLib().symbols.tguiLabelRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiLabelRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiLabelRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  getTextOutlineThickness(): ResultType<
    "tguiLabelRenderer_getTextOutlineThickness"
  > {
    return accessLib().symbols.tguiLabelRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiLabelRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiLabelRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiLabelRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiLabelRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiLabelRenderer_setBorderColor"> {
    return accessLib().symbols.tguiLabelRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiLabelRenderer_getBorderColor"> {
    return accessLib().symbols.tguiLabelRenderer_getBorderColor(this.pointer);
  }

  setTextStyle(value: number): ResultType<"tguiLabelRenderer_setTextStyle"> {
    return accessLib().symbols.tguiLabelRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiLabelRenderer_getTextStyle"> {
    return accessLib().symbols.tguiLabelRenderer_getTextStyle(this.pointer);
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setScrollbar"> {
    return accessLib().symbols.tguiLabelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiLabelRenderer_getScrollbar"> {
    return accessLib().symbols.tguiLabelRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiLabelRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiLabelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth(): ResultType<"tguiLabelRenderer_getScrollbarWidth"> {
    return accessLib().symbols.tguiLabelRenderer_getScrollbarWidth(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiLabelRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiLabelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiListBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiListBoxRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setBorders"> {
    return accessLib().symbols.tguiListBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiListBoxRenderer_getBorders"> {
    return accessLib().symbols.tguiListBoxRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setPadding"> {
    return accessLib().symbols.tguiListBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiListBoxRenderer_getPadding"> {
    return accessLib().symbols.tguiListBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiListBoxRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiListBoxRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor(): ResultType<
    "tguiListBoxRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiListBoxRenderer_setSelectedBackgroundColorHover(this.pointer, value);
  }

  getSelectedBackgroundColorHover(): ResultType<
    "tguiListBoxRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiListBoxRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiListBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiListBoxRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiListBoxRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover(): ResultType<
    "tguiListBoxRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiListBoxRenderer_setBorderColor"> {
    return accessLib().symbols.tguiListBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiListBoxRenderer_getBorderColor"> {
    return accessLib().symbols.tguiListBoxRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiListBoxRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextStyle(value: number): ResultType<"tguiListBoxRenderer_setTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiListBoxRenderer_getTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_getTextStyle(this.pointer);
  }

  setSelectedTextStyle(
    value: number,
  ): ResultType<"tguiListBoxRenderer_setSelectedTextStyle"> {
    return accessLib().symbols.tguiListBoxRenderer_setSelectedTextStyle(
      this.pointer,
      value,
    );
  }

  getSelectedTextStyle(): ResultType<
    "tguiListBoxRenderer_getSelectedTextStyle"
  > {
    return accessLib().symbols.tguiListBoxRenderer_getSelectedTextStyle(
      this.pointer,
    );
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListBoxRenderer_setScrollbar"> {
    return accessLib().symbols.tguiListBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiListBoxRenderer_getScrollbar"> {
    return accessLib().symbols.tguiListBoxRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiListBoxRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiListBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiListViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiListViewRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setBorders"> {
    return accessLib().symbols.tguiListViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiListViewRenderer_getBorders"> {
    return accessLib().symbols.tguiListViewRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setPadding"> {
    return accessLib().symbols.tguiListViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiListViewRenderer_getPadding"> {
    return accessLib().symbols.tguiListViewRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiListViewRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiListViewRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiListViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor(): ResultType<
    "tguiListViewRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiListViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value,
      );
  }

  getSelectedBackgroundColorHover(): ResultType<
    "tguiListViewRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiListViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiListViewRenderer_getTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiListViewRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiListViewRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiListViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover(): ResultType<
    "tguiListViewRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiListViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setHeaderBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setHeaderBackgroundColor"> {
    return accessLib().symbols.tguiListViewRenderer_setHeaderBackgroundColor(
      this.pointer,
      value,
    );
  }

  getHeaderBackgroundColor(): ResultType<
    "tguiListViewRenderer_getHeaderBackgroundColor"
  > {
    return accessLib().symbols.tguiListViewRenderer_getHeaderBackgroundColor(
      this.pointer,
    );
  }

  setHeaderTextColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setHeaderTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_setHeaderTextColor(
      this.pointer,
      value,
    );
  }

  getHeaderTextColor(): ResultType<"tguiListViewRenderer_getHeaderTextColor"> {
    return accessLib().symbols.tguiListViewRenderer_getHeaderTextColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setBorderColor"> {
    return accessLib().symbols.tguiListViewRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiListViewRenderer_getBorderColor"> {
    return accessLib().symbols.tguiListViewRenderer_getBorderColor(
      this.pointer,
    );
  }

  setSeparatorColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setSeparatorColor"> {
    return accessLib().symbols.tguiListViewRenderer_setSeparatorColor(
      this.pointer,
      value,
    );
  }

  getSeparatorColor(): ResultType<"tguiListViewRenderer_getSeparatorColor"> {
    return accessLib().symbols.tguiListViewRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  setGridLinesColor(
    value: BufferSource,
  ): ResultType<"tguiListViewRenderer_setGridLinesColor"> {
    return accessLib().symbols.tguiListViewRenderer_setGridLinesColor(
      this.pointer,
      value,
    );
  }

  getGridLinesColor(): ResultType<"tguiListViewRenderer_getGridLinesColor"> {
    return accessLib().symbols.tguiListViewRenderer_getGridLinesColor(
      this.pointer,
    );
  }

  setTextureHeaderBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setTextureHeaderBackground"> {
    return accessLib().symbols.tguiListViewRenderer_setTextureHeaderBackground(
      this.pointer,
      value,
    );
  }

  getTextureHeaderBackground(): ResultType<
    "tguiListViewRenderer_getTextureHeaderBackground"
  > {
    return accessLib().symbols.tguiListViewRenderer_getTextureHeaderBackground(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiListViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiListViewRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiListViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiListViewRenderer_setScrollbar"> {
    return accessLib().symbols.tguiListViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiListViewRenderer_getScrollbar"> {
    return accessLib().symbols.tguiListViewRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiListViewRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiListViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiMenuBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiMenuBarRenderer_copy(other);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiMenuBarRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor(): ResultType<
    "tguiMenuBarRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiMenuBarRenderer_getTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getTextColor(this.pointer);
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiMenuBarRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<
    "tguiMenuBarRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setSeparatorColor(
    value: BufferSource,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorColor(
      this.pointer,
      value,
    );
  }

  getSeparatorColor(): ResultType<"tguiMenuBarRenderer_getSeparatorColor"> {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureItemBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureItemBackground"> {
    return accessLib().symbols.tguiMenuBarRenderer_setTextureItemBackground(
      this.pointer,
      value,
    );
  }

  getTextureItemBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureItemBackground"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getTextureItemBackground(
      this.pointer,
    );
  }

  setTextureSelectedItemBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMenuBarRenderer_setTextureSelectedItemBackground"> {
    return accessLib().symbols
      .tguiMenuBarRenderer_setTextureSelectedItemBackground(
        this.pointer,
        value,
      );
  }

  getTextureSelectedItemBackground(): ResultType<
    "tguiMenuBarRenderer_getTextureSelectedItemBackground"
  > {
    return accessLib().symbols
      .tguiMenuBarRenderer_getTextureSelectedItemBackground(this.pointer);
  }

  setDistanceToSide(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiMenuBarRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide(): ResultType<"tguiMenuBarRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiMenuBarRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  setSeparatorThickness(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorThickness"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorThickness(
      this.pointer,
      value,
    );
  }

  getSeparatorThickness(): ResultType<
    "tguiMenuBarRenderer_getSeparatorThickness"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorThickness(
      this.pointer,
    );
  }

  setSeparatorVerticalPadding(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorVerticalPadding"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorVerticalPadding(
      this.pointer,
      value,
    );
  }

  getSeparatorVerticalPadding(): ResultType<
    "tguiMenuBarRenderer_getSeparatorVerticalPadding"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorVerticalPadding(
      this.pointer,
    );
  }

  setSeparatorSidePadding(
    value: number,
  ): ResultType<"tguiMenuBarRenderer_setSeparatorSidePadding"> {
    return accessLib().symbols.tguiMenuBarRenderer_setSeparatorSidePadding(
      this.pointer,
      value,
    );
  }

  getSeparatorSidePadding(): ResultType<
    "tguiMenuBarRenderer_getSeparatorSidePadding"
  > {
    return accessLib().symbols.tguiMenuBarRenderer_getSeparatorSidePadding(
      this.pointer,
    );
  }
}

export class MessageBoxRenderer extends ChildWindowRenderer {
  constructor() {
    super(accessLib().symbols.tguiMessageBoxRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiMessageBoxRenderer_copy(other);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiMessageBoxRenderer_setTextColor"> {
    return accessLib().symbols.tguiMessageBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiMessageBoxRenderer_getTextColor"> {
    return accessLib().symbols.tguiMessageBoxRenderer_getTextColor(
      this.pointer,
    );
  }

  setButton(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiMessageBoxRenderer_setButton"> {
    return accessLib().symbols.tguiMessageBoxRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton(): ResultType<"tguiMessageBoxRenderer_getButton"> {
    return accessLib().symbols.tguiMessageBoxRenderer_getButton(this.pointer);
  }
}

export class PictureRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiPictureRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiPictureRenderer_copy(other);
  }

  setTexture(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiPictureRenderer_setTexture"> {
    return accessLib().symbols.tguiPictureRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  getTexture(): ResultType<"tguiPictureRenderer_getTexture"> {
    return accessLib().symbols.tguiPictureRenderer_getTexture(this.pointer);
  }
}

export class ProgressBarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiProgressBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiProgressBarRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setBorders"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiProgressBarRenderer_getBorders"> {
    return accessLib().symbols.tguiProgressBarRenderer_getBorders(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setTextColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiProgressBarRenderer_getTextColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextColor(
      this.pointer,
    );
  }

  setTextColorFilled(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setTextColorFilled"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextColorFilled(
      this.pointer,
      value,
    );
  }

  getTextColorFilled(): ResultType<
    "tguiProgressBarRenderer_getTextColorFilled"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextColorFilled(
      this.pointer,
    );
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<
    "tguiProgressBarRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setFillColor(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setFillColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setFillColor(
      this.pointer,
      value,
    );
  }

  getFillColor(): ResultType<"tguiProgressBarRenderer_getFillColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getFillColor(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setBorderColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiProgressBarRenderer_getBorderColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiProgressBarRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureFill(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiProgressBarRenderer_setTextureFill"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextureFill(
      this.pointer,
      value,
    );
  }

  getTextureFill(): ResultType<"tguiProgressBarRenderer_getTextureFill"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextureFill(
      this.pointer,
    );
  }

  setTextStyle(
    value: number,
  ): ResultType<"tguiProgressBarRenderer_setTextStyle"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiProgressBarRenderer_getTextStyle"> {
    return accessLib().symbols.tguiProgressBarRenderer_getTextStyle(
      this.pointer,
    );
  }

  setTextOutlineColor(
    value: BufferSource,
  ): ResultType<"tguiProgressBarRenderer_setTextOutlineColor"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor(): ResultType<
    "tguiProgressBarRenderer_getTextOutlineColor"
  > {
    return accessLib().symbols.tguiProgressBarRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(
    value: number,
  ): ResultType<"tguiProgressBarRenderer_setTextOutlineThickness"> {
    return accessLib().symbols.tguiProgressBarRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiRadioButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiRadioButtonRenderer_copy(other);
  }

  setTextDistanceRatio(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextDistanceRatio"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextDistanceRatio(
      this.pointer,
      value,
    );
  }

  getTextDistanceRatio(): ResultType<
    "tguiRadioButtonRenderer_getTextDistanceRatio"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextDistanceRatio(
      this.pointer,
    );
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiRadioButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorders(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiRadioButtonRenderer_getTextColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColor(
      this.pointer,
    );
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiRadioButtonRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setTextColorChecked(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorChecked(
      this.pointer,
      value,
    );
  }

  getTextColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getTextColorChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorChecked(
      this.pointer,
    );
  }

  setTextColorCheckedHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorCheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextColorCheckedHover(
      this.pointer,
      value,
    );
  }

  getTextColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextColorCheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextColorCheckedHover(
      this.pointer,
    );
  }

  setTextColorCheckedDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setTextColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextColorCheckedDisabled(this.pointer, value);
  }

  getTextColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextColorCheckedDisabled(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorDisabled(this.pointer, value);
  }

  getBackgroundColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorDisabled(this.pointer);
  }

  setBackgroundColorChecked(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorChecked"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorChecked(this.pointer, value);
  }

  getBackgroundColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorChecked"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorChecked(this.pointer);
  }

  setBackgroundColorCheckedHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorCheckedHover"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedHover(
        this.pointer,
        value,
      );
  }

  getBackgroundColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorCheckedHover"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedHover(this.pointer);
  }

  setBackgroundColorCheckedDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled(
        this.pointer,
        value,
      );
  }

  getBackgroundColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled(this.pointer);
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiRadioButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  setBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorFocused"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorFocused"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setBorderColorChecked(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setBorderColorChecked(
      this.pointer,
      value,
    );
  }

  getBorderColorChecked(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getBorderColorChecked(
      this.pointer,
    );
  }

  setBorderColorCheckedHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedHover"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedHover(this.pointer, value);
  }

  getBorderColorCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedHover"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedHover(this.pointer);
  }

  setBorderColorCheckedFocused(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedFocused"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedFocused(
        this.pointer,
        value,
      );
  }

  getBorderColorCheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedFocused"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedFocused(this.pointer);
  }

  setBorderColorCheckedDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setBorderColorCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedDisabled(
        this.pointer,
        value,
      );
  }

  getBorderColorCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getBorderColorCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedDisabled(this.pointer);
  }

  setCheckColor(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColor(
      this.pointer,
      value,
    );
  }

  getCheckColor(): ResultType<"tguiRadioButtonRenderer_getCheckColor"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColor(
      this.pointer,
    );
  }

  setCheckColorHover(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColorHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColorHover(
      this.pointer,
      value,
    );
  }

  getCheckColorHover(): ResultType<
    "tguiRadioButtonRenderer_getCheckColorHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColorHover(
      this.pointer,
    );
  }

  setCheckColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiRadioButtonRenderer_setCheckColorDisabled"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setCheckColorDisabled(
      this.pointer,
      value,
    );
  }

  getCheckColorDisabled(): ResultType<
    "tguiRadioButtonRenderer_getCheckColorDisabled"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getCheckColorDisabled(
      this.pointer,
    );
  }

  setTextureUnchecked(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUnchecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureUnchecked(
      this.pointer,
      value,
    );
  }

  getTextureUnchecked(): ResultType<
    "tguiRadioButtonRenderer_getTextureUnchecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureUnchecked(
      this.pointer,
    );
  }

  setTextureChecked(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureChecked(
      this.pointer,
      value,
    );
  }

  getTextureChecked(): ResultType<"tguiRadioButtonRenderer_getTextureChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureChecked(
      this.pointer,
    );
  }

  setTextureUncheckedHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureUncheckedHover(
      this.pointer,
      value,
    );
  }

  getTextureUncheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureUncheckedHover(
      this.pointer,
    );
  }

  setTextureCheckedHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedHover"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureCheckedHover(
      this.pointer,
      value,
    );
  }

  getTextureCheckedHover(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedHover"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureCheckedHover(
      this.pointer,
    );
  }

  setTextureUncheckedFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedFocused"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureUncheckedFocused(this.pointer, value);
  }

  getTextureUncheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedFocused"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureUncheckedFocused(this.pointer);
  }

  setTextureCheckedFocused(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedFocused"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextureCheckedFocused(
      this.pointer,
      value,
    );
  }

  getTextureCheckedFocused(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedFocused"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextureCheckedFocused(
      this.pointer,
    );
  }

  setTextureUncheckedDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureUncheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureUncheckedDisabled(this.pointer, value);
  }

  getTextureUncheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextureUncheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureUncheckedDisabled(this.pointer);
  }

  setTextureCheckedDisabled(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRadioButtonRenderer_setTextureCheckedDisabled"> {
    return accessLib().symbols
      .tguiRadioButtonRenderer_setTextureCheckedDisabled(this.pointer, value);
  }

  getTextureCheckedDisabled(): ResultType<
    "tguiRadioButtonRenderer_getTextureCheckedDisabled"
  > {
    return accessLib().symbols
      .tguiRadioButtonRenderer_getTextureCheckedDisabled(this.pointer);
  }

  setTextStyle(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextStyle"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle(): ResultType<"tguiRadioButtonRenderer_getTextStyle"> {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextStyle(
      this.pointer,
    );
  }

  setTextStyleChecked(
    value: number,
  ): ResultType<"tguiRadioButtonRenderer_setTextStyleChecked"> {
    return accessLib().symbols.tguiRadioButtonRenderer_setTextStyleChecked(
      this.pointer,
      value,
    );
  }

  getTextStyleChecked(): ResultType<
    "tguiRadioButtonRenderer_getTextStyleChecked"
  > {
    return accessLib().symbols.tguiRadioButtonRenderer_getTextStyleChecked(
      this.pointer,
    );
  }
}

export class RangeSliderRenderer extends SliderRenderer {
  constructor() {
    super(accessLib().symbols.tguiRangeSliderRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiRangeSliderRenderer_copy(other);
  }

  setSelectedTrackColor(
    value: BufferSource,
  ): ResultType<"tguiRangeSliderRenderer_setSelectedTrackColor"> {
    return accessLib().symbols.tguiRangeSliderRenderer_setSelectedTrackColor(
      this.pointer,
      value,
    );
  }

  getSelectedTrackColor(): ResultType<
    "tguiRangeSliderRenderer_getSelectedTrackColor"
  > {
    return accessLib().symbols.tguiRangeSliderRenderer_getSelectedTrackColor(
      this.pointer,
    );
  }

  setSelectedTrackColorHover(
    value: BufferSource,
  ): ResultType<"tguiRangeSliderRenderer_setSelectedTrackColorHover"> {
    return accessLib().symbols
      .tguiRangeSliderRenderer_setSelectedTrackColorHover(this.pointer, value);
  }

  getSelectedTrackColorHover(): ResultType<
    "tguiRangeSliderRenderer_getSelectedTrackColorHover"
  > {
    return accessLib().symbols
      .tguiRangeSliderRenderer_getSelectedTrackColorHover(this.pointer);
  }

  setTextureSelectedTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRangeSliderRenderer_setTextureSelectedTrack"> {
    return accessLib().symbols.tguiRangeSliderRenderer_setTextureSelectedTrack(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTrack(): ResultType<
    "tguiRangeSliderRenderer_getTextureSelectedTrack"
  > {
    return accessLib().symbols.tguiRangeSliderRenderer_getTextureSelectedTrack(
      this.pointer,
    );
  }

  setTextureSelectedTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiRangeSliderRenderer_setTextureSelectedTrackHover"> {
    return accessLib().symbols
      .tguiRangeSliderRenderer_setTextureSelectedTrackHover(
        this.pointer,
        value,
      );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiScrollbarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiScrollbarRenderer_copy(other);
  }

  setTrackColor(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setTrackColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTrackColor(
      this.pointer,
      value,
    );
  }

  getTrackColor(): ResultType<"tguiScrollbarRenderer_getTrackColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTrackColor(
      this.pointer,
    );
  }

  setTrackColorHover(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setTrackColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTrackColorHover(
      this.pointer,
      value,
    );
  }

  getTrackColorHover(): ResultType<"tguiScrollbarRenderer_getTrackColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  setThumbColor(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setThumbColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor(): ResultType<"tguiScrollbarRenderer_getThumbColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getThumbColor(
      this.pointer,
    );
  }

  setThumbColorHover(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setThumbColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setThumbColorHover(
      this.pointer,
      value,
    );
  }

  getThumbColorHover(): ResultType<"tguiScrollbarRenderer_getThumbColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  setArrowBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setArrowBackgroundColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowBackgroundColor(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColor(): ResultType<
    "tguiScrollbarRenderer_getArrowBackgroundColor"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  setArrowBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setArrowBackgroundColorHover"> {
    return accessLib().symbols
      .tguiScrollbarRenderer_setArrowBackgroundColorHover(this.pointer, value);
  }

  getArrowBackgroundColorHover(): ResultType<
    "tguiScrollbarRenderer_getArrowBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiScrollbarRenderer_getArrowBackgroundColorHover(this.pointer);
  }

  setArrowColor(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setArrowColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor(): ResultType<"tguiScrollbarRenderer_getArrowColor"> {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowColor(
      this.pointer,
    );
  }

  setArrowColorHover(
    value: BufferSource,
  ): ResultType<"tguiScrollbarRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover(): ResultType<"tguiScrollbarRenderer_getArrowColorHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setTextureTrack(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureTrack"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  getTextureTrack(): ResultType<"tguiScrollbarRenderer_getTextureTrack"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureTrack(
      this.pointer,
    );
  }

  setTextureTrackHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureTrackHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  getTextureTrackHover(): ResultType<
    "tguiScrollbarRenderer_getTextureTrackHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  setTextureThumb(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureThumb"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  getTextureThumb(): ResultType<"tguiScrollbarRenderer_getTextureThumb"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureThumb(
      this.pointer,
    );
  }

  setTextureThumbHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureThumbHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  getTextureThumbHover(): ResultType<
    "tguiScrollbarRenderer_getTextureThumbHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  setTextureArrowUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowUp"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  getTextureArrowUp(): ResultType<"tguiScrollbarRenderer_getTextureArrowUp"> {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  setTextureArrowUpHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowUpHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowUpHover(): ResultType<
    "tguiScrollbarRenderer_getTextureArrowUpHover"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  setTextureArrowDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowDown"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  getTextureArrowDown(): ResultType<
    "tguiScrollbarRenderer_getTextureArrowDown"
  > {
    return accessLib().symbols.tguiScrollbarRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  setTextureArrowDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiScrollbarRenderer_setTextureArrowDownHover"> {
    return accessLib().symbols.tguiScrollbarRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiSpinButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiSpinButtonRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setBorders"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiSpinButtonRenderer_getBorders"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorders(this.pointer);
  }

  setBorderBetweenArrows(
    value: number,
  ): ResultType<"tguiSpinButtonRenderer_setBorderBetweenArrows"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorderBetweenArrows(
      this.pointer,
      value,
    );
  }

  getBorderBetweenArrows(): ResultType<
    "tguiSpinButtonRenderer_getBorderBetweenArrows"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorderBetweenArrows(
      this.pointer,
    );
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiSpinButtonRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<
    "tguiSpinButtonRenderer_getBackgroundColor"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiSpinButtonRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiSpinButtonRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setArrowColor(
    value: BufferSource,
  ): ResultType<"tguiSpinButtonRenderer_setArrowColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor(): ResultType<"tguiSpinButtonRenderer_getArrowColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getArrowColor(
      this.pointer,
    );
  }

  setArrowColorHover(
    value: BufferSource,
  ): ResultType<"tguiSpinButtonRenderer_setArrowColorHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover(): ResultType<
    "tguiSpinButtonRenderer_getArrowColorHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiSpinButtonRenderer_setBorderColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiSpinButtonRenderer_getBorderColor"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureArrowUp(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowUp"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  getTextureArrowUp(): ResultType<"tguiSpinButtonRenderer_getTextureArrowUp"> {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  setTextureArrowUpHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowUpHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowUpHover(): ResultType<
    "tguiSpinButtonRenderer_getTextureArrowUpHover"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  setTextureArrowDown(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowDown"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  getTextureArrowDown(): ResultType<
    "tguiSpinButtonRenderer_getTextureArrowDown"
  > {
    return accessLib().symbols.tguiSpinButtonRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  setTextureArrowDownHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiSpinButtonRenderer_setTextureArrowDownHover"> {
    return accessLib().symbols.tguiSpinButtonRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTabsRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTabsRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setBorders"> {
    return accessLib().symbols.tguiTabsRenderer_setBorders(this.pointer, value);
  }

  getBorders(): ResultType<"tguiTabsRenderer_getBorders"> {
    return accessLib().symbols.tguiTabsRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiTabsRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiTabsRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor(): ResultType<
    "tguiTabsRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setBackgroundColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled(): ResultType<
    "tguiTabsRenderer_getBackgroundColorDisabled"
  > {
    return accessLib().symbols.tguiTabsRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiTabsRenderer_getTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiTabsRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColorHover(this.pointer);
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<"tguiTabsRenderer_getSelectedTextColor"> {
    return accessLib().symbols.tguiTabsRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setTextColorDisabled(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setTextColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled(): ResultType<"tguiTabsRenderer_getTextColorDisabled"> {
    return accessLib().symbols.tguiTabsRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiTabsRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover(): ResultType<"tguiTabsRenderer_getBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setSelectedBorderColor(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedBorderColor"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBorderColor(
      this.pointer,
      value,
    );
  }

  getSelectedBorderColor(): ResultType<
    "tguiTabsRenderer_getSelectedBorderColor"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBorderColor(
      this.pointer,
    );
  }

  setSelectedBorderColorHover(
    value: BufferSource,
  ): ResultType<"tguiTabsRenderer_setSelectedBorderColorHover"> {
    return accessLib().symbols.tguiTabsRenderer_setSelectedBorderColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedBorderColorHover(): ResultType<
    "tguiTabsRenderer_getSelectedBorderColorHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getSelectedBorderColorHover(
      this.pointer,
    );
  }

  setTextureTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureTab(
      this.pointer,
      value,
    );
  }

  getTextureTab(): ResultType<"tguiTabsRenderer_getTextureTab"> {
    return accessLib().symbols.tguiTabsRenderer_getTextureTab(this.pointer);
  }

  setTextureTabHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureTabHover(
      this.pointer,
      value,
    );
  }

  getTextureTabHover(): ResultType<"tguiTabsRenderer_getTextureTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_getTextureTabHover(
      this.pointer,
    );
  }

  setTextureSelectedTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureSelectedTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureSelectedTab(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTab(): ResultType<
    "tguiTabsRenderer_getTextureSelectedTab"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureSelectedTab(
      this.pointer,
    );
  }

  setTextureSelectedTabHover(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureSelectedTabHover"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureSelectedTabHover(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTabHover(): ResultType<
    "tguiTabsRenderer_getTextureSelectedTabHover"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureSelectedTabHover(
      this.pointer,
    );
  }

  setTextureDisabledTab(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTabsRenderer_setTextureDisabledTab"> {
    return accessLib().symbols.tguiTabsRenderer_setTextureDisabledTab(
      this.pointer,
      value,
    );
  }

  getTextureDisabledTab(): ResultType<
    "tguiTabsRenderer_getTextureDisabledTab"
  > {
    return accessLib().symbols.tguiTabsRenderer_getTextureDisabledTab(
      this.pointer,
    );
  }

  setDistanceToSide(
    value: number,
  ): ResultType<"tguiTabsRenderer_setDistanceToSide"> {
    return accessLib().symbols.tguiTabsRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide(): ResultType<"tguiTabsRenderer_getDistanceToSide"> {
    return accessLib().symbols.tguiTabsRenderer_getDistanceToSide(this.pointer);
  }
}

export class TextAreaRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer(): Deno.PointerValue<unknown> {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTextAreaRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTextAreaRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setBorders"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiTextAreaRenderer_getBorders"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setPadding"> {
    return accessLib().symbols.tguiTextAreaRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiTextAreaRenderer_getPadding"> {
    return accessLib().symbols.tguiTextAreaRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiTextAreaRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiTextAreaRenderer_getTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getTextColor(this.pointer);
  }

  setDefaultTextColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setDefaultTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor(): ResultType<
    "tguiTextAreaRenderer_getDefaultTextColor"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiTextAreaRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setSelectedTextBackgroundColor"> {
    return accessLib().symbols
      .tguiTextAreaRenderer_setSelectedTextBackgroundColor(this.pointer, value);
  }

  getSelectedTextBackgroundColor(): ResultType<
    "tguiTextAreaRenderer_getSelectedTextBackgroundColor"
  > {
    return accessLib().symbols
      .tguiTextAreaRenderer_getSelectedTextBackgroundColor(this.pointer);
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiTextAreaRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getBorderColor(
      this.pointer,
    );
  }

  setCaretColor(
    value: BufferSource,
  ): ResultType<"tguiTextAreaRenderer_setCaretColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_setCaretColor(
      this.pointer,
      value,
    );
  }

  getCaretColor(): ResultType<"tguiTextAreaRenderer_getCaretColor"> {
    return accessLib().symbols.tguiTextAreaRenderer_getCaretColor(this.pointer);
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiTextAreaRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiTextAreaRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiTextAreaRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setCaretWidth(
    value: number,
  ): ResultType<"tguiTextAreaRenderer_setCaretWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  getCaretWidth(): ResultType<"tguiTextAreaRenderer_getCaretWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_getCaretWidth(this.pointer);
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTextAreaRenderer_setScrollbar"> {
    return accessLib().symbols.tguiTextAreaRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiTextAreaRenderer_getScrollbar"> {
    return accessLib().symbols.tguiTextAreaRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiTextAreaRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiTextAreaRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiTreeViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiTreeViewRenderer_copy(other);
  }

  setBorders(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setBorders"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders(): ResultType<"tguiTreeViewRenderer_getBorders"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBorders(this.pointer);
  }

  setPadding(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setPadding"> {
    return accessLib().symbols.tguiTreeViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding(): ResultType<"tguiTreeViewRenderer_getPadding"> {
    return accessLib().symbols.tguiTreeViewRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor(): ResultType<"tguiTreeViewRenderer_getBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setBackgroundColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover(): ResultType<
    "tguiTreeViewRenderer_getBackgroundColorHover"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setSelectedBackgroundColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor(): ResultType<
    "tguiTreeViewRenderer_getSelectedBackgroundColor"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setSelectedBackgroundColorHover"> {
    return accessLib().symbols
      .tguiTreeViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value,
      );
  }

  getSelectedBackgroundColorHover(): ResultType<
    "tguiTreeViewRenderer_getSelectedBackgroundColorHover"
  > {
    return accessLib().symbols
      .tguiTreeViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor(): ResultType<"tguiTreeViewRenderer_getTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover(): ResultType<"tguiTreeViewRenderer_getTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setSelectedTextColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor(): ResultType<
    "tguiTreeViewRenderer_getSelectedTextColor"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setSelectedTextColorHover"> {
    return accessLib().symbols.tguiTreeViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover(): ResultType<
    "tguiTreeViewRenderer_getSelectedTextColorHover"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setBorderColor(
    value: BufferSource,
  ): ResultType<"tguiTreeViewRenderer_setBorderColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor(): ResultType<"tguiTreeViewRenderer_getBorderColor"> {
    return accessLib().symbols.tguiTreeViewRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureBackground(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBackground"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground(): ResultType<
    "tguiTreeViewRenderer_getTextureBackground"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureBranchExpanded(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBranchExpanded"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBranchExpanded(
      this.pointer,
      value,
    );
  }

  getTextureBranchExpanded(): ResultType<
    "tguiTreeViewRenderer_getTextureBranchExpanded"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBranchExpanded(
      this.pointer,
    );
  }

  setTextureBranchCollapsed(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureBranchCollapsed"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureBranchCollapsed(
      this.pointer,
      value,
    );
  }

  getTextureBranchCollapsed(): ResultType<
    "tguiTreeViewRenderer_getTextureBranchCollapsed"
  > {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureBranchCollapsed(
      this.pointer,
    );
  }

  setTextureLeaf(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setTextureLeaf"> {
    return accessLib().symbols.tguiTreeViewRenderer_setTextureLeaf(
      this.pointer,
      value,
    );
  }

  getTextureLeaf(): ResultType<"tguiTreeViewRenderer_getTextureLeaf"> {
    return accessLib().symbols.tguiTreeViewRenderer_getTextureLeaf(
      this.pointer,
    );
  }

  setScrollbar(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiTreeViewRenderer_setScrollbar"> {
    return accessLib().symbols.tguiTreeViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar(): ResultType<"tguiTreeViewRenderer_getScrollbar"> {
    return accessLib().symbols.tguiTreeViewRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(
    value: number,
  ): ResultType<"tguiTreeViewRenderer_setScrollbarWidth"> {
    return accessLib().symbols.tguiTreeViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

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

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = accessLib().symbols.tguiWidgetRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    return this.ptr = accessLib().symbols.tguiWidgetRenderer_copy(other);
  }

  setOpacity(value: number): ResultType<"tguiWidgetRenderer_setOpacity"> {
    return accessLib().symbols.tguiWidgetRenderer_setOpacity(
      this.pointer,
      value,
    );
  }

  getOpacity(): ResultType<"tguiWidgetRenderer_getOpacity"> {
    return accessLib().symbols.tguiWidgetRenderer_getOpacity(this.pointer);
  }

  setOpacityDisabled(
    value: number,
  ): ResultType<"tguiWidgetRenderer_setOpacityDisabled"> {
    return accessLib().symbols.tguiWidgetRenderer_setOpacityDisabled(
      this.pointer,
      value,
    );
  }

  getOpacityDisabled(): ResultType<"tguiWidgetRenderer_getOpacityDisabled"> {
    return accessLib().symbols.tguiWidgetRenderer_getOpacityDisabled(
      this.pointer,
    );
  }

  setFont(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setFont"> {
    return accessLib().symbols.tguiWidgetRenderer_setFont(this.pointer, value);
  }

  getFont(): ResultType<"tguiWidgetRenderer_getFont"> {
    return accessLib().symbols.tguiWidgetRenderer_getFont(this.pointer);
  }

  setTextSize(value: number): ResultType<"tguiWidgetRenderer_setTextSize"> {
    return accessLib().symbols.tguiWidgetRenderer_setTextSize(
      this.pointer,
      value,
    );
  }

  getTextSize(): ResultType<"tguiWidgetRenderer_getTextSize"> {
    return accessLib().symbols.tguiWidgetRenderer_getTextSize(this.pointer);
  }

  setTransparentTexture(
    value: number,
  ): ResultType<"tguiWidgetRenderer_setTransparentTexture"> {
    return accessLib().symbols.tguiWidgetRenderer_setTransparentTexture(
      this.pointer,
      value,
    );
  }

  getTransparentTexture(): ResultType<
    "tguiWidgetRenderer_getTransparentTexture"
  > {
    return accessLib().symbols.tguiWidgetRenderer_getTransparentTexture(
      this.pointer,
    );
  }

  setData(
    value: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_setData"> {
    return accessLib().symbols.tguiWidgetRenderer_setData(this.pointer, value);
  }

  getData(): ResultType<"tguiWidgetRenderer_getData"> {
    return accessLib().symbols.tguiWidgetRenderer_getData(this.pointer);
  }

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

  setPropertyColor(
    property: BufferSource,
    value: BufferSource,
  ): ResultType<"tguiWidgetRenderer_setPropertyColor"> {
    return accessLib().symbols.tguiWidgetRenderer_setPropertyColor(
      this.pointer,
      property,
      value,
    );
  }

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

  hasProperty(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_hasProperty"> {
    return accessLib().symbols.tguiWidgetRenderer_hasProperty(
      renderer,
      property,
    );
  }

  getPropertyBool(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyBool"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyBool(
      renderer,
      property,
    );
  }

  getPropertyFont(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyFont"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyFont(
      renderer,
      property,
    );
  }

  getPropertyColor(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyColor"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyColor(
      renderer,
      property,
    );
  }

  getPropertyString(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyString"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyString(
      renderer,
      property,
    );
  }

  getPropertyNumber(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyNumber"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyNumber(
      renderer,
      property,
    );
  }

  getPropertyOutline(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyOutline"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyOutline(
      renderer,
      property,
    );
  }

  getPropertyTexture(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyTexture"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyTexture(
      renderer,
      property,
    );
  }

  getPropertyTextStyle(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyTextStyle"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyTextStyle(
      renderer,
      property,
    );
  }

  getPropertyRendererData(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ): ResultType<"tguiWidgetRenderer_getPropertyRendererData"> {
    return accessLib().symbols.tguiWidgetRenderer_getPropertyRendererData(
      renderer,
      property,
    );
  }

  destroy(
    renderer: Deno.PointerValue<unknown>,
  ): ResultType<"tguiWidgetRenderer_destroy"> {
    return accessLib().symbols.tguiWidgetRenderer_destroy(renderer);
  }
}
