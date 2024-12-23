cmake_minimum_required(VERSION 3.16)
project(CMakeSFMLProject LANGUAGES CXX)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
set(TGUI_BACKEND SFML_GRAPHICS)
option(BUILD_SHARED_LIBS "Build shared libraries" OFF)

include(FetchContent)
FetchContent_Declare(SFML
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG 2.6.x)
FetchContent_MakeAvailable(SFML)

FetchContent_Declare(TGUI
    GIT_REPOSITORY https://github.com/texus/TGUI.git
    GIT_TAG v1.2.0)
FetchContent_MakeAvailable(TGUI)

file(GLOB SOURCES "main.cpp")

add_executable(CMakeSFMLProject ${SOURCES})
target_link_libraries(CMakeSFMLProject PRIVATE sfml-graphics TGUI::TGUI)
target_compile_features(CMakeSFMLProject PRIVATE cxx_std_17)

set(LIBRARY_SOURCES "lib.cpp") # Specify the sources used by the library
add_library(TGUIJS SHARED ${LIBRARY_SOURCES})
target_link_libraries(TGUIJS PRIVATE sfml-graphics TGUI::TGUI)
target_compile_features(TGUIJS PRIVATE cxx_std_17)

if(WIN32)
    add_custom_command(
        TARGET CMakeSFMLProject
        COMMENT "Copy OpenAL DLL"
        PRE_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${SFML_SOURCE_DIR}/extlibs/bin/$<IF:$<EQUAL:${CMAKE_SIZEOF_VOID_P},8>,x64,x86>/openal32.dll $<TARGET_FILE_DIR:CMakeSFMLProject>
        VERBATIM)
    # Not sure if DLLs for TGUI are needed
endif()

install(TARGETS CMakeSFMLProject)
