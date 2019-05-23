import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { createGlobalStyle } from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';

const GlobalStyle = createGlobalStyle`
body{
  margin:0.1em;
}`

const home = 'This is home'

const Home = (props) => (
	<div>
		<GlobalStyle></GlobalStyle>
		<Head title="Home" />
		<Layout content = {props.content}></Layout>
		{/* <ReactMarkdown escapeHtml={false} source={props.content} /> */}
	</div>
);

Home.getInitialProps = async () => {
	const content = (await require(`../docs/pages/home.md`)).default;
	return {content};
}

export default Home;
