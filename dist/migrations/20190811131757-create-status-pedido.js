"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('status_pedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    descricao: {
      type: Sequelize.STRING(50)
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('status_pedidos')
};
//# sourceMappingURL=20190811131757-create-status-pedido.js.map