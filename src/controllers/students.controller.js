import {
    createStudentService,
    deleteStudentService,
    getAllStudentService,
    getByIdStudentService,
} from '../services/index.js'
import logger from '../utils/logger.js'

export const sturdentAllController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/student/all METHOD: GET')
        const currenrUser = await getAllStudentService()
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/student/all METHOD: GET')
        next(error)
    }
}
export const sturdentByIdController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/student/:id METHOD: GET')
        const id = req.params.id
        const currenrUser = await getByIdStudentService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/student/:id METHOD: GET')
        next(error)
    }
}
export const sturdentCreateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/student/create METHOD: POST')
        const currenrUser = createStudentService(req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send({
            message:"Ok"})
    } catch (error) {
        logger.error('Route: /api/v1/student/create METHOD: POST')
        next(error)
    }
}
export const sturdentDeleteController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/student/delete/:id METHOD: PUT')
        const id = req.params.id
        const currenrUser = await deleteStudentService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/student/delete/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
