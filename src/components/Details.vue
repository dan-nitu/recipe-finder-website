<script setup>
import { defineProps } from 'vue'

defineProps({
  servings: Number,
  prepMinutes: Number,
  cookMinutes: Number,
})
</script>

<template>
  <div class="details">
    <div>
      <img src="/src/assets/images/icon-servings.svg" alt="servings-icon" />
      Servings: {{ servings }}
    </div>
    <div>
      <img src="/src/assets/images/icon-prep-time.svg" alt="prep-time-icon" />
      Prep: {{ prepMinutes }} mins
    </div>
    <div>
      <img src="/src/assets/images/icon-cook-time.svg" alt="cook-time-icon" />
      Cook: {{ cookMinutes }} min
    </div>
  </div>
</template>
