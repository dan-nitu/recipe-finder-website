<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  extraClasses: { type: String, default: '' },
})
</script>

<template>
  <section :class="`call-to-action ${extraClasses}`">
    <div class="call-to-action-wrapper">
      <div class="call-to-action-text">
        <h2>Ready to cook smarter?</h2>
        <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
      </div>

      <RouterLink to="/recipes" class="button">Browse recipes</RouterLink>
    </div>
  </section>
</template>
