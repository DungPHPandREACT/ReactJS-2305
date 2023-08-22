import React from 'react';
import Layouts from './Layouts';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import ImageDetail from './pages/ImageDetail';
import UserDetail from './pages/UserDetail';
import SignIn from './pages/SignIn';

const App = () => {
	return (
		<Layouts>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/category/:categoryName' element={<Category />} />
				<Route path='/image-detail/:idImage' element={<ImageDetail />} />
				<Route path='/user-profile/:idUser' element={<UserDetail />} />
				<Route path='/sign-in' element={<SignIn />} />
			</Routes>
		</Layouts>
	);
};

export default App;
