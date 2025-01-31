import Sequelize, { Model } from 'sequelize';
import config from '../../../config/database';
import Categoria from '../categorias/model';
import Restaurante from '../restaurantes/model';

const sequelize = new Sequelize(config);

class Produto extends Model {}

Produto.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    categorias_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categorias',
        key: 'id',
      },
      allowNull: null,
    },
    restaurantes_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurantes',
        key: 'id',
      },
      allowNull: false,
    },
    qtd_estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING(100),
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    foto: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize, tableName: 'produtos' },
);

Produto.Categoria = Produto.hasOne(Categoria, {
  foreignKey: 'id',
  sourceKey: 'categorias_id',
  as: 'categoria',
});
Produto.Restaurante = Produto.hasOne(Restaurante, {
  foreignKey: 'id',
  sourceKey: 'restaurantes_id',
  as: 'restaurante',
});

// Produto.Categoria = Produto.belongsTo(Categoria, { foreignKey: 'id', sourceKey: 'categorias_id', as: 'categoria' });
Produto.Restaurante = Produto.belongsTo(Restaurante, { foreignKey: 'id' });

export default Produto;
