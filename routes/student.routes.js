const express = require("express");

const student = require("../controllers/student.controller");

const router = express.Router();

router.get("/", student.getAll);
router.get("/:gradebook", student.getStudentByGradebook);
router.post("/", student.createStudent);
router.patch("/:gradebook", student.updateStudent);
router.delete("/:gradebook", student.deleteStudent);

module.exports = router;
