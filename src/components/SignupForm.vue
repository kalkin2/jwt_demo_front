<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="username">ID: </label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isRegisterValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PASSWORD: </label>
					<input id="password" type="text" v-model="password" />
					<p class="validation-text">
						<span class="warning" v-if="!isRegisterValid && username">
							Please enter an password
						</span>
					</p>
				</div>
				<div>
					<label for="nickname">NickName: </label>
					<input id="nickname" type="text" v-model="nickname" />
					<p class="validation-text">
						<span class="warning" v-if="!isRegisterValid && username">
							Please enter an nickname
						</span>
					</p>
				</div>
				<button class="btn" type="submit" :disabled="!isRegisterValid">
					회원가입
				</button>
				<p>{{ logMessage }}</p>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/components/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	computed: {
		isRegisterValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			console.log('username:', this.username);
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log('response...', data.username);
			this.logMessage = `${data.username} 님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style lang="scss" scoped></style>
