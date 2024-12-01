const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// ===================================== MONGO DB =====================================
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@my-mongodb.2rdes.mongodb.net/?retryWrites=true&w=majority&appName=My-MongoDB`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Coffee Database And Collection
        const coffeeCollection = client.db('coffeeDB').collection('coffee');

        // User Database and collection
        const userCollection = client.db('coffeeDB').collection('users');

        // Get Data from db
        app.get('/add-coffee', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // Get single data from db
        app.get(`/add-coffee/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        });

        // Create data on db
        app.post('/add-coffee', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        });

        // Update data from db
        app.put(`/add-coffee/:id`, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedCoffee = req.body;
            const updatedCoffeeDetails = {
                $set: {
                    name: updatedCoffee.name,
                    chef: updatedCoffee.chef,
                    price: updatedCoffee.price,
                    taste: updatedCoffee.taste,
                    category: updatedCoffee.category,
                    details: updatedCoffee.details,
                    photo: updatedCoffee.photo,
                },
            };

            const result = await coffeeCollection.updateOne(filter, updatedCoffeeDetails, options);
            res.send(result);
        });

        // Delete data from db
        app.delete(`/add-coffee/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        });

        // Users Related apis
        app.get('/users', async(req, res)=>{
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/users', async(req, res)=>{
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
// ====================================================================================

app.get('/', (req, res) => {
    res.send({'response': 'Espresso Emporium data is connected successfully'});
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});