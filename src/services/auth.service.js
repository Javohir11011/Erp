import connectDb from '../database/db.js'
import { generateOtp, hashPassword, sendEmail } from '../utils/index.js'

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

export const loginService = async (data) => {
    try {
        const result = await getByEmailService(data.email)
        // console.log(result);
        if (!data) {
            throw new Error(error)
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const profileService = async () => {
    try {
    } catch (error) {
        throw new Error(error)
    }
}
