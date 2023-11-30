const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

//const URL = 'mongodb+srv://dhruvhc2710:dhruvhc2710@cluster0.owzhnsu.mongodb.net/?retryWrites=true&w=majority'

// Connect to MongoDB
/*mongoose.connect('mongodb+srv://dhruvhc2710:dhruvhc2710@cluster0.bpabbt3.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

*/

// Connection URI
const uri = 'mongodb+srv://dhruvhc2710:dhruvhc2710@cluster0.owzhnsu.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'ProductCatalog';

// Create a MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to read and insert images
const insertImages = async () => {
  const images = fs.readdirSync('./Images');
  const imageDocuments = images.map((filename) => ({ filename }));
  const db = client.db(dbName);
  const result = await db.collection('images').insertMany(imageDocuments);
  console.log(`${result.insertedCount} images inserted.`);
};

// Function to run MongoDB queries
const runQueries = async () => {
  try {
    await client.connect();

    const db = client.db(dbName);

    // Insert images
    await insertImages();

    // Insert 20 products (you need to replace this with your actual data)
    const productsData = [{
      Name: 'img1',
      Price: 'price1',
      Colour: 'Colour1',
      Manufacturer: 'Manufacturer1',
      StartingDateAvailable: 'StartingDateAvailable1',
      EndingDateAvailable: 'endingdateavailable1',
      image: './imgsmart.png',
      description: 'asdqwe',
      productid: '1234',
      
    }
      // Your 20 product documents here
    ];
    await db.collection('products').insertMany(productsData);

    // 5. Find product with the highest price
    const highestPriceProduct = await db.collection('products').findOne(
      {},
      { sort: { Price: -1 }, projection: { _id: 0, Name: 1, Price: 1 } }
    );
    console.log('Product with the highest price:', highestPriceProduct);

    // 6. Find product with the earliest starting date
    const earliestStartDateProduct = await db.collection('products').findOne(
      {},
      { sort: { StartingDateAvailable: 1 }, projection: { _id: 0, Name: 1, StartingDateAvailable: 1 } }
    );
    console.log('Product with the earliest starting date:', earliestStartDateProduct);

    // Continue with the rest of the queries...

  } finally {
    // Close the client
    await client.close();
  }
};

// Run the queries
runQueries().catch(console.error);

// Define your routes and controllers here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
