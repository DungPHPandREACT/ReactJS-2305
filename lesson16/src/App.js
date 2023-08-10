import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Search from './Search';
import Todo from './Todo';
import PageProduct from './PageProduct';
import { useCallback, useMemo, useState } from 'react';
import Color from './Color';
import RenderName from './RenderName';
import RenderAge from './RenderAge';

function App() {
	const [number, onChange] = useState(0);

	const [isRed, setIsRed] = useState(true);
	const [isYellow, setIsYellow] = useState(false);
	const [isGreen, setIsGreen] = useState(false);

	const [student, setStudent] = useState({
		name: 'Nguyen Van A',
		age: 15,
	});

	const [name, setName] = useState('Nguyen Van A');
	const [age, setAge] = useState(15);

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

	const handleChangeAge = () => {
		// setStudent({ ...student, age: student.age });
		setAge(age + 1);
	};

	const renderAge = useMemo(() => <RenderAge age={age} />, [age]);

	console.log(age);

	const printAge = useCallback(() => {
		console.log(age);
	},[age]);

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

		// <>
		// 	<div style={{ margin: 'auto', textAlign: 'center' }}>
		// 		<button onClick={handleChangeColor}>Next</button>
		// 	</div>
		// 	<div
		// 		style={{
		// 			margin: 'auto',
		// 			justifyContent: 'center',
		// 			display: 'flex',
		// 		}}
		// 	>
		// 		<Color background={isRed ? 'red' : ''} />
		// 		<Color background={isYellow ? 'yellow' : ''} />
		// 		<Color background={isGreen ? 'green' : ''} />
		// 	</div>
		// </>

		<>
			<RenderName name={name} />
			{renderAge}
			<button onClick={handleChangeAge}>Tăng tuổi</button>
			<button
				onClick={() => {
					setName('Tran Thi B');
				}}
			>
				Đổi tên
			</button>
			<button onClick={printAge}>In tuổi</button>
		</>
	);
}

export default App;
