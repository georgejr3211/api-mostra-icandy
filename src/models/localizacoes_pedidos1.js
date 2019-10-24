'use strict';
module.exports = (sequelize, DataTypes) => {
  const localizacoes_pedidos1 = sequelize.define('localizacoes_pedidos1', {
    metodo_entrega: DataTypes.INTEGER
  }, {});
  localizacoes_pedidos1.associate = function(models) {
    // associations can be defined here
  };
  return localizacoes_pedidos1;
};