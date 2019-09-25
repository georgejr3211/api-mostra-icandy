import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { validateBr } from 'js-brasil';
import * as resourceService from './service';

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

router.get('/logged-user', async (req, res, next) => {
  try {
    return res.json(req.user);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const resources = await resourceService.getResource(id);

    return res.json({
      value: resources,
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const cpf = validateBr.cpf(req.body.cpf);

    if (cpf) {
      req.body.password = bcrypt.hashSync(req.body.password);
      let resource = await resourceService.createResource(req.body);
      resource = await resourceService.getResource(resource.id);

      return res.json({
        value: resource,
      });
    }
    throw new Error('CPF INVÁLIDO!');
  } catch (error) {
    return next(error.message);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.body);

    let resource = await resourceService.getResource(id);
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password);
    } else {
      req.body.password = resource.get('password');
    }

    resource = await resourceService.updateResource(id, req.body);

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
