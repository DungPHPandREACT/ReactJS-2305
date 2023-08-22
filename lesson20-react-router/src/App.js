import React from 'react';
import Navigation from './layouts/Navigation/Navigation';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Collection from './pages/Collection/Collection';
import NotFound from './pages/NotFound/NotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const App = () => {
	return (
		<>
			<Navigation />
			<Header />

			<Routes>
				<Route path='/' element={<Homepage />}>
				</Route>
				<Route path='/product' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/collection' element={<Collection />} />
				<Route path='/product-detail/:idProduct' element={<ProductDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
