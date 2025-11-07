<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'

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

        <!-- @TODO vue component -->
        <div class="details">
          <div>
            <img src="/src/assets/images/icon-servings.svg" alt="servings-icon" />
            Servings: {{ recipe.servings }}
          </div>
          <div>
            <img src="/src/assets/images/icon-prep-time.svg" alt="prep-time-icon" />
            Prep: {{ recipe.prepMinutes }} mins
          </div>
          <div>
            <img src="/src/assets/images/icon-cook-time.svg" alt="cook-time-icon" />
            Cook: {{ recipe.cookMinutes }} min
          </div>
        </div>

        <div class="ingredients">
          <h4>Ingredients:</h4>

          <!-- @TODO vue component -->
          <ul class="bullet-point">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div class="instructions">
          <h4>Instructions:</h4>

          <ul class="bullet-point">
            <li v-for="instruction in recipe.instructions" :key="instruction">
              {{ instruction }}
            </li>
          </ul>
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

              <div class="details">
                <div>
                  <img src="/src/assets/images/icon-servings.svg" alt="servings-icon" />
                  Servings: {{ recipeSuggestion.servings }}
                </div>
                <div>
                  <img src="/src/assets/images/icon-prep-time.svg" alt="prep-time-icon" />
                  Prep: {{ recipeSuggestion.prepMinutes }} mins
                </div>
                <div>
                  <img src="/src/assets/images/icon-cook-time.svg" alt="cook-time-icon" />
                  Cook: {{ recipeSuggestion.cookMinutes }} min
                </div>
              </div>
            </div>
          </div>

          <a :href="'/recipes/' + recipe.slug" class="button centered radius-full">View Recipe</a>
        </div>
      </div>
    </div>
  </section>
</template>
