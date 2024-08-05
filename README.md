### Test Task: NestJS Senior Backend Developer

#### Objective:
Create a microservices-based mini-application using NestJS, MongoDB, and REST API.
Implement critical features and demonstrate expertise in architecture, code quality, and unit testing with Mocha.

#### Task Description:

You are required to create a simplified version of an e-commerce system with the following features:

1. **Product Service**:
    - **Create Product**: Add a new product to the catalog.
    - **Get Products**: Retrieve a list of products.

2. **Order Service**:
    - **Create Order**: Place a new order with multiple products.
    - **Get Orders**: Retrieve a list of orders.

3. **User Service**:
    - **Register User**: Register a new user.
    - **Login**: User login with JWT-based authentication.

#### Technical Requirements:

1. **NestJS**:
    - Use NestJS framework to create the application.
    - Structure the application into separate modules for Product, Order, and User services.
    - Implement TCP-based inter-service communication using NestJS's built-in transport layer.

2. **MongoDB**:
    - Use MongoDB as the database.
    - Use Mongoose for schema definition and data modeling.

3. **Microservices**:
    - Structure the application using a microservices architecture.

4. **REST API**:
    - Implement RESTful endpoints for all the features mentioned above.
    - Ensure proper HTTP status codes and error handling.

5. **Unit Tests with Mocha**:
    - Write unit tests for all the major functionalities using Mocha.
    - Ensure a high level of code coverage.

#### Detailed Requirements:

1. **Product Service**:
    - Model: `Product` (name, description, price, category).
    - Endpoints:
        - `POST /products`: Create a new product.
        - `GET /products`: Retrieve all products.

2. **Order Service**:
    - Model: `Order` (userId, products [productId, quantity], totalPrice).
    - Endpoints:
        - `POST /orders`: Create a new order.
        - `GET /orders`: Retrieve all orders.

3. **User Service**:
    - Model: `User` (username, password, email).
    - Endpoints:
        - `POST /users/register`: Register a new user.
        - `POST /users/login`: User login.

4. **Authentication**:
    - Implement JWT-based authentication for the Order service.
    - Protect the order creation and retrieval endpoints.

5. **Unit Tests**:
    - Use Mocha for writing unit tests.
    - Cover CRUD operations for both Product and Order services.
    - Include tests for the authentication flow.

#### Submission Guidelines:

1. **Code Repository**:
    - Create a GitHub repository for the project.
    - Commit your code regularly with clear messages.

2. **Documentation**:
    - Provide a README.md file with instructions on how to set up and run the application.
    - Include examples of API calls and responses.

3. **Tests**:
    - Include a clear guide on how to run the tests.
    - Ensure all tests pass before submission.

#### Evaluation Criteria:

- Code quality and organization.
- Proper use of NestJS and MongoDB.
- Implementation of microservices architecture.
- Functionality and correctness of REST APIs.
- Quality and coverage of unit tests.
- Clear and comprehensive documentation.
