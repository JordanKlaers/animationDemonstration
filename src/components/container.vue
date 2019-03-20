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
import TransitionThree from 'transitions/exampleThree.vue';

export default {	
	name: 'container',
	components: {
		TransitionOne,
		TransitionTwo,
		TransitionThree
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
			componentDisplay: []
		}
	},
	created() {
		let displayArray = []
		this.$_.forEach(Object.keys(this.components), (value, index) => {
				if (index === 0) displayArray.push(true)
				else displayArray.push(false)
			});
		this.componentDisplay = displayArray
	},
	computed: {
		components() {
			const numberOfComponents = this.$vnode && this.$vnode.componentOptions && this.$vnode.componentOptions.Ctor && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options && this.$vnode.componentOptions.Ctor.options.components && this.$vnode.componentOptions.Ctor.options.components
			const components = Object.assign({}, numberOfComponents)
			delete components.container
			return components
		},
		numberOfComponents() {
			const numberOfComponents = Object.keys(this.components).length
			return numberOfComponents
		}
	},
	mounted() {
		console.log('lodash??', this.$_);
		window.addEventListener('wheel', this.handleScroll)
	},
	methods: {
		handleScroll(event) {
			//the window height + the distance scrolled, should be equal to the heigh of the total content
			const isScrolledToBottom = Math.abs((window.innerHeight + window.scrollY) - document.body.scrollHeight) < 3
			this.fadeDirection = event.deltaY < 0 ? 'up' : 'down';
			this.$nextTick(() => {
				console.log('this.fadeDirection', this.fadeDirection);
				if ((this.activeIndex < this.numberOfComponents - 1 && this.fadeDirection === 'down' && isScrolledToBottom) || (this.fadeDirection === 'up' && this.activeIndex > 0 && window.scrollY === 0)) {
					this.componentDisplay = this.componentDisplay.map(() => false);
					this.shouldLoadNextModule = true;
				}
			})
		},
		setAnimationStarted() {
			// this.isActivlyAnimating = true;
		},
		setAnimationCompleted() {
			if (this.shouldLoadNextModule) {
				if (this.fadeDirection === 'down') {
					if (this.activeIndex < this.numberOfComponents) this.activeIndex ++;
				} else {
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

</style>
