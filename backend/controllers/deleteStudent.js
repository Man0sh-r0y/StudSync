// import the user mode
const Student = require('../models/model');

// delete a user by ID

async function deleteUserById(request, response) {
    // Find user and delete it
    try {
        const student = await Student.findByIdAndDelete(request.params.id);

        if (!student) {
            response.status(404).json({
                message: "Student not found with id " + request.params.id
            });
        }
        response.status(200).json({
            message: "Student deleted successfully!"
        });
    } catch (error) {
        response.status(500).json({
            message: "Could not delete student with id " + request.params.id,
            error: error.message
        });
    }
}

module.exports = deleteUserById;