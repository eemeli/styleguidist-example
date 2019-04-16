module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	getExampleFilename(componentPath) {
		return componentPath.replace(/\.jsx?$/, '.examples.md')
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
};
