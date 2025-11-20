<script setup>
import { imgPath } from '@/utils/assets'
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

    <picture>
      <source :srcset="imgPath('image-about-our-mission-large.webp')" media="(min-width: 768px)" />
      <img
        :src="imgPath('image-about-our-mission-small.webp')"
        alt="brunette-woman-cutting-carrots"
        loading="lazy"
      />
    </picture>
  </section>
</template>
