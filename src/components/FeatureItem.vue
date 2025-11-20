<script setup>
import { imgPath } from '@/utils/assets'
import { defineProps } from 'vue'

defineProps({
  imgUrl: String,
  imgAlt: String,
  h3: String,
  paragraph: String,
})
</script>

<template>
  <div class="feature-item">
    <div class="image-wrapper">
      <img :src="imgPath(imgUrl)" :alt="imgAlt" loading="lazy" />
    </div>
    <div class="feature-text">
      <h3>{{ h3 }}</h3>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>
