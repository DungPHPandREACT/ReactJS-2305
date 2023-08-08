import React from 'react';

const Todo = (props) => {
	console.log('props: ', props);

	console.log(props.onHello);

	// props.onHello();
	return (
		<div>
			<input type='radio' checked={props.isDone} />
			<label>{props.task ? props.task : 'Chua co gi'}</label>
		</div>
	);
};

export default Todo;
