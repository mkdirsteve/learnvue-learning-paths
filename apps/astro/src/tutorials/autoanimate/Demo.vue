<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div v-auto-animate="{ duration: 200 }" class="p-8 rounded-lg bg-neutral-900">
    <h2 @click="isOpen = !isOpen" class="text-xl font-bold">
      Why you should subscribe
    </h2>
    <p v-if="isOpen" class="py-8">I'm close to 20k so please 🙏</p>
  </div>
</template>
