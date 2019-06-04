import React from 'react';
import GlobalStyle from '../handy/globalStyle';
import Head from '../components/head';
import Blogs from '../components/blogs';
import Layout from '../components/layout';

function BlogsPage({ blogs, slug }) {
    return (
        <div>
            <GlobalStyle />
            <Head title='Blogs' />
            <Layout currentPage={slug} isBanner={false}><Blogs blogs={blogs}></Blogs></Layout>
        </div>
    );
}

BlogsPage.getInitialProps = async ({ res }) => {
    try {
        // let data: any = {};
        const blogs = res.locals.blogs;
        const slug = 'blogs'
        return {blogs, slug};
    } catch (e) {
        console.log(e);
    }
};

export default BlogsPage;