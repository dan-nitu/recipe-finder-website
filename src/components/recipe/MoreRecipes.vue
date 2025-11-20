<script setup>
import { defineProps } from 'vue'

import RecipeCard from '../RecipeCard.vue'

defineProps({
  recipeSuggestions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
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
</template>
