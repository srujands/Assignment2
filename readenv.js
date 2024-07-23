// readEnv.js

// Load environment variables from .env file if using dotenv
require('dotenv').config();

// Read and log environment variables
console.log('Environment Variables:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);

// Example of accessing a variable set directly in the environment
console.log('NODE_ENV:', process.env.NODE_ENV || 'Not defined');
