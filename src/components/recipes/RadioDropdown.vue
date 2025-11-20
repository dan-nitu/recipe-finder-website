<script setup>
import { defineProps, computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  dropdownLabel: String,
  name: String,
  options: Array,
  modelValue: [Number, null],
  openDropdown: Object, // ref from parent to know which dropdown is open
})

const emit = defineEmits(['update:modelValue'])
const container = ref(null)

// computed - check if the current dropdown is open
const isOpen = computed(() => props.openDropdown.value === props.dropdownLabel)

// toggle dropdown
const toggleDropdown = () => {
  if (props.openDropdown.value === props.dropdownLabel) {
    props.openDropdown.value = '' // close if already open
  } else {
    props.openDropdown.value = props.dropdownLabel // open this one
  }
}

// update parent and close dropdown
const selectValue = (value) => {
  emit('update:modelValue', value)
  props.openDropdown.value = ''
}

// close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (isOpen.value && container.value && !container.value.contains(event.target)) {
    props.openDropdown.value = ''
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <fieldset class="radio-dropdown" ref="container">
    <legend @click="toggleDropdown">{{ dropdownLabel }}</legend>

    <div class="wrapper" v-if="isOpen">
      <div v-for="option in options" :key="option.value">
        <input
          type="radio"
          :id="`${option.value}-${name}-minutes`"
          :name="`max-${name}-time`"
          :value="option.value"
          :checked="modelValue == option.value"
          @change="() => selectValue(option.value)"
        />
        <label :for="`${option.value}-${name}-minutes`">{{ option.label }}</label>
      </div>
    </div>
  </fieldset>
</template>
