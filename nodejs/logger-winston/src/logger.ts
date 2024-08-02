import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize, prettyPrint} = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "debug",
  format: combine(colorize(), timestamp(), json(), prettyPrint()),
  transports: [
    // writting in the console
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: "app.log" }), // storing in FILE
  ],
});

export default logger;
