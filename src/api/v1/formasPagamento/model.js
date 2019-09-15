import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';

const sequelize = new Sequelize(config);

class FormaPagamento extends Model {}

FormaPagamento.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    descricao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'formas_pagamentos' },
);

export default FormaPagamento;
