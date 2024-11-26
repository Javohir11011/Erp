import {
    createPaymentService,
    deletePaymentService,
    getAllPaymentsService,
    getPaymentByIdService,
    updatePaymentService,
} from '../services/index.js'

export const createPayment = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/paymet/create METHOD: POST')
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
        logger.error('Route: /api/v1/paymet/create METHOD: POST')
        next(error)
    }
}

export const getAllPayments = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/paymet/all METHOD: GET')
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
        logger.error('Route: /api/v1/paymet/all METHOD: GET')
        next(error)
    }
}

export const getPaymentById = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/paymet/:id METHOD: GET')
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
        logger.error('Route: /api/v1/paymet/:id METHOD: GET')
        next(error)
    }
}

export const updatePayment = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/paymet/update/:id METHOD: PUT')
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
        logger.error(
            `Route: /api/v1/paymet/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const deletePayment = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/paymet/delete/:id METHOD: DELETE')
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
        logger.error(
            `Route: /api/v1/paymet/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
