import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import diction from '../diction.json'

const defaultDescription = diction.description;// 'Portfolio of Sushant Agrawal'
const defaultOGURL = 'http://sushantagrawal.com'
const defaultOGImage = 'http://sushantagrawal.com/sushant'
const defaultOGType = 'Portfolio of Sushant Agrawal, full stack software developer'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow"></meta>
    <link rel="canonical" href="http://www.sushantagrawal.com/" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />

    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:type" content={props.ogType || defaultOGType} />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="300" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
