import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';
import Contact from '../components/contact';
import Skillset from '../components/skillset';
import Blogs from '../components/blogs';

const allMDPages: string[] = [ 'about', 'resume', 'academics', 'projects', 'qa' ];
const comps = {
	contact: () => <Contact />,
	skillset: () => <Skillset />,
	blogs: () => <Blogs />
};

function getPageContent({ content, isMDPage, slug }) {
	let Ret;
	if (isMDPage) {
		Ret = <Layout content={content} isBanner={true} />;
	} else {
		Ret = <Layout isBanner={true}>{comps[slug]()}</Layout>;
	}
	return Ret;
}

const IndexPage = ({ content, isMDPage, slug }) => {
	return (
		<div>
			<GlobalStyle />
			<Head title="Home" />
			{/* {isMDPage && <Layout content={content} isBanner={true} />} */}
			{getPageContent({ content, isMDPage, slug })}
		</div>
	);
};

IndexPage.getInitialProps = async ({ res }) => {
	// console.log('pathname:', pathname)
	const slug = res.locals.slug || 'about';
	// console.log('slug:', slug);
	let content;
	let isMDPage = false;
	if (allMDPages.includes(slug)) {
		content = (await import(`../docs/pages/${slug}.md`)).default;
		isMDPage = true;
	}
	// const content = (await import(`../docs/pages/about.md`)).default;
	return { content, isMDPage, slug };
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
