import postModel from "../models/post.js";
import mongoose, { get } from "mongoose";

// file with functions for api requests

export const getPosts = async (req, res) => {
    try {
        //fetch all the posts in db
        const posts = await postModel.find({});
        // send posts back to backend
        res.status(200).json({success: true, data: posts});
        //const now = new Date();
        console.log(`GET /api/posts`);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message})
    }
}

export const createPost = async (req, res) => {
    // data sent by user
    const post = req.body; 
    // create new post model instance with data sent by user
    const newPost = new postModel(post)

    try {
        await newPost.save();
        // 201 = created successful, return json with model data.
        let message = `post added`
        res.status(201).json({ success: true, message: message, payload: newPost});
    }
    catch (error) {
        // internal server error
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message});
    }
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    // now check for id in the Mongo DB
    try {
        await postModel.findByIdAndDelete(id);
        let message = `post ${id} deleted`
        res.status(200).json({success: true, message: message});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    // now check for id in the Mongo DB

    // if id type is not valid for Mongo DB
    if (!mongoose.Types.ObjectId.isValid(id)) {
        let message = `post ${id} not in database`;
        res.status(400).json({success: false, message: message});
    }

    try {
        // check Mongoose documentation for functions to interact with Mongo DB
        await postModel.findByIdAndUpdate(id, body, {new: true});
        let message = `post ${id} updated`
        res.status(200).json({success: true, message: message, payload: body});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}