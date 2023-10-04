const posts = require('../models/posts');
const uuid = require('uuid');
class PostController {
    //[GET] post/postCreate
    createPost(req, res, next) {
        res.render('posts/create');
    }

    //[POST] post/postCreate
    addPost(req, res, next) {
        const postID = uuid.v4();
        const comments = [];
        req.body.id = postID;
        req.body.comments = comments;
        const data = req.body;
        const post = posts.find((item) => item.id === req.body.id);
        if (post) {
            res.redirect('back');
        }
        posts.push(data);
        res.redirect('/');
    }

    //[POST] post/postViewDetail
    viewDetailPost(req, res, next) {
        const item = posts.find((item) => item.id === req.params.id);
        res.render('posts/detail', {
            data: item
        });
    }

    addComment(req, res, next) {
        const comment = req.body.comment;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const post = posts.find((item) => item.id === req.params.id);
        post.comments.push({ comment: comment.toString(), formattedDate: formattedDate });
        res.redirect('back');
    }

}

module.exports = new PostController;
