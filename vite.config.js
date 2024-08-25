import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ecommerce/',
  build: {
    outDir: 'dist',  // Esto asegura que los archivos se generen en el directorio `dist`
  },
})
