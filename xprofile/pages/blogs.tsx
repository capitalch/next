import React from 'react';
import GlobalStyle from '../handy/globalStyle';
import axios from 'axios';
import Head from '../components/head';
import Blogs from '../components/blogs';
import Layout from '../components/layout';

function BlogsPage({ blogs, slug }) {
    return (
        <div>
            <GlobalStyle />
            <Head title='Blogs by Sushant Agrawal, full stack software consultant' />
            <Layout currentPage={slug}><Blogs blogs={blogs}></Blogs></Layout>
        </div>
    );
}

BlogsPage.getInitialProps = async ({ req, res }) => {
    try {
        const isServer = !!req;
        let blogs;
        if (isServer) {
            blogs = res.locals.blogs;
        } else {
            const d = await axios.get('/blogs?client=true');
			blogs = d.data;
        }
        const slug = 'blogs'
        return { blogs, slug };
    } catch (e) {
        console.log(e);
    }
};

export default BlogsPage;