import React from 'react';

const Color = (props) => {
	return (
		<div
			style={{
				height: '50px',
				width: '50px',
				borderRadius: '50px',
				border: '1px solid black',
				margin: '8px',
				background: props.background,
			}}
		></div>
	);
};

export default Color;
