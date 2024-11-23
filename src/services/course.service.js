import connectDb from '../database/db.js'

export const createCourseService = async (courseData) => {
    try {
        const course = await connectDb('courses')
            .insert(courseData)
            .returning('*')
        if (!course) {
            throw new Error('Error while creating couse')
        }
        return { success: true, course }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllCoursesService = async () => {
    try {
        const courses = await connectDb.select('*').from('courses')
        if (!courses) {
            throw new Error('Courses not found')
        }
        return { success: true, courses }
    } catch (error) {
        return { success: false, error }
    }
}

export const getCourseByIdService = async (courseId) => {
    try {
        const course = await connectDb
            .select('*')
            .from('courses')
            .where('id', '=', courseId)
        if (!course) {
            throw new Error('Course not found')
        }
        return { success: true, course }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateCourseService = async (courseId, newData) => {
    try {
        const course = await connectDb('courses')
            .where('id', '=', courseId)
            .update(newData)
            .returning('*')
        if (!course) {
            throw new Error('Error while updateing course')
        }
        return { success: true, course }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteCourseService = async (courseId) => {
    try {
        await connectDb('courses').where('id', '=', courseId)
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
