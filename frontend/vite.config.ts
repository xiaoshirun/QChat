
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite' // 导入 Vite 配置类型

// 导出类型化的配置
const config: UserConfig = {
  plugins: [vue()],
  build: {
    outDir: '../src/main/resources/static', // 输出到 Spring Boot 静态资源目录
    emptyOutDir: true,
  },
  base: '/', // 与后端上下文路径一致
}

// https://vite.dev/config/
export default defineConfig(config)
