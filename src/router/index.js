import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/login',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/SignupPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
