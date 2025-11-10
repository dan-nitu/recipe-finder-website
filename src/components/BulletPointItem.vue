<script setup>
import { defineProps } from 'vue'

defineProps({
  h4: String,
  text: String,
})
</script>

<template>
  <div class="item">
    <img src="/src/assets/images/icon-bullet-point.svg" alt="list-icon" />
    <div class="text">
      <h4>{{ h4 }}</h4>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
