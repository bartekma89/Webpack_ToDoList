const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJSPlugin = require('optimize-js-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'build/'),
		filename: 'index.bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							module: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new UglifyJSPlugin(),
		new OptimizeJSPlugin({
			sourceMap: false,
		}),
	],
};
