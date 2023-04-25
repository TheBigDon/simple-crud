const express = require("express");

const student = require("../controllers/student.controller");

const router = express.Router();

router.get("/", student.getAll);
router.get("/:gradebook", student.getStudentByGradebook);
router.post("/", student.create);
router.patch("/:gradebook", student.update);
router.delete("/:gradebook", student.delete);

module.exports = router;
