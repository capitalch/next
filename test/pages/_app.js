import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {test:true};
		// console.log('ctx:', ctx);
		// if (Component.getInitialProps) {
		// 	pageProps = await Component.getInitialProps(ctx);
		// 	pageProps['myName'] = 'sushant';
		// }
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		// console.log(pageProps);
		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default MyApp;
