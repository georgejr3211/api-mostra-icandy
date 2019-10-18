'use strict';
module.exports = (sequelize, DataTypes) => {
  const produtos_2 = sequelize.define('produtos_2', {
    qtd_estoque: DataTypes.INTEGER
  }, {});
  produtos_2.associate = function(models) {
    // associations can be defined here
  };
  return produtos_2;
};