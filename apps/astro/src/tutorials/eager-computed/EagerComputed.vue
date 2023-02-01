<script setup>
import { ref, watchEffect, shallowRef, readonly, computed } from 'vue'
import { computedEager } from '@vueuse/core'

const count = ref(1)
const isCountOverFive = computedEager(() => {
  // console.log('calculate')
  return count.value > 5
})

watchEffect(() => {
  // console.log('👀 watchEffect updates (eager computed) ', isCountOverFive.value)
  // do expensive operation using isCountOverFive (e.g. api call)
})
const msg = computed(() => {
  // console.log('🧮 compute msg (eager computed)')
  return isCountOverFive.value ? 'Goodbye' : 'Hello'
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
