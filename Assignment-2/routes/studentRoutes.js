const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students - view all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }

  res.status(200).json(student);
});


router.post("/", (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: "Both 'name' and 'course' are required" });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    course,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});


router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }

  const { name, course } = req.body;

  if (!name && !course) {
    return res.status(400).json({ message: "Provide 'name' and/or 'course' to update" });
  }

  if (name) student.name = name;
  if (course) student.course = course;

  res.status(200).json(student);
});


router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Student with id ${id} not found` });
  }

  const deleted = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted", student: deleted[0] });
});

module.exports = router;