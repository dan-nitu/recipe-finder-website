<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'

import Details from '@/components/Details.vue'
import BulletPointList from '@/components/BulletPointList.vue'
import RecipeCard from '@/components/RecipeCard.vue'

const route = useRoute()
const recipeSlug = route.params.slug

const recipes = ref(data)

const recipe = ref('')
recipe.value = recipes.value.find((recipe) => recipe.slug === recipeSlug)

// get 3 random recipes (excluding the displayed one)
const suggestionsPool = recipes.value.filter((rec) => rec.id !== recipe.value.id)
const shuffledSuggestions = suggestionsPool.sort(() => Math.random() - 0.5)
const recipeSuggestions = shuffledSuggestions.slice(0, 3)
</script>

<template>
  <section class="recipe recipe-details">
    <div class="breadcrumbs">
      <span> <a href="#">Recipes</a></span> <span>/</span> <span>{{ recipe.title }}</span>
    </div>

    <div class="recipe-content">
      <img :src="'/' + recipe.image.small" :alt="recipe.title" />

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
          :imgUrl="'/' + recipeSuggestion.image.small"
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
