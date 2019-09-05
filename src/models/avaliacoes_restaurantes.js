'use strict';
module.exports = (sequelize, DataTypes) => {
  const avaliacoes_restaurantes = sequelize.define('avaliacoes_restaurantes', {
    restaurante_id: DataTypes.INTEGER,
    avaliacao: DataTypes.INTEGER
  }, {});
  avaliacoes_restaurantes.associate = function(models) {
    // associations can be defined here
  };
  return avaliacoes_restaurantes;
};