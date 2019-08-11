import { Router } from 'express';

import usuariosController from '../../api/v1/usuarios/ctrl';
import perfisController from '../../api/v1/perfis/ctrl';
import statusPedidosController from '../../api/v1/statusPedidos/ctrl';
import categoriasController from '../../api/v1/categorias/ctrl';

const router = Router();

router.use('/categorias', categoriasController);
router.use('/status-pedidos', statusPedidosController);
router.use('/perfis', perfisController);
router.use('/usuarios', usuariosController);

export default router;
