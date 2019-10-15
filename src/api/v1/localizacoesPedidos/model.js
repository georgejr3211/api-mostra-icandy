import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class LocalizacaoPedido extends Model {}

LocalizacaoPedido.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pedido_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'pedidos',
        key: 'id',
      },
    },
    longitude: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.INTEGER,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'localizacoes_pedidos' },
);

export default LocalizacaoPedido;
