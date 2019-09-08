import { Router } from 'express';
import * as resourceService from './service';
import * as pedidoProdutoService from '../pedidosProdutos/service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { offset = 0, limit = 10, s = '' } = req.query;
    const resources = await resourceService.getAllResources(offset, limit, s);

    return res.json({
      value: resources,
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const resource = await resourceService.getResource(id);

    // resource = resource.map(r => r.dataValue);
    // console.log('resource', resource);

    return res.json({
      value: resource,
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const resource = await resourceService.getResourceUser(id);

    return res.json({
      value: resource,
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // falta inserir a localizacao
    const payload = {
      formas_pagamento_id: req.body.formas_pagamento_id,
      usuarios_id: req.user.id,
      status_pedido_id: 1,
      observacao: req.body.observacao,
      troco: req.body.troco.replace(',', '.'),
    };

    let resource = await resourceService.createResource(payload);
    resource = await resourceService.getResource(resource.id);

    req.body.itens.map(async (item) => {
      const payloadPedidoProduto = {
        pedidos_id: resource.id,
        produtos_id: item.id,
        quantidade: item.qtd,
      };

      await pedidoProdutoService.createResource(payloadPedidoProduto);
    });

    return res.json({
      value: resource,
    });
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    let resource = await resourceService.updateResource(id, req.body);
    resource = await resourceService.getResource(id);

    return res.json({
      value: resource,
    });
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await resourceService.deleteResource(id);

    return res.json({
      value: id,
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
