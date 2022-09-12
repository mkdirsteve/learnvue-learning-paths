<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)

const rotation = computed(() => {
  const MAX_ROTATION = 6

  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2) // handles x-axis

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2) // handles y-axis

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>
<template>
  <div class="w-full p-8 bg-gray-800 rounded shadow-2xl card" ref="target">
    <h1 class="mb-2 text-2xl font-bold">Buzzwords 🥴</h1>
    <section class="flex items-center">
      <img
        src="https://learnvue.co/img/matt-maribojoc.png"
        class="w-8 h-8 mr-4 rounded"
      />
      <h2 class="font-2xl">@mattmaribojoc</h2>
    </section>
    <p class="mt-4">
      Disrupt inspire and think tank, social entrepreneur but preliminary
      thinking think tank compelling. Inspiring, invest synergy capacity
      building, white paper;
    </p>
  </div>
</template>

<style scoped>
.card {
  transform: v-bind(rotation);
  transition: transform 0.25s ease-out;
}
</style>
