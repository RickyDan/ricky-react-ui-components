var webpack = require('webpack');
var config  = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtactTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

config.devtool = '#source-map';
config.output.publicPath = '/dist/'; //资源路径
config.output.filename = '[name].js'; //入口js命名
config.output.chunkFileName = '[name].chunk.js'; //路由js命名

config.plugins = (config.plugins || [])
	.concat([
		new ExtractTextPlugin('[name].css',{ allChunks: true, resolve: ['modules']}), //提取css
		new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'), // 提取第三方库
		new HtmlWebpackPlugin({       // 构建html文件
			filename: '../index.html',
			template: './src/template/index.html',
			inject: 'body'
		});
	]);
//写入环境变量
fs.open('./src/config/env.js','w',function(err,id){
	var buf = 'module.exports = "development;"';
	fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
});

module.exports = config;