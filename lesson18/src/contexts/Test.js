import React, { useEffect, useState } from 'react';

const Test = () => {
	const [number, setNumber] = useState(0);
	const [number1, setNumber1] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('update number');
			setNumber(number + 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		console.log('chạy vào useEffect dependency: [number]s');
	}, [number]);

	return (
		<>
			<h1 id='h1'>Number: {number}</h1>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}
			>
				Increase Number
			</button>
			<h1>Number1: {number1}</h1>
			<button
				onClick={() => {
					setNumber1(number1 + 1);
				}}
			>
				Increase Number
			</button>
		</>
	);
};

export default Test;
