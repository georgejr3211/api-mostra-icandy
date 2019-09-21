'use strict';

module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define('produtos', {
    categorias_id: DataTypes.INTEGER,
    restaurantes_id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true
  });

  produtos.associate = function (models) {// associations can be defined here
  };

  return produtos;
};
//# sourceMappingURL=produtos.js.map