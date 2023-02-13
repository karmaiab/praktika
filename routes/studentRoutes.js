module.exports = app => {
    const students = require("../controllers/studentController")
    const router = require("express").Router()

    // Retrieve all students
    router.get("/", students.findAll)

    app.use('/api/students', router)
}