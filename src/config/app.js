import { config } from 'dotenv'

config()

export const application = {
    PORT: process.env.PORT,
}
