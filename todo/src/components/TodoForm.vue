<template lang="html">
	<div class="row" id="todo-form">
		<div class="col-lg-6 col-lg-offset-1">
			<form class="form-horizontal" role="form" v-on:submit.prevent="addTask">
				<div>
				  <legend>Add Todo Item</legend>
				</div>
				<div class="form-group">
					<task></task>
				</div>
				<div class="form-group">
					<task-priority></task-priority>
				</div>
				<div class="form-group">
					<task-type></task-type>
				</div>
				<div class="col-lg-6">
				  <button type="submit" class="btn btn-primary" id="submit_Button">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {
	mapActions
} from 'vuex'

import Task from './Task'
import TaskPriority from './TaskPriority'
import TaskType from './TaskType'


export default {
	name: 'todo-form',
	components: {
		Task,
		TaskPriority,
		TaskType
	},
	methods: {
		addTask($event) {
			this.$store.commit('addTask', $event.target.value)
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
