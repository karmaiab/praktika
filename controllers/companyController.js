const Company = require("../models/company");

// Create and Save a new Company
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return;
    }

    //Create a Company
    const company = {
        title: req.body.title,
    }

    // Save Company in the database
    Company.create(company)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating Company"
        })
    })

}


// Retrieve all Companies from the database
exports.findAll = (req, res) => {
    Company.findAll()
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