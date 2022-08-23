import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/SignupPage.vue'),
	},
	{
		path: '/main',
		component: () => import('@/views/MainPage.vue'),
	},
	{
		// path: '*',
		path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
		component: () => import('@/views/NotFoundPage.vue'),
	},
];

const router = createRouter({
	mode: history,
	history: createWebHistory(),
	routes,
});

export default router;
