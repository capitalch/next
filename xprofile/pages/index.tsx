import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';
import Contact from '../components/contact';
import Skillset from '../components/skillset';
// import Blogs from '../components/blogs';

const slugMapping = {
	home: 'Home for Sushant',
	contact: 'Contact details of Sushant',
	resume: 'Resume of Sushant',
	skillset: 'Skillsets of Sushant',
	academics: 'Academics of Sushant',
	projects: 'Projects done by Sushant',
	qa: 'Questions and answers by Sushant',

}

{/* <meta name="Description" content="Put your description here."> */}

const IndexPage = ({ content, slug }) => {
	return (
		<div>
			<GlobalStyle />
			<Head title={slugMapping[slug]} />
			{getPageContent({ content, slug })}
		</div>
	);
};

IndexPage.getInitialProps = async ({asPath }) => {
	let slug = asPath.slice(1) || 'home'; // remove first char (/) from asPath

	(!allPages[slug]) && (slug = 'home');
		let content;
		(allPages[slug].isMDFile) && (content = (await import(`../docs/pages/${slug}.md`)).default)
	return { content, slug };
};

function getPageContent({ content, slug }) {
	let Ret;
	if (allPages[slug].isMDFile) {
		Ret = <Layout currentPage={slug} content={content} />;
	} else {
		Ret = <Layout currentPage={slug}>{allPages[slug].component()}</Layout>;
	}
	return Ret;
}

const allPages = {
	home: { isBanner: true, isMDFile: true },
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
