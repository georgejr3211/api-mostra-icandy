import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(morgan('common'));
    this.express.use(compression());
  }

  routes() {
    this.express.use('/', routes);

    this.express.use('/', (req, res) => {
      res.json({
        message: 'API Mostrar de Talentos 2019',
      });
    });
  }
}

export default new App().express;
