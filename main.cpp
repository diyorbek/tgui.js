#include <TGUI/Backend/SFML-Graphics.hpp>
#include <TGUI/TGUI.hpp>

int main() {
  sf::RenderWindow window{{1000, 600}, "TGUI example - SFML_GRAPHICS backend"};
  tgui::Gui gui{window};

  auto button = tgui::Button::create("Click Me");
  button->setPosition(350, 250);
  gui.add(button);
  button->onClick([] { std::cout << "Button was clicked" << std::endl; });

  while (window.isOpen()) {
    sf::Event event;
    while (window.pollEvent(event)) {
      gui.handleEvent(event);
      if (event.type == sf::Event::Closed) window.close();
    }

    window.clear();
    gui.draw();
    window.display();
  }

  return 0;
}
