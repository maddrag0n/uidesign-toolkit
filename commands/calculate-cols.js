/**
 * column calculator
 *
 */

import CONSOLE_COLORS from '../tools/consoleColors';


const calculateNetWidth = (availableWidth, spacing, i) => availableWidth - (Math.max(i - 1, 0)) * spacing;

export default ({
    availableWidth,
    spacing,
    minColWidth,
    maxColWidth,
    precision = 1,
}) => {
    const results = [];
    const markup = Math.pow(10, precision - 1);

    for (let i = 1; i <= availableWidth && calculateNetWidth(availableWidth, spacing, i); i++) {
        const netWidth = calculateNetWidth(availableWidth, spacing, i);
        const colWidth = netWidth / i;
        if (
            netWidth * markup % i === 0
            && colWidth >= minColWidth
            && (!maxColWidth || colWidth <= maxColWidth)
        ) {
            results.push({ i, colWidth });
        }
    }

    console.log(`\n\t${CONSOLE_COLORS.Bright}${CONSOLE_COLORS.Underscore}${results.length} Results:${CONSOLE_COLORS.Reset}\n`);
    results.forEach(({ i, colWidth }) => console.log(`\t${CONSOLE_COLORS.FgBlue}${i} columns${CONSOLE_COLORS.Reset} à ${CONSOLE_COLORS.FgGreen}${colWidth}px${CONSOLE_COLORS.Reset}`));
    console.log('\n');
}
