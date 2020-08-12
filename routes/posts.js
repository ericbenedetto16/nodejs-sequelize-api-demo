const router = require('express').Router();
const {
    getPosts,
    getPost,
    createPost,
    editPost,
    deletePost,
} = require('../controllers/posts');

router.route('/').get(getPosts).post(createPost);

router.route('/:id').get(getPost).patch(editPost).delete(deletePost);

module.exports = router;
