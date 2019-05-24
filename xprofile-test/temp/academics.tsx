import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';

const IndexPage = ({ content }) => (
	<div>
		<GlobalStyle />
		<Head title="Home" />
		<Layout content={content} isBanner={false} />
	</div>
);

IndexPage.getInitialProps = async () => {
	const content = (await import(`../docs/pages/academics.md`)).default;
	return { content };
};

export default IndexPage;