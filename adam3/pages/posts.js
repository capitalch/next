import React from 'react';
import Link from 'next/link';
// import axios from 'axios';

function Posts({ posts, myName }) {
	// console.log(myName)
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

Posts.getInitialProps = async ({ req, res}) => {
	try {
		// const isServer = !!req;
		let data = {};

		// if (res && res.locals) {
			data.posts = res.locals.posts;
		// } else {
			// const d = await axios.get('/clientposts');
			// data = d.data;
		// }

		// if (!isServer) {
		// 	const d = await axios.get('/posts');
		// 	data = d.data;

		// } else {
		// 	data.posts = res.locals.posts;
		// }
		data.hisName = 'govindo'
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts;
/*
*/
