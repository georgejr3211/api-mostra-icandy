"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    formas_pagamento_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'formas_pagamentos',
        key: 'id'
      }
    },
    usuarios_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    status_pedido_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'status_pedidos',
        key: 'id'
      }
    },
    observacao: {
      type: Sequelize.STRING
    },
    troco: {
      type: Sequelize.DECIMAL
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('pedidos')
};
//# sourceMappingURL=20190811131902-create-pedidos.js.map