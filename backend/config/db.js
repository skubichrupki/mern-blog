import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config(); // import data from dotenv

// mongo_uri is a key used to connect to MongoDB database using mongoose
let mongo_uri = process.env.MONGO_URI; 

// connect to MongoDB
export const connectDB = async () => {
    try {
        // console.log(`mongo uri: ${mongo_uri}`)
        const conn = await mongoose.connect(mongo_uri)
        console.log(`MongoDB connected with mongo_URI: ${conn.connection.host}`)
    }
    catch(error) {
        console.error(`error: ${error.message}`);
        process.exit(1); // 1 = error, 0 = success
    }
}