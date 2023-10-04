const posts = require('../models/posts');

class HomeController {
    index(req, res, next) {
        res.render('home', {
            data: posts,
        });
    }
}

module.exports = new HomeController;