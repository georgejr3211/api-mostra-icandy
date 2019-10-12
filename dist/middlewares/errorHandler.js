"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;

function errorHandler(err, req, res, next) {
  console.error(err);
  return res.json({
    error: err
  });
}
//# sourceMappingURL=errorHandler.js.map