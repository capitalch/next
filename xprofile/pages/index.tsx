import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';

const IndexPage = ({ content }) => (
	<div>
		<GlobalStyle />
		<Head title="Home" />
		<Layout content={content} isBanner={true} />
	</div>
);

IndexPage.getInitialProps = async () => {
	const content = (await import(`../docs/pages/about.md`)).default;
	return { content };
};

export default IndexPage;

/*

let slug = 'about';
res.locals && res.locals.slug && (slug = res.locals.slug);
console.log('slug:', slug);

console.log(req.url);
console.log(allMDPages);
const allMDPages=['about','resume']
const path = location.pathname
const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body{
  margin:0.1em;
}`;
*/
