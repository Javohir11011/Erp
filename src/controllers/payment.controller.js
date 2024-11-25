import {
    createPaymentService,
    deletePaymentService,
    getAllPaymentsService,
    getPaymentByIdService,
    updatePaymentService,
} from '../services/index.js'

export const createPayment = async (req, res, next) => {
    try {
        const paymentData = req.body
        const result = await createPaymentService(paymentData)
        const { success, error, payment } = result
        if (success) {
            return res.status(201).send({
                message: 'Created',
                payment,
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

export const getAllPayments = async (req, res, next) => {
    try {
        const result = await getAllPaymentsService()
        const { success, error, payments } = result
        if (success) {
            res.status(200).send({
                message: 'Success',
                payments,
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

export const getPaymentById = async (req, res, next) => {
    try {
        const paymentId = req.params.id
        const result = await getPaymentByIdService(paymentId)
        const { success, error, payment } = result
        if (success) {
            return res.status(200).send({
                message: 'Success',
                payment,
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

export const updatePayment = async (req, res, next) => {
    try {
        const paymentId = req.params.id
        const newData = req.body
        const result = await updatePaymentService(paymentId, newData)
        const { success, error, payment } = result
        if (success) {
            return res.status(200).send({
                message: 'Updated',
                payment,
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

export const deletePayment = async (req, res, next) => {
    try {
        const paymentId = req.params.id
        const result = await deletePaymentService(paymentId)
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
