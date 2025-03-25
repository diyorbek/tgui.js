cmake_minimum_required(VERSION 3.24)
project(ctgui_project)

include(FetchContent)

set(SFML_VERSION "2.6.2")
set(SFML_BUILD_AUDIO FALSE)
set(SFML_BUILD_NETWORK FALSE)
set(CSFML_BUILD_AUDIO FALSE)
set(CSFML_BUILD_NETWORK FALSE)

set(SFML_USE_STATIC_STD_LIBS TRUE)
set(BUILD_SHARED_LIBS FALSE)

# Disable non-system dependencies of Freetype
set(FT_DISABLE_BROTLI TRUE) 
set(FT_DISABLE_PNG TRUE)
set(FT_DISABLE_HARFBUZZ TRUE)

set(TGUI_BUILD_GUI_BUILDER FALSE) # Exclude GUI builder because it causes freetype static linking issues
set(CTGUI_LINK_TGUI_STATICALLY TRUE)
set(CSFML_LINK_SFML_STATICALLY TRUE)
set(TGUI_BACKEND SFML_GRAPHICS)
set(TGUI_BUILD_FRAMEWORK FALSE)
set(CTGUI_USE_CSFML_VERSION 2)
set(CTGUI_HAS_BACKEND_CSFML_GRAPHICS 1)

# Remove C++ stdlib flag for C compilation
if(APPLE)
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wno-unused-command-line-argument")
endif()

# Add necessary preprocessor definitions for static linking
add_definitions(-DSFML_STATIC -DTGUI_STATIC)

# Fetch FreeType source
FetchContent_Declare(
  freetype
  GIT_REPOSITORY https://gitlab.freedesktop.org/freetype/freetype.git
  GIT_TAG        VER-2-13-2 # Change this to the desired FreeType version
  GIT_SHALLOW TRUE
)
FetchContent_MakeAvailable(freetype)

set(FREETYPE_INCLUDE_DIRS ${freetype_SOURCE_DIR}/include)

if(CMAKE_BUILD_TYPE STREQUAL "Debug")
    set(FREETYPE_LIBRARY ${freetype_BINARY_DIR}/libfreetyped.a)
else()
    set(FREETYPE_LIBRARY ${freetype_BINARY_DIR}/libfreetype.a)
endif()

# Fetch SFML
FetchContent_Declare(
    SFML
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG "${SFML_VERSION}"
    GIT_SHALLOW TRUE
)
FetchContent_MakeAvailable(SFML)

# Configure paths before fetching CSFML
set(SFML_ROOT "${sfml_SOURCE_DIR}")
set(SFML_DIR "${sfml_BINARY_DIR}")
set(SFML_PATH "${sfml_SOURCE_DIR}")
set(SFML_INCLUDE_DIR "${sfml_SOURCE_DIR}/include")
set(SFML_LIBRARY_DIR "${sfml_BINARY_DIR}/lib")
set(SFML_DEPENDENCIES_DIR "${sfml_SOURCE_DIR}/extlibs")

# Create SFML config file that CSFML can find. This overwrites the already existing one because the original one causes conflict.
file(WRITE "${sfml_BINARY_DIR}/SFMLConfig.cmake" 
"set(SFML_VERSION ${SFML_VERSION})
set(SFML_INCLUDE_DIR \"${SFML_INCLUDE_DIR}\")
set(SFML_LIBRARY_DIR \"${SFML_LIBRARY_DIR}\")
set(SFML_DEPENDENCIES_DIR \"${SFML_DEPENDENCIES_DIR}\")
set(SFML_FOUND TRUE)
")

# Fetch CSFML
FetchContent_Declare(
    CSFML
    GIT_REPOSITORY https://github.com/SFML/CSFML.git
    GIT_TAG 2.6.x
    GIT_SHALLOW TRUE
)
FetchContent_MakeAvailable(CSFML)

FetchContent_Declare(
    TGUI
    GIT_REPOSITORY https://github.com/texus/TGUI.git
    GIT_TAG v1.8.0
    GIT_SHALLOW TRUE
)
FetchContent_MakeAvailable(TGUI)

FetchContent_Declare(
    CTGUI
    GIT_REPOSITORY https://github.com/texus/CTGUI.git
    GIT_TAG 1.x
    GIT_SHALLOW TRUE
)

set(CSFML_INCLUDE_DIR ${CSFML_SOURCE_DIR}/include)
FetchContent_MakeAvailable(CTGUI)

# Add test executable
add_executable(${PROJECT_NAME} debug/main.c)

# Link libraries
target_link_libraries(ctgui PUBLIC freetype)
target_link_libraries(${PROJECT_NAME} PRIVATE ctgui)

set_target_properties(${PROJECT_NAME} PROPERTIES
    BUILD_WITH_INSTALL_RPATH TRUE
    INSTALL_RPATH "@executable_path;@executable_path/../lib"
)

# Include directories
target_include_directories(${PROJECT_NAME} PRIVATE
    ${csfml_SOURCE_DIR}/include
)
