"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class Restaurante extends _sequelize.Model {}

Restaurante.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  nome: {
    type: _sequelize.default.STRING(100),
    allowNull: false
  },
  cnpj: {
    type: _sequelize.default.STRING(14),
    allowNull: false
  },
  descricao: {
    type: _sequelize.default.STRING(100)
  },
  telefone: {
    type: _sequelize.default.STRING(20),
    allowNull: false
  },
  ativo: {
    type: _sequelize.default.INTEGER,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'restaurantes'
});
var _default = Restaurante;
exports.default = _default;
//# sourceMappingURL=model.js.map