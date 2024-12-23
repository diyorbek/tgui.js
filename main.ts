const lib = Deno.dlopen("build/libTGUIJS.dylib", {
  add: {
    parameters: ["i32", "i32"],
    result: "i32",
  },
  run: {
    parameters: [],
    result: "void",
  },
});
console.log(lib);

lib.symbols.run();
const res = lib.symbols.add(124, -45);
console.log({ res });

lib.close();
