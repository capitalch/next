import React from 'react';
import styled, {css} from 'styled-components';
import Header from './header';
import ReactMarkdown from 'react-markdown/with-html';

const StyledLayout = styled.div`
	display: grid;
	min-height:calc(100vh - 3px); 
	@media(max-width: 500px){
		grid-template-areas:'header' 'main' 'left';
    	grid-auto-rows: min-content auto auto;
	}
	
	@media only screen and (min-width: 501px) and (max-width: 992px) {
		grid-template-areas: 'header header' 'banner banner' 'main right' 'left right';
		grid-auto-rows: min-content 100px auto auto;
		grid-template-columns: auto minmax(10%,20%);
	}

	@media only screen and (min-width: 993px) and (max-width: 1200px) {
		grid-template-areas: 'header header header' 'banner banner banner' 'left main right';
		grid-template-columns: 16% auto 25%;
		grid-template-rows: 58px 200px auto;
	}

	@media only screen and (min-width: 1201px) and (max-width: 1500px){
		grid-template-areas: 'header header header' 'banner banner banner' 'left main right';
		grid-template-columns: 16% auto 30%;
		grid-template-rows: 58px 200px auto;
	}

	@media only screen and (min-width: 1501px) {
		grid-template-areas: 'header header header' 'banner banner banner' 'left main right';
		grid-template-columns: 16% auto 43%;
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

const StyledRight = styled.div`
		grid-area: right;
		background-color: #fff;;
		@media(max-width: 992px){
			display:none;
		}
	`
const StyledMain = styled.div`
		grid-area: main;
		background-color:#fff;
		line-height: 2rem;
		font-size: 1.3rem;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
		padding-left:2rem;
		padding-right:2.3rem;
		text-align: justify;
	`
const ProfileImage = styled.img`
		display:block;
		margin:auto;
		padding-top: 2rem;
	`

const ProfileText = styled.div`
		text-align:center;
	`

const StyledLeft = styled.div`
		grid-area: left;
		background-color: #fff;
	`

function Layout({ currentPage = '', content = '', children = '' }) {
	return (
		<StyledLayout>
			<Header currentPage={currentPage}>Home</Header>
			<StyledBanner src="/static/images/banner1.jpg" alt="banner image"></StyledBanner>
			<StyledLeft>
			<ProfileImage src="/static/images/sush4.jpg" alt = 'Image of Sushant Agrawal'/>
				<ProfileText>
					Sushant Agrawal <div>capitalch@gmail.com</div>
				</ProfileText>
			</StyledLeft>
			<StyledRight></StyledRight>
			{content && <StyledMain>
				<ReactMarkdown escapeHtml={false} source={content} />
			</StyledMain>}
			{children && <StyledMain>{children}</StyledMain>}
		</StyledLayout>
	);
}

export default Layout;
/*
*/
