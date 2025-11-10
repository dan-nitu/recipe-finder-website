<script setup>
import FeatureItem from '../FeatureItem.vue'

const featureItems = [
  {
    id: 1,
    imgUrl: '/src/assets/images/icon-whole-food-recipes.svg',
    imgAlt: 'icon-whole-food-recipes',
    h3: 'Whole-food recipes',
    paragraph: 'Each dish uses everyday, unprocessed ingredients.',
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/icon-minimum-fuss.svg',
    imgAlt: 'icon-minimum-fuss',
    h3: 'Minimum fuss',
    paragraph: 'All recipes are designed to make eating healthy quick and easy.',
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/icon-search-in-seconds.svg',
    imgAlt: 'icon-whole-food-recipes',
    h3: 'Search in seconds',
    paragraph: 'Filter by name or ingredient and jump straight to the recipe you need.',
  },
]
</script>

<template>
  <section class="features">
    <h2>What you'll get</h2>

    <div class="features-list">
      <FeatureItem
        v-for="featureItem in featureItems"
        :key="featureItem.id"
        :imgUrl="featureItem.imgUrl"
        :alt="featureItem.imgAlt"
        :h3="featureItem.h3"
        :paragraph="featureItem.paragraph"
      />
    </div>
  </section>
</template>
