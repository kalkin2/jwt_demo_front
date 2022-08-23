import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state: {
		username: '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, payload) {
			console.log('mutations...', payload);
			state.username = payload;
		},
		clearUsername(state) {
			state.username = '';
		},
	},
});

export default store;
