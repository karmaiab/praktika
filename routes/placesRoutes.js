module.exports = app => {
    const places = require("../controllers/placesController")
    const router = require("express").Router()

    // Retrieve all places
    router.get("/", places.findAll)

    app.use('/api/places', router)
}