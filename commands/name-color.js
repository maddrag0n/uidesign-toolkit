'use strict';

import ntc from 'ntcjs';
import Color from 'color';
import CONSOLE_COLORS from '../tools/consoleColors';

export default (c) => {
	const color = Color(c).hex();
	process.stdout.write(
		'\n\t'
			+ CONSOLE_COLORS.FgBlue
			+ 'The name for '
			+ CONSOLE_COLORS.FgGreen
			+ CONSOLE_COLORS.Underscore
			+ color
			+ CONSOLE_COLORS.Reset
			+ CONSOLE_COLORS.FgBlue
			+ ' is '
			+ CONSOLE_COLORS.FgGreen
			+ CONSOLE_COLORS.Bright
			+ ntc.name(color)[1]
			+ CONSOLE_COLORS.Reset
			+'\n'
	);
}
