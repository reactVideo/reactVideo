const path = require('path');
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
const minimizer = env === 'production' ? [new UglifyJsPlugin()] : [];

module.exports = {
    mode: env,
    devtool: 'source-map',
	entry: ['@babel/polyfill','./src/index.js'],
	output: {
		path:__dirname,
		filename: './release/bundle.js'
	},
    node: {
        fs: 'empty'
    },
	module: {
		rules:[{
			test:/\.js?$/,
			exclude:/(node_modules)/,
			loader:'babel-loader'
		},{
            test: /\.css$/,
            exclude:/(node_modules)/,
            loader:[
                {
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                    options:{
                        minimize:true
                    }
                }
            ],
        }]
	},
    devServer: {
        inline: false,
        disableHostCheck: true,
        contentBase: './build',
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 9000,
        stats: {
            chunks: false
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new MiniCssExtractPlugin({
            filename: 'release/[name].css',
            chunkFilename: 'release/[id].css'
        }),
        new CleanWebpackPlugin(['release']),
        new HtmlWebpackPlugin({
            title:'video',
            template: path.resolve(__dirname, './test/index.html'),
            filename: 'index.html',
        }),
    ],
    optimization: {
        noEmitOnErrors: true,
        minimizer,
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
}