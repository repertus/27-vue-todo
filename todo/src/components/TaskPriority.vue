<template lang="html">
	<div class="task-priority">
		<label for="input-id" class="col-lg-2">Priority</label>
		<select name="" class="form-control" required="required" v-model="priority" v-on:change="setPriority">
			<option value="" style="display: none;">-- Select --</option>
			<option value="a_high">A high priority item</option>
			<option value="b_medium">A medium priority item</option>
			<option value="c_low">A low priority item</option>
		</select>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: 'task-priority',
		computed: {
			...mapState ({
				priority: state => state.newTodo.priority
			})
		},
		methods: {
			setPriority($event) {
			  this.$store.commit('setPriority', $event.target.value)
			}
		}
	}
</script>

<style lang="css">
</style>
