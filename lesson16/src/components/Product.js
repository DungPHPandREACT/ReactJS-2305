import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
	// Cách 1
	const { name = 'Product', isSale, isRate, price1, price2, typePrice } = props;

	const printPrice = () => {
		console.log('typePrice: ', typePrice);
		switch (typePrice) {
			case 2:
				return (
					<span>
						<span class='text-muted text-decoration-line-through'>
							${price1}
						</span>{' '}
						${price2}
					</span>
				);

			case 3:
				return (
					<span>
						${price1} - ${price2}
					</span>
				);

			default:
				return <span>${price1}</span>;
		}
	};

	return (
		<div className='col mb-5'>
			<div className='card h-100'>
				{/* Sale badge*/}
				{isSale && (
					<div
						className='badge bg-dark text-white position-absolute'
						style={{ top: '0.5rem', right: '0.5rem' }}
					>
						Sale
					</div>
				)}
				{/* Product image*/}
				<img
					className='card-img-top'
					src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
					alt='...'
				/>
				{/* Product details*/}
				<div className='card-body p-4'>
					<div className='text-center'>
						{/* Product name*/}
						<h5 className='fw-bolder'>{name}</h5>
						{/* Product reviews*/}
						{isRate && (
							<div className='d-flex justify-content-center small text-warning mb-2'>
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
							</div>
						)}
						{/* Product price*/}
						{printPrice()}
					</div>
				</div>
				{/* Product actions*/}
				<div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
					<div className='text-center'>
						<a className='btn btn-outline-dark mt-auto' href='#'>
							Add to cart
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// Cách 2
Product.propTypes = {
	name: PropTypes.string.isRequired,
	isSale: PropTypes.bool,
	isRate: PropTypes.string,
};

Product.defaultProps = {
	isSale: true,
};

export default Product;
