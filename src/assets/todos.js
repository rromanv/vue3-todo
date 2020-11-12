import { ref, reactive, computed } from 'vue'

export function useTodos() {
  const newTodo = ref('')
  const todos = reactive([])

  const pendingTodos = computed(() =>
    todos.filter((t) => t.status == 'pending')
  )

  const completedTodos = computed(() =>
    todos.filter((t) => t.status == 'completed')
  )

  const addTodo = () => {
    if (newTodo.value.length > 1) {
      todos.push({
        id: todos.length + 1,
        todo: newTodo.value,
        status: 'pending',
      })
      newTodo.value = ''
    }
  }

  const changeStatus = (id, status) => {
    todos.map((t) => {
      if (t.id == id) t.status = status
    })
  }
  return {
    newTodo,
    todos,
    pendingTodos,
    completedTodos,
    addTodo,
    changeStatus,
  }
}
