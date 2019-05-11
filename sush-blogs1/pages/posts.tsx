import React from 'react';
import Link from 'next/link';

function Posts({ query }) {
	return (
		<div>
			<div>This is posts page</div>
			{query.map((x: any, index: number) => {
				return (
					<div key={index}>
						<a href={`/post/${x.slug}`} as={`/post/${x.slug}`}>
							{x.title}
						</a>
					</div>
				);
			})}
			<Link href="/" as="/">
				<a>home</a>
			</Link>
		</div>
	);
}

Posts.getInitialProps = async ({ query }) => {
	return { query };
};

export default Posts;
/*
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
