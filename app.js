var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const {connection}=require("./mongodb/connection");

var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var adminloginRouter = require('./routes/adminlogin');
var adminsignupRouter = require('./routes/adminsignup');
var moviesRouter = require('./routes/movies');
var theatersRouter = require('./routes/theater');
var seatRouter = require('./routes/seat')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
connection();


app.use('/user/login', loginRouter);
app.use('/user/signup',signupRouter);
app.use('/admin/login',adminloginRouter);
app.use('/admin/signup',adminsignupRouter);
app.use('/movies' , moviesRouter);
app.use('/theaters', theatersRouter);
app.use('/seat',seatRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
