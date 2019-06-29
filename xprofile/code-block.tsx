import React from "react";
// import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// class CodeBlock extends PureComponent {
//     static propTypes = {
//         value: PropTypes.string.isRequired,
//         language: PropTypes.string
//     };

//     static defaultProps = {
//         language: null
//     };

//     render() {
//         let { language, value } = this.props;
//         language = 'javascript';
//         return (
//             <SyntaxHighlighter language={language} style={xonokai}>
//                 {value}
//             </SyntaxHighlighter>
//         );
//     }
// }

function CodeBlock({value, language}) {
    return <SyntaxHighlighter language={language} style={duotoneDark}>
        {value}
    </SyntaxHighlighter>
}


export default CodeBlock;