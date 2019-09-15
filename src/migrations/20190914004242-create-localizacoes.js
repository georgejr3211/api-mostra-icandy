

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('localizacoes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    local: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('localizacoes'),
};
