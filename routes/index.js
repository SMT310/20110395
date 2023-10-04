const postRoute = require('./post');
const homeRoute = require('./home');

function route(app) {
    app.use('/post', postRoute);
    app.use('/', homeRoute);
}

module.exports = route;