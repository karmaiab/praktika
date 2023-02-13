/**
 * @swagger
 * components:
 *  schemas:
 *      Company:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the company.
 *              title:
 *                  type: string
 *                  description: The name of company.
 *              contactName:
 *                  type: string
 *                  description: The contact name of the person that has authority over internship in the company.
 *              description:
 *                  type: text
 *                  description: The description of the company.
 *              adress:
 *                  type: string
 *                  description: The address of the company.
 *              phone:
 *                  type: integer
 *                  description: The phone number of the company.
 *          example:
 *              name: Eesti Energia
 */

module.exports = app => {
    const companies = require("../controllers/companyController")
    const router = require("express").Router()

    // Create a new Company
    router.post("/", companies.create)

/**
 * @swagger
 * /api/companies:
 *   get:
 *      summary: Retrieve a list of companies.
 *      description: Retrieve a list of companies.
 *      responses:
 *        200:
 *          description: A list of companies.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                          id:
 *                            type: integer
 *                            description: The company ID.
 *                            example: 1
 *                          title:
 *                            type: string
 *                            description: The company's title.
 *                            example: Eesti Energia
 */

    // Retrieve all companies
    router.get("/", companies.findAll)

    app.use('/api/companies', router)
}