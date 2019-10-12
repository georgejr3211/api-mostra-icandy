import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Perfil from '../perfis/model';

const sequelize = new Sequelize(config);

class Usuario extends Model {}

Usuario.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    device_id: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    foto: {
      type: Sequelize.STRING(160),
      allowNull: true,
    },
    nome: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING(70),
      allowNull: true,
    },
    username: {
      type: Sequelize.STRING(70),
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING(11),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(150),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    telefone: {
      type: Sequelize.STRING(20),
    },
    perfis_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'perfis',
        key: 'id',
      },
      defaultValue: 1,
      allowNull: true,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'usuarios' },
);

Usuario.Perfil = Usuario.hasOne(Perfil, {
  foreignKey: 'id',
  sourceKey: 'perfis_id',
  as: 'perfil',
});

export default Usuario;
