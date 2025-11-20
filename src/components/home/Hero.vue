<script setup>
import { imgPath } from '@/utils/assets'
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

    <picture>
      <source :srcset="imgPath('image-home-hero-large.webp')" media="(min-width: 768px)" />
      <img
        class="framed-image"
        :src="imgPath('image-home-hero-small.webp')"
        alt="hero-image"
        loading="lazy"
      />
    </picture>
  </section>
</template>
