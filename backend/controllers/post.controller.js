import prisma from '../lib/prisma.js';

export const getPosts = async (req, res) => {
    const query = req.query;

    try {
        const posts = await prisma.post.findMany();

        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to get posts' });
    }
};

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await prisma.post.findUnique({
            where: { id }
        });

        res.status(200).json({ ...post, isSaved: false });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to get post' });
    }
};

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body,
                userId: tokenUserId
            }
        });
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to create post' });
    }
};

export const updatePost = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const tokenUserId = req.userId;

    try {
        const post = await prisma.post.findUnique({
            where: { id }
        });

        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: 'Not Authorized!' });
        }

        const updatePost = await prisma.post.update({
            where: { id },
            data: {
                ...body
            }
        });

        res.status(200).json(updatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to update post' });
    }
};