import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Localizacao extends Model {}

Localizacao.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    local: {
      type: Sequelize.STRING(100),
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'localizacoes' },
);

export default Localizacao;
