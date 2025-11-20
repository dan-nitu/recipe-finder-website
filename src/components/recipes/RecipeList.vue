<script setup>
import { ref, computed } from 'vue'
import { debounce } from '@/utils/debounce'
import { useRecipes } from '@/composables/useRecipes'

import RadioDropDown from './RadioDropDown.vue'
import SearchInput from './SearchInput.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import NoResults from './NoResults.vue'

const { recipesData } = useRecipes()

const maxPrepTime = ref(null)
const maxCookTime = ref(null)

const filtersContainer = ref(null)

const prepOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: 'Clear', value: null },
]
const cookOptions = [
  { label: '0 minutes', value: 0 },
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: '15 minutes', value: 15 },
  { label: '20 minutes', value: 20 },
  { label: 'Clear', value: null },
]

const openDropdown = ref({})

const searchQuery = ref('')

const normalize = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .trim()
}

const filteredRecipes = computed(() => {
  return recipesData.value.filter((recipe) => {
    const prepFilter = maxPrepTime.value === null || recipe.prepMinutes <= Number(maxPrepTime.value)
    const cookFilter = maxCookTime.value === null || recipe.cookMinutes <= Number(maxCookTime.value)

    const query = normalize(searchQuery.value)
    const searchFilter =
      query === '' ||
      normalize(recipe.title).includes(query) ||
      recipe.ingredients.some((ingredient) => normalize(ingredient).includes(query))

    return prepFilter && cookFilter && searchFilter
  })
})

const updateSearch = debounce((value) => {
  searchQuery.value = value
}, 300)
</script>

<template>
  <section class="recipe-list">
    <div class="filter-bar">
      <div class="filters">
        <RadioDropDown
          dropdownLabel="Max Prep Time"
          :options="prepOptions"
          name="prep"
          v-model="maxPrepTime"
          :openDropdown="openDropdown"
        />
        <RadioDropDown
          dropdownLabel="Max Cook Time"
          :options="cookOptions"
          name="cook"
          v-model="maxCookTime"
          :openDropdown="openDropdown"
        />
      </div>
      <SearchInput :modelValue="searchQuery" @update:modelValue="updateSearch" />
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
