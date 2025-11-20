<script setup>
import { defineProps } from 'vue'

defineProps({
  maxPrepTime: [Number, String],
  maxCookTime: [Number, String],
  searchQuery: String,
})
</script>

<template>
  <div class="no-results">
    <p><b>No recipes found.</b></p>

    <div v-if="maxPrepTime || maxCookTime || searchQuery">
      <p>Filters applied:</p>
      <div class="filter" v-if="maxPrepTime">Prep ≤ {{ maxPrepTime }} mins</div>
      <div class="filter" v-if="maxCookTime">Cook ≤ {{ maxCookTime }} mins</div>
      <div class="filter" v-if="searchQuery">Search: "{{ searchQuery }}"</div>
    </div>

    <p>Try adjusting them to see results.</p>
  </div>
</template>
