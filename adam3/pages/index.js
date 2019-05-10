import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { store } from '../store';
// import blogs from '../misc/blogs.json';

function Index(props) {
	let stars;
	if (props.stars) {
		stars = props.stars;
		store.setCache('stars', props.stars);
	} else {
		stars = store.getCache('stars');
	}
	console.log('Client:', props.query);
	// console.log(blogs);
	return (
		<ul>
			<li>
				<Link href="/b" as="/b">
					<a>b</a>
				</Link>
			</li>
			<li>
				<Link href="/a" as="/a">
					<a>a</a>
				</Link>
			</li>
			<li>
				<Link href={{ pathname: '/posts', query: { id: '2' } }} as="/posts/2">
					<a>post #2</a>
				</Link>
			</li>
			<li>
			<Link href={{ pathname: '/blogs/meta' }}>
					<a>Blogs</a>
				</Link>
			</li>
		</ul>
	);
}
Index.getInitialProps = async ({ req, query }) => {
	console.log('server:', query);
	let d = {};
	let blogs = {};
	if (req) {
		d = await axios.get('http://localhost:3002');
		blogs = await import('../misc/blogs.json');
		console.log(blogs.default);
	}
	return { stars: blogs.default, query: query };
};

export default Index;

// export default () => (
//   <ul>
//     <li>
//       <Link href='/b' as='/b'>
//         <a>b</a>
//       </Link>
//     </li>
//     <li>
//       <Link href='/a' as='/a'>
//         <a>a</a>
//       </Link>
//     </li>
//     <li>
//       <Link href={{ pathname: '/posts', query: { id: '2' } }} as='/posts/2'>
//         <a>post #2</a>
//       </Link>
//     </li>
//   </ul>
// )
/*
function Index(props) {
	console.log('Client:', props.stars);
	return (

		<div>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<p>Hello Next.js</p>
			<p>Next stars:{props.stars.name}</p>
		</div>
	);
}
Index.getInitialProps = async ({ req }) => {

	const x = 0;
	let d: any = {};
	if (req) {
		d = await axios.get('http://localhost:3002');
		console.log(d.data);
	}
	return { stars: d.data };
};

export default Index;
*/
