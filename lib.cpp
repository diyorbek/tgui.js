#include <TGUI/Backend/SFML-Graphics.hpp>
#include <TGUI/TGUI.hpp>
#include <iostream>

extern "C" sf::RenderWindow* createWindow(ushort width, ushort height,
                                          const char* title) {
  return new sf::RenderWindow({width, height}, title);
}

extern "C" tgui::Gui* createGui(sf::RenderWindow* win) {
  return new tgui::Gui{*win};
}

extern "C" sf::Event* createEvent() { return new sf::Event; }

extern "C" u_short getEventType(sf::Event* event) { return event->type; }

extern "C" void destroyWindow(sf::RenderWindow* win) { delete win; }

extern "C" void destroyGui(tgui::Gui* gui) { delete gui; }

extern "C" void destroyEvent(sf::Event* event) { delete event; }

extern "C" bool isWindowOpen(sf::RenderWindow* win) { return win->isOpen(); }

extern "C" bool pollEvent(sf::RenderWindow* win, sf::Event* event) {
  return win->pollEvent(*event);
}

extern "C" bool handleEvent(tgui::Gui* gui, sf::Event* event) {
  return gui->handleEvent(*event);
}

extern "C" void closeWindow(sf::RenderWindow* win) { win->close(); }

extern "C" void clearWindow(sf::RenderWindow* win) { win->clear(); }

extern "C" void drawGui(tgui::Gui* gui) { gui->draw(); }

extern "C" void displayWindow(sf::RenderWindow* win) { win->display(); }

extern "C" tgui::Label* createLabel() { return new tgui::Label; }

extern "C" void setLabelText(tgui::Label* label, const char* text) {
  label->setText(text);
}

extern "C" void setLabelPosition(tgui::Label* label, float x, float y) {
  label->setPosition(x, y);
}

extern "C" void setLabelSize(tgui::Label* label, u_short size) {
  label->setTextSize(size);
}

extern "C" void addWidget(tgui::Gui* gui, tgui::Widget* wg) {
  gui->add(static_cast<tgui::Widget::Ptr>(wg));
}

