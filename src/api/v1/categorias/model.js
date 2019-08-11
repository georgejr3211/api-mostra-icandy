import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Categoria extends Model {}

Categoria.init(
  {
    nome: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'categorias' },
);

export default Categoria;
