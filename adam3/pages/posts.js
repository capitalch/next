import React from 'react';
import Link from 'next/link';
import axios from 'axios';

function Posts({ posts }) {
	return (
		<div>
			This is posts
			{posts.map((x, index) => {
				return (
					<div key={index}>
						<Link href={`/docs?slug=${x.slug}`} as={`/docs/${x.slug}`}>
							<a>{x.title}</a>
						</Link>
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
		const isServer = !!req;
		let data = {};

		if(res && res.locals){
			data.posts = res.locals.posts;
		} else {
			const d = await axios.get('/posts');
			data = d.data;
		}

		// if (!isServer) {
		// 	const d = await axios.get('/posts');
		// 	data = d.data;
			
		// } else {
		// 	data.posts = res.locals.posts;
		// }
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts;
