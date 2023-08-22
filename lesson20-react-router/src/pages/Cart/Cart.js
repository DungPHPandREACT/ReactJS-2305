import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const navigate = useNavigate();
	let countProduct = 1;

	useEffect(() => {
		if (countProduct === 0) {
			navigate('/product');
			return;
		}
	}, []);

	return <h1>Cart</h1>;
};

export default Cart;
