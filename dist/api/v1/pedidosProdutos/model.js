"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

var _model = _interopRequireDefault(require("../pedidos/model"));

var _model2 = _interopRequireDefault(require("../produtos/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class PedidoProduto extends _sequelize.Model {}

PedidoProduto.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  pedidos_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'pedidos',
      key: 'id'
    }
  },
  produtos_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'produtos',
      key: 'id'
    }
  },
  quantidade: {
    type: _sequelize.default.INTEGER
  },
  ativo: {
    type: _sequelize.default.INTEGER,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'pedidos_produtos'
});
PedidoProduto.Pedido = PedidoProduto.hasOne(_model.default, {
  foreignKey: 'id',
  sourceKey: 'pedidos_id',
  as: 'pedido'
});
PedidoProduto.Produto = PedidoProduto.hasOne(_model2.default, {
  foreignKey: 'id',
  sourceKey: 'produtos_id',
  as: 'produto'
});
var _default = PedidoProduto;
exports.default = _default;
//# sourceMappingURL=model.js.map