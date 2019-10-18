"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

var _model = _interopRequireDefault(require("../categorias/model"));

var _model2 = _interopRequireDefault(require("../restaurantes/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class Produto extends _sequelize.Model {}

Produto.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  categorias_id: {
    type: _sequelize.default.INTEGER,
    references: {
      model: 'categorias',
      key: 'id'
    },
    allowNull: null
  },
  restaurantes_id: {
    type: _sequelize.default.INTEGER,
    references: {
      model: 'restaurantes',
      key: 'id'
    },
    allowNull: false
  },
  qtd_estoque: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  nome: {
    type: _sequelize.default.STRING(100),
    allowNull: false
  },
  descricao: {
    type: _sequelize.default.STRING(100)
  },
  preco: {
    type: _sequelize.default.DECIMAL(10, 2),
    allowNull: false
  },
  foto: {
    type: _sequelize.default.STRING
  },
  ativo: {
    type: _sequelize.default.INTEGER,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'produtos'
});
Produto.Categoria = Produto.hasOne(_model.default, {
  foreignKey: 'id',
  sourceKey: 'categorias_id',
  as: 'categoria'
});
Produto.Restaurante = Produto.hasOne(_model2.default, {
  foreignKey: 'id',
  sourceKey: 'restaurantes_id',
  as: 'restaurante'
}); // Produto.Categoria = Produto.belongsTo(Categoria, { foreignKey: 'id', sourceKey: 'categorias_id', as: 'categoria' });

Produto.Restaurante = Produto.belongsTo(_model2.default, {
  foreignKey: 'id'
});
var _default = Produto;
exports.default = _default;
//# sourceMappingURL=model.js.map