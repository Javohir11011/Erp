import connectDb from '../database/db.js'

export const getAllExamService = async () => {
    try {
        const currentExam = await connectDb
            .select('*')
            .from('exam')
            .returning('*')
        if (!currentExam) {
            throw new Error('Error...')
        }
        return currentExam
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdExamService = async (id) => {
    try {
        const currentExam = await connectDb
            .select('*')
            .from('exam')
            .where('id', id)
            .returning('*')
        return currentExam[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createExamService = async (data) => {
    try {
        const currentExam = await connectDb('exam')
            .insert(data)
            .returning('*')
        if (!currentExam) {
            throw new Error('Error!!!')
        }
        return currentExam
    } catch (error) {
        throw new Error(error)
    }
}
export const updateExamService = async (id, data) => {
    try {
        const currentExam = await connectDb
            .select('*')
            .from('exam')
            .where('id', id)
            .update(data)
            .returning('*')
        return currentExam[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const deleteExamService = async (id) => {
    try {
        const currentExam = await connectDb
            .select('*')
            .from('exam')
            .where('id', id)
            .del()
            .returning('*')
        return currentExam[0]
    } catch (error) {
        throw new Error(error)
    }
}
