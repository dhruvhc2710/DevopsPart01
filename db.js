const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://dhruvhc2710:dhruvhc2710@cluster0.owzhnsu.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'ProductCatalog';

// Create a MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    connectDB: async () => {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    },

    closeDB: async () => {
        await client.close();
        console.log('MongoDB connection closed');
    },
};
