const express = require("express")

const cors = require("cors")

const port = process.env.PORT || 4000;

require('dotenv').config()

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()



app.use(express.json())
app.use(cors())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b7lw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");





        const allUsersColections = client.db("kalni").collection("users")
        const allProductsCollection = client.db("kalni").collection("products")
        const allSubscribersCollection = client.db("kalni").collection("subscribers")
        const cartsCollection = client.db("kalni").collection("cart")






        // USERS DATA
        app.post('/user', async (req, res) => {
            const user = req.body
            const query = { email: user.email }
            const existingUser = await allUsersColections.findOne(query)
            if (existingUser) {
                return null
            }
            const result = await allUsersColections.insertOne({ ...user, role: 'customer' })
            res.send(result)
        })



        // get user role
        app.get('/user/role/:email', async (req, res) => {
            const email = req.params.email;
            const result = await allUsersColections.findOne({email})
            res.send({ role: result?.role })
        })




        // PRODUCTS DATA
        app.get('/allProducts', async (req, res) => {
            const result = await allProductsCollection.find().toArray()
            res.send(result)
        })



        app.get('/allProducts/:id', async (req, res) => {
            const id = req.params
            const query = { _id: new ObjectId(id) }
            const result = await allProductsCollection.findOne(query)
            res.send(result)
        })







        // SUBSCRIBERS
        app.post('/subscriber', async (req, res) => {
            const data = req.body;
            const result = await allSubscribersCollection.insertOne(data)
            res.send(result)
        })






        // CARTS DATA
        app.post('/cart', async (req, res) => {
            const cart = req.body;
            const result = await cartsCollection.insertOne(cart)
            res.send(result)
        })



        app.delete('/cart/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cartsCollection.deleteOne(query)
            res.send(result)
        })



        app.get('/cart', async (req, res) => {
            const email = req.query.email
            const query = { userEmail: email }
            const result = await cartsCollection.find(query).toArray()
            res.send(result)
        })




    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);







app.get('/', (req, res) => {
    res.send('Kalni is running')
})


app.listen(port, () => {
    console.log(`KALNI is running on port ${port}`)
})
