import React, { useContext } from 'react';
import DataContext from '../DataContext';

const D = () => {
	const data = useContext(DataContext);

	console.log('Dữ liệu lấy từ context: ', data.listBlogs);

	return <div>Component D</div>;
};

export default D;
