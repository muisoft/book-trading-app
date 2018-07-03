const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require( 'express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require( 'mongoose');
const passport = require( 'passport');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5002);

require('./api/models')('mongodb://localhost:27017/booktrading');

const app = express();
const dev = app.get('env') !== 'production';

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "mysecretsessionpassword",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

if(!dev){
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

if(dev){
  app.use(morgan('dev'));

  //app.use(express.static(path.resolve(__dirname, 'public', 'index.html')));
//  app.get('/*', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
//  })
}

app.use( passport.initialize());
app.use( passport.session());

require('./api/config/passport')(passport);

const router = require('./api/routes/router');
app.use(router);

const server = createServer(app);
server.listen(PORT, err => {
  if(err) throw err;

  console.log('Server started');
})
