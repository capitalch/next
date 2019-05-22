import React from 'react';
import styled from 'styled-components';
// import Header from './header';

const StyledLayout = styled.div`
	display: grid;
	grid-template-areas: "header header header" "banner banner banner" "left main right";
	grid-template-columns: 20% auto 20%;
	grid-gap: 0.1em;
`;

const StyledHeader = styled.div`
	grid-area: header;
    background-color: brown;
    height: 40px;
`

const Banner = styled.img`
	grid-area: banner;
	width: 100%;
    height: 200px;
    background-color:aqua;
`;
function Layout() {
	return (
		<StyledLayout>
			<StyledHeader>Home</StyledHeader>
			{/* <img src="/static/images/banner1-gray.jpg" style={{ 'grid-area': 'banner', width:'100%', height:'200px' }} /> */}
			<Banner >
               
            </Banner>
		</StyledLayout>
	);
}

export default Layout;

/*

	.header {
		grid-area: header;
	}
	.left {
		grid-area: left;
		overflow-y: auto;
	}
	.main {
		grid-area: main;
		overflow-y: auto;
	}
	.footer {
		grid-area: footer;
	}
*/
