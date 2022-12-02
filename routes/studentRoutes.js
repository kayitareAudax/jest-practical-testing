const express=require("express");
const { getStudents, createStudent, updateStudent, deleteStudent, getStudent } = require("../controller/studentController");
const router=express.Router();
router.route("").get(getStudents).post(createStudent)
router.route("/:id").put(updateStudent).delete(deleteStudent).get(getStudent)
module.exports=router;