

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('localizacoes_pedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pedido_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'pedidos',
        key: 'id',
      },
    },
    longitude: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('localizacoes_pedidos'),
};
