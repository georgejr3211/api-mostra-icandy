'use strict';
module.exports = (sequelize, DataTypes) => {
  const perfis = sequelize.define('perfis', {
    descricao: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  perfis.associate = function(models) {
    // associations can be defined here
  };
  return perfis;
};