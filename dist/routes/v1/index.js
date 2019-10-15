"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ctrl = _interopRequireDefault(require("../../api/v1/usuarios/ctrl"));

var _ctrl2 = _interopRequireDefault(require("../../api/v1/perfis/ctrl"));

var _ctrl3 = _interopRequireDefault(require("../../api/v1/statusPedidos/ctrl"));

var _ctrl4 = _interopRequireDefault(require("../../api/v1/categorias/ctrl"));

var _ctrl5 = _interopRequireDefault(require("../../api/v1/restaurantes/ctrl"));

var _ctrl6 = _interopRequireDefault(require("../../api/v1/formasPagamento/ctrl"));

var _ctrl7 = _interopRequireDefault(require("../../api/v1/pedidosProdutos/ctrl"));

var _ctrl8 = _interopRequireDefault(require("../../api/v1/produtos/ctrl"));

var _ctrl9 = _interopRequireDefault(require("../../api/v1/pedidos/ctrl"));

var _ctrl10 = _interopRequireDefault(require("../../api/v1/avaliacoes/ctrl"));

var _ctrl11 = _interopRequireDefault(require("../../api/v1/localizacoes/ctrl"));

var _ctrl12 = _interopRequireDefault(require("../../api/v1/localizacoesPedidos/ctrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/categorias', _ctrl4.default);
router.use('/restaurantes', _ctrl5.default);
router.use('/status-pedidos', _ctrl3.default);
router.use('/perfis', _ctrl2.default);
router.use('/usuarios', _ctrl.default);
router.use('/formas-pagamento', _ctrl6.default);
router.use('/pedidos-produtos', _ctrl7.default);
router.use('/produtos', _ctrl8.default);
router.use('/pedidos', _ctrl9.default);
router.use('/avaliacoes', _ctrl10.default);
router.use('/localizacoes', _ctrl11.default);
router.use('/localizacoes-pedidos', _ctrl12.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map