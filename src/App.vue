<script setup>
import Container from './components/container.vue';
</script>

<template>
  <div id="root">
		<Container></Container>
	</div>
</template>

<style>
@import 'scss/app.scss';
* {
  scrollbar-width: none; /* Firefox */
}

*::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
