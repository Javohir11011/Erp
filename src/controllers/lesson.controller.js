import {
    createLessonService,
    deleteLessonService,
    getAllLessonService,
    getByIdLessonService,
    updateLessonService,
} from '../services/index.js'

export const lessonAllController = async (req, res, next) => {
    try {
        const currentLesson = await getAllLessonService()
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        next(error)
    }
}
export const lessonByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(req.params);
        const currentLesson = await getByIdLessonService(id)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        next(error)
    }
}
export const lessonCreateController = async (req, res, next) => {
    try {
        const currentLesson = await createLessonService(req.body)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        next(error)
    }
}
export const lessonUpdateController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currentLesson = await updateLessonService(id, req.body)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        next(error)
    }
}

export const lessonDeleteController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currentLesson = await deleteLessonService(id)
        if (!currentLesson) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentLesson)
    } catch (error) {
        next(error)
    }
}
