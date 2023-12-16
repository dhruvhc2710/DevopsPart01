const insertImages = require('./insertImages');

const runQueries = async (db) => {
    try {
        // Insert images
        await insertImages(db);

        const productsData = [
            {
                Name: 'Compact Dehumidifier',
                Price: 89.99,
                Colour: 'White',
                Manufacturer: 'Climate Control Solutions',
                StartingDateAvailable: new Date('2023-03-01'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'compact_dehumidifier.jpg',
                Description: 'Ideal for small rooms, removes moisture efficiently.',
                productid: 'DHM1001',
            },
            {
                Name: 'Smart Dehumidifier Pro',
                Price: 149.99,
                Colour: 'Silver',
                Manufacturer: 'SmartTech Appliances',
                StartingDateAvailable: new Date('2023-02-15'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'smart_dehumidifier_pro.jpg',
                Description: 'Wi-Fi enabled, advanced humidity control features.',
                productid: 'DHM2002',
            },
            {
                Name: 'Energy-Efficient Dehumidifier',
                Price: 119.99,
                Colour: 'Green',
                Manufacturer: 'EcoLiving Solutions',
                StartingDateAvailable: new Date('2023-03-10'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'energy_efficient_dehumidifier.jpg',
                Description: 'Environmentally friendly, low power consumption.',
                productid: 'DHM3003',
            },
            {
                Name: 'Basement Master Dehumidifier',
                Price: 199.99,
                Colour: 'Black',
                Manufacturer: 'HomeMaster Technologies',
                StartingDateAvailable: new Date('2023-01-20'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'basement_master_dehumidifier.jpg',
                Description: 'Powerful unit for large spaces like basements.',
                productid: 'DHM4004',
            },
            {
                Name: 'Portable Mini Dehumidifier',
                Price: 59.99,
                Colour: 'Blue',
                Manufacturer: 'Compact Living Gadgets',
                StartingDateAvailable: new Date('2023-04-01'),
                EndingDateAvailable: new Date('2023-12-15'),
                Image: 'mini_dehumidifier.jpg',
                Description: 'Small and lightweight, perfect for closets and bathrooms.',
                productid: 'DHM5005',
            },
            {
                Name: 'Industrial Grade Dehumidifier',
                Price: 299.99,
                Colour: 'Gray',
                Manufacturer: 'Industrial Solutions Inc.',
                StartingDateAvailable: new Date('2023-02-01'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'industrial_dehumidifier.jpg',
                Description: 'Heavy-duty unit for industrial and commercial use.',
                productid: 'DHM6006',
            },
            {
                Name: 'Quiet Bedroom Dehumidifier',
                Price: 129.99,
                Colour: 'Beige',
                Manufacturer: 'Silent Sleep Innovations',
                StartingDateAvailable: new Date('2023-03-15'),
                EndingDateAvailable: new Date('2023-12-15'),
                Image: 'quiet_bedroom_dehumidifier.jpg',
                Description: 'Operates silently, perfect for bedrooms.',
                productid: 'DHM7007',
            },
            {
                Name: 'Modern Design Dehumidifier',
                Price: 179.99,
                Colour: 'Rose Gold',
                Manufacturer: 'Contemporary Living Tech',
                StartingDateAvailable: new Date('2023-02-10'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'modern_design_dehumidifier.jpg',
                Description: 'Sleek and stylish, blends seamlessly with modern interiors.',
                productid: 'DHM8008',
            },
            {
                Name: 'RV and Boat Dehumidifier',
                Price: 69.99,
                Colour: 'Navy Blue',
                Manufacturer: 'On-The-Go Gadgets',
                StartingDateAvailable: new Date('2023-04-05'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'rv_boat_dehumidifier.jpg',
                Description: 'Compact size, ideal for recreational vehicles and boats.',
                productid: 'DHM9009',
            },
            {
                Name: 'Dual-Mode Dehumidifier and Air Purifier',
                Price: 249.99,
                Colour: 'White',
                Manufacturer: 'CleanAir Technologies',
                StartingDateAvailable: new Date('2023-01-15'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'dual_mode_dehumidifier_air_purifier.jpg',
                Description: 'Combines dehumidification with air purification capabilities.',
                productid: 'DHM1010',
            },
            {
                Name: 'High-Capacity Commercial Dehumidifier',
                Price: 499.99,
                Colour: 'Silver',
                Manufacturer: 'Commercial Solutions Corp.',
                StartingDateAvailable: new Date('2023-02-20'),
                EndingDateAvailable: new Date('2023-12-15'),
                Image: 'commercial_dehumidifier.jpg',
                Description: 'Designed for large commercial spaces, exceptional moisture removal.',
                productid: 'DHM1111',
            },
            {
                Name: 'Budget-Friendly Dehumidifier',
                Price: 49.99,
                Colour: 'White',
                Manufacturer: 'Economy Living Appliances',
                StartingDateAvailable: new Date('2023-03-25'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'budget_friendly_dehumidifier.jpg',
                Description: 'Affordable option with basic dehumidification features.',
                productid: 'DHM1212',
            },
            {
                Name: 'Outdoor Dehumidifier for Storage Units',
                Price: 79.99,
                Colour: 'Green',
                Manufacturer: 'Outdoor Storage Tech',
                StartingDateAvailable: new Date('2023-02-05'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'outdoor_storage_dehumidifier.jpg',
                Description: 'Weather-resistant, keeps stored items dry in outdoor units.',
                productid: 'DHM1313',
            },
            {
                Name: 'Pet-Friendly Dehumidifier',
                Price: 99.99,
                Colour: 'Brown',
                Manufacturer: 'Pet Care Innovations',
                StartingDateAvailable: new Date('2023-04-10'),
                EndingDateAvailable: new Date('2023-12-15'),
                Image: 'pet_friendly_dehumidifier.jpg',
                Description: 'Safe for pets, reduces humidity in pet-friendly spaces.',
                productid: 'DHM1414',
            },
            {
                Name: 'Home Office Dehumidifier',
                Price: 129.99,
                Colour: 'Black',
                Manufacturer: 'Home Workspace Solutions',
                StartingDateAvailable: new Date('2023-01-20'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'home_office_dehumidifier.jpg',
                Description: 'Compact design, perfect for home office environments.',
                productid: 'DHM1515',
            },
            {
                Name: 'Travel Size Dehumidifier',
                Price: 39.99,
                Colour: 'Blue',
                Manufacturer: 'On-The-Go Gadgets',
                StartingDateAvailable: new Date('2023-03-01'),
                EndingDateAvailable: new Date('2023-12-15'),
                Image: 'travel_size_dehumidifier.jpg',
                Description: 'Small and lightweight, ideal for travel and small spaces.',
                productid: 'DHM1616',
            },
            {
                Name: 'High-Capacity Basement Dehumidifier',
                Price: 299.99,
                Colour: 'Gray',
                Manufacturer: 'Basement Solutions Inc.',
                StartingDateAvailable: new Date('2023-02-15'),
                EndingDateAvailable: new Date('2023-12-31'),
                Image: 'basement_dehumidifier.jpg',
                Description: 'Powerful unit specifically designed for basement use.',
                productid: 'DHM1717',
            },
            {
                Name: 'Child Room Dehumidifier',
                Price: 79.99,
                Colour: 'Pink',
                Manufacturer: 'KidSpace Innovations',
                StartingDateAvailable: new Date('2023-03-10'),
                EndingDateAvailable: new Date('2023-04-30'),
                Image: 'childrens_room_dehumidifier.jpg',
                Description: 'Safe and colorful, keeps children rooms comfortable.',
                productid: 'DHM1818',
            },
            {
                Name: 'Smart Closet Dehumidifier',
                Price: 59.99,
                Colour: 'Silver',
                Manufacturer: 'SmartLiving Gadgets',
                StartingDateAvailable: new Date('2023-02-01'),
                EndingDateAvailable: new Date('2023-04-15'),
                Image: 'smart_closet_dehumidifier.jpg',
                Description: 'Fits seamlessly in closets, protects clothes from humidity.',
                productid: 'DHM1919',
            },
            {
                Name: 'Humidity Control Tower',
                Price: 199.99,
                Colour: 'Black',
                Manufacturer: 'Advanced Climate Control',
                StartingDateAvailable: new Date('2023-01-15'),
                EndingDateAvailable: new Date('2023-12-30'),
                Image: 'humidity_control_tower.jpg',
                Description: 'Tower design with precise humidity control settings.',
                productid: 'DHM2020',
            },
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

        // 7. most common product color
        const mostCommonColor = await db.collection('products').aggregate([
            {
                $group: {
                    _id: "$Colour",
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            },
            {
                $limit: 1
            }
        ]).toArray();

        console.log("The most common color is", mostCommonColor[0]._id);

        // 8. Add Premium_brand
        await db.collection('products').updateMany(
            { Price: { $gte: 100 } },
            { $set: { Premium_Brand: true } }
        );

        await db.collection('products').updateMany(
            { Price: { $lt: 100 } },
            { $set: { Premium_Brand: false } }
        );

        // 9. Set Discounted Price
        await db.collection('products').updateMany(
            {},
            [
                {
                    $set: {
                        Sale_Price: {
                            $cond: {
                                if: { $gte: ["$Price", 100] },
                                then: { $round: [{ $multiply: ["$Price", 0.8] }, 2] },
                                else: 0
                            }
                        }
                    }
                }
            ]
        );



        //10.
        const productsWithLargeDesc = await db.collection('products').find(
            { Description: { $regex: /large/i } },
            { _id: 0, Name: 1, Description: 1 }
        ).toArray();

        console.log('Products with "large" in the Description:', productsWithLargeDesc);

        //11.

        await db.collection('products').updateMany(
            {},
            { $rename: { 'Manufacturer': 'Produced_By' } }
        );


        //12.

        const longestAvailableProduct = await db.collection('products').aggregate([
            {
                $addFields: {
                    duration: { $subtract: ['$EndingDateAvailable', '$StartingDateAvailable'] }
                }
            },
            {
                $sort: { duration: -1 }
            },
            {
                $limit: 1
            },
            {
                $project: { _id: 0, Name: 1 }
            }
        ]).toArray();

        console.log('Product available for the longest period:', longestAvailableProduct[0]);



        //13.
        const discontinuedProducts = await db.collection('products').find(
            { EndingDateAvailable: { $lt: new Date() } }
        ).toArray();

        console.log('Discontinued products:', discontinuedProducts);


    } catch (error) {
        console.error('Error running queries:', error);
    }

    // 14 TO check products in stock

    const inStockProducts = await db.collection('products').find(
        { 
            StartingDateAvailable: { $lte: new Date() },
            EndingDateAvailable: { $gte: new Date() }
        },
        { _id: 0, Name: 1, StartingDateAvailable: 1, EndingDateAvailable: 1 }
    ).toArray();
    
    console.log('In-stock products:', inStockProducts);

    // 15 Products currently on sale

    const onSaleProducts = await db.collection('products').find(
        { Sale_Price: { $exists: true } },
        { _id: 0, Name: 1, Price: 1, Sale_Price: 1 }
    ).toArray();
    
    console.log('Products currently on sale:', onSaleProducts);
    
    
};

module.exports = runQueries;
