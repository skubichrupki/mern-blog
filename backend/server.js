import express from 'express';

const app = express();

// (port, callback function)
app.listen(5000, () => {
    console.log('hi mom');
});