const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

//connect css
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({
    extends: true
}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://${hostname}:${port}`);
})