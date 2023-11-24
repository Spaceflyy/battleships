const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",

	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Title",
			template: "./src/template.html",
		}),
	],
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "src/assets/images/[name].[ext]",

		// assetModuleFilename: "imgs/[name][ext][query]",
		clean: true,
	},
	// optimization: {
	// 	runtimeChunk: "single",
	// },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
				type: "asset/resource",
			},
		],
	},
};
