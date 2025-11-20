<script setup>
import { defineProps } from 'vue'

defineProps({
  recipeImageSmall: {
    type: String,
    required: true,
  },
  recipeImageLarge: {
    type: String,
    required: true,
  },
  recipeImageAlt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <picture>
    <source :srcset="'/' + recipeImageLarge" media="(min-width: 768px)" />
    <img :src="'/' + recipeImageSmall" :alt="recipeImageAlt" />
  </picture>
</template>
