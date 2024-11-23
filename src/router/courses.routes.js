import { Router } from 'express'
import {
    createCourse,
    deleteCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
} from '../controllers/index.js'
import { validationMiddleware } from '../middleware/validation.middleware.js'
import { courseSchema } from '../schema/course.schema.js'

export const courseRouter = Router()

courseRouter.post('/course', validationMiddleware(courseSchema), createCourse)
courseRouter.get('/courses', getAllCourses)
courseRouter.get('/course/:id', getCourseById)
courseRouter.put('/course/:id', roleGuard("admin"), updateCourse)
courseRouter.delete('/course/:id', roleGuard("admin"), deleteCourse)
