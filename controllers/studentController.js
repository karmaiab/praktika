const Student = require("../models/student");

exports.findAll = (req, res) => {
    Student.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving companies."
        })
    })
}