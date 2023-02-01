<script setup>
import EagerComputed from './EagerComputed.vue'
import NonEagerComputed from './NonEagerComputed.vue'
</script>

<template>
  <div class="grid grid-cols-2">
    <!-- <div class="col-span-1">
      <h2 class="text-2xl mb-4 font-bold">Eager</h2>
      <EagerComputed />
    </div> -->
    <div class="col-span-2">
      <!-- <h2 class="text-2xl mb-4 font-bold">Non Eager</h2> -->
      <NonEagerComputed />
    </div>
  </div>
</template>
