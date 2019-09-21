'use strict';

module.exports = (sequelize, DataTypes) => {
  const localizacoes = sequelize.define('localizacoes', {
    local: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true
  });

  localizacoes.associate = function (models) {// associations can be defined here
  };

  return localizacoes;
};
//# sourceMappingURL=localizacoes.js.map