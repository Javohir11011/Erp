import {
    createHomeworkService,
    deleteHomeworkService,
    getAllHomeworkService,
    getByIdHomeworkService,
    updateHomeworkService,
} from '../services/index.js'

export const homeworkAllController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/homework/:id METHOD: GET')
        const currentHomework = await getAllHomeworkService()
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        logger.error('Route: /api/v1/homework/:id METHOD: GET')
        next(error)
    }
}
export const homeworkByIdController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/homework/:id METHOD: GET')
        const id = req.params.id
        // console.log(req.params);
        const currentHomework = await getByIdHomeworkService(id)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        logger.error('Route: /api/v1/homework/:id METHOD: GET')
        next(error)
    }
}
export const homeworkCreateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/homework/create METHOD: POST')
        const currentHomework = await createHomeworkService(req.body)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        logger.error('Route: /api/v1/homework/create METHOD: POST')
        next(error)
    }
}
export const homeworkUpdateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/homework/update/:id METHOD: PUT')
        const id = req.params.id
        const currentHomework = await updateHomeworkService(id, req.body)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        logger.error(
            `Route: /api/v1/homework/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const homeworkDeleteController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/homework/delete/:id METHOD: DELETE')
        const id = req.params.id
        const currentHomework = await deleteHomeworkService(id)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        logger.error(
            `Route: /api/v1/homework/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
