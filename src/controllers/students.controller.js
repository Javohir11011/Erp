import {
    createStudentService,
    deleteStudentService,
    getAllStudentService,
    getByIdStudentService,
} from '../services/index.js'

export const sturdentAllController = async (req, res, next) => {
    try {
        const currenrUser = await getAllStudentService()
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
export const sturdentByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currenrUser = await getByIdStudentService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
export const sturdentCreateController = async (req, res, next) => {
    try {
        const currenrUser = createStudentService(req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send({
            message:"Ok"})
    } catch (error) {
        next(error)
    }
}
export const sturdentDeleteController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currenrUser = await deleteStudentService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
