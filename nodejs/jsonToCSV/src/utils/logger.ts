import { createLogger, format, level, silly, transports } from 'winston';

const { combine, colorize, timestamp, json } = format;

/**
 * Custom format for the logger
 */
const consoleLogFormat = format.combine(
	colorize(),
	format.printf(({ level, message, timestamp }) => {
		return `${timestamp} ${level} : ${message}`;
	})
);

/**
 * Logger from winston
 */
const logger = createLogger({
	format: combine(colorize(), timestamp()),
	transports: [
		new transports.Console({ level: 'silly', format: consoleLogFormat }),
		new transports.File({ filename: 'app.log' })
	]
});

export { logger };
