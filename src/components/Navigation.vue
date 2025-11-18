<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const navRef = ref(null)

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Recipes', to: '/recipes' },
  { name: 'Browse Recipes', to: '/recipes', class: 'button centered' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (navRef.value && !navRef.value.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav ref="navRef">
    <RouterLink to="/"> <img src="/src/assets/images/logo.svg" alt="logo" /></RouterLink>

    <button @click="toggleMenu">
      <img src="/src/assets/images/icon-hamburger-menu.svg" alt="" />
    </button>

    <ul :class="{ open: isOpen }">
      <li v-for="(item, index) in menuItems" :key="index">
        <RouterLink :to="item.to" :class="item.class || ''" @click="closeMenu">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>

    <RouterLink to="/recipes" class="button">Browse Recipes</RouterLink>
  </nav>
</template>
