"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllResources = getAllResources;
exports.getResource = getResource;
exports.getResourceUser = getResourceUser;
exports.createResource = createResource;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;

var _sequelize = require("sequelize");

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllResources(offset, limit, s) {
  const resources = await _model.default.findAndCountAll({
    include: [{
      all: true
    }],
    where: {
      [_sequelize.Op.or]: [{
        '$usuario.nome$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$formaPagamento.descricao$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$statusPedido.descricao$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$usuario.nome$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$usuario.email$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$usuario.sobrenome$': {
          [_sequelize.Op.like]: `%${s}%`
        }
      }, {
        '$usuario.username$': {
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
  console.log('GET RESOURCE PEDIDOS');
  const resource = await _model.default.findByPk(id, {
    include: [{
      all: true
    }]
  });
  return resource;
}

async function getResourceUser(id) {
  const resource = await _model.default.findAll({
    include: [{
      all: true
    }],
    where: {
      usuarios_id: id
    },
    order: [['id', 'DESC']]
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