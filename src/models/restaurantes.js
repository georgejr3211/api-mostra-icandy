'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurantes = sequelize.define('restaurantes', {
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    descricao: DataTypes.STRING,
    telefone: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  restaurantes.associate = function(models) {
    // associations can be defined here
  };
  return restaurantes;
};