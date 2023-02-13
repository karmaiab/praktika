module.exports = app => {
    const skillsets = require("../controllers/skillsetController")
    const router = require("express").Router()

    // Retrieve all skillsets
    router.get("/", skillsets.findAll)

    app.use('/api/skillsets', router)
}