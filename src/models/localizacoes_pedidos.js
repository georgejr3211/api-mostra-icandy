'use strict';
module.exports = (sequelize, DataTypes) => {
  const localizacoes_pedidos = sequelize.define('localizacoes_pedidos', {
    pedido_id: DataTypes.INTEGER,
    local_id: DataTypes.INTEGER,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  localizacoes_pedidos.associate = function(models) {
    // associations can be defined here
  };
  return localizacoes_pedidos;
};