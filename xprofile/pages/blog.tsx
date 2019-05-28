import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Converter } from 'showdown';
var Markdown = require('react-remarkable');

function BlogPage({content, meta}) {
    console.log(meta)
    return (
        <div>
            {/* <ReactMarkdown escapeHtml={false} source={content} disallowedTypes = {['link']}/> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {/* <Markdown source={content}></Markdown> */}
            
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

    const converter = new Converter({metadata:true});
    const d = (await require(`../docs/blogs/${slug}.md`));
    const content = converter.makeHtml(d.default);
    const meta = converter.getMetadata();

    // const text      = `# hello, markdown!`,
    // content      = converter.makeHtml(text);

    // const content      = d.default
    // const meta = {}

    // const d = (await require(`../docs/blogs/${slug}.md`));
    // const content = d.default;
    return { content , meta};
}

export default BlogPage