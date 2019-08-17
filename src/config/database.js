require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_TYPE,
  operatorAliases: true,
  define: {
    freezeTableName: true,
    underscored: true,
    underscoredAll: true,
    paranoid: false,
  },
};
