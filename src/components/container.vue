<template>
	<div id="container" style="display: flex; width: 100%;">
		<div id="nav-container">
      <div v-for="(component, name, index) in componentsList"
        v-show="index <= desiredIndex + 1 && index >= desiredIndex - 1"
        class="item"
        :key="index"
        :class="{ active: index == desiredIndex }"
        v-on:click="updateActiveIndex(index)">
        <component :key="component.name" :is="component"></component>
      </div>
		</div>
		<div id='animation-content'>
      <transition v-for="(component, name, index) in componentsList" :key="component.name" :name="fadeDirection" @before-leave="onBeforeLeave" @after-leave="onAfterLeave">
        <component :is="component" v-show="index == activeIndex"></component>
      </transition>
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
import { computed, getCurrentInstance, nextTick } from 'vue';
export default {
	name: 'animation-container',
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
      desiredIndex: 0,
			activeIndex: 0,
			nextIndex: null,
			fadeDirection: 'up',
			isActivlyTransitioning: false
		}
	},
	computed: {
		componentsList() {
			//looks at the imported components for this vue file and return the array of components
			const instance = getCurrentInstance();
      if (!instance || !instance.type || !instance.type.components) return {};

      const componentsInstanceList = { ...instance.type.components };
      delete componentsInstanceList.container;
      return componentsInstanceList;
		},
		numberOfComponents() {
			//returns the number of components current used by this vue file
			const numberOfComponents = Object.keys(this.componentsList).length
			return numberOfComponents
		}
	},
	mounted() {
		window.addEventListener('wheel', this.handleScroll)
		// let width = document.querySelector('#examples-nav-list')?.getBoundingClientRect().width || 0
		// document.querySelector('#app #nav-container')?.style.setProperty('width', `${width + 20}px`);
		// window.addEventListener('resize', () => {
		// 	let width = document.querySelector('#examples-nav-list')?.getBoundingClientRect().width || 0
		// 	document.querySelector('#app #nav-container')?.style.setProperty('width', `${width + 20}px`);
		// })
	},
	methods: {
		handleScroll(event) {
			this.fadeDirection = event.deltaY < 0 ? 'up' : 'down';
      if (this.isActivlyTransitioning == false) {

        if (this.activeIndex < this.numberOfComponents - 1 && this.fadeDirection === 'down') {
          this.desiredIndex = Math.min(this.activeIndex + 1, this.numberOfComponents - 1);
          this.activeIndex = -1;
        } else if (this.fadeDirection === 'up' && this.activeIndex > 0) {
          this.desiredIndex = Math.max(this.activeIndex - 1, 0);
          this.activeIndex = -1;
        }
      }
		},
    onBeforeLeave() {
      this.isActivlyTransitioning = true;
    },
    onAfterLeave() {
      this.isActivlyTransitioning = false;
      this.activeIndex= this.desiredIndex;
    },
    updateActiveIndex(index) {
      this.fadeDirection = index < this.activeIndex ? 'down' : 'up';
      this.desiredIndex = index;
      this.activeIndex = -1;
    }
	}
};
</script>
<style lang="scss">
@use 'sass:math';
@use 'scss/container.scss' as *;
.up-enter-active, .up-leave-active, .down-enter-active, .down-leave-active {
  transition: all 0.3s ease-in-out;
}
.up-enter-from, .down-leave-to {
	top: -150px;
	opacity: 0;
}
.up-enter-to, .down-enter-to, .up-leave-from, .down-leave-from {
	top: 0;
	opacity: 1;
}
.down-enter-from, .up-leave-to {
	top: 150px;
	opacity: 0;
}
#container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

#nav-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  height: fit-content;
  .item {
    width: 70px;
		height: 70px;
    background-color: white;
    cursor: pointer;
    &.active {
      transition: all .4s cubic-bezier(.13,.92,.75,1.89);
      transform: scale(1.2);
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    }
    > * {
      pointer-events: none;
      transform-origin: top left;
      transform: scale(0.179);
      top: 0;
      left: 0;
    }
  }
}

#_nav-container {
	display: inline-block;
	margin-left: 30px;
	#examples-nav-list {
		top: 0;
	    width: 90vh;
	    transform-origin: top right;
	    transform: rotateZ(-90deg) translateY(-90vh) rotateY(180deg) translateX(90vh);
		.grid-container {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(70px, 71px));
			align-items: end;
		  	grid-row-gap: 30px;
			grid-column-gap: 20px;
			justify-content: start;
			.item {
				$scale: 0.179;
				transform: rotateZ(270deg) rotateY(180deg);
				background-color: pink;
				width: 70px;
				height: 70px;
				background-color: white;
				&.active {
					transition: all .4s cubic-bezier(.13,.92,.75,1.89);
					transform: rotateZ(270deg) rotateY(180deg) scale(1.2) translateX(8%);
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
							width: math.div($container-dim, 3);
							height: math.div($container-dim, 3);
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
	}
}
</style>

