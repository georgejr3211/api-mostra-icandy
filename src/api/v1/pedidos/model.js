import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

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

export default Pedido;
