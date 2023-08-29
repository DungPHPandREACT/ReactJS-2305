import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layouts from './Layouts';
import AppContext from './context/AppContext';
import Category from './pages/Category';
import Homepage from './pages/Homepage';
import ImageDetail from './pages/ImageDetail';
import SignIn from './pages/SignIn';
import UserDetail from './pages/UserDetail';

const App = () => {
	const [appData, setAppData] = useState({});

	const images = [
		{
			link: 'https://picsum.photos/200/300?image=1050',
			author: {
				name: 'Trần Thị B',
			},
			category: 'food',
			nameImage: 'Image 1',
			id: 1,
			linkExternal: 'http://picsum.photos/',
		},
		{
			link: 'https://picsum.photos/300/300?image=206',
			author: {
				name: 'Nguyễn Văn A',
			},
			category: 'landscape',
			nameImage: 'Image 2',
			id: 2,
			linkExternal: 'http://google.com/',
		},
		{
			link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ1f1JcGVTVbhLJewX-24zWuvFvAnBM7qxA&usqp=CAU',
			author: {
				name: 'Nguyễn Văn A',
			},
			category: 'landscape',
			nameImage: 'Image 3',
			id: 3,
			linkExternal: 'http://google.com/',
		},
		{
			link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&usqp=CAU',
			author: {
				name: 'Vũ Văn C',
			},
			category: 'websites',
			nameImage: 'Image 4',
			id: 4,
			linkExternal: 'http://google.com/',
		},
		{
			link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU',
			author: {
				name: 'Vũ Văn C',
			},
			category: 'websites',
			nameImage: 'Image 5',
			id: 5,
			linkExternal: 'http://google.com/',
		},
		{
			link: 'https://picsum.photos/200/300?image=1050',
			author: {
				name: 'Vũ Văn C',
			},
			category: 'websites',
			nameImage: 'Image 6',
			id: 6,
			linkExternal: 'http://google.com/',
		},
		{
			link: 'https://picsum.photos/300/300?image=206',
			author: {
				name: 'Vũ Văn C',
			},
			category: 'websites',
			nameImage: 'Image 7',
			id: 7,
			linkExternal: 'http://google.com/',
		},
	];

	return (
		<AppContext.Provider
			value={{
				data: appData,
				onChangeData: setAppData,
			}}
		>
			<Layouts>
				<Routes>
					<Route path='/' element={<Homepage images={images} />} />
					<Route
						path='/category/:categoryName'
						element={<Category images={images} />}
					/>
					<Route path='/image-detail/:idImage' element={<ImageDetail />} />
					<Route path='/user-profile/:idUser' element={<UserDetail />} />
					<Route path='/sign-in' element={<SignIn />} />
				</Routes>
			</Layouts>
		</AppContext.Provider>
	);
};

export default App;
