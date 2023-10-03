const post = require('../models/post');
class PostController {
    show(req, res, next) {
        res.render('home', {
            data: post
        });
    }
    showPost(req, res, next) {
        res.render('post');
    }
}

module.exports = new PostController;
