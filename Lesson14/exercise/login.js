import { listUser } from './users.js';

document.getElementById('login').onclick = () => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	if (!validateEmail(email)) {
		alert('Email không hợp lệ');
		return;
	}

	if (password.length < 6) {
		alert('Password chưa đủ mạnh');
		return;
	}

	let isExistEmail = false;
	let isCorrectPassword = false;

	//alert(`Xin chào ${user.first_name + ' ' + user.last_name}`);
	for (let user of listUser) {
		if (user.email === email) {
			isExistEmail = true;
			if (user.password === password) {
				isCorrectPassword = true;
				alert(`Xin chào ${user.first_name + ' ' + user.last_name}`);
			}
		}
	}

	if (!isExistEmail) {
		alert('Email chưa tồn tại');
	} else {
		if (!isCorrectPassword) {
			alert('Password sai');
		}
	}
};

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};
