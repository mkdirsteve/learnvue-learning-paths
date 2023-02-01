<script setup>
import { ref, computed, watchEffect } from 'vue'
import { computedEager } from '@vueuse/core'
const count = ref(1)
const isCountOverFive = computedEager(() => {
  console.log('evaluate isCountOverFive')
  return count.value > 5
})

const msg = computed(() => {
  console.log('evaluate msg')
  return isCountOverFive.value ? 'Goodbye' : 'Hello'
})

watchEffect(() => {
  console.log('watchEffect running', isCountOverFive.value)
})
</script>

<template>
  <div>
    <button
      @click="count++"
      class="bg-green text-white px-4 py-2 rounded hover:bg-green-400 mb-4"
    >
      Increment
    </button>
    <p>count: {{ count }}</p>
    <p>msg: {{ msg }}</p>
  </div>
</template>
