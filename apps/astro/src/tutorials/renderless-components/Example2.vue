<script setup lang="ts">
import TodoList from './TodoList.vue'
import autoAnimate from '@formkit/auto-animate'
import { onMounted, ref } from 'vue'

const list = ref()

onMounted(() => {
  autoAnimate(list.value)
})
</script>

<template>
  <TodoList v-slot="{ todos, toggleTodo, addTodo }">
    <ul class="grid grid-cols-12 gap-8 mt-16" ref="list">
      <li
        v-for="todo in todos"
        :key="todo.title"
        class="col-span-4 p-8 text-center border-2 rounded cursor-pointer"
        @click="toggleTodo(todo.id)"
        :class="{
          'border-green text-green': todo.done
        }"
      >
        {{ todo.title }}
      </li>
      <form
        @submit.prevent="addTodo"
        class="col-span-4 p-8 border-2 border-dashed rounded"
      >
        <input
          type="text"
          name="title"
          class="bg-transparent border-b-2 outline-none"
          placeholder="New Todo"
        />
      </form>
    </ul>
  </TodoList>
</template>
