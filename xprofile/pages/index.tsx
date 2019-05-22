import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin:0.1em;
}`

const Home = () => (
	<div>
    <GlobalStyle></GlobalStyle>
		<Head title="Home" />
		<Layout />
	</div>
);

export default Home;
