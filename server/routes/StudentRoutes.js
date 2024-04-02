const express = require("express");
const router = express.Router();
const studentController = require("../controller/StudentController");

router.post("/login", studentController.student_login);
router.post("/register", studentController.student_register);

module.exports = router;
