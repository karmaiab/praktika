const Skillset = require("../models/skillset");

exports.findAll = (req, res) => {
    Skillset.findAll()
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