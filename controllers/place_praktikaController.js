const PlacePraktika = require("../models/place_praktika");

exports.findAll = (req, res) => {
    PlacePraktika.findAll()
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