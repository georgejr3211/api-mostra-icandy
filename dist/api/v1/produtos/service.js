"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllResources = getAllResources;
exports.getResource = getResource;
exports.getResourceProdutosByIdForaEstoque = getResourceProdutosByIdForaEstoque;
exports.createResource = createResource;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;

var _sequelize = require("sequelize");

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllResources(offset, limit, search) {
  const resources = await _model.default.findAll({
    include: [{
      all: true
    }],
    offset,
    limit,
    where: {
      nome: {
        [_sequelize.Op.like]: `%${search}%`
      },
      qtd_estoque: {
        [_sequelize.Op.gt]: 0
      },
      ativo: 1
    },
    order: [['id', 'DESC']]
  });
  return resources;
}

async function getResource(id) {
  const resource = await _model.default.findByPk(id);
  return resource;
}

async function getResourceProdutosByIdForaEstoque(ids) {
  const resource = await _model.default.findAll({
    where: [{
      id: {
        [_sequelize.Op.in]: ids
      }
    }]
  });
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