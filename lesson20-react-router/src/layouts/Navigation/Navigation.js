import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to='/' style={{ margin: '12px' }}>
				Homepage
			</NavLink>
			<NavLink to='/product' style={{ margin: '12px' }}>
				Product
			</NavLink>
			<NavLink to='/collection' style={{ margin: '12px' }}>
				Collection
			</NavLink>
			<NavLink to='/cart' style={{ margin: '12px' }}>
				Cart
			</NavLink>
		</div>
	);
};

export default Navigation;
