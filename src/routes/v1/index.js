import { Router } from 'express';

import usuariosController from '../../api/v1/usuarios/ctrl';

const router = Router();

router.use('/usuarios', usuariosController);

export default router;
