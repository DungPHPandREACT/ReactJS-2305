import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const PageLayout = (props) => {
	return (
		<>
			<Navigation />
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default PageLayout;
