'use strict';
const errorHandler = require('.././error-handlers/500');
function validator(req, res, next) {
  if (req.query.name) {
    next();
  } else {
    next('requires a name');
  }
}

// function valRequest(req, res, next) {
//   if
// }

module.exports = validator;