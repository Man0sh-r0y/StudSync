// import the user mode
const Student = require('../models/model');

// update a user by ID

async function updateStudentById(req, res) {
    const { name, phone, email, department, address, image } = req.body;
    // Find user and update it
    try {
        req.body.image = `https://api.dicebear.com/5.x/initials/svg?seed=${name}`; // currently not working
        const student = await Student.findByIdAndUpdate(req.params.id, { name, phone, email, department, address, image }, { new: true });
        if (!student) {
            res.status(404).json({
                message: "student not found with id " + req.params.id
            });
        }
        res.status(200).json({
            message: "Student updated successfully!",
            data: student
        }); 
    } catch (error) {
        res.status(500).json({
            message: "Error updating student with id " + req.params.id
        });
    }
}

module.exports = updateStudentById;