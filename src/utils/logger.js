import { createLogger, transports, format } from 'winston'

const logger = createLogger({
    level: 'silly',
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.colorize({ all: true }),
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'application.log' }),
    ],
})
export default logger
