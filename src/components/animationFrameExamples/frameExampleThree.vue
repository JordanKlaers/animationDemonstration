<template>
	<div class="animation-example-frame" id="keyframe-example-three">
		<span class="title">Example Three</span>
		<div class="text-container">
			<div id="my-name">
				<p>Jordan Klaers</p>
				<div id="name-particle-container"></div>
			</div>
		</div>
		<div class="text-container">
			<div id="login-text">
				<p>Login with FingerPrint ID<p>
				<div id="login-particle-container"></div>
			</div>
		</div>
		<svg class="svg-element" viewBox="0 0 400 400">
			<defs>
				<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%"   stop-color="#8742cc"/>
					<stop offset="100%" stop-color="#a94a8c"/>
				</linearGradient>
				 <linearGradient id="blue-gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" >
					<stop stop-color="#5757D9" offset="0%"/>
					<stop stop-color="#21D9F7" offset="100%"/>
				</linearGradient>
			</defs>
			<g id="starting-fprint" transform="translate(110,50)">
				<path class="fprint-path" d="M46.1,214.3c0,0-4.7-15.6,4.1-33.3"/>
				<path class="fprint-path" d="M53.5,176.8c0,0,18.2-30.3,57.5-13.7"/>
				<path class="fprint-path" d="M115.8,166.5c0,0,19.1,8.7,19.6,38.4"/>
				<path class="fprint-path" d="M47.3,221c0,0,3.1-2.1,4.1-4.6s-5.7-20.2,7-36.7c8.5-11,22.2-19,37.9-15.3"/>
				<path class="fprint-path" d="M102.2,165.4c10.2,2.7,19.5,10.4,23.5,20.2c6.2,15.2,4.9,27.1,4.1,39.4"/>
				<path class="fprint-path" d="M51.1,226.5c3.3-2.7,5.1-6.3,5.7-10.5c0.5-4-0.3-7.7-0.3-11.7"/>
				<path class="fprint-path" d="M56.3,197.9c3.1-16.8,17.6-29.9,35.1-28.8c17.7,1.1,30.9,14.9,32.8,32.2"/>
				<path class="fprint-path" d="M124.2,207.9c0.5,9.3,0.5,18.7-2.1,27.7"/>
				<path class="fprint-path" d="M54.2,231.1c2.1-2.6,4.6-5.1,6.3-8c4.2-6.8,0.9-14.8,1.5-22.3c0.5-7.1,3.4-16.3,10.4-19.7"/>
				<path class="fprint-path" d="M77.9,178.2c9.3-5.1,22.9-4.7,30.5,3.3"/>
				<path class="fprint-path" d="M113,186.5c0,0,13.6,18.9,1,54.8"/>
				<path class="fprint-path" d="M57.3,235.2c0,0,5.7-3.8,9-12.3"/>
				<path class="fprint-path" d="M111.7,231.5c0,0-4.1,11.5-5.7,13.6"/>
				<path class="fprint-path" d="M61.8,239.4c9.3-8.4,12.7-19.7,11.8-31.9c-0.9-12.7,3.8-20.6,18.5-21.2"/>
				<path class="fprint-path" d="M97.3,188.1c8.4,2.7,11,13,11.3,20.8c0.4,11.8-2.5,23.7-7.9,34.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.4,0.8-0.8,1.5-1.2,2.3c-0.5,0.8-1,1.7-1.5,2.5"/>
				<path class="fprint-path" d="M66.2,242.5c0,0,15.3-11.1,13.6-34.9"/>
				<path class="fprint-path" d="M78.7,202.5c1.5-4.6,3.8-9.4,8.9-10.6c13.5-3.2,15.7,13.3,14.6,22.1"/>
				<path class="fprint-path" d="M102.2,219.7c0,0-1.7,15.6-10.5,28.4"/>
				<path class="fprint-path" d="M72,244.9c0,0,8.8-9.9,9.9-15.7"/>
				<path class="fprint-path" d="M84.5,223c0.3-2.6,0.5-5.2,0.7-7.8c0.1-2.1,0.2-4.6-0.1-6.8c-0.3-2.2-1.1-4.3-0.9-6.5c0.5-4.4,7.2-6.9,10.1-3.1 c1.7,2.2,1.7,5.3,1.9,7.9c0.4,3.8,0.3,7.6,0,11.4c-1,10.8-5.4,21-11.5,29.9"/>
				<path class="fprint-path" d="M90,201.2c0,0,4.6,28.1-11.4,45.2"/>
				<path class="fprint-path" id="elastic-starting" d="M67.3,219C65,188.1,78,180.1,92.7,180.3c18.3,2,23.7,18.3,20,46.7"/>
			</g>
			<g id="fill-fprint" transform="translate(110,50)">
				<path class="fprint-path light-purple" d="M46.1,214.3c0,0-4.7-15.6,4.1-33.3"/>
				<path class="fprint-path remove-backwards" d="M53.5,176.8c0,0,18.2-30.3,57.5-13.7"/>
				<path class="fprint-path light-purple remove-backwards" d="M115.8,166.5c0,0,19.1,8.7,19.6,38.4"/>
				<path class="fprint-path red" d="M47.3,221c0,0,3.1-2.1,4.1-4.6s-5.7-20.2,7-36.7c8.5-11,22.2-19,37.9-15.3"/>
				<path class="fprint-path red remove-backwards" d="M102.2,165.4c10.2,2.7,19.5,10.4,23.5,20.2c6.2,15.2,4.9,27.1,4.1,39.4"/>
				<path class="fprint-path" d="M51.1,226.5c3.3-2.7,5.1-6.3,5.7-10.5c0.5-4-0.3-7.7-0.3-11.7"/>
				<path class="fprint-path light-purple" d="M56.3,197.9c3.1-16.8,17.6-29.9,35.1-28.8c17.7,1.1,30.9,14.9,32.8,32.2"/>
				<path class="fprint-path remove-backwards" d="M124.2,207.9c0.5,9.3,0.5,18.7-2.1,27.7"/>
				<path class="fprint-path light-purple remove-backwards" d="M54.2,231.1c2.1-2.6,4.6-5.1,6.3-8c4.2-6.8,0.9-14.8,1.5-22.3c0.5-7.1,3.4-16.3,10.4-19.7"/>
				<path class="fprint-path remove-backwards" d="M77.9,178.2c9.3-5.1,22.9-4.7,30.5,3.3"/>
				<path class="fprint-path red remove-backwards light-purple" d="M113,186.5c0,0,13.6,18.9,1,54.8"/>
				<path class="fprint-path red light-purple" d="M57.3,235.2c0,0,5.7-3.8,9-12.3"/>
				<path class="fprint-path remove-backwards" d="M111.7,231.5c0,0-4.1,11.5-5.7,13.6"/>
				<path class="fprint-path remove-backwards" d="M61.8,239.4c9.3-8.4,12.7-19.7,11.8-31.9c-0.9-12.7,3.8-20.6,18.5-21.2"/>
				<path class="fprint-path remove-backwards" d="M97.3,188.1c8.4,2.7,11,13,11.3,20.8c0.4,11.8-2.5,23.7-7.9,34.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.4,0.8-0.8,1.5-1.2,2.3c-0.5,0.8-1,1.7-1.5,2.5"/>
				<path class="fprint-path light-purple" d="M66.2,242.5c0,0,15.3-11.1,13.6-34.9"/>
				<path class="fprint-path" d="M78.7,202.5c1.5-4.6,3.8-9.4,8.9-10.6c13.5-3.2,15.7,13.3,14.6,22.1"/>
				<path class="fprint-path red remove-backwards light-purple" d="M102.2,219.7c0,0-1.7,15.6-10.5,28.4"/>
				<path class="fprint-path remove-backwards" d="M72,244.9c0,0,8.8-9.9,9.9-15.7"/>
				<path class="fprint-path light-purple remove-backwards" d="M84.5,223c0.3-2.6,0.5-5.2,0.7-7.8c0.1-2.1,0.2-4.6-0.1-6.8c-0.3-2.2-1.1-4.3-0.9-6.5c0.5-4.4,7.2-6.9,10.1-3.1 c1.7,2.2,1.7,5.3,1.9,7.9c0.4,3.8,0.3,7.6,0,11.4c-1,10.8-5.4,21-11.5,29.9"/>
				<path class="fprint-path red remove-backwards" d="M90,201.2c0,0,4.6,28.1-11.4,45.2"/>
				<path class="fprint-path light-purple" id='demo__elastic-path' d="M67.3,219C65,188.1,78,180.1,92.7,180.3c18.3,2,23.7,18.3,20,46.7"/>
				<path class="ending-path" d="M48.4,220c-5.8,4.2-6.9,11.5-7.6,18.1c-0.8,6.7-0.9,14.9-9.9,12.4c-9.1-2.5-14.7-5.4-19.9-13.4c-3.4-5.2-0.4-12.3,2.3-17.2c3.2-5.9,6.8-13,14.5-11.6c3.5,0.6,7.7,3.4,4.5,7.1"/>
				<path class="ending-path light-purple" d="M57.3,235.2c-14.4,9.4-10.3,19.4-17.8,21.1c-5.5,1.3-8.4-7.8-13.8-4.2c-2.6,1.7-5.7,7.7-4.6,10.9c0.7,2,4.1,2,5.8,2.4c3,0.7,8.4,3,7.6,7.2c-0.6,3-5,5.3-2.4,8.7c1.8,2.2,4.7,1.1,6.9,0.3c11.7-4.3,14.5,0.8,16.5,0.9"/>
				<path class="ending-path" d="M79,246c-1.8,2.4-4.9,2.9-7.6,3.2c-2.7,0.3-5.8-0.8-7.7,1.6c-2.9,3.3,0.7,8.2-1.2,12c-1.5,2.8-4.5,2.4-6.9,1.3c-10.1-4.7-33.2-17.5-38.1-2.5c-1.1,3.4-1.9,7.5-1.3,11c0.6,4,5.6,7.9,7.7,2.3c0.8-2.1,3.1-8.6-1-8.9"/>
				<path class="ending-path light-purple" d="M91.8,248c0,0-3.9,6.4-6.2,9.2c-3.8,4.5-7.9,8.9-11.2,13.8c-1.9,2.8-4.4,6.4-3.7,10c0.9,5.2,4.7,12.5,9.7,14.7c5.2,2.2,15.9-4.7,13.1-10.8c-1.4-3-6.3-7.9-10-7.2c-1,0.2-1.8,1-2,2"/>
				<path class="ending-path light-purple" d="M114.8,239.4c-2.7,6.1-8.3,12.8-7.8,19.8c0.3,4.6,3.8,7.4,7.8,9.1c8.9,3.8,19.7,0.4,28.6-1.3c8.8-1.7,19.7-3.2,23.7,6.7c2.8,6.8,6.1,14.7,4.4,22.2"/>
				<path class="ending-path" transform="translate(3, 4)" d="M129.9,224.2c-0.4,7.5-3.1,18,0.7,25c2.8,5.1,14.3,6.3,19.5,7.4c3.7,0.7,8.7,2.2,12-0.5c6.7-5.4,11.1-13.7,14.1-21.6c3.1-8-4.4-12.8-11.1-14.5c-5-1.3-19.1-0.7-21-6.7c-0.9-2.8,1.8-5.9,3.4-7.9"/>
				<!-- transform="translate(5 0)"  -->
			</g>
			<circle id="dot" cx="200" cy="0" r="6"/>
			<path class="hidden-path" id='arc-to-top' transform="translate(110 50)" d="M-110,150c150-20.5,200-20.5,400,0"/>
			<path class="hidden-path" id='arc-to-bottom' transform="translate(110 50)" d="M-110,150c150+20.5,200+20.5,400,0"/>
			<line id='straight-path' x1="-110" y1="150" x2="300" y2="150" transform="translate(100 50)"/>  
		</svg>
	</div>
