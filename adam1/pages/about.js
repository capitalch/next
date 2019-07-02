import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

function About({content}){
	return <div>
	<ReactMarkdown escapeHtml={false} source={content} />
	<p>
		<Link href = "/">
			<a>home</a>
		</Link>
	</p>
</div>
}

About.getInitialProps = async ({ req})=>{
	const content = (await require(`../docs/about.md`)).default;
	return { content };
}

export default About

