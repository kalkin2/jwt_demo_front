import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from '@/views/LoginPage';
import SignupPage from '../views/SignupPage.vue';

const routes = [
	{
		path: '/',
		component: LoginPage,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/signup',
		component: SignupPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
