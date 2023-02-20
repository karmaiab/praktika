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

    
/**
 * @swagger
 * /api/companies/findAll:
 *   get:
 *      summary: Retrieve a list of companies.
 *      tags: [Companies]
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
    router.get("/findAll", companies.findAll)

/**
 * @swagger
 * /api/companies/create:
 *  post:
 *      summary: Create a company
 *      tags: [Companies]
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Company'
 *      responses:
 *       200:
 *          description: The created company
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Company'
 *       500:
 *          description: Some server error
 */

    // Create a new Company
    router.post("/create", companies.create)

/**
 * @swagger
 * /api/companies/update
 *   get:
 *     summary: Get the company by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The company id
 *     responses:
 *       200:
 *         description: The company response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: The company was not found
 *   put:
 *    summary: Update the company by the id
 *    tags: [Companies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The company id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Company'
 *    responses:
 *      200:
 *        description: The company was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Company'
 *      404:
 *        description: The company was not found
 *      500:
 *        description: Some error happened
 */

    // Update Company
    router.put("/update/:id", companies.update)
   
    // Delete Company
    router.delete("/delete/:id", companies.delete)
   
    app.use('/api/companies', router)
}