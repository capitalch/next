import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GlobalStyle from '../handy/globalStyle'
import Layout from '../components/layout'
import Head from '../components/head'
import Comments from '../components/comments'
// import axios from 'axios'
import showdown from 'showdown'

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
                <StyledLink><Link href='/blogs'><a>Back to blogs</a></Link></StyledLink>
                <h3>{meta.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Layout>
            <Comments></Comments>
        </div>
    );
}

BlogPage.getInitialProps = async ({ asPath }) => {
    const slug = asPath.split('/')[2];
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

const StyledLink = styled.div`
    margin-top:1rem;  
`

export default BlogPage

/*
function Comments() {
    const [comm, setComm] = useState()
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoic3VzaGFudGFncmF3YWwuY29tIiwiaWF0IjoxNTYwMDcxOTEwfQ.d89Oe7Qm9bajI2qFlm0h6z1aIky6s3u8PXmcKwPyKfY'
    const url = 'http://localhost:3002/tools/comments/sushantagrawal.com/projects'
    const params = {
        token: token
    }

    useEffect(()=>{
        // axios.get(url, {
        //     params: params
        // }).then(res => {
        //     // console.log(res.data)
        //     setComm(res.data)
        // }).catch(e => {
        //     console.log((e.response && e.response.data.message) || e.message)
        // })
    })



    return <div>Test</div>
}

// function getComments() {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlIjoic3VzaGFudGFncmF3YWwuY29tIiwiaWF0IjoxNTYwMDcxOTEwfQ.d89Oe7Qm9bajI2qFlm0h6z1aIky6s3u8PXmcKwPyKfY'

//     doGet('http://localhost:3002/tools/comments/sushantagrawal.com/projects', {
//         token: token
//     })
// }

// function doGet(url, params) {
//     axios.get(url, {
//         params: params
//     }).then(res => {
//         console.log(res.data)
//     }).catch(e => {
//         console.log((e.response && e.response.data.message) || e.message)
//     })
// }
*/