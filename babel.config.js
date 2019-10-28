module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-flow',
	],
	plugins: [
		'add-module-exports',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-class-properties',
		[ 'module-resolver', {
			root: './',
			alias: {
				commands: './src/commands',
				tools: './src/tools',
			},
		} ],
	],
};
