<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navigation />

  <RouterView />

  <Footer />
</template>
