/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Retrieve all questions with pagination
 *     description: Get a list of all questions, displaying only their IDs and question texts. Supports pagination.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number to retrieve
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of items to retrieve per page
 *     responses:
 *       200:
 *         description: A list of questions with pagination info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       Question:
 *                         type: string
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       400:
 *         description: Invalid pagination parameters
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Get question details by ID
 *     description: Retrieve detailed information of a question by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to retrieve
 *     responses:
 *       200:
 *         description: Question details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     Question:
 *                       type: string
 *                     Solution:
 *                       type: string
 *                     CorrectAnswer:
 *                       type: string
 *                     Options:
 *                       type: array
 *                       items:
 *                         type: string
 *                     Steps:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           Title:
 *                             type: string
 *                           Result:
 *                             type: string
 *                           ImageUrl:
 *                             type: string
 *                     ImageUrl:
 *                       type: string
 *       404:
 *         description: Question not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a new question
 *     description: Add a new question to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Question:
 *                 type: string
 *                 description: The question text
 *               Solution:
 *                 type: string
 *                 description: Explanation or solution to the question
 *               CorrectAnswer:
 *                 type: string
 *                 description: The correct answer
 *               Options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of answer options
 *               Steps:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     Title:
 *                       type: string
 *                     Result:
 *                       type: string
 *                     ImageUrl:
 *                       type: string
 *               ImageUrl:
 *                 type: string
 *                 description: URL of the question's image
 *     responses:
 *       201:
 *         description: Question created successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     summary: Update a question
 *     description: Update an existing question by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Question:
 *                 type: string
 *               Solution:
 *                 type: string
 *               CorrectAnswer:
 *                 type: string
 *               Options:
 *                 type: array
 *                 items:
 *                   type: string
 *               Steps:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     Title:
 *                       type: string
 *                     Result:
 *                       type: string
 *                     ImageUrl:
 *                       type: string
 *               ImageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     summary: Delete a question
 *     description: Delete an existing question by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the question to delete
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Server error
 */
