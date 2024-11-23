import { Error } from 'mongoose'
import connectDb from '../database/db.js'
import {
    comparePassword,
    generateOtp,
    generateToken,
    hashPassword,
    sendEmail,
} from '../utils/index.js'

export const getByEmailService = async (email) => {
    try {
        // console.log(email);
        const getEmail = await connectDb
            .select('*')
            .from('users')
            .where('email', email)
        return getEmail[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const registerService = async (user) => {
    try {
        const result = await getByEmailService(user.email)
        if (result) {
            throw new Error(`Email already created...`)
        }
        const otp = await generateOtp()

        await sendEmail(
            user.email,
            'OTP',
            `<h1>Sizning otpingiz marhamt ${otp} jigar buni hech kimga bermang...</h1>`,
        )
        const hashedPassword = await hashPassword(user.password)
        const [data] = await connectDb('users')
            .insert({
                name: user.name,
                email: user.email,
                password: hashedPassword,
                role: user.role || 'student',
            })
            .returning('*')
        // console.log([data]);
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const loginService = async (user) => {
    try {
        const currentUser = await getByEmailService(user.email)
        // console.log(result);
        if (!currentUser) {
            throw new Error('error')
        }
        const pass = await comparePassword(user.password, currentUser.password)
        if (!pass) {
            throw new Error('email or password invalid')
        }
        const accessToken = await generateToken('access', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
        })
        const refreshToken = await generateToken('refresh', {
            sub: currentUser.id,
            email: currentUser.email,
            role: currentUser.role,
        })

        return {
            accessToken,
            refreshToken,
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const getByUserServcie = async (id) => {
    try {
        const currentUser = await connectDb
            .select('*')
            .from('users')
            .where('id', id)
        return currentUser[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const updateService = async (id, user) => {
    try {
        const currentUser = await connectDb
            .select('*')
            .from('users')
            .where('id', id)
            .update(user).returning('*')
        return currentUser[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteUserService = async (id) => {
    try {
        const currentUser = await connectDb
            .select('*')
            .from('users')
            .where('id', id)
            .del().returning('*')
        return currentUser[0]
    } catch (error) {
        throw new Error(error)
    }
}
