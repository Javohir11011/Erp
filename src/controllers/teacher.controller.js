import {
    createTeacherService,
    deleteTeacherService,
    getAllTeacherService,
    getByIdTeacherService,
} from '../services/index.js'
import logger from '../utils/logger.js'
export const teacherAllController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/teacher/all METHOD: GET')
        const currenrUser = await getAllTeacherService()
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/teacher/all METHOD: GET')
        next(error)
    }
}
export const teacherByIdController = async (req, res, next) => {
    try {   
        logger.info('Route: /api/v1/teacher/:id METHOD: GET')
        const id = req.params.id
        // console.log(req.params);
        const currenrUser = await getByIdTeacherService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/teacher/:id METHOD: GET')
        next(error)
    }
}
export const teacherCreateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/teacher/create METHOD: POST')
        const currenrUser = await createTeacherService(req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/teacher/create METHOD: POST')
        next(error)
    }
}
export const teacherDeleteController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/teacher/delete/:id METHOD: PUT')
        const id = req.params.id
        const currenrUser = await deleteTeacherService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/teacher/delete/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
