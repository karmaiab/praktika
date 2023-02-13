module.exports = app => {
    const placepraktikas = require("../controllers/place_praktikaController")
    const router = require("express").Router()

    // Retrieve all placepraktikas
    router.get("/", placepraktikas.findAll)

    app.use('/api/placepraktikas', router)
}