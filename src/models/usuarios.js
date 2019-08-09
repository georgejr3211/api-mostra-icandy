'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    ativo: DataTypes.INTEGER
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};