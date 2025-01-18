import { CTGUI_LIB } from "./debug/index.ts";

export class Widget {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other: Deno.PointerValue<unknown>) {
    this.ptr = CTGUI_LIB.symbols.tguiWidget_copy(other);
  }

  destroy() {
    return CTGUI_LIB.symbols.tguiWidget_destroy(this.pointer);
  }

  setAutoLayout(layout: number) {
    return CTGUI_LIB.symbols.tguiWidget_setAutoLayout(this.pointer, layout);
  }

  getAutoLayout() {
    return CTGUI_LIB.symbols.tguiWidget_getAutoLayout(this.pointer);
  }

  signalConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalConnectEx(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalConnectEx(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalIntConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalIntConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalUIntConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalUIntConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalBoolConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalBoolConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalFloatConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalFloatConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalColorConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalColorConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalStringConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalStringConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalVector2fConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalVector2fConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalFloatRectConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalFloatRectConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalRangeConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalRangeConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalChildWindowConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalChildWindowConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalItemConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalItemConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalPanelListBoxItemConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalPanelListBoxItemConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalFileDialogPathsConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalFileDialogPathsConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalShowEffectConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalShowEffectConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalAnimationTypeConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalAnimationTypeConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalItemHierarchyConnect(
    signalName: BufferSource,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidget_signalItemHierarchyConnect(
      this.pointer,
      signalName,
      callback,
    );
  }

  signalDisconnect(signalName: BufferSource, id: number) {
    return CTGUI_LIB.symbols.tguiWidget_signalDisconnect(
      this.pointer,
      signalName,
      id,
    );
  }

  signalDisconnectAll(signalName: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_signalDisconnectAll(
      this.pointer,
      signalName,
    );
  }

  setSignalEnabled(signalName: BufferSource, enabled: number) {
    return CTGUI_LIB.symbols.tguiWidget_setSignalEnabled(
      this.pointer,
      signalName,
      enabled,
    );
  }

  isSignalEnabled(signalName: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_isSignalEnabled(
      this.pointer,
      signalName,
    );
  }

  setRenderer(renderer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setRenderer(this.pointer, renderer);
  }

  getRenderer() {
    return CTGUI_LIB.symbols.tguiWidget_getRenderer(this.pointer);
  }

  getSharedRenderer() {
    return CTGUI_LIB.symbols.tguiWidget_getSharedRenderer(this.pointer);
  }

  showWithEffect(type: number, duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_showWithEffect(
      this.pointer,
      type,
      duration,
    );
  }

  hideWithEffect(type: number, duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_hideWithEffect(
      this.pointer,
      type,
      duration,
    );
  }

  moveWithAnimation(position: BufferSource, duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_moveWithAnimation(
      this.pointer,
      position,
      duration,
    );
  }

  resizeWithAnimation(size: BufferSource, duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_resizeWithAnimation(
      this.pointer,
      size,
      duration,
    );
  }

  setToolTip(toolTip: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setToolTip(this.pointer, toolTip);
  }

  getToolTip() {
    return CTGUI_LIB.symbols.tguiWidget_getToolTip(this.pointer);
  }

  getParent() {
    return CTGUI_LIB.symbols.tguiWidget_getParent(this.pointer);
  }

  updateTime(duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_updateTime(this.pointer, duration);
  }

  setPosition(position: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setPosition(this.pointer, position);
  }

  setPositionFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setPositionFromLayout(
      this.pointer,
      layout,
    );
  }

  getPosition() {
    return CTGUI_LIB.symbols.tguiWidget_getPosition(this.pointer);
  }

  getAbsolutePosition() {
    return CTGUI_LIB.symbols.tguiWidget_getAbsolutePosition(this.pointer);
  }

  getAbsolutePositionWithOffset(offset: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_getAbsolutePositionWithOffset(
      this.pointer,
      offset,
    );
  }

  getWidgetOffset() {
    return CTGUI_LIB.symbols.tguiWidget_getWidgetOffset(this.pointer);
  }

  setWidth(width: number) {
    return CTGUI_LIB.symbols.tguiWidget_setWidth(this.pointer, width);
  }

  setWidthFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setWidthFromLayout(
      this.pointer,
      layout,
    );
  }

  setHeight(height: number) {
    return CTGUI_LIB.symbols.tguiWidget_setHeight(this.pointer, height);
  }

  setHeightFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  setSize(size: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setSize(this.pointer, size);
  }

  setSizeFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setSizeFromLayout(this.pointer, layout);
  }

  getSize() {
    return CTGUI_LIB.symbols.tguiWidget_getSize(this.pointer);
  }

  getFullSize() {
    return CTGUI_LIB.symbols.tguiWidget_getFullSize(this.pointer);
  }

  setOrigin(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setOrigin(this.pointer, value);
  }

  getOrigin() {
    return CTGUI_LIB.symbols.tguiWidget_getOrigin(this.pointer);
  }

  setScale(origin: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setScale(this.pointer, origin);
  }

  setScaleWithOrigin(scale: BufferSource, origin: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setScaleWithOrigin(
      this.pointer,
      scale,
      origin,
    );
  }

  getScale() {
    return CTGUI_LIB.symbols.tguiWidget_getScale(this.pointer);
  }

  getScaleOrigin() {
    return CTGUI_LIB.symbols.tguiWidget_getScaleOrigin(this.pointer);
  }

  setRotation(angle: number) {
    return CTGUI_LIB.symbols.tguiWidget_setRotation(this.pointer, angle);
  }

  setRotationWithOrigin(angle: number, origin: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setRotationWithOrigin(
      this.pointer,
      angle,
      origin,
    );
  }

  getRotation() {
    return CTGUI_LIB.symbols.tguiWidget_getRotation(this.pointer);
  }

  getRotationOrigin() {
    return CTGUI_LIB.symbols.tguiWidget_getRotationOrigin(this.pointer);
  }

  setVisible(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setVisible(this.pointer, value);
  }

  isVisible() {
    return CTGUI_LIB.symbols.tguiWidget_isVisible(this.pointer);
  }

  setEnabled(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setEnabled(this.pointer, value);
  }

  isEnabled() {
    return CTGUI_LIB.symbols.tguiWidget_isEnabled(this.pointer);
  }

  setFocused(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setFocused(this.pointer, value);
  }

  isFocused() {
    return CTGUI_LIB.symbols.tguiWidget_isFocused(this.pointer);
  }

  setFocusable(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setFocusable(this.pointer, value);
  }

  isFocusable() {
    return CTGUI_LIB.symbols.tguiWidget_isFocusable(this.pointer);
  }

  getWidgetType() {
    return CTGUI_LIB.symbols.tguiWidget_getWidgetType(this.pointer);
  }

  moveToFront() {
    return CTGUI_LIB.symbols.tguiWidget_moveToFront(this.pointer);
  }

  moveToBack() {
    return CTGUI_LIB.symbols.tguiWidget_moveToBack(this.pointer);
  }

  setUserData(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setUserData(this.pointer, value);
  }

  getUserData() {
    return CTGUI_LIB.symbols.tguiWidget_getUserData(this.pointer);
  }

  hasUserData() {
    return CTGUI_LIB.symbols.tguiWidget_hasUserData(this.pointer);
  }

  isAnimationPlaying() {
    return CTGUI_LIB.symbols.tguiWidget_isAnimationPlaying(this.pointer);
  }

  setTextSize(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setTextSize(this.pointer, value);
  }

  getTextSize() {
    return CTGUI_LIB.symbols.tguiWidget_getTextSize(this.pointer);
  }

  setWidgetName(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_setWidgetName(this.pointer, value);
  }

  getWidgetName() {
    return CTGUI_LIB.symbols.tguiWidget_getWidgetName(this.pointer);
  }

  setMouseCursor(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setMouseCursor(this.pointer, value);
  }

  getMouseCursor() {
    return CTGUI_LIB.symbols.tguiWidget_getMouseCursor(this.pointer);
  }

  setNavigationUp(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setNavigationUp(this.pointer, value);
  }

  getNavigationUp() {
    return CTGUI_LIB.symbols.tguiWidget_getNavigationUp(this.pointer);
  }

  setNavigationDown(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setNavigationDown(this.pointer, value);
  }

  getNavigationDown() {
    return CTGUI_LIB.symbols.tguiWidget_getNavigationDown(this.pointer);
  }

  setNavigationLeft(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setNavigationLeft(this.pointer, value);
  }

  getNavigationLeft() {
    return CTGUI_LIB.symbols.tguiWidget_getNavigationLeft(this.pointer);
  }

  setNavigationRight(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidget_setNavigationRight(this.pointer, value);
  }

  getNavigationRight() {
    return CTGUI_LIB.symbols.tguiWidget_getNavigationRight(this.pointer);
  }

  setIgnoreMouseEvents(value: number) {
    return CTGUI_LIB.symbols.tguiWidget_setIgnoreMouseEvents(
      this.pointer,
      value,
    );
  }

  getIgnoreMouseEvents() {
    return CTGUI_LIB.symbols.tguiWidget_getIgnoreMouseEvents(this.pointer);
  }

  finishAllAnimations() {
    return CTGUI_LIB.symbols.tguiWidget_finishAllAnimations(this.pointer);
  }

  setAutoLayoutUpdateEnabled(enabled: number) {
    return CTGUI_LIB.symbols.tguiWidget_setAutoLayoutUpdateEnabled(
      this.pointer,
      enabled,
    );
  }

  isMouseDown() {
    return CTGUI_LIB.symbols.tguiWidget_isMouseDown(this.pointer);
  }

  isMouseOnWidget(pos: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidget_isMouseOnWidget(this.pointer, pos);
  }
}

export class ClickableWidget extends Widget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiClickableWidget_create());
  }
}

export class Container extends Widget {
  loadWidgetsFromFile(
    container: Deno.PointerValue<unknown>,
    filename: BufferSource,
    replaceExisting: number,
  ) {
    return CTGUI_LIB.symbols.tguiContainer_loadWidgetsFromFile(
      container,
      filename,
      replaceExisting,
    );
  }

  saveWidgetsToFile(
    container: Deno.PointerValue<unknown>,
    filename: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiContainer_saveWidgetsToFile(
      container,
      filename,
    );
  }

  add(widget: Deno.PointerValue<unknown>, widgetName: BufferSource) {
    return CTGUI_LIB.symbols.tguiContainer_add(
      this.pointer,
      widget,
      widgetName,
    );
  }

  get(widgetName: BufferSource) {
    return CTGUI_LIB.symbols.tguiContainer_get(this.pointer, widgetName);
  }

  getWidgets(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_getWidgets(
      this.pointer,
      returnCount,
    );
  }

  remove(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_remove(this.pointer, widget);
  }

  removeAllWidgets() {
    return CTGUI_LIB.symbols.tguiContainer_removeAllWidgets(this.pointer);
  }

  moveWidgetToFront(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_moveWidgetToFront(
      this.pointer,
      widget,
    );
  }

  moveWidgetToBack(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_moveWidgetToBack(
      this.pointer,
      widget,
    );
  }

  moveWidgetForward(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_moveWidgetForward(
      this.pointer,
      widget,
    );
  }

  moveWidgetBackward(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_moveWidgetBackward(
      this.pointer,
      widget,
    );
  }

  setWidgetIndex(widget: Deno.PointerValue<unknown>, index: bigint) {
    return CTGUI_LIB.symbols.tguiContainer_setWidgetIndex(
      this.pointer,
      widget,
      index,
    );
  }

  getWidgetIndex(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiContainer_getWidgetIndex(this.pointer, widget);
  }

  getFocusedChild() {
    return CTGUI_LIB.symbols.tguiContainer_getFocusedChild(this.pointer);
  }

  getFocusedLeaf() {
    return CTGUI_LIB.symbols.tguiContainer_getFocusedLeaf(this.pointer);
  }

  getWidgetAtPos(pos: BufferSource, recursive: number) {
    return CTGUI_LIB.symbols.tguiContainer_getWidgetAtPos(
      this.pointer,
      pos,
      recursive,
    );
  }

  focusNextWidget(recursive: number) {
    return CTGUI_LIB.symbols.tguiContainer_focusNextWidget(
      this.pointer,
      recursive,
    );
  }

  focusPreviousWidget(recursive: number) {
    return CTGUI_LIB.symbols.tguiContainer_focusPreviousWidget(
      this.pointer,
      recursive,
    );
  }

  getInnerSize() {
    return CTGUI_LIB.symbols.tguiContainer_getInnerSize(this.pointer);
  }

  getChildWidgetsOffset() {
    return CTGUI_LIB.symbols.tguiContainer_getChildWidgetsOffset(this.pointer);
  }
}

export class ChildWindow extends Container {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiChildWindow_create());
  }

  setClientSize(size: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindow_setClientSize(this.pointer, size);
  }

  setClientSizeFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindow_setClientSizeFromLayout(
      this.pointer,
      layout,
    );
  }

  getClientSize() {
    return CTGUI_LIB.symbols.tguiChildWindow_getClientSize(this.pointer);
  }

  setMaximumSize(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindow_setMaximumSize(
      this.pointer,
      value,
    );
  }

  getMaximumSize() {
    return CTGUI_LIB.symbols.tguiChildWindow_getMaximumSize(this.pointer);
  }

  setMinimumSize(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindow_setMinimumSize(
      this.pointer,
      value,
    );
  }

  getMinimumSize() {
    return CTGUI_LIB.symbols.tguiChildWindow_getMinimumSize(this.pointer);
  }

  setTitle(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindow_setTitle(this.pointer, value);
  }

  getTitle() {
    return CTGUI_LIB.symbols.tguiChildWindow_getTitle(this.pointer);
  }

  setTitleTextSize(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setTitleTextSize(
      this.pointer,
      value,
    );
  }

  getTitleTextSize() {
    return CTGUI_LIB.symbols.tguiChildWindow_getTitleTextSize(this.pointer);
  }

  setTitleAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setTitleAlignment(
      this.pointer,
      value,
    );
  }

  getTitleAlignment() {
    return CTGUI_LIB.symbols.tguiChildWindow_getTitleAlignment(this.pointer);
  }

  setTitleButtons(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setTitleButtons(
      this.pointer,
      value,
    );
  }

  getTitleButtons() {
    return CTGUI_LIB.symbols.tguiChildWindow_getTitleButtons(this.pointer);
  }

  setCloseBehavior(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setCloseBehavior(
      this.pointer,
      value,
    );
  }

  getCloseBehavior() {
    return CTGUI_LIB.symbols.tguiChildWindow_getCloseBehavior(this.pointer);
  }

  setResizable(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setResizable(this.pointer, value);
  }

  isResizable() {
    return CTGUI_LIB.symbols.tguiChildWindow_isResizable(this.pointer);
  }

  setKeepInParent(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setKeepInParent(
      this.pointer,
      value,
    );
  }

  getKeepInParent() {
    return CTGUI_LIB.symbols.tguiChildWindow_getKeepInParent(this.pointer);
  }

  setPositionLocked(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindow_setPositionLocked(
      this.pointer,
      value,
    );
  }

  isPositionLocked() {
    return CTGUI_LIB.symbols.tguiChildWindow_isPositionLocked(this.pointer);
  }
}

export class Group extends Container {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiGroup_create());
  }
}

export class ChildWindowRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiChildWindowRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiChildWindowRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getBorders(this.pointer);
  }

  setTitleBarColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setTitleBarColor(
      this.pointer,
      value,
    );
  }

  getTitleBarColor() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getTitleBarColor(
      this.pointer,
    );
  }

  setTitleColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setTitleColor(
      this.pointer,
      value,
    );
  }

  getTitleColor() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getTitleColor(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getBorderColor(
      this.pointer,
    );
  }

  setBorderColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderBelowTitleBar(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setBorderBelowTitleBar(
      this.pointer,
      value,
    );
  }

  getBorderBelowTitleBar() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getBorderBelowTitleBar(
      this.pointer,
    );
  }

  setTitleBarHeight(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setTitleBarHeight(
      this.pointer,
      value,
    );
  }

  getTitleBarHeight() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getTitleBarHeight(
      this.pointer,
    );
  }

  setDistanceToSide(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  setPaddingBetweenButtons(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setPaddingBetweenButtons(
      this.pointer,
      value,
    );
  }

  getPaddingBetweenButtons() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getPaddingBetweenButtons(
      this.pointer,
    );
  }

  setMinimumResizableBorderWidth(value: number) {
    return CTGUI_LIB.symbols
      .tguiChildWindowRenderer_setMinimumResizableBorderWidth(
        this.pointer,
        value,
      );
  }

  getMinimumResizableBorderWidth() {
    return CTGUI_LIB.symbols
      .tguiChildWindowRenderer_getMinimumResizableBorderWidth(this.pointer);
  }

  setShowTextOnTitleButtons(value: number) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setShowTextOnTitleButtons(
      this.pointer,
      value,
    );
  }

  getShowTextOnTitleButtons() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getShowTextOnTitleButtons(
      this.pointer,
    );
  }

  setTextureTitleBar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setTextureTitleBar(
      this.pointer,
      value,
    );
  }

  getTextureTitleBar() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getTextureTitleBar(
      this.pointer,
    );
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setCloseButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setCloseButton(
      this.pointer,
      value,
    );
  }

  getCloseButton() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getCloseButton(
      this.pointer,
    );
  }

  setMaximizeButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setMaximizeButton(
      this.pointer,
      value,
    );
  }

  getMaximizeButton() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getMaximizeButton(
      this.pointer,
    );
  }

  setMinimizeButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_setMinimizeButton(
      this.pointer,
      value,
    );
  }

  getMinimizeButton() {
    return CTGUI_LIB.symbols.tguiChildWindowRenderer_getMinimizeButton(
      this.pointer,
    );
  }
}

export class GroupRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiGroupRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiGroupRenderer_copy(other);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGroupRenderer_setPadding(this.pointer, value);
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiGroupRenderer_getPadding(this.pointer);
  }
}

export class BoxLayout extends Group {
  insert(
    index: bigint,
    widgetToAdd: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiBoxLayout_insert(
      this.pointer,
      index,
      widgetToAdd,
      widgetName,
    );
  }

  removeAtIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiBoxLayout_removeAtIndex(this.pointer, index);
  }

  getAtIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiBoxLayout_getAtIndex(this.pointer, index);
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
      return CTGUI_LIB.symbols.tguiBoxLayoutRatios_add(
        this.pointer,
        widget,
        arg1, // ratio
        arg2,
      );
    }

    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_add(
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
      return CTGUI_LIB.symbols.tguiBoxLayoutRatios_insert(
        this.pointer,
        index,
        widget,
        arg1, // ratio
        arg2,
      );
    }

    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_insert(
      this.pointer,
      index,
      widget,
      1, // ratio
      arg1,
    );
  }

  addSpace(ratio: number) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_addSpace(this.pointer, ratio);
  }

  insertSpace(index: bigint, ratio: number) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_insertSpace(
      this.pointer,
      index,
      ratio,
    );
  }

  setRatio(widget: Deno.PointerValue<unknown>, ratio: number) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_setRatio(
      this.pointer,
      widget,
      ratio,
    );
  }

  setRatioAtIndex(index: bigint, ratio: number) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_setRatioAtIndex(
      this.pointer,
      index,
      ratio,
    );
  }

  getRatio(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_getRatio(this.pointer, widget);
  }

  getRatioAtIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRatios_getRatioAtIndex(
      this.pointer,
      index,
    );
  }
}

export class ButtonBase extends ClickableWidget {
  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonBase_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiButtonBase_getText(this.pointer);
  }

  setIgnoreKeyEvents(value: number) {
    return CTGUI_LIB.symbols.tguiButtonBase_setIgnoreKeyEvents(
      this.pointer,
      value,
    );
  }

  getIgnoreKeyEvents() {
    return CTGUI_LIB.symbols.tguiButtonBase_getIgnoreKeyEvents(this.pointer);
  }

  setTextPositionAbs(
    widget: Deno.PointerValue<unknown>,
    position: BufferSource,
    origin: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiButtonBase_setTextPositionAbs(
      widget,
      position,
      origin,
    );
  }

  setTextPositionRel(
    widget: Deno.PointerValue<unknown>,
    position: BufferSource,
    origin: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiButtonBase_setTextPositionRel(
      widget,
      position,
      origin,
    );
  }
}

export class Button extends ButtonBase {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiButton_create());
  }
}

export class Label extends ClickableWidget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiLabel_create());
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiLabel_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiLabel_getText(this.pointer);
  }

  setHorizontalAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiLabel_setHorizontalAlignment(
      this.pointer,
      value,
    );
  }

  getHorizontalAlignment() {
    return CTGUI_LIB.symbols.tguiLabel_getHorizontalAlignment(this.pointer);
  }

  setVerticalAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiLabel_setVerticalAlignment(
      this.pointer,
      value,
    );
  }

  getVerticalAlignment() {
    return CTGUI_LIB.symbols.tguiLabel_getVerticalAlignment(this.pointer);
  }

  setAutoSize(value: number) {
    return CTGUI_LIB.symbols.tguiLabel_setAutoSize(this.pointer, value);
  }

  getAutoSize() {
    return CTGUI_LIB.symbols.tguiLabel_getAutoSize(this.pointer);
  }

  setMaximumTextWidth(value: number) {
    return CTGUI_LIB.symbols.tguiLabel_setMaximumTextWidth(this.pointer, value);
  }

  getMaximumTextWidth() {
    return CTGUI_LIB.symbols.tguiLabel_getMaximumTextWidth(this.pointer);
  }
}

export class Panel extends Group {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiPanel_create());
  }

  setEventBubbling(useEventBubbling: number) {
    return CTGUI_LIB.symbols.tguiPanel_setEventBubbling(useEventBubbling);
  }

  getEventBubbling() {
    return CTGUI_LIB.symbols.tguiPanel_getEventBubbling();
  }
}

export class RadioButton extends ClickableWidget {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiRadioButton_create());
  }

  setChecked(value: number) {
    return CTGUI_LIB.symbols.tguiRadioButton_setChecked(this.pointer, value);
  }

  isChecked() {
    return CTGUI_LIB.symbols.tguiRadioButton_isChecked(this.pointer);
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButton_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiRadioButton_getText(this.pointer);
  }

  setTextClickable(value: number) {
    return CTGUI_LIB.symbols.tguiRadioButton_setTextClickable(
      this.pointer,
      value,
    );
  }

  isTextClickable() {
    return CTGUI_LIB.symbols.tguiRadioButton_isTextClickable(this.pointer);
  }
}

export class ScrollablePanel extends Panel {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiScrollablePanel_create());
  }

  setContentSize(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollablePanel_setContentSize(
      this.pointer,
      value,
    );
  }

  getContentSize() {
    return CTGUI_LIB.symbols.tguiScrollablePanel_getContentSize(this.pointer);
  }

  getContentOffset() {
    return CTGUI_LIB.symbols.tguiScrollablePanel_getContentOffset(this.pointer);
  }
}

export class PanelRenderer extends GroupRenderer {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiPanelRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiPanelRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiPanelRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiPanelRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiPanelRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiPanelRenderer_getBackgroundColor(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiPanelRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiPanelRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiPanelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiPanelRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setRoundedBorderRadius(value: number) {
    return CTGUI_LIB.symbols.tguiPanelRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

  getRoundedBorderRadius() {
    return CTGUI_LIB.symbols.tguiPanelRenderer_getRoundedBorderRadius(
      this.pointer,
    );
  }
}

export class ScrollablePanelRenderer extends PanelRenderer {
  constructor(ptr?: Deno.PointerValue<unknown>) {
    super(ptr ? ptr : CTGUI_LIB.symbols.tguiScrollablePanelRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiScrollablePanelRenderer_copy(other);
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollablePanelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiScrollablePanelRenderer_getScrollbar(
      this.pointer,
    );
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiScrollablePanelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiScrollablePanelRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class SliderRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiSliderRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiSliderRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getBorders(this.pointer);
  }

  setTrackColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTrackColor(
      this.pointer,
      value,
    );
  }

  getTrackColor() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTrackColor(this.pointer);
  }

  setTrackColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTrackColorHover(
      this.pointer,
      value,
    );
  }

  getTrackColorHover() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  setThumbColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getThumbColor(this.pointer);
  }

  setThumbColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setThumbColorHover(
      this.pointer,
      value,
    );
  }

  getThumbColorHover() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setTextureTrack(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  getTextureTrack() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTextureTrack(this.pointer);
  }

  setTextureTrackHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  getTextureTrackHover() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  setTextureThumb(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  getTextureThumb() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTextureThumb(this.pointer);
  }

  setTextureThumbHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  getTextureThumbHover() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  setThumbWithinTrack(value: number) {
    return CTGUI_LIB.symbols.tguiSliderRenderer_setThumbWithinTrack(
      this.pointer,
      value,
    );
  }

  getThumbWithinTrack() {
    return CTGUI_LIB.symbols.tguiSliderRenderer_getThumbWithinTrack(
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

  createNull() {
    return CTGUI_LIB.symbols.tguiColor_createNull();
  }

  fromRGB(red: number, green: number, blue: number) {
    return CTGUI_LIB.symbols.tguiColor_fromRGB(red, green, blue);
  }

  fromRGBA(red: number, green: number, blue: number, alpha: number) {
    return CTGUI_LIB.symbols.tguiColor_fromRGBA(red, green, blue, alpha);
  }

  fromString(string: BufferSource) {
    return CTGUI_LIB.symbols.tguiColor_fromString(string);
  }
}

export class Duration {
  nanoseconds: bigint;

  constructor(nanoseconds: bigint) {
    this.nanoseconds = nanoseconds;
  }

  fromSeconds(amount: number) {
    return CTGUI_LIB.symbols.tguiDuration_fromSeconds(amount);
  }

  fromMilliseconds(amount: number) {
    return CTGUI_LIB.symbols.tguiDuration_fromMilliseconds(amount);
  }

  fromMicroseconds(amount: bigint) {
    return CTGUI_LIB.symbols.tguiDuration_fromMicroseconds(amount);
  }

  fromNanoseconds(amount: bigint) {
    return CTGUI_LIB.symbols.tguiDuration_fromNanoseconds(amount);
  }

  asSeconds(duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiDuration_asSeconds(duration);
  }

  asMilliseconds(duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiDuration_asMilliseconds(duration);
  }

  asMicroseconds(duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiDuration_asMicroseconds(duration);
  }

  asNanoseconds(duration: BufferSource) {
    return CTGUI_LIB.symbols.tguiDuration_asNanoseconds(duration);
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

  contains(rect: Deno.PointerValue<unknown>, pos: BufferSource) {
    return CTGUI_LIB.symbols.tguiFloatRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiFloatRect_intersects(rect, otherRect);
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

  contains(rect: Deno.PointerValue<unknown>, pos: BufferSource) {
    return CTGUI_LIB.symbols.tguiUIntRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiUIntRect_intersects(rect, otherRect);
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
  contains(rect: Deno.PointerValue<unknown>, pos: BufferSource) {
    return CTGUI_LIB.symbols.tguiIntRect_contains(rect, pos);
  }

  intersects(
    rect: Deno.PointerValue<unknown>,
    otherRect: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiIntRect_intersects(rect, otherRect);
  }
}

export class tgui {
  setGlobalTextSize(textSize: number) {
    return CTGUI_LIB.symbols.tgui_setGlobalTextSize(textSize);
  }

  getGlobalTextSize() {
    return CTGUI_LIB.symbols.tgui_getGlobalTextSize();
  }

  setDoubleClickTime(duration: BufferSource) {
    return CTGUI_LIB.symbols.tgui_setDoubleClickTime(duration);
  }

  getDoubleClickTime() {
    return CTGUI_LIB.symbols.tgui_getDoubleClickTime();
  }

  setResourcePath(path: BufferSource) {
    return CTGUI_LIB.symbols.tgui_setResourcePath(path);
  }

  setEditCursorBlinkRate(blinkRate: BufferSource) {
    return CTGUI_LIB.symbols.tgui_setEditCursorBlinkRate(blinkRate);
  }

  getEditCursorBlinkRate() {
    return CTGUI_LIB.symbols.tgui_getEditCursorBlinkRate();
  }

  readFileToMemory(
    filename: BufferSource,
    fileSize: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tgui_readFileToMemory(filename, fileSize);
  }

  writeFile(filename: BufferSource, textToWrite: BufferSource) {
    return CTGUI_LIB.symbols.tgui_writeFile(filename, textToWrite);
  }

  readFileToMemory_free(arg1: BufferSource) {
    return CTGUI_LIB.symbols.tgui_readFileToMemory_free(arg1);
  }

  getLastError() {
    return CTGUI_LIB.symbols.tgui_getLastError();
  }

  setBindingWidgetCleanupCallback(callback: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tgui_setBindingWidgetCleanupCallback(callback);
  }

  base64Encode(data: BufferSource, nrBytes: bigint) {
    return CTGUI_LIB.symbols.tgui_base64Encode(data, nrBytes);
  }

  base64Decode(data: BufferSource, count: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tgui_base64Decode(data, count);
  }
}

export class Cursor {
  setStyle(
    type: number,
    pixels: Deno.PointerValue<unknown>,
    size: BufferSource,
    hotspot: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiCursor_setStyle(type, pixels, size, hotspot);
  }

  resetStyle(type: number) {
    return CTGUI_LIB.symbols.tguiCursor_resetStyle(type);
  }
}

export class Gui {
  draw(gui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_draw(gui);
  }

  loadWidgetsFromFile(
    gui: Deno.PointerValue<unknown>,
    filename: BufferSource,
    replaceExisting: number,
  ) {
    return CTGUI_LIB.symbols.tguiGui_loadWidgetsFromFile(
      gui,
      filename,
      replaceExisting,
    );
  }

  saveWidgetsToFile(gui: Deno.PointerValue<unknown>, filename: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_saveWidgetsToFile(gui, filename);
  }

  setAbsoluteViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setAbsoluteViewport(thisGui, viewport);
  }

  setRelativeViewport(
    thisGui: Deno.PointerValue<unknown>,
    viewport: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setRelativeViewport(thisGui, viewport);
  }

  getViewport(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getViewport(thisGui);
  }

  setAbsoluteView(thisGui: Deno.PointerValue<unknown>, view: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_setAbsoluteView(thisGui, view);
  }

  setRelativeView(thisGui: Deno.PointerValue<unknown>, view: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_setRelativeView(thisGui, view);
  }

  getView(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getView(thisGui);
  }

  setTabKeyUsageEnabled(thisGui: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiGui_setTabKeyUsageEnabled(thisGui, value);
  }

  isTabKeyUsageEnabled(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_isTabKeyUsageEnabled(thisGui);
  }

  setFont(
    thisGui: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setFont(thisGui, value);
  }

  getFont(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getFont(thisGui);
  }

  add(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    widgetName: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiGui_add(thisGui, widget, widgetName);
  }

  get(thisGui: Deno.PointerValue<unknown>, widgetName: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_get(thisGui, widgetName);
  }

  getWidgets(
    thisGui: Deno.PointerValue<unknown>,
    returnCount: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_getWidgets(thisGui, returnCount);
  }

  remove(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_remove(thisGui, widget);
  }

  removeAllWidgets(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_removeAllWidgets(thisGui);
  }

  getFocusedChild(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getFocusedChild(thisGui);
  }

  getFocusedLeaf(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getFocusedLeaf(thisGui);
  }

  getWidgetAtPos(
    thisGui: Deno.PointerValue<unknown>,
    pos: BufferSource,
    recursive: number,
  ) {
    return CTGUI_LIB.symbols.tguiGui_getWidgetAtPos(thisGui, pos, recursive);
  }

  getWidgetBelowMouseCursor(
    thisGui: Deno.PointerValue<unknown>,
    mousePos: BufferSource,
    recursive: number,
  ) {
    return CTGUI_LIB.symbols.tguiGui_getWidgetBelowMouseCursor(
      thisGui,
      mousePos,
      recursive,
    );
  }

  focusNextWidget(thisGui: Deno.PointerValue<unknown>, recursive: number) {
    return CTGUI_LIB.symbols.tguiGui_focusNextWidget(thisGui, recursive);
  }

  focusPreviousWidget(thisGui: Deno.PointerValue<unknown>, recursive: number) {
    return CTGUI_LIB.symbols.tguiGui_focusPreviousWidget(thisGui, recursive);
  }

  unfocusAllWidgets(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_unfocusAllWidgets(thisGui);
  }

  moveWidgetToFront(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_moveWidgetToFront(thisGui, widget);
  }

  moveWidgetToBack(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_moveWidgetToBack(thisGui, widget);
  }

  moveWidgetForward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_moveWidgetForward(thisGui, widget);
  }

  moveWidgetBackward(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_moveWidgetBackward(thisGui, widget);
  }

  setWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
    index: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setWidgetIndex(thisGui, widget, index);
  }

  getWidgetIndex(
    thisGui: Deno.PointerValue<unknown>,
    widget: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGui_getWidgetIndex(thisGui, widget);
  }

  setOpacity(thisGui: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiGui_setOpacity(thisGui, value);
  }

  getOpacity(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getOpacity(thisGui);
  }

  setTextSize(thisGui: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiGui_setTextSize(thisGui, value);
  }

  getTextSize(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_getTextSize(thisGui);
  }

  setDrawingUpdatesTime(
    thisGui: Deno.PointerValue<unknown>,
    drawUpdatesTime: number,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setDrawingUpdatesTime(
      thisGui,
      drawUpdatesTime,
    );
  }

  updateTime(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_updateTime(thisGui);
  }

  setOverrideMouseCursor(thisGui: Deno.PointerValue<unknown>, type: number) {
    return CTGUI_LIB.symbols.tguiGui_setOverrideMouseCursor(thisGui, type);
  }

  restoreOverrideMouseCursor(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_restoreOverrideMouseCursor(thisGui);
  }

  requestMouseCursor(thisGui: Deno.PointerValue<unknown>, type: number) {
    return CTGUI_LIB.symbols.tguiGui_requestMouseCursor(thisGui, type);
  }

  mapPixelToCoords(thisGui: Deno.PointerValue<unknown>, pixel: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_mapPixelToCoords(thisGui, pixel);
  }

  mapCoordsToPixel(thisGui: Deno.PointerValue<unknown>, coord: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_mapCoordsToPixel(thisGui, coord);
  }

  setKeyboardNavigationEnabled(
    thisGui: Deno.PointerValue<unknown>,
    value: number,
  ) {
    return CTGUI_LIB.symbols.tguiGui_setKeyboardNavigationEnabled(
      thisGui,
      value,
    );
  }

  isKeyboardNavigationEnabled(thisGui: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGui_isKeyboardNavigationEnabled(thisGui);
  }

  mainLoop(thisGui: Deno.PointerValue<unknown>, clearColor: BufferSource) {
    return CTGUI_LIB.symbols.tguiGui_mainLoop(thisGui, clearColor);
  }
}

export class GuiCSFMLGraphics {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(window: Deno.PointerValue<unknown>) {
    this.ptr = CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_create(window);
  }

  destroy() {
    return CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_destroy(this.pointer);
  }

  handleEvent(event: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGuiCSFMLGraphics_handleEvent(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawWidget(
      target,
      states,
      widget,
    );
  }

  addClippingLayer(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    rect: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_addClippingLayer(
      target,
      states,
      rect,
    );
  }

  removeClippingLayer(target: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_removeClippingLayer(
      target,
    );
  }

  drawBorders(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    borders: Deno.PointerValue<unknown>,
    size: BufferSource,
    color: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawBorders(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawFilledRect(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawSprite(
      target,
      states,
      sprite,
    );
  }

  drawText(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawText(
      target,
      states,
      text,
    );
  }

  drawTextOutline(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawTextOutline(
      target,
      states,
      text,
    );
  }

  drawTextWithoutOutline(
    target: Deno.PointerValue<unknown>,
    states: Deno.PointerValue<unknown>,
    text: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawTextWithoutOutline(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawTriangle(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawCircle(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawRoundedRectangle(
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
  ) {
    return CTGUI_LIB.symbols.tguiBackendRenderTarget_drawVertexArray(
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

  get pointer() {
    return this.ptr;
  }

  constructor() {
    this.ptr = CTGUI_LIB.symbols.tguiCustomWidget_create();
  }

  setPositionChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setPositionChangedCallback(
      widget,
      callback,
    );
  }

  setSizeChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setSizeChangedCallback(
      widget,
      callback,
    );
  }

  setVisibleChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setVisibleChangedCallback(
      widget,
      callback,
    );
  }

  setEnableChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setEnableChangedCallback(
      widget,
      callback,
    );
  }

  setFocusChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setFocusChangedCallback(
      widget,
      callback,
    );
  }

  setCanGainFocusCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setCanGainFocusCallback(
      widget,
      callback,
    );
  }

  setGetFullSizeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setGetFullSizeCallback(
      widget,
      callback,
    );
  }

  setGetWidgetOffsetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setGetWidgetOffsetCallback(
      widget,
      callback,
    );
  }

  setUpdateTimeCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setUpdateTimeCallback(
      widget,
      callback,
    );
  }

  setMouseOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setMouseOnWidgetCallback(
      widget,
      callback,
    );
  }

  setLeftMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setLeftMousePressedCallback(
      widget,
      callback,
    );
  }

  setLeftMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setLeftMouseReleasedCallback(
      widget,
      callback,
    );
  }

  setRightMousePressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setRightMousePressedCallback(
      widget,
      callback,
    );
  }

  setRightMouseReleasedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setRightMouseReleasedCallback(
      widget,
      callback,
    );
  }

  setMouseMovedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setMouseMovedCallback(
      widget,
      callback,
    );
  }

  setKeyPressedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setKeyPressedCallback(
      widget,
      callback,
    );
  }

  setTextEnteredCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setTextEnteredCallback(
      widget,
      callback,
    );
  }

  setScrolledCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setScrolledCallback(
      widget,
      callback,
    );
  }

  setMouseNoLongerOnWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setMouseNoLongerOnWidgetCallback(
      widget,
      callback,
    );
  }

  setLeftMouseButtonNoLongerDownCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols
      .tguiCustomWidget_setLeftMouseButtonNoLongerDownCallback(
        widget,
        callback,
      );
  }

  setMouseEnteredWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setMouseEnteredWidgetCallback(
      widget,
      callback,
    );
  }

  setMouseLeftWidgetCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setMouseLeftWidgetCallback(
      widget,
      callback,
    );
  }

  setRendererChangedCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setRendererChangedCallback(
      widget,
      callback,
    );
  }

  setDrawCallback(
    widget: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiCustomWidget_setDrawCallback(widget, callback);
  }
}

