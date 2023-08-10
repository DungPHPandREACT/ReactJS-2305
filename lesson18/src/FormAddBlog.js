import React, { useState } from 'react';

const FormAddBlog = (props) => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmitForm = (event) => {
		event.preventDefault();
		console.log('handleSubmitForm');
		console.log('title: ', title);
		console.log('description: ', description);
		console.log('author: ', author);
		const newBlog = {
			title,
			description,
			author,
			id: 100,
		};
		props.handleAddBlog(newBlog);
	};

	const handleGetTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleGetDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleGetAuthor = (event) => {
		setAuthor(event.target.value);
	};

	return (
		<form onSubmit={handleSubmitForm}>
			<div>
				<label>Title</label>
				<input type='text' onChange={handleGetTitle} />
			</div>
			<div>
				<label>Description</label>
				<input type='text' onChange={handleGetDescription} />
			</div>
			<div>
				<label>Author</label>
				<input type='text' onChange={handleGetAuthor} />
			</div>

			<button type='submit'>Add blog</button>
		</form>
	);
};

export default FormAddBlog;
