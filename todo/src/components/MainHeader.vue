<template lang="html">
  <header id="main-header">
    <h1>My Todo List</h1>
  </header>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style lang="css">
#main-header {
	text-align: center;
	height: 100px;
	background-color: #c9ae00;
	background-image: url(https://www.transparenttextures.com/patterns/noisy-net.png);
	background-position: center;
}

#main-header h1 {
	margin-top: 0;
	margin-bottom: 0;
	color: #b6c9c9;
	text-shadow: 2px 2px 4px #000000;
	font-size: 63px;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 100px;
}
</style>
