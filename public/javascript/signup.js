async function signupFormHandler(event) {
	event.preventDefault();
	const username = document.querySelector('input[name="username-signup"]').value.trim();
	const email = document.querySelector('input[name="email-signup"]').value.trim();
	const password = document.querySelector('input[name="password-signup"]').value.trim();
	if (username && email && password) {
		const response = await fetch('/api/users/signup', {
			method: 'post',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});
		if (response.ok) {
			document.location.replace('/dashboard/');
		} else {
			alert(response.statusText);
		}
	}
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);