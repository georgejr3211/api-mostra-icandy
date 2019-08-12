import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Restaurante extends Model {}

Restaurante.init(
  {
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING(14),
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING(100),
    },
    telefone: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'restaurantes' },
);

export default Restaurante;
