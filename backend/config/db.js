import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config(); // import data from dotenv
let mongo_uri = process.env.MONGO_URI; // used to connect to MongoDB database

// connect to MongoDB
export const connectDB = async () => {
    try {
        // console.log(`mongo uri: ${mongo_uri}`)
        const conn = await mongoose.connect(mongo_uri)
        console.log(`mongo db connected: ${conn.connection.host}`)
    }
    catch(error) {
        console.error(`error: ${error.message}`);
        process.exit(1); // 1 = error, 0 = success
    }
}