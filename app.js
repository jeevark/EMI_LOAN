var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbms = require('./dbms')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const customer =require('./Module/customer_signup');
const loan_inf = require('./Module/loan_reg');
const paid = require('./Module/paidloan');

//calling function...

app.post('/insert',customer.signup);
app.get('/getcustomer',customer.getcustmoer);
app.post('/loaninf',loan_inf.Register);
app.get('/getloan',loan_inf.getloan_deti)
app.get('/getoneloan',loan_inf.getoneloan)
app.post('/paidget',paid.paid);
app.get('/getbill',paid.getpayment);



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
