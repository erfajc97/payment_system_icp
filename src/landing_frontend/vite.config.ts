import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import environment from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    environment({
      DFX_NETWORK: 'local',
    }),
  ],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:4943',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}) 