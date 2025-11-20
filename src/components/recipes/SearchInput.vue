<script setup>
import { defineProps } from 'vue'

defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-input">
    <input
      type="search"
      id="search"
      placeholder="Search by name or ingredient..."
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
