const express = require("express");
const mongoose = require("mongoose");

const Student = require("../models/student.model");

const router = express.Router();

const getAll = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getStudentByGradebook = async (req, res) => {
  const gradebook = req.params.gradebook;

  try {
    const student = await Student.findOne({ gradebook: gradebook });

    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  console.log(req.body);

  const newStudent = new Student({
    name: req.body.name,
    gradebook: req.body.gradebook,
    registration: req.body.registration,
    subjects: req.body.subjects,
    created_on: req.body.registered_on,
  });

  try {
    await newStudent.save();

    res.status(200).json(newStudent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  const gradebook = req.params.gradebook;

  try {
    await Student.findByIdAndUpdate(
      {
        gradebook: gradebook,
      },
      {
        name: req.body.name,
        registration: req.body.registration,
        subjects: req.body.subjects,
        created_on: req.body.registered_on,
      }
    );

    res.status(200).json({ gradebook: gradebook });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const gradebook = req.params.gradebook;

  try {
    await Student.findByIdAndRemove({ gradebook: gradebook });

    res.status(200).json({ gradebook: gradebook });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getAll = getAll;
module.exports.getStudentByGradebook = getStudentByGradebook;
module.exports.createStudent = createStudent;
module.exports.updateStudent = updateStudent;
module.exports.deleteStudent = deleteStudent;
