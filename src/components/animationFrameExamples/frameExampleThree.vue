<template>
	<div class="animation-example-frame" id="request-animation-frame-example-three" ref="container-frame">
		<span class="title">Request Animation Frame <br> Example Three</span>
		<div id="my-name" ref='my-name' v-if="shouldRenderElements">
			<p ref="name-text">Jordan Klaers</p>
			<div id="name-particle-container" ref="name-particle-container">
				<div class="particle" ref="name-particle" v-for="(val, index) in 30" :key="index"></div>
			</div>
		</div>
		<div id="login-text" ref='login-text' v-if="shouldRenderElements">
			<p ref="login-text">Login with FingerPrint ID</p>
			<div id="login-particle-container" ref="login-particle-container">
				<div class="particle" ref="login-particle" v-for="(val, index) in 30" :key="index"></div>
			</div>
		</div>
		<div id="month-container" ref='month-container' v-if="shouldRenderElements">
			<div v-for="(number, index) in 5" ref="month-dot" :key="`month-${number}`" class="month-dot">
				<div v-if="index === 2" id="month-text">{{month}}</div>
			</div>
		</div>
		<div id="day-container" ref='day-container' v-if="shouldRenderElements">
			<div v-for="(dayNumber, index) in day" ref="day-dot" :key="dayNumber" class="day-dot">
				{{index !== 3 ? dayNumber : ''}}
				<div v-if="index === 3" id="day-text">{{dayNumber}}</div>
			</div>
		</div>
		<button @click="reset" v-if="shouldRenderElements" ref="reset-button" class="top-right-aligned">reset</button>
		<!-- <div id="reset" ref="reset-button"  v-on:click="reset"></div> -->
		<svg viewBox="0 0 400 400">
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
			<g id="starting-fprint" ref="starting-finger-print" transform="translate(110,50)">
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
				<path class="fprint-path light-purple" :id="`elastic-path-${_uid}`" ref="elastic-path" d="M67.3,219C65,188.1,78,180.1,92.7,180.3c18.3,2,23.7,18.3,20,46.7"/>
				<path class="ending-path" d="M48.4,220c-5.8,4.2-6.9,11.5-7.6,18.1c-0.8,6.7-0.9,14.9-9.9,12.4c-9.1-2.5-14.7-5.4-19.9-13.4c-3.4-5.2-0.4-12.3,2.3-17.2c3.2-5.9,6.8-13,14.5-11.6c3.5,0.6,7.7,3.4,4.5,7.1"/>
				<path class="ending-path light-purple" d="M57.3,235.2c-14.4,9.4-10.3,19.4-17.8,21.1c-5.5,1.3-8.4-7.8-13.8-4.2c-2.6,1.7-5.7,7.7-4.6,10.9c0.7,2,4.1,2,5.8,2.4c3,0.7,8.4,3,7.6,7.2c-0.6,3-5,5.3-2.4,8.7c1.8,2.2,4.7,1.1,6.9,0.3c11.7-4.3,14.5,0.8,16.5,0.9"/>
				<path class="ending-path" d="M79,246c-1.8,2.4-4.9,2.9-7.6,3.2c-2.7,0.3-5.8-0.8-7.7,1.6c-2.9,3.3,0.7,8.2-1.2,12c-1.5,2.8-4.5,2.4-6.9,1.3c-10.1-4.7-33.2-17.5-38.1-2.5c-1.1,3.4-1.9,7.5-1.3,11c0.6,4,5.6,7.9,7.7,2.3c0.8-2.1,3.1-8.6-1-8.9"/>
				<path class="ending-path light-purple" d="M91.8,248c0,0-3.9,6.4-6.2,9.2c-3.8,4.5-7.9,8.9-11.2,13.8c-1.9,2.8-4.4,6.4-3.7,10c0.9,5.2,4.7,12.5,9.7,14.7c5.2,2.2,15.9-4.7,13.1-10.8c-1.4-3-6.3-7.9-10-7.2c-1,0.2-1.8,1-2,2"/>
				<path class="ending-path light-purple" d="M114.8,239.4c-2.7,6.1-8.3,12.8-7.8,19.8c0.3,4.6,3.8,7.4,7.8,9.1c8.9,3.8,19.7,0.4,28.6-1.3c8.8-1.7,19.7-3.2,23.7,6.7c2.8,6.8,6.1,14.7,4.4,22.2"/>
				<path class="ending-path" transform="translate(3, 4)" d="M129.9,224.2c-0.4,7.5-3.1,18,0.7,25c2.8,5.1,14.3,6.3,19.5,7.4c3.7,0.7,8.7,2.2,12-0.5c6.7-5.4,11.1-13.7,14.1-21.6c3.1-8-4.4-12.8-11.1-14.5c-5-1.3-19.1-0.7-21-6.7c-0.9-2.8,1.8-5.9,3.4-7.9"/>
				<circle cx="90" cy="0" r="6" id="dot" ref="main-dot" v-if="shouldRenderElements"></circle>

			</g>
			<path class="hidden-path" id='arc-to-top' transform="translate(110 50)" d="M-110,150c150-20.5,200-20.5,400,0"/>
			<path class="hidden-path" id='arc-to-bottom' transform="translate(110 50)" d="M-110,150c150+20.5,200+20.5,400,0"/>
			<line id='straight-path' x1="-110" y1="150" x2="300" y2="150" transform="translate(100 50)"/>  
		</svg>
	</div>
