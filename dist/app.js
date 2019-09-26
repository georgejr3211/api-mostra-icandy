"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _compression = _interopRequireDefault(require("compression"));

var _routes = _interopRequireDefault(require("./routes"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

var _ctrl = _interopRequireDefault(require("./api/auth/ctrl"));

var _tokenValidator = _interopRequireDefault(require("./middlewares/tokenValidator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.express = (0, _express.default)();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(_express.default.json());
    this.express.use(_express.default.urlencoded({
      extended: true
    }));
    this.express.use((0, _cors.default)({
      allowedHeaders: ['sessionId', 'Content-Type'],
      exposedHeaders: ['sessionId'],
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false
    }));
    this.express.use((0, _morgan.default)('common'));
    this.express.use((0, _compression.default)());
    this.express.use(_express.default.static('public'));
  }

  routes() {
    this.express.use('/auth', _ctrl.default);
    this.express.use('/', _tokenValidator.default, _routes.default);
    this.express.use('/', _errorHandler.default, (req, res) => {
      res.json({
        message: 'API Mostrar de Talentos 2019'
      });
    });
  }

}

var _default = new App().express;
exports.default = _default;
//# sourceMappingURL=app.js.map