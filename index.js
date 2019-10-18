'use strict';

import yargs from 'yargs';
import nameColor from './commands/name-color';
import calculateCols from './commands/calculate-cols';


const args = yargs.help('help')
	.command(
		[ 'name <color>' ],
		'get color name for color value',
		(argv) => {
			yargs.positional('color', {
				describe: 'color to name',
				type: 'string',
			});

			return yargs.option('color');
		},
		({ color }) => nameColor(color)
	)
	.command(
		[ 'cols', 'calculate-cols' ],
		'calculate options for number of columns given width and spacing',
		argv => yargs
				.option('availableWidth', {
					alias: [ 'w' ],
					default: 0,
				})
				.option('spacing', {
					alias: [ 's' ],
					default: 0,
				})
				.option('minColWidth', {
					default: 4,
				})
				.option('maxColWidth')
		,
		argv => calculateCols(argv)
	)
	.argv;
