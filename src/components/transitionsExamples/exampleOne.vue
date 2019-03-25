<template>
	<div class="animation-example-frame" id="transition-example-one">
		<span class="title">Example One</span>
		<div class="square" ref="slide" @click="toggleSlideClass"></div>
		<div class="square" ref="multipleProperties" @click="toggleMultiplePropertiesClass"></div>
	</div>
</template>

<script>
export default {
	name: 'transitionExampleOne',
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
@import 'scss/variables';
#transition-example-one {
	.square {
		// Adding the trasition property on the classes shared by the two elements will apply the same animation property to  all three blocks.
		transition-duration: 0.5s;
		transition-property: all;
		transition-timing-function: linear;
		&:last-of-type {
			top: $square-dim + $spacer + px;
		}
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
</style>
