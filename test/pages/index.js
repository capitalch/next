import React from 'react';

const Home = ({pageProps}) => {
	console.log(pageProps)
	return <div>Test</div>
};

// Home.getInitialProps = async ({req}) => {
// 	console.log('url:',req.url)
// 	return {test:true}
// };

export default Home;

/*


	// const Content = (require('../docs/home.mdx')).default
	// console.log({ ...Content })
	// console.log(Content.default.Function);
	// const content = content1.default;
	// console.log({ ...Content.default });
const {
    default: Component,
    meta: { title }
  } = require("../posts/" + name)

  return {
    Component,
    title
  }

import React from 'react'
import Document from '../md/markdown.md'
const H1 = props => <h1 style={{ color: 'tomato' }} {...props} />
const InlineCode = props => <code id="codes" style={{ color: 'purple' }} {...props} />
const Code = props => <code id="codes" style={{ fontWeight: 600 }} {...props} />
const Pre = props => <pre id="codes" style={{ color: 'red' }} {...props} />
export default () => <Document components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }} />



const mdx = require('@mdx-js/mdx')

const result = await mdx(`
# Hello, MDX

I <3 Markdown and JSX
`)

console.log(result)
*/
