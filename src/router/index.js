import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeView from '@/views/RecipeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/recipes', name: 'recipes', component: RecipesView },
  { path: '/recipes/:slug', name: 'recipe', component: RecipeView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Back/forward buttons
      return savedPosition
    } else if (to.hash) {
      // Anchor links
      return { el: to.hash, behavior: 'smooth' }
    } else {
      // Default scroll to top
      return { top: 0 }
    }
  },
})

export default router
