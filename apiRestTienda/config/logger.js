import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: './log/tienda.log' })
    ]
  });

export default logger;