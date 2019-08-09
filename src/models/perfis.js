'use strict';
module.exports = (sequelize, DataTypes) => {
  const perfis = sequelize.define('perfis', {
    ativo: DataTypes.INTEGER
  }, {});
  perfis.associate = function(models) {
    // associations can be defined here
  };
  return perfis;
};