import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'transitions': fileURLToPath(new URL('./src/components/transitionsExamples/', import.meta.url)),
      'keyFrame': fileURLToPath(new URL('./src/components/keyFrameExamples/', import.meta.url)),
      'animationFrame': fileURLToPath(new URL('./src/components/animationFrameExamples/', import.meta.url)),
      'scripts': fileURLToPath(new URL('./src/assets/scripts/', import.meta.url)),
      'scss': fileURLToPath(new URL('./src/assets/scss/', import.meta.url)),
      'gsap': fileURLToPath(new URL('./src/assets/scripts/gsap/', import.meta.url)),
    }
  }
})
