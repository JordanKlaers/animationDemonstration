<template>
	<div id='container'>
		<template v-for="(component, name, index) in components">
			<transition :key="component.name" :name="fadeDirection" v-on:after-leave="setAnimationCompleted" v-on:after-enter="setAnimationCompleted">
				<component :key="component.name" :is="component" v-if="componentDisplay[index]"></component>
			</transition>
		</template>
		<div id="examples-nav-list">
			<div v-for="(component, name, index) in components"
				:key="index"
				:class="{ active: componentDisplay[index] }"
				v-on:click="updateActiveIndex(index)">
				<component :key="component.name" :is="component" v-if="index !== 89"></component>
			</div>
		</div>
	</div>
</template>

<script>
import TransitionOne from 'transitions/exampleOne.vue';
import TransitionTwo from 'transitions/exampleTwo.vue';
import TransitionThree from 'transitions/exampleThree.vue';
import KeyFrameOne from 'keyFrame/exampleOne.vue';
import KeyFrameTwo from 'keyFrame/exampleTwo.vue';
import KeyFrameThree from 'keyFrame/exampleThree.vue';
import AnimationFrameOne from 'animationFrame/frameExampleOne.vue';
import AnimationFrameTwo from 'animationFrame/frameExampleTwo.vue';
import AnimationFrameThree from 'animationFrame/frameExampleThree.vue';

export default {
	name: 'container',
	components: {
		TransitionOne,
		TransitionTwo,
		TransitionThree,
		KeyFrameOne,
		KeyFrameTwo,
		KeyFrameThree,
		AnimationFrameOne,
		AnimationFrameTwo,
		AnimationFrameThree
	},
	props: {
		value: {
			type: String,
			default: 'default value'
		}
	},
	data() {
		return {
			activeIndex: 0,
			nextIndex: null,
			fadeDirection: 'up',
			isActivlyAnimating: false,
			componentDisplay: []
		}
	},
	created() {
		let displayArray = []
		//on load, loop through the imported comopnents and for each, add true for the first and false for the rest, into the component display array used for rendering the components
		this.$_.forEach(Object.keys(this.components), (value, index) => {
				if (index === 0) displayArray.push(true)
				else displayArray.push(false)
			});
		this.componentDisplay = displayArray
	},
	computed: {
		components() {
			//looks at the imported components for this vue file and return the array of components
			const numberOfComponents = this.$vnode && this.$vnode.componentOptions && this.$vnode.componentOptions.Ctor && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options.components && this.$vnode.componentOptions.Ctor.options.components
			const components = Object.assign({}, numberOfComponents)
			delete components.container
			return components
		},
		numberOfComponents() {
			//returns the number of components current used by this vue file
			const numberOfComponents = Object.keys(this.components).length
			return numberOfComponents
		}
	},
	mounted() {
		window.addEventListener('wheel', this.handleScroll)
	},
	methods: {
		handleScroll(event) {
			//the window height + the distance scrolled, should be equal to the heigh of the total content
			//this value allows you to scroll down the page THEN scroll down for the next component
			const isScrolledToBottom = Math.abs((window.innerHeight + window.scrollY) - document.body.scrollHeight) < 3
			//detect the scroll direction on the mouse for which way the components will fade in/out and which component to load next
			this.fadeDirection = event.deltaY < 0 ? 'up' : 'down'
			//set all values in the display array to null so that they will not be rendered, triggering the animation through the vue transition element, that will use the up or down animation based on the scroll event
			this.$nextTick(() => {
				if ((this.activeIndex < this.numberOfComponents - 1 && this.fadeDirection === 'down' && isScrolledToBottom) || (this.fadeDirection === 'up' && this.activeIndex > 0 && window.scrollY === 0)) {
					this.componentDisplay = this.componentDisplay.map(() => false)
					this.shouldLoadNextModule = true
				}
			})
		},
		updateActiveIndex(index) {
			if (this.activeIndex !== index) {
				//saves the index of the licked nav tile to used by the leave animation callback so that when the current modules finishes leaving,
				//the component display array can be updated referencing this next index for which module to update via the componentDisplay array
				this.nextIndex = index
				//sets the fade direction based on if the nav tile clicked had an index less or greater than the current index
				this.fadeDirection = index < this.activeIndex ? 'up' : 'down'
				//set all values in the display array to null so that they will not be rendered, triggering the animation through the vue transition element, that will use the up or down animation based on the fadeDirection
				this.$nextTick(() => {
					if ((this.activeIndex < this.numberOfComponents - 1 && this.fadeDirection === 'down') || (this.fadeDirection === 'up' && this.activeIndex > 0 && window.scrollY === 0)) {
						this.componentDisplay = this.componentDisplay.map(() => false)
						this.shouldLoadNextModule = true
					}
				})
			}
		},
		setAnimationCompleted() {
			//when the animation has completed for a module leaving view, this callback will update the component display array triggering the next component to display
			if (this.shouldLoadNextModule) {
				//if nextIndex was set via clicking one of the nav tiles, than update to have that module come into view
				if (this.nextIndex !== null) this.activeIndex = this.nextIndex
				//if the animation was triggered via scrolling, than bring the next/previous into view based on the scroll direciton
				else if (this.fadeDirection === 'down' && this.activeIndex < this.numberOfComponents) this.activeIndex ++
				else if (this.activeIndex > 0) this.activeIndex --
				this.componentDisplay = this.componentDisplay.map((val, index) => index === this.activeIndex ? true : false)
			}
			this.nextIndex = null
			this.shouldLoadNextModule = false
		}
	}
};
</script>
<style lang="scss">
.up-enter-active, .up-leave-active, .down-enter-active, .down-leave-active {
  transition: all 0.5s ease-in-out;
}
.up-enter, .down-leave-to {
	top: -150px;
	opacity: 0;
}
.up-enter-to, .down-enter-to, .up-leave, .down-leave {
	top: 0;
	opacity: 1;
}
.down-enter, .up-leave-to {
	top: 150px;
	opacity: 0;
}


