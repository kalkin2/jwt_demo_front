import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state: {
		username: '',
		token: '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, payload) {
			state.username = payload;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			console.log('jwtToken:::', token);
			state.token = token;
			console.log('setToken complete.');
		},
	},
});

export default store;
