const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.h4eurzu.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const coffeeCollection = client.db('coffeeDB').collection('coffee');

    app.get('/coffee', async (req, res) => {
      const findResult = coffeeCollection.find();
      const result = await findResult.toArray();
      res.send(result);
    });
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
      console.log(result);
    });

    app.post('/addcoffee', async (req, res) => {
      const coffee = req.body;
      console.log(coffee);
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });

    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
      console.log(result);
    });

    await client.db('admin').command({ ping: 1 });

    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (err) {
    console.err(err);
    await client.close();
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
  res.send('Server is running...');
});

app.listen(port, () => console.log(`Coffee Server is running on port: ${port}`));
