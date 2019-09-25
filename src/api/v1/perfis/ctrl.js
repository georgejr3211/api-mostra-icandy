import { Router } from 'express';
import * as resourceService from './service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const resources = await resourceService.getAllResources();

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

    return res.json({
      value: resource,
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('PERFIL', req.body);
    let resource = await resourceService.createResource(req.body);
    resource = await resourceService.getResource(resource.id);

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
    console.log(req.body);
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
