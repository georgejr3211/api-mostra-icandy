'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define('pedidos', {
    formas_pagamento_id: DataTypes.INTEGER,
    usuarios_id: DataTypes.INTEGER,
    status_pedido_id: DataTypes.INTEGER,
    observacao: DataTypes.STRING,
    troco: DataTypes.DECIMAL
  }, {
    underscored: true,
  });
  pedidos.associate = function(models) {
    // associations can be defined here
  };
  return pedidos;
};