export class Filesystem {
  getParentPath(path: BufferSource) {
    return CTGUI_LIB.symbols.tguiFilesystem_getParentPath(path);
  }

  joinPaths(path1: BufferSource, path2: BufferSource) {
    return CTGUI_LIB.symbols.tguiFilesystem_joinPaths(path1, path2);
  }

  directoryExists(path: BufferSource) {
    return CTGUI_LIB.symbols.tguiFilesystem_directoryExists(path);
  }

  fileExists(path: BufferSource) {
    return CTGUI_LIB.symbols.tguiFilesystem_fileExists(path);
  }

  createDirectory(path: BufferSource) {
    return CTGUI_LIB.symbols.tguiFilesystem_createDirectory(path);
  }

  getLocalDataDirectory() {
    return CTGUI_LIB.symbols.tguiFilesystem_getLocalDataDirectory();
  }
}

export class Font {
  createNull() {
    return CTGUI_LIB.symbols.tguiFont_createNull();
  }

  createFromFile(filename: BufferSource) {
    return CTGUI_LIB.symbols.tguiFont_createFromFile(filename);
  }

  createFromMemory(data: BufferSource, dataSize: bigint) {
    return CTGUI_LIB.symbols.tguiFont_createFromMemory(data, dataSize);
  }

  destroy(font: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFont_destroy(font);
  }

  getGlyph(
    font: Deno.PointerValue<unknown>,
    codePoint: number,
    characterSize: number,
    bold: number,
    outlineThickness: number,
  ) {
    return CTGUI_LIB.symbols.tguiFont_getGlyph(
      font,
      codePoint,
      characterSize,
      bold,
      outlineThickness,
    );
  }

  setGlobalFont(font: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFont_setGlobalFont(font);
  }

  getGlobalFont() {
    return CTGUI_LIB.symbols.tguiFont_getGlobalFont();
  }

  getId(thisFont: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFont_getId(thisFont);
  }

  getKerning(
    thisFont: Deno.PointerValue<unknown>,
    first: number,
    second: number,
    characterSize: number,
    bold: number,
  ) {
    return CTGUI_LIB.symbols.tguiFont_getKerning(
      thisFont,
      first,
      second,
      characterSize,
      bold,
    );
  }

  getLineSpacing(thisFont: Deno.PointerValue<unknown>, characterSize: number) {
    return CTGUI_LIB.symbols.tguiFont_getLineSpacing(thisFont, characterSize);
  }

  getFontHeight(thisFont: Deno.PointerValue<unknown>, characterSize: number) {
    return CTGUI_LIB.symbols.tguiFont_getFontHeight(thisFont, characterSize);
  }

  setSmooth(thisFont: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiFont_setSmooth(thisFont, value);
  }

  isSmooth(thisFont: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFont_isSmooth(thisFont);
  }
}

export class Layout {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(constant: number) {
    this.ptr = CTGUI_LIB.symbols.tguiLayout_create(constant);
  }

  createFromString(expression: BufferSource) {
    return CTGUI_LIB.symbols.tguiLayout_createFromString(expression);
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiLayout_copy(other);
  }

  destroy(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLayout_destroy(layout);
  }

  replaceValue(
    layout: Deno.PointerValue<unknown>,
    newLayout: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiLayout_replaceValue(layout, newLayout);
  }

  getValue(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLayout_getValue(layout);
  }

  isConstant(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLayout_isConstant(layout);
  }
}

export class Layout2d {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(constant: BufferSource) {
    this.ptr = CTGUI_LIB.symbols.tguiLayout2d_create(constant);
  }

  createFromLayouts(
    x: Deno.PointerValue<unknown>,
    y: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiLayout2d_createFromLayouts(x, y);
  }

  createFromString(expression: BufferSource) {
    return CTGUI_LIB.symbols.tguiLayout2d_createFromString(expression);
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiLayout2d_copy(other);
  }

  destroy(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLayout2d_destroy(layout);
  }

  getValue(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLayout2d_getValue(layout);
  }
}

export class Outline {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(left: number, top: number, right: number, bottom: number) {
    this.ptr = CTGUI_LIB.symbols.tguiOutline_create(left, top, right, bottom);
  }

  createFromStrings(
    left: BufferSource,
    top: BufferSource,
    right: BufferSource,
    bottom: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiOutline_createFromStrings(
      left,
      top,
      right,
      bottom,
    );
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiOutline_copy(other);
  }

  destroy(outline: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiOutline_destroy(outline);
  }

  getLeft(outline: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiOutline_getLeft(outline);
  }

  getTop(outline: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiOutline_getTop(outline);
  }

  getRight(outline: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiOutline_getRight(outline);
  }

  getBottom(outline: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiOutline_getBottom(outline);
  }
}

export class RendererData {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(data: Deno.PointerValue<unknown>) {
    this.ptr = CTGUI_LIB.symbols.tguiRendererData_copy(data);
  }

  destroy(data: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRendererData_destroy(data);
  }
}

export class Sprite {
  createNull() {
    return CTGUI_LIB.symbols.tguiSprite_createNull();
  }

  createFromTexture(texture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_createFromTexture(texture);
  }

  destroy(sprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_destroy(sprite);
  }

  getScalingType(sprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getScalingType(sprite);
  }

  isSet(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_isSet(thisSprite);
  }

  setTexture(
    thisSprite: Deno.PointerValue<unknown>,
    value: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiSprite_setTexture(thisSprite, value);
  }

  getTexture(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getTexture(thisSprite);
  }

  setPosition(thisSprite: Deno.PointerValue<unknown>, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSprite_setPosition(thisSprite, value);
  }

  getPosition(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getPosition(thisSprite);
  }

  setSize(thisSprite: Deno.PointerValue<unknown>, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSprite_setSize(thisSprite, value);
  }

  getSize(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getSize(thisSprite);
  }

  setOpacity(thisSprite: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiSprite_setOpacity(thisSprite, value);
  }

  getOpacity(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getOpacity(thisSprite);
  }

  setVisibleRect(thisSprite: Deno.PointerValue<unknown>, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSprite_setVisibleRect(thisSprite, value);
  }

  getVisibleRect(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getVisibleRect(thisSprite);
  }

  setRotation(thisSprite: Deno.PointerValue<unknown>, value: number) {
    return CTGUI_LIB.symbols.tguiSprite_setRotation(thisSprite, value);
  }

  getRotation(thisSprite: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSprite_getRotation(thisSprite);
  }

  isTransparentPixel(
    thisSprite: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiSprite_isTransparentPixel(thisSprite, pos);
  }
}

export class Text {
  getStaticExtraHorizontalPadding(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ) {
    return CTGUI_LIB.symbols.tguiText_getStaticExtraHorizontalPadding(
      font,
      characterSize,
    );
  }

  getStaticExtraHorizontalOffset(
    font: Deno.PointerValue<unknown>,
    characterSize: number,
  ) {
    return CTGUI_LIB.symbols.tguiText_getStaticExtraHorizontalOffset(
      font,
      characterSize,
    );
  }

  getStaticExtraVerticalPadding(characterSize: number) {
    return CTGUI_LIB.symbols.tguiText_getStaticExtraVerticalPadding(
      characterSize,
    );
  }

  getStaticLineHeight(font: Deno.PointerValue<unknown>, characterSize: number) {
    return CTGUI_LIB.symbols.tguiText_getStaticLineHeight(font, characterSize);
  }

  getStaticLineWidth(
    text: BufferSource,
    font: Deno.PointerValue<unknown>,
    characterSize: number,
    style: number,
  ) {
    return CTGUI_LIB.symbols.tguiText_getStaticLineWidth(
      text,
      font,
      characterSize,
      style,
    );
  }

  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor() {
    this.ptr = CTGUI_LIB.symbols.tguiText_create();
  }

  destroy(text: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiText_destroy(text);
  }

  findBestTextSize(
    font: Deno.PointerValue<unknown>,
    height: number,
    fit: number,
  ) {
    return CTGUI_LIB.symbols.tguiText_findBestTextSize(font, height, fit);
  }

  wordWrap(
    maxWidth: number,
    text: BufferSource,
    font: Deno.PointerValue<unknown>,
    textSize: number,
    bold: number,
  ) {
    return CTGUI_LIB.symbols.tguiText_wordWrap(
      maxWidth,
      text,
      font,
      textSize,
      bold,
    );
  }

  getSize() {
    return CTGUI_LIB.symbols.tguiText_getSize(this.pointer);
  }

  setPosition(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiText_setPosition(this.pointer, value);
  }

  getPosition() {
    return CTGUI_LIB.symbols.tguiText_getPosition(this.pointer);
  }

  setString(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiText_setString(this.pointer, value);
  }

  getString() {
    return CTGUI_LIB.symbols.tguiText_getString(this.pointer);
  }

  setCharacterSize(value: number) {
    return CTGUI_LIB.symbols.tguiText_setCharacterSize(this.pointer, value);
  }

  getCharacterSize() {
    return CTGUI_LIB.symbols.tguiText_getCharacterSize(this.pointer);
  }

  setColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiText_setColor(this.pointer, value);
  }

  getColor() {
    return CTGUI_LIB.symbols.tguiText_getColor(this.pointer);
  }

  setOpacity(value: number) {
    return CTGUI_LIB.symbols.tguiText_setOpacity(this.pointer, value);
  }

  getOpacity() {
    return CTGUI_LIB.symbols.tguiText_getOpacity(this.pointer);
  }

  setFont(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiText_setFont(this.pointer, value);
  }

  getFont() {
    return CTGUI_LIB.symbols.tguiText_getFont(this.pointer);
  }

  setStyle(value: number) {
    return CTGUI_LIB.symbols.tguiText_setStyle(this.pointer, value);
  }

  getStyle() {
    return CTGUI_LIB.symbols.tguiText_getStyle(this.pointer);
  }

  setOutlineColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiText_setOutlineColor(this.pointer, value);
  }

  getOutlineColor() {
    return CTGUI_LIB.symbols.tguiText_getOutlineColor(this.pointer);
  }

  setOutlineThickness(value: number) {
    return CTGUI_LIB.symbols.tguiText_setOutlineThickness(this.pointer, value);
  }

  getOutlineThickness() {
    return CTGUI_LIB.symbols.tguiText_getOutlineThickness(this.pointer);
  }

  findCharacterPos(index: bigint) {
    return CTGUI_LIB.symbols.tguiText_findCharacterPos(this.pointer, index);
  }

  getExtraHorizontalPadding() {
    return CTGUI_LIB.symbols.tguiText_getExtraHorizontalPadding(this.pointer);
  }

  getExtraHorizontalOffset() {
    return CTGUI_LIB.symbols.tguiText_getExtraHorizontalOffset(this.pointer);
  }

  getLineHeight() {
    return CTGUI_LIB.symbols.tguiText_getLineHeight(this.pointer);
  }

  getLineWidth() {
    return CTGUI_LIB.symbols.tguiText_getLineWidth(this.pointer);
  }
}

export class Texture {
  createNull() {
    return CTGUI_LIB.symbols.tguiTexture_createNull();
  }

