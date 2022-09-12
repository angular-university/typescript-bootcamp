
import * as winston from "winston";

export const logger = winston.createLogger({
   level: process.env.LOGGER_LEVEL,
   format: winston.format.json({
      space: 4
   }),
   transports: [
       new winston.transports.File({
          filename: "logs/all.log"
       }),
      new winston.transports.File({
         filename: "logs/error.log",
         level: "error"
      })
   ]
});

if (process.env.NODE_ENV != "production") {
   logger.add(new winston.transports.Console({
      format: winston.format.simple()
   }));
}




