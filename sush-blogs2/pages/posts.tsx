import React from 'react';
import Link from 'next/link';
import axios from 'axios';

function Posts({ posts }) {
	return (
		<div>
			<div>This is posts page</div>
			{posts.map((x: any, index: number) => {
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
	const isServer = !!req;
	let data: any = {};
	if (isServer) {
		data.posts = res.locals.posts;
	} else {
		const d = await axios.get('/client-posts');
		data = d.data;
	}
	return data;
};

export default Posts;
/*
<a href={`/post/${x.slug}`} as={`/post/${x.slug}`}>
							{x.title}
						</a>
<Link href={`/post/${x.slug}`} as={`/post/${x.slug}`}>
							<a>{x.title}</a>
						</Link>

import fetch from 'isomorphic-unfetch';
import { store } from '../store';
import axios from 'axios';
<a
							href="#"
							onClick={(e: any) => {
								location.href = `/post?slug=${x.slug}`;
							}}
						>
							{x.title}
						</a>
*/
