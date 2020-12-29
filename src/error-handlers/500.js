'use strict';

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  console.log(err);
  res.json({ error: err });
}

// function serverError(err, req, res, next) {
//   res.status(500).send('server error', err);
// }

module.exports = errorHandler;