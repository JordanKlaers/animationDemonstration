const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

function resolve (dir) {
	return path.join(__dirname, './', dir)
}

module.exports = {
	entry: {
		app: './src/main.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: 'dist/',
		publicPath: '/dist/',
		watchContentBase: true,
		port: 9000,
		open: true
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss', '.jpg'],
		alias: {
			'src': resolve('src'),
			'scss': resolve('./src/assets/scss'),
			'images': resolve('./src/assets/images'),
			'transitions': resolve('src/components/transitionsExamples'),
			'keyFrame': resolve('src/components/keyFrameExamples')
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		]
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html'
		}),
		new HtmlWebpackHarddiskPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/'
	}
};