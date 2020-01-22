// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require("cors");
// var testAPIRouter = require("./routes/testAPI");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const passport = require("passport");
// const users = require("./routes/api/users");

// var app = express();

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());

// // DB Config
// const db = require("./config/keys").mongoURI;// Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);
// // app.use("/testAPI", testAPIRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // Passport middleware
// app.use(passport.initialize());// Passport config
// require("./config/passport")(passport);// Routes
// app.use("/api/users", users);

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// module.exports = app;


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());// DB Config
const db = require("./config/keys").mongoURI;// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));// Passport middleware
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;app.listen(port, () => console.log(`Server up and running on port ${port} !`));