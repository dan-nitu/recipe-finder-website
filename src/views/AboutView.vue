<script setup>
import Intro from '@/components/about/Intro.vue'
import WhyWeExist from '@/components/about/WhyWeExist.vue'
import OurFoodPhilosophy from '@/components/about/OurFoodPhilosophy.vue'
import CallToAction from '@/components/CallToAction.vue'
</script>

<template>
  <Intro />

  <WhyWeExist />
  <OurFoodPhilosophy />

  <CallToAction :extraClasses="'about'" />
</template>
