import store from '@/store/index';
export function setInterceptors(instance) {
	//interceptor
	instance.interceptors.request.use(
		function (config) {
			console.log('config:', config);
			console.log('token?', store.state.token);
			config.headers.Authorization = store.state.token;
			// config.headers['Authorization'] = '20929292';
			console.log('config?', config);
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);
	instance.interceptors.response.use(
		function (config) {
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);
	return instance;
}
