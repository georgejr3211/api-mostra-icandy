import { Router } from 'express';

import usuariosController from '../../api/v1/usuarios/ctrl';
import perfisController from '../../api/v1/perfis/ctrl';
import statusPedidosController from '../../api/v1/statusPedidos/ctrl';
import categoriasController from '../../api/v1/categorias/ctrl';
import restaurantesController from '../../api/v1/restaurantes/ctrl';
import FormasPagamentoController from '../../api/v1/formasPagamento/ctrl';
import PedidosProdutosController from '../../api/v1/pedidosProdutos/ctrl';
import ProdutosController from '../../api/v1/produtos/ctrl';
import PedidosController from '../../api/v1/pedidos/ctrl';
import AvaliacoesController from '../../api/v1/avaliacoes/ctrl';
import LocalizacaoController from '../../api/v1/localizacoes/ctrl';

const router = Router();

router.use('/categorias', categoriasController);
router.use('/restaurantes', restaurantesController);
router.use('/status-pedidos', statusPedidosController);
router.use('/perfis', perfisController);
router.use('/usuarios', usuariosController);
router.use('/formas-pagamento', FormasPagamentoController);
router.use('/pedidos-produtos', PedidosProdutosController);
router.use('/produtos', ProdutosController);
router.use('/pedidos', PedidosController);
router.use('/avaliacoes', AvaliacoesController);
router.use('/localizacoes', LocalizacaoController);

export default router;
