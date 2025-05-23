import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    // host: 'local-editor.csdn.net',
    port: 5173
    // cors: true,
    // proxy: {
    //   "/api": {
    //     ws: true,
    //     target: 'https://test-inscode-api.csdn.net',
    //     changeOrigin: true
    //   }
    // }
  },
  build: {
    sourcemap: false,
    lib: {
      entry: './components/index.ts',
      name: 'go-tribe-ui-nuxt',
      fileName: (format) => `go-tribe-ui-nuxt.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'esm',
          name: 'go-tribe-ui-nuxt',
          assetFileNames: '[name].[ext]', // 资源文件不带哈希
          chunkFileNames: '[name].js', // 代码分块文件不带哈希
          entryFileNames: 'go-tribe-ui-nuxt.esm.js', // 入口文件不带哈希
        },
        {
          format: 'umd',
          name: 'go-tribe-ui-nuxt',
          assetFileNames: '[name].[ext]', // 资源文件不带哈希
          chunkFileNames: '[name].js', // 代码分块文件不带哈希
          entryFileNames: 'go-tribe-ui-nuxt.umd.js', // 入口文件不带哈希
        }
      ]
    }
  }
})