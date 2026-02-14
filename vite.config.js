import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    prerender({
      staticDir: 'dist',
      routes: ['/', '/about', '/projects', '/contact'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
