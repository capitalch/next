import React from 'react';
import GlobalStyle from '../handy/globalStyle';
import Layout from '../components/layout';
import Head from '../components/head';
import highlight from 'highlight'
import { Converter } from 'showdown';
import styled from 'styled-components';

const StyledDiv = styled.div`
    /* Layout{ */
        .table {
		td {
			border:1px solid black;
		}
		/* color:red; */
	}
    /* } */
`

function BlogPage({ content, meta }) {
    console.log(meta)

    return (
        <StyledDiv>
            <GlobalStyle />
            <Head title='Blog' />
            <Layout isBanner={false}>
                <h2>{meta.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Layout>
        </StyledDiv>
    );
}

BlogPage.getInitialProps = async ({ res }) => {
    const slug = res.locals.slug

    const converter = new Converter({ 
        metadata: true,
        extensions: [highlight]
        }
    );
    const d = (await require(`../docs/blogs/${slug}.md`)).default;
    const content = converter.makeHtml(d);
    const meta = converter.getMetadata();
    return { content, meta };
}

export default BlogPage

/*

var Markdown = require('react-remarkable');
import ReactMarkdown from 'react-markdown/with-html';

const text      = `# hello, markdown!`,
content      = converter.makeHtml(text);

const content      = d.default
const meta = {}

const d = (await require(`../docs/blogs/${slug}.md`));
const content = d.default;
*/