#examples-nav-list {
	position: absolute;
	left: 20px;
	top: 0;
	height: 80vh;
	width: 80px;
	margin-top: 10vh;
	> div {
		$scale: 0.179;
		&+ div {
			margin-top: 20px;
		}
		position: relative;
		width: 70px;
		// padding-top: 100%;
		height: 70px;
		background-color: white;
		&.active {
			transition: all .4s cubic-bezier(.13,.92,.75,1.89);;
			transform: scale(1.2) translateX(8%);
			box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
		}
		.animation-example-frame {
			pointer-events: none;
			$animation-frame-dimension: 400;
			position: absolute;
			z-index: 10;
			$frame-padding: 10px * $scale;
			width: $animation-frame-dimension * $scale + px;
			height: $animation-frame-dimension * $scale + px;
			padding: $frame-padding * $scale;
			.title {
				bottom: $animation-frame-dimension * $scale + px;
				border-radius: 5px * $scale;
				padding: 5px * $scale 10px * $scale;
				margin: 5px * $scale 0;
				margin-left: -$frame-padding * $scale;
				font-size: 18px * $scale;
			}
			.square {
				$square-dim: 70 * $scale;
				$spacer: 10 * $scale;
				height: $square-dim + px;
				width: $square-dim + px;
				margin: $spacer + px;
				background-color: black;
				// top: 0;
				@for $i from 0 through 2 {
					$j: $i + 1;
					&:nth-of-type(#{$j}) {
						top: ($square-dim * $i) + ($spacer * $i) + px;
					}
				}
			}
			button.top-right-aligned {
				$button-width: 70 * $scale;
				$spacer: 5 * $scale;
				border-radius: 5px * $scale;
				padding: $spacer + px;
				margin: $spacer + px;
				font-size: 16px * $scale;
				letter-spacing: 2.5px * $scale;
				width: $button-width + px;
				&:first-of-type {
					//this bottom positioning reference the height of the parent container so that the buttons are positioned directly above the top edge of the container
					bottom: $animation-frame-dimension * $scale + px;
					left: $animation-frame-dimension * $scale - $button-width * 2 - $spacer * 2 + px;
				}
				&:last-of-type {
					bottom: $animation-frame-dimension * $scale+ px;
					left: $animation-frame-dimension * $scale - $button-width  - $spacer + px;
				}
				&:hover{
					transform: translateY(-3px * $scale);
				}
			}
		}
		#transition-example-three {
			.tabs-container {
				@for $i from 1 through 9 {
					.tab-#{$i - 1} {
						line-height: 23px * $scale;
						padding-left: 5px * $scale;
						font-size: 16px * $scale;
						border: 2px * $scale solid black;
						border-radius: 5px * $scale;
						width: 100%;
						height: 30px * $scale;
					}
				}
			}
		}
		#keyframe-example-three {
			.spinner-container {
				$container-dim: 120px * $scale;
				width: $container-dim;
				height: $container-dim;
				div {
					margin-top: 0;
					width: $container-dim/3;
					height: $container-dim/3;
					animation: none;
					&:nth-of-type(2) {
						transform:translate(200%)
					}
					&:nth-of-type(3) {
						transform:translate(200%, 200%)
					}
					&:nth-of-type(4) {
						transform:translate(0, 200%)
					}
				}
			}
		}
		#request-animation-frame-example-three {
			$finger-print-group-Y-translate: -50 * $scale;
			$finger-print-group-X-translate: -110 * $scale;
			//the month container has the text of the month and the 5 dots
			#month-container {
				top: 15px * $scale;
				//the left and transform are a techinque for centering an element horizontally. flex with maring auto woudl be an alternative but is not preferred.
				left: 50%;
				transform: translateX(-50%);
				//this variable is used to calculate how far the dots are transformed on the X axis
				$month-container-width: 150px * $scale;
			}
			#day-container {
				bottom: 35px * $scale;
				left: 50%;
				transform: translateX(-50%);
				z-index: 2;
				$day-container-width: 130px * $scale;
			}
			#my-name {
				font-size: 16px * $scale;
				top: 15px * $scale;
				margin: 0;
				p {
					max-width: fit-content;
				}
			}
		    #login-text {
				margin: 0;
				font-size: 16px * $scale;
				top: 130px * $scale; 
				height: 50px * $scale;
				p {
					max-width: fit-content;
				}
			}
		  
			svg {
				width: 400px * $scale;
				height: 400px * $scale;
				#starting-fprint {
		      		.fprint-path {
		        		stroke-width: 2.5px * $scale;
					}
		    	}
		    	#fill-fprint {
		      		.fprint-path {
						stroke-width: 2.5px * $scale;
					}
					.ending-path {
						stroke-width: 2.5px * $scale;
					}
		    	}
		    	#graph-line {
		      		stroke-width: 3 * $scale;
		    	}
			}
		}
	}
}
</style>

