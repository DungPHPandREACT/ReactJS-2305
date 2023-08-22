import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const ProductDetail = () => {
	const params = useParams();
	console.log('params: ', params.idProduct);

	return (
		<div>
			<h1>ProductDetail</h1>
		</div>
	);
};

export default ProductDetail;
