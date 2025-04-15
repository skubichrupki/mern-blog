import express from 'express';
import { connectDB } from './config/db.js';
import postModel from './models/post.js';

const app = express();
const port = 5001;

// (port, callback function) - server start
app.listen(port, () => {
    console.log(`server is running on: http://localhost:${port}`);
    connectDB();
});

// allow to accept JSON data in req.body
app.use(express.json());

// path, (request, response)
app.get('/', (req, res) => {
    res.send("200 /");
    console.log('GET request on /');
})

// path, (request, response)
app.get('/api/posts', (req, res) => {
    res.send("200 /posts")
    const now = new Date();
    console.log(`GET request on /api/posts on ${now}`);
})

app.post('/api/posts', async (req, res) => {
    // data sent by user
    const post = req.body; 

    // create new post model instance with data sent by user
    const newPost = new postModel(post)

    try {
        await newPost.save();
        // 201 = created successful, return json with model data.
        res.status(201).json({ success: true, data: newPost});
    }
    catch (error) {
        // internal server error
        console.error(error.message);
        res.status(500).json({ success: false, message: "500"});
    }
});

// to test post api, use postman app