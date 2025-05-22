import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UniButton',
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['vue', '@my-ui/theme', '@my-ui/utils'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
