import React, { useEffect } from 'react';
import GlobalStyle from '../handy/globalStyle';
import Layout from '../components/layout';
import Head from '../components/head';

import showdown from 'showdown';

import Prism from 'prismjs';
import './prism.scss'

function BlogPage({ content, meta }) {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div>
            <GlobalStyle />
            <Head title='Blog' />
            <Layout>
                <h2>{meta.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Layout>
        </div>
    );
}

BlogPage.getInitialProps = async ({asPath }) => {
    const slug = asPath.split('/')[2] ;
    const converter = new showdown.Converter(
        {
            metadata: true
            //,
            // extensions: [showdownHighlight]
        }
    );
    const d = (await require(`../docs/blogs/${slug}.md`)).default;
    const content = converter.makeHtml(d);
    const meta = converter.getMetadata();
    return {
        content
        , meta
    };
}

export default BlogPage

/*

*/