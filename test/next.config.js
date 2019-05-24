const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push(
//       {
//         test: /\.md$/,
//         use: 'raw-loader'
//       }
//     )

//     return config
//   },
// }

/*
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})
*/
