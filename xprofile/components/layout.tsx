import React from 'react';
import styled from 'styled-components';
import Header from './header';
import ReactMarkdown from 'react-markdown/with-html';

const StyledLayout = styled.div`
	display: grid;
	min-height:calc(100vh - 3px);
	@media(max-width: 500px){
		grid-template-areas:'header' 'main' 'left';
    	grid-auto-rows: min-content auto auto;
		/* .banner {
			display:none;
		} */

		.right{
			display:none;
		}
	}

	@media only screen and (min-width: 501px) and (max-width: 992px) {
		grid-template-areas: 'header' 'banner' 'main' 'left';
		grid-auto-rows: min-content 100px auto auto;
		.right{
			display:none;
		}
	}

	@media only screen and (min-width: 993px) and (max-width: 1200px) {
		grid-template-areas: 'header header header' 'banner banner banner' 'left main right';
		grid-template-columns: 16% auto 16%;
		grid-template-rows: 58px 200px auto;
	}

	@media only screen and (min-width: 1201px){
		grid-template-areas: 'header header header' 'banner banner banner' 'left main right';
		grid-template-columns: 16% auto 35%;
		grid-template-rows: 58px 200px auto;
	}
	
`

const StyledBanner = styled.img`
		grid-area: banner;
		width: 100%;
		height:100%;
		@media(max-width: 500px){
			display:none;
		}
	`

const StyledLeft = styled.div`
		grid-area: left;
		background-color: yellow;
	`
const StyledRight = styled.div`
		grid-area: right;
		background-color: red;
		@media(max-width: 992px){
			display:none;
		}
	`
const Styledmain = styled.div`
		grid-area: main;
		background-color:#fff;
		line-height: 2rem;
		font-size: 1.3rem;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
		padding-left:1rem;
		padding-right:1.3rem;
		text-align: justify;
		/* height:100vh; */
		/* height:4fr; */
	`



function Layout({ currentPage = '', isBanner = true, content = '', children = '' }) {


	return (
		<StyledLayout>
			<Header currentPage={currentPage}>Home</Header>
			<StyledBanner src="/static/images/banner1.jpg" alt="image"></StyledBanner>
			<StyledLeft></StyledLeft>
			<StyledRight></StyledRight>
			{content && <Styledmain>
				<ReactMarkdown escapeHtml={false} source={content} />
			</Styledmain>}
		</StyledLayout>
	);
}

export default Layout;
/*
{isBanner && <Banner src="/static/images/banner1.jpg" alt="image" ht="200px" />}
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
			{children && <Main>{children}</Main>}
			<Right />
*/


/*

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
*/


	/* .left {
		grid-area: left;
		background-color: yellow;
	}

	.main {
		grid-area: main;
		background-color:green;
	}

	.banner {
		grid-area: banner;
		background-color:gray;
	}

	.right {
		grid-area: right;
		background-color: red;
	} */
