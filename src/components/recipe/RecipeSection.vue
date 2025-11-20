<script setup>
import BulletPointList from '@/components/BulletPointList.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  keyField: {
    type: String,
    default: 'id', // fallback if no keyField is provided
  },
})
</script>

<template>
  <div class="recipe-section">
    <h4>{{ title }}:</h4>
    <BulletPointList :items="items" :keyField="keyField" />
  </div>
</template>
