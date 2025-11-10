<script setup>
import { defineProps } from 'vue'

defineProps({
  items: Array,
  keyField: String,
})
</script>

<template>
  <ul class="bullet-point">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
