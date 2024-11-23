import {
    createAssignmentService,
    deleteAssignmentService,
    getAllAssignmentsService,
    getAssignmentByIdService,
    updateAssignmentService,
} from '../services/index.js'

export const createAssignment = async (req, res, next) => {
    try {
        const courseData = req.body
        const result = await createAssignmentService(courseData)
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

export const getAllAssignments = async (req, res, next) => {
    try {
        const result = await getAllAssignmentsService()
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

export const getAssignmentById = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const result = await getAssignmentByIdService(courseId)
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

export const updateAssignment = (ById = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const newData = req.body
        const result = await updateAssignmentService(courseId, newData)
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
})

export const deleteAssignment = async (req, res, next) => {
    try {
        const courseId = req.params.id
        const result = await deleteAssignmentService(courseId)
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