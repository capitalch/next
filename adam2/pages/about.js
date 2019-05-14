import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default class extends React.Component {
	static async getInitialProps({ req }) {
		const content = (await require(`../docs/about.md`)).default;
		console.log(content);
		return { content };
	}

	render() {
		return (
			<div>
				<ReactMarkdown escapeHtml={false} source={this.props.content} />
				<p>
					<Link href = "/">
                        <a>home</a>
                    </Link>
				</p>
			</div>
		);
	}
}
