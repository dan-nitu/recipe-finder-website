<script setup>
import BulletPointItem from '../BulletPointItem.vue'

const whyWeExistItems = [
  {
    id: 1,
    h4: 'Cut through the noise.',
    text: `The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.`,
  },
  {
    id: 2,
    h4: 'Empower home kitchens.',
    text: `When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.`,
  },
  {
    id: 3,
    h4: 'Make healthy look good.',
    text: `High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.`,
  },
]
</script>

<template>
  <section class="why-we-exist has-divider">
    <h2>Why we exist</h2>

    <div class="content">
      <BulletPointItem
        v-for="whyWeExistItem in whyWeExistItems"
        :key="whyWeExistItem.id"
        :h4="whyWeExistItem.h4"
        :text="whyWeExistItem.text"
      />
    </div>
  </section>
</template>
