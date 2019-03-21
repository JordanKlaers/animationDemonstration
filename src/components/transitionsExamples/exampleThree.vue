<template>
	<div class="frame" id="transition-example-three">
		<span class="title">Example Three</span>
		<div class="tabs-container">
			<template v-for="(entry, index) in tabs">
				<div class="tab" :key="`tab-${entry}`">{{entry}}</div>
				<span class='image-container' :key="entry" :class="{ 'in-view': index === activeIndex }">
					<img :src="getImagePath(entry)"/>
				</span>
			</template>
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
			tabs: ['red', 'orange', 'yellow', 'limegreen', 'green', 'turquoise', 'blue', 'purple', 'pink'],
			activeIndex: 3
		}
	},
	mounted() {
	},
	methods: {
		getImagePath(color) {
			return require(`images/${color}.jpg`);
		}
	}
};
</script>
<style lang='scss'>
@import 'scss/_mixins.scss';
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
			height: 100%;
			display: flex;
			flex-direction: column;
			$colors: red, orange, yellow, limeGreen, green, turquoise, blue, purple, pink;
			@for $i from 1 through length($colors) {
				div:nth-of-type(#{$i}) {
					width: 100%;
					height: 30px;
					@include border-rounded-corners(2px, 5px);
					background-color: nth($colors, $i);
				}
			}
			.image-container {
				width: 100%;
				flex: 1;
				overflow: hidden;
				display: none;
				&.in-view {
					display: initial
				}
				img {
					width: 100%;
				}
			}
		}
	}
}

</style>
