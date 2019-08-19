import { Router } from 'express';
import * as resourceService from '../v1/usuarios/service';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const resource = await resourceService.authenticate(email, password);
    if (!resource) {
      return res
        .status(403)
        .json(
          'Falha ao tentar realizar autenticação, informe os dados corretamente',
        );
    }

    return res.json(resource);
  } catch (error) {
    next(error);
  }
});

export default router;
