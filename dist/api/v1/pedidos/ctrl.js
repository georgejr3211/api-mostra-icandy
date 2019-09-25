"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var resourceService = _interopRequireWildcard(require("./service"));

var pedidoProdutoService = _interopRequireWildcard(require("../pedidosProdutos/service"));

var localizacoesPedidosService = _interopRequireWildcard(require("../localizacoesPedidos/service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const router = (0, _express.Router)();
router.get('/', async (req, res, next) => {
  try {
    const {
      offset = 0,
      limit = 10,
      s = ''
    } = req.query;
    const resources = await resourceService.getAllResources(offset, limit, s);
    return res.json({
      value: resources
    });
  } catch (error) {
    return next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const resource = await resourceService.getResource(id);
    console.log('RESOURCE DATA', resource);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.get('/user/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const resource = await resourceService.getResourceUser(id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    // falta inserir a localizacao
    req.body.troco = req.body.troco ? req.body.troco.replace(',', '.') : 0;
    const payload = {
      formas_pagamento_id: req.body.formas_pagamento_id,
      usuarios_id: req.user.id,
      status_pedido_id: 1,
      observacao: req.body.observacao,
      troco: req.body.troco
    };
    let resource = await resourceService.createResource(payload);
    resource = await resourceService.getResource(resource.id);
    req.body.itens.map(async item => {
      const payloadPedidoProduto = {
        pedidos_id: resource.id,
        produtos_id: item.id,
        quantidade: item.qtd
      };
      await pedidoProdutoService.createResource(payloadPedidoProduto);
    });
    await localizacoesPedidosService.createResource({
      pedido_id: resource.id,
      local_id: req.body.localEntrega
    });
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.put('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    let resource = await resourceService.updateResource(id, req.body);
    resource = await resourceService.getResource(id);
    return res.json({
      value: resource
    });
  } catch (error) {
    return next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    await resourceService.deleteResource(id);
    return res.json({
      value: id
    });
  } catch (error) {
    return next(error);
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=ctrl.js.map