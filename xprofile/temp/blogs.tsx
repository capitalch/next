import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import Blogs from '../components/blogs';
import GlobalStyle from '../handy/globalStyle';

const BlogsPage = () => (
	<div>
		<GlobalStyle />
		<Head title="Blogs" />
		<Layout isBanner={true} ><Blogs></Blogs></Layout>
	</div>
);

export default BlogsPage;