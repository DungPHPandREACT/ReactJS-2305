import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';

const D = () => {
	const data = useContext(DataContext);
	// setListBlogs()

	console.log('Dữ liệu lấy từ context: ', data.listBlogs);

	return <div>Component D</div>;
};

export default D;