</template>

<script>
import svg from './svg';
import * as d3 from 'd3';
import {TweenMax, TimelineLite} from "scripts/gsap";
import morphSVG from "scripts/gsap/morphSVGPlugin";

export default {
	name: 'keyframeExampleThree',
	components: {
		'svg-component': svg
	},
	data() {
		return {
			fingerPrintPaths: [],
			fingerPrintEndingPaths: [],
			fingerPrintPathIncrement: this.getPropertyIncrement(0, 1, 500),
			removeFingerPrintPathIncrement: this.getPropertyIncrement(0, 1, 150),
			removeFingerPrintEndingPathIncrement: this.getPropertyIncrement(0, 1, 300),
			fingerPrintOffSetRatio: 1,
			fingerPrintEndingPathOffSetRatio: 0,
			fillDirection: 'forwards',
			previousRAFTimeStamp: 0 ,
			isfingerPrintFillAnimationComplete: false,
			hasFingerPrintRemoveCompleted: false,
			shouldMorphIntoGraphLine: true,
			fingerPrintToStraightLineAnimation: null,
			fingerPrintToGraphLineAnimation: null,
			fingerPrintResetAnimation: null
		}
	},
	mounted() {
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(cb) {
    			setTimeout(() => cb(new Date()), 1000 / 60);
  			}
		}
		let loginDiv = document.getElementById('login-particle-container')
		let nameDiv = document.getElementById('name-particle-container')
		for (let i = 0; i < 30; i++) {
			let dot = document.createElement('div')
			dot.classList.add('particle')
			loginDiv.appendChild(dot)
			let dot2 = document.createElement('div')
			dot2.classList.add('particle')
			nameDiv.appendChild(dot2)
		}
		
		this.createGraphLine();
		this.setFingerPrintStartingState();
		document.addEventListener('mousedown', this.tirggerFillForwards)
		document.addEventListener('mouseup', this.setFillDirection)
	},
	methods: {
		setUp() {
			//for gettings the dates
			// now = new Date()
			// now.setDate(now.getDate() + 24)
			// console.log(now.getDate());
			
		},
		setFillDirection() {
			this.fillDirection = 'backwards';
		},
		createGraphLine() {
			var width = 400; //should match the width and height of the SVG
			var height = 400;
			var n = 7;
			//hardcoded
			var svgTransformY = -50;
			var svgTransformX = -110;
			var xScale = d3.scaleLinear()
				.domain([0, n-1]) // input
				.range([svgTransformX, width + svgTransformX]); // output
			var yScale = d3.scaleLinear()
				.domain([0, 1])
				.range([height + svgTransformY, svgTransformY]);
			var line = d3.line()
				.x(function(d, i) { return xScale(i); })
				.y(function(d) { return yScale(d.y); })
				.curve(d3.curveCatmullRom.alpha(0.5))
			var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(0.3)() + 0.35 } })
			dataset[0].y = 0.5
			dataset[n-1].y = 0.5

			var svg = d3.select("svg").append("g").attr("id", "graph")
			svg.append("path")
				.datum(dataset) // 10. Binds data to the line 
				.attr("id", "graph-line") // Assign a class for styling 
				.attr("d", line) // 11. Calls the line generator 
				.style('visibility', 'hidden')
			var graphLineGradient = d3.select("#fill-fprint").append("path")
				.datum(dataset) // 10. Binds data to the line 
				.attr("id", "graph-line-gradient") // Assign a class for styling 
				.attr("d", line) // 11. Calls the line generator 
				.attr("stroke", "url(#blue-gradient)")
				.lower()
				var newDAttribute = `${document.getElementById("graph-line-gradient").getAttribute('d')} L290 360 L-110 360`
			document.getElementById("graph-line-gradient").setAttribute("d", newDAttribute)

			var dot = [dataset[3]]
			svg.selectAll(".dot")
				.data(dot)
				.enter().append("circle") // Uses the enter().append() method
				.attr("id", "graph-dot") // Assign a class for styling
				.attr("cx", function(d, i) { return xScale(3) })
				.attr("cy", function(d) { return yScale(d.y) })
				.attr("r", 5)
				.style('visibility', 'hidden')
			const graphDot = document.getElementById('graph-dot');
			const graphDotPositionY = graphDot && Number(graphDot.attributes.cy.value);
			console.log('THE POSITION:', `${Math.floor(graphDotPositionY) + 50}px`);
			console.log('DOT D:<', graphDot);
			document.getElementById('dot').style.setProperty('--graphLineCenterY', `${Math.floor(graphDotPositionY) + 50}px`);
				// --graphLineCenterY
		},
		setFingerPrintStartingState() {
			const fingerPrintGroup = document.querySelectorAll('#fill-fprint .fprint-path');
			const endingPathsGroup = document.querySelectorAll('#fill-fprint .ending-path');
			const paths = [].slice.call(fingerPrintGroup);
			const endingPaths = [].slice.call(endingPathsGroup);
			paths.forEach(path => {
				let pathLength = path.getTotalLength();
				this.fingerPrintPaths.push({
					path,
					pathLength,
					removeDirection: path.classList.contains('remove-backwards') ? -1 : 1
				})
				//create strokedash array on each path
				path.style.strokeDasharray = `${pathLength} ${pathLength}`;
				//set offset of dashes for each path for inital state
				path.style.strokeDashoffset = pathLength * this.fingerPrintOffSetRatio;
			})
			endingPaths.forEach(path => {
				let pathLength = path.getTotalLength();
				const dashLength = pathLength * 0.22;
				this.fingerPrintEndingPaths.push({
					path,
					pathLength,
					dashLength
				})
				path.style.strokeDasharray = `${dashLength} ${pathLength + 3}`;
				path.style.strokeDashoffset = dashLength * 0 + -pathLength * 1;
			})
		},
		getPropertyIncrement(startValue, endValue, duration) {
			const TICK_TIME = 1000 / 60; //to achieve 60fps, 1 frame needs to render every 16ms
			const ticksToComplete = duration / TICK_TIME;
			return  (endValue - startValue) / ticksToComplete; //return the value that will be incremented each tick of the animation
		},
		fillFingerPrint(timestamp) {
			if (timestamp - this.previousRAFTimeStamp > 1000/60) {
				this.previousRAFTimeStamp = timestamp;
				if (this.fillDirection === 'forwards') {
					if (this.fingerPrintOffSetRatio > 0) this.fingerPrintOffSetRatio =  this.fingerPrintOffSetRatio + (this.fingerPrintPathIncrement * -1);
					else {
						this.fingerPrintOffSetRatio = 0;
						this.isfingerPrintFillAnimationComplete = true;
					}
				}
				if (this.fillDirection === 'backwards') {
					if (this.fingerPrintOffSetRatio < 1) this.fingerPrintOffSetRatio =  this.fingerPrintOffSetRatio + this.fingerPrintPathIncrement;
					else this.fingerPrintOffSetRatio = 1;
				}
				this.fingerPrintPaths.forEach(pathObj => {
					pathObj.path.style.strokeDashoffset = pathObj.pathLength * this.fingerPrintOffSetRatio;
				});
			}
			if (!this.isfingerPrintFillAnimationComplete && !(this.fillDirection === 'backwards' && this.fingerPrintOffSetRatio === 1)) {
				window.requestAnimationFrame(this.fillFingerPrint);
			} else if (this.isfingerPrintFillAnimationComplete) {
				document.getElementById('dot').classList.add('slide-up-down-animation');
				document.getElementById('dot').addEventListener('animationend', this.finishMovingDotAndLineToGraphAnimation)
				// document.getElementById('dot').classList.add('in-view');  *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
				//a transition delay allows the text to dissappear right when the dot crosses the text moving up
				document.querySelector('#login-text p').classList.add('hidden')
				document.querySelector('#my-name p').classList.add('hidden')
				//right when the tet is hidden is when the particles should explode
				document.querySelector('#login-text p').addEventListener('transitionend', this.explodeLoginParticles)
				document.querySelector('#my-name p').addEventListener('transitionend', this.explodeNameParticles)

				this.transform();
				document.getElementById('starting-fprint').style.visibility = 'hidden';
				window.requestAnimationFrame(this.removeFingerPrintPaths);
			}
		},
		explodeLoginParticles() {	
			document.getElementById('login-particle-container').style.visibility = 'visible';
			let collection = document.querySelectorAll('#login-particle-container .particle')
			for (let el of collection) {
				el.classList.add('explode');
			}
		},
		explodeNameParticles() {
			document.getElementById('name-particle-container').style.visibility = 'visible';
			let collection = document.querySelectorAll('#name-particle-container .particle')
			for (let el of collection) {
				el.classList.add('explode');
			}
		},
		removeFingerPrintPaths(timestamp) {
			if (timestamp - this.previousRAFTimeStamp > 1000/60) {
				this.previousRAFTimeStamp = timestamp;
				if (this.fingerPrintOffSetRatio < 1) this.fingerPrintOffSetRatio += this.removeFingerPrintPathIncrement;
				else this.fingerPrintOffSetRatio = 1;
				if (this.fingerPrintOffSetRatio > 0.45) {
					if (this.fingerPrintEndingPathOffSetRatio < 1) this.fingerPrintEndingPathOffSetRatio += this.removeFingerPrintEndingPathIncrement;
					else this.fingerPrintEndingPathOffSetRatio = 1;
				}
				if (this.fingerPrintOffSetRatio > 1) this.fingerPrintOffSetRatio = 1;
				if (this.fingerPrintEndingPathOffSetRatio > 1) this.fingerPrintEndingPathOffSetRatio = 1;
				this.fingerPrintPaths.forEach(pathObj => {
					pathObj.path.style.strokeDashoffset = pathObj.pathLength * (this.fingerPrintOffSetRatio *  pathObj.removeDirection);
				});
				this.fingerPrintEndingPaths.forEach(pathObj => {
					pathObj.path.style.strokeDashoffset = -pathObj.pathLength * (this.fingerPrintEndingPathOffSetRatio) + (pathObj.dashLength * Math.abs(this.fingerPrintEndingPathOffSetRatio - 1));
				});
				if (this.fingerPrintOffSetRatio === 1 && this.fingerPrintEndingPathOffSetRatio === 1) {
					this.hasFingerPrintRemoveCompleted = true;
				}
			}
			if (!this.hasFingerPrintRemoveCompleted) window.requestAnimationFrame(this.removeFingerPrintPaths);
		},
		transform() {
			document.getElementById('demo__elastic-path').classList.add('solid-stroke');
			this.fingerPrintToStraightLineAnimation = new TimelineLite();
			this.fingerPrintToStraightLineAnimation.to('#demo__elastic-path', 0.3, {
				delay: 0,
				morphSVG: '#arc-to-top',
			}).to('#demo__elastic-path', 1, {
				morphSVG: '#straight-path',
				ease: Elastic.easeOut.config(1.5, 0.3)
			}).eventCallback('onComplete', ()=> {
				// document.getElementById('dot').classList.add('slide-to-line-animation');
				// document.getElementById('dot').addEventListener('transitionend', this.finishMovingDotAndLineToGraphAnimation)
			})
		},
		finishMovingDotAndLineToGraphAnimation() {
			this.fingerPrintToGraphLineAnimation = new TimelineLite();
			// const graphDot = document.getElementById('graph-dot');
			// const graphDotPositionY = graphDot && Number(graphDot.attributes.cy.value);
			if (this.shouldMorphIntoGraphLine) {
				this.shouldMorphIntoGraphLine = false;
				console.log('adding follwo line bend class');
				document.getElementById('dot').classList.add('follow-line-bend');
				console.log(getComputedStyle(document.getElementById('dot')).getPropertyValue('--graphLineCenterY'));
				// document.getElementById('dot').style.transition = 'transform 0.5s linear';
				// document.getElementById('dot').style.transform = `translateY(${graphDotPositionY + 50}px)`
				this.fingerPrintToGraphLineAnimation.to('#demo__elastic-path', 0.5, {
					delay: 0,
					morphSVG: '#graph-line',
					ease: Power0.easeNone
				}).eventCallback('onComplete', ()=> {
					document.getElementById("graph-line-gradient").classList.add('in-view');
					document.removeEventListener('mousedown', this.triggerFillForwards)
					document.removeEventListener('mouseup', this.setFillDirection)
					document.getElementById('dot').removeEventListener('transitionend', this.finishMovingDotAndLineToGraphAnimation)
					document.addEventListener('click', this.reset)
				});
			}
		},
		tirggerFillForwards() {
			// console.log();
			this.fillDirection = 'forwards';
			if (!this.isfingerPrintFillAnimationComplete) window.requestAnimationFrame(this.fillFingerPrint);
		},
		reset() {
			this.fingerPrintToStraightLineAnimation = null;
			this.fingerPrintToGraphLineAnimation = null;
			this.fingerPrintOffSetRatio = 1;
			this.fingerPrintEndingPathOffSetRatio = 0;
			this.fillDirection = 'forwards';
			this.previousRAFTimeStamp = 0;
			this.isfingerPrintFillAnimationComplete = false;
			this.hasFingerPrintRemoveCompleted = false;
			this.shouldMorphIntoGraphLine = true;
			this.fingerPrintResetAnimation = new TimelineLite();
			document.querySelector('#login-text p').removeEventListener('transitionend', this.explodeLoginParticles)
			document.querySelector('#my-name p').removeEventListener('transitionend', this.explodeNameParticles)
			this.fingerPrintResetAnimation.to('#demo__elastic-path', 0.1, {morphSVG: '#elastic-starting'}).eventCallback('onComplete', ()=> {
				console.log('wtf, c allback on the reset though');
				this.fingerPrintResetAnimation = null
			});
			let collection = document.querySelectorAll('#login-particle-container .particle')
			for (let el of collection) {
				console.log('particles/?', el);
				el.classList.remove('explode');
			}
			let collection2 = document.querySelectorAll('#name-particle-container .particle')
			for (let el of collection2) {
				el.classList.remove('explode');
			}
			document.querySelector('#login-text p').classList.remove('hidden')
			document.querySelector('#my-name p').classList.remove('hidden')
			document.getElementById('starting-fprint').style.visibility = 'initial';
			document.getElementById('graph').remove();
			document.getElementById('dot').classList.remove('in-view');
			document.getElementById('demo__elastic-path').classList.remove('solid-stroke');
			document.getElementById('dot').classList.remove('land-on-line');
			document.getElementById('dot').classList.remove('follow-line-bend');
			document.getElementById('login-particle-container').style.visibility = 'hidden';
			document.getElementById('name-particle-container').style.visibility = 'hidden';
			document.getElementById('dot').style = null;
			document.removeEventListener('click', this.reset)
			setTimeout(()=>{
				document.addEventListener('mouseup', this.setFillDirection)
				document.addEventListener('mousedown', this.tirggerFillForwards)
				this.createGraphLine();
				this.setFingerPrintStartingState();
			},1000)
		}
	}
};
</script>
<style lang='scss'>

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
$font: Muli, sans-serif;

 @mixin particle() {
	width: 3px;
	height: 3px;
	border-radius: 50%;
	opacity: 1;
	transition: all 2.5s ease;
	position: absolute;
	top: 50%;

	@for $i from 1 through 30 {
		&:nth-child(#{$i}) {
			left: random(80) + 7 + %;
			@if random(100) > 50 {
				background-color: limegreen;
			}
			@else {
				background-color: #7885ff;
			}
		}
		&.explode:nth-child(#{$i}) {
			$upDown: 0;
			@if random(100) > 50 {
				$upDown: -1;
			}
			@else {
				$upDown: 1;
			}
			transform: translate3d((random(110) - 55) * 1 + px, (random(35) * $upDown) + px, 0);
			opacity: 0;
		}
	}
 }


