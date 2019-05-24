import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import Skillset from '../components/skillset';
import GlobalStyle from '../handy/globalStyle';

const ContactPage = () => (
	<div>
		<GlobalStyle />
		<Head title="Home" />
		<Layout isBanner={false} ><Skillset></Skillset></Layout>
	</div>
);

export default ContactPage;