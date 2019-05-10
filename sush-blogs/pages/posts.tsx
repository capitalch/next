import React from 'react'
import Link from 'next/link'
import { store } from '../store'

function Posts({ query }) {
    const isArray = Array.isArray(query);
    if(isArray){
        store.setCache('query',query)
    } else {
        query = store.getCache('query')
    }
    // console.log(query);
	return (
		<div>
			<div>This is posts page</div>
			{query.map((x: any, index: number) => {
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

Posts.getInitialProps = async ({ req, query }) => {
	if (req) {
		// console.log('server:', query);
	}
	return { query: query };
};

export default Posts;
/*
<a
							href="#"
							onClick={(e: any) => {
								location.href = `/post?slug=${x.slug}`;
							}}
						>
							{x.title}
						</a>
*/
