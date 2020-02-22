var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/restaurante',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Mongo DB Connected"))
.catch(err=> {
    console.log(Error, err.message);
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriasRouter = require('./routes/categorias');
var platosRouter = require('./routes/platos');
var clientesRouter = require('./routes/clientes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categorias', categoriasRouter);
app.use('/platos', platosRouter);
app.use('/clientes', clientesRouter);




module.exports = app;