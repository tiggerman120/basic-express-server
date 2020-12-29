'use strict';
const errorHandler = require('.././error-handlers/500');
function validator(req, res, next) {
  if (!req.query.name) {
    next('requires a name');
  } else {
    next();
  }
}
//rewrite your function so the error first then good
// function valRequest(req, res, next) {
//   if
// }

module.exports = validator;