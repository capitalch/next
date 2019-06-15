import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import GlobalStyle from '../handy/globalStyle'
import Contact from '../components/contact'
import Skillset from '../components/skillset'
import axios from 'axios'
import settings from '../settings.json'
import Comments from '../components/comments'

const slugMapping = {
	home: 'Home',
	about: 'About Sushant',
	contact: 'Contact details of Sushant',
	resume: 'Resume of Sushant',
	skillset: 'Skillsets of Sushant',
	academics: 'Academics of Sushant',
	projects: 'Projects done by Sushant',
	qa: 'Questions and answers by Sushant',

}

const IndexPage = ({ content, slug, pageComments }) => {
	return (
		<div>
			<GlobalStyle />
			<Head title={slugMapping[slug]} />
			{getPageContent({ content, slug, pageComments })}
		</div>
	);
};

IndexPage.getInitialProps = async ({ asPath }) => {
	let slug = asPath.slice(1) || 'home'; // remove first char (/) from asPath

	(!allPages[slug]) && (slug = 'home');
	let content;
	(allPages[slug].isMDFile) && (content = (await import(`../docs/pages/${slug}.md`)).default)

	const url = `${settings.commentsUrl}/${slug}`
	const params = {
		token: settings.token
	}
	const pageComments = (await axios.get(url, {
		params: params
	})).data

	return { content, slug, pageComments };
};

function getPageContent({ content, slug, pageComments }) {
	let Ret;
	if (allPages[slug].isMDFile) {
		Ret = <Layout isBanner={allPages[slug].isBanner} currentPage={slug} content={content}><Comments pageComments={pageComments} slug={slug}></Comments></Layout>;
	} else {
		Ret = <Layout isBanner={allPages[slug].isBanner} currentPage={slug}>{allPages[slug].component()} <Comments pageComments={pageComments} slug={slug}></Comments></Layout>;
	}
	return Ret;
}

const allPages = {
	home: { isBanner: true, isMDFile: true },
	about: { isBanner: true, isMDFile: true },
	contact: { isBanner: true, isMDFile: false, component: () => <Contact></Contact> },
	resume: { isBanner: false, isMDFile: true },
	skillset: { isBanner: false, isMDFile: false, component: () => <Skillset></Skillset> },
	academics: { isBanner: false, isMDFile: true },
	projects: { isBanner: false, isMDFile: true },
	qa: { isBanner: false, isMDFile: true }//,
	// blogs: { isBanner: false, isMDFile: false, component: () => <Blogs></Blogs> }
}

export default IndexPage;

/*

*/
