"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var resourceService = _interopRequireWildcard(require("../v1/usuarios/service"));

var _model = _interopRequireDefault(require("../v1/usuarios/model"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/', async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;
    const resource = await resourceService.authenticate(email, password);

    if (!resource) {
      return res.status(403).json('Falha ao tentar realizar autenticação, informe os dados corretamente');
    }

    return res.json(resource);
  } catch (error) {
    next(error);
  }
});
router.post('/register', async (req, res, next) => {
  try {
    console.log('req body', req.body);
    req.body.password = _bcryptjs.default.hashSync(req.body.password);
    let resource = await resourceService.createResource(req.body);
    resource = await resourceService.getResource(resource.id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error.message);
  }
});
router.post('/email', async (req, res, next) => {
  try {
    const {
      email
    } = req.body;
    const resource = await resourceService.getResourceEmail(email);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.post('/forgot', async (req, res, next) => {
  try {
    const {
      email
    } = req.body;
    const user = await _model.default.findOne({
      where: {
        email
      }
    });
    const newPassword = Math.random().toString(36).slice(-8); // const newPassword = '123456';

    await _model.default.update({
      password: _bcryptjs.default.hashSync(newPassword)
    }, {
      where: {
        id: user.get('id')
      }
    });
    await resourceService.sendEmail(email, newPassword);
    return res.json(req.body);
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=ctrl.js.map