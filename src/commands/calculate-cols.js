import CONSOLE_COLORS from 'tools/consoleColors';

/**
 * calculate net width
 *
 * @private
 *
 */

const calculateNetWidth = (availableWidth, spacing, i) => availableWidth - (Math.max(i - 1, 0)) * spacing;


/**
 * number of columns calculator
 * ```js
 * import { calculateColumns } from 'uidesign-toolkit';
 * ```
 *
 * @function calculateCols
 * @param {Object} {…}
 * @param {Number} {…}.availableWidth
 * @param {Number} [{…}.spacing=0]
 * @param {Number} [{…}.minColWidth=4]
 * @param {Number} [{…}.maxColWidth]
 * @param {Number} [{…}.precision]
 * @return {Object}	```js
 * {
 * 	availableWidth: Number,
 * 	spacing: Number,
 * 	minColWidth: ?Number,
 * 	maxColWidth: ?Number,
 * 	precision: Number,
 * 	results: [ ?{ numberOfCols: Number, colWidth: Number } ]
 * }
 * ```
 */

export default ({
	availableWidth,
	spacing = 0,
	minColWidth = 4,
	maxColWidth,
	precision = 1,
}) => {
	const results = [];
	const markup = 10 ** (precision - 1);

	for (let i = 1; i <= availableWidth && calculateNetWidth(availableWidth, spacing, i); i++) {
		const netWidth = calculateNetWidth(availableWidth, spacing, i);
		const colWidth = netWidth / i;


		if (
			(netWidth * markup) % i === 0
			&& colWidth >= minColWidth
			&& (!maxColWidth || colWidth <= maxColWidth)
		) {
			results.push({ numberOfCols: i, colWidth });
		}
	}

	if (process && process.stdout && process.stdout.write) {
		process.stdout.write(`\n\t${CONSOLE_COLORS.Bright}${CONSOLE_COLORS.Underscore}${results.length} Results:${CONSOLE_COLORS.Reset}`);
		results.forEach(({ numberOfCols, colWidth }) => process.stdout.write(`\n\t${CONSOLE_COLORS.FgBlue}${numberOfCols} columns${CONSOLE_COLORS.Reset} à ${CONSOLE_COLORS.FgGreen}${colWidth}${CONSOLE_COLORS.Reset}`));
		process.stdout.write('\n\n');
	}

	return {
		availableWidth,
		spacing,
		maxColWidth,
		minColWidth,
		precision,
		results,
	};
};
