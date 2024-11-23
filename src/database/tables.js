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
        //courses table
        if (!(await database.schema.hasTable('courses'))) {
            await database.schema.createTable('courses', (table) => {
                table.increments('id').primary(),
                    table.string('name'),
                    table.string('description'),
                    table.timestamps(true, true)
            })
        }
        //assignment table
        if (!(await database.schema.hasTable('courses'))) {
            await database.schema.createTable('courses', (table) => {
                table.increments('id').primary(),
                    table
                        .integer('user_id')
                        .references('id')
                        .inTable('users')
                        .onDelete('CASCADE'),
                    table
                        .integer('teache_id')
                        .references('id')
                        .inTable('teachers')
                        .onDelete('CASCADE'),
                    table
                        .integer('student_id')
                        .references('id')
                        .inTable('students')
                        .onDelete('CASCADE')
            })
        }
        //payment table
        if (!(await database.schema.hasTable('courses'))) {
            await database.schema.createTable('courses', (table) => {
                table.increments('id').primary(),
                    table.string('account_id'),
                    table.decimal('amount'),
                    table.string('currency'),
                    table.datetime('payment_date'),
                    table.string('status'),
                    table.string('stripe_payment_id')
            })
        }
        //account table
        if (!(await database.schema.hasTable('courses'))) {
            await database.schema.createTable('courses', (table) => {
                table.increments('id').primary(),
                    table.string('email'),
                    table.date('date_created'),
                    table.string('plan'),
                    table.string('referrer'),
                    table.boolean('active')
            })
        }
    }
    } catch (error) {
        logger.error(error.message)
    }
}
