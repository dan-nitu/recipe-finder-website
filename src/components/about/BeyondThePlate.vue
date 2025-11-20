<script setup>
import { imgPath } from '@/utils/assets'
</script>

<template>
  <section class="beyond-the-plate">
    <div class="text-container">
      <h2>Beyond the plate</h2>
      <div class="description-container">
        <p>
          We believe food is a catalyst for community and well-being. By sharing approachable
          recipes, we hope to:
        </p>
        <ul>
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ul>
      </div>
    </div>

    <picture>
      <source
        :srcset="imgPath('image-about-beyond-the-plate-large.webp')"
        media="(min-width: 768px)"
      />
      <img
        :src="imgPath('image-about-beyond-the-plate-small.webp')"
        alt="front-view-family-having-fun-while-preparing-food-kitchen"
        loading="lazy"
      />
    </picture>
  </section>
</template>
