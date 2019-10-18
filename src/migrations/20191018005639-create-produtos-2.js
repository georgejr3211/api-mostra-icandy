

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'produtos',
    'qtd_estoque',
    Sequelize.INTEGER,
  ),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('produtos'),
};
