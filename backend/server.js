import express from 'express';
import { connectDB } from './config/db.js';
import router from './routes/post.router.js';

const app = express();
const port = 5001;

// (port, callback function) - server start
app.listen(port, () => {
    console.log(`server is running on: http://localhost:${port}`);
    connectDB();
});

// allow to accept JSON data in req.body
app.use(express.json());

// set default path for routing rest api requests from post.router.js
app.use('/api/posts', router);