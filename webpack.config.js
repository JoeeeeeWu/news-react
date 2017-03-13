var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
var webpack=require('webpack');
module.exports = {
	entry: {
		main : './src/js/root.js'
	},
	output: {
		path: path.join(__dirname,'src/js'),
		filename: '[name].bundle.js',
		// publicPath: '/disk/',
		publicPath: '/src/js',
		// chunkFilename: '[name].[chunkhash:5].chunk.js'//利用hash做浏览器缓存
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015','react'],
					plugins: [
						["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
  					]
				},
				include: __dirname,
				exclude: /node_modules/
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader',
			}
		]
	},
	resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}
