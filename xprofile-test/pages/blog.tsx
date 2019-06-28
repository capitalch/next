import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GlobalStyle from '../handy/globalStyle'
import Layout from '../components/layout'
import Head from '../components/head'
import Comments from '../components/comments'
import axios from 'axios'
import showdown from 'showdown'
import settings from '../settings.json'

// import Prism from 'prismjs';
import './prism.scss'

function BlogPage({ content, meta, pageComments }) {
    // useEffect(() => {
    //     Prism.highlightAll();
    // }, [])

    return (
        <div>
            <GlobalStyle />
            <Head title='Blog' />
            <Layout>
                <StyledLink><Link href='/blogs'><a>Back to blogs</a></Link></StyledLink>
                <h3>{meta.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <Comments pageComments={pageComments}></Comments>
            </Layout>

        </div>
    );
}

BlogPage.getInitialProps = async ({ req, res, asPath }) => {
    try {
        const isServer = !!req;
        const slug = asPath.split('/')[2];
        const converter = new showdown.Converter(
            {
                metadata: true  //,   // extensions: [showdownHighlight]
            }
        );

        // const d = (await require(`../docs/blogs/${slug}.md`)).default;
        let d = {}
        console.log('here:1')
        if (isServer) {
            d = res.locals.blog
        } else {
            d = (await axios.get(`/blog/${slug}?client=true`)).data
        }
        console.log('data: ',d)
        const content = converter.makeHtml(d);
        const meta = converter.getMetadata();

        const url = `${settings.commentsUrl}/projects`
        const params = {
            token: settings.token
        }
        const pageComments = (await axios.get(url, {
            params: params
        })).data

        return {
            content
            , meta
            , pageComments
        };
    } catch (e) {
        console.log((e.response && e.response.data.message) || e.message)
    }
}

const StyledLink = styled.div`
    margin-top:1rem;  
`

export default BlogPage

/*

*/