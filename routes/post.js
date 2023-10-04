const express = require('express');
const router = express.Router();

const postController = require('../controllers/PostController');
router.get('/postCreate', postController.createPost);
router.post('/postAdd', postController.addPost);

router.get('/:id/postViewDetail', postController.viewDetailPost);
router.post('/:id/postComment', postController.addComment);
router.get('/:id/postEdit', postController.editPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);



module.exports = router;
