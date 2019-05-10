import React, { useState } from 'react';

function Blogs(props){
    console.log('Client:', props.query);
    return <div>Blogs</div>
}

Blogs.getInitialProps = async ({ req, query }) => {
	console.log('server:', query);
	let d = {};
	let blogs = {};
	if (req) {
		console.log(query)
	}
	return { query: query };
};

export default Blogs;