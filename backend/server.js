import express from 'express';

const app = express();
const port = 5001;

// (port, callback function)
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});