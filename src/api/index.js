import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

//axios 초기화 함수
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

//회원가입
function registerUser(userData) {
	return instance.post('signup', userData);
}

//로그인 API
function loginUser(userData) {
	return instance.post('login', userData);
}

//글조회
function fetchPosts() {
	return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
