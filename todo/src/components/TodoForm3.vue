<template lang="html">
  <div class="row" id="todo-form">
    <div class="col-lg-6 col-lg-offset-1">
      <form class="form-horizontal" role="form"  v-on:submit.prevent="submitTask">
        <div>
          <legend>Add Todo Item</legend>
        </div>
        <div class="form-group">
          <label for="input-id" class="col-lg-2">Task</label>
          <input type="text" class="form-control" required="required" v-model="newTodo.task">
        </div>
        <div class="form-group">
          <label for="input-id" class="col-lg-2">Priority</label>
          <select name="" class="form-control" required="required" v-model="newTodo.priority">
            <option value="" style="display: none;">-- Select --</option>
            <option value="a_high">A high priority item</option>
            <option value="b_medium">A medium priority item</option>
            <option value="c_low">A low priority item</option>
          </select>
        </div>
        <div class="form-group">
          <label for="input-id" class="col-lg-2">Type</label>
          <select name="" class="form-control" required="required" v-model="newTodo.type">
            <option value="" style="display: none;">-- Select --</option>
            <option value=1>Home</option>
            <option value=2>Work</option>
            <option value=3>Personal</option>
            <option value=4>School</option>
        </div>
        <div class="col-lg-6">
          <button class="btn btn-primary" id="submit_Button">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-form',
  data() {
    return {
      todos: [],
      newTodo: {
        task: '',
        priority: '',
        type: '',
        complete: 'false'
      }
    }
  },
  methods: {
    submitTask: function(newTodo) {
      this.todos.push(this.newTodo)
    }
  }
}
</script>

<style lang="css">
#todo-form {
	margin-bottom: 2em;
}

form {
	padding-top: 1em;
}

label {
	font-size: 17px;
	font-weight: 500;
	line-height: 15px;
}
</style>
