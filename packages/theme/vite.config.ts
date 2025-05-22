import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

const resolve = (...args) => path.resolve(__dirname, ...args)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts'],
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace('/dist/src/', '/dist/'),
          content
        }
      }
    })
  ],
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: 'UniTheme',
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['vue', '@my-ui/utils'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
