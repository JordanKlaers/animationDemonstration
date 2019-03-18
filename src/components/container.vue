<template>
	<div id='container'>
		<template v-for="(component, name, index) in components">
			<transition :key="component.name" :name="fadeDirection" v-on:before-enter="setAnimationStarted" v-on:after-leave="setAnimationCompleted">
				<component :key="component.name" :is="component" v-if="index === activeIndex"></component>
			</transition>
		</template>
	</div>
</template>

<script>
import TransitionOne from 'transitions/exampleOne.vue';
import TransitionTwo from 'transitions/exampleTwo.vue';

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
			isActivlyAnimating: false
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
			return Object.keys(this.components).length - 1;
		}
	},
	mounted() {
		window.addEventListener('wheel', this.handleScroll)
	},
	methods: {
		handleScroll(event) {
			// console.log('event', event);
			if (!this.isActivlyAnimating) {
				this.isActivlyAnimating = true;
				this.fadeDirection = event.deltaY < 0 ? 'down' : 'up';
				if (this.fadeDirection === 'down') {
					console.log('down');
					if (this.activeIndex < this.numberOfComponents) this.activeIndex = this.activeIndex + 0.5;
				} else {
					console.log('up');
					if (this.activeIndex > 0) this.activeIndex = this.activeIndex - 0.5;
				}
			}
			// console.log('activeIndex', this.activeIndex);
		},
		setAnimationStarted() {
			this.isActivlyAnimating = true;
		},
		setAnimationCompleted() {
			if (this.fadeDirection === 'down') {
				if (this.activeIndex < this.numberOfComponents) this.activeIndex = this.activeIndex + 0.5;
			} else {
				if (this.activeIndex > 0) this.activeIndex = this.activeIndex - 0.5;
			}
			this.isActivlyAnimating = false;
		}
	}
};
</script>
<style lang="scss">
.up-enter-active, .up-leave-active {
  transition: opacity 2s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

