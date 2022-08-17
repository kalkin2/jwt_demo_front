import { createWebHistory, createRouter } from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '../views/SignupPage.vue';

const routes = [
	{
		path: '/',
		//코드 스플리팅 적용.
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/login',
		// component: LoginPage,
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		// component: SignupPage,
		component: () => import('@/views/SignupPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
