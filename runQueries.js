const insertImages = require('./insertImages');

const runQueries = async (db) => {
  try {
    // Insert images
    await insertImages(db);

    // Insert 20 products (you need to replace this with your actual data)
    const productsData = [
      {
        Name: 'img1',
        Price: 'price1',
        Colour: 'Colour1',
        Manufacturer: 'Manufacturer1',
        StartingDateAvailable: 'StartingDateAvailable1',
        EndingDateAvailable: 'endingdateavailable1',
        image: './imgsmart.png',
        description: 'asdqwe',
        productid: '1234',
      },
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

  } catch (error) {
    console.error('Error running queries:', error);
  }
};

module.exports = runQueries;
