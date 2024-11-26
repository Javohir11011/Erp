import connectDb from '../database/db.js'

export const getAllHomeworkService = async () => {
    try {
        const currenrUser = await connectDb
            .select('*')
            .from('homework')
            .returning('*')
        if (!currenrUser) {
            throw new Error('Error...')
        }
        return currenrUser
    } catch (error) {
        throw new Error(error)
    }
}
export const getByIdHomeworkService = async (id) => {
    try {
        const currentHomework = await connectDb
            .select('*')
            .from('homework')
            .where('id', id)
            .returning('*')
        return currentHomework[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const createHomeworkService = async (data) => {
    try {
        const currenrUser = await connectDb('homework')
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
export const updateHomeworkService = async (id, data) => {
    try {
        const currentHomework = await connectDb
            .select('*')
            .from('homework')
            .where('id', id)
            .update(data)
            .returning('*')
        return currentHomework[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteHomeworkService = async (id) => {
    try {
        const currentHomework = await connectDb
            .select('*')
            .from('homework')
            .where('id', id)
            .del()
            .returning('*')
        return currentHomework[0]
    } catch (error) {
        throw new Error(error)
    }
}
