<script setup>
import BulletPointItem from '../BulletPointItem.vue'

const ourFoodPhilosophyItems = [
  {
    id: 1,
    h4: 'Whole ingredients first.',
    text: `Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.`,
  },
  {
    id: 2,
    h4: 'Flavor without compromise.',
    text: `Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.`,
  },
  {
    id: 3,
    h4: 'Respect for time.',
    text: `Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.`,
  },
  {
    id: 4,
    h4: 'Sustainable choices.',
    text: `Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.`,
  },
]
</script>

<template>
  <section class="out-food-philosophy has-border-bottom">
    <h2>Our food philosophy</h2>

    <div class="content">
      <BulletPointItem
        v-for="ourFoodPhilosophyItem in ourFoodPhilosophyItems"
        :key="ourFoodPhilosophyItem.id"
        :h4="ourFoodPhilosophyItem.h4"
        :text="ourFoodPhilosophyItem.text"
      />
    </div>
  </section>
</template>
