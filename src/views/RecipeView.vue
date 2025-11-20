<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipes } from '@/composables/useRecipes'

import Breadcrumbs from '@/components/recipe/Breadcrumbs.vue'
import RecipeImage from '@/components/recipe/RecipeImage.vue'
import Details from '@/components/Details.vue'
import RecipeSection from '@/components/recipe/RecipeSection.vue'
import MoreRecipes from '@/components/recipe/MoreRecipes.vue'

const route = useRoute()
const { findBySlug, getRandomSuggestions } = useRecipes()

const recipe = ref(null)
const recipeSuggestions = ref([])

function loadRecipe(slug) {
  recipe.value = findBySlug(slug)
  recipeSuggestions.value = getRandomSuggestions(recipe.value.id)
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
      <RecipeImage
        :recipeImageSmall="recipe.image.small"
        :recipeImageLarge="recipe.image.large"
        :recipeImageAlt="recipe.title"
      />

      <div class="recipe-info">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.overview }}</p>

        <Details
          :servings="recipe.servings"
          :prepMinutes="recipe.prepMinutes"
          :cookMinutes="recipe.cookMinutes"
        />

        <RecipeSection title="Ingredients" :items="recipe.ingredients" keyField="ingredient" />

        <RecipeSection title="Instructions" :items="recipe.instructions" keyField="instruction" />
      </div>
    </div>

    <MoreRecipes :recipeSuggestions="recipeSuggestions" />
  </section>
</template>
