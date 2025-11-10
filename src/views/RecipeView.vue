<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'

import Details from '@/components/Details.vue'
import BulletPointList from '@/components/BulletPointList.vue'

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
  <!-- <div>recipe view {{ recipeSlug }}</div> -->
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

      <!-- @TODO vue component -->
      <div class="more-recipes-list recipe-cards">
        <div
          class="recipe-card"
          v-for="recipeSuggestion in recipeSuggestions"
          :key="recipeSuggestion.id"
        >
          <div class="recipe-top">
            <img :src="'/' + recipeSuggestion.image.small" :alt="recipeSuggestion.title" />

            <div class="recipe-info">
              <div class="description">
                <h5>{{ recipeSuggestion.title }}</h5>
                <p>{{ recipeSuggestion.overview }}</p>
              </div>

              <Details
                :servings="recipeSuggestion.servings"
                :prepMinutes="recipeSuggestion.prepMinutes"
                :cookMinutes="recipeSuggestion.cookMinutes"
              />
            </div>
          </div>

          <a :href="'/recipes/' + recipe.slug" class="button centered radius-full">View Recipe</a>
        </div>
      </div>
    </div>
  </section>
</template>
