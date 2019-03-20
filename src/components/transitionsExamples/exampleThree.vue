<template>
	<div class="frame" id="transition-example-three">
		<span class="title">Example Three</span>
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
		.title {
			position: absolute;
			bottom: $frame-dimensions + px;
		}
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
				// transition: all 3s ease;
				//this calculation moves the div to the left equal to the width of the parent container. Subtracting the squares width and the left and right padding, allows for the square to move from the left side aligning with the left of parent to having the right side align with the right of  the parent
				left: ($frame-dimensions - $square-dim - ($spacer * 2)) + px;
			}
			&.grow { 
				// transition: all 10s ease;
				//increaes the squares size by 2
				height: ($square-dim * 2) + px;
				width: ($square-dim * 2) + px;
			}
			&.rotate {
				// transition: all 0.5s ease;
				//Move the div down by an the height of an aditional square because grow doubbles  in size.
				top: ($square-dim * 2) + $square-dim + ($spacer * 2) + px;
				transform: rotate(360deg);
			}
		}
	}
}

</style>
