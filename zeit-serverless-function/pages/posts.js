import React from 'react';
import Link from 'next/link';
import axios from 'axios';

function Posts({ posts }) {
	return (
		<div>
			<div>This is posts page</div>
			{posts.map((x, index) => {
				return (
					<div key={index}>
						<Link href={`/post/${x.slug}`} as={`/post/${x.slug}`}>
							<a>{x.title}</a>
						</Link>
					</div>
				);
			})}
			<Link href="/" as="/">
				<a>home</a>
			</Link>
		</div>
	);
}

Posts.getInitialProps = async ({ req, res }) => {
	try {
		const isServer = !!req;
		let data = {};
		if (isServer) {
			data.posts = res.locals.posts;
		} else {
			const d = await axios.get('/clientposts');
			data = d.data;
		}
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts;