import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const handleRedirectHomepage = () => {
		navigate('/');
	};

	return (
		<>
			<h1>Header</h1>
			<button onClick={handleRedirectHomepage}>Redirect Homepage</button>
		</>
	);
};

export default Header;
