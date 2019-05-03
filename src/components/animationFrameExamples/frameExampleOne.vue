<template>
	<div class="animation-example-frame" id="request-animation-frame-example-one" @click="runAnimation">
		<span class="title">Request Animation Frame Example One</span>
	</div>
</template>

<script>
import colorUtil from '../mixins/colorUtil'
export default {
	name: 'RequestAnimationFrameOne',
	components: {
	},
	data() {
		return {			
			startValue: 0,
			endValue: 360, 
			shouldRunAnimation: true,
			animationDuration: 3000,
			startTime: null,
			animationProgress: 0
		}
	},
	mixins: [
		colorUtil
	],
	mounted() {
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(cb) {
				setTimeout(() => cb(new Date()), 1000 / 60)
			}
		}
	},
	methods: {
		runAnimation() {
			const that = this
			if (this.shouldRunAnimation) {
				this.shouldRunAnimation = !this.shouldRunAnimation
				// window.setTimeout(callback, animationDuration);
				window.requestAnimationFrame(function(timestamp){
					that.startTime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
					that.colorFade(that.startTime);
				});
			}
		},
		colorFade(timestamp) {
			//this method of using RequestAnimationFrame will always compelte within the given timeframe  despite how fast or slow the process power is.
			//the length of time passed since the first call divided by the desired length of time of the animation gives a percentage.
			//when multiplying the percentage by  the ending value, the intermediate value is returned and applied in this example
			
			var runtime = timestamp - this.startTime;	//length of time passed since animation started
			this.animationProgress = (runtime / this.animationDuration)		//percentage of completion of animation time
			if (this.animationProgress > 1) this.animationProgress = 1;

			var colorValue = this.endValue * this.animationProgress

			let rgb = this.hslToRgb(colorValue/360)
			let rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`

			document.getElementById('request-animation-frame-example-one').style.backgroundColor = rgbString

			//the setTimeout shows that even if there is a large gap in execution time, the animation still completed its change in the desired amount of time
			// it just appears more "choppy"
			if (this.animationProgress < 1) {
				setTimeout(() => {
				window.requestAnimationFrame(this.colorFade)
				}, 300)
			} else if (this.animationProgress >= 1) {
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
