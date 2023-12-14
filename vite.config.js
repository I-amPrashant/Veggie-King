import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInclude: ["src/assets/**"],
  },

  base:"/Veggie-King/",
  plugins: [react()],
})
