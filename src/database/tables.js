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
        if (!(await database.schema.hasTable('teacher'))) {
            await database.schema.createTable('teacher', (table) => {
                table.increments('id').primary(),
                table
                    .integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .notNullable()
            })
        }
        if (!(await database.schema.hasTable('student'))) {
            await database.schema.createTable('student', (table) => {
                table.increments('id').primary(),
                table
                    .integer('user_id')
                    .unsigned()
                    .references('id')
                    .inTable('users')
                    .notNullable()
                table.boolean('permisson').notNullable()
            })
        }
    } catch (error) {
        logger.error(error.message)
    }
}
