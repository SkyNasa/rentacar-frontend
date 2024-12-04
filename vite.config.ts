import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  base: '/metronic/tailwind/react',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    chunkSizeWarningLimit: 3000
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized]
    }
  }
});
