"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllResources = getAllResources;
exports.getResource = getResource;
exports.getResourceByPedido = getResourceByPedido;
exports.createResource = createResource;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;

var _sequelize = require("sequelize");

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllResources(offset, limit, s) {
  const resources = await _model.default.findAll({
    include: [{
      all: true
    }],
    where: {
      [_sequelize.Op.or]: [// { '$pedido.formas_pagamento_id$': { [Op.like]: `%${s}%` } },
      // { '$pedido.usuarios_id$': { [Op.like]: `%${s}%` } },
      // { '$pedido.status_pedido_id$': { [Op.like]: `%${s}%` } },
      {
        '$pedido.observacao$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$pedido.troco$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$produto.nome$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$produto.descricao$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }]
    },
    order: [['id', 'DESC']],
    offset,
    limit
  });
  return resources;
}

async function getResource(id) {
  const resource = await _model.default.findByPk(id);
  return resource;
}

async function getResourceByPedido(id) {
  const resource = await _model.default.findAll({
    order: [['id', 'DESC']],
    include: [{
      association: _model.default.Produto,
      attributes: ['id', 'nome', 'preco']
    }],
    where: {
      ativo: 1,
      pedidos_id: id
    }
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