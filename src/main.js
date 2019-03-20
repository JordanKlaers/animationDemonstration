'use strict';
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex'
import _ from 'lodash';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		innerValue: null,
		additionalKey: null,
		testValue: null,
		testValueTwo: {
			innerValue: ''
		}
	},
	mutations: {
		UPDATE_TEST_VALUE(state, payload) {
			state.innerValue = payload && payload.innerValue
			state.additionalKey = payload && payload.additionalKey
		}
	},
	getters: {
		innerValue: state => state.innerValue, 
		additionalKey: state => state.additionalKey
	},
	modules: {}
});
Vue.prototype.$_ = _;
new Vue({
	el: '#crazyapp',
	components: { App },
	store,
	render: function(createElement) {
		return createElement(App);
	}
});


export default store;