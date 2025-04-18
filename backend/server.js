import express from 'express';
import { connectDB } from './config/db.js';
import postsRouter from './routes/post.router.js';
import dotenv from 'dotenv'

const app = express();

dotenv.config(); // import data from dotenv
// use env port variable and if null use 5000
const port = process.env.PORT || 5001; 

// allow to accept JSON data in req.body
app.use(express.json());

// set default path for endpoints from post.router.js
app.use('/api/posts', postsRouter);

// server is listening for REST API Requests
app.listen(port, () => {
    console.log(`Express server is running on: http://localhost:${port}`);
    connectDB();
});