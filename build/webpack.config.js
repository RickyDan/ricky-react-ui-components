var path = require('path');
var webpack = require('webpack');

module.exports = {
	//入口
	entry: {
		main: './src/main',
		vendor: ['react','redux','react-redux','react-router']
	},
	// 输出
	output: {
		path: path.join(__dirname, './dist');
	},
	//加载器
	module: {
		loaders: [
			{test: /\.js$/,loader: 'babel',exclude: /node_modules/},
			{test: /\.css$/, loader: 'style!css!autoprefixer'},
			{test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
			{test: /\.(gif|jpg|png|svg)\??.*$/,loader: 'url-loader?limit=8192'}
		]
	},
	extensions: ['','.js','.jsx'],
	alias: {
		filter: path.join(__dirname, './src/filters'),
		components: path.join(__dirname,'./src/components')
	},
	plugins: []
}