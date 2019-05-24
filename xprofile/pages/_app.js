import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
	// static async getInitialProps({ Component, ctx }) {
		// const content = (await import(`../docs/pages/about.md`)).default;
		// const content = { test: true };
		// console.log('content:app:', content);
		// return { content };
		//     let pageProps = {};
		//   console.log('ctx:',ctx);
		// if (Component.getInitialProps) {
		//   pageProps = await Component.getInitialProps(ctx);
		//   pageProps['myName'] = 'sushant'
		// }
		// return { pageProps };
	// }

	// render() {
		// const { Component, pageProps } = this.props;
		// console.log(pageProps);
		// return (
		// 	<Container>
		// 		<Component {...pageProps} />
		// 	</Container>
		// );
	// }
}

export default MyApp;
