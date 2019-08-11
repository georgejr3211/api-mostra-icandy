'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorias = sequelize.define('categorias', {
    nome: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  categorias.associate = function(models) {
    // associations can be defined here
  };
  return categorias;
};