"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

var _model = _interopRequireDefault(require("../restaurantes/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class Avaliacao extends _sequelize.Model {}

Avaliacao.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  restaurante_id: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: 'restaurantes',
      key: 'id'
    },
    validate: {
      isInt: true
    }
  },
  avaliacao: {
    type: _sequelize.default.INTEGER,
    defaultValue: null
  }
}, {
  sequelize,
  tableName: 'avaliacoes_restaurantes'
});
Avaliacao.Restaurante = Avaliacao.hasOne(_model.default, {
  foreignKey: 'id',
  sourceKey: 'restaurante_id',
  as: 'restaurante'
});
var _default = Avaliacao;
exports.default = _default;
//# sourceMappingURL=model.js.map