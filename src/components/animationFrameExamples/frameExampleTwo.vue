<template>
	<div class="animation-example-frame" id="request-animation-frame-example-two" @click="runAnimation">
		<span class="title">Request Animation Frame Example Two</span>
	</div>
</template>

<script>
import colorUtil from '../mixins/colorUtil'
export default {
	name: 'RequestAnimationFrameOne',
	components: {
	},
	data() {
		let animationDuration = 3000;
		return {			
			rainbowValue: 0,
			shouldRunAnimation: true,
			animationDuration,
			colorChangeTick: this.getPropertyIncrement(0, 360, animationDuration),
			lastCallTimeStamp: 0,
			startTimeStamp: null,
			squareElement: null
		}
	},
	mounted() {
		this.squareElement = document.getElementById('request-animation-frame-example-two')
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(cb) {
				setTimeout(() => cb(new Date()), 1000 / 60)
			}
		}
	},
	mixins: [
		colorUtil
	],
	methods: {
		getPropertyIncrement(startValue, endValue, duration) {
			const TICK_TIME = 1000 / 60; //to achieve 60fps, 1 frame needs to render every 16ms
			const ticksToComplete = duration / TICK_TIME;
			return  (endValue - startValue) / ticksToComplete; //return the value that will be incremented each tick of the animation
		},
		runAnimation() {
			const that = this
			if (this.shouldRunAnimation) {
				this.shouldRunAnimation = !this.shouldRunAnimation
				//setting a reference for when the start of the animation began
				// this.startTimeStamp = new Date().getTime();

				window.requestAnimationFrame(function(timestamp){
					that.startTimeStamp = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
					that.colorFade(that.startTimeStamp);
				});
			}
		},
		colorFade(timestamp) {


			//calculate the value to be applied to the element
			let rgb = this.hslToRgb(this.rainbowValue/360);
			let rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

			this.squareElement.style.backgroundColor = rgbString;

			//increment  the rainbow value by the calculated increment
			//color change tick was calculated by getting the number of potential frames over the given animation time
			//(at 60 fps or roughly a new frame every 16ms over 3 seconds, that would be 187.5 ticks)
			//then dividing the difference in the value change by the number of ticks
			this.rainbowValue += this.colorChangeTick;

			// console.log('this/rainbowValue', this.colorChangeTick);
			if (this.rainbowValue > 360) {
				//reset the color value when the end of the loop is reached
				this.rainbowValue =  0;
			}

			//the setTimeout shows that when there is a large delay in execution time, 
			//the animation does not complete in the anticipated time
			//A slow computer or doing too much processing (computation for the animation that takes over 16ms to complete) will have the same affect

			//this is because the animaiton is expecting/anticipating being able to execute  187.5 frames over 3 seconds, but due to 
			//the delay of 100 ms between each call, there is about only 30 frames that get updated resulting in less completion.

			//despit the potential pitfall, this requestAnimationFrame method is preferred over the previous example, because it appears much smoother
			//by incrementing by the calculated amount rather than by an unknown amount that can be affect by the execution time.
			//the correct way to implement is to continue calling the function untill a desiered value is reach rather than a length of time

			if (timestamp - this.startTimeStamp <= this.animationDuration) {
				setTimeout(() => {
					window.requestAnimationFrame(this.colorFade);	
				}, 100);
			} else {
				this.rainbowValue = 0;
				this.shouldRunAnimation = !this.shouldRunAnimation
			}
		}
	}
};
</script>
<style lang='scss'>
@import 'scss/_mixins.scss';
@import 'scss/variables.scss';


</style>
