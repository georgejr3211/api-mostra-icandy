import jwt from 'jsonwebtoken';

export default function tokenValidator(req, res, next) {
  try {
    const token = req.header('x-access-token');
    if (!token) {
      res
        .status(403)
        .json(
          'Sem autorização. É necessário informar um token para ter acesso',
        );
    }

    const user = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    if (!user) {
      res
        .status(403)
        .json(
          'Sem autorização. É necessário informar um token válido para ter acesso',
        );
    } else {
      req.user = user;
    }

    next();
  } catch (error) {
    next(error);
  }
}
