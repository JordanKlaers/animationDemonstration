<template>
	<div id='container'>
		<template v-for="(component, name, index) in components">
			<transition :key="component.name" :name="fadeDirection" v-on:before-enter="setAnimationStarted" v-on:before-leave="setAnimationStarted" v-on:after-leave="setAnimationCompleted" v-on:after-enter="setAnimationCompleted">
				<component :key="component.name" :is="component" v-if="componentDisplay[index]"></component>
			</transition>
		</template>
		<div id="enterHere"></div>
	</div>
</template>

<script>
import TransitionOne from 'transitions/exampleOne.vue';
import TransitionTwo from 'transitions/exampleTwo.vue';
// v-on:before-enter="setAnimationStarted" v-on:before-leave="setAnimationStarted" v-on:after-leave="setAnimationCompleted" v-on:after-enter="setAnimationCompleted"
export default {	
	name: 'container',
	components: {
		TransitionOne,
		TransitionTwo
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
			fadeDirection: 'up',
			isActivlyAnimating: false,
			componentDisplay: [true, false]
		}
	},
	computed: {
		components() {
			const numberOfComponents = this.$vnode && this.$vnode.componentOptions && this.$vnode.componentOptions.Ctor && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options.components && this.$vnode.componentOptions.Ctor.options.components;
			const components = Object.assign({}, numberOfComponents)
			delete components.container;
			return components;
		},
		numberOfComponents() {
			const numberOfComponents = Object.keys(this.components).length;
			console.log('number of components', numberOfComponents);
			return numberOfComponents;
		}
		// componentDisplay() {
		// 	const array = []
		// 	for (let i = 0; i < this.numberOfComponents; i++) {
		// 		array.push(false);
		// 	}
		// 	array[0] = true;
		// 	return array
		// }
	},
	watch: {
		activeIndex(newVal) {
			console.log('active index changing', newVal);
		}
	},
	mounted() {
		window.addEventListener('wheel', this.handleScroll)
		document.getElementById('enterHere').appendChild(document.createElement('<div> hello</div>'))
	},
	methods: {
		handleScroll(event) {
			// console.log('event', event);
			// if (!this.isActivlyAnimating) {
			// this.isActivlyAnimating = true;
			console.log('this.activeIndex', this.activeIndex);
			this.fadeDirection = event.deltaY < 0 ? 'down' : 'up';
			if ((this.activeIndex < this.numberOfComponents - 1 && this.fadeDirection === 'down') || (this.fadeDirection === 'up' && this.activeIndex > 0)) {
				
				// console.log('this.componentDisplay', this.componentDisplay);
				this.componentDisplay = this.componentDisplay.map(() => false);
				this.shouldLoadNextModule = true;
				console.log('this.componentDisplay', this.componentDisplay);
			}
		},
		setAnimationStarted() {
			// this.isActivlyAnimating = true;
		},
		setAnimationCompleted() {
			if (this.shouldLoadNextModule) {
				if (this.fadeDirection === 'down') {
					// console.log('down', this.numberOfComponents);
					if (this.activeIndex < this.numberOfComponents) this.activeIndex ++;
				} else {
					// console.log('up');
					if (this.activeIndex > 0) this.activeIndex --;
				}
				this.componentDisplay = this.componentDisplay.map((val, index) => index === this.activeIndex ? true : false)
			}
			this.shouldLoadNextModule = false;
		}
	}
};
</script>
<style lang="scss">
.up-enter-active, .up-leave-active, .down-enter-active, .down-leave-active {
  transition: opacity 2s;
}
.up-enter, .up-leave-to, .down-enter, .down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

