<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <header>
      <div class="prose-lg">
        <h1 class="">🚀 My Todo App With Tailwind and Vue3 🚀</h1>
        <form class="flex" @submit.prevent="addTodo">
          <input type="text" v-model="newTodo" class="flex-grow" />
          <button
            type="submit"
            class="bg-green-500 text-white px-4 ml-2 rounded-md"
          >
            Add Todo
          </button>
        </form>
      </div>
    </header>
    <main class="prose">
      <div class="pendings">
        <h2>Pending Todos - {{ pendingTodos.length }}</h2>
        <div
          v-for="t in pendingTodos"
          :key="t.id"
          @click="changeStatus(t.id, 'completed')"
          class="text-center p-3 bg-white mt-4 rounded shadow-lg cursor-pointer hover:bg-green-500"
        >
          {{ t.todo }}
        </div>
      </div>
      <div class="completed">
        <h2>Completed Todos - {{ completedTodos.length }}</h2>
        <div
          v-for="t in completedTodos"
          :key="t.id"
          @click="changeStatus(t.id, 'pending')"
          class="text-center p-3 bg-white line-through text-red-500 mt-4 rounded shadow-lg cursor-pointer hover:bg-red-500 hover:text-white"
        >
          {{ t.todo }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useTodos } from './assets/todos'

export default {
  name: 'App',
  setup() {
    const {
      newTodo,
      todos,
      pendingTodos,
      completedTodos,
      addTodo,
      changeStatus,
    } = useTodos()
    return {
      newTodo,
      todos,
      pendingTodos,
      completedTodos,
      addTodo,
      changeStatus,
    }
  },
}
</script>
