import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Restaurante from '../restaurantes/model';

const sequelize = new Sequelize(config);

class Avaliacao extends Model {}

Restaurante.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    restaurante_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurantes',
        key: 'id',
      },
      validate: {
        isInt: true,
      },
    },
    avaliacao: {
      type: Sequelize.INTEGER,
      defaultValue: null,
    },
  },
  { sequelize, tableName: 'restaurantes' },
);
Avaliacao.Restaurante = Avaliacao.belongsTo(Restaurante, {
  foreignKey: 'restaurantes_id',
  targetKey: 'id',
  as: 'restaurante',
});

export default Avaliacao;
