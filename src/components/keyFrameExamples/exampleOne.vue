<template>
	<div class="animation-example-frame" id="keyframe-example-one">
		<span class="title">KeyFrame Example One</span>
		<button @click="toggleAnimationOne" class="top-right-aligned">one</button>
		<button @click="toggleAnimationTwo" class="top-right-aligned">two</button>
		<div class="square" ref="one"></div>
	</div>
</template>

<script>
export default {
	name: 'keyframeExampleOne',
	data() {
		return {
		}
	},
	methods: {
		toggleAnimationOne() {
			this.$refs.one.classList.remove('animation-class-two')
			this.$refs.one.classList.toggle('animation-class-one')
		},
		toggleAnimationTwo() {
			this.$refs.one.classList.remove('animation-class-one')
			this.$refs.one.classList.toggle('animation-class-two')
		}
	}
};
</script>
<style lang='scss'>

//overview - div rolling down side of screen / div dimensions changing
@import 'scss/_mixins.scss';
@import 'scss/variables.scss';

@keyframes exampleAnimationOne{
	0% {
		//changes the origin so that the div will begin rotating around the bottom left corner
		transform-origin: bottom left;
	}
	25% {
		transform-origin: bottom left;
		//rotat 90 deg with this updated origin causes the div to appear to "roll" down the side of the screen
		transform: rotate(90deg);
		top: 0;
		left: 0;	
	}
	26% {
		//althought the square seems to have  moved down, its relative position is still uncahgned. 
		//Its position needs to be updated as well as the origin of  rotation to further produce the rolling down the edge effect.
		left: -70px;
		top: 70px;
		transform-origin: bottom right;
		transform: rotate(90deg);
	}
	50% {
		left: -70px;
		top: 70px;
		transform-origin: bottom right;
		transform: rotate(180deg);
	}
	51% {
		left: -70px;
		top: 210px;
		transform-origin: top right;
		transform: rotate(180deg);
	}
	75% {
		left: -70px;
		top: 210px;
		transform-origin: top right;
		transform: rotate(270deg);
	}
	76% {
		left: 0px;
		top: 280px;
		transform-origin: top left;
		transform: rotate(270deg);
	}
	100% {
		left: 0px;
		top: 280px;
		transform-origin: top left;
		transform: rotate(360deg);
	}
}

@keyframes exampleAnimationTwo{
	0% {
		//starting width and height
		//these values match the starting values already defined on the element.
		//If these values were excluded the animation would reference the preexisting values. (which happen to match in this case)
		width:  70px;
		height: 70px;
		//the declaration os a timing function within a keyframe is applied untill the next keyframe is met
		//so the change from width 70px to width 380px at 25% would have this cubic bezier applied, but from 25% and beyond the animation timing would be linear
		animation-timing-function: cubic-bezier(.13,.92,.75,1.89);
	}
	25% {
		//increasing width to 100%
		//from 25% to 50% the height goes  from 70 to 380. If height was omitted at 25% than the height would go from 70 to 380 from 0% to 50%;
		width: 380px;
		height: 70px;
	}
	50% {
		height: 380px;
		width: 380px;
		//beginning at 50% through the animation, with a starting value of 1, the scale will change
		transform: scale(1);
	}
	75% {
		//shrink the square partially
		transform: scale(0.8);
	}
	100% {
		//The values on the last frame persist when using "animation-fill-mode: forwards;" so we need to add the transformed width and heightjust to make sure they stay.
		height: 380px;
		width: 380px;
		transform: scale(1);
	}
}

#keyframe-example-one {
	.square {
		animation-duration: 5s;
		animation-iteration-count: 1;
		animation-direction: normal;
		//fill-mode forwards leaves the element in the state of the end of the animation, for any properties changed. (as long as the class that is added to the element containing this mixin stays on the element)
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		// the timing function applies each individual keyframe
		// animation-timing-function: cubic-bezier(.13,.92,.75,1.89); 
		animation-delay: 0s;
		&.animation-class-one {
			//name must match that of the keyframe animation name
			animation-name: exampleAnimationOne;
		}
		&.animation-class-two {
			//name must match that of the keyframe animation name
			animation-name: exampleAnimationTwo;
		}
	}
}


</style>
