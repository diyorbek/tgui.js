# Use Ubuntu as base image
FROM ubuntu:22.04
# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive
# Install basic build tools and dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    wget \
    python3 \
    ninja-build \
    pkg-config \
    clang \
    llvm \
    libssl-dev \
    openssl \
    # SFML dependencies
    libx11-dev \
    libxrandr-dev \
    libxcursor-dev \
    libfreetype6-dev \
    mingw-w64-x86-64-dev-freetype \
    libudev-dev \
    libopenal-dev \
    libflac-dev \
    libvorbis-dev \
    libgl1-mesa-dev \
    # Cross compilation tools
    mingw-w64 \
    # Clean up
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
# Install OSXCross for macOS cross-compilation
WORKDIR /opt
RUN git clone https://github.com/tpoechtrager/osxcross \
    && cd osxcross \
    && wget -nc https://github.com/joseluisq/macosx-sdks/releases/download/12.3/MacOSX12.3.sdk.tar.xz \
    && mv MacOSX12.3.sdk.tar.xz tarballs/ \
    && UNATTENDED=1 ./build.sh
# Add OSXCross to PATH
ENV PATH="/opt/osxcross/target/bin:$PATH"

# Set up working directory
WORKDIR /app
COPY . /app

# Copy build script
# COPY build.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/build.sh

# Default command to show usage
# CMD ["/bin/bash", "-c", "while true; do cat; done;"]
CMD ["/bin/bash", "-c", "./build.sh"]