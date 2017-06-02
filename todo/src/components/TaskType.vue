<template lang="html">
  <div class="task-type">
    <label for="input-id" class="col-lg-2">Type</label>
    <select name="" class="form-control" required="required" v-model="type" v-on:change="setType">
      <option value="" style="display: none;">-- Select --</option>
      <option value=1>Home</option>
      <option value=2>Work</option>
      <option value=3>Personal</option>
      <option value=4>School</option>
    </select>
  </div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: 'task-type',
		computed: {
			...mapState ({
				type: state => state.newTodo.type
			})
		},
		methods: {
			setType($event) {
			  this.$store.commit('setType', $event.target.value)
			}
		}
	}
</script>

<style lang="css">
</style>
