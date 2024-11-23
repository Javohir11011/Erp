import {
    loginService,
    profileService,
    registerService,
} from '../services/index.js'

export const register = async (req, res, next) => {
    try {
        const data = await registerService(req.body)
        if(!data){
            return res.status(404).send("Servicdan malumot kelmayapti...")
        }
        return res.status(201).send(data)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const data = await loginService(req.body)
        
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
