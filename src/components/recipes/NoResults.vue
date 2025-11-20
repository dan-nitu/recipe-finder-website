<script setup>
import { defineProps } from 'vue'

defineProps({
  maxPrepTime: [Number, null],
  maxCookTime: [Number, null],
  searchQuery: String,
})
</script>

<template>
  <div class="no-results">
    <p><b>No recipes found.</b></p>

    <div v-if="maxPrepTime !== null || maxCookTime !== null || searchQuery">
      <p>Filters applied:</p>
      <div class="filter" v-if="maxPrepTime !== null">Prep ≤ {{ maxPrepTime }} mins</div>
      <div class="filter" v-if="maxCookTime !== null">Cook ≤ {{ maxCookTime }} mins</div>
      <div class="filter" v-if="searchQuery">Search: "{{ searchQuery }}"</div>
    </div>

    <p>Try adjusting them to see results.</p>
  </div>
</template>
