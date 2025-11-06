<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import data from '../../data.json'

const recipes = ref(data)

const maxPrepTime = ref('')
const prepOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: 'Clear', value: '' },
]

const maxCookTime = ref('')
const cookOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: '15 minutes', value: 15 },
  { label: '20 minutes', value: 20 },
  { label: 'Clear', value: '' },
]

const showMaxPrepTimeDropdown = ref(false)
const showMaxCookTimeDropdown = ref(false)

const filtersContainer = ref(null)

const toggleMaxPrepTimeDropdown = () => {
  showMaxPrepTimeDropdown.value = !showMaxPrepTimeDropdown.value
  showMaxCookTimeDropdown.value = false
}

const toggleMaxCookTimeDropdown = () => {
  showMaxCookTimeDropdown.value = !showMaxCookTimeDropdown.value
  showMaxPrepTimeDropdown.value = false
}

// Close dropdowns if clicking outside
const handleClickOutside = (event) => {
  if (filtersContainer.value && !filtersContainer.value.contains(event.target)) {
    showMaxPrepTimeDropdown.value = false
    showMaxCookTimeDropdown.value = false
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
  <section class="recipes content-container">
    <h2>Explore our simple, healthy recipes</h2>
    <p>
      Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use
      the search bar to find a recipe by name or ingredient, or simply scroll the list and let
      something delicious catch your eye.
    </p>
  </section>

  <section class="recipe-list">
    <div class="filter-bar" ref="filtersContainer">
      <div class="filters">
        <fieldset class="radio-dropdown">
          <legend @click="toggleMaxPrepTimeDropdown">Max Prep Time</legend>

          <div class="wrapper" v-if="showMaxPrepTimeDropdown">
            <div v-for="option in prepOptions" :key="option.value">
              <input
                type="radio"
                :id="`${option.value}-prep-minutes`"
                name="max-prep-time"
                :value="option.value"
                v-model="maxPrepTime"
                @change="toggleMaxPrepTimeDropdown"
              />
              <label :for="`${option.value}-prep-minutes`">{{ option.label }}</label>
            </div>
          </div>
        </fieldset>

        <fieldset class="radio-dropdown">
          <legend @click="toggleMaxCookTimeDropdown">Max Cook Time</legend>

          <div class="wrapper" v-if="showMaxCookTimeDropdown">
            <div v-for="option in cookOptions" :key="option.value">
              <input
                type="radio"
                :id="`${option.value}-cook-minutes`"
                name="max-cook-time"
                :value="option.value"
                v-model="maxCookTime"
                @change="toggleMaxCookTimeDropdown"
              />
              <label :for="`${option.value}-cook-minutes`">{{ option.label }}</label>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="search-input">
        <input type="search" id="search" placeholder="Search by name or ingredient..." />
      </div>
    </div>

    <div class="recipe-cards">
      <div class="recipe-item" v-for="recipe in recipes" :key="recipe.id">
        <div class="recipe-top">
          <img :src="recipe.image.small" :alt="recipe.title" />

          <div class="recipe-info">
            <div class="description">
              <h5>{{ recipe.title }}</h5>
              <p>{{ recipe.overview }}</p>
            </div>

            <div class="details">
              <div>
                <img src="/src/assets/images/icon-servings.svg" alt="servings-icon" />
                Servings: {{ recipe.servings }}
              </div>
              <div>
                <img src="/src/assets/images/icon-prep-time.svg" alt="prep-time-icon" />
                Prep: {{ recipe.prepMinutes }} mins
              </div>
              <div>
                <img src="/src/assets/images/icon-cook-time.svg" alt="cook-time-icon" />
                Cook: {{ recipe.cookMinutes }} min
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="button centered radius-full">View Recipe</a>
      </div>
    </div>
  </section>
</template>
