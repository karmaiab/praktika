const Places = require("../models/places");

exports.findAll = (req, res) => {
    Places.findAll()
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