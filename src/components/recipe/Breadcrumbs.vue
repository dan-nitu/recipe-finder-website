<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="breadcrumbs">
    <span> <RouterLink to="/recipes">Recipes</RouterLink></span> <span>/</span>
    <span>{{ title }}</span>
  </div>
</template>
