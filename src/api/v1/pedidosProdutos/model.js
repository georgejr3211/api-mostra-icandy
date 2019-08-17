import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Pedido from '../pedidos/model';
import Produto from '../produtos/model';

const sequelize = new Sequelize(config);

class PedidoProduto extends Model {}

PedidoProduto.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
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

PedidoProduto.Pedido = PedidoProduto.hasOne(Pedido, {
  foreignKey: 'id',
  sourceKey: 'pedidos_id',
  as: 'pedido',
});
PedidoProduto.Produto = PedidoProduto.hasOne(Produto, {
  foreignKey: 'id',
  sourceKey: 'produtos_id',
  as: 'produto',
});

export default PedidoProduto;
