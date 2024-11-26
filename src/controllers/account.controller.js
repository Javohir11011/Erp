import {
    createAccountService,
    deleteAccountService,
    getAllAccountsService,
    getAccountByIdService,
    updateAccountService,
} from '../services/index.js'
import logger from '../utils/logger.js'

export const createAccount = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/account/create METHOD: POST')

        const accountData = req.body
        const result = await createAccountService(accountData)
        const { success, error, account } = result
        if (success) {
            return res.status(201).send({
                message: 'Created',
                account,
            })
        }
        res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        logger.error('Route: /api/v1/account/create METHOD: POST')
        next(error)
    }
}

export const getAllAccounts = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/account/:id METHOD: GET')
        const result = await getAllAccountsService()
        const { success, error, accounts } = result
        if (success) {
            res.status(200).send({
                message: 'Success',
                accounts,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        logger.error('Route: /api/v1/account/:id METHOD: GET')
        next(error)
    }
}

export const getAccountById = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/account/:id METHOD: GET')
        
        const accountId = req.params.id
        const result = await getAccountByIdService(accountId)
        const { success, error, account } = result
        if (success) {
            return res.status(200).send({
                message: 'Success',
                account,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        logger.error('Route: /api/v1/account/:id METHOD: GET')

        next(error)
    }
}

export const updateAccount = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/account/update/:id METHOD: PUT')
        const accountId = req.params.id
        const newData = req.body
        const result = await updateAccountService(accountId, newData)
        const { success, error, account } = result
        if (success) {
            return res.status(200).send({
                message: 'Updated',
                account,
            })
        }
        return res.status(400).send({
            message: 'Fail',
            error: error.message,
        })
    } catch (error) {
        logger.error(
            `Route: /api/v1/account/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const deleteAccount = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/account/delete/:id METHOD: DELETE')

        const accountId = req.params.id
        const result = await deleteAccountService(accountId)
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
            `Route: /api/v1/account/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
