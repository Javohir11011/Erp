import {
    createHomeworkService,
    deleteHomeworkService,
    getAllHomeworkService,
    getByIdHomeworkService,
    updateHomeworkService,
} from '../services/index.js'

export const homeworkAllController = async (req, res, next) => {
    try {
        const currentHomework = await getAllHomeworkService()
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        next(error)
    }
}
export const homeworkByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        // console.log(req.params);
        const currentHomework = await getByIdHomeworkService(id)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        next(error)
    }
}
export const homeworkCreateController = async (req, res, next) => {
    try {
        const currentHomework = await createHomeworkService(req.body)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        next(error)
    }
}
export const homeworkUpdateController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currentHomework = await updateHomeworkService(id, req.body)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        next(error)
    }
}

export const homeworkDeleteController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currentHomework = await deleteHomeworkService(id)
        if (!currentHomework) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currentHomework)
    } catch (error) {
        next(error)
    }
}
