<template>
	<div class="animation-example-frame" id="transition-example-two" @click="toggleClasses">
		<span class="title">Transition Example Two</span>
		<div class="square" ref="slide"></div>
		<div class="square" ref="grow"></div>
		<div class="square" ref="rotate"></div>

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
		toggleClasses() {
			const slide = this.$refs.slide;
			const grow = this.$refs.grow;
			const rotate = this.$refs.rotate;
			this.$refs.slide.addEventListener('transitionend', () => {
				//call back when the css transition change completes for the element the listener is attached to
			})
			if (slide && grow && rotate && slide.classList.contains('slide')) {
				slide.classList.remove('slide');
				grow.classList.remove('grow');
				rotate.classList.remove('rotate');
			} else {
				slide.classList.add('slide');
				grow.classList.add('grow');
				rotate.classList.add('rotate');
			}
		}
	}
};
</script>
<style lang='scss'>

//overview  - loop for positioning / individual transition values
@use 'scss/variables' as *;
#transition-example-two {
	.square {
		// Adding the trasition property on the classes shared by the tree elements will apply the same animation property to  all three blocks.
		transition: all 3s ease;
		@for $i from 0 through 2 {
			// J variable used by n-th of type (which is not 0 indexed), wich reference the squares because the squares are sibling elements
			//Still need the i variable which is 0 indexed for calculations
			$j: $i + 1;
			&:nth-of-type(#{$j}) {
				// this positions the squares from the top the  the parent container so that they do not overlap vertically
				top: ($square-dim * $i) + ($spacer * $i) + px;
			}
		}
		&.slide {
			//adding the  transition property within each individual classs allowsfor  unique changes in the animations execution
			transition: all 3s ease;
			//this calculation moves the div to the left equal to the width of the parent container. Subtracting the squares width and the left and right padding, allows for the square to move from the left side aligning with the left of parent to having the right side align with the right of  the parent
			left: ($animation-frame-dimension - $square-dim - ($spacer * 2)) + px;
		}
		&.grow {
			transition: all 10s ease;
			//increaes the squares size by 2
			height: ($square-dim * 2) + px;
			width: ($square-dim * 2) + px;
		}
		&.rotate {
			transition: all 0.5s ease;
			//Move the div down by an the height of an aditional square because grow doubbles  in size.
			top: ($square-dim * 2) + $square-dim + ($spacer * 2) + px;
			transform: rotate(360deg);
		}
	}
}
</style>
