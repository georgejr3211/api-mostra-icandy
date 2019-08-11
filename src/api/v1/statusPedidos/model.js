import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class StatusPedido extends Model {}

StatusPedido.init(
  {
    descricao: {
      type: Sequelize.STRING(50),
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'status_pedidos' },
);

export default StatusPedido;
