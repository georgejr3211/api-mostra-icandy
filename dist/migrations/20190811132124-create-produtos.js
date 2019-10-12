"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    categorias_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categorias',
        key: 'id'
      }
    },
    restaurantes_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurantes',
        key: 'id'
      }
    },
    nome: {
      type: Sequelize.STRING(100)
    },
    foto: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING(100)
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('produtos')
};
//# sourceMappingURL=20190811132124-create-produtos.js.map