'use strict';

function validator(req, res, next) {
  if (req.query.name) {
    res.status(200).json(req.query);
  } else {
    next('req query doesnt contain a name');
  }
}

module.exports = validator;