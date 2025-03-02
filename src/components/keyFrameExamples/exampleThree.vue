<template>
	<div class="animation-example-frame" id="keyframe-example-three">
		<span class="title">KeyFrame Example three</span>
		<div class="spinner-container">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'keyframeExmapleThree'
};
</script>
<style lang='scss'>
@use 'sass:math';
@keyframes spin{
  0%,100%{transform:translate(0)}
  25%{transform:translate(200%)}
  50%{transform:translate(200%, 200%)}
  75%{transform:translate(0, 200%)}
}
#keyframe-example-three {
	display: flex;
	.spinner-container {
		$container-dim: 120px;
		margin: auto;
		width: $container-dim;
		height: $container-dim;
		position: relative;
		div {
			//positioned to allow for overlap/ setup the start of the animation
			position: absolute;
			width: math.div($container-dim, 3);
			height: math.div($container-dim, 3);
			border-radius: 50%;
			animation-name: spin;
			animation-duration: 2s;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
			background-color: #2acbba;
			&:nth-of-type(2) {
				animation-delay: 0.5s;
				background-color: #c3b13d;
			}
			&:nth-of-type(3) {
				animation-delay: 1s;
				background-color: #ff6857;
			}
			&:nth-of-type(4) {
				animation-delay: 1.5s;
				background-color: #864773;
			}
		}
	}
}
</style>
