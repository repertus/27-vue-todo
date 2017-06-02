<template lang="html">
	<div class="task">
		<label for="input-id" class="col-lg-2">Task</label>
		<input type="text" class="form-control" required="required" v-model="task" v-on:keyup="setTask">
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
	 	name: 'task',
		computed: {
			...mapState ({
				task: state => state.newTodo.task
			})
		},
		methods: {
			setTask($event) {
			  this.$store.commit('setTask', $event.target.value)
			}
		}
	}
</script>

<style lang="css">
</style>
