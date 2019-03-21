<template>
	<div class="frame" id="transition-example-three">
		<span class="title">Example Three</span>
		<div class="tabs-container">
			<div class="tab">Tab 1</div>
			<div class="tab">Tab 2</div>
			<div class="tab">Tab 3</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'transitionExampleThree',
	components: {
	},
	data() {
		return {
		}
	},
	mounted() {
	},
	methods: {
		toggleClasses() {}
	}
};
</script>
<style lang='scss'>
$frame-dimensions: 400;
#transition-example-three {
	&.frame {
		position: relative;
		width: $frame-dimensions + px;
		height: $frame-dimensions + px;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 2px;
		box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
		background: #fff;
		color: #333;
		padding: 10px;
		.title {
			position: absolute;
			bottom: $frame-dimensions + px;
		}
		.tabs-container {
			display: flex;
			.tab {
				flex-grow: 1;
				height: 30px;
				background: linear-gradient(#a9a9a9, #ffffff);
				margin: 0 5px;
			}
		}
	}
}

</style>
