"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('perfis', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    descricao: {
      type: Sequelize.STRING(30),
      unique: true
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('perfis')
};
//# sourceMappingURL=20190811131709-create-perfis.js.map