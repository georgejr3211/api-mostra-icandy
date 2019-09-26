"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('avaliacoes_restaurantes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    restaurante_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurantes',
        key: 'id'
      }
    },
    avaliacao: {
      type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('avaliacoes_restaurantes')
};
//# sourceMappingURL=20190902231557-create-avaliacoes-restaurantes.js.map