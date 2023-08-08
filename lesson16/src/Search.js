import React from 'react';

function Search() {
	return (
		<input
			style={{
				borderTop: 'none',
				borderRight: 'none',
				borderLeft: 'none',
				borderBottom: '1px solid black',
				width: '220px',
				height: '30px',
			}}
			placeholder='Enter your task here..'
		/>
	);
}

export default Search;
