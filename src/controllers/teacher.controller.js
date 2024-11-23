import {
    createTeacherService,
    deleteTeacherService,
    getAllTeacherService,
    getByIdTeacherService,
} from '../services/index.js'

export const teacherAllController = async (req, res, next) => {
    try {
        const currenrUser = await getAllTeacherService()
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
export const teacherByIdController = async (req, res, next) => {
    try {   
        const id = req.params.id
        // console.log(req.params);
        const currenrUser = await getByIdTeacherService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
export const teacherCreateController = async (req, res, next) => {
    try {
        const currenrUser = await createTeacherService(req.body)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
export const teacherDeleteController = async (req, res, next) => {
    try {
        const id = req.params.id
        const currenrUser = await deleteTeacherService(id)
        if (!currenrUser) {
            return res.status(404).send('Servicedan malumot kelmayapti...')
        }
        return res.status(201).send(currenrUser)
    } catch (error) {
        next(error)
    }
}
