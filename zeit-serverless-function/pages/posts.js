import React from 'react';
import Link from 'next/link';

function Posts({ posts }) {
	return (
		<div>
			This is posts
			{posts.map((x, index) => {
				return (
					<div key={index}>
						<a href={`/docs/${x.slug}`}>
							{x.title}
						</a>
					</div>
				);
			})}
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
		data.posts = res.locals.posts;
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts;