<template>
  <div id="app">
    <div class="wrapper">
      <main-header></main-header>
      <div class="container">
        <todo-form></todo-form>
        <br>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-2 col-md-offset-2">
                <a href="" class="btn btn-primary btn-sm" ng-click="vm.sortButton('priority')">Order by highest priority</a>
              </div>
              <div class="col-md-2 col-md-offset-1">
                <a href="" class="btn btn-primary btn-sm" ng-click="vm.sortButton('priority')">Order by lowest priority</a>
              </div>
              <div class="col-md-2 col-md-offset-1">
                <a href="" class="btn btn-primary btn-sm" ng-click="vm.sortButton('task')">Order
                Alphabetically</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
import TodoForm from './components/TodoForm'

export default {
  name: 'app',
  components: {
    MainHeader,
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: 'Architects Daughter';
  background-color: #0f0802;
  background-image: url(https://www.transparenttextures.com/patterns/leather.png);
}

.wrapper {
	max-width: 80%;
	margin: 0 10%;
	background-color: #c9c920;
	background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
}

.container {
	margin: 0 auto -20em;
	max-width: 100%
}
</style>
