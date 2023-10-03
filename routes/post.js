const express = require('express');
const router = express.Router();

const postController = require('../controllers/PostController');
router.get('/post', postController.showPost)
router.get('/', postController.show);

module.exports = router;
