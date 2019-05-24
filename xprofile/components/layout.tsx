import React from 'react';
import styled from 'styled-components';
import Header from './header';

import ReactMarkdown from 'react-markdown/with-html';
const banner = false;
const StyledLayout = styled.div`
	display: grid;
	grid-template-areas: "header header header" "banner banner banner" "left main right";
	grid-template-columns: 20% auto 33%;
	grid-template-rows: auto;
	/* grid-gap: 0.1em; */
`;

const Banner = styled.img`
	grid-area: banner;
	width: 100%;
	height: ${(props) => props.ht};
	background-color: aqua;
`;

const Left = styled.div`
	grid-area: left;
	background-color: whitesmoke;
	min-height: 100vh;
`;

const Right = styled.div`
	grid-area: right;
	background-color: whitesmoke;
	min-height: 100%;
`;

const Main = styled.div`
	grid-area: main;
	background-color: whitesmoke;
	min-height: 100vh;
`;

function Layout({ isBanner = true, content = '', children = '' }) {
	return (
		{ banner } && (
			<StyledLayout>
				<Header>Home</Header>
				{isBanner && <Banner src="/static/images/banner1-gray.jpg" alt="image" ht="200px" />}
				<Left />
				{content && (
					<Main>
						<ReactMarkdown escapeHtml={false} source={content} />
					</Main>
				)}
				{children && <Main>{children}</Main>}
				<Right />
			</StyledLayout>
		)
	);
}

// Layout.getInitialProps = async () => {
// 	const content = (await require(`../docs/pages/home.md`)).default;
// 	return {content};
// }

export default Layout;

/*
const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)
*/
