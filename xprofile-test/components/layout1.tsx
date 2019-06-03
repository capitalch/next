import React from 'react';
import styled from 'styled-components';
import Header from './header3';

import ReactMarkdown from 'react-markdown/with-html';

/*
    smaller than or equal to 400px (smart phones) max-width = 400px
        single column header with box menu, main, left

    Between 401px and 992px (tabs) min-width=401px and max-width=992px
        single column header with box menu, banner, main, left

    Between 993px and 1200px (medium device) min-width=993px and max-width=1200px
        three columns with horizontal menu header header header, banner, left main right. left 16%, right 16%
    Above 12001px (large device) min-width=1201px
        three columns with horizontal menu header header header, banner, left main right, lef 16%, right 35%

*/
function Layout({ currentPage = '', isBanner = true, content = '', children = '' }) {
	return (
		<StyledLayout>
			<Header currentPage={currentPage}>Header</Header>
			<div className='banner'></div>
			<div className='left'>Left</div>
			<div className='right'>Main</div>
			<div className='main'>Main</div>
		</StyledLayout>
	);
}

const StyledLayout = styled.div`
	display: grid;
	min-height:calc(100vh - 3px);

	@media(max-width: 500px){
		grid-template-areas:'header' 'main' 'left';
    	grid-auto-rows: min-content auto auto;
		.banner {
			display:none;
		}

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

	.header {
		grid-area: header;
	}
	
	.left {
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
	}
`


export default Layout;
/*

*/

