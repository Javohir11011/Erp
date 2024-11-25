import connectDb from '../database/db.js'

export const getAllTeacherService = async () => {
    try {
        const currenrUser = await connectDb
            .select('*')
            .from('teacher')
            .returning('*')
        if (!currenrUser) {
            throw new Error('Error...')
        }
        return currenrUser
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdTeacherService = async (id) => {
    try {
        const currentUser = await connectDb
            .select('*')
            .from('teacher')
            .where('id', id)
            .returning('*')
        return currentUser[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createTeacherService = async (data) => {
    try {
        const currenrUser = await connectDb('teacher')
            .insert(data)
            .returning('*')
        if (!currenrUser) {
            throw new Error('Error!!!')
        }
        return currenrUser[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteTeacherService = async (id) => {
    try {
        const currentUser = await connectDb
            .select('*')
            .from('teacher')
            .where('id', id)
            .del()
            .returning('*')
        return currentUser[0]
    } catch (error) {
        throw new Error(error)
    }
}
