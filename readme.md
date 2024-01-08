# Audiophile E-commerce Website Backend API

This backend API is developed specifically for the Audiophile e-commerce website, providing a robust platform for managing and retrieving product information. Currently, the API focuses on delivering product data, which is a fundamental component for any online store. As of now, it facilitates only the browsing of available products.

If this application were tailored for a specific client, it could be expanded to include additional functionalities. Such enhancements could encompass the handling of the entire purchasing process, enabling customers to buy products directly through the application. Additionally, for store owners, the API could be equipped with tools for easily adding new products to the database and efficiently managing orders.

In designing this API, I emphasize its flexibility and scalability, ensuring that it can meet the evolving needs of both users and store owners in the future.

## Technologies

- Node.js with Express.js for the backend, providing a robust framework for creating powerful and scalable server-side applications.
- CORS (Cross-Origin Resource Sharing) enabled, ensuring that the API can securely handle requests from different domains.
- Dotenv for managing environment variables, enabling easy configuration of applications in different environments without code changes.

## Installation

To run the project locally, follow these steps:

- Clone the repository to your device.
- Install dependencies using npm install.
- Create a .env file in the main project directory and configure environment variables.
- I have prepared a Dockerfile for containerization, which simplifies deployment and environment setup. To use it, build the Docker image and run the container.
- Start the local server using npm start.

## API Usage

Once the server is running, the API is available at http://localhost:[PORT]/api/. Available endpoints:

- GET /api/products - retrieves a list of products.
