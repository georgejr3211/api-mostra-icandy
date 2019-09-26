import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import auth from './api/auth/ctrl';
import tokenValidator from './middlewares/tokenValidator';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(
      cors({
        allowedHeaders: ['sessionId', 'Content-Type'],
        exposedHeaders: ['sessionId'],
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
      }),
    );
    this.express.use(morgan('common'));
    this.express.use(compression());
    this.express.use(express.static('public'));
  }

  routes() {
    this.express.use('/auth', auth);
    this.express.use('/', tokenValidator, routes);
    this.express.use('/', errorHandler, (req, res) => {
      res.json({
        message: 'API Mostrar de Talentos 2019',
      });
    });
  }
}

export default new App().express;
