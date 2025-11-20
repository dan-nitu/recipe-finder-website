import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/recipes', name: 'recipes', component: () => import('@/views/RecipesView.vue') },
  { path: '/recipes/:slug', name: 'recipe', component: () => import('@/views/RecipeView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // remember scroll position when navigating back
      return savedPosition
    }

    if (to.hash) {
      // scroll to anchor
      return { el: to.hash, behavior: 'smooth' }
    }

    // scroll to top on 'normal' navigation
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
