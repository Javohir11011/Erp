import {
    createExamService,
    deleteExamService,
    getAllStudentService,
    getByIdExamService,
    updateExamService,
} from '../services/index.js'
import logger from '../utils/logger.js'
export const examAllController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/exam/all METHOD: GET')
        const currenrUser = await getAllStudentService()
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/exam/all METHOD: GET')
        next(error)
    }
}
export const examByIdController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/exam/:id METHOD: GET')
        const id = req.params.id
        const currenrUser = await getByIdExamService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error('Route: /api/v1/exam/:id METHOD: GET')
        next(error)
    }
}
export const examCreateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/exam/create METHOD: POST')
        const currenrUser = createExamService(req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send({
            message: 'Ok',
        })
    } catch (error) {
        logger.error('Route: /api/v1/exam/create METHOD: POST')
        next(error)
    }
}
export const examUpdateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/exam/update/:id METHOD: PUT')
        const id = req.params.id
        const currenrUser = await updateExamService(id, req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/exam/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const examDeleteController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/exam/delete/:id METHOD: PUT')
        const id = req.params.id
        const currenrUser = await deleteExamService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/exam/delete/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}
