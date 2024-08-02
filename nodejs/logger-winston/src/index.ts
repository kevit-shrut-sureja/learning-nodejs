import express from "express";
import logger from "./logger";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.get("", (req, res) => {
  logger.info('GET')
  logger.debug('GET')
  logger.error('GET')
  logger.warn('GET')
  res.send("GET request reached");
});

app.post("", (req, res) => {
  res.send("POST request reached");
});

app.listen(3000, () => {
  console.log(`running on 3000`);
});
