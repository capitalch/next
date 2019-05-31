import React from 'react';
import styled from 'styled-components';
// import Header from './header';

import ReactMarkdown from 'react-markdown/with-html';

/*
	smaller than or equal to 768 px (smartphones)
	larger than 768 px (small devices, tablets)
	larger than 992 px (medium devices)
	larger than 1200px (large devices)
*/

function Layout({ isBanner = true, content = '', children = '' }) {
	return (
		<StyledLayout>
			<div className='header'>Header</div>
			<div className='banner'>Banner</div>
			<div className='left'>Left</div>
			<div className='right'></div>
			<div className='main'>Main</div>
			{/* <Header>Home</Header>
			{isBanner && <Banner> <img width='100%' src="/static/images/banner1.jpg" ht="200px" /> </Banner>}
			<Left>
				<ProfileImage src="/static/images/sush4.jpg" />
				<ProfileText>
					Sushant Agrawal <div>capitalch@gmail.com</div>
				</ProfileText>
			</Left>
			{content && (
				<Main>
					<ReactMarkdown escapeHtml={false} source={content} />
				</Main>
			)}
			{children && <Main>{children}</Main>} */}
			{/* <Right /> */}
		</StyledLayout>
	);
}

const StyledLayout = styled.div`
	display: grid;
	height:calc(100vh - 3px);
	@media(max-width:768px) {
		grid-template-areas: 'header' 'main' 'left';
		grid-template-rows: 58px auto auto;
		.right {
			display:none;
		}
		.banner {
			display: none;
		}
	}

	@media only screen and (max-width:992px) and (min-width:768px){
		grid-template-areas: 'header' 'banner' 'main' 'left';
		grid-template-rows: 58px 100px auto auto;
		.right {
			display:none;
		}
	}

	@media only screen and (max-width:1200px) and (min-width:992px){
		grid-template-areas: 'header header' 'banner banner' 'left main';
		grid-template-columns: 16% auto;
		grid-template-rows: 58px 200px;
		.right {
			display:none;
		}
	}

	@media only screen and (min-width:1200px) {
		grid-template-areas: 'header header header' 'banner banner banner'  'left main right';
		grid-template-columns: 16% auto 35%;
		grid-template-rows: 58px 200px auto;
	}

	.header {
		grid-area: header;
		background-color:indigo;		
	}
	.banner{
		grid-area: banner;
		background-color:gray;
		width: 100%;
	}
	.left {
		grid-area: left;
		background-color: yellow;
	}
	.right {
		grid-area: right;
		background-color: red;
	}
	.main {
		grid-area: main;
		background-color:green;
		min-height:1fr;
	}
`
//
const Banner = styled.div`
	grid-area: banner;
	background-color:gray;
	width: 100%;
	`
const Header = styled.div`
	grid-area:header;
	background-color:indigo;
`
const Left = styled.div`
	grid-area: left;
	background-color: white;`

const Right = styled.div`
	grid-area: right;
	background-color: red;
	`
const Main = styled.div`
	grid-area:main;
	background-color:green;
`
// const Main = styled.div`
// 	grid-area: main;
// 	background-color: cornsilk;
// 	line-height: 2rem;
// 	font-size: 1.3rem;
// 	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
// 	padding-left:1rem;
// 	padding-right:1.3rem;
// 	text-align: justify;`

const ProfileImage = styled.img`
	display:block;
	margin:auto;
	padding-top: 2rem;
	`

const ProfileText = styled.div`
	text-align:center;`

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
