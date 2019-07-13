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

  setSchema() {
    return {
      __html: `
      <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Blog",
        "url": "http://www.sushantagrawal.com/blog/elastic-search"
      }
      </script>
      <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Kush Infotech",
          "url": "http://kushinfotech.com",
          "sameAs": [
            "https://www.facebook.com/sushant.agrawal.90",
            "https://sushant-agrawal.business.site/?m=true"
          ]
        }
      </script>
      `
    }
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
            <script dangerouslySetInnerHTML={this.setSchema()} />
          </>
          }
        </body>
      </Html>
    )
  }

}