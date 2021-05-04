var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//http://localhost/external-api
var publicMessageRouter = require('./routes/api/messages/public-message')
var protectedMessageRouter = require('./routes/api/messages/protected-message')

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/messages/public-message', publicMessageRouter);

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://severalpens.au.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://tokenvortex.com',
  issuer: 'https://severalpens.au.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/messages/protected-message', protectedMessageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
