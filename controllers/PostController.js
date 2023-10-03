class PostController {
    show(req, res, next) {
        res.render('home');
    }
    showPost(req, res, next) {
        res.render('post');
    }
}

module.exports = new PostController;
