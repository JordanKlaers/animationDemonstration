<template>
	<div class="animation-example-frame" id="transition-example-three">
		<span class="title">Example Three</span>
		<div class="tabs-container">
			<template v-for="(entry, index) in tabs">
				<div :class="`tab-${index}`" :key="`tab-${entry}`" @click="() => updateActiveIndex(index)">{{entry}}</div>
				<span class='image-container' :key="entry" :class="{ 'in-view': (index === activeIndex && !shouldHide)}">
					<img :src="getImagePath(entry)"/>
					<!-- <span class="inner-content"></span> -->
				</span>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'transitionExampleThree',
	components: {
	},
	data() {
		return {
			tabs: ['red', 'orange', 'yellow', 'limegreen', 'green', 'turquoise', 'blue', 'purple', 'pink'],
			activeIndex: -1,
			shouldHide: false
		}
	},
	mounted() {
		window.addEventListener('keydown', this.arrowKeyPress)
	},
	methods: {
		getImagePath(color) {
			return require(`images/${color}.jpg`)
		},
		updateActiveIndex(index) {
			if (index === this.activeIndex) {
				console.log('this', this);
				this.toggleHideCurrentIndex()
			} else {
				this.shouldHide = false;
			}
			this.activeIndex = index
		},
		toggleHideCurrentIndex() {
			this.shouldHide = !this.shouldHide
			console.log('called', this.shouldHide)
		},
		arrowKeyPress(event) {
			const dir = event.keyCode === 38 ? 'up' : event.keyCode === 40 ? 'down' : ''
			let index
			if (dir === 'up' && this.activeIndex > 0) {
				index = this.activeIndex - 1
			} else if (dir === 'down' && this.activeIndex < this.tabs.length - 1) {
				index = this.activeIndex + 1
			}
			if (index || index === 0) this.updateActiveIndex(index)
		}
	}
};
</script>
<style lang='scss'>
@import 'scss/_mixins.scss';
#transition-example-three {
	.tabs-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		$colors: red, orange, yellow, limeGreen, green, turquoise, blue, purple, pink;
		@for $i from 1 through length($colors) {
			.tab-#{$i - 1} {
				font-family: cursive;
				line-height: 23px;
				padding-left: 5px;
				text-shadow: 0px 0px 7px white;
				font-weight: bold;
				width: 100%;
				height: 30px;
				@include border-rounded-corners(2px, 5px);
				background-color: nth($colors, $i);
			}
		}
		.image-container {
			width: 100%;
			flex: 1;
			// overflow hidden because the  image is larger than the container and was not resized to fit.
			overflow: hidden;
			//flex/column and justify content to the end, allows the  image container to fill the remaining sapce of the parent container, while aligning the image to the bottom.
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			max-height: 0px;
			will-change: max-height;
			transition: max-height 0.5s linear;
			&.in-view {
				//this value can be set dynamically via javascript if you dont know  the  height of the  content
				//https://codepen.io/jordanklaers/pen/GePGmp?editors=0111
				max-height: 108px;
			}
			img {
				object-fit: cover;
				width: 100%;
			}
		}
	}
}
</style>
