import React from 'react'
import Link from 'next/link'
import axios from 'axios'

const Posts = () => {
	return <div>This is posts page</div>;
}

Posts.getInitialProps = async ({ req, res }) => {
	try {
		const isServer = !!req;
		let data = {};
		if (isServer) {
			// data.posts = res.locals.posts;
		} else {
			const d = await axios.get('/clientposts');
			data = d.data;
		}
		return data;
	} catch (e) {
		console.log(e);
	}
};

export default Posts