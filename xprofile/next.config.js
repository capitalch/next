const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withTypescript(
	withSass({
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
	})
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
