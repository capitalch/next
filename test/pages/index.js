import React from 'react';
// import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
// import Document from '../docs/home.mdx'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown/with-html';
// const mdx = require('@mdx-js/mdx');

const Home = ({ title,Component, Content }) => {
	console.log(Component)
	// console.log(Document())
	// console.log(Content)
	return <div>
		{/* <ReactMarkdown escapeHtml={false} source={Content} /> */}
		{/* <div dangerouslySetInnerHTML={{ __html: Content }}></div> */}
		{/* <Content></Content> */}
		<Component></Component>
	</div>
	// return <Content></Content>
};

Home.getInitialProps = () => {
	const {
		default: Component
		// ,meta: { title }
	} = require("../docs/home.mdx")

	console.log(Component)
	return {
		Component
		// ,		title
	}


	// const Content = (require('../docs/home.mdx')).default
	// console.log({ ...Content })
	// console.log(Content.default.Function);
	// const content = content1.default;
	// console.log({ ...Content.default });
	return { Content };
};

export default Home;

/*
const {
    default: Component,
    meta: { title }
  } = require("../posts/" + name)

  return {
    Component,
    title
  }

import React from 'react'
import Document from '../md/markdown.md'
const H1 = props => <h1 style={{ color: 'tomato' }} {...props} />
const InlineCode = props => <code id="codes" style={{ color: 'purple' }} {...props} />
const Code = props => <code id="codes" style={{ fontWeight: 600 }} {...props} />
const Pre = props => <pre id="codes" style={{ color: 'red' }} {...props} />
export default () => <Document components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }} />



const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)
*/
