"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

var _model = _interopRequireDefault(require("../formasPagamento/model"));

var _model2 = _interopRequireDefault(require("../usuarios/model"));

var _model3 = _interopRequireDefault(require("../statusPedidos/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class Pedido extends _sequelize.Model {}

Pedido.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  formas_pagamento_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'formas_pagamentos',
      key: 'id'
    },
    validate: {
      isInt: true
    }
  },
  usuarios_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    },
    validate: {
      isInt: true
    }
  },
  status_pedido_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'status_pedidos',
      key: 'id'
    },
    validate: {
      isInt: true
    }
  },
  observacao: {
    type: _sequelize.default.STRING
  },
  troco: {
    type: _sequelize.default.DECIMAL
  },
  ativo: {
    type: _sequelize.default.INTEGER,
    defaultValue: 1,
    validate: {
      isInt: true
    }
  }
}, {
  sequelize,
  tableName: 'pedidos'
});
Pedido.FormaPagamento = Pedido.hasOne(_model.default, {
  foreignKey: 'id',
  sourceKey: 'formas_pagamento_id',
  as: 'formaPagamento'
});
Pedido.StatusPedido = Pedido.hasOne(_model3.default, {
  foreignKey: 'id',
  sourceKey: 'status_pedido_id',
  as: 'statusPedido'
});
Pedido.Usuario = Pedido.belongsTo(_model2.default, {
  foreignKey: 'usuarios_id',
  targetKey: 'id',
  as: 'usuario'
});
var _default = Pedido;
exports.default = _default;
//# sourceMappingURL=model.js.map