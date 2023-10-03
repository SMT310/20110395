const postRoute = require('./post');

function route(app) {
    app.use('/', postRoute);
}

module.exports = route;