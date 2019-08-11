

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('restaurantes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      type: Sequelize.STRING(100),
    },
    cnpj: {
      type: Sequelize.STRING(14),
    },
    descricao: {
      type: Sequelize.STRING(100),
    },
    telefone: {
      type: Sequelize.STRING(20),
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('restaurantes'),
};
