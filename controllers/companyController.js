const Company = require("../models/company");

// Create and Save a new Company
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return
    }

    //Create a Company
    const company = {
        title: req.body.title,
        contactName: req.body.contactName,
        description: req.body.description,
        adress: req.body.adress,
        phone: req.body.phone
    }

    // Save Company in the database
    Company.create(company)
    .then(data => {
        console.log(data)
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

//Update Company from the database
exports.update = (req, res) => {
    const id = req.params.id;
  
    Company.update(req.body, {
      where: { id: id }
    })
      .then(data => {
        if (data == 1) {
          res.send({
            message: "Company was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Company with id=${id}. Maybe Company was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Company with id=" + id
        });
      });
  };

// Delete a Company
exports.delete = (req, res) => {

    const id = req.params.id;
    
    console.log(id)
    
    Company.destroy({
        where: { id: id }
    })
    .then(data => {
        if (data == 1) {
            res.send({
                message: "Company was deleted successfully!"
        });
        } else {
            res.send({
                message: `Cannot delete Company with id=${id}. Maybe Company was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Company with id=" + id
        });
    });
};

exports.u