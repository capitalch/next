import React from 'react';
// import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Document from '../docs/home.mdx'
// const mdx = require('@mdx-js/mdx');

const Home = ({Content}) => {
	// console.log(Document())
	return <Document></Document>
	// return <Content></Content>

	console.log('content:', props.content)
	return <div>test</div>
	// return (
	// 	<div>
	// 		<Head title="Home" />
	// 		<Nav />

	// 		<div>Heading</div>
	// 	</div>
	// );
};

Home.getInitialProps = async () => {
	const Content = (await import('../docs/home.mdx')).default
// const content = content1.default;
	console.log({...Content.default});
	return {Content};
};

export default Home;

/*
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
