import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 定义路由元信息类型
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    title?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      requiresAuth: true,
      title: 'About Us'
    }
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   // 设置页面标题
//   if (to.meta.title) {
//     document.title = `${to.meta.title} | My App`
//   }
//
//   // 检查是否需要认证
//   if (to.meta.requiresAuth) {
//     const isAuthenticated = localStorage.getItem('token')
//     if (!isAuthenticated) {
//       next({ name: 'Login', query: { redirect: to.fullPath } })
//       return
//     }
//   }
//
//   next()
// })

export default router
