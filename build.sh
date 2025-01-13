mode=Debug # Release

if [[ "$OS" == *Windows* ]]; then
    cmake -S . -B build -DCMAKE_BUILD_TYPE=$mode -G "MinGW Makefiles"
    
    # Build CSFML static library by modifying below files
    cp -f support/Config.h build/_deps/csfml-src/include/SFML/Config.h
    cp -f support/Macros.cmake.in build/_deps/csfml-src/cmake/Macros.cmake 

    # Extend CTGUI with custom functions
    cp extend/extend.cpp build/_deps/ctgui-src/src/CTGUI
    cp extend/extend.h build/_deps/ctgui-src/include/CTGUI
    # Modify CTGUI.h to include new files
    sed -i '/^#include <CTGUI\/Widget\.h>$/a\
#include <CTGUI/extend.h>
    ' build/_deps/ctgui-src/include/CTGUI/CTGUI.h
    # Modify CMakelists.txt to include new files
    sed -i '/^set(SRC$/a\
    ${SRCROOT}/extend.cpp\
    ${INCROOT}/extend.h
    ' build/_deps/ctgui-src/src/CTGUI/CMakeLists.txt

    cmake --build build --config $mode

    find build/_deps/*-build -name '*.dll' | xargs cp -t build
    find build/lib -name '*.dll' | xargs cp -t build
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

# Copy the library to the build directory
if [[ "$OS" == *Windows* ]]; then
    echo ""
else
    cp build/_deps/ctgui-build/src/CTGUI/libctgui-d.1.5.0.dylib build
    mv build/libctgui-d.1.5.0.dylib build/libctgui.dylib
fi