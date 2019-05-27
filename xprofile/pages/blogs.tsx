import React from 'react';
import GlobalStyle from '../handy/globalStyle';
import Head from '../components/head';
import Blogs from '../components/blogs';
import Layout from '../components/layout';
// import Link from 'next/link';

function BlogsPage({ blogs }) {
    // const content = <Blogs></Blogs>
    return (
        <div>
            <GlobalStyle />
            <Head title='Blogs' />
            <Layout isBanner={false}><Blogs></Blogs></Layout>
            {/* {getPageContent({ content, slug })} */}
        </div>

        // <div>
        //     These are blogs
        // 	{/* {blogs.map((x, index) => {
        //         return (
        //             <div key={index}>
        //                 <a href={`/docs/${x.slug}`}>
        //                     {x.title}
        //                 </a>
        //             </div>
        //         );
        //     })} */}
        // </div>
    );
}

BlogsPage.getInitialProps = async ({ res }) => {
    try {

        let data: any = {};

        data.blogs = res.locals.posts;

        return data;
    } catch (e) {
        console.log(e);
    }
};

export default BlogsPage;