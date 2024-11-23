import connectDb from '../database/db.js'

export const getAllStudentService = async () => {
    try {
        const currentStudent = await connectDb
            .select('*')
            .from('student')
            .returning('*')
        if (!currentStudent) {
            throw new Error('Error...')
        }
        return currentStudent
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdStudentService = async (id) => {
    try {
        const currentStudent = await connectDb
            .select('*')
            .from('student')
            .where('id', id)
            .returning('*')
        return currentStudent[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createStudentService = async (data) => {
    try {
        const currentStudent = await connectDb('student')
            .insert(data)
            .returning('*')
        if (!currentStudent) {
            throw new Error('Error!!!')
        }
        return currentStudent
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteStudentService = async (id) => {
    try {
        const currentStudent = await connectDb
            .select('*')
            .from('student')
            .where('id', id)
            .del()
            .returning('*')
        return currentStudent[0]
    } catch (error) {
        throw new Error(error)
    }
}
