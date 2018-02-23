<<<<<<< HEAD
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJSPlugin = require('optimize-js-plugin');
=======
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeJSPlugin = require("optimize-js-plugin");
>>>>>>> a645025cd2d4acee1d755f005a152d9d607e85f0

let env = process.env.NODE_ENV || "development";

var plugins = [
	new HtmlWebpackPlugin({
		template: "src/index.html",
		filename: "index.html",
		inject: "body"
	}),
<<<<<<< HEAD
	new webpack.HotModuleReplacementPlugin(),
=======
	new webpack.HotModuleReplacementPlugin()
>>>>>>> a645025cd2d4acee1d755f005a152d9d607e85f0
];

console.log("NODE_ENV: ", env);

if (env === "production") {
	plugins.push(
		new UglifyJSPlugin(),
		new OptimizeJSPlugin({
			sourceMap: false
		})
	);
}

module.exports = {
	entry: ["react-hot-loader/patch", "./src/index.js"],

	devServer: {
		contentBase: path.join(__dirname, "build"),
		hot: true
	},

	devtool: "eval",

	devServer: {
		contentBase: path.join(__dirname, 'build'),
		hot: true,
	},

	devtool: 'eval',

	output: {
<<<<<<< HEAD
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js',
		publicPath: '/',
=======
		path: path.resolve(__dirname, "build"),
		filename: "index.bundle.js",
		publicPath: "/"
>>>>>>> a645025cd2d4acee1d755f005a152d9d607e85f0
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							module: true
						}
					}
				]
			}
		]
	},

	plugins: plugins
};