</template>

<script>
import * as d3 from 'd3';
import {TweenMax, TimelineLite} from "scripts/gsap";
import morphSVG from "scripts/gsap/morphSVGPlugin";

export default {
	name: 'RequestAnimationFrameExampleThree',
	data() {
		return {
			shouldRenderElements: true,
			fingerPrintPaths: [],
			fingerPrintEndingPaths: [],
			fingerPrintPathIncrement: this.getPropertyIncrement(0, 1, 500),
			removeFingerPrintPathIncrement: this.getPropertyIncrement(0, 1, 100),
			removeFingerPrintEndingPathIncrement: this.getPropertyIncrement(0, 1, 200),
			fingerPrintOffSetRatio: 1,
			fingerPrintEndingPathOffSetRatio: 0,
			fillDirection: 'forwards',
			previousRAFTimeStamp: 0 ,
			fingerPrintToStraightLineAnimation: null,
			fingerPrintToGraphLineAnimation: null,
			fingerPrintResetAnimation: null,
			elements: {
				graphLineGradient: null,
				loginParticleContainer: null,
				nameParticlecontainer: null,
				loginParticles: null,
				nameParticles: null,
				elasticPath: null,
				fingerPrintGroup: null,
				endingPathsGroup: null,
				dot: null,
				dayDots: null,
				monthDots: null,
				loginText: null,
				nameText: null,
				nameContainer: null,
				loginContainer: null,
				graphLine: null,
				startingFingerPrint: null,
				dayContainer: null,
				monthContainer: null
			}
		}
	},
	mounted() {
		//fallback for request animation fram
		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(cb) {
    			setTimeout(() => cb(new Date()), 1000 / 60);
  			}
		}

		this.setElementsVariables()

		//setting the values of the fingerprint paths once in mounted, as doing it each time the animaiton is reset, 
		//would cause the path length of the fingerprint path that morphs into the graph line to have its length = to the graph line, not the original length
		this.elements.fingerPrintGroup.forEach(path => {
			let pathLength = path.getTotalLength();
			this.fingerPrintPaths.push({
				path,
				pathLength,
				removeDirection: path.classList.contains('remove-backwards') ? -1 : 1
			})
		})
		this.elements.endingPathsGroup.forEach(path => {
			let pathLength = path.getTotalLength();
			const dashLength = pathLength * 0.22;
			this.fingerPrintEndingPaths.push({
				path,
				pathLength,
				dashLength
			})
		})

		this.createGraphLine()
		this.setFingerPrintStartingState()
		// these event listeners handle filling the fingerprint
		this.$refs['container-frame'].addEventListener('mousedown', this.triggerFillForwards)
		//releasing the mouse changes the direction of the fill
		this.$refs['container-frame'].addEventListener('mouseup', this.setFillDirection)
	},
	computed: {
		//day returns an array of the current day as well as two before and two after to be displayed in the html
		day() {
			let days = []
			for (let i = -3; i < 4; i ++) {
				let date = new Date()
				date.setDate(date.getDate() + i)
				days.push(date.getDate())
			}
			return days
		},
		//month returns the month as text to be displayed in the html
		month() {
			const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			return monthNames[new Date().getMonth()];
		}
	},
	methods: {
		setElementsVariables() {
			const els = this.elements
			//graphLineGradient is set when the graph is created in this.createGraphLine()
			this.elements.loginParticleContainer = this.$refs['login-particle-container']
			this.elements.nameParticlecontainer = this.$refs['name-particle-container']
			this.elements.loginParticles = this.$refs['login-particle']
			this.elements.nameParticles = this.$refs['name-particle']
			els.elasticPath = this.$refs['elastic-path']
			els.fingerPrintGroup = [].slice.call(document.querySelectorAll('#fill-fprint .fprint-path'))
			els.endingPathsGroup = [].slice.call(document.querySelectorAll('#fill-fprint .ending-path'))
			//dot the main anumation dot is set in this.createGraphLine()
			this.elements.dayDots = this.$refs['day-dot']
			this.elements.monthDots = this.$refs['month-dot']
			this.elements.loginText = this.$refs['login-text']
			this.elements.nameText = this.$refs['name-text']
			els.nameContainer = this.$refs['my-name']
			els.loginContainer = this.$refs['login-text']
			//graphLine is set in this.createGraphLine()
			els.startingFingerPrint = this.$refs['starting-finger-print']
			els.dayContainer = this.$refs['day-container']
			els.monthContainer = this.$refs['month-container']
		},
		createGraphLine() {
			var width = 400; //should match the width and height of the SVG
			var height = 400;
			var n = 7;
			//hardcoded from the transforms used in the svg  G elements
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
			//d3.randomUniform(0.4) can be thought of as "return a number between 0 and 0.4" which is relative to the height of the SVG. 
			//That leaves 60% of the height of the svg where a value would NOT full in. 
			//Add 0.2 to the value so that 20% of the space is below the graph line and 40% above
			var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(0.4)() + 0.2 } })
			//force the first and last value to align vertically with the center of the SVG height
			dataset[0].y = 0.5
			dataset[n-1].y = 0.5

			//creates the graph line that the line in the finger print will morph into
			d3.select("svg #fill-fprint").insert('path', '#fill-fprint path:last-of-type')
				.datum(dataset) // 10. Binds data to the line 
				.attr("id", `graph-line-${this._uid}`)
				.attr('class', 'graph-line') // Assign a class for styling 
				.attr("d", line) // 11. Calls the line generator 
				.style('visibility', 'hidden')

			//creates a duplicate of the graph line which will have its path updates so that it can be filled with a gradient
			var graphLineGradient = d3.select("#fill-fprint").append("path")
				.datum(dataset) // 10. Binds data to the line 
				.attr("id", `graph-line-gradient-${this._uid}`) 
				.attr('class', 'graph-line-gradient')// Assign a class for styling 
				.attr("d", line) // 11. Calls the line generator 
				.attr("stroke", "url(#blue-gradient)")
				.lower()


			this.elements.dot = this.$refs['main-dot']
			this.elements.graphLineGradient = document.getElementById(`graph-line-gradient-${this._uid}`)
			this.elements.graphLine = document.getElementById(`graph-line-${this._uid}`)
			//updates the path for the duplicate graphline which will have its fill updated with a gradient
			var newDAttribute = `${this.elements.graphLineGradient.getAttribute('d')} L290 360 L-110 360`
			this.elements.graphLineGradient.setAttribute("d", newDAttribute)

			//saves the center values from the graph line to save its value into a CSS variable used in the animation "dotAnimation-followLineBend" so that the animated dot moves the the Y value of the graph line
			var dot = dataset[3];
			this.elements.dot.style.setProperty('--graphLineCenterY', `${yScale(dot.y)}px`);

		},
		setFingerPrintStartingState() {
			this.fingerPrintPaths.forEach(obj => {
				//create strokedash array on each path
				obj.path.style.strokeDasharray = `${obj.pathLength} ${obj.pathLength}`;
				//set offset of dashes for each path for inital state, so that the dashes are not seen
				obj.path.style.strokeDashoffset = obj.pathLength * this.fingerPrintOffSetRatio;
			})
			this.fingerPrintEndingPaths.forEach(obj => {
				//dashes are the same length of the path, with a sapce inbetween each dash just a bit greater than the length of the path
				obj.path.style.strokeDasharray = `${obj.dashLength} ${obj.pathLength + 3}`;
				//offset so the dashes are not visiblie
				obj.path.style.strokeDashoffset = -obj.pathLength;
			})
		},
		setFillDirection() {
			this.fillDirection = 'backwards';
		},
		getPropertyIncrement(startValue, endValue, duration) {
			const TICK_TIME = 1000 / 60; //to achieve 60fps, 1 frame needs to render every 16ms
			const ticksToComplete = duration / TICK_TIME;
			return  (endValue - startValue) / ticksToComplete; //return the value that will be incremented each tick of the animation
		},
		fillFingerPrint(timestamp) {
			//if the amount of time passed is graeter than the desired frame rate, execute the logic for one frame of the animation
			if (timestamp - this.previousRAFTimeStamp > 1000/60) {
				//update the timestamp for the next loop
				this.previousRAFTimeStamp = timestamp;
				//if we are filling the fingerprint, update the offsetRatio by an increment by one tick. The tick is based on the number of times needed to increment from 0 to 1 (or 0% to 100%) over a given time.
				// the increment value is set in the vue data attribute using this.getPropertyIncrement();
				if (this.fillDirection === 'forwards') {
					if (this.fingerPrintOffSetRatio > 0) this.fingerPrintOffSetRatio =  this.fingerPrintOffSetRatio + (this.fingerPrintPathIncrement * -1);
					else {
						this.fingerPrintOffSetRatio = 0;
					}
				}
				//if the fingerprint was not fully filled in, and the mouse was released, not we decrease be the tick amount, same as above
				if (this.fillDirection === 'backwards') {
					if (this.fingerPrintOffSetRatio < 1) this.fingerPrintOffSetRatio =  this.fingerPrintOffSetRatio + this.fingerPrintPathIncrement;
					else this.fingerPrintOffSetRatio = 1;
				}
				//update the offset value of each finger print path based on the updated ratio (0% to 100%)
				this.fingerPrintPaths.forEach(pathObj => {
					pathObj.path.style.strokeDashoffset = pathObj.pathLength * this.fingerPrintOffSetRatio;
				});
			}
			//if the ratio has not reached 0% (fully filled in finger print) and greater then 1 (the starting state, not filled in), than continue to call this function to updated the paths offset values
			if (this.fingerPrintOffSetRatio !== 0 && this.fingerPrintOffSetRatio < 1) {
				window.requestAnimationFrame(this.fillFingerPrint);
			//when this.fingerPrintOffSetRatio is 0 the paths have been filled
			} else if (this.fingerPrintOffSetRatio === 0) {
				//the finger print is fully filled in

				//remove the event listeners that trigger the fill animation as it has compelted
				this.$refs['container-frame'].removeEventListener('mousedown', this.triggerFillForwards)
				this.$refs['container-frame'].removeEventListener('mouseup', this.setFillDirection)

				//right when the fingerprint has been filled, the main dot animation is applied
				//slide-up-down-animation will bring the dot into view, moving it off the screen at the top, then move back down to land on the line.
				this.elements.dot.classList.add('slide-up-down-animation');

				// the month dots/text displayed at the top (persistent at the end of the animation) will come into view in the middle of the dot animation.
				//their animation is applied now (when the finger print has been filled) with an delay so that as the main dot slide down to land on the line, the month dots seem to begin their animation right as the main dot slides down past their location
				this.animateMonthDots();
	
				//the main dot animation is split in two parts. 
				//This event listener is added so that when the dot lands on the line, the animation to morph that line further, into the graph line
				//and the animation to continue moving the dot to the Y value of the center position of the line happen at the same time
				this.elements.dot.addEventListener('animationend', this.finishMovingDotAndLineToGraphAnimation)

				//a transition delay on these elements (the name test and login text) allows the text to dissappear right when the dot crosses the text as its moving up
				//the name and login text have a slightly different delay as the dot crosses the text at different times
				//the hidden class is a default of visibility: hidden !important
				this.elements.loginText.classList.add('hidden')
				this.elements.nameText.classList.add('hidden')

				//right when the text is hidden is when the particles should explode
				//an event listener for the animation fo hidding the text is added to trigger the particle explosion animation. 
				this.elements.loginText.addEventListener('transitionend', this.explodeLoginParticles)
				this.elements.nameText.addEventListener('transitionend', this.explodeNameParticles)

				//when the finger print has filled, the animation to morph one of the finger print paths begins.
				this.transformFingerPrintLine();
				//there is a duplicate of the finger print where all the paths are white. This is removed instantly when the fingerprint has filled, as part of the visual effect when the finger print paths are removed
				this.elements.startingFingerPrint.classList.add('hidden');
				window.requestAnimationFrame(this.removeFingerPrintPaths);
			}
		},
		removeFingerPrintPaths(timestamp) {
			//this function is called right when the finger print paths have filled. This animation using Request Animation Frame is being called during the same time that the main dot is animating Up then down onto the line.
			// during the same time that the finger print paths is morphing into the horizontal line

			//if the amount of time passed is graeter than the desired frame rate, execute the logic for one frame of the animation
			if (timestamp - this.previousRAFTimeStamp > 1000/60) {
				this.previousRAFTimeStamp = timestamp;

				//offsetting the paths dasharry by 1 (this.fingerPrintOffSetRatio) * the paths length,  causes the empty space between the dashes to be whats shown
				//continure increasing the offset value (percentage) by the defined increment.
				//The amount to increment bu is set with this.getPropertyIncrement()
				if (this.fingerPrintOffSetRatio < 1) this.fingerPrintOffSetRatio += this.removeFingerPrintPathIncrement;
				else this.fingerPrintOffSetRatio = 1;

				//If removing the finger print dashes are more than 45% removed, begin incrementing the value used the remove the ending paths (the hidden paths that produces the scatter affect on a few finger print paths in the removal animation)
				if (this.fingerPrintOffSetRatio > 0.45) {
					//same concept for the scattered ending finger print paths
					if (this.fingerPrintEndingPathOffSetRatio < 1) this.fingerPrintEndingPathOffSetRatio += this.removeFingerPrintEndingPathIncrement;
					else this.fingerPrintEndingPathOffSetRatio = 1;
				}
				//update the offset of the finger print paths as well as the scattered/ending finger print paths
				this.fingerPrintPaths.forEach(pathObj => {
					//an offset of 1 * the path length would result in the space between the dashes being shown
					//the remove direction controlls the direction that the dash array moves
					pathObj.path.style.strokeDashoffset = pathObj.pathLength * (this.fingerPrintOffSetRatio *  pathObj.removeDirection);
				});
				this.fingerPrintEndingPaths.forEach(pathObj => {
					//the dash length is not equal to the path length, so offsetting by a percentage of the path length is not enough.
					//this calculation offsets by both the pathLength and dash length so that if moves from the left end of the dash on the right of the path
					//(dash not visible on the right side) to the right end of the dash on the left of the path length. (dash not visible on the left side of the path)
					pathObj.path.style.strokeDashoffset = -pathObj.pathLength * (this.fingerPrintEndingPathOffSetRatio) + (pathObj.dashLength * Math.abs(this.fingerPrintEndingPathOffSetRatio - 1));
				});
			}
			//continue calling untill both the finger print, and the scatter/ending paths dash array have been removed (the empty space between the dash is whats "visible" on the paths)
			if (this.fingerPrintOffSetRatio !== 1 || this.fingerPrintEndingPathOffSetRatio !== 1) {
				window.requestAnimationFrame(this.removeFingerPrintPaths);
			}
		},
		animateMonthDots() {
			for (let el of this.elements.monthDots) {
				//the month dots at the top have a different transition time for the opacity property as well as the transform property to produce the spreading affect when they come into view
				el.classList.add('animate')
			}
		},
		explodeLoginParticles() {	
			//the container is initall hidden, to hide the dots as the start full visible.
			this.elements.loginParticleContainer.classList.add('visible');
			for (let el of this.elements.loginParticles) {
				//adds the explode class which applies the 3d transform to move the dots, and fade them out
				el.classList.add('explode');
			}
		},
		explodeNameParticles() {
			//the container is initall hidden, to hide the dots as the start full visible.
			this.elements.nameParticlecontainer.classList.add('visible');
			for (let el of this.elements.nameParticles) {
				//adds the explode class which applies the 3d transform to move the dots, and fade them out
				el.classList.add('explode');
			}
		},
		transformFingerPrintLine() {
			//adds a solid stroke the the finger print path that gets morphed.
			//the reason is that the length of the path changes in the morph and the dash array would  be seen on the updated path
			this.elements.elasticPath.classList.add('solid-stroke');
			//saving the animation to a variable so it can be cleared
			this.fingerPrintToStraightLineAnimation = new TimelineLite();
			//uses morphSVG from greenstock animation platform to morph the SVG path
			//the target is the element with the id '#elastic-path'
			//morph to the element with the id '#arc-to-top' over 0.3 seconds with no delay, then morph to the straight horizontal path over 1 second with no delay, with a timing funciton to make it "bounce"
			this.fingerPrintToStraightLineAnimation.to(`#elastic-path-${this._uid}`, 0.3, {
				delay: 0,
				morphSVG: '#arc-to-top',
			}).to(`#elastic-path-${this._uid}`, 1, {
				morphSVG: '#straight-path',
				ease: Elastic.easeOut.config(1.5, 0.3)
			})
		},
		finishMovingDotAndLineToGraphAnimation() {
			this.elements.dot.removeEventListener('transitionend', this.finishMovingDotAndLineToGraphAnimation)
			this.elements.dot.removeEventListener('animationend', this.finishMovingDotAndLineToGraphAnimation)

			//when the dot lands on the horizontal line, begin the aniamtion to have the day dots/text at the bottom 
			this.animateDayDots()
			//save the morphSVG animation to a timeline so it can be cleared
			this.fingerPrintToGraphLineAnimation = new TimelineLite();
			//at the same time the line (that was once a finger print path) morphs from the horizontal line to the graph line,
			//then the main dot should also move the Y value of the center of the graph line.
			//both the morph and second half of the dot animation happen at the same speed (same animation length of time) to make it appear that the dot is "attached" on the line
			this.elements.dot.classList.add('follow-line-bend');
			this.fingerPrintToGraphLineAnimation.to(`#elastic-path-${this._uid}`, 0.5, {
				delay: 0,
				morphSVG: `#graph-line-${this._uid}`,
				ease: Power0.easeNone
			}).eventCallback('onComplete', ()=> {
				//when the morph has completed hide the elastic path and show the graph line path. They should technically be in the exact same position and the exact same path but sometimes the end result
				//of the morph does not match and preduces a visual error
				this.elements.elasticPath.classList.add('hidden')
				this.elements.graphLine.classList.add('visible')
				//at this time, trigger the animation for the gradient below the graph line to fade into view
				this.elements.graphLineGradient.classList.add('in-view');
				this.$refs['reset-button'].classList.add('animate');
			});
		},
		animateDayDots() {
			for (let el of this.elements.dayDots) {
				el.classList.add('animate')
			}
		},
		triggerFillForwards() {
			this.fillDirection = 'forwards';
			if (this.fingerPrintOffSetRatio !== 0) window.requestAnimationFrame(this.fillFingerPrint);
		},
		reset() {
			//resets variables to initial state for all animations
			this.fingerPrintToStraightLineAnimation = null;
			this.fingerPrintToGraphLineAnimation = null;
			this.fingerPrintOffSetRatio = 1;
			this.fingerPrintEndingPathOffSetRatio = 0;
			this.fillDirection = 'forwards';
			this.previousRAFTimeStamp = 0;
			
			//removes eventlisteners so that we can removes css properties without triggering callbacks
			this.elements.loginText.removeEventListener('transitionend', this.explodeLoginParticles)
			this.elements.nameText.removeEventListener('transitionend', this.explodeNameParticles)

			//creates and  calls animation to reset the finger print line
			this.fingerPrintResetAnimation = new TimelineLite();
			this.fingerPrintResetAnimation.to(`#elastic-path-${this._uid}`, 0, {morphSVG: '#elastic-starting'}).eventCallback('onComplete', ()=> {
				this.fingerPrintResetAnimation = null
			});
			//removes the graph line as it gets created from this.createGraphLine()
			this.elements.graphLine.parentNode.removeChild(this.elements.graphLine);
			//removes the graph line gradient as it gets created from this.createGraphLine()
			document.getElementById('fill-fprint').removeChild(this.elements.graphLineGradient)

			this.elements.startingFingerPrint.classList.remove('hidden')		
			this.elements.elasticPath.classList.remove('solid-stroke')

			// document.getElementById('fill-fprint').removeChild(this.elements.dot)
			this.elements.elasticPath.classList.remove('hidden')


			this.shouldRenderElements = false
			this.$nextTick(()=> {
				this.shouldRenderElements = true
				this.$nextTick(()=> {
					//resetting the element variables after toggeling the shouldRenderElements variable becausae that causes the elements to be recreated in the dom so the reference needs to be updated (despite haveing the same ref)
					this.setElementsVariables()
					//re-add the  event listeners for the container to trigger the animation
					this.createGraphLine()
					this.setFingerPrintStartingState()
					this.$refs['container-frame'].addEventListener('mousedown', this.triggerFillForwards)
					this.$refs['container-frame'].addEventListener('mouseup', this.setFillDirection)
				})
			})
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
	//when this mixin is used, the element(s) of the selector its added to gain these properties
	//which produces a small dot
	width: 3px;
	height: 3px;
	border-radius: 50%;
	opacity: 1;
	transition: all 1.5s ease;
	position: absolute;
	top: 50%;

	@for $i from 1 through 30 {
		&:nth-child(#{$i}) {
			//within the parent container (which is the particle container) the dots are randomly positioned within the middle 80% of the parent container
			left: random(80) + 10 + %;
			//randomly set with a 50% change to be green or purple
			@if random(100) > 50 {
				background-color: limegreen;
			}
			@else {
				background-color: #7885ff;
			}
		}
		//when the explode class is added to the same element that matches the selctor that the mixin is used on, these properties will be applied
		&.explode:nth-child(#{$i}) {
			$upDown: 0;
			//set value with 50% for wether or not the dot move up or down
			@if random(100) > 50 {
				$upDown: -1;
			}
			@else {
				$upDown: 1;
			}
			//translate the dot X value bweteen -55 to 55 and the Y value between -35 and 35, and Z value does not change
			transform: translate3d((random(110) - 55) * 1 + px, (random(35) * $upDown) + px, 0);
			opacity: 0;
		}
	}
}

