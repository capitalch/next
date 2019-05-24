import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { createGlobalStyle } from 'styled-components';
// import Router from 'next/router'

const GlobalStyle = createGlobalStyle`
body{
  margin:0.1em;
}`

const allMDPages=['about','resume']
// const path = location.pathname

const IndexPage = ({ content }) => (
	<div>
		
		<GlobalStyle></GlobalStyle>
		<Head title="Home" />
		<Layout content={content} isBanner={true}></Layout>
	</div>
);

IndexPage.getInitialProps = async ({req,res}) => {
	console.log(allMDPages);
	console.log(req.url);
	let slug = 'about';
	res.locals && res.locals.slug && (slug = res.locals.slug) 
	console.log('slug:',slug)
	const content = (await import(`../docs/pages/${slug}.md`)).default;
	return { content };
}

export default IndexPage;

/*
const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)
*/
