import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const port = 5001;

// (port, callback function) - server start
app.listen(port, () => {
    console.log(`server is running on: http://localhost:${port}`);
    connectDB();
});

// path, (request, response)
app.get('/', (req, res) => {
    res.send("backend server in node js using express.js library - root")
})