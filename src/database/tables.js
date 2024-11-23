import database from './db.js'
import logger from '../utils/logger.js'

export const createTable = async () => {
    try {
        if (!(await database.schema.hasTable('users'))) {
            await database.schema.createTable('users', (table) => {
                table.increments('id').primary(),
                    table.string('name'),
                    table.string('email').unique(),
                    table.string('password').notNullable(),
                    table
                        .enu('role', ['student', 'teacher', 'admin'])
                        .defaultTo('student'),
                    table.timestamps(true, true)
            })
        }
    } catch (error) {
        logger.error(error.message)
    }
}
