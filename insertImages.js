const fs = require('fs');

const insertImages = async (db) => {
  const images = fs.readdirSync('./images');
  const imageDocuments = images.map((filename) => ({ filename }));
  const result = await db.collection('images').insertMany(imageDocuments);
  console.log(`${result.insertedCount} images inserted.`);
};

module.exports = insertImages;