extern "C" bool runExample(tgui::BackendGui& gui) {
  try {
    // tgui::Theme theme{"themes/Black.txt"};

    // gui.add(tgui::Picture::create("../RedBackground.jpg"));

    auto tabs = tgui::Tabs::create();
    // tabs->setRenderer(theme.getRenderer("Tabs"));
    tabs->setTabHeight(30);
    tabs->setPosition(70, 40);
    tabs->add("Tab - 1");
    tabs->add("Tab - 2");
    tabs->add("Tab - 3");
    gui.add(tabs);

    auto menu = tgui::MenuBar::create();
    // menu->setRenderer(theme.getRenderer("MenuBar"));
    menu->setHeight(22.f);
    menu->addMenu("File");
    menu->addMenuItem("Load");
    menu->addMenuItem("Save");
    menu->addMenuItem("Exit");
    menu->addMenu("Edit");
    menu->addMenuItem("Copy");
    menu->addMenuItem("Paste");
    menu->addMenu("Help");
    menu->addMenuItem("About");
    gui.add(menu);

    auto label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("This is a label.\nAnd these are radio buttons:");
    label->setPosition(10, 90);
    label->setTextSize(18);
    gui.add(label);

    auto radioButton = tgui::RadioButton::create();
    // radioButton->setRenderer(theme.getRenderer("RadioButton"));
    radioButton->setPosition(20, 140);
    radioButton->setText("Yep!");
    radioButton->setSize(25, 25);
    gui.add(radioButton);

    radioButton = tgui::RadioButton::create();
    // radioButton->setRenderer(theme.getRenderer("RadioButton"));
    radioButton->setPosition(20, 170);
    radioButton->setText("Nope!");
    radioButton->setSize(25, 25);
    gui.add(radioButton);

    radioButton = tgui::RadioButton::create();
    // radioButton->setRenderer(theme.getRenderer("RadioButton"));
    radioButton->setPosition(20, 200);
    radioButton->setText("Don't know!");
    radioButton->setSize(25, 25);
    gui.add(radioButton);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("We've got some edit boxes:");
    label->setPosition(10, 240);
    label->setTextSize(18);
    gui.add(label);

    auto editBox = tgui::EditBox::create();
    // editBox->setRenderer(theme.getRenderer("EditBox"));
    editBox->setSize(200, 25);
    editBox->setTextSize(18);
    editBox->setPosition(10, 270);
    editBox->setDefaultText("Click to edit text...");
    gui.add(editBox);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("And some list boxes too...");
    label->setPosition(10, 310);
    label->setTextSize(18);
    gui.add(label);

    auto listBox = tgui::ListBox::create();
    // listBox->setRenderer(theme.getRenderer("ListBox"));
    listBox->setSize(250, 120);
    listBox->setItemHeight(24);
    listBox->setPosition(10, 340);
    listBox->addItem("Item 1");
    listBox->addItem("Item 2");
    listBox->addItem("Item 3");
    gui.add(listBox);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("It's the progress bar below");
    label->setPosition(10, 470);
    label->setTextSize(18);
    gui.add(label);

    auto progressBar = tgui::ProgressBar::create();
    // progressBar->setRenderer(theme.getRenderer("ProgressBar"));
    progressBar->setPosition(10, 500);
    progressBar->setSize(200, 20);
    progressBar->setValue(50);
    gui.add(progressBar);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText(tgui::String::fromNumber(progressBar->getValue()) + "%");
    label->setPosition(220, 500);
    label->setTextSize(18);
    gui.add(label);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("That's the slider");
    label->setPosition(10, 530);
    label->setTextSize(18);
    gui.add(label);

    auto slider = tgui::Slider::create();
    // slider->setRenderer(theme.getRenderer("Slider"));
    slider->setPosition(10, 560);
    slider->setSize(200, 18);
    slider->setValue(4);
    gui.add(slider);

    auto scrollbar = tgui::Scrollbar::create();
    // scrollbar->setRenderer(theme.getRenderer("Scrollbar"));
    scrollbar->setPosition(380, 40);
    scrollbar->setSize(18, 540);
    scrollbar->setMaximum(100);
    scrollbar->setViewportSize(70);
    gui.add(scrollbar);

    auto comboBox = tgui::ComboBox::create();
    // comboBox->setRenderer(theme.getRenderer("ComboBox"));
    comboBox->setSize(120, 21);
    comboBox->setPosition(420, 40);
    comboBox->addItem("Item 1");
    comboBox->addItem("Item 2");
    comboBox->addItem("Item 3");
    comboBox->setSelectedItem("Item 2");
    gui.add(comboBox);

    auto child = tgui::ChildWindow::create();
    // child->setRenderer(theme.getRenderer("ChildWindow"));
    child->setClientSize({250, 120});
    child->setPosition(420, 80);
    child->setTitle("Child window");
    gui.add(child);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("Hi! I'm a child window.");
    label->setPosition(30, 30);
    label->setTextSize(15);
    child->add(label);

    auto button = tgui::Button::create();
    // button->setRenderer(theme.getRenderer("Button"));
    button->setPosition(75, 70);
    button->setText("OK");
    button->setSize(100, 30);
    button->onPress([=] { child->setVisible(false); });
    child->add(button);

    auto checkbox = tgui::CheckBox::create();
    // checkbox->setRenderer(theme.getRenderer("CheckBox"));
    checkbox->setPosition(420, 240);
    checkbox->setText("Ok, I got it");
    checkbox->setSize(25, 25);
    gui.add(checkbox);

    checkbox = tgui::CheckBox::create();
    // checkbox->setRenderer(theme.getRenderer("CheckBox"));
    checkbox->setPosition(570, 240);
    checkbox->setText("No, I didn't");
    checkbox->setSize(25, 25);
    gui.add(checkbox);

    label = tgui::Label::create();
    // label->setRenderer(theme.getRenderer("Label"));
    label->setText("Chatbox");
    label->setPosition(420, 280);
    label->setTextSize(18);
    gui.add(label);

    auto chatbox = tgui::ChatBox::create();
    // chatbox->setRenderer(theme.getRenderer("ChatBox"));
    chatbox->setSize(300, 100);
    chatbox->setTextSize(18);
    chatbox->setPosition(420, 310);
    chatbox->setLinesStartFromTop();
    chatbox->addLine("texus: Hey, this is TGUI!", tgui::Color::Green);
    chatbox->addLine("Me: Looks awesome! ;)", tgui::Color::Yellow);
    chatbox->addLine("texus: Thanks! :)", tgui::Color::Green);
    chatbox->addLine("Me: The widgets rock ^^", tgui::Color::Yellow);
    gui.add(chatbox);

    button = tgui::Button::create();
    // button->setRenderer(theme.getRenderer("Button"));
    button->setPosition(gui.getView().getSize().x - 115.f,
                        gui.getView().getSize().y - 50.f);
    button->setText("Exit");
    button->setSize(100, 40);
    gui.add(button);
  } catch (const tgui::Exception& e) {
    std::cerr << "TGUI Exception: " << e.what() << std::endl;
    return false;
  }

  return true;
}
