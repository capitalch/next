import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // console.log('hisname:',ctx.res.locals)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      pageProps['myName'] = 'sushant'
    }
    // console.log(pageProps);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;