  createFromFile(
    filename: BufferSource,
    partRect: BufferSource,
    middleRect: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromFile(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromFileEx(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromMemory(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromMemoryEx(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromPixelData(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromPixelDataEx(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromBase64(
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
  ) {
    return CTGUI_LIB.symbols.tguiTexture_createFromBase64Ex(
      imageAsBase64,
      partRect,
      middleRect,
      smoothing,
    );
  }

  destroy(texture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_destroy(texture);
  }

  setColor(thisTexture: Deno.PointerValue<unknown>, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTexture_setColor(thisTexture, value);
  }

  getColor(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_getColor(thisTexture);
  }

  setMiddleRect(thisTexture: Deno.PointerValue<unknown>, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTexture_setMiddleRect(thisTexture, value);
  }

  getMiddleRect(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_getMiddleRect(thisTexture);
  }

  getId(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_getId(thisTexture);
  }

  getImageSize(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_getImageSize(thisTexture);
  }

  getPartRect(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_getPartRect(thisTexture);
  }

  isSmooth(thisTexture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTexture_isSmooth(thisTexture);
  }

  isTransparentPixel(
    thisTexture: Deno.PointerValue<unknown>,
    pos: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTexture_isTransparentPixel(thisTexture, pos);
  }

  setDefaultSmooth(smooth: number) {
    return CTGUI_LIB.symbols.tguiTexture_setDefaultSmooth(smooth);
  }

  getDefaultSmooth() {
    return CTGUI_LIB.symbols.tguiTexture_getDefaultSmooth();
  }
}

export class Theme {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiTheme_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(theme: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiTheme_copy(theme);
  }

  destroy(theme: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTheme_destroy(theme);
  }

  load(theme: Deno.PointerValue<unknown>, filename: BufferSource) {
    return CTGUI_LIB.symbols.tguiTheme_load(theme, filename);
  }

  replace(
    theme: Deno.PointerValue<unknown>,
    otherTheme: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_replace(theme, otherTheme);
  }

  getRenderer(theme: Deno.PointerValue<unknown>, id: BufferSource) {
    return CTGUI_LIB.symbols.tguiTheme_getRenderer(theme, id);
  }

  setDefault(defaultTheme: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTheme_setDefault(defaultTheme);
  }

  getDefault() {
    return CTGUI_LIB.symbols.tguiTheme_getDefault();
  }

  hasGlobalProperty(theme: Deno.PointerValue<unknown>, property: BufferSource) {
    return CTGUI_LIB.symbols.tguiTheme_hasGlobalProperty(theme, property);
  }

  getGlobalPropertyBool(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyBool(theme, property);
  }

  getGlobalPropertyFont(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyFont(theme, property);
  }

  getGlobalPropertyColor(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyColor(theme, property);
  }

  getGlobalPropertyString(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyString(theme, property);
  }

  getGlobalPropertyNumber(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyNumber(theme, property);
  }

  getGlobalPropertyOutline(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyOutline(
      theme,
      property,
    );
  }

  getGlobalPropertyTexture(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyTexture(
      theme,
      property,
    );
  }

  getGlobalPropertyTextStyle(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyTextStyle(
      theme,
      property,
    );
  }

  getGlobalPropertyRendererData(
    theme: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getGlobalPropertyRendererData(
      theme,
      property,
    );
  }

  addRendererDefaultSubwidget(
    widgetType: BufferSource,
    property: BufferSource,
    propertyWidgetType: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_addRendererDefaultSubwidget(
      widgetType,
      property,
      propertyWidgetType,
    );
  }

  getRendererDefaultSubwidget(
    widgetType: BufferSource,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getRendererDefaultSubwidget(
      widgetType,
      property,
    );
  }

  addRendererInheritedGlobalProperty(
    widgetType: BufferSource,
    property: BufferSource,
    globalProperty: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_addRendererInheritedGlobalProperty(
      widgetType,
      property,
      globalProperty,
    );
  }

  getRendererInheritedGlobalProperty(
    widgetType: BufferSource,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_getRendererInheritedGlobalProperty(
      widgetType,
      property,
    );
  }

  addRenderer(id: BufferSource, renderer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTheme_addRenderer(this.pointer, id, renderer);
  }

  removeRenderer(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiTheme_removeRenderer(this.pointer, id);
  }

  getPrimary() {
    return CTGUI_LIB.symbols.tguiTheme_getPrimary(this.pointer);
  }

  addRendererInheritanceParent(
    widgetType: BufferSource,
    parentType: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTheme_addRendererInheritanceParent(
      widgetType,
      parentType,
    );
  }

  getRendererInheritanceParent(widgetType: BufferSource) {
    return CTGUI_LIB.symbols.tguiTheme_getRendererInheritanceParent(widgetType);
  }
}

export class Timer {
  scheduleCallback(
    callback: Deno.PointerValue<unknown>,
    interval: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiTimer_scheduleCallback(callback, interval);
  }

  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(
    callback: Deno.PointerValue<unknown>,
    interval: BufferSource,
    enable: number,
  ) {
    this.ptr = CTGUI_LIB.symbols.tguiTimer_create(callback, interval, enable);
  }

  destroy(timer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTimer_destroy(timer);
  }

  setInterval(timer: Deno.PointerValue<unknown>, interval: BufferSource) {
    return CTGUI_LIB.symbols.tguiTimer_setInterval(timer, interval);
  }

  getInterval(timer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTimer_getInterval(timer);
  }

  setEnabled(timer: Deno.PointerValue<unknown>, enabled: number) {
    return CTGUI_LIB.symbols.tguiTimer_setEnabled(timer, enabled);
  }

  isEnabled(timer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTimer_isEnabled(timer);
  }

  setCallback(
    timer: Deno.PointerValue<unknown>,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiTimer_setCallback(timer, callback);
  }

  restart(timer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTimer_restart(timer);
  }
}

export class ToolTip {
  setInitialDelay(delay: BufferSource) {
    return CTGUI_LIB.symbols.tguiToolTip_setInitialDelay(delay);
  }

  getInitialDelay() {
    return CTGUI_LIB.symbols.tguiToolTip_getInitialDelay();
  }

  setDistanceToMouse(distance: BufferSource) {
    return CTGUI_LIB.symbols.tguiToolTip_setDistanceToMouse(distance);
  }

  getDistanceToMouse() {
    return CTGUI_LIB.symbols.tguiToolTip_getDistanceToMouse();
  }

  setShowOnDisabledWidget(show: number) {
    return CTGUI_LIB.symbols.tguiToolTip_setShowOnDisabledWidget(show);
  }

  getShowOnDisabledWidget() {
    return CTGUI_LIB.symbols.tguiToolTip_getShowOnDisabledWidget();
  }
}

export class sfEvent {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor() {
    this.ptr = CTGUI_LIB.symbols.sfEvent_create();
  }

  destroy(event: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.sfEvent_destroy(event);
  }
}

export class renderWindow {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(mode: BufferSource, title: BufferSource, style: number) {
    this.ptr = CTGUI_LIB.symbols.renderWindow_create(mode, title, style);
  }

  isOpen() {
    return CTGUI_LIB.symbols.renderWindow_isOpen(this.pointer);
  }

  pollEvent(event: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.renderWindow_pollEvent(this.pointer, event);
  }

  close() {
    return CTGUI_LIB.symbols.renderWindow_close(this.pointer);
  }

  clear(color: BufferSource) {
    return CTGUI_LIB.symbols.renderWindow_clear(this.pointer, color);
  }

  display() {
    return CTGUI_LIB.symbols.renderWindow_display(this.pointer);
  }

  destroy() {
    return CTGUI_LIB.symbols.renderWindow_destroy(this.pointer);
  }
}

export class BitmapButton extends Button {
  constructor() {
    super(CTGUI_LIB.symbols.tguiBitmapButton_create());
  }

  setImage(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiBitmapButton_setImage(this.pointer, value);
  }

  getImage() {
    return CTGUI_LIB.symbols.tguiBitmapButton_getImage(this.pointer);
  }

  setImageScaling(value: number) {
    return CTGUI_LIB.symbols.tguiBitmapButton_setImageScaling(
      this.pointer,
      value,
    );
  }

  getImageScaling() {
    return CTGUI_LIB.symbols.tguiBitmapButton_getImageScaling(this.pointer);
  }
}

export class ChatBox extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiChatBox_create());
  }

  addLine(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiChatBox_addLine(this.pointer, text);
  }

  addLineWithColor(text: BufferSource, color: BufferSource) {
    return CTGUI_LIB.symbols.tguiChatBox_addLineWithColor(
      this.pointer,
      text,
      color,
    );
  }

  addLineWithColorAndStyle(
    text: BufferSource,
    color: BufferSource,
    style: number,
  ) {
    return CTGUI_LIB.symbols.tguiChatBox_addLineWithColorAndStyle(
      this.pointer,
      text,
      color,
      style,
    );
  }

  getLine(lineIndex: bigint) {
    return CTGUI_LIB.symbols.tguiChatBox_getLine(this.pointer, lineIndex);
  }

  getLineColor(lineIndex: bigint) {
    return CTGUI_LIB.symbols.tguiChatBox_getLineColor(this.pointer, lineIndex);
  }

  getLineTextStyle(lineIndex: bigint) {
    return CTGUI_LIB.symbols.tguiChatBox_getLineTextStyle(
      this.pointer,
      lineIndex,
    );
  }

  removeLine(lineIndex: bigint) {
    return CTGUI_LIB.symbols.tguiChatBox_removeLine(this.pointer, lineIndex);
  }

  removeAllLines() {
    return CTGUI_LIB.symbols.tguiChatBox_removeAllLines(this.pointer);
  }

  getLineAmount() {
    return CTGUI_LIB.symbols.tguiChatBox_getLineAmount(this.pointer);
  }

  setLineLimit(value: bigint) {
    return CTGUI_LIB.symbols.tguiChatBox_setLineLimit(this.pointer, value);
  }

  getLineLimit() {
    return CTGUI_LIB.symbols.tguiChatBox_getLineLimit(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChatBox_setTextColor(this.pointer, value);
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiChatBox_getTextColor(this.pointer);
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiChatBox_setTextStyle(this.pointer, value);
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiChatBox_getTextStyle(this.pointer);
  }

  setLinesStartFromTop(value: number) {
    return CTGUI_LIB.symbols.tguiChatBox_setLinesStartFromTop(
      this.pointer,
      value,
    );
  }

  getLinesStartFromTop() {
    return CTGUI_LIB.symbols.tguiChatBox_getLinesStartFromTop(this.pointer);
  }

  setNewLinesBelowOthers(value: number) {
    return CTGUI_LIB.symbols.tguiChatBox_setNewLinesBelowOthers(
      this.pointer,
      value,
    );
  }

  getNewLinesBelowOthers() {
    return CTGUI_LIB.symbols.tguiChatBox_getNewLinesBelowOthers(this.pointer);
  }
}

export class CheckBox extends RadioButton {
  constructor() {
    super(CTGUI_LIB.symbols.tguiCheckBox_create());
  }
}

export class ColorPicker extends ChildWindow {
  constructor() {
    super(CTGUI_LIB.symbols.tguiColorPicker_create());
  }

  setColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiColorPicker_setColor(this.pointer, value);
  }

  getColor() {
    return CTGUI_LIB.symbols.tguiColorPicker_getColor(this.pointer);
  }
}

export class ComboBox extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiComboBox_create());
  }

  setItemsToDisplay(value: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_setItemsToDisplay(
      this.pointer,
      value,
    );
  }

  getItemsToDisplay() {
    return CTGUI_LIB.symbols.tguiComboBox_getItemsToDisplay(this.pointer);
  }

  addItem(item: BufferSource, id: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_addItem(this.pointer, item, id);
  }

  addMultipleItems(items: Deno.PointerValue<unknown>, itemsLength: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_addMultipleItems(
      this.pointer,
      items,
      itemsLength,
    );
  }

  getItemById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_getItemById(this.pointer, id);
  }

  getItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_getItemByIndex(this.pointer, index);
  }

  getIndexById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_getIndexById(this.pointer, id);
  }

  getIdByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_getIdByIndex(this.pointer, index);
  }

  getItems(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBox_getItems(this.pointer, returnCount);
  }

  getItemIds(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBox_getItemIds(this.pointer, returnCount);
  }

  setSelectedItem(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_setSelectedItem(this.pointer, item);
  }

  setSelectedItemById(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_setSelectedItemById(
      this.pointer,
      item,
    );
  }

  setSelectedItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  deselectItem() {
    return CTGUI_LIB.symbols.tguiComboBox_deselectItem(this.pointer);
  }

  removeItem(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_removeItem(this.pointer, item);
  }

  removeItemById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_removeItemById(this.pointer, id);
  }

  removeItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_removeItemByIndex(
      this.pointer,
      index,
    );
  }

  removeAllItems() {
    return CTGUI_LIB.symbols.tguiComboBox_removeAllItems(this.pointer);
  }

  getSelectedItem() {
    return CTGUI_LIB.symbols.tguiComboBox_getSelectedItem(this.pointer);
  }

  getSelectedItemId() {
    return CTGUI_LIB.symbols.tguiComboBox_getSelectedItemId(this.pointer);
  }

  getSelectedItemIndex() {
    return CTGUI_LIB.symbols.tguiComboBox_getSelectedItemIndex(this.pointer);
  }

  changeItem(originalValue: BufferSource, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_changeItem(
      this.pointer,
      originalValue,
      newValue,
    );
  }

  changeItemById(id: BufferSource, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_changeItemById(
      this.pointer,
      id,
      newValue,
    );
  }

  changeItemByIndex(index: bigint, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_changeItemByIndex(
      this.pointer,
      index,
      newValue,
    );
  }

  getItemCount() {
    return CTGUI_LIB.symbols.tguiComboBox_getItemCount(this.pointer);
  }

  setItemData(index: bigint, data: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_setItemData(
      this.pointer,
      index,
      data,
    );
  }

  getItemData(index: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_getItemData(this.pointer, index);
  }

  setMaximumItems(value: bigint) {
    return CTGUI_LIB.symbols.tguiComboBox_setMaximumItems(this.pointer, value);
  }

  getMaximumItems() {
    return CTGUI_LIB.symbols.tguiComboBox_getMaximumItems(this.pointer);
  }

  setDefaultText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_setDefaultText(this.pointer, value);
  }

  getDefaultText() {
    return CTGUI_LIB.symbols.tguiComboBox_getDefaultText(this.pointer);
  }

  setExpandDirection(value: number) {
    return CTGUI_LIB.symbols.tguiComboBox_setExpandDirection(
      this.pointer,
      value,
    );
  }

  getExpandDirection() {
    return CTGUI_LIB.symbols.tguiComboBox_getExpandDirection(this.pointer);
  }

  setChangeItemOnScroll(value: number) {
    return CTGUI_LIB.symbols.tguiComboBox_setChangeItemOnScroll(
      this.pointer,
      value,
    );
  }

  getChangeItemOnScroll() {
    return CTGUI_LIB.symbols.tguiComboBox_getChangeItemOnScroll(this.pointer);
  }

  contains(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_contains(this.pointer, item);
  }

  containsId(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBox_containsId(this.pointer, id);
  }
}

export class EditBox extends ClickableWidget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiEditBox_create());
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBox_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiEditBox_getText(this.pointer);
  }

  setDefaultText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBox_setDefaultText(this.pointer, value);
  }

  getDefaultText() {
    return CTGUI_LIB.symbols.tguiEditBox_getDefaultText(this.pointer);
  }

  setPasswordCharacter(value: number) {
    return CTGUI_LIB.symbols.tguiEditBox_setPasswordCharacter(
      this.pointer,
      value,
    );
  }

  getPasswordCharacter() {
    return CTGUI_LIB.symbols.tguiEditBox_getPasswordCharacter(this.pointer);
  }

  setMaximumCharacters(value: number) {
    return CTGUI_LIB.symbols.tguiEditBox_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  getMaximumCharacters() {
    return CTGUI_LIB.symbols.tguiEditBox_getMaximumCharacters(this.pointer);
  }

  setAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiEditBox_setAlignment(this.pointer, value);
  }

  getAlignment() {
    return CTGUI_LIB.symbols.tguiEditBox_getAlignment(this.pointer);
  }

  setTextWidthLimited(value: number) {
    return CTGUI_LIB.symbols.tguiEditBox_setTextWidthLimited(
      this.pointer,
      value,
    );
  }

  isTextWidthLimited() {
    return CTGUI_LIB.symbols.tguiEditBox_isTextWidthLimited(this.pointer);
  }

  setReadOnly(value: number) {
    return CTGUI_LIB.symbols.tguiEditBox_setReadOnly(this.pointer, value);
  }

  isReadOnly() {
    return CTGUI_LIB.symbols.tguiEditBox_isReadOnly(this.pointer);
  }

  setCaretPosition(value: bigint) {
    return CTGUI_LIB.symbols.tguiEditBox_setCaretPosition(this.pointer, value);
  }

  getCaretPosition() {
    return CTGUI_LIB.symbols.tguiEditBox_getCaretPosition(this.pointer);
  }

  setSuffix(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBox_setSuffix(this.pointer, value);
  }

  getSuffix() {
    return CTGUI_LIB.symbols.tguiEditBox_getSuffix(this.pointer);
  }

  setInputValidator(regex: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBox_setInputValidator(this.pointer, regex);
  }

  getInputValidator() {
    return CTGUI_LIB.symbols.tguiEditBox_getInputValidator(this.pointer);
  }

  selectText(start: bigint, length: bigint) {
    return CTGUI_LIB.symbols.tguiEditBox_selectText(
      this.pointer,
      start,
      length,
    );
  }

  getSelectedText() {
    return CTGUI_LIB.symbols.tguiEditBox_getSelectedText(this.pointer);
  }
}

export class EditBoxSlider {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor() {
    this.ptr = CTGUI_LIB.symbols.tguiEditBoxSlider_create();
  }

  getEditBoxRenderer() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getEditBoxRenderer(this.pointer);
  }

  getEditBoxSharedRenderer() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getEditBoxSharedRenderer(
      this.pointer,
    );
  }

  getSliderRenderer() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getSliderRenderer(this.pointer);
  }

  getSliderSharedRenderer() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getSliderSharedRenderer(
      this.pointer,
    );
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getValue(this.pointer);
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getMaximum(this.pointer);
  }

  setStep(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setStep(this.pointer, value);
  }

  getStep() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getStep(this.pointer);
  }

  setDecimalPlaces(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  getDecimalPlaces() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getDecimalPlaces(this.pointer);
  }

  setTextAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_setTextAlignment(
      this.pointer,
      value,
    );
  }

  getTextAlignment() {
    return CTGUI_LIB.symbols.tguiEditBoxSlider_getTextAlignment(this.pointer);
  }
}

export class FileDialog extends ChildWindow {
  constructor() {
    super(CTGUI_LIB.symbols.tguiFileDialog_create());
  }

  setFilename(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setFilename(this.pointer, value);
  }

  getFilename() {
    return CTGUI_LIB.symbols.tguiFileDialog_getFilename(this.pointer);
  }

  getFileTypeFiltersIndex() {
    return CTGUI_LIB.symbols.tguiFileDialog_getFileTypeFiltersIndex(
      this.pointer,
    );
  }

  setConfirmButtonText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setConfirmButtonText(
      this.pointer,
      value,
    );
  }

  getConfirmButtonText() {
    return CTGUI_LIB.symbols.tguiFileDialog_getConfirmButtonText(this.pointer);
  }

  setCancelButtonText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setCancelButtonText(
      this.pointer,
      value,
    );
  }

  getCancelButtonText() {
    return CTGUI_LIB.symbols.tguiFileDialog_getCancelButtonText(this.pointer);
  }

  setCreateFolderButtonText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setCreateFolderButtonText(
      this.pointer,
      value,
    );
  }

  getCreateFolderButtonText() {
    return CTGUI_LIB.symbols.tguiFileDialog_getCreateFolderButtonText(
      this.pointer,
    );
  }

  setFilenameLabelText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setFilenameLabelText(
      this.pointer,
      value,
    );
  }

  getFilenameLabelText() {
    return CTGUI_LIB.symbols.tguiFileDialog_getFilenameLabelText(this.pointer);
  }

  setAllowCreateFolder(value: number) {
    return CTGUI_LIB.symbols.tguiFileDialog_setAllowCreateFolder(
      this.pointer,
      value,
    );
  }

  getAllowCreateFolder() {
    return CTGUI_LIB.symbols.tguiFileDialog_getAllowCreateFolder(this.pointer);
  }

  setFileMustExist(value: number) {
    return CTGUI_LIB.symbols.tguiFileDialog_setFileMustExist(
      this.pointer,
      value,
    );
  }

  getFileMustExist() {
    return CTGUI_LIB.symbols.tguiFileDialog_getFileMustExist(this.pointer);
  }

  setSelectingDirectory(value: number) {
    return CTGUI_LIB.symbols.tguiFileDialog_setSelectingDirectory(
      this.pointer,
      value,
    );
  }

  getSelectingDirectory() {
    return CTGUI_LIB.symbols.tguiFileDialog_getSelectingDirectory(this.pointer);
  }

  setMultiSelect(value: number) {
    return CTGUI_LIB.symbols.tguiFileDialog_setMultiSelect(this.pointer, value);
  }

  getMultiSelect() {
    return CTGUI_LIB.symbols.tguiFileDialog_getMultiSelect(this.pointer);
  }

  setPath(widget: Deno.PointerValue<unknown>, path: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialog_setPath(widget, path);
  }

  getPath(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialog_getPath(widget);
  }

  getSelectedPaths(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiFileDialog_getSelectedPaths(widget, count);
  }

  setFileTypeFilters(
    widget: Deno.PointerValue<unknown>,
    filters: Deno.PointerValue<unknown>,
    filterCount: bigint,
    defaultFilterIndex: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiFileDialog_setFileTypeFilters(
      widget,
      filters,
      filterCount,
      defaultFilterIndex,
    );
  }

  getFileTypeFilters(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiFileDialog_getFileTypeFilters(widget, count);
  }

  setListViewColumnCaptions(
    widget: Deno.PointerValue<unknown>,
    nameColumnText: BufferSource,
    sizeColumnText: BufferSource,
    modifiedColumnText: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiFileDialog_setListViewColumnCaptions(
      widget,
      nameColumnText,
      sizeColumnText,
      modifiedColumnText,
    );
  }

  getListViewColumnCaptionsName(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialog_getListViewColumnCaptionsName(
      widget,
    );
  }

  getListViewColumnCaptionsSize(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialog_getListViewColumnCaptionsSize(
      widget,
    );
  }

  getListViewColumnCaptionsModified(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialog_getListViewColumnCaptionsModified(
      widget,
    );
  }
}

export class FileDialogFilter {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(name: BufferSource) {
    this.ptr = CTGUI_LIB.symbols.tguiFileDialogFilter_create(name);
  }

  destroy(filter: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogFilter_destroy(filter);
  }

  addExpression(filter: Deno.PointerValue<unknown>, expression: BufferSource) {
    return CTGUI_LIB.symbols.tguiFileDialogFilter_addExpression(
      filter,
      expression,
    );
  }

  getExpressions(
    filter: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiFileDialogFilter_getExpressions(filter, count);
  }
}

export class Grid extends Container {
  constructor() {
    super(CTGUI_LIB.symbols.tguiGrid_create());
  }

  setAutoSize(value: number) {
    return CTGUI_LIB.symbols.tguiGrid_setAutoSize(this.pointer, value);
  }

  getAutoSize() {
    return CTGUI_LIB.symbols.tguiGrid_getAutoSize(this.pointer);
  }

