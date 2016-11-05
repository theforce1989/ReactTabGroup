var path = require("path");

module.exports = {
	entry: "./lib/main.js",
	devtool: "#cheap-eval-source-map",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				cacheDirectory: true
			}
		],
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "eslint"
			}
		]
	},
	resolve: {
		root: [
			path.resolve("./lib")
		],
		extensions: ["", ".js", ".jsx", ".less", ".css"]
	}
};
