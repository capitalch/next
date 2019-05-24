import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import Contact from '../components/contact';
import GlobalStyle from '../handy/globalStyle';

const ContactPage = () => (
	<div>
		<GlobalStyle />
		<Head title="Home" />
		<Layout isBanner={true} ><Contact></Contact></Layout>
	</div>
);

export default ContactPage;