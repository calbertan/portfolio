import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // default in next, allows @import from src without relative paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
