import React, { useEffect, useState } from 'react';
import Test from './Test';
import Post from './Post';
import FormAddBlog from './FormAddBlog';
import A from './components/A';
import DataContext from './DataContext';

const App = () => {
	const [isShow, setIsShow] = useState(false);
	const [listBlogs, setListBlogs] = useState(null);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/blogs')
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setListBlogs([...data]);
			});
	}, []);

	const handleAddBlog = (data) => {
		console.log('handleAddBlog: ', data);
		setListBlogs([...listBlogs, data]);
	};

	const data = {
		name: 'ABC',
		listBlogs,
	};

	return (
		<>
			{/* <FormAddBlog handleAddBlog={handleAddBlog} />
			{loading === true ? (
				<h1>Loading...</h1>
			) : (
				listBlogs?.map((blog, index) => {
					return (
						<div key={blog.id}>
							<Post />
						</div>
					);
				})
			)} */}
			<DataContext.Provider value={data}>
				<A listBlogs={listBlogs} />
			</DataContext.Provider>
		</>
	);
};

export default App;
