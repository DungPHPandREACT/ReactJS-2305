import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Search from './Search';
import Todo from './Todo';
import PageProduct from './PageProduct';
import { useState } from 'react';
import Color from './Color';

function App() {
	const [number, onChange] = useState(0);

	const [isRed, setIsRed] = useState(true);
	const [isYellow, setIsYellow] = useState(false);
	const [isGreen, setIsGreen] = useState(false);

	// let number = 0;
	console.log(useState(0));

	const changeValue = (parameter) => {
		// number = number + 1;
		// console.log(number);
		// setNumber(number+1)

		console.log(parameter);
	};

	const handleChangeColor = () => {
		if (isRed) {
			setIsRed(false);
			setIsYellow(true);
		} else if (isYellow) {
			setIsYellow(false);
			setIsGreen(true);
		} else {
			setIsGreen(false);
			setIsRed(true);
		}
	};

	return (
		// <div id='app'>
		// 	{/* <Search /> */}
		// 	<Search></Search>
		// 	<Todo task={1} isDone={true} onHello={hello} />
		// 	<Todo task='2' isDone={false}></Todo>
		// 	<Todo></Todo>
		// 	<Todo task='4'></Todo>
		// 	<Todo task='5' />
		// </div>
		// <PageProduct />
		// <>
		// 	<h1>Giá trị hiện tại {number}</h1>
		// 	<button
		// 		onClick={() => {
		// 			changeValue(123);
		// 		}}
		// 	>
		// 		Cộng ( + )
		// 	</button>
		// </>

		<>
			<div style={{ margin: 'auto', textAlign: 'center' }}>
				<button onClick={handleChangeColor}>Next</button>
			</div>
			<div
				style={{
					margin: 'auto',
					justifyContent: 'center',
					display: 'flex',
				}}
			>
				<Color background={isRed ? 'red' : ''} />
				<Color background={isYellow ? 'yellow' : ''}/>
				<Color background={isGreen ? 'green' : ''}/>
			</div>
		</>
	);
}

export default App;
