<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import data from '../../../data.json'

import SearchInput from './SearchInput.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import NoResults from './NoResults.vue'

const recipes = ref(data)

const maxPrepTime = ref('')
const maxCookTime = ref('')

const showMaxPrepTimeDropdown = ref(false)
const showMaxCookTimeDropdown = ref(false)

const filtersContainer = ref(null)

const prepOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: 'Clear', value: '' },
]
const cookOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: '15 minutes', value: 15 },
  { label: '20 minutes', value: 20 },
  { label: 'Clear', value: '' },
]

const searchQuery = ref('')

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

const normalize = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .trim()
}

const filteredRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    const prepFilter = maxPrepTime.value === '' || recipe.prepMinutes <= Number(maxPrepTime.value)
    const cookFilter = maxCookTime.value === '' || recipe.cookMinutes <= Number(maxCookTime.value)

    const query = normalize(searchQuery.value)
    const searchFilter =
      query === '' ||
      normalize(recipe.title).includes(query) ||
      recipe.ingredients.some((ingredient) => normalize(ingredient).includes(query))

    return prepFilter && cookFilter && searchFilter
  })
})
</script>

<template>
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

      <SearchInput v-model="searchQuery" />
    </div>

    <div class="recipe-cards" v-if="filteredRecipes.length">
      <RecipeCard
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :imgUrlSmall="recipe.image.small"
        :imgUrlLarge="recipe.image.large"
        :imgAlt="recipe.title"
        :title="recipe.title"
        :text="recipe.overview"
        :servings="recipe.servings"
        :prepMinutes="recipe.prepMinutes"
        :cookMinutes="recipe.cookMinutes"
        :url="'/recipes/' + recipe.slug"
      />
    </div>

    <NoResults
      v-else
      :maxPrepTime="maxPrepTime"
      :maxCookTime="maxCookTime"
      :searchQuery="searchQuery"
    />
  </section>
</template>
