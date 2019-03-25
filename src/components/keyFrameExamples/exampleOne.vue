<template>
	<div class="animation-example-frame" id="keyframe-example-one">
		<span class="title">Example One</span>
		<button @click="toggleAnimationOne">one</button>
		<button @click="toggleAnimationTwo">two</button>
		<div class="square" ref="one"></div>
	</div>
</template>

<script>
export default {
	name: 'keyframeExampleOne',
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
@import 'scss/_mixins.scss';
@import 'scss/variables.scss';

@keyframes exampleAnimationOne{
	0% {
		transform-origin: bottom left;
	}
	25% {
		transform-origin: bottom left;
		transform: rotate(90deg);
		top: 0;
		left: 0;	
	}
	26% {
		//althought the square seems to have  moved down, its  position is still uncahgned. Its position needs to be updated as well as the origin of  rotation to produce the rolling down the edge effect.
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
		//these values match the starting values already defined on the element. If they were excluded the animation would reference the preexisting values.
		width:  70px;
		height: 70px;
	}
	25% {
		//from 25% to 50% the height goes  from 70 to 380. If height was omitted at 25% than the height would go from 70 to 380 from 0% to 50%;
		width: 380px;
		height: 70px;
	}
	50% {
		height: 380px;
		width: 380px;
		//similar  to height, we want the changes inscale to start from 50%.
		transform: scale(1);
	}
	75% {
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
	button {
		$button-width: 70;
		$spacer: 5;
		position: absolute;
		background-color: white;
		font-size: 16px;
		text-transform: uppercase;
		padding: $spacer + px;
		letter-spacing: 2.5px;
		color: #000;
		background-color: #fff;
		border: none;
		border-radius: 5px;
		margin: $spacer + px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		transition: all 0.3s ease 0s;
		cursor: pointer;
		outline: none;
		width: $button-width + px;
		&:first-of-type {
			bottom: $animation-frame-dimension + px;
			left: $animation-frame-dimension - $button-width * 2 - $spacer * 2 + px;
		}
		&:last-of-type {
			bottom: $animation-frame-dimension + px;
			left: $animation-frame-dimension - $button-width  - $spacer + px;
		}
		&:hover{
			background-color: #2EE59D;
			box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
			color: #fff;
			transform: translateY(-3px);
		}
	}
	.square {
		animation-duration: 5s;
		animation-iteration-count: 1;
		animation-direction: normal;
		//fill-mode forwards leaves the element in the state of the end of the animation, for any properties changed. (as long as the class that is added to the element containing this mixin stays on the element)
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		// animation-timing-function: cubic-bezier(.13,.92,.75,1.89); // the timing function applies each individual keyframe
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
