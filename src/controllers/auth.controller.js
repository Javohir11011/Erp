import {
    deleteUserService,
    getByUserServcie,
    loginService,
    registerService,
    updateService,
} from '../services/index.js'

export const register = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/users/register METHOD: POST')

        const currentUser = await registerService(req.body)
        if (!currentUser) {
            return res.status(404).send('Servicdan malumot kelmayapti...')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        logger.error('Route: /api/v1/users/register METHOD: POST')

        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/users/login METHOD: POST')

        const currentUser = await loginService(req.body)
        if (!currentUser) {
            return res.status(404).send('Servicdan malumot kelmayapti...')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        logger.error('Route: /api/v1/users/login METHOD: POST')

        next(error)
    }
}

export const getByIdUser = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/users/:id METHOD: GET')

        const id = req.params.id
        const currentUser = await getByUserServcie(id)
        if (!currentUser) {
            return res.status(404).send('error')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        logger.error('Route: /api/v1/users/:id METHOD: GET')

        next(error)
    }
}

export const update = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/users/update/:id METHOD: PUT')

        const id = req.params.id
        const currentUser = await updateService(id, req.body)
        if (!currentUser) {
            return res.status(404).send('error')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/update/:id METHOD: PUT,Error: ${error.message}`,
        )
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        logger.info('Route: /api/v1/users/delete/:id METHOD: DELETE')

        const id = req.params.id
        const currentUser = await deleteUserService(id)
        if (!currentUser) {
            return res.status(404).send('error')
        }
        return res.status(201).send(currentUser)
    } catch (error) {
        logger.error(
            `Route: /api/v1/users/delete/:id METHOD: DELETE,Error: ${error.message}`,
        )
        next(error)
    }
}
