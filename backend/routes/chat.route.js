import express from 'express';
import { getChats, addChat } from '../controllers/chat.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getChats);
router.post('/', verifyToken, addChat);

export default router;