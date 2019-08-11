'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    perfis_id: DataTypes.INTEGER,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};