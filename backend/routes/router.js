const express = require("express");
const router = express.Router();

const createStudent = require("../controllers/createStudent");
// const { getAllStudents, getStudentById } = require("../controllers/getStudents");
const getAllStudents = require("../controllers/getStudents");
const updateStudent = require("../controllers/updateStudent");
const deleteUserById = require("../controllers/deleteStudent");

router.post("/createStudent", createStudent);
router.get("/getAllStudents", getAllStudents);
// router.get("/getStudentById/:id", getStudentById);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteUserById);

module.exports = router;