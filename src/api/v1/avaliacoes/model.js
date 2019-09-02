import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Restaurante from '../restaurantes/model';

const sequelize = new Sequelize(config);

class Avaliacao extends Model {}

Avaliacao.init(
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
  { sequelize, tableName: 'avaliacoes_restaurantes' },
);
Avaliacao.Restaurante = Avaliacao.hasOne(Restaurante, {
  foreignKey: 'id',
  sourceKey: 'restaurante_id',
  as: 'restaurante',
});

export default Avaliacao;
