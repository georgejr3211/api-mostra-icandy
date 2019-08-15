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
    nome: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING(70),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(150),
      allowNull: false,
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
