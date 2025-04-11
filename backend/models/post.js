import mongoose from "mongoose";

// define schema and options for posts in JSON
const postSchemaJSON = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}
const postSchemaOptions = {
    timestamps: true
}

// create a new mongoose schema instance with JSON object sent as an argument
const postSchema = new mongoose.Schema(postSchemaJSON, postSchemaOptions);

// create a new mongoose model/collection called post based on mongoose schema postSchema 
const postModel = mongoose.model('post', postSchema);

export default postModel;