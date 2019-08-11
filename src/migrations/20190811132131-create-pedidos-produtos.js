module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pedidos_produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pedidos_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'pedidos',
        key: 'id',
      },
    },
    produtos_id: {
      type: Sequelize.INTEGER,
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
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('pedidos_produtos'),
};
