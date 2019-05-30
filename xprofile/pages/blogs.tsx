import React from 'react';
import GlobalStyle from '../handy/globalStyle';
import Head from '../components/head';
import Blogs from '../components/blogs';
import Layout from '../components/layout';

function BlogsPage({ blogs }) {
    return (
        <div>
            <GlobalStyle />
            <Head title='Blogs' />
            <Layout isBanner={false}><Blogs blogs={blogs}></Blogs></Layout>
        </div>
    );
}

BlogsPage.getInitialProps = async ({ res }) => {
    try {
        let data: any = {};
        data.blogs = res.locals.blogs;
        return data;
    } catch (e) {
        console.log(e);
    }
};

export default BlogsPage;