import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import FormaPagamento from '../formasPagamento/model';
import Usuario from '../usuarios/model';
import StatusPedido from '../statusPedidos/model';

const sequelize = new Sequelize(config);

class Pedido extends Model {}

Pedido.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formas_pagamento_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'formas_pagamentos',
        key: 'id',
      },
    },
    usuarios_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    status_pedido_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'status_pedidos',
        key: 'id',
      },
    },
    observacao: {
      type: Sequelize.STRING,
    },
    troco: {
      type: Sequelize.DECIMAL,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'pedidos' },
);

Pedido.FormaPagamento = Pedido.hasOne(FormaPagamento, {
  foreignKey: 'id',
  sourceKey: 'formas_pagamento_id',
  as: 'formaPagamento',
});
Pedido.Usuario = Pedido.hasOne(Usuario, {
  foreignKey: 'id',
  sourceKey: 'usuarios_id',
  as: 'usuario',
});
Pedido.StatusPedido = Pedido.hasOne(StatusPedido, {
  foreignKey: 'id',
  sourceKey: 'status_pedido_id',
  as: 'statusPedido',
});

export default Pedido;
