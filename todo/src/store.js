export default {
  props: 'newTodo',
  state: {
    todos: [],
    newTodo: {
      task: '',
      priority: '',
      type: '',
      complete: 'false'
    }
  },
  mutations: {
     setTask (state, value) {
          state.newTodo.task = value
     },
     setPriority (state, value) {
          state.newTodo.priority = value
     },
     setType (state, value) {
       state.newTodo.type = value
     },
     addTask(state, newTodo) {
       state.todos.push(newTodo)
       console.log(newTodo)
     }
  },
  getters: {
       task (state) {
            return state.newTodo.task
       },
       priority (state) {
            return state.newTodo.priority
       },
       type (state) {
            return state.newTodo.type
       }
  }
  // ,
  // actions: {
  //   submitTask(state) {
  //     debugger
  //     console.log('yes')
  //     state.dispatch('addTask')
  //   }
  // }
}
