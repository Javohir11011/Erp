import database from './db.js';
import logger from '../utils/logger.js';

export const createTable = async () => {
    try {
        // Users table
        if (!(await database.schema.hasTable('users'))) {
            await database.schema.createTable('users', (table) => {
                table.increments('id').primary();
                table.string('name');
                table.string('email').unique();
                table.string('password').notNullable();
                table.enu('role', ['student', 'teacher', 'admin']).defaultTo('student');
                table.timestamps(true, true);
            });
        }

        // Homework table
        if (!(await database.schema.hasTable('homework'))) {
            await database.schema.createTable('homework', (table) => {
                table.increments('id').primary();
                table.string('description');
                table.enu('role', ['update', 'noUpdate']).defaultTo('noUpdate');
                table.timestamps(true, true);
            });
        }

        // Lesson table
        if (!(await database.schema.hasTable('lesson'))) {
            await database.schema.createTable('lesson', (table) => {
                table.increments('id').primary();
                table.string('lessonVideo');
                table.string('comment');
                table.integer('raiting');
                table.integer('homework_id').references('id').inTable('homework');
                table.timestamps(true, true);
            });
        }

        // Teacher table
        if (!(await database.schema.hasTable('teacher'))) {
            await database.schema.createTable('teacher', (table) => {
                table.increments('id').primary();
                table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
            });
        }

        // Student table
        if (!(await database.schema.hasTable('student'))) {
            await database.schema.createTable('student', (table) => {
                table.increments('id').primary();
                table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
                table.boolean('permisson').notNullable();
            });
        }

        // Courses table
        if (!(await database.schema.hasTable('courses'))) {
            await database.schema.createTable('courses', (table) => {
                table.increments('id').primary();
                table.string('name');
                table.string('description');
                table.integer('lesson_id').unsigned().references('id').inTable('lesson');
                table.timestamps(true, true);
            });
        }

        // Assignment table
        if (!(await database.schema.hasTable('assigment'))) {
            await database.schema.createTable('assigment', (table) => {
                table.increments('id').primary();
                table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
                table.integer('teacher_id').references('id').inTable('teacher').onDelete('CASCADE');
                table.integer('student_id').references('id').inTable('student').onDelete('CASCADE');
            });
        }

        // Payment table
        if (!(await database.schema.hasTable('payment'))) {
            await database.schema.createTable('payment', (table) => {
                table.increments('id').primary();
                table.string('account_id');
                table.decimal('amount');
                table.string('currency');
                table.datetime('payment_date');
                table.string('status');
                table.string('stripe_payment_id');
            });
        }

        // Account table
        if (!(await database.schema.hasTable('account'))) {
            await database.schema.createTable('account', (table) => {
                table.increments('id').primary();
                table.string('email');
                table.date('date_created');
                table.string('plan');
                table.string('referrer');
                table.boolean('active');
            });
        }
    } catch (error) {
        logger.error(error.message);
    }
};