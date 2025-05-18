# tgui.js

tgui.js is a binding for the [CTGUI](https://github.com/texus/CTGUI) library, designed to work with Deno. It provides a simple, intuitive and cross-platform API for building native GUIs.

## Overview

The library allows you to create native GUI applications using Deno. The library wraps [CTGUI](https://github.com/texus/CTGUI), which is itself a C wrapper for [TGUI](https://tgui.eu/), a cross-platform C++ GUI library.

## Features

- **One command** to compile to a native executable
- Cross-platform support (macOS, Windows)
- Simple, clean API for creating native GUI applications

## Installation

You can import tgui.js directly from [JSR](https://jsr.io/@denative/ctgui):

```typescript
import { Gui, Button /* ... */ } from "@denative/ctgui";
```

(The name of the library is `@denative/ctgui`. It is different from the project because initial plans were to make just a wrapper for CTGUI, but later it was decided to make a full-fledged library with OO API.)

To set up the required binary for your project, run:

```bash
deno run --allow-net --allow-write https://jsr.io/@denative/ctgui/0.0.11/setup.ts
```

This will download the appropriate native library for your operating system and architecture.

## Running the Examples

This repository includes examples to help you get started with tgui.js.

### Various Widgets Example

To run the "various widgets" example which demonstrates different UI components:

1. Navigate to the examples directory:

   ```bash
   cd examples/various-widgets
   ```

2. Install the binary (if not already installed):

   ```bash
   deno task setup
   ```

3. Run the example:

   ```bash
   deno task start
   ```

4. Alternatively, you can compile the example to a native executable:

   ```bash
   deno task compile
   ```

5. This will create a native executable in the current directory. You can run it directly:

   ```bash
   ./various-widgets
   ```

![Various Widgets Example](/examples/various-widgets/screenshot.png)

## Supported Platforms

- macOS (Intel and ARM)
- Windows
- Support for Linux is planned for future releases

## Contributing

This project is an experimental library. Contributers are always welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Plans

- Add event handling
- Improve the API
- Improve documentation and examples
- Add support for Linux

## License

This project is licensed under the MIT License - see the LICENSE file for details.
