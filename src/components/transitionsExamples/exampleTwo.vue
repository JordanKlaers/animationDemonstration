<template>
	<div class="frame" id="transition-example-two">
		<div class="square" ref="slide" @click="toggleSlideClass"></div>
		<div class="square" ref="multipleProperties" @click="toggleMultiplePropertiesClass"></div>
		<div> example two</div>
	</div>
</template>

<script>
export default {
	name: 'transitionExampleTwo',
	components: {
	},
	data() {
		return {
		}
	},
	methods: {
		toggleSlideClass() {
			const slide = this.$refs.slide;
			if (slide && slide.classList.contains('slide')) {
				slide.classList.remove('slide');
			} else {
				slide.classList.add('slide');
			}
		},
		toggleMultiplePropertiesClass() {
			const multipleProperties = this.$refs.multipleProperties;
			if (multipleProperties && multipleProperties.classList.contains('multiple-properties')) {
				multipleProperties.classList.remove('multiple-properties');
			} else {
				multipleProperties.classList.add('multiple-properties');
			}
		}
	}
};
</script>
<style lang='scss'>
$frame-dimensions: 400;
#transition-example-two {
	.frame {
		position: relative;
		width: $frame-dimensions + px;
		height: $frame-dimensions + px;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 2px;
		box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
		background: #fff;
		color: #333;

		.square {
			$square-dim: 70;
			$spacer: 10;
			position: absolute;
			background-color: black;
			height: $square-dim + px;
			width: $square-dim + px;
			margin: $spacer + px;
			left: 0px;
			// Adding the trasition property on the classes shared by the tree elements will apply the same animation property to  all three blocks.
			transition-duration: 5s;
			transition-property: all;
			transition-timing-function: linear;
			&.slide {
				left: 100px;
			}
			&.multiple-properties {
				height: ($square-dim * 2) + px;
				width: ($square-dim * 2) + px;
				transform: rotate(180deg);
				background-color: green;
			}
		}
	}

}

</style>
