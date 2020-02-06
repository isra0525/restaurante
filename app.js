var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/restaurante',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Mongo DB Connected"))
.catch(err=> {
    console.log(Error, err.message);
})

//mongoose.connect('mongodb://user:password')
const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Db connected');
})

global.db = db;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriasRouter = require('./routes/categorias');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categorias', categoriasRouter);


module.exports = app;
