import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Categoria from '../categorias/model';
import Restaurante from '../restaurantes/model';

const sequelize = new Sequelize(config);

class Produto extends Model {}

Produto.init(
  {
    categorias_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'categorias',
        key: 'id',
      },
    },
    restaurantes_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurantes',
        key: 'id',
      },
    },
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING(100),
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'produtos' },
);

Produto.Categoria = Produto.belongsTo(Categoria, { foreignKey: 'id', sourceKey: 'categorias_id', as: 'categoria' });
Produto.Restaurante = Produto.belongsTo(Restaurante, { foreignKey: 'id', sourceKey: 'restaurantes_id', as: 'restaurante' });

export default Produto;
