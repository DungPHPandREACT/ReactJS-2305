import React, { memo } from 'react';

const RenderName = (props) => {
	console.log('render name');
	console.log(props.name);

	return <h1>Name: {props.name}</h1>;
};

export default memo(RenderName);
