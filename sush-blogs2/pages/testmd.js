import React from 'react';
import Markdown from 'react-markdown';
import { Converter } from 'showdown';

function TestMD({ html }) {
    const content = {__html:html};
	return <div dangerouslySetInnerHTML={content}></div>;
}

TestMD.ContentMarkdown = `# Your markdown here \n <h1>This won't be translated into HTML</h1>`;

// TestMD.getInitialProps = async ({ req }) => {
    // const content = await import(`../posts/post2.md`);
	// const converter = new Converter({ metadata: true });
    // const html = converter.makeHtml(content.default);// default is important
    
	// return { html };
// };

export default TestMD;

/*
import * as testMd from 'raw-loader!./test.md';
dangerouslySetInnerHTML={{ __html: html }}
{<Markdown 
             source={props.content}>
            </Markdown>  }
*/
