const { posts, users } = require('../models/');
require('colors');

// @desc    Get All Posts
// @route   GET /api/v1/posts/
// @access  Public
exports.getPosts = async (req, res, next) => {
    try {
        // TODO: Query Database Here
        // ...
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: `Internal Server Error` });
    }
};

// @desc    Get a Post
// @route   GET /api/v1/posts/:id
// @access  Public
exports.getPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await posts.findOne({
            where: { id },
            include: [
                {
                    model: users,
                    as: 'author',
                    attributes: ['email'],
                },
            ],
        });

        if (!post) {
            return res
                .status(404)
                .json({ success: false, msg: 'Post Does Not Exist' });
        }

        res.status(200).json({ success: true, post });
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: `Internal Server Error` });
    }
};

// @desc    Create A Post
// @route   POST /api/v1/posts/
// @access  Public
exports.createPost = async (req, res, next) => {
    try {
        const data = req.body;
        const now = Date.now();
        const post = await posts.create({
            ...data,
            created: now,
            updated: now,
        });

        res.status(200).json({ success: true, post });
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: `Internal Server Error` });
    }
};

// @desc    Edit A Post
// @route   PATCH /api/v1/posts/:id
// @access  Public
exports.editPost = async (req, res, next) => {
    try {
        // TODO: Query Database Here
        // ...
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: `Internal Server Error` });
    }
};

// @desc    Delete A Post
// @route   DELETE /api/v1/posts/:id
// @access  Public
exports.deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await posts.destroy({ where: { id } });

        if (!post) {
            return res
                .status(404)
                .json({ success: false, msg: 'Post Not Found.' });
        }

        res.status(200).json({ success: true, msg: 'Post Deleted' });
    } catch (err) {
        console.log(`${err}`.red.bold);
        res.status(500).json({ success: false, msg: `Internal Server Error` });
    }
};
