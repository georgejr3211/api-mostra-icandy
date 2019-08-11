module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    categorias_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categorias',
        key: 'id',
      },
    },
    restaurantes_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurantes',
        key: 'id',
      },
    },
    nome: {
      type: Sequelize.STRING(100),
    },
    descricao: {
      type: Sequelize.STRING(100),
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('produtos'),
};
