<template>
	<div class="animation-example-frame" id="keyframe-example-two">
		<span class="title">KeyFrame Example two</span>
		<div class="square" ref="one" @click="toggleAnimationOne"></div>
		<div class="square" ref="two" @click="toggleAnimationTwo"></div>
		<div class="square" ref="three" @click="toggleAnimationThree"></div>
	</div>
</template>

<script>
export default {
	name: 'keyframeExmapleTwo',
	components: {
	},
	data() {
		return {
		}
	},
	mounted() {
		// this.$refs.one.addEventListener('animationend', () => {
		// 	this.$refs.one.classList.toggle('top-square-animation')
		// })
		// this.$refs.two.addEventListener('animationend', () => {
		// 	this.$refs.two.classList.toggle('middle-square-animation')
		// })
		// this.$refs.three.addEventListener('animationend', () => {
		// 	this.$refs.three.classList.toggle('bottom-square-animation')
		// })
	},
	methods: {
		toggleAnimationOne() {
			this.$refs.one.classList.toggle('top-square-animation')
		},
		toggleAnimationTwo() {
			this.$refs.two.classList.toggle('middle-square-animation')
		},
		toggleAnimationThree() {
			this.$refs.three.classList.toggle('bottom-square-animation')
		}
	}
};
</script>
<style lang='scss'>

//overview - mixin to pass variable to keyframe animations, mixin for setting animation properties (can pass a variable for different animation names with the same animation properties)
@use 'scss/_mixins.scss' as *;
$frame-dimensions: 400;

//it does not matter where a keyframe animation is declared (if its nested or not)
//by wrapping the keyframe animationin a mixin, the mixin can be declared anywhere, allowing you to implement the animation in a place where you can pass a variable through the mixin to be used.
//Even the name of the animation could be set via a  variable
@mixin top-keyframes($move-distance) {
    @keyframes top-keyframes{
    	0% {
			left: 0px;
			background-color: black;
		}
		25% {
			left: ($move-distance * 0.5) + px;
			background-color: red;
		}
		26% {
			//if a key is added in the animation but does not exist on the element initally,the transition to that state begins at the start.
			transform: rotate(0deg);
		}
		50% {

			background-color: blue;
		}
		74% {
			transform: rotate(360deg);
			left: ($move-distance * 0.5) + px;
		}
		75% {
			left: ($move-distance * 0.5) + px;
			background-color: green;
		}
		100% {
			transform: rotate(360deg);
			left: $move-distance + px;
			background-color: pink;
		}
	}
}

@mixin middle-keyframes() {
    @keyframes middle-keyframes{
    	0% {
				// height: 70px;  omitting the height will reference the original height
		}
		20% {
			height: 20px;
			transform-origin: right center;
			transform: rotate(0deg);
		}
		80% {
			height: 20px;
			transform-origin: right center;
			transform: rotate(-180deg);
		}
		100% {
			transform-origin: right center;
			transform: rotate(-180deg);
			// height: 70px;    omitting the height will reference the original height. This is true even after the attribute has been changed in a previous keyframe.
		}
   }
}


@mixin bottom-keyframes($move-distance, $starting-top) {
    @keyframes bottom-keyframes{
		25% {
			//$move-distance used on the top or left property will position the square against the bottom or right edge of the container. Due to the calculation of the variable passed in.
			top: $move-distance + px;
			left: 0;
		}
		50% {
			top: $move-distance + px;
			left: $move-distance + px;
		}
		75% {
			//@starting-top is the distance from the top of the container for where the square starts out at
			top: $starting-top + px;
			left: $move-distance + px;
		}
		100% {
			left: 0;
		}
	}
}

@mixin animation($name) {
	animation-name: $name;
 	animation-duration: 5s;
 	animation-iteration-count: 1;
 	animation-direction: normal;
	//fill-mode forwards leaves the element in the state of the end of the animation, for any properties changed. (as long as the class that is added to the element containing this mixin stays on the element)
 	animation-fill-mode: forwards;
	animation-timing-function: linear;
	// animation-timing-function: cubic-bezier(.13,.92,.75,1.89); // the timing function applies each individual keyframe
 	animation-delay: 0s;
}

#keyframe-example-two {
	.square {
		$square-dim: 70;
		$spacer: 10;
		position: absolute;
		background-color: black;
		height: $square-dim + px;
		width: $square-dim + px;
		margin: $spacer + px;
		left: 0px;
		//small loop that sets the top position of the three squares so that they do not overlap
		@for $i from 0 through 2 {
			$j: $i + 1;
			&:nth-of-type(#{$j}) {
				top: ($square-dim * $i) + ($spacer * $i) + px;
			}
		}
		//saving the value for how far the square will travel horizontally in the first and thrid animations
		$left-travel-distance: ($frame-dimensions - $square-dim - ($spacer * 2));
		//saving the  distance from top for the third square
		$bottom-square-starting-top: ($square-dim * 2) + ($spacer * 2);

		//calls the keyframe mixins in this way so that a variable can be passed to be used within the animation
		//the mixins and the names of the aniamtions match for clarity
		@include top-keyframes($left-travel-distance);
		@include middle-keyframes();
		@include bottom-keyframes($left-travel-distance, $bottom-square-starting-top);

		&.top-square-animation {
			//uses a mixin to define the base animation properties while passing in the name of what keyframe animation to use
			@include animation(top-keyframes);
		}
		&.middle-square-animation {
			@include animation(middle-keyframes);
		}
		&.bottom-square-animation {
			@include animation(bottom-keyframes);
		}
	}
}




</style>
