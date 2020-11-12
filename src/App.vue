<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <header>
      <div class="prose-lg">
        <h1 class="text-green-700">🚀 My Todo App With Tailwind and Vue3 🚀</h1>
        <form class="flex" @submit.prevent="addTodo">
          <input type="text" v-model="newTodo" class="flex-grow" />
          <button
            type="submit"
            class="bg-green-700 hover:bg-green-500 text-white px-4 ml-2 rounded-md"
          >
            Add Todo
          </button>
        </form>
      </div>
    </header>
    <main>
      <div class="pendings mt-12">
        <h2 class="text-4xl text-bold text-green-500">
          Pending Todos - {{ pendingTodos.length }}
        </h2>
        <div
          v-for="t in pendingTodos"
          :key="t.id"
          @click="changeStatus(t.id, 'completed')"
          class="text-center p-3 bg-white mt-4 text-green-500 rounded shadow-lg cursor-pointer hover:bg-green-500 hover:text-white"
        >
          {{ t.todo }}
        </div>
      </div>
      <div class="completed mt-12">
        <h2 class="text-4xl text-bold text-red-500">
          Completed Todos - {{ completedTodos.length }}
        </h2>
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
