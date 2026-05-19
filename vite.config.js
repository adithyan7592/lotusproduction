import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/lotus-pro/", // Clean URL base
  plugins: [react()],
  build: {
    outDir: 'docs', // Changes output from 'dist' to 'docs'
  }
})