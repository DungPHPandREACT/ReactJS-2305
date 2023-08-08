import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Search from './Search';
import Todo from './Todo';
import PageProduct from './PageProduct';

function App() {
	const hello = () => {
		console.log('XXin chafo');
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
		<PageProduct />
	);
}

export default App;
