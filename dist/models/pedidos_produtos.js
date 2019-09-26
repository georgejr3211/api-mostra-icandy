'use strict';

module.exports = (sequelize, DataTypes) => {
  const pedidos_produtos = sequelize.define('pedidos_produtos', {
    pedidos_id: DataTypes.INTEGER,
    produtos_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    underscored: true
  });

  pedidos_produtos.associate = function (models) {// associations can be defined here
  };

  return pedidos_produtos;
};
//# sourceMappingURL=pedidos_produtos.js.map