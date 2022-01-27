'use strict'
// node modules
const express = require('express');

// routers
const homeRouter = require('./routes/homeRouter')


const app = express();


app.use(express.json({ extended: false, limit: '2mb' }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false, limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

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
