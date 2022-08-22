<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PASSWORD: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">NickName: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">Login2</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
		};
	},
	methods: {
		submitForm() {
			console.log('username:', this.username);
		},
	},
};
</script>

<style lang="scss" scoped></style>
