var jwt = require('jwt-simple');

module.exports = {
  errorLogger: function (error, req, res, next) {

    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    res.send(500, {
      error: error.message
    });
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;

    if (!token) {}

    try {
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }

  }
};
