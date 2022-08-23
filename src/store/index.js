import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state: {
		username: '',
	},
	mutations: {
		setUsername(state, payload) {
			console.log('mutations...', payload);
			state.username = payload;
		},
	},
});

export default store;
