'use strict';

//libraries
require('dotenv').config();
const express = require('express'); //server
const app = express(); //assigning the server to a variable
const PORT = process.env.PORT || 3000

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logRequest = require('./middleware/logger')
//body parser than accepts json
app.use(express.json());

//home route
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});




app.get('/person', (req, res, next) => {
  let output = {
    name: req.query.name
    }
    res.status(200).json(output);
});

//param
app.get('/person/:name', (req, res) => {
  let output = {
    name: req.params.name
  }
  res.status(200).json(output);
});

//body
app.post('person', (req, res) => {
  console.log('What got added? ', req.body);
  res.status(200).send('ok');
});

//update the body
app.put('/person',)

app.use(logRequest);

app.use('*', notFoundHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  })
}

module.exports = {
  server: app,
  start: start
}