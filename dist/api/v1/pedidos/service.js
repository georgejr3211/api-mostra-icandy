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
exports.verificaEstoque = verificaEstoque;

var _sequelize = require("sequelize");

var _model = _interopRequireDefault(require("./model"));

var _model2 = _interopRequireDefault(require("../statusPedidos/model"));

var produtoService = _interopRequireWildcard(require("../produtos/service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAllResources(offset, limit, s) {
  let resources = await _model.default.findAndCountAll({
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
      }],
      ativo: 1,
      '$usuario.ativo$': 1
    },
    order: [['id', 'DESC']],
    offset
  });
  const status = await _model.default.findAll({
    include: [{
      model: _model2.default,
      as: 'statusPedido',
      attributes: ['descricao']
    }],
    attributes: [[_sequelize.Sequelize.fn('count', _sequelize.Sequelize.col('status_pedido_id')), 'qtd']],
    group: ['statusPedido.id']
  });
  resources = { ...resources,
    status
  };
  return resources;
}

async function getResource(id) {
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

async function verificaEstoque(idProdutos) {
  try {
    let produtosForaEstoque = await produtoService.getResourceProdutosByIdForaEstoque(idProdutos);
    produtosForaEstoque = produtosForaEstoque.map(produto => produto.get({
      plain: true
    }));
    return produtosForaEstoque;
  } catch (error) {
    throw new Error(error);
  }
}
//# sourceMappingURL=service.js.map