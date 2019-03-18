<template>
	<div id="app">
		<Container></Container>
	</div>
</template>

<script>
import Container from './components/container'
import { mapGetters } from 'vuex'
import store from './main.js'
export default {
	name: 'app',
	components: {
		Container
	},
	data() {
		return {}
	},
	computed: {
		...mapGetters([])
	},
	methods: {
	}
};
</script>
<style lang="scss" src="./assets/scss/app">
</style>