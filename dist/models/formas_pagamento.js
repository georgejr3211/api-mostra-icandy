"use strict";

module.exports = (sequelize, DataTypes) => {
  const formas_pagamento = sequelize.define('formas_pagamento', {
    descricao: DataTypes.STRING,
    ativo: DataTypes.INTEGER
  }, {
    underscored: true
  });

  formas_pagamento.associate = function (models) {// associations can be defined here
  };

  return formas_pagamento;
};
//# sourceMappingURL=formas_pagamento.js.map