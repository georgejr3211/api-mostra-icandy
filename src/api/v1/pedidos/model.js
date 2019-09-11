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
      validate: {
        isInt: true,
      },
    },
    usuarios_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id',
      },
      validate: {
        isInt: true,
      },
    },
    status_pedido_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'status_pedidos',
        key: 'id',
      },
      validate: {
        isInt: true,
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
      validate: {
        isInt: true,
      },
    },
  },
  { sequelize, tableName: 'pedidos' },
);

Pedido.FormaPagamento = Pedido.hasOne(FormaPagamento, {
  foreignKey: 'id',
  sourceKey: 'formas_pagamento_id',
  as: 'formaPagamento',
});

Pedido.StatusPedido = Pedido.hasOne(StatusPedido, {
  foreignKey: 'id',
  sourceKey: 'status_pedido_id',
  as: 'statusPedido',
});

Pedido.Usuario = Pedido.belongsTo(Usuario, {
  foreignKey: 'usuarios_id',
  targetKey: 'id',
  as: 'usuario',
});

export default Pedido;
