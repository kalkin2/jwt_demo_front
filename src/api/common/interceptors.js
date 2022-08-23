export function setInterceptors(instance) {
	//interceptor
	instance.interceptors.request.use(
		function (config) {
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
