import {
    createAccountService,
    deleteAccountService,
    getAllAccountsService,
    getAccountByIdService,
    updateAccountService,
} from '../services/index.js'

export const createAccount = async (req, res, next) => {
    try {
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
        next(error)
    }
}

export const getAllAccounts = async (req, res, next) => {
    try {
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
        next(error)
    }
}

export const getAccountById = async (req, res, next) => {
    try {
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
        next(error)
    }
}

export const updateAccount = async (req, res, next) => {
    try {
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
        next(error)
    }
}

export const deleteAccount = async (req, res, next) => {
    try {
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
        next(error)
    }
}
