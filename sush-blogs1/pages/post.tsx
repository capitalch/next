function Post({ content, data, html }) {
    const h = {__html:html}
	return (
		<div>
			<div>{content}</div>
			<div dangerouslySetInnerHTML = {h}></div>
		</div>
	);
}

Post.getInitialProps = async ({ req, query }) => {
	const { content, data, html } = query;
	return { content, data, html };
};

export default Post;
