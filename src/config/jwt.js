import { config } from 'dotenv'

config()

export const web = {
    access: {
        secret: process.env.ACCESS_SECRET,
        expiresIn: process.env.ACCESS_SECRET_TIME,
    },
    refresh: {
        secret: process.env.REFRESH_SECRET,
        expiresIn: process.env.REFRESH_SECRET_TIME,
    },
}
