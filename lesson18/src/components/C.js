import React from 'react';
import D from './D';

const C = (props) => {
	return (
		<div>
			Component C
			<D listBlogs={props.listBlogs} />
		</div>
	);
};

export default C;
