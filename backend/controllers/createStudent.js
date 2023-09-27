const Student = require("../models/model");

async function createStudent(req, res) {
    try {
        const { name, phone, email, department, address } = req.body;

        if (!name || !phone || !email || !department || !address) {
            return res.status(400).json({
                message: "Please fill all the fields",
            });
        }

        const student = await Student.create({
            name,
            phone,
            email,
            department,
            address,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
        });

        return res.status(200).json({
            message: "Student created successfully",
            data: student,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = createStudent;
