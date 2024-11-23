import connectDb from '../database/db.js'

export const createAssignmentService = async (assignmentData) => {
    try {
        const assignment = await connectDb('assignments')
            .insert(assignmentData)
            .returning('*')
        if (!assignment) {
            throw new Error('Error while creating assignment')
        }
        return { success: true, assignment }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAllAssignmentsService = async () => {
    try {
        const assignments = await connectDb.select('*').from('assignments')
        if (!assignments) {
            throw new Error('Assignments not found')
        }
        return { success: true, assignments }
    } catch (error) {
        return { success: false, error }
    }
}

export const getAssignmentByIdService = async (assignmentId) => {
    try {
        const assignment = await connectDb
            .select('*')
            .from('assignments')
            .where('id', '=', assignmentId)
        if (!assignment) {
            throw new Error('Assignment not found')
        }
        return { success: true, assignment }
    } catch (error) {
        return { success: false, error }
    }
}

export const updateAssignmentService = async (assignmentId, newData) => {
    try {
        const assignment = await connectDb('assignments')
            .where('id', '=', assignmentId)
            .update(newData)
            .returning('*')
        if (!assignment) {
            throw new Error('Error while updateing assignment')
        }
        return { success: true, assignment }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteAssignmentService = async (assignmentId) => {
    try {
        await connectDb('assignments').where('id', '=', assignmentId)
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}
