require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: false,
  dialect: process.env.DB_TYPE,
  define: {
    freezeTableName: true,
    underscored: true,
    underscoredAll: true,
    paranoid: false,
  },
};
