"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      type: Sequelize.STRING(40)
    },
    sobrenome: {
      type: Sequelize.STRING(40)
    },
    username: {
      type: Sequelize.STRING(110),
      unique: true
    },
    password: {
      type: Sequelize.STRING(150)
    },
    cpf: {
      type: Sequelize.STRING(11),
      unique: true
    },
    email: {
      type: Sequelize.STRING(150),
      unique: true
    },
    telefone: {
      type: Sequelize.STRING(20)
    },
    perfis_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'perfis',
        key: 'id'
      }
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('usuarios')
};
//# sourceMappingURL=20190811131734-create-usuarios.js.map