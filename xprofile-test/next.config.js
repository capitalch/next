const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
// const withCss = require('@zeit/next-css');
// const withMDX = require('@next/mdx')({
// 	extension: /\.mdx?$/
// });

module.exports = withTypescript(
	withSass(
		{
			cssModules: true,
			webpack: function(config) {
				config.module.rules.push({
					test: /\.md$/,
					use: 'raw-loader'
				});
				config.node = {
					fs: 'empty'
				};
				return config;
			}
		}
		// ,withMDX({
		// 	pageExtensions: [ 'js', 'jsx', 'md', 'mdx' ]
		// })
	)
);

// module.exports = withTypescript(
// 	withCss(

// 		withSass({
// 			webpack: function(config) {
// 				config.module.rules.push({
// 					test: /\.md$/,
// 					use: 'raw-loader'
// 				});
// 				config.node = {
// 					fs: 'empty'
// 				};
// 				return config;
//       },
//       cssModules: true
//     })

// 	)
// );
