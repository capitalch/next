const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

// module.exports = withTypescript(withSass);

module.exports = {
	// withTypescript,
	// withSass,
	// webpack: function(config) {
	// 	config.module.rules.push({
	// 		test: /\.md$/,
	// 		use: 'raw-loader'
	// 	});
	// 	return config;
	// }
};

/*
,
	target: 'serverless'

module.exports = withTypescript(
	withSass({
		webpack: function(config) {
			config.module.rules.push({
				test: /\.md$/,
				use: 'raw-loader'
			});
			return config;
		}
	})
)
*/
