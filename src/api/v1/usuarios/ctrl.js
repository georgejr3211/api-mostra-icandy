import { Router } from 'express';
import * as resourceService from './service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const resources = await resourceService.getAllResources();

    return res.json(resources);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    return res.json(true);
  } catch (error) {
    return next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    return res.json(true);
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', (req, res, next) => {
  try {
    return res.json(true);
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    return res.json(true);
  } catch (error) {
    return next(error);
  }
});

export default router;
