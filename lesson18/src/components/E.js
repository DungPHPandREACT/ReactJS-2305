import React, { useContext } from 'react';
import X from './X';
import DataContext from '../DataContext';

const E = () => {
	const data = useContext(DataContext);

	console.log('Dữ liệu lấy từ context trong component E: ', data);

	return (
		<div>
			Component E
			<X />
		</div>
	);
};

export default E;
