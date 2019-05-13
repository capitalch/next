import React from 'react';
import Link from 'next/link';

export default () => {
	return (
		<div>
			<div>This is index page</div>
			<Link href="/posts">
				<a>posts</a>
			</Link>
			<Link href="/testmd">
				<a>About</a>
			</Link>
		</div>
	);
};