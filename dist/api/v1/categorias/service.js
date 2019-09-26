"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllResources = getAllResources;
exports.getResource = getResource;
exports.createResource = createResource;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;

var _sequelize = require("sequelize");

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllResources(offset, limit, search) {
  const resources = _model.default.findAll({
    order: [['id', 'DESC']],
    offset,
    limit,
    where: {
      ativo: 1,
      [_sequelize.Op.or]: [{
        nome: {
          [_sequelize.Op.like]: `%${search}%`
        }
      }]
    }
  });

  return resources;
}

async function getResource(id) {
  const resource = await _model.default.findByPk(id);
  return resource;
}

function createResource(resource) {
  return _model.default.create(resource);
}

function updateResource(id, resource) {
  return _model.default.update(resource, {
    where: {
      id
    }
  });
}

function deleteResource(id) {
  return _model.default.findByPk(id).then(res => res.destroy());
}
//# sourceMappingURL=service.js.map