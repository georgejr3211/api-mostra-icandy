import { Router } from 'express';
import bcrypt from 'bcryptjs';
import * as resourceService from '../v1/usuarios/service';
import Usuario from '../v1/usuarios/model';

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

router.post('/forgot', async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await Usuario.findOne({ where: { email } });
    const newPassword = 'aqwe3rij';

    await Usuario.update({
      password: bcrypt.hashSync(newPassword),
    }, { where: { id: user.get('id') } });
    await resourceService.sendEmail(email, newPassword);

    return res.json(req.body);
  } catch (error) {
    next(error);
  }
});

export default router;
