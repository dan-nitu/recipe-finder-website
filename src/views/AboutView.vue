<script setup>
import BulletPointItem from '@/components/BulletPointItem.vue'
import CallToAction from '@/components/CallToAction.vue'

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
  <section class="about content-container">
    <div class="text">
      <h5 class="pill">Our mission</h5>
      <h2>Help more people cook nourishing meals, more often.</h2>
      <p>
        Healthy Recipe Finder was created to prove that healthy eating can be convenient,
        affordable, and genuinely delicious.
      </p>
      <p>
        We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no
        ultra-processed shortcuts—just honest ingredients and straightforward steps.
      </p>
    </div>

    <img src="/src/assets/images/image-about-our-mission-small.webp" alt="" />
  </section>

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

  <section class="main-container has-divider">
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

  <CallToAction :extraClasses="'about'" />
</template>
