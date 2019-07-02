import React from 'react';
import Link from 'next/link';
// import ReactMarkdown from 'react-markdown/with-html';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../CodeBlock';

function Post(props) {
    return (
        <div>
            <ReactMarkdown escapeHtml={false} source={props.content} renderers={{ code: CodeBlock }}/>
            <p>
                <Link href="/posts">
                    <a>posts</a>
                </Link>
            </p>
        </div>
    );
}

Post.getInitialProps = async ({ res}) => {
    const content = res.locals.content;
    return { content };
}

export default Post

