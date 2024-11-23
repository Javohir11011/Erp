export const roleGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const userRole = req.user.role
            if (roles.includes(userRole)) {
                next()
            } else {
                logger.error('Permission Denied')
                res.status(403).send('Permission Denied')
            }
        } catch (error) {
            logger.error('Server Error')
            res.status(500).send(error)
        }
    }
}