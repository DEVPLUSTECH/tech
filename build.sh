#!/bin/bash

# Clean previous build
rm -rf dist

# Set environment variables to disable source maps
export GENERATE_SOURCEMAP=false
export VITE_SOURCEMAP=false
export NODE_ENV=production

# Build with TypeScript check first
echo "Running TypeScript check..."
npx tsc --noEmit

# Build with Vite
echo "Building with Vite..."
npx vite build

echo "Build complete!"
