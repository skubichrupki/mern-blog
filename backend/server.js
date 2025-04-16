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
app.get('/api/posts', async (req, res) => {

    try {
        //fetch all the posts in db
        const posts = await postModel.find({});
        // send posts back to backend
        res.status(200).json({success: true, data: posts});

        const now = new Date();
        console.log(`GET request on /api/posts on ${now}`);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "posts not fetched"})
    }
})

app.post('/api/posts', async (req, res) => {
    // data sent by user
    const post = req.body; 

    // create new post model instance with data sent by user
    const newPost = new postModel(post)

    try {
        await newPost.save();
        // 201 = created successful, return json with model data.
        res.status(201).json({ success: true, message: "post added", payload: newPost});
    }
    catch (error) {
        // internal server error
        console.error(error.message);
        res.status(500).json({ success: false, message: "post not added"});
    }
});

// :id means id is dynamic
// async (req, res) => {} is called controller function
app.delete('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
    // now check for id in the Mongo DB
    try {
        await postModel.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "post deleted"});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "post not deleted"});
    }
})

app.put('/api/posts/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    // now check for id in the Mongo DB
    try {
        await postModel.findByIdAndUpdate(id, post, {new: true});
        res.status(200).json({success: true, message: "post updated"});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "post not updated"});
    }
})
