import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Produto extends Model {}

Produto.init(
  {
    categorias_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categorias',
        key: 'id',
      },
    },
    restaurantes_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurantes',
        key: 'id',
      },
    },
    nome: {
      type: Sequelize.STRING(100),
    },
    descricao: {
      type: Sequelize.STRING(100),
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'produtos' },
);

export default Produto;
