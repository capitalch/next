import React, { useEffect, Component } from 'react';
import GlobalStyle from '../handy/globalStyle';
import Layout from '../components/layout';
import Head from '../components/head';
// import highlight from 'highlight'
import showdown from 'showdown';
// import { Converter } from 'showdown';
import styled from 'styled-components';

import Prism from "./prism.js";
import './prism.scss'


// import hljs from 'highlight'
// import './vs2015.scss'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/styles/hljs/docco';


const showdownHighlight = require("showdown-highlight")



// function BlogPage({ content, meta }) {
//     // registerLanguage('javascript', js);
//     // Prism.highlightAll();
//     hljs.initHighlightingOnLoad();
//     useEffect(() => {

//         // Prism.highlightAll();
//         // hljs.initHighlightingOnLoad()
//         // registerLanguage('javascript', js);
//     })

//     return (
//         <div>
//             <GlobalStyle />
//             <Head title='Blog' />
//             <Layout isBanner={false}>
//                 <h2>{meta.title}</h2>
//                 <div dangerouslySetInnerHTML={{ __html: content }} />
//                 {/* <SyntaxHighlighter language='javascript' style={docco}>
//                 {codeString}
//                 </SyntaxHighlighter> */}
//             </Layout>
//         </div>
//     );
// }

// BlogPage.getInitialProps = async ({ res }) => {
//     const slug = res.locals.slug

//     const converter = new showdown.Converter({
//         metadata: true
//         ,extensions: [showdownHighlight]
//     }
//     );
//     const d = (await require(`../docs/blogs/${slug}.md`)).default;
//     const content = converter.makeHtml(d);
//     const meta = converter.getMetadata();
//     return { content, meta };
// }

export default class BlogPage extends Component {

    componentDidMount() {
        // hljs.initHighlightingOnLoad();
        Prism.highlightAll();
    }
    render() {
        // Prism.highlightAll();
        const snippet = `
        <div>
        <pre><code class='language-js'>
        let x= 0;
        x++;
        // this is comment
        </code></pre>
        </div>
        `
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


// export default BlogPage

/*
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