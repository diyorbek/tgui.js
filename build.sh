mode=Debug # Release

if [[ "$OS" == *Windows* ]]; then
    cmake -S . -B build -DCMAKE_BUILD_TYPE=$mode -G "MinGW Makefiles"
    
    # Build CSFML static library by modifying below files
    cp -f support/Config.h build/_deps/csfml-src/include/SFML/Config.h
    cp -f support/Macros.cmake.in build/_deps/csfml-src/cmake/Macros.cmake 

    # Extend CTGUI with custom functions
    cp -a bindings/. build/_deps/ctgui-src/src/

    cmake --build build --config $mode
else
    cmake -S . -B build -DCMAKE_BUILD_TYPE=$mode

    # Extend CTGUI with custom functions
    # cp -a bindings/. build/_deps/ctgui-src/src/CTGUI
    # sed -i '' '/^set(SRC$/a\
    # ${SRCROOT}/bindings.cpp\
    # ${SRCROOT}/bindings.hpp
    # ' build/_deps/ctgui-src/src/CTGUI/CMakeLists.txt

    cmake --build build --config $mode
fi
