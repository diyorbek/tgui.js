# clang -E -DCTGUI_EXPORTS -DTGUI_DYNAMIC -DTGUI_NO_DEPRECATED_WARNINGS -I../build/_deps/csfml-src/include -I../build/_deps/ctgui-src/include -I../build/_deps/ctgui-src/src -I../build/_deps/tgui-src/include -I../build/_deps/sfml-src/include all.c -o merged.c

function count_lines {
  echo "$1" | wc -l | xargs
}

echo "#include <CTGUI/Backend/CSFML-Graphics.h>
#include <CTGUI/CTGUI.h>" | 
clang \
  -E -DCTGUI_EXPORTS -DTGUI_DYNAMIC -DTGUI_NO_DEPRECATED_WARNINGS \
  -I../build/_deps/csfml-src/include \
  -I../build/_deps/ctgui-src/include \
  -I../build/_deps/ctgui-src/src \
  -I../build/_deps/tgui-src/include \
  -I../build/_deps/sfml-src/include - |
clang -Xclang -ast-dump=json -fsyntax-only -w -x c - |
deno --allow-read --allow-write symbolGenerator.ts |
deno fmt - > ctguiSymbols.ts

mv ctguiSymbols.ts ../bindings/ctguiSymbols.ts

# Availability status of the API
deno --allow-read --allow-write externSearch.ts

unavailable_list=`comm -13 available-list.txt extern-list.txt`
unavailable_count=`count_lines "$unavailable_list"`
available_count=`count_lines "$(cat available-list.txt)"`
extern_count=`count_lines "$(cat extern-list.txt)"`

echo "EXTERN functions: $extern_count
AVAILABLE functions: $available_count"

# echo "Following $unavailable_count functions are not included in the CTGUI.h:\n\n$unavailable_list"

rm available-list.txt extern-list.txt