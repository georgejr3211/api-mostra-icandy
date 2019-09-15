'use strict';
module.exports = (sequelize, DataTypes) => {
  const status_pedido = sequelize.define('status_pedido', {
    descricao: DataTypes.STRING
  }, {
    underscored: true,
  });
  status_pedido.associate = function(models) {
    // associations can be defined here
  };
  return status_pedido;
};