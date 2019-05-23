import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { createGlobalStyle } from 'styled-components';
const mdx = require('@mdx-js/mdx')

const GlobalStyle = createGlobalStyle`
body{
  margin:0.1em;
}`


const Home = (props) => (
	<div>
		<GlobalStyle></GlobalStyle>
		<Head title="Home" />
		<Layout content = {props.content}></Layout>
		{/* <ReactMarkdown escapeHtml={false} source={props.content} /> */}
	</div>
);

Home.getInitialProps = async () => {
	// const content = (await import(`../docs/pages/home.md`)).default;
	const content = (await import(`../docs/pages/home.mdx`));
	// const content = await mdx(content1);
	return {content};
}

export default Home;

/*
const mdx = require('@mdx-js/mdx')
 
const result = await mdx(`
# Hello, MDX
 
I <3 Markdown and JSX
`)
 
console.log(result)
*/
