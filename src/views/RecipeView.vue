<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'

import Breadcrumbs from '@/components/recipe/BreadCrumbs.vue'
import Details from '@/components/Details.vue'
import BulletPointList from '@/components/BulletPointList.vue'
import RecipeCard from '@/components/RecipeCard.vue'

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
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

    <div class="more-recipes">
      <h3>More recipes</h3>

      <div class="more-recipes-list recipe-cards">
        <RecipeCard
          v-for="recipeSuggestion in recipeSuggestions"
          :key="recipeSuggestion.id"
          :imgUrlSmall="'/' + recipeSuggestion.image.small"
          :imgUrlLarge="'/' + recipeSuggestion.image.large"
          :imgAlt="recipeSuggestion.title"
          :title="recipeSuggestion.title"
          :text="recipeSuggestion.overview"
          :servings="recipeSuggestion.servings"
          :prepMinutes="recipeSuggestion.prepMinutes"
          :cookMinutes="recipeSuggestion.cookMinutes"
          :url="'/recipes/' + recipeSuggestion.slug"
        />
      </div>
    </div>
  </section>
</template>
