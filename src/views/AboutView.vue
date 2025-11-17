<script setup>
import Intro from '@/components/about/Intro.vue'
import WhyWeExist from '@/components/about/WhyWeExist.vue'
import OurFoodPhilosophy from '@/components/about/OurFoodPhilosophy.vue'
import BeyondThePlate from '@/components/about/BeyondThePlate.vue'
import CallToAction from '@/components/CallToAction.vue'
</script>

<template>
  <Intro />

  <WhyWeExist />
  <OurFoodPhilosophy />
  <BeyondThePlate />

  <CallToAction :extraClasses="'about'" />
</template>
