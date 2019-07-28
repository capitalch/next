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

  setSchema1() {
    return {
      __html: `
     
      {
        "@context": "http://schema.org",
        "@type": "Blog",
        "url": "http://www.sushantagrawal.com/blog/elastic-search"
      }`
    }
  }

  setSchema2(){
    return {
      __html:`
        {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Sushant Agrawal",
          "url": "http://www.sushantagrawal.com",
          "sameAs": [
            "https://www.facebook.com/Sushant-Agrawal-684961715281384/",
            "https://sushant-agrawal.business.site/?m=true",
            "https://twitter.com/SusantAgrawal",
            "https://www.linkedin.com/in/sushant1234",
            "https://www.instagram.com/sushantagrawal2/"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "92/2A Bidhan Nagar Road",
            "addressRegion": "Kolkata",
            "postalCode": "700067",
            "addressCountry": "India"
          }
        }
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
            </>
          }
          <>
            {/* <script type="application/ld+json" dangerouslySetInnerHTML={this.setSchema1()} /> */}
            <script type="application/ld+json" dangerouslySetInnerHTML={this.setSchema2()} />
          </>
        </body>
      </Html>
    )
  }

}