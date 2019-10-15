"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var resourceService = _interopRequireWildcard(require("./service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

const storage = _multer.default.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/assets/images');
  },

  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = (0, _multer.default)({
  storage
});
router.get('/', async (req, res, next) => {
  try {
    const {
      offset = 0,
      limit = 10,
      s = ''
    } = req.query;
    const resources = await resourceService.getAllResources(offset, limit, s);
    return res.json({
      value: resources
    });
  } catch (error) {
    return next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const resource = await resourceService.getResource(id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.post('/', upload.single('foto_produto'), async (req, res, next) => {
  try {
    if (req.file) {
      req.body.foto = `${req.file.filename}`;
    }

    let resource = await resourceService.createResource(req.body);
    resource = await resourceService.getResource(resource.id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.put('/:id', upload.single('foto_produto'), async (req, res, next) => {
  try {
    const {
      id
    } = req.params;

    if (req.file) {
      req.body.foto = `${req.file.filename}`;
    }

    let resource = await resourceService.updateResource(id, req.body);
    resource = await resourceService.getResource(id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    await resourceService.deleteResource(id);
    return res.json({
      value: id
    });
  } catch (error) {
    return next(error);
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=ctrl.js.map