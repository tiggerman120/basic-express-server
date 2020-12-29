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
//body parser that accepts json
app.use(express.json());

app.use(logRequest);
//home route
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});




app.get('/person', validator, (req, res, next) => {
  console.log('made it!:');
  
  let output = {
    name: req.query.name
    }
    res.status(200).json(output);
});

// //param
// app.get('/person/:name', (req, res) => {
//   let output = {
//     name: req.params.name
//   }
//   res.status(200).json(output);
// });

//body
// app.post('person', (req, res) => {
//   console.log('What got added? ', req.body);
//   res.status(200).send('ok');
// });

//update the body
app.put('/person',)


app.use(errorHandler);
app.use('*', notFoundHandler)

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  })
}

module.exports = {
  server: app,
  start: start
}


// module.exports = {
//   server: app,
//   start: port => {
//     if(!port) { throw new Error('missing port');}
//     app.listen(PORT, () => {
//       console.log(`listening on ${PORT}`);
//     })
//   }
// }