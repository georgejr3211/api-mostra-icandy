import { Router } from 'express';
import bcrypt from 'bcryptjs';
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
    req.body.password = bcrypt.hashSync(req.body.password);
    const resource = await resourceService.createResource(req.body);

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
