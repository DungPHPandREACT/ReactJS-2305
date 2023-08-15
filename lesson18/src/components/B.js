import React from 'react';
import C from './C';

const B = (props) => {
	return (
		<div>
			Component B
			<C listBlogs={props.listBlogs} />
		</div>
	);
};

export default B;
