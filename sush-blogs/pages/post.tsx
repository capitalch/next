function Post({content,data}) {
    // console.log(query)
	return <div>{content}</div>;
}

Post.getInitialProps = async ({ req, query }) => {
    // console.log('Query:', query);
    const {content, data} = query
	return { content,data };
};

export default Post;
