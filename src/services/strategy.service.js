import connectDb from '../database/db.js'

export const Service = {
    findByEmail(email) {
        try {
            return connectDb.select('*').from('users').where('email','=', email)
        } catch (error) {
            throw new Error(error)
        }
    },
    findById(id) {
        try {
            return connectDb.select('*').from('users').where('id', '=', id)
        } catch (error) {
            throw new Error(error)
        }
    },
}
