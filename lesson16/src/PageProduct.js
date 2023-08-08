import React from 'react';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import Product from './components/Product';
import Footer from './layouts/Footer';

const PageProduct = (props) => {
	const listProduct = [
		{
			name: 'Fancy Product',
			price1: '40.000',
			price2: '80.000',
			typePrice: 3,
		},
		{
			name: 'Special Item',
			isSale: true,
			isRate: true,
			price1: '20.000',
			price2: '18.000',
			typePrice: 2,
		},
		{
			name: 'Sale Item',
			isSale: true,
			price1: '50.000',
			price2: '25.000',
			typePrice: 2,
		},
		{
			name: 'Popular Item',
			isRate: true,
			typePrice: 1,
			price1: '40.000',
		},
		{
			name: 'Sale Item',
			isSale: true,
		},
		{
			name: 'Fancy Product',
		},
		{
			name: 'Special Item',
			isSale: true,
			isRate: true,
		},
		{
			name: 'Popular Item',
			isRate: true,
		},
	];

	return (
		<>
			<Navigation />
			<Header />
			<section className='py-5'>
				<div className='container px-4 px-lg-5 mt-5'>
					<div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
						{listProduct.map((product) => (
							<Product
								name={product.name}
								// isSale={product.isSale}
								isRate={product.isRate}
								price1={product.price1}
								price2={product.price2}
								typePrice={product.typePrice}
							/>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default PageProduct;
