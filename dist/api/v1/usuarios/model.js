"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = _interopRequireDefault(require("../../../config/database"));

var _model = _interopRequireDefault(require("../perfis/model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const sequelize = new _sequelize.default(_database.default);

class Usuario extends _sequelize.Model {}

Usuario.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize.default.INTEGER
  },
  device_id: {
    allowNull: true,
    type: _sequelize.default.INTEGER
  },
  foto: {
    type: _sequelize.default.STRING(160),
    allowNull: true
  },
  nome: {
    type: _sequelize.default.STRING(70),
    allowNull: true
  },
  sobrenome: {
    type: _sequelize.default.STRING(70),
    allowNull: true
  },
  username: {
    type: _sequelize.default.STRING(70),
    allowNull: true
  },
  password: {
    type: _sequelize.default.STRING(150),
    allowNull: false
  },
  cpf: {
    type: _sequelize.default.STRING(11),
    allowNull: true
  },
  email: {
    type: _sequelize.default.STRING(150),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  telefone: {
    type: _sequelize.default.STRING(20)
  },
  perfis_id: {
    type: _sequelize.default.INTEGER,
    references: {
      model: 'perfis',
      key: 'id'
    },
    defaultValue: 1,
    allowNull: true
  },
  ativo: {
    type: _sequelize.default.INTEGER,
    defaultValue: 1
  }
}, {
  sequelize,
  tableName: 'usuarios'
});
Usuario.Perfil = Usuario.hasOne(_model.default, {
  foreignKey: 'id',
  sourceKey: 'perfis_id',
  as: 'perfil'
});
var _default = Usuario;
exports.default = _default;
//# sourceMappingURL=model.js.map