import React from 'react';

const RenderAge = (props) => {
	console.log('render age');

	return <h1>Age: {props.age}</h1>;
};

export default RenderAge;
