import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import GlobalStyle from '../handy/globalStyle';

const IndexPage = ({ content }) => (
	<div>
		<GlobalStyle />
		<Head title="Questions and answers" />
		<Layout content={content} isBanner={false} />
	</div>
);

IndexPage.getInitialProps = async () => {
	const content = (await import(`../docs/pages/qa.md`)).default;
	return { content };
};

export default IndexPage;