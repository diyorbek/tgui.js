mode=Debug # Release

if [[ "$OS" == *Windows* ]]; then
    cmake -S . -B build -DCMAKE_BUILD_TYPE=$mode -G "MinGW Makefiles"
    
    # Build CSFML static library by modifying below files
    cp -f support/Config.h build/_deps/csfml-src/include/SFML/Config.h
    cp -f support/Macros.cmake.in build/_deps/csfml-src/cmake/Macros.cmake 

    # Extend CTGUI with custom functions
    cp extend/extend.cpp build/_deps/ctgui-src/src/CTGUI
    cp extend/extend.h build/_deps/ctgui-src/include/CTGUI

    cmake --build build --config $mode
else
    cmake -S . -B build -DCMAKE_BUILD_TYPE=$mode

    # Extend CTGUI with custom functions
    cp extend/extend.cpp build/_deps/ctgui-src/src/CTGUI
    cp extend/extend.h build/_deps/ctgui-src/include/CTGUI
    # Modify CTGUI.h to include new files
    sed -i '' '/^#include <CTGUI\/Widget\.h>$/a\
#include <CTGUI/extend.h>
    ' build/_deps/ctgui-src/include/CTGUI/CTGUI.h
    # Modify CMakelists.txt to include new files
    sed -i '' '/^set(SRC$/a\
    ${SRCROOT}/extend.cpp\
    ${INCROOT}/extend.h
    ' build/_deps/ctgui-src/src/CTGUI/CMakeLists.txt

    cmake --build build --config $mode
fi
