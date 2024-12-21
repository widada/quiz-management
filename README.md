## **Quiz Management Documentation**

### **Installation Guide**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/widada/quiz-management.git
   cd quiz-management
   ```
2. **Install Dependencies**
   Make sure you are in the project directory, then run:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory with the following configuration:
   ```env
   PORT=3000
   MONGO_URI=mongodb://<your-mongodb-uri>
   APP_URL=http://localhost:3000
   ```
4. **Run the Application**
   Start the application using the following command:
   ```bash
   npm start
   ```
5. **Run Tests**
   To run the unit tests, use:
   ```bash
   npm run test
   ```
6. **Run Database Seeder**
   Populate the database with initial data using the seeder:
   ```bash
   node seeders/questionSeeder.js
   ```

Live website: [https://quiz.widada.id/api-docs](https://quiz.widada.id/api-docs/)

### **Folder Structure**

```plaintext
── app.js                     # Main application entry point
├── controllers               # Controllers for handling API logic
│   └── questionController.js
├── docs                      # Swagger documentation files
│   └── questionSwagger.js
├── index.js                  # HTTP server entry point
├── jest.config.js            # Jest configuration for testing
├── middlewares               # Middleware for request validation
│   └── validate.js
├── models                    # Mongoose schemas and models
│   └── Question.js
├── package-lock.json         # Automatically generated lockfile for dependencies
├── package.json              # Node.js project configuration
├── routes                    # API routes
│   └── questionRoutes.js
├── schemas                   # JSON schemas for validation
│   └── questionSchema.js
├── seeders                   # Seeder files for populating the database
│   └── questionSeeder.js
├── swagger.js                # Swagger configuration file
└── tests                     # Unit and integration tests
    ├── jest.setup.js         # Jest setup file
    └── questionRoutes.test.js
```

### **Accessing API Documentation via Swagger**

1. **Access Swagger UI**
   Open your browser and navigate to:
   ```
   http://<your-server-address>:<port>/api-docs
   ```

2. **Explore the API**
   Use the Swagger UI to interact with and test the API endpoints.

### **API Documentation**

#### **Base URL**
```
http://<your-server-address>:<port>
```

#### **Endpoints**

1. **Create a Question**
   - **URL:** `/questions`
   - **Method:** `POST`
   - **Description:** Creates a new question in the database.
   - **Request Body Example:**
     ```json
     {
       "Question": "What is the capital of Japan?",
       "Solution": "The correct answer is Tokyo.",
       "CorrectAnswer": "Tokyo",
       "Options": ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
       "Steps": [{"Title": "Step 1", "Result": "Analyze the question"}],
       "ImageUrl": "https://example.com/question.png"
     }
     ```
   - **Response Example:**
     ```json
     {
       "message": "Question created successfully!",
       "data": {
         "_id": "123",
         "Question": "What is the capital of Japan?",
         "Solution": "The correct answer is Tokyo.",
         "CorrectAnswer": "Tokyo",
         "Options": ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
         "Steps": [{"Title": "Step 1", "Result": "Analyze the question"}],
         "ImageUrl": "https://example.com/question.png"
       }
     }
     ```

2. **Update a Question**
   - **URL:** `/questions/:id`
   - **Method:** `PUT`
   - **Description:** Updates an existing question by ID.
   - **Request Body Example:**
     ```json
     {
       "Question": "Updated Question Text"
     }
     ```
   - **Response Example:**
     ```json
     {
       "message": "Question updated successfully!",
       "data": {
         "_id": "123",
         "Question": "Updated Question Text"
       }
     }
     ```

3. **Retrieve a Question by ID**
   - **URL:** `/questions/:id`
   - **Method:** `GET`
   - **Description:** Retrieves a specific question by its ID.
   - **Response Example:**
     ```json
     {
       "message": "Question retrieved successfully!",
       "data": {
         "_id": "123",
         "Question": "What is the capital of Japan?",
         "Solution": "The correct answer is Tokyo.",
         "CorrectAnswer": "Tokyo",
         "Options": ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
         "Steps": [{"Title": "Step 1", "Result": "Analyze the question"}],
         "ImageUrl": "https://example.com/question.png"
       }
     }
     ```

4. **Retrieve All Questions**
   - **URL:** `/questions`
   - **Method:** `GET`
   - **Description:** Retrieves a paginated list of questions.
   - **Query Parameters:**
     - `page`: Page number (default: 1)
     - `limit`: Number of items per page (default: 10)
   - **Response Example:**
     ```json
     {
       "message": "Questions retrieved successfully!",
       "data": [
         { "_id": "1", "Question": "What is 2 + 2?" },
         { "_id": "2", "Question": "What is the capital of France?" }
       ],
       "pagination": {
         "total": 50,
         "page": 1,
         "limit": 2,
         "totalPages": 25
       }
     }
     ```

5. **Delete a Question**
   - **URL:** `/questions/:id`
   - **Method:** `DELETE`
   - **Description:** Deletes a question by ID.
   - **Response Example:**
     ```json
     {
       "message": "Question deleted successfully!",
       "data": {
         "_id": "123",
         "Question": "What is the capital of Japan?"
       }
     }
     ```
