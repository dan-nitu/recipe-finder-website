<script setup>
import { imgPath } from '@/utils/assets'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

import Details from './Details.vue'

defineProps({
  imgUrlSmall: String,
  imgUrlLarge: String,
  imgAlt: { type: String, default: '' },
  title: String,
  text: String,
  servings: Number,
  prepMinutes: Number,
  cookMinutes: Number,
  url: String,
})
</script>

<template>
  <div class="recipe-card">
    <div class="recipe-top">
      <picture>
        <source :srcset="imgPath(imgUrlLarge)" media="(min-width: 768px)" />
        <img :src="imgPath(imgUrlSmall)" :alt="imgAlt" loading="lazy" />
      </picture>

      <div class="recipe-info">
        <div class="description">
          <h5>{{ title }}</h5>
          <p>{{ text }}</p>
        </div>

        <Details :servings="servings" :prepMinutes="prepMinutes" :cookMinutes="cookMinutes" />
      </div>
    </div>

    <RouterLink :to="url" class="button centered radius-full">View Recipe</RouterLink>
  </div>
</template>
