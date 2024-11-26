import {
    createLessonService,
    deleteLessonService,
    getAllLessonService,
    getByIdLessonService,
    updateLessonService,
} from '../services/index.js'

export const lessonAllController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/lesson/all METHOD: GET')
        const currentLesson = await getAllLessonService()
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        logger.error('Route: /api/v1/lesson/all METHOD: GET')
        next(error)
    }
}
export const lessonByIdController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/lesson/:id METHOD: GET')
        const id = req.params.id
        // console.log(req.params);
        const currentLesson = await getByIdLessonService(id)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        logger.error('Route: /api/v1/lesson/:id METHOD: GET')

        next(error)
    }
}
export const lessonCreateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/lesson/create METHOD: POST')
        const currentLesson = await createLessonService(req.body)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        logger.error('Route: /api/v1/lesson/create METHOD: POST')
        next(error)
    }
}
export const lessonUpdateController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/lesson/update/:id METHOD: PUT')
        const id = req.params.id
        const currentLesson = await updateLessonService(id, req.body)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        logger.error(
            `Route: /api/v1/lesson/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const lessonDeleteController = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/lesson/delete/:id METHOD: DELETE')
        const id = req.params.id
        const currentLesson = await deleteLessonService(id)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        logger.error(
            `Route: /api/v1/lesson/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
