import React, { useEffect } from 'react';
import GlobalStyle from '../handy/globalStyle';
import Layout from '../components/layout';
import Head from '../components/head';

import showdown from 'showdown';
// import styled from 'styled-components';

import Prism from "./prism.js";
import './prism.scss'
const showdownHighlight = require("showdown-highlight")

function BlogPage({ content, meta }) {
   
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div>
            <GlobalStyle />
            <Head title='Blog' />
            <Layout isBanner={false}>
                <h2>{meta.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Layout>
        </div>
    );
}

BlogPage.getInitialProps = async ({ res }) => {
    const slug = res.locals.slug

    const converter = new showdown.Converter({
        metadata: true
        ,extensions: [showdownHighlight]
    }
    );
    const d = (await require(`../docs/blogs/${slug}.md`)).default;
    const content = converter.makeHtml(d);
    const meta = converter.getMetadata();
    return { content, meta };
}

export default BlogPage

/*
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/styles/hljs/docco';

registerLanguage('javascript', js);

 registerLanguage('javascript', js);
 Prism.highlightAll();
 hljs.initHighlightingOnLoad();


export default class BlogPage extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div>
                <GlobalStyle />
                <Head title='Blog' />
                <Layout isBanner={false}>
                    <h2>{this.props.meta.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
                </Layout>
            </div>
        );
    }

    static async getInitialProps({ res }) {
        const slug = res.locals.slug

        const converter = new showdown.Converter({
            metadata: true
            , extensions: [showdownHighlight]
        }
        );
        const d = (await require(`../docs/blogs/${slug}.md`)).default;
        const content = converter.makeHtml(d);
        const meta = converter.getMetadata();
        return { content, meta };
    }

}


// hljs.initHighlightingOnLoad();
Prism.highlightAll();
        const snippet = `
        <div>
        <pre><code class='language-js'>
        let x= 0;
        x++;
        </code></pre>
        </div>
        `
import hljs from 'highlight'
import './vs2015.scss'

const StyledDiv = styled.div
code {
    color:white;
     background-color:gray;
     font: Helvetica, sans-serif;
}
 pre {
    background:black;
    border-radius:10px;
    }


    .table {
		td {
			border:1px solid black;
		}
	}



var Markdown = require('react-remarkable');
import ReactMarkdown from 'react-markdown/with-html';

const text      = `# hello, markdown!`,
content      = converter.makeHtml(text);

const content      = d.default
const meta = {}

const d = (await require(`../docs/blogs/${slug}.md`));
const content = d.default;
*/