  addWidget(
    widget: Deno.PointerValue<unknown>,
    row: bigint,
    col: bigint,
    alignment: number,
    padding: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGrid_addWidget(
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
  ) {
    return CTGUI_LIB.symbols.tguiGrid_setWidgetCell(
      this.pointer,
      widget,
      row,
      col,
      alignment,
      padding,
    );
  }

  getWidget(row: bigint, col: bigint) {
    return CTGUI_LIB.symbols.tguiGrid_getWidget(this.pointer, row, col);
  }

  setWidgetAlignment(widget: Deno.PointerValue<unknown>, alignment: number) {
    return CTGUI_LIB.symbols.tguiGrid_setWidgetAlignment(
      this.pointer,
      widget,
      alignment,
    );
  }

  setWidgetAlignmentByCell(row: bigint, col: bigint, alignment: number) {
    return CTGUI_LIB.symbols.tguiGrid_setWidgetAlignmentByCell(
      this.pointer,
      row,
      col,
      alignment,
    );
  }

  getWidgetAlignment(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGrid_getWidgetAlignment(this.pointer, widget);
  }

  getWidgetAlignmentByCell(row: bigint, col: bigint) {
    return CTGUI_LIB.symbols.tguiGrid_getWidgetAlignmentByCell(
      this.pointer,
      row,
      col,
    );
  }

  setWidgetPadding(
    widget: Deno.PointerValue<unknown>,
    padding: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGrid_setWidgetPadding(
      this.pointer,
      widget,
      padding,
    );
  }

  setWidgetPaddingByCell(
    row: bigint,
    col: bigint,
    padding: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGrid_setWidgetPaddingByCell(
      this.pointer,
      row,
      col,
      padding,
    );
  }

  getWidgetPadding(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiGrid_getWidgetPadding(this.pointer, widget);
  }

  getWidgetPaddingByCell(row: bigint, col: bigint) {
    return CTGUI_LIB.symbols.tguiGrid_getWidgetPaddingByCell(
      this.pointer,
      row,
      col,
    );
  }

  getWidgetLocations(
    grid: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiGrid_getWidgetLocations(grid, count);
  }
}

export class GridWidgetLocation {
  destroy(locationList: Deno.PointerValue<unknown>, count: bigint) {
    return CTGUI_LIB.symbols.tguiGridWidgetLocation_destroy(
      locationList,
      count,
    );
  }
}

export class HorizontalLayout extends BoxLayoutRatios {
  constructor() {
    super(CTGUI_LIB.symbols.tguiHorizontalLayout_create());
  }
}

export class HorizontalWrap extends BoxLayout {
  constructor() {
    super(CTGUI_LIB.symbols.tguiHorizontalWrap_create());
  }
}

export class Knob extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiKnob_create());
  }

  setStartRotation(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setStartRotation(this.pointer, value);
  }

  getStartRotation() {
    return CTGUI_LIB.symbols.tguiKnob_getStartRotation(this.pointer);
  }

  setEndRotation(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setEndRotation(this.pointer, value);
  }

  getEndRotation() {
    return CTGUI_LIB.symbols.tguiKnob_getEndRotation(this.pointer);
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiKnob_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiKnob_getMaximum(this.pointer);
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiKnob_getValue(this.pointer);
  }

  setClockwiseTurning(value: number) {
    return CTGUI_LIB.symbols.tguiKnob_setClockwiseTurning(this.pointer, value);
  }

  getClockwiseTurning() {
    return CTGUI_LIB.symbols.tguiKnob_getClockwiseTurning(this.pointer);
  }
}

export class ListBox extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiListBox_create());
  }

  addItem(item: BufferSource, id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_addItem(this.pointer, item, id);
  }

  addMultipleItems(items: Deno.PointerValue<unknown>, itemsLength: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_addMultipleItems(
      this.pointer,
      items,
      itemsLength,
    );
  }

  getItemById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_getItemById(this.pointer, id);
  }

  getItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_getItemByIndex(this.pointer, index);
  }

  getIndexById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_getIndexById(this.pointer, id);
  }

  getIdByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_getIdByIndex(this.pointer, index);
  }

  setSelectedItem(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_setSelectedItem(this.pointer, item);
  }

  setSelectedItemById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_setSelectedItemById(this.pointer, id);
  }

  setSelectedItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_setSelectedItemByIndex(
      this.pointer,
      index,
    );
  }

  deselectItem() {
    return CTGUI_LIB.symbols.tguiListBox_deselectItem(this.pointer);
  }

  removeItem(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_removeItem(this.pointer, item);
  }

  removeItemById(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_removeItemById(this.pointer, id);
  }

  removeItemByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_removeItemByIndex(this.pointer, index);
  }

  removeAllItems() {
    return CTGUI_LIB.symbols.tguiListBox_removeAllItems(this.pointer);
  }

  getSelectedItem() {
    return CTGUI_LIB.symbols.tguiListBox_getSelectedItem(this.pointer);
  }

  getSelectedItemId() {
    return CTGUI_LIB.symbols.tguiListBox_getSelectedItemId(this.pointer);
  }

  getSelectedItemIndex() {
    return CTGUI_LIB.symbols.tguiListBox_getSelectedItemIndex(this.pointer);
  }

  getHoveredItemIndex() {
    return CTGUI_LIB.symbols.tguiListBox_getHoveredItemIndex(this.pointer);
  }

  changeItem(originalValue: BufferSource, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_changeItem(
      this.pointer,
      originalValue,
      newValue,
    );
  }

  changeItemById(id: BufferSource, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_changeItemById(
      this.pointer,
      id,
      newValue,
    );
  }

  changeItemByIndex(index: bigint, newValue: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_changeItemByIndex(
      this.pointer,
      index,
      newValue,
    );
  }

  getItemCount() {
    return CTGUI_LIB.symbols.tguiListBox_getItemCount(this.pointer);
  }

  getItems(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBox_getItems(this.pointer, returnCount);
  }

  getItemIds(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBox_getItemIds(this.pointer, returnCount);
  }

  setItemData(index: bigint, data: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_setItemData(this.pointer, index, data);
  }

  getItemData(index: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_getItemData(this.pointer, index);
  }

  setItemHeight(value: number) {
    return CTGUI_LIB.symbols.tguiListBox_setItemHeight(this.pointer, value);
  }

  getItemHeight() {
    return CTGUI_LIB.symbols.tguiListBox_getItemHeight(this.pointer);
  }

  setMaximumItems(value: bigint) {
    return CTGUI_LIB.symbols.tguiListBox_setMaximumItems(this.pointer, value);
  }

  getMaximumItems() {
    return CTGUI_LIB.symbols.tguiListBox_getMaximumItems(this.pointer);
  }

  setAutoScroll(value: number) {
    return CTGUI_LIB.symbols.tguiListBox_setAutoScroll(this.pointer, value);
  }

  getAutoScroll() {
    return CTGUI_LIB.symbols.tguiListBox_getAutoScroll(this.pointer);
  }

  setTextAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiListBox_setTextAlignment(this.pointer, value);
  }

  getTextAlignment() {
    return CTGUI_LIB.symbols.tguiListBox_getTextAlignment(this.pointer);
  }

  contains(item: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_contains(this.pointer, item);
  }

  containsId(id: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBox_containsId(this.pointer, id);
  }
}

export class ListView extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiListView_create());
  }

  addColumn(text: BufferSource, width: number, columnAlignment: number) {
    return CTGUI_LIB.symbols.tguiListView_addColumn(
      this.pointer,
      text,
      width,
      columnAlignment,
    );
  }

  setColumnText(index: bigint, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_setColumnText(
      this.pointer,
      index,
      text,
    );
  }

  getColumnText(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnText(this.pointer, index);
  }

  setColumnWidth(index: bigint, width: number) {
    return CTGUI_LIB.symbols.tguiListView_setColumnWidth(
      this.pointer,
      index,
      width,
    );
  }

  getColumnWidth(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnWidth(this.pointer, index);
  }

  getColumnDesignWidth(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnDesignWidth(
      this.pointer,
      index,
    );
  }

  setColumnAlignment(index: bigint, columnAlignment: number) {
    return CTGUI_LIB.symbols.tguiListView_setColumnAlignment(
      this.pointer,
      index,
      columnAlignment,
    );
  }

  getColumnAlignment(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnAlignment(
      this.pointer,
      index,
    );
  }

  setColumnAutoResize(index: bigint, autoResize: number) {
    return CTGUI_LIB.symbols.tguiListView_setColumnAutoResize(
      this.pointer,
      index,
      autoResize,
    );
  }

  getColumnAutoResize(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnAutoResize(
      this.pointer,
      index,
    );
  }

  setColumnExpanded(index: bigint, expand: number) {
    return CTGUI_LIB.symbols.tguiListView_setColumnExpanded(
      this.pointer,
      index,
      expand,
    );
  }

  getColumnExpanded(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getColumnExpanded(
      this.pointer,
      index,
    );
  }

  removeAllColumns() {
    return CTGUI_LIB.symbols.tguiListView_removeAllColumns(this.pointer);
  }

  getColumnCount() {
    return CTGUI_LIB.symbols.tguiListView_getColumnCount(this.pointer);
  }

  setHeaderVisible(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setHeaderVisible(this.pointer, value);
  }

  getHeaderVisible() {
    return CTGUI_LIB.symbols.tguiListView_getHeaderVisible(this.pointer);
  }

  setHeaderHeight(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setHeaderHeight(this.pointer, value);
  }

  getHeaderHeight() {
    return CTGUI_LIB.symbols.tguiListView_getHeaderHeight(this.pointer);
  }

  getCurrentHeaderHeight() {
    return CTGUI_LIB.symbols.tguiListView_getCurrentHeaderHeight(this.pointer);
  }

  addItem(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_addItem(this.pointer, text);
  }

  addItemRow(item: Deno.PointerValue<unknown>, itemLength: bigint) {
    return CTGUI_LIB.symbols.tguiListView_addItemRow(
      this.pointer,
      item,
      itemLength,
    );
  }

  insertItem(index: bigint, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_insertItem(this.pointer, index, text);
  }

  insertItemRow(
    index: bigint,
    item: Deno.PointerValue<unknown>,
    itemLength: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiListView_insertItemRow(
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
  ) {
    return CTGUI_LIB.symbols.tguiListView_changeItem(
      this.pointer,
      index,
      item,
      itemLength,
    );
  }

  changeSubItem(index: bigint, column: bigint, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_changeSubItem(
      this.pointer,
      index,
      column,
      text,
    );
  }

  removeItem(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_removeItem(this.pointer, index);
  }

  removeAllItems() {
    return CTGUI_LIB.symbols.tguiListView_removeAllItems(this.pointer);
  }

  setSelectedItem(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_setSelectedItem(this.pointer, index);
  }

  setSelectedItems(indices: Deno.PointerValue<unknown>, indicesLength: bigint) {
    return CTGUI_LIB.symbols.tguiListView_setSelectedItems(
      this.pointer,
      indices,
      indicesLength,
    );
  }

  getSelectedItemIndex() {
    return CTGUI_LIB.symbols.tguiListView_getSelectedItemIndex(this.pointer);
  }

  getHoveredItemIndex() {
    return CTGUI_LIB.symbols.tguiListView_getHoveredItemIndex(this.pointer);
  }

  getSelectedItemIndices(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListView_getSelectedItemIndices(
      this.pointer,
      returnCount,
    );
  }

  deselectItems() {
    return CTGUI_LIB.symbols.tguiListView_deselectItems(this.pointer);
  }

  setMultiSelect(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setMultiSelect(this.pointer, value);
  }

  getMultiSelect() {
    return CTGUI_LIB.symbols.tguiListView_getMultiSelect(this.pointer);
  }

  setItemData(index: bigint, data: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_setItemData(
      this.pointer,
      index,
      data,
    );
  }

  getItemData(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getItemData(this.pointer, index);
  }

  setItemIcon(index: bigint, texture: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListView_setItemIcon(
      this.pointer,
      index,
      texture,
    );
  }

  getItemCount() {
    return CTGUI_LIB.symbols.tguiListView_getItemCount(this.pointer);
  }

  getItem(index: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getItem(this.pointer, index);
  }

  getItemCell(rowIndex: bigint, columnIndex: bigint) {
    return CTGUI_LIB.symbols.tguiListView_getItemCell(
      this.pointer,
      rowIndex,
      columnIndex,
    );
  }

  getItemRow(index: bigint, returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListView_getItemRow(
      this.pointer,
      index,
      returnCount,
    );
  }

  getItems(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListView_getItems(this.pointer, returnCount);
  }

  setItemHeight(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setItemHeight(this.pointer, value);
  }

  getItemHeight() {
    return CTGUI_LIB.symbols.tguiListView_getItemHeight(this.pointer);
  }

  setHeaderTextSize(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setHeaderTextSize(
      this.pointer,
      value,
    );
  }

  getHeaderTextSize() {
    return CTGUI_LIB.symbols.tguiListView_getHeaderTextSize(this.pointer);
  }

  setSeparatorWidth(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setSeparatorWidth(
      this.pointer,
      value,
    );
  }

  getSeparatorWidth() {
    return CTGUI_LIB.symbols.tguiListView_getSeparatorWidth(this.pointer);
  }

  setHeaderSeparatorHeight(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setHeaderSeparatorHeight(
      this.pointer,
      value,
    );
  }

  getHeaderSeparatorHeight() {
    return CTGUI_LIB.symbols.tguiListView_getHeaderSeparatorHeight(
      this.pointer,
    );
  }

  setGridLinesWidth(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setGridLinesWidth(
      this.pointer,
      value,
    );
  }

  getGridLinesWidth() {
    return CTGUI_LIB.symbols.tguiListView_getGridLinesWidth(this.pointer);
  }

  setAutoScroll(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setAutoScroll(this.pointer, value);
  }

  getAutoScroll() {
    return CTGUI_LIB.symbols.tguiListView_getAutoScroll(this.pointer);
  }

  setShowVerticalGridLines(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setShowVerticalGridLines(
      this.pointer,
      value,
    );
  }

  getShowVerticalGridLines() {
    return CTGUI_LIB.symbols.tguiListView_getShowVerticalGridLines(
      this.pointer,
    );
  }

  setShowHorizontalGridLines(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setShowHorizontalGridLines(
      this.pointer,
      value,
    );
  }

  getShowHorizontalGridLines() {
    return CTGUI_LIB.symbols.tguiListView_getShowHorizontalGridLines(
      this.pointer,
    );
  }

  setFixedIconSize(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListView_setFixedIconSize(this.pointer, value);
  }

  getFixedIconSize() {
    return CTGUI_LIB.symbols.tguiListView_getFixedIconSize(this.pointer);
  }

  setResizableColumns(value: number) {
    return CTGUI_LIB.symbols.tguiListView_setResizableColumns(
      this.pointer,
      value,
    );
  }

  getResizableColumns() {
    return CTGUI_LIB.symbols.tguiListView_getResizableColumns(this.pointer);
  }

  sort(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
    callback: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiListView_sort(widget, index, callback);
  }
}

export class MenuBar extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiMenuBar_create());
  }

  addMenu(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_addMenu(this.pointer, text);
  }

  addMenuItem(menu: BufferSource, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_addMenuItem(this.pointer, menu, text);
  }

  addMenuItemToLastMenu(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_addMenuItemToLastMenu(
      this.pointer,
      text,
    );
  }

  addMenuItemHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    createParents: number,
  ) {
    return CTGUI_LIB.symbols.tguiMenuBar_addMenuItemHierarchy(
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
  ) {
    return CTGUI_LIB.symbols.tguiMenuBar_changeMenuItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      text,
    );
  }

  removeMenu(menu: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_removeMenu(this.pointer, menu);
  }

  removeMenuItem(menu: BufferSource, menuItem: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_removeMenuItem(
      this.pointer,
      menu,
      menuItem,
    );
  }

  removeMenuItemHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    removeParentsWhenEmpty: number,
  ) {
    return CTGUI_LIB.symbols.tguiMenuBar_removeMenuItemHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
      removeParentsWhenEmpty,
    );
  }

  removeAllMenus() {
    return CTGUI_LIB.symbols.tguiMenuBar_removeAllMenus(this.pointer);
  }

  setMenuEnabled(text: BufferSource, enabled: number) {
    return CTGUI_LIB.symbols.tguiMenuBar_setMenuEnabled(
      this.pointer,
      text,
      enabled,
    );
  }

  getMenuEnabled(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_getMenuEnabled(this.pointer, text);
  }

  setMenuItemEnabled(menu: BufferSource, text: BufferSource, enabled: number) {
    return CTGUI_LIB.symbols.tguiMenuBar_setMenuItemEnabled(
      this.pointer,
      menu,
      text,
      enabled,
    );
  }

  getMenuItemEnabled(menu: BufferSource, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBar_getMenuItemEnabled(
      this.pointer,
      menu,
      text,
    );
  }

  setMenuItemEnabledHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    enabled: number,
  ) {
    return CTGUI_LIB.symbols.tguiMenuBar_setMenuItemEnabledHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
      enabled,
    );
  }

  getMenuItemEnabledHierarchy(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiMenuBar_getMenuItemEnabledHierarchy(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  closeMenu() {
    return CTGUI_LIB.symbols.tguiMenuBar_closeMenu(this.pointer);
  }

  setMinimumSubMenuWidth(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBar_setMinimumSubMenuWidth(
      this.pointer,
      value,
    );
  }

  getMinimumSubMenuWidth() {
    return CTGUI_LIB.symbols.tguiMenuBar_getMinimumSubMenuWidth(this.pointer);
  }

  setInvertedMenuDirection(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBar_setInvertedMenuDirection(
      this.pointer,
      value,
    );
  }

  getInvertedMenuDirection() {
    return CTGUI_LIB.symbols.tguiMenuBar_getInvertedMenuDirection(this.pointer);
  }

  getMenus(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMenuBar_getMenus(widget);
  }
}

export class MenuBarMenuList {
  destroy(menuList: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMenuBarMenuList_destroy(menuList);
  }
}

export class MessageBox extends ChildWindow {
  constructor() {
    super(CTGUI_LIB.symbols.tguiMessageBox_create());
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMessageBox_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiMessageBox_getText(this.pointer);
  }

  addButton(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiMessageBox_addButton(this.pointer, text);
  }

  changeButtons(
    buttonCaptions: Deno.PointerValue<unknown>,
    buttonCaptionsLength: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiMessageBox_changeButtons(
      this.pointer,
      buttonCaptions,
      buttonCaptionsLength,
    );
  }

  getButtons(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMessageBox_getButtons(
      this.pointer,
      returnCount,
    );
  }

  setLabelAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiMessageBox_setLabelAlignment(
      this.pointer,
      value,
    );
  }

  getLabelAlignment() {
    return CTGUI_LIB.symbols.tguiMessageBox_getLabelAlignment(this.pointer);
  }

  setButtonAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiMessageBox_setButtonAlignment(
      this.pointer,
      value,
    );
  }

  getButtonAlignment() {
    return CTGUI_LIB.symbols.tguiMessageBox_getButtonAlignment(this.pointer);
  }
}

