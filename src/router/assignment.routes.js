import { Router } from 'express'
import {
    createAssignment,
    deleteAssignment,
    getAllAssignments,
    getAssignmentById,
    updateAssignment,
} from '../controllers/index.js'
import { validationMiddleware } from '../middleware/validation.middleware.js'
import { assignmentSchema } from '../schema/assignment.schema.js'

export const assignmentRouter = Router()

assignmentRouter.post('/assignment', validationMiddleware(assignmentSchema), createAssignment)
assignmentRouter.get('/assignments', getAllAssignments)
assignmentRouter.get('/assignment/:id', getAssignmentById)
assignmentRouter.put('/assignment/:id', roleGuard("admin"), updateAssignment)
assignmentRouter.delete('/assignment/:id', roleGuard("admin"), deleteAssignment)
