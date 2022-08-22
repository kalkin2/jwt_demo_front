function validateEmail(email) {
	console.log('email:', email);
	if (email.indexOf('@') > -1) {
		return true;
	} else {
		return false;
	}
}

export { validateEmail };
