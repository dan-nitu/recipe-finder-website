<script setup>
import { defineProps } from 'vue'

import Details from './Details.vue'

defineProps({
  imgUrl: String,
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
      <img :src="imgUrl" :alt="imgAlt" />

      <div class="recipe-info">
        <div class="description">
          <h5>{{ title }}</h5>
          <p>{{ text }}</p>
        </div>

        <Details :servings="servings" :prepMinutes="prepMinutes" :cookMinutes="cookMinutes" />
      </div>
    </div>

    <a :href="url" class="button centered radius-full">View Recipe</a>
  </div>
</template>
