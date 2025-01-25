import {
  Button,
  ChatBox,
  CheckBox,
  ChildWindow,
  ComboBox,
  EditBox,
  FloatRect,
  Label,
  ListBox,
  MenuBar,
  Panel,
  ProgressBar,
  RadioButton,
  Scrollbar,
  Slider,
  Tabs,
  Vector2f,
  type Gui,
} from "../mod.ts";

function encodeUTF32(str: string) {
  const utf32Array = new Uint32Array(str.length + 1); // +1 for null terminator

  for (let i = 0; i < str.length; i++) {
    utf32Array[i] = str.charCodeAt(i);
  }
  utf32Array[str.length] = 0; // Null terminator

  return utf32Array;
}

export function runExample(gui: Gui) {
  // new Themethemes/Black.txt"};
  // gui.add(new.pointer, encodeUTF32("") Picture("../RedBackground.jpg"));
  new Panel();
  const tabs = new Tabs();
  // tabs.setRenderer(theme.getRenderer("Tabs"));
  // tabs.setTabHeight(30);
  tabs.setHeight(30);
  tabs.setWidth(200);
  tabs.setPosition(new Vector2f(70, 40));
  tabs.add(encodeUTF32("Tab - 1"), 0);
  tabs.add(encodeUTF32("Tab - 2"), 0);
  tabs.add(encodeUTF32("Tab - 3"), 0);
  gui.add(tabs.pointer, encodeUTF32("tabsś"));

  const menu = new MenuBar();
  // menu.setRenderer(theme.getRenderer("MenuBar"));
  menu.setHeight(22);
  menu.addMenu(encodeUTF32("File"));
  menu.addMenuItem(encodeUTF32("File"), encodeUTF32("Load"));
  menu.addMenuItem(encodeUTF32("File"), encodeUTF32("Save"));
  menu.addMenuItem(encodeUTF32("File"), encodeUTF32("Exit"));
  menu.addMenu(encodeUTF32("Edit"));
  menu.addMenuItem(encodeUTF32("Edit"), encodeUTF32("Copy"));
  menu.addMenuItem(encodeUTF32("Edit"), encodeUTF32("Paste"));
  menu.addMenu(encodeUTF32("Help"));
  menu.addMenuItem(encodeUTF32("Help"), encodeUTF32("About"));
  gui.add(menu.pointer, encodeUTF32(""));

  let label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("This is a label.\nAnd these are radio buttons:"));
  label.setPosition(new Vector2f(10, 90));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  let radioButton = new RadioButton();
  // radioButton.setRenderer(theme.getRenderer("RadioButton"));
  radioButton.setPosition(new Vector2f(20, 140));
  radioButton.setText(encodeUTF32("Yep!"));
  radioButton.setSize(new Vector2f(25, 25));
  gui.add(radioButton.pointer, encodeUTF32(""));

  radioButton = new RadioButton();
  // radioButton.setRenderer(theme.getRenderer("RadioButton"));
  radioButton.setPosition(new Vector2f(20, 170));
  radioButton.setText(encodeUTF32("Nope!"));
  radioButton.setSize(new Vector2f(25, 25));
  gui.add(radioButton.pointer, encodeUTF32(""));

  radioButton = new RadioButton();
  // radioButton.setRenderer(theme.getRenderer("RadioButton"));
  radioButton.setPosition(new Vector2f(20, 200));
  radioButton.setText(encodeUTF32("Don't know!"));
  radioButton.setSize(new Vector2f(25, 25));
  gui.add(radioButton.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("We've got some edit boxes:"));
  label.setPosition(new Vector2f(10, 240));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  let editBox = new EditBox();
  // editBox.setRenderer(theme.getRenderer("EditBox"));
  editBox.setSize(new Vector2f(200, 25));
  editBox.setTextSize(18);
  editBox.setPosition(new Vector2f(10, 270));
  editBox.setDefaultText(encodeUTF32("Click to edit text..."));
  gui.add(editBox.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("And some list boxes too..."));
  label.setPosition(new Vector2f(10, 310));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  let listBox = new ListBox();
  // listBox.setRenderer(theme.getRenderer("ListBox"));
  listBox.setSize(new Vector2f(250, 120));
  listBox.setItemHeight(24);
  listBox.setPosition(new Vector2f(10, 340));
  listBox.addItem(encodeUTF32("Item 1"), encodeUTF32(""));
  listBox.addItem(encodeUTF32("Item 2"), encodeUTF32(""));
  listBox.addItem(encodeUTF32("Item 3"), encodeUTF32(""));
  gui.add(listBox.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("It's the progress bar below"));
  label.setPosition(new Vector2f(10, 470));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  const progressBar = new ProgressBar();
  // progressBar.setRenderer(theme.getRenderer("ProgressBar"));
  progressBar.setPosition(new Vector2f(10, 500));
  progressBar.setSize(new Vector2f(200, 20));
  progressBar.setValue(50);
  gui.add(progressBar.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32(progressBar.getValue() + "%"));
  label.setPosition(new Vector2f(220, 500));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("That's the slider"));
  label.setPosition(new Vector2f(10, 530));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  let slider = new Slider();
  // slider.setRenderer(theme.getRenderer("Slider"));
  slider.setPosition(new Vector2f(10, 560));
  slider.setSize(new Vector2f(200, 18));
  slider.setValue(4);
  gui.add(slider.pointer, encodeUTF32(""));

  let scrollbar = new Scrollbar();
  // scrollbar.setRenderer(theme.getRenderer("Scrollbar"));
  scrollbar.setPosition(new Vector2f(380, 40));
  scrollbar.setSize(new Vector2f(18, 540));
  scrollbar.setMaximum(100);
  scrollbar.setViewportSize(70);
  gui.add(scrollbar.pointer, encodeUTF32(""));

  let comboBox = new ComboBox();
  // comboBox.setRenderer(theme.getRenderer("ComboBox"));
  comboBox.setSize(new Vector2f(120, 21));
  comboBox.setPosition(new Vector2f(420, 40));
  comboBox.addItem(encodeUTF32("Item 1"), encodeUTF32(""));
  comboBox.addItem(encodeUTF32("Item 2"), encodeUTF32(""));
  comboBox.addItem(encodeUTF32("Item 3"), encodeUTF32(""));
  comboBox.setSelectedItem(encodeUTF32("Item 2"));
  gui.add(comboBox.pointer, encodeUTF32(""));

  let child = new ChildWindow();
  // child.setRenderer(theme.getRenderer("ChildWindow"));
  child.setClientSize(new Vector2f(250, 120));
  child.setPosition(new Vector2f(420, 80));
  child.setTitle(encodeUTF32("Child window"));
  gui.add(child.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("Hi! I'm a child window."));
  label.setPosition(new Vector2f(30, 30));
  label.setTextSize(15);
  child.add(label.pointer, encodeUTF32(""));

  let button = new Button();
  // button.setRenderer(theme.getRenderer("Button"));
  button.setPosition(new Vector2f(75, 70));
  button.setText(encodeUTF32("OK"));
  button.setSize(new Vector2f(100, 30));
  // button.onPress(function () {
  //   child.setVisible(false);
  // });
  child.add(button.pointer, encodeUTF32(""));

  let checkbox = new CheckBox();
  // checkbox.setRenderer(theme.getRenderer("CheckBox"));
  checkbox.setPosition(new Vector2f(420, 240));
  checkbox.setText(encodeUTF32("Ok, I got it"));
  checkbox.setSize(new Vector2f(25, 25));
  gui.add(checkbox.pointer, encodeUTF32(""));

  checkbox = new CheckBox();
  // checkbox.setRenderer(theme.getRenderer("CheckBox"));
  checkbox.setPosition(new Vector2f(570, 240));
  checkbox.setText(encodeUTF32("No, I didn't"));
  checkbox.setSize(new Vector2f(25, 25));
  gui.add(checkbox.pointer, encodeUTF32(""));

  label = new Label();
  // label.setRenderer(theme.getRenderer("Label"));
  label.setText(encodeUTF32("Chatbox"));
  label.setPosition(new Vector2f(420, 280));
  label.setTextSize(18);
  gui.add(label.pointer, encodeUTF32(""));

  let chatbox = new ChatBox();
  // chatbox.setRenderer(theme.getRenderer("ChatBox"));
  chatbox.setSize(new Vector2f(300, 100));
  chatbox.setTextSize(18);
  chatbox.setPosition(new Vector2f(420, 310));
  // chatbox.setLinesStartFromTop();
  chatbox.setLinesStartFromTop(1);
  chatbox.addLine(encodeUTF32("texus: Hey, this is TGUI!"));
  chatbox.addLine(encodeUTF32("Me: Looks awesome! ;)"));
  chatbox.addLine(encodeUTF32("texus: Thanks! :)"));
  chatbox.addLine(encodeUTF32("Me: The widgets rock ^^"));
  gui.add(chatbox.pointer, encodeUTF32(""));

  button = new Button();
  // button.setRenderer(theme.getRenderer("Button"));
  button.setPosition(
    new Vector2f(
      FloatRect.deserialize(gui.getView()).width - 115,
      FloatRect.deserialize(gui.getView()).height - 50
    )
  );
  button.setText(encodeUTF32("Exit"));
  button.setSize(new Vector2f(100, 40));
  gui.add(button.pointer, encodeUTF32(""));
}
