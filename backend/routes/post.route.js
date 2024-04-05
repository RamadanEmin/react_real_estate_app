import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { getPosts, getPost, addPost } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', verifyToken, addPost);

export default router;