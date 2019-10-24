

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'localizacoes_pedidos',
    'metodo_entrega',
    Sequelize.INTEGER,
  ),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('localizacoes_pedidos'),
};
