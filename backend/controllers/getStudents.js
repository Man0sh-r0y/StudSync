const Student = require("../models/model");

async function getAllStudents(req, res) {
    try {
        const studentsData = await Student.find();
        res.json({
            message: "All students data retrieved successfully",
            data: studentsData
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

// async function getStudentById(req, res) {  
//     // get a student by id
//     try {
//         const studentData = await Student.findById(req.params.id);
//         if (!studentData) {
//             response.status(404).json({
//                 message: "Student not found with id " + request.params.id
//             });
//         }
//         res.status(200).json({
//             message: "Student data retrieved successfully",
//             data: studentData
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Error retrieving student with id " + request.params.id,
//             error: error.message
//         });
//     }
// }

// module.exports = { getAllStudents, getStudentById };

module.exports = getAllStudents;