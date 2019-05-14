import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

function Post(props) {
    return (
        <div>
            <ReactMarkdown escapeHtml={false} source={props.content} />
            <p>
                <Link href="/posts">
                    <a>posts</a>
                </Link>
            </p>
        </div>
    );
}

Post.getInitialProps = async ({ req, res, query }) => {
    const slug = res.locals.slug
    const content = (await require(`../docs/${slug}.md`)).default;

    return { content };
}

export default Post

