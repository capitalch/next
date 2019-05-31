import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';
import Contact from '../components/contact';
import Skillset from '../components/skillset';
// import Blogs from '../components/blogs';

const slugMapping = {
	about: 'Home for Sushant',
	contact: 'Contact details of Sushant',
	resume: 'Resume of Sushant',
	skillset: 'Skillsets of Sushant',
	academics: 'Academics of Sushant',
	projects: 'Projects done by Sushant',
	qa: 'Questions and answers by Sushant',

}
const IndexPage = ({ content, slug }) => {
	return (
		<div>
			<GlobalStyle />
			<Head title={slugMapping[slug]} />
			{getPageContent({ content, slug })}
		</div>
	);
};

IndexPage.getInitialProps = async ({ res }) => {
	let slug = res.locals.slug || 'about';
	(!allPages[slug]) && (slug = 'about');

	let content;
	(allPages[slug].isMDFile) && (content = (await import(`../docs/pages/${slug}.md`)).default)
	// const skills = (await import(`../docs/skills.json`)).default
	// console.log(skills);
	return { content, slug };
};

function getPageContent({ content, slug }) {
	let Ret;
	if (allPages[slug].isMDFile) {
		Ret = <Layout content={content} isBanner={allPages[slug].isBanner} />;
	} else {
		Ret = <Layout isBanner={allPages[slug].isBanner}>{allPages[slug].component()}</Layout>;
	}
	return Ret;
}

const allPages = {
	about: { isBanner: true, isMDFile: true },
	contact: { isBanner: true, isMDFile: false, component: () => <Contact></Contact> },
	resume: { isBanner: false, isMDFile: true },
	skillset: { isBanner: false, isMDFile: false, component: () => <Skillset></Skillset> },
	academics: { isBanner: false, isMDFile: true },
	projects: { isBanner: false, isMDFile: true },
	qa: { isBanner: false, isMDFile: true },
	// blogs: { isBanner: false, isMDFile: false, component: () => <Blogs></Blogs> }
}

export default IndexPage;

/*

*/
