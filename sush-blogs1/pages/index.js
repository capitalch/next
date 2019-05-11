import React from 'react';
import Link from 'next/link';

export default () => {
	return (
		<div>
			<div>This is index page</div>
      <a  href='/allposts' >
				posts
			</a>			
		</div>
	);
};

/*
<Link  href='/allposts' >
				<a>
					posts
				</a>
			</Link>
*/
