import { ref } from 'vue'
import recipes from '@/data/recipes.json'

export function useRecipes() {
  const recipesData = ref(recipes)

  const findBySlug = (slug) => recipesData.value.find((r) => r.slug === slug)

  const getRandomSuggestions = (excludeId, count = 3) => {
    const pool = recipesData.value.filter((r) => r.id !== excludeId)
    // Fisher-Yates shuffle for true randomness
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[pool[i], pool[j]] = [pool[j], pool[i]]
    }
    return pool.slice(0, count)
  }

  return { recipesData, findBySlug, getRandomSuggestions }
}
