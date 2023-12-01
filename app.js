const express = require('express');
const { connectDB, closeDB , clearAllEntries} = require('./db');
const runQueries = require('./runQueries');

const app = express();
const PORT = process.env.PORT || 3000;

// Define your routes and controllers here


clearAllEntries();
// Connect to MongoDB and run queries
connectDB()
  .then(async (db) => {
    
    await runQueries(db);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })
  .finally(() => {
    // Close the database connection when the server is stopped
    process.on('SIGINT', async () => {
      await closeDB();
      process.exit();
    });
  });

