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