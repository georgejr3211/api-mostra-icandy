import Sequelize from 'sequelize';
import config from './config/database';

import App from './app';

const server = App;
const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => console.log('Success'))
  .catch(() => console.log('Err'));

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => console.log('Server ON at PORT', PORT));
