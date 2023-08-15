import React from 'react';
import B from './B';
import E from './E';

const A = (props) => {
	return (
		<div>
			Component A
			<B listBlogs={props.listBlogs}/>
            <E />
		</div>
	);
};

export default A;
