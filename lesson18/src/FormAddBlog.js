import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const FormAddBlog = (props) => {
	// C1
	// const [title, setTitle] = useState('');
	// const [author, setAuthor] = useState('');
	// const [description, setDescription] = useState('');

	// const handleSubmitForm = (event) => {
	// 	event.preventDefault();
	// 	console.log('handleSubmitForm');
	// 	console.log('title: ', title);
	// 	console.log('description: ', description);
	// 	console.log('author: ', author);
	// 	const newBlog = {
	// 		title,
	// 		description,
	// 		author,
	// 		id: 100,
	// 	};
	// 	props.handleAddBlog(newBlog);
	// };

	// const handleGetTitle = (event) => {
	// 	console.log(event.target.value);
	// 	setTitle(event.target.value);
	// };

	// const handleGetDescription = (event) => {
	// 	setDescription(event.target.value);
	// };

	// const handleGetAuthor = (event) => {
	// 	setAuthor(event.target.value);
	// };

	// Cách 2: dùng fomirk

	const formik = useFormik({
		initialValues: {
			title: '',
			author: '',
			description: '',
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(8, 'Chưa đủ 8 ký tự')
				.max(20, 'Độ dài đang vượt quá')
				.required('Đây là bắt buộc'),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log('values: ', values);
			resetForm({ title: '', description: '', author: '' });
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					value={formik.values.title}
					onChange={formik.handleChange}
				/>
				{formik.errors.title}
			</div>
			<div>
				<label>Description</label>
				<input
					type='text'
					name='description'
					id='description'
					value={formik.values.description}
					onChange={formik.handleChange}
				/>
			</div>
			<div>
				<label>Author</label>
				<input
					type='text'
					name='author'
					id='author'
					value={formik.values.author}
					onChange={formik.handleChange}
				/>
			</div>

			<button type='submit'>Add blog</button>
		</form>
	);
};

export default FormAddBlog;
