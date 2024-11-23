import {
    loginService,
    profileService,
    registerService,
} from '../services/index.js'

export const register = async (req, res, next) => {
    try {
        console.log(req.body);
        const data = await registerService(req.body)
        res.send(data)
    } catch (error) {
        next(error)
    }
    //   console.log("salom");
}

export const login = async (req, res, next) => {
    try {
        const data = loginService(req.body)
        res.send(data)
    } catch (error) {
        next(error)
    }
}

export const profile = async (req, res, next) => {
    try {
        const data = profileService()
    } catch (error) {
        next(error)
    }
}
