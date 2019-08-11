import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Perfil extends Model {}

Perfil.init(
  {
    descricao: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'perfis' },
);

export default Perfil;
