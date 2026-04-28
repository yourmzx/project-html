import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'home.html'),
        services: resolve(__dirname, 'services-overview.html'),
        schedule: resolve(__dirname, 'consultation.html')
      }
    }
  }
})
