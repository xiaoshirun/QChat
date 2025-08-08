
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'
import * as path from "node:path"; // 导入 Vite 配置类型
// 导出类型化的配置
const config: UserConfig = {
  plugins: [vue()],
  build: {
    outDir: '../src/main/resources/static', // 输出到 Spring Boot 静态资源目录
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

}

// https://vite.dev/config/
export default defineConfig(config)
