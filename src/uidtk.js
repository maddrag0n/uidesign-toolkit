/* eslint-disable no-unused-vars */

import yargs from 'yargs';
import { calculateCols, nameColor } from 'commands';


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
				alias: [ 'w', 'W' ],
				default: 0,
			})
			.option('spacing', {
				alias: [ 's', 'S' ],
				default: 0,
			})
			.option('minColWidth', {
				alias: [ 'min' ],
				default: 4,
			})
			.option('maxColWidth', {
				alias: [ 'max' ],
			})
			.option('precision', {
				alias: [ 'p', 'P' ],
				default: 1,
			}),
		argv => calculateCols(argv)
	)
	.argv;
