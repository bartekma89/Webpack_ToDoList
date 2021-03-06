const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJSPlugin = require('optimize-js-plugin');

let env = process.env.NODE_ENV || 'development';

var plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body',
	}),
	new webpack.HotModuleReplacementPlugin(),
];

console.log('NODE_ENV: ', env);

if (env === 'production') {
	plugins.push(
		new UglifyJSPlugin(),
		new OptimizeJSPlugin({
			sourceMap: false,
		})
	);
}

module.exports = {
	entry: ['react-hot-loader/patch', './src/index.js'],

	devServer: {
		contentBase: path.join(__dirname, 'build'),
		hot: true,
	},

	devtool: 'eval',

	devServer: {
		contentBase: path.join(__dirname, 'build'),
		hot: true,
	},

	devtool: 'eval',

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js',
		publicPath: '/',
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

	plugins: plugins,
};
