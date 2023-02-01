<script setup>
import { ref, computed } from 'vue'
const todos = ref([
  { id: 0, title: 'Create a new video', done: false },
  { id: 1, title: 'Finish Work', done: false },
  { id: 2, title: 'Watch YouTube', done: false }
])

const toggleTodo = (id) => {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

const addTodo = (evt) => {
  const data = new FormData(evt.target)

  evt.target.reset()
  todos.value.push({
    id: todos.value.length,
    title: data.get('title'),
    done: false
  })
}
</script>

<template>
  <slot :todos="todos" :toggleTodo="toggleTodo" :addTodo="addTodo" />
</template>
