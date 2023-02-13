// let Places = require("./models/places")
// let Student = require("./models/student")
// let Skillset = require("./models/skillset")
// let Company = require("./models/company")
// let PlacePraktika = require("./models/place_praktika")

// Places.sync({force: true})
// Student.sync({force: true})
// Skillset.sync({force: true})
// Company.sync({force: true})
// PlacePraktika.sync({force: true})

const express = require('express');
const cors = require("cors");

const app = express();

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-url
app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to praktika RESTful API"})
})

require("./routes/companyRoutes")(app);
require("./routes/studentRoutes")(app);
require("./routes/place_praktikaRoutes")(app);
require("./routes/placesRoutes")(app);
require("./routes/skillsetRoutes")(app);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Praktika Example Express API with Swagger",
            version: "0.1.0",
            description: 
            "This is a simple CRUD API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: 'Development server',
            },
        ],
    },
    apis: ["./routes/*"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})