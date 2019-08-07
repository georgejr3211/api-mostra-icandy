import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class Usuario extends Model {}

Usuario.init(
  {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'usuarios' },
);

Usuario.sync({ force: true });

export default Usuario;
