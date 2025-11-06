<script setup>
import CallToAction from '@/components/CallToAction.vue'
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
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Cut through the noise.</h4>
          <p>
            The internet is bursting with recipes, yet most busy cooks still default to take-away or
            packaged foods. We curate a tight collection of fool-proof dishes so you can skip the
            scrolling and start cooking.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Empower home kitchens.</h4>
          <p>
            When you control what goes into your meals, you control how you feel. Every recipe is
            built around unrefined ingredients and ready in about half an hour of active prep.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Make healthy look good.</h4>
          <p>
            High-resolution imagery shows you exactly what success looks like—because we eat with
            our eyes first, and confidence matters.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="main-container has-divider">
    <h2>Our food philosophy</h2>

    <div class="content">
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Whole ingredients first.</h4>
          <p>
            Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every
            recipe.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Flavor without compromise.</h4>
          <p>Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
        </div>
      </div>
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Respect for time.</h4>
          <p>
            Weeknight meals should slot into real schedules; weekend cooking can be leisurely but
            never wasteful.
          </p>
        </div>
      </div>
      <div class="item">
        <img src="/src/assets/images/icon-bullet-point.svg" alt="" />
        <div class="text">
          <h4>Sustainable choices.</h4>
          <p>
            Short ingredient lists cut down on food waste and carbon footprint, while plant-forward
            dishes keep things planet-friendly.
          </p>
        </div>
      </div>
    </div>
  </section>

  <CallToAction :extraClasses="'about'" />
</template>