#keyframe-example-three {
	padding: 0;
	display: flex;
    flex-wrap: wrap;
	align-content: flex-start;
    .text-container {
       // visibility: hidden;
	    z-index: 10;
    	color: white;
    	display: flex;
      	flex-basis: 400px;//0%;
      	#my-name {
        	margin: 20px auto 90px auto;
        	color: white;
        	font-family: $font;
    	    font-size: 16px;
	        z-index: 100;
			position: relative;
			p {
				visibility: visible;
				transition: all 0s linear;
				transition-delay: 0.35s;
				&.hidden {
					visibility: hidden;
				}
			}
			#name-particle-container {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				visibility: hidden;
				.particle {
					@include particle();
				}
			}
      	}
      	#login-text {
        	margin: 20px auto 10px auto;
        	color: white;
        	font-family: $font;
        	font-size: 16px;
        	z-index: 100;
			position: relative;
			p {
				visibility: visible;
				transition: all 0s linear;
				transition-delay: 0.2s;
				&.hidden {
					visibility: hidden;
				}
			}
			#login-particle-container {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				visibility: hidden;
				.particle {
					@include particle();
				}
			}			
		}
    }
  
  .svg-element {
    // visibility:hidden;
    z-index: 1;
    background-color: #003a52;
    border:1px solid white;
    width: 400px;
    height: 400px;
    overflow: hidden;
    position:absolute;
    #starting-fprint {
      .fprint-path {
        stroke-width: 2.5px;
        stroke-linecap: round;
        fill: none;
        stroke: white;
        transition: opacity 0.5s ease;
        will-change: stroke-dashoffset, stroke-dasharray;
        transform: translateZ(0) translate(5 0);
      }
    }
    #fill-fprint {
      .fprint-path {
        stroke-width: 2.5px;
        stroke-linecap: round;
        fill: none;
        stroke: white;
        transition: opacity 0.5s ease;
        will-change: stroke-dashoffset, stroke-dasharray;
        transform: translateZ(0) translate(5 0);
      }
      .ending-path {
        fill: none;
        stroke-width: 2.5px;
        stroke: gray;
        stroke-linecap: round;
        will-change: stroke-dashoffset, stroke-dasharray, opacity;
        transform: translateZ(0);
      }
      .solid-stroke {
        stroke-dashoffset: 0;
        stroke-dasharray: none !important;
      }
      .fprint-path, .ending-path {
        stroke: limegreen;
        &.light-purple {
          stroke: #7885ff;
        }
      }
    }
    
    .hidden-path {
      visibility:hidden;
      stroke-linecap: round;
      stroke-width: 2.5px;
      fill: none;
      stroke: white;
    }
    #graph-line {
    //   visibility: none;
      fill: none;
      stroke: #00ffd7;
      stroke-width: 3;
    }
	#graph-line-gradient {
		fill: url("#blue-gradient");
		stroke: none;
		transition: opacity 0.25s linear;
		opacity: 0;
		&.in-view {
			opacity: 1;
		}
	}
    #graph-dot {
      fill: #fff;
      stroke: #fff;
    }
    #dot {
		opacity: 0;
		fill: white;
		stroke: rgba(255,255,255,0.5);
		stroke-width: 4px;
		transform: translateY(250px);
		transition: opacity 1s, transform 1.2s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		animation-delay: 0s;
		--graphLineCenterY: 0px;
	  	@keyframes dotAnimation-slideUp {
			0% { transform: translateY(250px); opacity: 0; }
			15% { opacity: 1; }
		  	30% { opacity: 1; transform: translateY(-20px); }
			70% { opacity: 1; transform: translateY(-20px); }
			100% {
				opacity: 1;
				transform: translateY(200px);
			}
	  	}
		@keyframes dotAnimation-followLineBend {
			0% {
				opacity: 1;
				transform: translateY(200px);
			}
			100% {
				transform: translateY(var(--graphLineCenterY));
				opacity: 1;
			}
		}
		&.slide-up-down-animation {
			animation-duration: 2s;
			animation-name: dotAnimation-slideUp;
		}
		&.follow-line-bend {
			animation-duration: 0.5s;
			animation-name: dotAnimation-followLineBend;
		}
    }
  }
}

</style>
