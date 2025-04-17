import express from 'express';
import { getPosts, createPost, deletePost, updatePost } from '../controllers/post.controller.js';

// file for endpoints / api requests routing
// the api paths are prefixed in server.js with /api/post
// :id means id is dynamic
// async (req, res) => {} is called controller function

const router = express.Router();

router.get('/', getPosts);

router.post('/', createPost);

router.delete('/:id', deletePost)

router.put('/:id', updatePost)

export default router;