import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GlobalStyle from '../handy/globalStyle'
import Layout from '../components/layout'
import Head from '../components/head'
import CodeBlock from '../code-block'
import Comments from '../components/comments'
import axios from 'axios'
// import ReactMarkdown from 'react-markdown/with-html'
import settings from '../settings.json'


function BlogPage({ content, title, pageComments, slug }:any) {
    return (
        <div>
            <GlobalStyle />
            <Head title='Blog' />
            {/* <Layout>
                <StyledLink><Link href='/blogs'><a>Back to blogs</a></Link></StyledLink>
                <h3>{title}</h3>
                <ReactMarkdown escapeHtml={false} source={content} renderers={{ code: CodeBlock }}>
                </ReactMarkdown>
                <Comments pageComments={pageComments} slug={slug}></Comments>
            </Layout> */}
        </div>
    );
}

BlogPage.getInitialProps = async ({  res, asPath }:any) => {
    try {
        const content = res.locals.content
        const title = res.locals.title
        const slug = asPath.split('/')[2];
        const url = `${settings.commentsUrl}/projects`
        const params = {
            token: settings.token
        }
        const pageComments = (await axios.get(url, {
            params: params
        })).data

        return {
            content
            , title
            , pageComments
            , slug
        };
    } catch (e:any) {
        console.log((e.response && e.response.data.message) || e.message)
    }
}

const StyledLink = styled.div`
    margin-top:1rem;  
`

export default BlogPage