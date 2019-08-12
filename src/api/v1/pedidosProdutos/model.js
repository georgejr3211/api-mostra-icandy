import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class PedidoProduto extends Model {}

PedidoProduto.init(
  {
    pedidos_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'id',
      },
    },
    produtos_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'produtos',
        key: 'id',
      },
    },
    quantidade: {
      type: Sequelize.INTEGER,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'pedidos_produtos' },
);

export default PedidoProduto;
