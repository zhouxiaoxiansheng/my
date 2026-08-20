import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '周玉佂 · 个人主页' },
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue'),
      meta: { title: '周玉佂 · 个人简历' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: { title: '周玉佂 · 个人博客' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const titles: Record<string, string> = {
    home: 'Zhou Yuzheng · Portfolio',
    resume: 'Zhou Yuzheng · Resume',
    blog: 'Zhou Yuzheng · Blog',
  }
  document.title = titles[String(to.name)] ?? 'Zhou Yuzheng'
})

export default router
