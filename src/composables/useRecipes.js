import { ref } from 'vue'
import recipes from '@/data/recipes.json'

export function useRecipes() {
  const recipesData = ref(recipes)

  const findBySlug = (slug) => recipesData.value.find((r) => r.slug === slug)

  const getRandomSuggestions = (excludeId, count = 3) => {
    const pool = recipesData.value.filter((r) => r.id !== excludeId)
    return pool.sort(() => Math.random() - 0.5).slice(0, count)
  }

  return { recipesData, findBySlug, getRandomSuggestions }
}
