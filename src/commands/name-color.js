import ntc from 'ntcjs';
import Color from 'color';
import CONSOLE_COLORS from 'tools/consoleColors';

export default (c) => {
	const color = new Color(c).hex();
	const colorName = ntc.name(color)[1];

	if (process && process.stdout && process.stdout.write) {
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
				+ colorName
				+ CONSOLE_COLORS.Reset
				+ '\n'
		);
	}

	return { color, colorName };
};
