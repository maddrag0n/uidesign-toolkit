/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');

const { peerDependencies = {} } = require('./package.json');

const config = {
	context: path.resolve(__dirname),
	entry: {
		uidtk: [
			'./src/commands/index.js',
		],
	},
	externals: Object.keys(peerDependencies)
		.reduce((acc, dep) => {
			acc[dep] = `umd ${dep}`;
			return acc;
		}, {}),
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'uidtk.es5.js',
		library: 'uidtk',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
	],
	module: {
		rules: [{
			test: /\.(js)?$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					babelrc: true,
					plugins: [],
				},
			}],
		}],
	},
	resolve: {
		extensions: [ '.js', '.json' ],
	},
	resolveLoader: {
		modules: [ 'node_modules' ],
	},
};

module.exports = config;
