import express from 'express';
import { getPosts, createPost, deletePost, updatePost } from '../controllers/post.controller.js';

// file for api requests routing
// the api paths are prefixed in server.js with /api/post

const router = express.Router();

// path, (request, response)
router.get('/', getPosts);

router.post('/', createPost);

// :id means id is dynamic
// async (req, res) => {} is called controller function
router.delete('/:id', deletePost)

router.put('/:id', updatePost)

export default router;