"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenValidator;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenValidator(req, res, next) {
  try {
    const token = req.header('x-access-token');

    if (!token) {
      res.status(403).json('Sem autorização. É necessário informar um token para ter acesso');
    }

    const user = _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET_KEY);

    if (!user) {
      res.status(403).json('Sem autorização. É necessário informar um token válido para ter acesso');
    } else {
      req.user = user;
    }

    next();
  } catch (error) {
    next(error);
  }
}
//# sourceMappingURL=tokenValidator.js.map