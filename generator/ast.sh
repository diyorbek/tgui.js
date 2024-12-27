# clang -E -DCTGUI_EXPORTS -DTGUI_DYNAMIC -DTGUI_NO_DEPRECATED_WARNINGS -I../build/_deps/csfml-src/include -I../build/_deps/ctgui-src/include -I../build/_deps/ctgui-src/src -I../build/_deps/tgui-src/include -I../build/_deps/sfml-src/include all.c -o merged.c

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
deno  --allow-write ast.ts

# Availability status of the API
deno --allow-read --allow-write gen.ts
unavailable_list=`comm -13 available-list.txt extern-list.txt`
unavailable_count=`echo "$unavailable_list" | wc -l | xargs`
echo "\nFollowing $unavailable_count functions are not included in the CTGUI.h:\n\n$unavailable_list"

rm available-list.txt extern-list.txt
