import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable source maps completely
    minify: 'esbuild', // Use esbuild for faster builds
    target: 'es2015',
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip source map warnings
        if (warning.code === 'SOURCEMAP_ERROR') return;
        if (warning.code === 'MISSING_EXPORT') return;
        if (warning.message?.includes('sourcemap') || warning.message?.includes('.map')) return;
        warn(warning);
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        },
        // Clean file naming to prevent conflicts
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  // Configure base path for GitHub Pages
  base: command === 'build' && mode === 'production' ? '/devtechplus/' : '/',
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    force: true
  },
  // Fix module resolution
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // CSS configuration
  css: {
    postcss: './postcss.config.js'
  },
  // Environment variables
  define: {
    __DEV__: command === 'serve'
  }
}));
