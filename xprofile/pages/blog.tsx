import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

function BlogPage({content, d}) {
    console.log(d)
    return (
        <div>
            <ReactMarkdown escapeHtml={false} source={content} />
            <p>
                <a href="/blogs">
                    blogs
                </a>
            </p>
        </div>
    );
}

BlogPage.getInitialProps = async ({res}) => {
    const slug = res.locals.slug
    const d = (await require(`../docs/blogs/${slug}.md`));
    console.log({...d})
    const content = d.default;
    // const matter = content.matter;
    return { content , d};
}

export default BlogPage