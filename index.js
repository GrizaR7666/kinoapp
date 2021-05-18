const express = require('express');
var session = require('express-session')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const sessionOptions = {
  key: 'user', 
  secret: ' 5547645645', 
  resave: false, 
  rolling: true, 
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    path: '/',
    secure: !true
  }
};
app.use(bodyParser.json());
app.use(session(sessionOptions));
var mongo = 'mongodb://127.0.0.1/kinotower_db';
mongoose.connect(mongo, {useUnifiedTopology: true, useNewUrlParser: true});
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Ошибка MongoDB'));

const routes = require('./routes/index');
app.use('/api', routes);

let logger = require("./logger/logger").logger;
logger.log({
  level: 'info',
  message: 'Log'
});

app.listen(8080, () => console.log("Все ок"));