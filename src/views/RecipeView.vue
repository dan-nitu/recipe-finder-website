<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'

import Breadcrumbs from '@/components/recipe/BreadCrumbs.vue'
import Details from '@/components/Details.vue'
import BulletPointList from '@/components/BulletPointList.vue'
import MoreRecipes from '@/components/recipe/MoreRecipes.vue'

const route = useRoute()
const recipes = ref(data)

const recipe = ref(null)
const recipeSuggestions = ref([])

function loadRecipe(slug) {
  recipe.value = recipes.value.find((rec) => rec.slug === slug)

  // get 3 random recipes (excluding the displayed one)
  const suggestionsPool = recipes.value.filter((rec) => rec.id !== recipe.value.id)
  const shuffledSuggestions = suggestionsPool.sort(() => Math.random() - 0.5)
  recipeSuggestions.value = shuffledSuggestions.slice(0, 3)
}

loadRecipe(route.params.slug)

// watch for url changes
watch(
  () => route.params.slug,
  (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      loadRecipe(newSlug)
    }
  },
)
</script>

<template>
  <section class="recipe recipe-details">
    <Breadcrumbs :title="recipe.title" />

    <div class="recipe-content">
      <picture>
        <source :srcset="'/' + recipe.image.large" media="(min-width: 768px)" />
        <img :src="'/' + recipe.image.small" :alt="recipe.title" />
      </picture>

      <div class="recipe-info">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.overview }}</p>

        <Details
          :servings="recipe.servings"
          :prepMinutes="recipe.prepMinutes"
          :cookMinutes="recipe.cookMinutes"
        />

        <div class="ingredients">
          <h4>Ingredients:</h4>

          <BulletPointList :items="recipe.ingredients" :keyField="'ingredient'" />
        </div>

        <div class="instructions">
          <h4>Instructions:</h4>

          <BulletPointList :items="recipe.instructions" :keyField="'instruction'" />
        </div>
      </div>
    </div>

    <MoreRecipes :recipeSuggestions="recipeSuggestions" />
  </section>
</template>
