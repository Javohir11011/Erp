import {
    createCourseService,
    deleteCourseService,
    getAllCoursesService,
    getCourseByIdService,
    updateCourseService,
} from '../services/index.js'
import logger from '../utils/logger.js'

export const createCourse = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/course/create METHOD: POST')

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
        logger.error('Route: /api/v1/course/create METHOD: POST')

        next(error)
    }
}

export const getAllCourses = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/course/all METHOD: GET')

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
        logger.error('Route: /api/v1/course/all METHOD: GET')

        next(error)
    }
}

export const getCourseById = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/course/:id METHOD: GET')
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
        logger.error('Route: /api/v1/course/:id METHOD: GET')

        next(error)
    }
}

export const updateCourse = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/course/update/:id METHOD: PUT')
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
        logger.error(
            `Route: /api/v1/course/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const deleteCourse = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/course/delete/:id METHOD: DELETE')
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
        logger.error(
            `Route: /api/v1/course/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
