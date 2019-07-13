import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      const isProduction = process.env.NODE_ENV === 'production';
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-50190756-3');
      `
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en-US">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50190756-3" />
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </>
          }
        </body>
      </Html>
    )
  }

}