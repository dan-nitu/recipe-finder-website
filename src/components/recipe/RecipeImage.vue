<script setup>
import { imgPath } from '@/utils/assets'
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
    <source :srcset="imgPath(recipeImageLarge)" media="(min-width: 768px)" />
    <img :src="imgPath(recipeImageSmall)" :alt="recipeImageAlt" loading="lazy" />
  </picture>
</template>
