import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

// 定义路由类型：使用 RouteRecordRaw 约束路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 懒加载组件并指定类型
    component: () => import('../views/About.vue')
  }
]

// 创建路由实例，自动推断类型
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite 中使用 import.meta.env 替代 process.env
  routes
})

export default router
