const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    phone: {
        type: String,
        required: true
    },
	email: {
		type: String,
		required: true,
		unique: true
	},
	department: {
		type: String,
		required: true,
		maxLength: 20
	},
	address: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("Student", studentSchema);