import { Router } from 'express'
import {
    createCourse,
    deleteCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
} from '../controllers/index.js'

export const courseRouter = Router()

courseRouter.post('/course', createCourse)
courseRouter.get('/courses', getAllCourses)
courseRouter.get('/course/:id', getCourseById)
courseRouter.put('/course/:id', updateCourse)
courseRouter.delete('/course/:id', deleteCourse)
