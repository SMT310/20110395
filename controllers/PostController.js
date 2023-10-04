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

    //[GET] post/:id/postViewDetail
    viewDetailPost(req, res, next) {
        const item = posts.find((item) => item.id === req.params.id);
        res.render('posts/detail', {
            data: item
        });
    }

    //[POST] post/:id/postComment
    addComment(req, res, next) {
        const comment = req.body.comment;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const post = posts.find((item) => item.id === req.params.id);
        post.comments.push({ comment: comment.toString(), formattedDate: formattedDate });
        res.redirect('back');
    }

    //[GET] post/:id/postEdit
    editPost(req, res, next) {
        const item = posts.find((item) => item.id === req.params.id);
        res.render('posts/edit', {
            data: item
        })
    }

    //[PUT] post/:id
    updatePost(req, res, next) {
        let pos;
        const data = req.body;
        const post = posts.find((item, index) => {
            if (item.id === req.body.id) {
                pos = index;
                return item;
            }
        });
        if (post) {
            posts[pos].title = data.title;
            posts[pos].description = data.description;
            posts[pos].content = data.content;
        }
        res.redirect('/');
    }

    deletePost(req, res, next) {
        const postId = req.params.id;
        const postIndex = posts.findIndex(post => post.id === postId);

        if (postIndex !== -1) {
            posts.splice(postIndex, 1);
            res.redirect('/');
        } else {
            res.redirect('back');
        }
    }
}

module.exports = new PostController;
