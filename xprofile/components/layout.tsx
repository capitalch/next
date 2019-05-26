import React from 'react';
import styled from 'styled-components';
import Header from './header';

import ReactMarkdown from 'react-markdown/with-html';
const banner = false;
const StyledLayout = styled.div`
	display: grid;

	@media(max-width:768px) {
			grid-template-areas: "header" "main" "left";
			grid-template-columns: auto;
			grid-template-rows: auto;
		}

	@media only screen and (max-width:992px) and (min-width:768px){
		grid-template-areas: "header" "main" "left";
		grid-template-columns: auto;
		grid-template-rows: auto;
	}

	@media only screen and (max-width:1500px) and (min-width:992px){
		grid-template-areas: "header header" "left main";
		grid-template-columns: 16% auto;
		grid-template-rows: auto;
	}

	@media only screen and (max-width:4600px) and (min-width:1500px){
		grid-template-areas: "header header header" "banner banner banner" "left main right";
		grid-template-columns: 16% auto 40%;
		grid-template-rows: auto;
}`

const Banner = styled.img`
	grid-area: banner;
	width: 100%;`

const Left = styled.div`
	grid-area: left;
	background-color: white;`

const Right = styled.div`
	grid-area: right;
	background-color: white;
	min-height: 100%;`

const Main = styled.div`
	grid-area: main;
	background-color: white;
	min-height: 100vh;
	line-height: 2rem;
	font-size: 1.3rem;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
	padding-left:1rem;
	padding-right:1.3rem;
	text-align: justify;`

const ProfileImage = styled.img`
	display:block;
	margin:auto;
	padding-top: 2rem;`

const ProfileText = styled.div`
	text-align:center;`

function Layout({ isBanner = true, content = '', children = '' }) {
	return (
		{ banner } && (
			<StyledLayout>
				<Header>Home</Header>
				{isBanner && <Banner src="/static/images/banner1-gray.jpg" alt="image" ht="200px" />}
				<Left>
					<ProfileImage src="/static/images/sush3.jpg" />
					<ProfileText>
						Sushant Agrawal <div>capitalch@gmail.com</div>
					</ProfileText>
				</Left>
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

export default Layout;

/*

Layout.getInitialProps = async () => {
const content = (await require(`../docs/pages/home.md`)).default;
return {content};
}
const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)
*/