@keyframes reset-button-enter {
	//this animation rotats the reset button around the bottom right corner as it comes into view
	0% { transform: rotateZ(270deg) translateY(-11px); opacity: 0; }
	20% { transform: rotateZ(270deg) translateY(0px); }
	46% { transform: rotateZ(180deg); opacity: 0.2;}
	72% { transform: rotateZ(90deg); }
	90% { opacity: 0.7; }
	99% {
		transform: rotateZ(0deg);
	}
	100% {
		opacity: 1;
	}
}

#request-animation-frame-example-three {
	.title {
		margin-left: 0px;
	}
	.top-right-aligned {
		//for the reset button
		//sets the origin just a bit greater than the bottom right corner for the animation
		transform-origin: 85px 33px;
		visibility: hidden;
		&.animate {
			visibility: visible;
			animation-iteration-count: 1;
			animation-direction: normal;
			animation-fill-mode: forwards;
			animation-timing-function: linear;
			animation-delay: 0s;
			animation-duration: 0.5s;
			animation-name:	reset-button-enter;
		}
	}
	//there is a translation applied on the svg G elements that needs to be accounted for in some positioning values.
	//saving those values as variables to use in calculations
	$finger-print-group-Y-translate: -50;
	$finger-print-group-X-translate: -110;
	padding: 0;
	position: relative;
	//default hidden class can be applied to any element to hide it
	.hidden {
		visibility: hidden !important;
	}
	//default visiblity class can be applied to any element to hide it
	.visible {
		visibility: visible !important;
	}
	//the month container has the text of the month and the 5 dots
	#month-container {
		top: 15px;
		position: absolute;
		//the left and transform are a techinque for centering an element horizontally. flex with maring auto woudl be an alternative but is not preferred.
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
		//this variable is used to calculate how far the dots are transformed on the X axis
		$month-container-width: 150px;
		.month-dot {
			height: 1px;
			width: 1px;
			border: 2px solid white;
			border-radius: 50%;
			position: absolute;
			opacity: 0;
			//this vertically centers the dots
			transform: translateY(-50%);
			//the opacity and transform have different animation times but the same delay.
			//the delay is 1.1 seconds so that the animation being at the point when the main animated dot crosses the Y value of the location of these elements
			transition: opacity 0.3s 1.1s, transform 1s 1.1s;

			user-select: none;
			//the center dot has a hollow center
			&:nth-of-type(3) { width: 10px; height: 10px; }

			&.animate {
				&:nth-of-type(1) { transform: translateX($month-container-width * -0.5); opacity: 0.6; }
				&:nth-of-type(2) { transform: translateX($month-container-width * -0.25); opacity: 0.75; }
				&:nth-of-type(3) { width: 10px; height: 10px; opacity: 1; }
				&:nth-of-type(4) { transform: translateX($month-container-width * 0.25); opacity: 0.75; }
				&:nth-of-type(5) { transform: translateX($month-container-width * 0.5); opacity: 0.6; }
			}
			// the month text is positioned in the center below the cente dot
			#month-text {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				color: white;
				top: 10px;
			}
		}
	}
	#day-container {
		position: absolute;
		bottom: 35px;
		//the left and transform are a techinque for centering an element horizontally. flex with maring auto woudl be an alternative but is not preferred.
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
		//this variable is used to calculate how far the dots are transformed on the X axis
		$day-container-width: 130px;
		.day-dot {
			$dot-dim: 25px;
			position: absolute;
			height: $dot-dim;
			width: $dot-dim;
			font-size: 12px;
			line-height: $dot-dim;
			color: white;
			text-align: center;
			opacity: 0;
			transition: opacity 0.3s 0s, transform 0.85s 0s;
			//prevents the dots from being highlighted due to the click+hold event listener
			user-select: none;

			&.animate {
				//translate all 99% of the way to the left and center itself
				&:nth-of-type(1) { transform: translateX(($day-container-width * -0.99) - ($dot-dim/2)); opacity: 1; }
				//translate all 66% of the way to the left and center itself
				&:nth-of-type(2) { transform: translateX(($day-container-width * -0.66) - ($dot-dim/2)); opacity: 1; }
				//translate all 33% of the way to the left and center itself
				&:nth-of-type(3) { transform: translateX(($day-container-width * -0.33) - ($dot-dim/2)); opacity: 1; }
				&:nth-of-type(4) {
					transform: translateX(-$dot-dim/2);
					//the center dot hase a border radius and is center positioned
					border: 2px solid white;
					border-radius: 50%;
					opacity: 1;
					//line height equal to the div height minus the border-top + border-bottom value to center position the text
					line-height: $dot-dim - 4;
				}
				&:nth-of-type(5) { transform: translateX(($day-container-width * 0.33) - ($dot-dim/2)); opacity: 1; }
				&:nth-of-type(6) { transform: translateX(($day-container-width * 0.66) - ($dot-dim/2)); opacity: 1; }
				&:nth-of-type(7) { transform: translateX(($day-container-width * 0.99) - ($dot-dim/2)); opacity: 1; }
			}
				
		}
	}
	#my-name {
		color: white;
		font-family: $font;
		font-size: 16px;
		z-index: 100;
		position: absolute;
		top: 15px;
		//center positioning technique
		left: 50%;
		transform: translateX(-50%);
		p {
			visibility: visible;
			//this transition property exists because when the hidden class is applied, there is a delay so that it becomes hidden at the moment the main animation dot crosses the text as it moves upwards
			//the javascript callback for the completion of this animation also triggers the login particle animation, by adding the .explode call in the callback as well as making the particle container visible
			transition: all 0s linear;
			transition-delay: 0.25s;
		}
		#name-particle-container {
			position: absolute;
			//the container that holds the particles is equal in size to the text so that the particles positionings are relative to the dimensions of the text they appear to be exploding from
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
		color: white;
		font-family: $font;
		font-size: 16px;
		z-index: 100;
		position: absolute;
		top: 130px;
		left: 50%;
		height: 50px;
		transform: translateX(-50%);
		p {
			//this transition property exists because when the hidden class is applied, there is a delay so that it becomes hidden at the moment the main animation dot crosses the text as it moves upwards
			//this delay is less than the name text transition delay because this text is lower/ the main animation dot crosses it first
			//the javascript callback for the completion of this animation also triggers the login particle animation, by adding the .explode call in the callback as well as making the particle container visible
			transition: all 0s linear;
			transition-delay: 0.2s;
		}
		#login-particle-container {
			position: absolute;
			//the container that holds the particles is equal in size to the text so that the particles positionings are relative to the dimensions of the text they appear to be exploding from
			width: 100%;
			height: 100%;
			top: 0;
			visibility: hidden;
			.particle {
				@include particle();
			}
		}			
	}
  
	svg {
		z-index: 1;
		background-color: #003a52;
		border:1px solid white;
		width: 400px;
		height: 400px;
		overflow: hidden;
		position:absolute;
		#starting-fprint {
			//the white fingerprint that is not animated
      		.fprint-path {
				//the paths match the fill finger print but are white
        		stroke-width: 2.5px;
        		stroke-linecap: round;
        		fill: none;
        		stroke: white;
			}
    	}
    	#fill-fprint {
      		.fprint-path {
				stroke-width: 2.5px;
				stroke-linecap: round;
				fill: none;
				stroke: white;
				will-change: stroke-dashoffset, stroke-dasharray;
			}
			.ending-path {
				fill: none;
				stroke-width: 2.5px;
				stroke: gray;
				stroke-linecap: round;
				will-change: stroke-dashoffset, stroke-dasharray, opacity;
			}
      		.solid-stroke {
				stroke-dashoffset: 0;
				stroke-dasharray: none !important;
			}
			.fprint-path, .ending-path {
				stroke: #00ffd7;
				&.light-purple {
				stroke: #7885ff;
				}
			}
    	}
    	.hidden-path {
			//used on the paths that the Elastic path references during its MorphSVG animations
      		visibility:hidden;
      		stroke-linecap: round;
      		stroke-width: 2.5px;
      		fill: none;
      		stroke: white;
    	}
    	.graph-line {
			// the graph line becomes visible at the end of the animation while the morphed path that came from the finger print becomes hidden.
			// to resolve the visual bug of the misalignment from the morph animation that occured intermitenly 
      		fill: none;
      		stroke: #7885ff;
      		stroke-width: 3;
    	}
		.graph-line-gradient {
			//the svg gradient defined in the html
			fill: url("#blue-gradient");
			stroke: none;
			//at the end of the animation, the gradient comes into view
			transition: opacity 0.25s linear;
			opacity: 0;
			&.in-view {
				opacity: 1;
			}
		}
		#dot {
			opacity: 0;
			fill: white;
			//adds a slight glowing affect
			stroke: rgba(255,255,255,0.5);
			stroke-width: 4px;
			//the starting position is the center of the fingerprint
			transform: translateY(250px);
			transition: opacity 1s, transform 1.2s;

			animation-iteration-count: 1;
			animation-direction: normal;
			//have the values at the end of the animations persist
			animation-fill-mode: forwards;
			animation-timing-function: linear;
			animation-delay: 0s;
			//css variable updated in this.createGraphLine() to referenced the Y value of the center on the graph line
			--graphLineCenterY: 0px;
			//the first half of the animation on the dot. Applied when the finger print has been fully filled.
			@keyframes dotAnimation-slideUp {
				0% { transform: translateY(250px); opacity: 0; }
				//comes into view gradually 
				15% { opacity: 1; }
				//moves above the top of the svg
				//from 15% to 24% the dot crosses the login and name text and those animations are tirggered with delays
				24% { opacity: 1; transform: translateY(-20px + $finger-print-group-Y-translate); }
				//slight delay
				70% { opacity: 1; transform: translateY(-20px + $finger-print-group-Y-translate); }
				//the dot moves back down to land of the finger print path that morphed into the horizontal line.
				//the month dots at the dot come into view as the dot moves down
				100% {
					opacity: 1;
					transform: translateY(200px + $finger-print-group-Y-translate);
				}
			}
			//this animation is called right at the end of dotAnimation-slideUp
			@keyframes dotAnimation-followLineBend {
				//the dot moves from the center of the svg/center of the line
				//to the next Y position of the center of the graph line
				//the time to morph the fringerprint path into the graph line is the same length of time as this animation.

				//when this animation is called the days dots at the bottom come into view
				0% {
					opacity: 1;
					transform: translateY(200px + $finger-print-group-Y-translate);
				}
				100% {
					transform: translateY(var(--graphLineCenterY));
					opacity: 1;
				}
			}
			&.slide-up-down-animation {
				animation-duration: 1.4s;
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
