import connectDb from '../database/db.js'

export const createPaymentService = async (paymentData) => {
    try {
        const payment = await connectDb('payments')
            .insert(paymentData)
            .returning('*')
        if (!payment) {
            throw new Error('Error while creating payment')
        }
        return { success: true, payment }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllPaymentsService = async () => {
    try {
        const payments = await connectDb.select('*').from('payments')
        if (!payments) {
            throw new Error('Payments not found')
        }
        return { success: true, payments }
    } catch (error) {
        return { success: false, error }
    }
}

export const getPaymentByIdService = async (paymentId) => {
    try {
        const payment = await connectDb
            .select('*')
            .from('payments')
            .where('id', '=', paymentId)
        if (!payment) {
            throw new Error('Payment not found')
        }
        return { success: true, payment }
    } catch (error) {
        return { success: false, error }
    }
}

export const updatePaymentService = async (paymentId, newData) => {
    try {
        const payment = await connectDb('payments')
            .where('id', '=', paymentId)
            .update(newData)
            .returning('*')
        if (!payment) {
            throw new Error('Error while updateing payment')
        }
        return { success: true, payment }
    } catch (error) {
        return { success: false, error }
    }
}

export const deletePaymentService = async (paymentId) => {
    try {
        await connectDb('payments').where('id', '=', paymentId)
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
