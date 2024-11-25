import {
    createCourseService,
    deleteCourseService,
    getAllCoursesService,
    getCourseByIdService,
    updateCourseService,
} from '../services/index.js'

export const createCourse = async (req, res, next) => {
    try {
        const courseData = req.body
        const result = await createCourseService(courseData)
        const { success, error, course } = result
        if (success) {
            return res.status(201).send({
                message: 'Created',
                course,
            })
        }
        res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        next(error)
    }
}

export const getAllCourses = async (req, res, next) => {
    try {
        const result = await getAllCoursesService()
        const { success, error, courses } = result
        if (success) {
            res.status(200).send({
                message: 'Success',
                courses,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        next(error)
    }
}

export const getCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const result = await getCourseByIdService(courseId)
        const { success, error, course } = result
        if (success) {
            return res.status(200).send({
                message: 'Success',
                course,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        next(error)
    }
}

export const updateCourse = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const newData = req.body
        const result = await updateCourseService(courseId, newData)
        const { success, error, course } = result
        if (success) {
            return res.status(200).send({
                message: 'Updated',
                course,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
        res.send('ok')
    } catch (error) {
        next(error)
    }
}

export const deleteCourse = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const result = await deleteCourseService(courseId)
        const { success, error } = result
        if (success) {
            return res.status(200).send({
                message: 'Deleted',
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        next(error)
    }
}
