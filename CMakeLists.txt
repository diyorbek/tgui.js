cmake_minimum_required(VERSION 3.16)
project(ctgui_project)

include(FetchContent)

set(SFML_VERSION "2.6.2")
set(TGUI_BACKEND SFML_GRAPHICS)
set(TGUI_BUILD_FRAMEWORK FALSE)
set(CTGUI_HAS_BACKEND_CSFML_GRAPHICS 1)
option(BUILD_SHARED_LIBS "Build shared libraries" ON)

# Remove C++ stdlib flag for C compilation
if(APPLE)
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wno-unused-command-line-argument")
endif()

# Fetch SFML
FetchContent_Declare(
    SFML
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG "${SFML_VERSION}"
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
    GIT_TAG 2.6.1
)
FetchContent_MakeAvailable(CSFML)

FetchContent_Declare(TGUI
    GIT_REPOSITORY https://github.com/texus/TGUI.git
    GIT_TAG v1.6.0)
FetchContent_MakeAvailable(TGUI)

FetchContent_Declare(CTGUI
    GIT_REPOSITORY https://github.com/texus/CTGUI.git
    GIT_TAG v1.6)

set(CSFML_INCLUDE_DIR ${CSFML_SOURCE_DIR}/include)
set(CSFML_LIBRARY_DIR ${CSFML_BINARY_DIR}/lib)
FetchContent_MakeAvailable(CTGUI)

# Add executable with main.c in root directory
add_executable(${PROJECT_NAME} main.c)

# Link all CSFML libraries
target_link_libraries(${PROJECT_NAME} PRIVATE ctgui)

# Include directories
target_include_directories(${PROJECT_NAME} PRIVATE
    ${csfml_SOURCE_DIR}/include
)

set(LIBRARY_SOURCES "lib.c") # Specify the sources used by the library
add_library(TGUIJS SHARED ${LIBRARY_SOURCES})
target_link_libraries(TGUIJS PRIVATE ctgui)
# target_compile_features(TGUIJS PRIVATE cxx_std_17)

# TODO: Include windows configuration for copying the DLLs
