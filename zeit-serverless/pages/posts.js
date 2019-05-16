import React from 'react';
import Link from 'next/link';

function Posts() {
	return (
		<div>
			This is posts
			<p>
				<Link href="/">
					<a>home</a>
				</Link>
			</p>
		</div>
	);
}

Posts.getInitialProps = async ({ req, res }) => {
	try {
		let data = {};

		data.posts = res.posts;
		console.log(data)
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts;
