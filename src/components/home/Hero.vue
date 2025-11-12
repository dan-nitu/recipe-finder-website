<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <div class="content-wrapper">
      <h1><span>Healthy</span> meals, zero fuss</h1>
      <p>
        Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
        guesswork.
      </p>

      <RouterLink to="/recipes" class="button">Start exploring</RouterLink>
    </div>

    <img src="/src/assets/images/image-home-hero-small.webp" alt="" />
  </section>
</template>
