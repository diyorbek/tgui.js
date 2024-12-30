#!/bin/bash

# Exit on any error
set -e

# Project name - change this to your library name
PROJECT_NAME="TGUIJS"

# Directory where builds will be stored
BUILD_DIR="out"

# Directory where final libraries will be stored
LIB_DIR="lib"

# Create necessary directories
mkdir -p $BUILD_DIR
mkdir -p $LIB_DIR

# Function to build for a specific target
build_target() {
    local os=$1
    local arch=$2
    local build_type="Release"
    
    echo "Building for $os-$arch..."
    
    # Create build directory for this target
    local target_build_dir="$BUILD_DIR/$os-$arch"
    mkdir -p "$target_build_dir"
    
    # Create library output directory
    local lib_output_dir="$LIB_DIR/$os/$arch"
    mkdir -p "$lib_output_dir"
    
    # Set platform-specific variables
    local lib_extension
    local lib_prefix
    case $os in
        "Windows")
            lib_extension=".dll"
            lib_prefix=""
            ;;
        "Darwin")
            lib_extension=".dylib"
            lib_prefix="lib"
            ;;
        "Linux")
            lib_extension=".so"
            lib_prefix="lib"
            ;;
        *)
            echo "Unknown OS: $os"
            return 1
            ;;
    esac
    
    # Configure CMake based on target
    pushd "$target_build_dir" > /dev/null
    
    # Set architecture-specific CMake flags
    local cmake_arch_flag=""
    local toolchain_file_flag=""
    if [ "$os" = "windows" ]; then
        cmake_arch_flag="-A x64"
        toolchain_file_flag="-DCMAKE_TOOLCHAIN_FILE=../../windows_toolchain.cmake"
    else
        case $arch in
            "x86_64")
                cmake_arch_flag="-DCMAKE_SYSTEM_PROCESSOR=x86_64"
                ;;
            "aarch64")
                cmake_arch_flag="-DCMAKE_SYSTEM_PROCESSOR=aarch64"
                ;;
        esac
    fi
    
    # Run CMake configure
    cmake ../.. \
        -DCMAKE_BUILD_TYPE=$build_type \
        -DCMAKE_SYSTEM_NAME=$os \
        -DCMAKE_TOOLCHAIN_FILE=../../windows_toolchain.cmake \
        $cmake_arch_flag --trace-expand
    
    # Build
    cmake --build . --config $build_type
    
    # Copy the built library to the lib directory
    # Note: Update the source path according to your CMake configuration
    local lib_name="${lib_prefix}${PROJECT_NAME}${lib_extension}"
    if [ "$os" = "windows" ]; then
        cp "$build_type/$lib_name" "../../$lib_output_dir/"
    else
        cp "$lib_name" "../../$lib_output_dir/"
    fi
    
    popd > /dev/null
    
    echo "Build complete for $os-$arch"
}

# Clean previous builds
clean_builds() {
    echo "Cleaning previous builds..."
    rm -rf $BUILD_DIR/*
    rm -rf $LIB_DIR/*
}

# Main build process
main() {
    # Clean previous builds if --clean flag is provided
    if [ "$1" = "--clean" ]; then
        clean_builds
    fi
    
    # Build for each target
    build_target "Windows" "x86_64"
    # build_target "Linux" "x86_64"
    # build_target "Darwin" "x86_64"
    # build_target "Darwin" "aarch64"
    
    echo "All builds completed successfully!"
}

# Run main with all arguments
main "$@"