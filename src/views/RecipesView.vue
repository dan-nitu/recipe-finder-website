<script setup>
import { ref } from 'vue'

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

const toggleMaxPrepTimeDropdown = () => {
  showMaxPrepTimeDropdown.value = !showMaxPrepTimeDropdown.value
}
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
    <div class="filter-bar">
      <div class="filters">
        <fieldset class="radio-dropdown" @click="toggleMaxPrepTimeDropdown">
          <legend>Max Prep Time</legend>

          <div class="wrapper" v-if="showMaxPrepTimeDropdown">
            <div v-for="option in prepOptions" :key="option.value">
              <input
                type="radio"
                :id="`${option.value}-prep-minutes`"
                name="max-prep-time"
                :value="option.value"
                v-model="maxPrepTime"
              />
              <label :for="`${option.value}-prep-minutes`">{{ option.label }}</label>
            </div>
          </div>
        </fieldset>

        <fieldset class="radio-dropdown">
          <legend>Max Cook Time</legend>

          <div class="wrapper">
            <div v-for="option in cookOptions" :key="option.value">
              <input
                type="radio"
                :id="`${option.value}-cook-minutes`"
                name="max-cook-time"
                :value="option.value"
                v-model="maxCookTime"
              />
              <label :for="`${option.value}-cook-minutes`">{{ option.label }}</label>
            </div>
          </div>
        </fieldset>
      </div>

      <div>max prep time: {{ maxPrepTime }}</div>
      <div>max cook time: {{ maxCookTime }}</div>

      <div class="search-input">
        <input type="search" id="search" placeholder="Search by name or ingredient..." />
      </div>
    </div>
    <div class="recipe-cards">
      <div class="recipe-item">
        <div class="recipe-top">
          <!-- image -->
          <div class="recipe-info"></div>
        </div>
        <a href="#" class="button">View Recipe</a>
      </div>
    </div>
  </section>
</template>
