import connectDb from '../database/db.js'

export const createAccountService = async (accountData) => {
    try {
        const account = await connectDb('accounts')
            .insert(accountData)
            .returning('*')
        if (!account) {
            throw new Error('Error while creating account')
        }
        return { success: true, account }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllAccountsService = async () => {
    try {
        const accounts = await connectDb.select('*').from('accounts')
        if (!accounts) {
            throw new Error('Accounts not found')
        }
        return { success: true, accounts }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAccountByIdService = async (accountId) => {
    try {
        const account = await connectDb
            .select('*')
            .from('accounts')
            .where('id', '=', accountId)
        if (!account) {
            throw new Error('Account not found')
        }
        return { success: true, account }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateAccountService = async (accountId, newData) => {
    try {
        const account = await connectDb('accounts')
            .where('id', '=', accountId)
            .update(newData)
            .returning('*')
        if (!account) {
            throw new Error('Error while updateing account')
        }
        return { success: true, account }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteAccountService = async (accountId) => {
    try {
        await connectDb('accounts').where('id', '=', accountId)
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
