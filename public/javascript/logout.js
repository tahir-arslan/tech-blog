async function logout() {
    const response = await fetch('/api/users/logout', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
		window.alert('you are now logged out');
		document.location.replace('/');
    } else {
		alert(response.statusText);
    }
};
  
document.querySelector('#logout').addEventListener('click', logout);