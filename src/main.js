'use strict';
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex'
import prototypes from './vuePrototypes.js';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {},
	mutations: {},
	getters: {},
	modules: {}
});

for (let key in prototypes) {
	Vue.prototype[key] = prototypes[key];
}

new Vue({
	el: '#crazyapp',
	components: { App: App },
	store: store,
	render: function(createElement) {
		return createElement(App);
	}
});


export default store;