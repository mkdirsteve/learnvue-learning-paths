<script setup lang="ts">
import TodoList from './TodoList.vue'
</script>

<template>
  <TodoList v-slot="{ todos, toggleTodo, addTodo }">
    <ul>
      <li v-for="todo in todos" :key="todo.title" class="py-1">
        <input
          class="accent-green-600"
          type="checkbox"
          :value="todo.done"
          @click="toggleTodo(todo.id)"
        />
        {{ todo.title }}
      </li>
      <li class="py-1">
        <form @submit.prevent="addTodo" class="indent-[17.5px]">
          <input
            type="text"
            name="title"
            class="bg-transparent border-b-2 outline-none"
            placeholder="New Todo"
          />
        </form>
      </li>
    </ul>
  </TodoList>
</template>
