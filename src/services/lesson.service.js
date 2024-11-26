import connectDb from '../database/db.js'

export const getAllLessonService = async () => {
    try {
        const currentLesson = await connectDb
            .select('*')
            .from('lesson')
            .returning('*')
        if (!currentLesson) {
            throw new Error('Error...')
        }
        return currentLesson
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdLessonService = async (id) => {
    try {
        const currentLesson = await connectDb
            .select('*')
            .from('lesson')
            .where('id', id)
            .returning('*')
        return currentLesson[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createLessonService = async (data) => {
    try {
        const currentLesson = await connectDb('lesson')
            .insert(data)
            .returning('*')
        if (!currentLesson) {
            throw new Error('Error!!!')
        }
        return currentLesson[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const updateLessonService = async (id, data) => {
    try {
        const currentLesson = await connectDb
            .select('*')
            .from('lesson')
            .where('id', id)
            .update(data)
            .returning('*')
        return currentLesson[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteLessonService = async (id) => {
    try {
        const currentLesson = await connectDb
            .select('*')
            .from('lesson')
            .where('id', id)
            .del()
            .returning('*')
        return currentLesson[0]
    } catch (error) {
        throw new Error(error)
    }
}
