set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_VERSION 10)

# Specify the cross-compilers
set(CMAKE_C_COMPILER x86_64-w64-mingw32-gcc)
set(CMAKE_CXX_COMPILER x86_64-w64-mingw32-g++)

# OpenAL paths for ARM architecture
set(OPENAL_INCLUDE_DIR "/usr/include/AL")
set(OPENAL_LIBRARY "/usr/lib/aarch64-linux-gnu/libopenal.so")

# Set Vorbis and Ogg include and library directories for ARM architecture
set(VORBIS_INCLUDE_DIR "/usr/include/vorbis")
set(OGG_INCLUDE_DIR "/usr/include/ogg")
set(VORBIS_LIBRARY "/usr/lib/aarch64-linux-gnu/libvorbis.so")
set(OGG_LIBRARY "/usr/lib/aarch64-linux-gnu/libogg.so")

set(FLAC_INCLUDE_DIR "/usr/include/flac")
set(FLAC_LIBRARY "/usr/lib/aarch64-linux-gnu/libflac.so")

set(FREETYPE_INCLUDE_DIR "/usr/include/freetype2")
set(FREETYPE_LIBRARY "/usr/lib/aarch64-linux-gnu/libfreetype.so")

# Set the Vorbis encoding and file libraries for ARM architecture
set(VORBISENC_LIBRARY "/usr/lib/aarch64-linux-gnu/libvorbisenc.so")
set(VORBISFILE_LIBRARY "/usr/lib/aarch64-linux-gnu/libvorbisfile.so")

# Set the flags for compilation
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -I${VORBIS_INCLUDE_DIR} -I${OGG_INCLUDE_DIR} -I${FLAC_INCLUDE_DIR} -I${FREETYPE_INCLUDE_DIR}")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -I${VORBIS_INCLUDE_DIR} -I${OGG_INCLUDE_DIR} -I${FLAC_INCLUDE_DIR} -I${FREETYPE_INCLUDE_DIR}")

# Set other necessary flags
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -I${OPENAL_INCLUDE_DIR}")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -I${OPENAL_INCLUDE_DIR}")

link_directories("/usr/lib/aarch64-linux-gnu")

# Prevent CMake from using the host compiler
set(CMAKE_C_COMPILER_WORKS TRUE)
set(CMAKE_CXX_COMPILER_WORKS TRUE)

# Optional: Specify the path for the Windows libraries
set(CMAKE_FIND_ROOT_PATH /usr/bin/x86_64-w64-mingw32)
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