export class Picture extends ClickableWidget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiPicture_create());
  }
}

export class ProgressBar extends ClickableWidget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiProgressBar_create());
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBar_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiProgressBar_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBar_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiProgressBar_getMaximum(this.pointer);
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBar_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiProgressBar_getValue(this.pointer);
  }

  incrementValue() {
    return CTGUI_LIB.symbols.tguiProgressBar_incrementValue(this.pointer);
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBar_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiProgressBar_getText(this.pointer);
  }

  setFillDirection(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBar_setFillDirection(
      this.pointer,
      value,
    );
  }

  getFillDirection() {
    return CTGUI_LIB.symbols.tguiProgressBar_getFillDirection(this.pointer);
  }
}

export class RadioButtonGroup extends Container {
  constructor() {
    super(CTGUI_LIB.symbols.tguiRadioButtonGroup_create());
  }

  uncheckRadioButtons() {
    return CTGUI_LIB.symbols.tguiRadioButtonGroup_uncheckRadioButtons(
      this.pointer,
    );
  }
}

export class RangeSlider extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiRangeSlider_create());
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiRangeSlider_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiRangeSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiRangeSlider_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiRangeSlider_getMaximum(this.pointer);
  }

  setSelectionStart(value: number) {
    return CTGUI_LIB.symbols.tguiRangeSlider_setSelectionStart(
      this.pointer,
      value,
    );
  }

  getSelectionStart() {
    return CTGUI_LIB.symbols.tguiRangeSlider_getSelectionStart(this.pointer);
  }

  setSelectionEnd(value: number) {
    return CTGUI_LIB.symbols.tguiRangeSlider_setSelectionEnd(
      this.pointer,
      value,
    );
  }

  getSelectionEnd() {
    return CTGUI_LIB.symbols.tguiRangeSlider_getSelectionEnd(this.pointer);
  }

  setStep(value: number) {
    return CTGUI_LIB.symbols.tguiRangeSlider_setStep(this.pointer, value);
  }

  getStep() {
    return CTGUI_LIB.symbols.tguiRangeSlider_getStep(this.pointer);
  }
}

export class Scrollbar extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiScrollbar_create());
  }

  setViewportSize(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setViewportSize(this.pointer, value);
  }

  getViewportSize() {
    return CTGUI_LIB.symbols.tguiScrollbar_getViewportSize(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiScrollbar_getMaximum(this.pointer);
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiScrollbar_getValue(this.pointer);
  }

  setScrollAmount(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setScrollAmount(this.pointer, value);
  }

  getScrollAmount() {
    return CTGUI_LIB.symbols.tguiScrollbar_getScrollAmount(this.pointer);
  }

  setPolicy(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setPolicy(this.pointer, value);
  }

  getPolicy() {
    return CTGUI_LIB.symbols.tguiScrollbar_getPolicy(this.pointer);
  }

  setOrientation(value: number) {
    return CTGUI_LIB.symbols.tguiScrollbar_setOrientation(this.pointer, value);
  }

  getOrientation() {
    return CTGUI_LIB.symbols.tguiScrollbar_getOrientation(this.pointer);
  }

  isShown() {
    return CTGUI_LIB.symbols.tguiScrollbar_isShown(this.pointer);
  }

  getMaxValue() {
    return CTGUI_LIB.symbols.tguiScrollbar_getMaxValue(this.pointer);
  }

  getDefaultWidth() {
    return CTGUI_LIB.symbols.tguiScrollbar_getDefaultWidth(this.pointer);
  }
}

export class Slider extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiSlider_create());
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiSlider_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiSlider_getMaximum(this.pointer);
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiSlider_getValue(this.pointer);
  }

  setStep(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setStep(this.pointer, value);
  }

  getStep() {
    return CTGUI_LIB.symbols.tguiSlider_getStep(this.pointer);
  }

  setOrientation(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setOrientation(this.pointer, value);
  }

  getOrientation() {
    return CTGUI_LIB.symbols.tguiSlider_getOrientation(this.pointer);
  }

  setInvertedDirection(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setInvertedDirection(
      this.pointer,
      value,
    );
  }

  getInvertedDirection() {
    return CTGUI_LIB.symbols.tguiSlider_getInvertedDirection(this.pointer);
  }

  setChangeValueOnScroll(value: number) {
    return CTGUI_LIB.symbols.tguiSlider_setChangeValueOnScroll(
      this.pointer,
      value,
    );
  }

  getChangeValueOnScroll() {
    return CTGUI_LIB.symbols.tguiSlider_getChangeValueOnScroll(this.pointer);
  }
}

export class SpinButton extends ClickableWidget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiSpinButton_create());
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButton_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiSpinButton_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButton_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiSpinButton_getMaximum(this.pointer);
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButton_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiSpinButton_getValue(this.pointer);
  }

  setStep(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButton_setStep(this.pointer, value);
  }

  getStep() {
    return CTGUI_LIB.symbols.tguiSpinButton_getStep(this.pointer);
  }

  setOrientation(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButton_setOrientation(this.pointer, value);
  }

  getOrientation() {
    return CTGUI_LIB.symbols.tguiSpinButton_getOrientation(this.pointer);
  }
}

export class SpinControl {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor() {
    this.ptr = CTGUI_LIB.symbols.tguiSpinControl_create();
  }

  getSpinButtonRenderer() {
    return CTGUI_LIB.symbols.tguiSpinControl_getSpinButtonRenderer(
      this.pointer,
    );
  }

  getSpinButtonSharedRenderer() {
    return CTGUI_LIB.symbols.tguiSpinControl_getSpinButtonSharedRenderer(
      this.pointer,
    );
  }

  getSpinTextRenderer() {
    return CTGUI_LIB.symbols.tguiSpinControl_getSpinTextRenderer(this.pointer);
  }

  getSpinTextSharedRenderer() {
    return CTGUI_LIB.symbols.tguiSpinControl_getSpinTextSharedRenderer(
      this.pointer,
    );
  }

  setValue(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setValue(this.pointer, value);
  }

  getValue() {
    return CTGUI_LIB.symbols.tguiSpinControl_getValue(this.pointer);
  }

  setMinimum(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setMinimum(this.pointer, value);
  }

  getMinimum() {
    return CTGUI_LIB.symbols.tguiSpinControl_getMinimum(this.pointer);
  }

  setMaximum(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setMaximum(this.pointer, value);
  }

  getMaximum() {
    return CTGUI_LIB.symbols.tguiSpinControl_getMaximum(this.pointer);
  }

  setStep(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setStep(this.pointer, value);
  }

  getStep() {
    return CTGUI_LIB.symbols.tguiSpinControl_getStep(this.pointer);
  }

  setDecimalPlaces(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setDecimalPlaces(
      this.pointer,
      value,
    );
  }

  getDecimalPlaces() {
    return CTGUI_LIB.symbols.tguiSpinControl_getDecimalPlaces(this.pointer);
  }

  setSpinButtonWidth(value: number) {
    return CTGUI_LIB.symbols.tguiSpinControl_setSpinButtonWidth(
      this.pointer,
      value,
    );
  }

  getSpinButtonWidth() {
    return CTGUI_LIB.symbols.tguiSpinControl_getSpinButtonWidth(this.pointer);
  }
}

export class Tabs extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiTabs_create());
  }

  setAutoSize(value: number) {
    return CTGUI_LIB.symbols.tguiTabs_setAutoSize(this.pointer, value);
  }

  getAutoSize() {
    return CTGUI_LIB.symbols.tguiTabs_getAutoSize(this.pointer);
  }

  add(text: BufferSource, select: number) {
    return CTGUI_LIB.symbols.tguiTabs_add(this.pointer, text, select);
  }

  insert(index: bigint, text: BufferSource, select: number) {
    return CTGUI_LIB.symbols.tguiTabs_insert(this.pointer, index, text, select);
  }

  getText(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabs_getText(this.pointer, index);
  }

  changeText(index: bigint, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabs_changeText(this.pointer, index, text);
  }

  deselect() {
    return CTGUI_LIB.symbols.tguiTabs_deselect(this.pointer);
  }

  removeAll() {
    return CTGUI_LIB.symbols.tguiTabs_removeAll(this.pointer);
  }

  getSelected() {
    return CTGUI_LIB.symbols.tguiTabs_getSelected(this.pointer);
  }

  getSelectedIndex() {
    return CTGUI_LIB.symbols.tguiTabs_getSelectedIndex(this.pointer);
  }

  getHoveredIndex() {
    return CTGUI_LIB.symbols.tguiTabs_getHoveredIndex(this.pointer);
  }

  getTabsCount() {
    return CTGUI_LIB.symbols.tguiTabs_getTabsCount(this.pointer);
  }

  setTabVisible(index: bigint, visible: number) {
    return CTGUI_LIB.symbols.tguiTabs_setTabVisible(
      this.pointer,
      index,
      visible,
    );
  }

  getTabVisible(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabs_getTabVisible(this.pointer, index);
  }

  setTabEnabled(index: bigint, visible: number) {
    return CTGUI_LIB.symbols.tguiTabs_setTabEnabled(
      this.pointer,
      index,
      visible,
    );
  }

  getTabEnabled(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabs_getTabEnabled(this.pointer, index);
  }

  setMaximumTabWidth(value: number) {
    return CTGUI_LIB.symbols.tguiTabs_setMaximumTabWidth(this.pointer, value);
  }

  getMaximumTabWidth() {
    return CTGUI_LIB.symbols.tguiTabs_getMaximumTabWidth(this.pointer);
  }

  setMinimumTabWidth(value: number) {
    return CTGUI_LIB.symbols.tguiTabs_setMinimumTabWidth(this.pointer, value);
  }

  getMinimumTabWidth() {
    return CTGUI_LIB.symbols.tguiTabs_getMinimumTabWidth(this.pointer);
  }

  selectByText(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabs_selectByText(this.pointer, text);
  }

  selectByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabs_selectByIndex(this.pointer, index);
  }

  removeByText(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabs_removeByText(this.pointer, text);
  }

  removeByIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabs_removeByIndex(this.pointer, index);
  }
}

export class TabContainer extends Container {
  constructor() {
    super(CTGUI_LIB.symbols.tguiTabContainer_create());
  }

  getTabsRenderer() {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabsRenderer(this.pointer);
  }

  getTabsSharedRenderer() {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabsSharedRenderer(
      this.pointer,
    );
  }

  select(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabContainer_select(this.pointer, index);
  }

  getPanelCount() {
    return CTGUI_LIB.symbols.tguiTabContainer_getPanelCount(this.pointer);
  }

  getSelectedIndex() {
    return CTGUI_LIB.symbols.tguiTabContainer_getSelectedIndex(this.pointer);
  }

  getTabText(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabText(this.pointer, index);
  }

  changeTabText(index: bigint, text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabContainer_changeTabText(
      this.pointer,
      index,
      text,
    );
  }

  setTabFixedSize(value: number) {
    return CTGUI_LIB.symbols.tguiTabContainer_setTabFixedSize(
      this.pointer,
      value,
    );
  }

  getTabFixedSize() {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabFixedSize(this.pointer);
  }

  setTabAlignment(value: number) {
    return CTGUI_LIB.symbols.tguiTabContainer_setTabAlignment(
      this.pointer,
      value,
    );
  }

  getTabAlignment() {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabAlignment(this.pointer);
  }

  setTabsHeight(height: number) {
    return CTGUI_LIB.symbols.tguiTabContainer_setTabsHeight(
      this.pointer,
      height,
    );
  }

  setTabsHeightFromLayout(layout: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabContainer_setTabsHeightFromLayout(
      this.pointer,
      layout,
    );
  }

  removeTabWithName(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabContainer_removeTabWithName(
      this.pointer,
      text,
    );
  }

  removeTabWithIndex(index: bigint) {
    return CTGUI_LIB.symbols.tguiTabContainer_removeTabWithIndex(
      this.pointer,
      index,
    );
  }

  addTab(
    widget: Deno.PointerValue<unknown>,
    name: BufferSource,
    select: number,
  ) {
    return CTGUI_LIB.symbols.tguiTabContainer_addTab(widget, name, select);
  }

  insertTab(
    widget: Deno.PointerValue<unknown>,
    index: bigint,
    name: BufferSource,
    select: number,
  ) {
    return CTGUI_LIB.symbols.tguiTabContainer_insertTab(
      widget,
      index,
      name,
      select,
    );
  }

  getIndex(
    widget: Deno.PointerValue<unknown>,
    panel: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiTabContainer_getIndex(widget, panel);
  }

  getSelected(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabContainer_getSelected(widget);
  }

  getPanel(widget: Deno.PointerValue<unknown>, index: number) {
    return CTGUI_LIB.symbols.tguiTabContainer_getPanel(widget, index);
  }

  getTabs(widget: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabContainer_getTabs(widget);
  }
}

export class TextArea extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiTextArea_create());
  }

  setText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextArea_setText(this.pointer, value);
  }

  getText() {
    return CTGUI_LIB.symbols.tguiTextArea_getText(this.pointer);
  }

  addText(text: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextArea_addText(this.pointer, text);
  }

  setDefaultText(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextArea_setDefaultText(this.pointer, value);
  }

  getDefaultText() {
    return CTGUI_LIB.symbols.tguiTextArea_getDefaultText(this.pointer);
  }

  setSelectedText(selectionStartIndex: bigint, selectionEndIndex: bigint) {
    return CTGUI_LIB.symbols.tguiTextArea_setSelectedText(
      this.pointer,
      selectionStartIndex,
      selectionEndIndex,
    );
  }

  getSelectedText() {
    return CTGUI_LIB.symbols.tguiTextArea_getSelectedText(this.pointer);
  }

  getSelectionStart() {
    return CTGUI_LIB.symbols.tguiTextArea_getSelectionStart(this.pointer);
  }

  getSelectionEnd() {
    return CTGUI_LIB.symbols.tguiTextArea_getSelectionEnd(this.pointer);
  }

  setMaximumCharacters(value: bigint) {
    return CTGUI_LIB.symbols.tguiTextArea_setMaximumCharacters(
      this.pointer,
      value,
    );
  }

  getMaximumCharacters() {
    return CTGUI_LIB.symbols.tguiTextArea_getMaximumCharacters(this.pointer);
  }

  setTabString(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextArea_setTabString(this.pointer, value);
  }

  getTabString() {
    return CTGUI_LIB.symbols.tguiTextArea_getTabString(this.pointer);
  }

  setCaretPosition(value: bigint) {
    return CTGUI_LIB.symbols.tguiTextArea_setCaretPosition(this.pointer, value);
  }

  getCaretPosition() {
    return CTGUI_LIB.symbols.tguiTextArea_getCaretPosition(this.pointer);
  }

  getCaretLine() {
    return CTGUI_LIB.symbols.tguiTextArea_getCaretLine(this.pointer);
  }

  getCaretColumn() {
    return CTGUI_LIB.symbols.tguiTextArea_getCaretColumn(this.pointer);
  }

  setReadOnly(value: number) {
    return CTGUI_LIB.symbols.tguiTextArea_setReadOnly(this.pointer, value);
  }

  isReadOnly() {
    return CTGUI_LIB.symbols.tguiTextArea_isReadOnly(this.pointer);
  }

  enableMonospacedFontOptimization(enable: number) {
    return CTGUI_LIB.symbols.tguiTextArea_enableMonospacedFontOptimization(
      this.pointer,
      enable,
    );
  }

  getLinesCount() {
    return CTGUI_LIB.symbols.tguiTextArea_getLinesCount(this.pointer);
  }
}

export class ToggleButton extends ButtonBase {
  constructor() {
    super(CTGUI_LIB.symbols.tguiToggleButton_create());
  }

  setDown(value: number) {
    return CTGUI_LIB.symbols.tguiToggleButton_setDown(this.pointer, value);
  }

  isDown() {
    return CTGUI_LIB.symbols.tguiToggleButton_isDown(this.pointer);
  }
}

export class TreeView extends Widget {
  constructor() {
    super(CTGUI_LIB.symbols.tguiTreeView_create());
  }

  setItemHeight(value: number) {
    return CTGUI_LIB.symbols.tguiTreeView_setItemHeight(this.pointer, value);
  }

  getItemHeight() {
    return CTGUI_LIB.symbols.tguiTreeView_getItemHeight(this.pointer);
  }

  addItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    createParents: number,
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_addItem(
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
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_changeItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
      leafText,
    );
  }

  expand(hierarchy: Deno.PointerValue<unknown>, hierarchyLength: bigint) {
    return CTGUI_LIB.symbols.tguiTreeView_expand(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  collapse(hierarchy: Deno.PointerValue<unknown>, hierarchyLength: bigint) {
    return CTGUI_LIB.symbols.tguiTreeView_collapse(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  expandAll() {
    return CTGUI_LIB.symbols.tguiTreeView_expandAll(this.pointer);
  }

  collapseAll() {
    return CTGUI_LIB.symbols.tguiTreeView_collapseAll(this.pointer);
  }

  deselectItem() {
    return CTGUI_LIB.symbols.tguiTreeView_deselectItem(this.pointer);
  }

  removeAllItems() {
    return CTGUI_LIB.symbols.tguiTreeView_removeAllItems(this.pointer);
  }

  getSelectedItem(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeView_getSelectedItem(
      this.pointer,
      returnCount,
    );
  }

  getHoveredItem(returnCount: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeView_getHoveredItem(
      this.pointer,
      returnCount,
    );
  }

  setItemIndexInParent(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    index: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_setItemIndexInParent(
      this.pointer,
      hierarchy,
      hierarchyLength,
      index,
    );
  }

  getItemIndexInParent(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_getItemIndexInParent(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  selectItem(hierarchy: Deno.PointerValue<unknown>, hierarchyLength: bigint) {
    return CTGUI_LIB.symbols.tguiTreeView_selectItem(
      this.pointer,
      hierarchy,
      hierarchyLength,
    );
  }

  removeItem(
    hierarchy: Deno.PointerValue<unknown>,
    hierarchyLength: bigint,
    removeParentsWhenEmpty: number,
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_removeItem(
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
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_getNode(
      widget,
      hierarchy,
      hierarchyLength,
    );
  }

  getNodes(
    widget: Deno.PointerValue<unknown>,
    count: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiTreeView_getNodes(widget, count);
  }
}

export class TreeViewConstNode {
  destroy(node: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewConstNode_destroy(node);
  }
}

export class VerticalLayout extends BoxLayoutRatios {
  constructor() {
    super(CTGUI_LIB.symbols.tguiVerticalLayout_create());
  }
}

export class BoxLayoutRenderer extends GroupRenderer {
  constructor() {
    super(CTGUI_LIB.symbols.tguiBoxLayoutRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiBoxLayoutRenderer_copy(other);
  }

  setSpaceBetweenWidgets(value: number) {
    return CTGUI_LIB.symbols.tguiBoxLayoutRenderer_setSpaceBetweenWidgets(
      this.pointer,
      value,
    );
  }

  getSpaceBetweenWidgets() {
    return CTGUI_LIB.symbols.tguiBoxLayoutRenderer_getSpaceBetweenWidgets(
      this.pointer,
    );
  }
}

export class ButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiButtonRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorders(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorHover(this.pointer);
  }

  setTextColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorFocused(
      this.pointer,
      value,
    );
  }

  getTextColorFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setTextColorDown(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorDown(
      this.pointer,
      value,
    );
  }

  getTextColorDown() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorDown(this.pointer);
  }

  setTextColorDownHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorDownHover(
      this.pointer,
      value,
    );
  }

  getTextColorDownHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorDownHover(
      this.pointer,
    );
  }

  setTextColorDownFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorDownFocused(
      this.pointer,
      value,
    );
  }

  getTextColorDownFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorDownFocused(
      this.pointer,
    );
  }

  setTextColorDownDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextColorDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDownDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextColorDownDisabled(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setBackgroundColorDown(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorDown(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDown() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorDown(
      this.pointer,
    );
  }

  setBackgroundColorDownHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorDownHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDownHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorDownHover(
      this.pointer,
    );
  }

  setBackgroundColorDownFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorDownFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDownFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorDownFocused(
      this.pointer,
    );
  }

  setBackgroundColorDownDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBackgroundColorDownDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDownDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBackgroundColorDownDisabled(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setBorderColorDown(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorDown(
      this.pointer,
      value,
    );
  }

  getBorderColorDown() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorDown(
      this.pointer,
    );
  }

  setBorderColorDownHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorDownHover(
      this.pointer,
      value,
    );
  }

  getBorderColorDownHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorDownHover(
      this.pointer,
    );
  }

  setBorderColorDownFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorDownFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorDownFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorDownFocused(
      this.pointer,
    );
  }

  setBorderColorDownDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setBorderColorDownDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDownDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getBorderColorDownDisabled(
      this.pointer,
    );
  }

  setTexture(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTexture(this.pointer, value);
  }

  getTexture() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTexture(this.pointer);
  }

  setTextureHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  getTextureHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureHover(this.pointer);
  }

  setTextureFocused(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  getTextureFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureFocused(this.pointer);
  }

  setTextureDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  setTextureDown(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureDown(
      this.pointer,
      value,
    );
  }

  getTextureDown() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureDown(this.pointer);
  }

  setTextureDownHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureDownHover(
      this.pointer,
      value,
    );
  }

  getTextureDownHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureDownHover(
      this.pointer,
    );
  }

  setTextureDownFocused(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureDownFocused(
      this.pointer,
      value,
    );
  }

  getTextureDownFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureDownFocused(
      this.pointer,
    );
  }

  setTextureDownDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextureDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDownDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextureDownDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyle(this.pointer);
  }

  setTextStyleHover(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleHover(
      this.pointer,
      value,
    );
  }

  getTextStyleHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleHover(this.pointer);
  }

  setTextStyleFocused(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleFocused(
      this.pointer,
      value,
    );
  }

  getTextStyleFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleFocused(
      this.pointer,
    );
  }

  setTextStyleDisabled(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleDisabled(
      this.pointer,
      value,
    );
  }

  getTextStyleDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleDisabled(
      this.pointer,
    );
  }

  setTextStyleDown(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleDown(
      this.pointer,
      value,
    );
  }

  getTextStyleDown() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleDown(this.pointer);
  }

  setTextStyleDownHover(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleDownHover(
      this.pointer,
      value,
    );
  }

  getTextStyleDownHover() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleDownHover(
      this.pointer,
    );
  }

  setTextStyleDownFocused(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleDownFocused(
      this.pointer,
      value,
    );
  }

  getTextStyleDownFocused() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleDownFocused(
      this.pointer,
    );
  }

  setTextStyleDownDisabled(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextStyleDownDisabled(
      this.pointer,
      value,
    );
  }

  getTextStyleDownDisabled() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextStyleDownDisabled(
      this.pointer,
    );
  }

  setTextOutlineColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  getTextOutlineThickness() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  setRoundedBorderRadius(value: number) {
    return CTGUI_LIB.symbols.tguiButtonRenderer_setRoundedBorderRadius(
      this.pointer,
      value,
    );
  }

  getRoundedBorderRadius() {
    return CTGUI_LIB.symbols.tguiButtonRenderer_getRoundedBorderRadius(
      this.pointer,
    );
  }
}

export class ChatBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiChatBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiChatBoxRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiChatBoxRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class ColorPickerRenderer extends ChildWindowRenderer {
  constructor() {
    super(CTGUI_LIB.symbols.tguiColorPickerRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiColorPickerRenderer_copy(other);
  }

  setButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton() {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_getButton(this.pointer);
  }

  setLabel(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_setLabel(
      this.pointer,
      value,
    );
  }

  getLabel() {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_getLabel(this.pointer);
  }

  setSlider(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_setSlider(
      this.pointer,
      value,
    );
  }

  getSlider() {
    return CTGUI_LIB.symbols.tguiColorPickerRenderer_getSlider(this.pointer);
  }
}

export class ComboBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiComboBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiComboBoxRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextColor(this.pointer);
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setDefaultTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setArrowBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setArrowBackgroundColor(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  setArrowBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setArrowBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getArrowBackgroundColorHover(
      this.pointer,
    );
  }

  setArrowBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiComboBoxRenderer_setArrowBackgroundColorDisabled(
        this.pointer,
        value,
      );
  }

  getArrowBackgroundColorDisabled() {
    return CTGUI_LIB.symbols
      .tguiComboBoxRenderer_getArrowBackgroundColorDisabled(this.pointer);
  }

  setArrowColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getArrowColor(this.pointer);
  }

  setArrowColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setArrowColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setArrowColorDisabled(
      this.pointer,
      value,
    );
  }

  getArrowColorDisabled() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getArrowColorDisabled(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureBackgroundDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextureBackgroundDisabled(
      this.pointer,
      value,
    );
  }

  getTextureBackgroundDisabled() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextureBackgroundDisabled(
      this.pointer,
    );
  }

  setTextureArrow(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextureArrow(
      this.pointer,
      value,
    );
  }

  getTextureArrow() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextureArrow(this.pointer);
  }

  setTextureArrowHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextureArrowHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowHover() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextureArrowHover(
      this.pointer,
    );
  }

  setTextureArrowDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextureArrowDisabled(
      this.pointer,
      value,
    );
  }

  getTextureArrowDisabled() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextureArrowDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getTextStyle(this.pointer);
  }

  setDefaultTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  getDefaultTextStyle() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }

  setListBox(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_setListBox(
      this.pointer,
      value,
    );
  }

  getListBox() {
    return CTGUI_LIB.symbols.tguiComboBoxRenderer_getListBox(this.pointer);
  }
}

export class EditBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiEditBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiEditBoxRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getPadding(this.pointer);
  }

  setCaretWidth(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  getCaretWidth() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getCaretWidth(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextColor(this.pointer);
  }

  setDefaultTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setTextColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextColorFocused(
      this.pointer,
      value,
    );
  }

  getTextColorFocused() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextColorFocused(
      this.pointer,
    );
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setSelectedTextBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextBackgroundColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getSelectedTextBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBackgroundColorFocused(
      this.pointer,
      value,
    );
  }

  getBackgroundColorFocused() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBackgroundColorFocused(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setCaretColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setCaretColor(
      this.pointer,
      value,
    );
  }

  getCaretColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getCaretColor(this.pointer);
  }

  setCaretColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setCaretColorHover(
      this.pointer,
      value,
    );
  }

  getCaretColorHover() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getCaretColorHover(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setTexture(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  getTexture() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTexture(this.pointer);
  }

  setTextureHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextureHover(
      this.pointer,
      value,
    );
  }

  getTextureHover() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextureHover(this.pointer);
  }

  setTextureFocused(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextureFocused(
      this.pointer,
      value,
    );
  }

  getTextureFocused() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextureFocused(
      this.pointer,
    );
  }

  setTextureDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextureDisabled(
      this.pointer,
      value,
    );
  }

  getTextureDisabled() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextureDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getTextStyle(this.pointer);
  }

  setDefaultTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_setDefaultTextStyle(
      this.pointer,
      value,
    );
  }

  getDefaultTextStyle() {
    return CTGUI_LIB.symbols.tguiEditBoxRenderer_getDefaultTextStyle(
      this.pointer,
    );
  }
}

export class FileDialogRenderer extends ChildWindowRenderer {
  constructor() {
    super(CTGUI_LIB.symbols.tguiFileDialogRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiFileDialogRenderer_copy(other);
  }

  setListView(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setListView(
      this.pointer,
      value,
    );
  }

  getListView() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getListView(this.pointer);
  }

  setEditBox(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setEditBox(
      this.pointer,
      value,
    );
  }

  getEditBox() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getEditBox(this.pointer);
  }

  setFilenameLabel(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setFilenameLabel(
      this.pointer,
      value,
    );
  }

  getFilenameLabel() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getFilenameLabel(
      this.pointer,
    );
  }

  setFileTypeComboBox(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setFileTypeComboBox(
      this.pointer,
      value,
    );
  }

  getFileTypeComboBox() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getFileTypeComboBox(
      this.pointer,
    );
  }

  setButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getButton(this.pointer);
  }

  setBackButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setBackButton(
      this.pointer,
      value,
    );
  }

  getBackButton() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getBackButton(this.pointer);
  }

  setForwardButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setForwardButton(
      this.pointer,
      value,
    );
  }

  getForwardButton() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getForwardButton(
      this.pointer,
    );
  }

  setUpButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_setUpButton(
      this.pointer,
      value,
    );
  }

  getUpButton() {
    return CTGUI_LIB.symbols.tguiFileDialogRenderer_getUpButton(this.pointer);
  }

  setArrowsOnNavigationButtonsVisible(value: number) {
    return CTGUI_LIB.symbols
      .tguiFileDialogRenderer_setArrowsOnNavigationButtonsVisible(
        this.pointer,
        value,
      );
  }

  getArrowsOnNavigationButtonsVisible() {
    return CTGUI_LIB.symbols
      .tguiFileDialogRenderer_getArrowsOnNavigationButtonsVisible(this.pointer);
  }
}

export class KnobRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiKnobRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiKnobRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getBackgroundColor(this.pointer);
  }

  setThumbColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getThumbColor(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureForeground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setTextureForeground(
      this.pointer,
      value,
    );
  }

  getTextureForeground() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getTextureForeground(
      this.pointer,
    );
  }

  setImageRotation(value: number) {
    return CTGUI_LIB.symbols.tguiKnobRenderer_setImageRotation(
      this.pointer,
      value,
    );
  }

  getImageRotation() {
    return CTGUI_LIB.symbols.tguiKnobRenderer_getImageRotation(this.pointer);
  }
}

export class LabelRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiLabelRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiLabelRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setPadding(this.pointer, value);
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getPadding(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getTextColor(this.pointer);
  }

  setTextOutlineColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(value: number) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  getTextOutlineThickness() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getBackgroundColor(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getBorderColor(this.pointer);
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getTextStyle(this.pointer);
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getScrollbarWidth(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiLabelRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiLabelRenderer_getTextureBackground(
      this.pointer,
    );
  }
}

export class ListBoxRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiListBoxRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiListBoxRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiListBoxRenderer_setSelectedBackgroundColorHover(this.pointer, value);
  }

  getSelectedBackgroundColorHover() {
    return CTGUI_LIB.symbols
      .tguiListBoxRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getTextStyle(this.pointer);
  }

  setSelectedTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setSelectedTextStyle(
      this.pointer,
      value,
    );
  }

  getSelectedTextStyle() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getSelectedTextStyle(
      this.pointer,
    );
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiListBoxRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class ListViewRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiListViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiListViewRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiListViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value,
      );
  }

  getSelectedBackgroundColorHover() {
    return CTGUI_LIB.symbols
      .tguiListViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setHeaderBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setHeaderBackgroundColor(
      this.pointer,
      value,
    );
  }

  getHeaderBackgroundColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getHeaderBackgroundColor(
      this.pointer,
    );
  }

  setHeaderTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setHeaderTextColor(
      this.pointer,
      value,
    );
  }

  getHeaderTextColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getHeaderTextColor(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getBorderColor(this.pointer);
  }

  setSeparatorColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setSeparatorColor(
      this.pointer,
      value,
    );
  }

  getSeparatorColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  setGridLinesColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setGridLinesColor(
      this.pointer,
      value,
    );
  }

  getGridLinesColor() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getGridLinesColor(
      this.pointer,
    );
  }

  setTextureHeaderBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setTextureHeaderBackground(
      this.pointer,
      value,
    );
  }

  getTextureHeaderBackground() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getTextureHeaderBackground(
      this.pointer,
    );
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiListViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiListViewRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class MenuBarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiMenuBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiMenuBarRenderer_copy(other);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getTextColor(this.pointer);
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setSeparatorColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSeparatorColor(
      this.pointer,
      value,
    );
  }

  getSeparatorColor() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSeparatorColor(
      this.pointer,
    );
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureItemBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setTextureItemBackground(
      this.pointer,
      value,
    );
  }

  getTextureItemBackground() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getTextureItemBackground(
      this.pointer,
    );
  }

  setTextureSelectedItemBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols
      .tguiMenuBarRenderer_setTextureSelectedItemBackground(
        this.pointer,
        value,
      );
  }

  getTextureSelectedItemBackground() {
    return CTGUI_LIB.symbols
      .tguiMenuBarRenderer_getTextureSelectedItemBackground(this.pointer);
  }

  setDistanceToSide(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getDistanceToSide(
      this.pointer,
    );
  }

  setSeparatorThickness(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSeparatorThickness(
      this.pointer,
      value,
    );
  }

  getSeparatorThickness() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSeparatorThickness(
      this.pointer,
    );
  }

  setSeparatorVerticalPadding(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSeparatorVerticalPadding(
      this.pointer,
      value,
    );
  }

  getSeparatorVerticalPadding() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSeparatorVerticalPadding(
      this.pointer,
    );
  }

  setSeparatorSidePadding(value: number) {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_setSeparatorSidePadding(
      this.pointer,
      value,
    );
  }

  getSeparatorSidePadding() {
    return CTGUI_LIB.symbols.tguiMenuBarRenderer_getSeparatorSidePadding(
      this.pointer,
    );
  }
}

export class MessageBoxRenderer extends ChildWindowRenderer {
  constructor() {
    super(CTGUI_LIB.symbols.tguiMessageBoxRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiMessageBoxRenderer_copy(other);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiMessageBoxRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiMessageBoxRenderer_getTextColor(this.pointer);
  }

  setButton(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiMessageBoxRenderer_setButton(
      this.pointer,
      value,
    );
  }

  getButton() {
    return CTGUI_LIB.symbols.tguiMessageBoxRenderer_getButton(this.pointer);
  }
}

export class PictureRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiPictureRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiPictureRenderer_copy(other);
  }

  setTexture(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiPictureRenderer_setTexture(
      this.pointer,
      value,
    );
  }

  getTexture() {
    return CTGUI_LIB.symbols.tguiPictureRenderer_getTexture(this.pointer);
  }
}

export class ProgressBarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiProgressBarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiProgressBarRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getBorders(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextColor(this.pointer);
  }

  setTextColorFilled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextColorFilled(
      this.pointer,
      value,
    );
  }

  getTextColorFilled() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextColorFilled(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setFillColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setFillColor(
      this.pointer,
      value,
    );
  }

  getFillColor() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getFillColor(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureFill(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextureFill(
      this.pointer,
      value,
    );
  }

  getTextureFill() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextureFill(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextStyle(this.pointer);
  }

  setTextOutlineColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextOutlineColor(
      this.pointer,
      value,
    );
  }

  getTextOutlineColor() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextOutlineColor(
      this.pointer,
    );
  }

  setTextOutlineThickness(value: number) {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_setTextOutlineThickness(
      this.pointer,
      value,
    );
  }

  getTextOutlineThickness() {
    return CTGUI_LIB.symbols.tguiProgressBarRenderer_getTextOutlineThickness(
      this.pointer,
    );
  }
}

