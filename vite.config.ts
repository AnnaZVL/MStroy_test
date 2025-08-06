import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({
      script: {
        globalTypeFiles: ['src/types/*.d.ts']  
      }
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
