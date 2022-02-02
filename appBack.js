'use strict'
// node modules
const express = require('express');
const path = require('path');
const mustacheExpress = require("mustache-express");

// routers
const homeRouter = require('./homeRouter')

const app = express();

// view engine setup
app.engine('html', mustacheExpress());
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'html');

app.use(express.json({ extended: false, limit: '2mb' }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false, limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'front')));

// routers
app.use('/', homeRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.set('port', process.env.PORT || 1337);

app.listen(app.get('port'), function () {
    console.log("Serever has been started 1337...");
});