export class RadioButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiRadioButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiRadioButtonRenderer_copy(other);
  }

  setTextDistanceRatio(value: number) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextDistanceRatio(
      this.pointer,
      value,
    );
  }

  getTextDistanceRatio() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextDistanceRatio(
      this.pointer,
    );
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorders(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setTextColorChecked(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextColorChecked(
      this.pointer,
      value,
    );
  }

  getTextColorChecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextColorChecked(
      this.pointer,
    );
  }

  setTextColorCheckedHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextColorCheckedHover(
      this.pointer,
      value,
    );
  }

  getTextColorCheckedHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextColorCheckedHover(
      this.pointer,
    );
  }

  setTextColorCheckedDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setTextColorCheckedDisabled(this.pointer, value);
  }

  getTextColorCheckedDisabled() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getTextColorCheckedDisabled(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setBackgroundColorChecked(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBackgroundColorChecked(
      this.pointer,
      value,
    );
  }

  getBackgroundColorChecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBackgroundColorChecked(
      this.pointer,
    );
  }

  setBackgroundColorCheckedHover(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedHover(
        this.pointer,
        value,
      );
  }

  getBackgroundColorCheckedHover() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedHover(this.pointer);
  }

  setBackgroundColorCheckedDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setBackgroundColorCheckedDisabled(
        this.pointer,
        value,
      );
  }

  getBackgroundColorCheckedDisabled() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getBackgroundColorCheckedDisabled(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  setBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColorHover(
      this.pointer,
    );
  }

  setBorderColorFocused(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColorFocused(
      this.pointer,
      value,
    );
  }

  getBorderColorFocused() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColorFocused(
      this.pointer,
    );
  }

  setBorderColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColorDisabled(
      this.pointer,
      value,
    );
  }

  getBorderColorDisabled() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColorDisabled(
      this.pointer,
    );
  }

  setBorderColorChecked(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColorChecked(
      this.pointer,
      value,
    );
  }

  getBorderColorChecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColorChecked(
      this.pointer,
    );
  }

  setBorderColorCheckedHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setBorderColorCheckedHover(
      this.pointer,
      value,
    );
  }

  getBorderColorCheckedHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getBorderColorCheckedHover(
      this.pointer,
    );
  }

  setBorderColorCheckedFocused(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedFocused(
        this.pointer,
        value,
      );
  }

  getBorderColorCheckedFocused() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedFocused(this.pointer);
  }

  setBorderColorCheckedDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setBorderColorCheckedDisabled(
        this.pointer,
        value,
      );
  }

  getBorderColorCheckedDisabled() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getBorderColorCheckedDisabled(this.pointer);
  }

  setCheckColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setCheckColor(
      this.pointer,
      value,
    );
  }

  getCheckColor() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getCheckColor(
      this.pointer,
    );
  }

  setCheckColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setCheckColorHover(
      this.pointer,
      value,
    );
  }

  getCheckColorHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getCheckColorHover(
      this.pointer,
    );
  }

  setCheckColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setCheckColorDisabled(
      this.pointer,
      value,
    );
  }

  getCheckColorDisabled() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getCheckColorDisabled(
      this.pointer,
    );
  }

  setTextureUnchecked(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureUnchecked(
      this.pointer,
      value,
    );
  }

  getTextureUnchecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureUnchecked(
      this.pointer,
    );
  }

  setTextureChecked(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureChecked(
      this.pointer,
      value,
    );
  }

  getTextureChecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureChecked(
      this.pointer,
    );
  }

  setTextureUncheckedHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureUncheckedHover(
      this.pointer,
      value,
    );
  }

  getTextureUncheckedHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureUncheckedHover(
      this.pointer,
    );
  }

  setTextureCheckedHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureCheckedHover(
      this.pointer,
      value,
    );
  }

  getTextureCheckedHover() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureCheckedHover(
      this.pointer,
    );
  }

  setTextureUncheckedFocused(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureUncheckedFocused(
      this.pointer,
      value,
    );
  }

  getTextureUncheckedFocused() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureUncheckedFocused(
      this.pointer,
    );
  }

  setTextureCheckedFocused(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureCheckedFocused(
      this.pointer,
      value,
    );
  }

  getTextureCheckedFocused() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureCheckedFocused(
      this.pointer,
    );
  }

  setTextureUncheckedDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_setTextureUncheckedDisabled(this.pointer, value);
  }

  getTextureUncheckedDisabled() {
    return CTGUI_LIB.symbols
      .tguiRadioButtonRenderer_getTextureUncheckedDisabled(this.pointer);
  }

  setTextureCheckedDisabled(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextureCheckedDisabled(
      this.pointer,
      value,
    );
  }

  getTextureCheckedDisabled() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextureCheckedDisabled(
      this.pointer,
    );
  }

  setTextStyle(value: number) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextStyle(
      this.pointer,
      value,
    );
  }

  getTextStyle() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextStyle(this.pointer);
  }

  setTextStyleChecked(value: number) {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_setTextStyleChecked(
      this.pointer,
      value,
    );
  }

  getTextStyleChecked() {
    return CTGUI_LIB.symbols.tguiRadioButtonRenderer_getTextStyleChecked(
      this.pointer,
    );
  }
}

export class RangeSliderRenderer extends SliderRenderer {
  constructor() {
    super(CTGUI_LIB.symbols.tguiRangeSliderRenderer_create());
  }

  override copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiRangeSliderRenderer_copy(other);
  }

  setSelectedTrackColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_setSelectedTrackColor(
      this.pointer,
      value,
    );
  }

  getSelectedTrackColor() {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_getSelectedTrackColor(
      this.pointer,
    );
  }

  setSelectedTrackColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_setSelectedTrackColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTrackColorHover() {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_getSelectedTrackColorHover(
      this.pointer,
    );
  }

  setTextureSelectedTrack(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_setTextureSelectedTrack(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTrack() {
    return CTGUI_LIB.symbols.tguiRangeSliderRenderer_getTextureSelectedTrack(
      this.pointer,
    );
  }

  setTextureSelectedTrackHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols
      .tguiRangeSliderRenderer_setTextureSelectedTrackHover(
        this.pointer,
        value,
      );
  }

  getTextureSelectedTrackHover() {
    return CTGUI_LIB.symbols
      .tguiRangeSliderRenderer_getTextureSelectedTrackHover(this.pointer);
  }
}

export class ScrollbarRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiScrollbarRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiScrollbarRenderer_copy(other);
  }

  setTrackColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTrackColor(
      this.pointer,
      value,
    );
  }

  getTrackColor() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTrackColor(this.pointer);
  }

  setTrackColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTrackColorHover(
      this.pointer,
      value,
    );
  }

  getTrackColorHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTrackColorHover(
      this.pointer,
    );
  }

  setThumbColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setThumbColor(
      this.pointer,
      value,
    );
  }

  getThumbColor() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getThumbColor(this.pointer);
  }

  setThumbColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setThumbColorHover(
      this.pointer,
      value,
    );
  }

  getThumbColorHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getThumbColorHover(
      this.pointer,
    );
  }

  setArrowBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setArrowBackgroundColor(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColor() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getArrowBackgroundColor(
      this.pointer,
    );
  }

  setArrowBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setArrowBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getArrowBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getArrowBackgroundColorHover(
      this.pointer,
    );
  }

  setArrowColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getArrowColor(this.pointer);
  }

  setArrowColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setTextureTrack(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureTrack(
      this.pointer,
      value,
    );
  }

  getTextureTrack() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureTrack(
      this.pointer,
    );
  }

  setTextureTrackHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureTrackHover(
      this.pointer,
      value,
    );
  }

  getTextureTrackHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureTrackHover(
      this.pointer,
    );
  }

  setTextureThumb(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureThumb(
      this.pointer,
      value,
    );
  }

  getTextureThumb() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureThumb(
      this.pointer,
    );
  }

  setTextureThumbHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureThumbHover(
      this.pointer,
      value,
    );
  }

  getTextureThumbHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureThumbHover(
      this.pointer,
    );
  }

  setTextureArrowUp(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  getTextureArrowUp() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  setTextureArrowUpHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowUpHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  setTextureArrowDown(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  getTextureArrowDown() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  setTextureArrowDownHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowDownHover() {
    return CTGUI_LIB.symbols.tguiScrollbarRenderer_getTextureArrowDownHover(
      this.pointer,
    );
  }
}

export class SpinButtonRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiSpinButtonRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiSpinButtonRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getBorders(this.pointer);
  }

  setBorderBetweenArrows(value: number) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setBorderBetweenArrows(
      this.pointer,
      value,
    );
  }

  getBorderBetweenArrows() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getBorderBetweenArrows(
      this.pointer,
    );
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setArrowColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setArrowColor(
      this.pointer,
      value,
    );
  }

  getArrowColor() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getArrowColor(this.pointer);
  }

  setArrowColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setArrowColorHover(
      this.pointer,
      value,
    );
  }

  getArrowColorHover() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getArrowColorHover(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getBorderColor(
      this.pointer,
    );
  }

  setTextureArrowUp(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setTextureArrowUp(
      this.pointer,
      value,
    );
  }

  getTextureArrowUp() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getTextureArrowUp(
      this.pointer,
    );
  }

  setTextureArrowUpHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setTextureArrowUpHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowUpHover() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getTextureArrowUpHover(
      this.pointer,
    );
  }

  setTextureArrowDown(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setTextureArrowDown(
      this.pointer,
      value,
    );
  }

  getTextureArrowDown() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getTextureArrowDown(
      this.pointer,
    );
  }

  setTextureArrowDownHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_setTextureArrowDownHover(
      this.pointer,
      value,
    );
  }

  getTextureArrowDownHover() {
    return CTGUI_LIB.symbols.tguiSpinButtonRenderer_getTextureArrowDownHover(
      this.pointer,
    );
  }
}

export class TabsRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiTabsRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiTabsRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBorders(this.pointer, value);
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBorders(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBackgroundColor(this.pointer);
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedBackgroundColorHover(
      this.pointer,
    );
  }

  setBackgroundColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBackgroundColorDisabled(
      this.pointer,
      value,
    );
  }

  getBackgroundColorDisabled() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBackgroundColorDisabled(
      this.pointer,
    );
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextColor(this.pointer, value);
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextColorHover(this.pointer);
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setTextColorDisabled(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextColorDisabled(
      this.pointer,
      value,
    );
  }

  getTextColorDisabled() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextColorDisabled(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBorderColor(this.pointer);
  }

  setBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setBorderColorHover(
      this.pointer,
      value,
    );
  }

  getBorderColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getBorderColorHover(this.pointer);
  }

  setSelectedBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedBorderColor(
      this.pointer,
      value,
    );
  }

  getSelectedBorderColor() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedBorderColor(
      this.pointer,
    );
  }

  setSelectedBorderColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setSelectedBorderColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedBorderColorHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getSelectedBorderColorHover(
      this.pointer,
    );
  }

  setTextureTab(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextureTab(
      this.pointer,
      value,
    );
  }

  getTextureTab() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextureTab(this.pointer);
  }

  setTextureTabHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextureTabHover(
      this.pointer,
      value,
    );
  }

  getTextureTabHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextureTabHover(this.pointer);
  }

  setTextureSelectedTab(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextureSelectedTab(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTab() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextureSelectedTab(
      this.pointer,
    );
  }

  setTextureSelectedTabHover(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextureSelectedTabHover(
      this.pointer,
      value,
    );
  }

  getTextureSelectedTabHover() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextureSelectedTabHover(
      this.pointer,
    );
  }

  setTextureDisabledTab(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setTextureDisabledTab(
      this.pointer,
      value,
    );
  }

  getTextureDisabledTab() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getTextureDisabledTab(
      this.pointer,
    );
  }

  setDistanceToSide(value: number) {
    return CTGUI_LIB.symbols.tguiTabsRenderer_setDistanceToSide(
      this.pointer,
      value,
    );
  }

  getDistanceToSide() {
    return CTGUI_LIB.symbols.tguiTabsRenderer_getDistanceToSide(this.pointer);
  }
}

export class TextAreaRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiTextAreaRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiTextAreaRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getTextColor(this.pointer);
  }

  setDefaultTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setDefaultTextColor(
      this.pointer,
      value,
    );
  }

  getDefaultTextColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getDefaultTextColor(
      this.pointer,
    );
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiTextAreaRenderer_setSelectedTextBackgroundColor(this.pointer, value);
  }

  getSelectedTextBackgroundColor() {
    return CTGUI_LIB.symbols
      .tguiTextAreaRenderer_getSelectedTextBackgroundColor(this.pointer);
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getBorderColor(this.pointer);
  }

  setCaretColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setCaretColor(
      this.pointer,
      value,
    );
  }

  getCaretColor() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getCaretColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setCaretWidth(value: number) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setCaretWidth(
      this.pointer,
      value,
    );
  }

  getCaretWidth() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getCaretWidth(this.pointer);
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiTextAreaRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class TreeViewRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiTreeViewRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiTreeViewRenderer_copy(other);
  }

  setBorders(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setBorders(
      this.pointer,
      value,
    );
  }

  getBorders() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getBorders(this.pointer);
  }

  setPadding(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setPadding(
      this.pointer,
      value,
    );
  }

  getPadding() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getPadding(this.pointer);
  }

  setBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setBackgroundColor(
      this.pointer,
      value,
    );
  }

  getBackgroundColor() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getBackgroundColor(
      this.pointer,
    );
  }

  setBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setBackgroundColorHover(
      this.pointer,
      value,
    );
  }

  getBackgroundColorHover() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getBackgroundColorHover(
      this.pointer,
    );
  }

  setSelectedBackgroundColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setSelectedBackgroundColor(
      this.pointer,
      value,
    );
  }

  getSelectedBackgroundColor() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getSelectedBackgroundColor(
      this.pointer,
    );
  }

  setSelectedBackgroundColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols
      .tguiTreeViewRenderer_setSelectedBackgroundColorHover(
        this.pointer,
        value,
      );
  }

  getSelectedBackgroundColorHover() {
    return CTGUI_LIB.symbols
      .tguiTreeViewRenderer_getSelectedBackgroundColorHover(this.pointer);
  }

  setTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextColor(
      this.pointer,
      value,
    );
  }

  getTextColor() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextColor(this.pointer);
  }

  setTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextColorHover(
      this.pointer,
      value,
    );
  }

  getTextColorHover() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextColorHover(
      this.pointer,
    );
  }

  setSelectedTextColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setSelectedTextColor(
      this.pointer,
      value,
    );
  }

  getSelectedTextColor() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getSelectedTextColor(
      this.pointer,
    );
  }

  setSelectedTextColorHover(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setSelectedTextColorHover(
      this.pointer,
      value,
    );
  }

  getSelectedTextColorHover() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getSelectedTextColorHover(
      this.pointer,
    );
  }

  setBorderColor(value: BufferSource) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setBorderColor(
      this.pointer,
      value,
    );
  }

  getBorderColor() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getBorderColor(this.pointer);
  }

  setTextureBackground(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextureBackground(
      this.pointer,
      value,
    );
  }

  getTextureBackground() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextureBackground(
      this.pointer,
    );
  }

  setTextureBranchExpanded(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextureBranchExpanded(
      this.pointer,
      value,
    );
  }

  getTextureBranchExpanded() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextureBranchExpanded(
      this.pointer,
    );
  }

  setTextureBranchCollapsed(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextureBranchCollapsed(
      this.pointer,
      value,
    );
  }

  getTextureBranchCollapsed() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextureBranchCollapsed(
      this.pointer,
    );
  }

  setTextureLeaf(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setTextureLeaf(
      this.pointer,
      value,
    );
  }

  getTextureLeaf() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getTextureLeaf(this.pointer);
  }

  setScrollbar(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setScrollbar(
      this.pointer,
      value,
    );
  }

  getScrollbar() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getScrollbar(this.pointer);
  }

  setScrollbarWidth(value: number) {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_setScrollbarWidth(
      this.pointer,
      value,
    );
  }

  getScrollbarWidth() {
    return CTGUI_LIB.symbols.tguiTreeViewRenderer_getScrollbarWidth(
      this.pointer,
    );
  }
}

export class WidgetRenderer {
  protected ptr: Deno.PointerValue<unknown>;

  get pointer() {
    return this.ptr;
  }

  constructor(other?: Deno.PointerValue<unknown>) {
    if (typeof other === "undefined") {
      this.ptr = CTGUI_LIB.symbols.tguiWidgetRenderer_create();
    } else {
      this.ptr = this.copy(other); // to make TS happy about uninitialized field
    }
  }

  copy(other: Deno.PointerValue<unknown>) {
    return this.ptr = CTGUI_LIB.symbols.tguiWidgetRenderer_copy(other);
  }

  setOpacity(value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setOpacity(this.pointer, value);
  }

  getOpacity() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getOpacity(this.pointer);
  }

  setOpacityDisabled(value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setOpacityDisabled(
      this.pointer,
      value,
    );
  }

  getOpacityDisabled() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getOpacityDisabled(
      this.pointer,
    );
  }

  setFont(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setFont(this.pointer, value);
  }

  getFont() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getFont(this.pointer);
  }

  setTextSize(value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setTextSize(
      this.pointer,
      value,
    );
  }

  getTextSize() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getTextSize(this.pointer);
  }

  setTransparentTexture(value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setTransparentTexture(
      this.pointer,
      value,
    );
  }

  getTransparentTexture() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getTransparentTexture(
      this.pointer,
    );
  }

  setData(value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setData(this.pointer, value);
  }

  getData() {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getData(this.pointer);
  }

  setPropertyBool(property: BufferSource, value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyBool(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyFont(property: BufferSource, value: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyFont(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyColor(property: BufferSource, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyColor(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyString(property: BufferSource, value: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyString(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyNumber(property: BufferSource, value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyNumber(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyOutline(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyOutline(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyTexture(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyTexture(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyTextStyle(property: BufferSource, value: number) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyTextStyle(
      this.pointer,
      property,
      value,
    );
  }

  setPropertyRendererData(
    property: BufferSource,
    value: Deno.PointerValue<unknown>,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_setPropertyRendererData(
      this.pointer,
      property,
      value,
    );
  }

  hasProperty(renderer: Deno.PointerValue<unknown>, property: BufferSource) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_hasProperty(renderer, property);
  }

  getPropertyBool(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyBool(
      renderer,
      property,
    );
  }

  getPropertyFont(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyFont(
      renderer,
      property,
    );
  }

  getPropertyColor(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyColor(
      renderer,
      property,
    );
  }

  getPropertyString(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyString(
      renderer,
      property,
    );
  }

  getPropertyNumber(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyNumber(
      renderer,
      property,
    );
  }

  getPropertyOutline(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyOutline(
      renderer,
      property,
    );
  }

  getPropertyTexture(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyTexture(
      renderer,
      property,
    );
  }

  getPropertyTextStyle(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyTextStyle(
      renderer,
      property,
    );
  }

  getPropertyRendererData(
    renderer: Deno.PointerValue<unknown>,
    property: BufferSource,
  ) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_getPropertyRendererData(
      renderer,
      property,
    );
  }

  destroy(renderer: Deno.PointerValue<unknown>) {
    return CTGUI_LIB.symbols.tguiWidgetRenderer_destroy(renderer);
  }
}
