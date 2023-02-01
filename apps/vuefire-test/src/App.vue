<script setup lang="ts">
/*
  questions:
    - are plain firestore refs supported?
*/
import { useDatabase, useDatabaseList, useDatabaseObject } from 'vuefire'
import { countRef } from './firebase'
import { set } from 'firebase/database'
import { computed } from 'vue'
const rawCount = useDatabaseObject<{ $value: number }>(countRef) // whats the difference with useDatabase
const count = computed(() => rawCount.value?.$value ?? 0)
const increment = async () => {
  await set(countRef, count.value + 1)
}

const reset = async () => {
  await set(countRef, 0)
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
  <button @click="reset">Reset</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
